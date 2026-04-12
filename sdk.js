/**
 * chanio SDK v2.0
 * https://chanio.com/sdk.js
 *
 * One script tag. Every visitor arrives known.
 *
 * Usage:
 *   <script src="https://chanio.com/sdk.js" data-site="your-site-key"></script>
 *
 * Then in your JS:
 *   window.chanio.ready(function(identity) {
 *     if (identity.role === 'surgeon') { ... }
 *     if (identity.conditions.includes('hip_pain')) { ... }
 *   });
 *
 *   // Or synchronously after ready:
 *   const identity = window.chanio.identity;
 */

(function (global) {
  'use strict';

  const SDK_VERSION = '2.0.0';
  const STORAGE_KEY = 'chanio_profile';
  const INFERRED_KEY = 'chanio_inferred';
  const SIGNAL_EVENT = 'chanio_profile';

  // ─── Default identity (anonymous visitor) ─────────────────────────────────

  const DEFAULT_IDENTITY = {
    role: null,
    conditions: [],
    confidence: 0,
    source: 'none',
    plan: 'none',
    lmn: false,
    specialty: '',
    known: false,
    sdk_version: SDK_VERSION
  };

  // ─── Read from localStorage (written by content.js) ───────────────────────

  function readFromStorage() {
    try {
      // Full profile blob written by content.js
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        return {
          role: p.hh_profile || null,
          conditions: p.hh_conditions || [],
          confidence: p.hh_confidence || 100,
          source: p.hh_source || 'manual',
          plan: p.hh_plan || 'none',
          lmn: p.hh_lmn || false,
          specialty: p.hh_specialty || '',
          known: true,
          sdk_version: SDK_VERSION
        };
      }

      // Fallback — read individual keys
      const role = localStorage.getItem('hh_profile');
      if (role) {
        return {
          role,
          conditions: [],
          confidence: 100,
          source: 'manual',
          plan: localStorage.getItem('hh_plan') || 'none',
          lmn: localStorage.getItem('hh_lmn') === 'true',
          specialty: localStorage.getItem('hh_specialty') || '',
          known: true,
          sdk_version: SDK_VERSION
        };
      }
    } catch (e) {
      // localStorage blocked — fail gracefully
    }
    return null;
  }

  // ─── Callback registry ─────────────────────────────────────────────────────

  const readyCallbacks = [];
  let resolved = false;
  let resolvedIdentity = DEFAULT_IDENTITY;

  function resolve(identity) {
    if (resolved) return;
    resolved = true;
    resolvedIdentity = identity;
    for (const cb of readyCallbacks) {
      try { cb(identity); } catch(e) {}
    }
    readyCallbacks.length = 0;
    // Fire DOM event for frameworks that prefer events
    global.dispatchEvent(new CustomEvent('chanio:ready', { detail: identity }));
  }

  // ─── Listen for postMessage from content.js ────────────────────────────────

  global.addEventListener('message', function (e) {
    if (!e.data || e.data.type !== SIGNAL_EVENT) return;
    const p = e.data;
    resolve({
      role: p.profile || null,
      conditions: p.conditions || [],
      confidence: p.confidence || 100,
      source: p.source || 'manual',
      plan: p.plan || 'none',
      lmn: p.lmn || false,
      specialty: p.specialty || '',
      known: !!p.profile,
      sdk_version: SDK_VERSION
    });
  }, false);

  // ─── API fetch — the "click once, known forever" path ─────────────────────
  // When extension is not installed, sdk.js calls chanio.com/api/id with
  // credentials. chanio.com reads its own first-party cookie (set on first
  // visit to any chanio property) and returns the stored identity.
  // This is how Stripe fraud detection and Auth0 silent auth work.

  const API_BASE = 'https://chanio.com';
  let apiFetched = false;

  function fetchFromAPI() {
    if (apiFetched || resolved) return;
    apiFetched = true;

    // First ensure anchor cookie is set (no-op if already set)
    fetch(`${API_BASE}/api/ping`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    }).catch(() => {});

    // Then fetch identity
    fetch(`${API_BASE}/api/id`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Accept': 'application/json' }
    })
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if (resolved) return;
      if (data && data.known) {
        // Cache in localStorage for instant resolution on next same-site visit
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({
            hh_profile: data.role,
            hh_conditions: data.conditions || [],
            hh_confidence: data.confidence,
            hh_source: data.source,
            hh_plan: data.plan,
            hh_lmn: data.lmn,
            hh_specialty: data.specialty,
            chanio_version: data.sdk_version,
            chanio_injected_at: Date.now()
          }));
        } catch(e) {}
        resolve({
          role: data.role,
          conditions: data.conditions || [],
          confidence: data.confidence,
          source: data.source || 'api',
          plan: data.plan || 'none',
          lmn: data.lmn || false,
          specialty: data.specialty || '',
          known: true,
          sdk_version: data.sdk_version
        });
      } else if (!resolved) {
        resolve({ ...DEFAULT_IDENTITY, source: 'api_anonymous' });
      }
    })
    .catch(() => {
      if (!resolved) resolve({ ...DEFAULT_IDENTITY, source: 'api_error' });
    });
  }

  // ─── Polling — fast path via localStorage / extension ─────────────────────

  let pollAttempts = 0;
  const MAX_POLLS = 12;
  const POLL_INTERVAL = 150;

  function poll() {
    pollAttempts++;

    // Fast path: extension already wrote to localStorage
    const identity = readFromStorage();
    if (identity) {
      resolve(identity);
      return;
    }

    if (pollAttempts < MAX_POLLS && !resolved) {
      setTimeout(poll, POLL_INTERVAL);
    } else if (!resolved) {
      // Extension not installed — try API (cookie-based identity)
      fetchFromAPI();
    }
  }

  // ─── Public API ────────────────────────────────────────────────────────────

  global.chanio = {
    version: SDK_VERSION,
    identity: DEFAULT_IDENTITY,

    ready: function (cb) {
      if (typeof cb !== 'function') return;
      if (resolved) {
        try { cb(resolvedIdentity); } catch(e) {}
      } else {
        readyCallbacks.push(cb);
      }
    },

    // Convenience helpers
    is: function (role) {
      return resolvedIdentity.role === role;
    },

    has: function (condition) {
      return (resolvedIdentity.conditions || []).includes(condition);
    },

    known: function () {
      return resolvedIdentity.known === true;
    },

    // For sites that want to pass a site key for analytics
    _siteKey: (function () {
      const el = document.currentScript || document.querySelector('script[data-site]');
      return el ? el.getAttribute('data-site') : null;
    })()
  };

  // Update .identity synchronously as soon as we resolve
  const _origResolve = resolve;
  const wrappedResolve = function(identity) {
    global.chanio.identity = identity;
    _origResolve(identity);
  };

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', poll);
  } else {
    poll();
  }

})(window);

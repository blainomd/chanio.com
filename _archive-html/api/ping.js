/**
 * chanio /api/ping
 *
 * Called once when user visits chanio.com (or any network site via sdk.js).
 * Sets the anchor cookie if not already set.
 * This is the "click once and we know you" moment.
 *
 * The chanio_id is a random UUID — not tied to any personal identifier.
 * Profile and inferred data are stored separately, written by the extension
 * or by explicit user action (vault setup).
 */

import { randomUUID } from 'crypto';

export default function handler(req, res) {
  const origin = req.headers.origin || '';

  // Same CORS setup as /api/id
  const NETWORK_PATTERN = /^https?:\/\/([a-z0-9-]+\.)?(surgeonvalue|co-op\.care|harnesshealth|clinicalswipe|comfortcard|caregoals|solvinghealth|mapofyou|chanio|hippain|shoulderpain|memoryloss|bloodpressure|breathing|hearthealth|pregnancycare|fallprevention|fallrisks|doesyourbackhurt|arthritisrisk|sh-room|opusocial|floorpricer)\.(com|help|org|ai|care)$/;
  const isNetwork = NETWORK_PATTERN.test(origin) || origin === '' || origin.startsWith('http://localhost');

  if (isNetwork && origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Vary', 'Origin');
  }

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const cookieHeader = req.headers.cookie || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [k, ...v] = c.trim().split('=');
      return [k, decodeURIComponent(v.join('='))];
    }).filter(([k]) => k)
  );

  // Only set if not already anchored
  if (!cookies['chanio_id']) {
    const id = randomUUID();
    const ONE_YEAR = 60 * 60 * 24 * 365;
    // SameSite=None; Secure required for cross-origin credentialed requests
    res.setHeader('Set-Cookie', [
      `chanio_id=${id}; Max-Age=${ONE_YEAR}; Path=/; SameSite=None; Secure; HttpOnly`
    ]);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ anchored: true, first_visit: true });
  }

  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ anchored: true, first_visit: false });
}

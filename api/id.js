/**
 * chanio /api/id
 *
 * The identity endpoint. Called by sdk.js on every network site with credentials.
 * chanio.com reads its own first-party cookie and returns the stored identity.
 *
 * Flow:
 *   1. User visits chanio.com → cookie set (chanio_id UUID, 1 year)
 *   2. User visits hippain.help → sdk.js loads from chanio.com
 *   3. sdk.js calls fetch('https://chanio.com/api/id', { credentials: 'include' })
 *   4. This function reads the chanio.com cookie (first-party) and returns identity
 *   5. sdk.js resolves window.chanio.identity — site personalizes
 *
 * This is a first-party cookie + credentialed cross-origin API call.
 * User-initiated. Transparent. No fingerprinting. No third-party tracking.
 */

export default function handler(req, res) {
  const origin = req.headers.origin || '';

  // Only allow requests from chanio network domains
  const ALLOWED_ORIGINS = [
    'https://chanio.com',
    'https://hippain.help',
    'https://shoulderpain.help',
    'https://memoryloss.help',
    'https://bloodpressure.help',
    'https://breathing.help',
    'https://hearthealth.help',
    'https://pregnancycare.help',
    'https://fallprevention.help',
    'https://fallrisks.com',
    'https://doesyourbackhurt.com',
    'https://arthritisrisk.com',
    'https://www.surgeonvalue.com',
    'https://surgeonvalue.com',
    'https://co-op.care',
    'https://www.co-op.care',
    'https://solvinghealth.com',
    'https://www.solvinghealth.com',
    'https://clinicalswipe.com',
    'https://comfortcard.org',
    'https://caregoals.com',
    'https://mapofyou.com',
    'https://www.mapofyou.com',
    'https://harnesshealth.ai',
    'https://www.harnesshealth.ai',
    'https://sh-room.com',
    'https://opusocial.com',
    'https://floorpricer.com',
    // Dev
    'http://localhost:3000',
    'http://localhost:3001',
  ];

  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : null;

  // CORS headers — must match requesting origin exactly for credentials to work
  if (allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Vary', 'Origin');
  }

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Parse cookies
  const cookieHeader = req.headers.cookie || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [k, ...v] = c.trim().split('=');
      return [k, decodeURIComponent(v.join('='))];
    }).filter(([k]) => k)
  );

  const chanioId = cookies['chanio_id'];
  const profileRaw = cookies['chanio_profile'];
  const inferredRaw = cookies['chanio_inferred'];

  // If no chanio_id, user has never visited chanio.com — return anonymous
  if (!chanioId) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({
      known: false,
      role: null,
      conditions: [],
      confidence: 0,
      source: 'no_cookie'
    });
  }

  // Parse stored profile
  let profile = null;
  if (profileRaw) {
    try { profile = JSON.parse(profileRaw); } catch (e) {}
  }

  let inferred = null;
  if (inferredRaw) {
    try { inferred = JSON.parse(inferredRaw); } catch (e) {}
  }

  const active = profile || inferred;

  res.setHeader('Cache-Control', 'no-store, no-cache');
  return res.status(200).json({
    known: !!active?.role,
    chanio_id: chanioId,
    role: active?.hh_profile || active?.role || null,
    conditions: active?.hh_conditions || active?.conditions || [],
    confidence: active?.hh_confidence || active?.confidence || (profile ? 100 : 0),
    source: active?.hh_source || active?.source || (profile ? 'manual' : 'none'),
    plan: active?.hh_plan || 'none',
    lmn: active?.hh_lmn || false,
    specialty: active?.hh_specialty || '',
    sdk_version: '2.0.0'
  });
}

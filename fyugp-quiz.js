import encryptedQuiz from './fyugp-quiz-payload.js';

export const fyugpQuizPath = '/calicut-university-fyugp';
const cookieName = '__Host-fyugp_quiz';
const sessionSeconds = 28800;
const encoder = new TextEncoder();

function decodeBytes(base64) {
  return Uint8Array.from(atob(base64), character => character.charCodeAt(0));
}

async function sessionProof(secret, expires) {
  const key = await crypto.subtle.importKey(
    'raw', decodeBytes(secret), {name:'HMAC', hash:'SHA-256'}, false, ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode('fyugp-session:' + expires));
  return Array.from(new Uint8Array(signature), value => value.toString(16).padStart(2, '0')).join('');
}

const unlockPage = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Calicut University FYUGP | Academic Hub</title>
<style>
body{background:#edf5f0;color:#153236;font:16px/1.55 system-ui,sans-serif;margin:0;padding:16px}
main{max-width:410px;margin:8vh auto;background:white;border:1px solid #cfdfd6;border-radius:18px;padding:24px}
h1{line-height:1.18;margin:8px 0}input,button{display:block;box-sizing:border-box;width:100%;min-height:46px;margin:7px 0 14px;padding:9px 12px;border-radius:9px;font:inherit}
input{border:1px solid #819d91}button{background:#086454;color:white;border:0;font-weight:700;cursor:pointer}a{color:#086454}
[role=alert]{color:#a02520}
</style></head><body><main><small>Academic Hub · Calicut University FYUGP (Regular)</small>
<h1>VAP Session 4 · Idioms Quiz</h1><p>Enter the shared password to open the quiz.</p>
<!-- FEEDBACK -->
<form method="post" action="${fyugpQuizPath}"><label for="password">Password</label>
<input id="password" type="password" name="password" inputmode="numeric" autocomplete="current-password" maxlength="64" required>
<button>Unlock quiz</button></form><a href="/">Back to Academic Hub</a></main></body></html>`;

const semesterPage = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Calicut University FYUGP | Academic Hub</title>
<style>
body{margin:0;padding:20px;background:#edf5f0;color:#153236;font:16px/1.55 system-ui,sans-serif}
main{max-width:620px;margin:5vh auto;padding:clamp(18px,5vw,32px);background:#fff;border:1px solid #cfdfd6;border-radius:18px}
h1{line-height:1.15;margin:8px 0 20px}h2{margin:0 0 10px}h3{margin:0 0 8px}
a{color:#086454}summary{cursor:pointer;font-weight:750;padding:11px 0}
section{padding:15px;border:1px solid #cfdfd6;border-radius:12px}
.quiz{display:block;padding:10px 12px;border-radius:8px;background:#e5f4ec;text-decoration:none;font-weight:700}
.quiz small{display:block;font-weight:400}footer{margin-top:18px}
</style></head><body><main><small>Academic Hub</small>
<h1>Calicut University FYUGP (Regular)</h1>
<details open><summary>IMA DS Semester 1</summary>
<section aria-labelledby="subjects"><h2 id="subjects">Subjects</h2>
<h3>English</h3>
<a class="quiz" href="${fyugpQuizPath}?quiz=idioms">VAP Session 4 · Idioms Quiz
<small>Interactive questions with explanations and past, present, and future examples</small></a>
</section></details>
<footer><a href="/">Back to Academic Hub</a></footer></main></body></html>`;

export async function handleFyugpQuiz(request, env, equals) {
  const headers = new Headers({
    'Cache-Control':'private, no-store',
    'Vary':'Cookie',
    'X-Robots-Tag':'noindex, nofollow',
    'X-Content-Type-Options':'nosniff',
    'Content-Type':'text/html; charset=utf-8'
  });
  const url = new URL(request.url);
  const now = Math.floor(Date.now() / 1000);
  if (!env.FYUGP_QUIZ_PASSWORD || !env.FYUGP_QUIZ_KEY) {
    return new Response('The quiz is temporarily unavailable.', {status:503, headers});
  }
  if (request.method === 'POST') {
    if (request.headers.get('Origin') !== url.origin) return new Response(null, {status:403, headers});
    if (!request.headers.get('Content-Type')?.startsWith('application/x-www-form-urlencoded')) {
      return new Response(null, {status:415, headers});
    }
    const reader = request.body?.getReader();
    if (!reader) return new Response(null, {status:400, headers});
    let size = 0;
    let body = '';
    const decoder = new TextDecoder();
    for (;;) {
      const {done, value} = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 512) {
        await reader.cancel();
        return new Response(null, {status:413, headers});
      }
      body += decoder.decode(value, {stream:true});
    }
    const password = new URLSearchParams(body + decoder.decode()).get('password');
    if (!equals(password, env.FYUGP_QUIZ_PASSWORD)) {
      return new Response(unlockPage.replace('<!-- FEEDBACK -->', '<p role="alert">Incorrect password. Try again.</p>'), {status:403, headers});
    }
    const expires = now + sessionSeconds;
    const proof = await sessionProof(env.FYUGP_QUIZ_KEY, expires);
    headers.set('Location', fyugpQuizPath);
    headers.set('Set-Cookie', `${cookieName}=${expires}.${proof}; Max-Age=${sessionSeconds}; Path=/; Secure; HttpOnly; SameSite=Lax`);
    return new Response(null, {status:303, headers});
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    headers.set('Allow','GET, HEAD, POST');
    return new Response(null, {status:405, headers});
  }
  const session = (request.headers.get('Cookie') || '').match(/(?:^|;\s*)__Host-fyugp_quiz=(\d{1,12})\.([a-f0-9]{64})(?:;|$)/);
  if (!session || Number(session[1]) <= now || !equals(session[2], await sessionProof(env.FYUGP_QUIZ_KEY, session[1]))) {
    return new Response(request.method === 'HEAD' ? null : unlockPage, {headers});
  }
  if (request.method === 'HEAD') return new Response(null, {headers});
  if (url.searchParams.get('quiz') !== 'idioms') return new Response(semesterPage, {headers});
  const key = await crypto.subtle.importKey('raw', decodeBytes(env.FYUGP_QUIZ_KEY), 'AES-GCM', false, ['decrypt']);
  const payload = decodeBytes(encryptedQuiz);
  const html = await crypto.subtle.decrypt({name:'AES-GCM', iv:payload.subarray(0,12)}, key, payload.subarray(12));
  return new Response(html, {headers});
}

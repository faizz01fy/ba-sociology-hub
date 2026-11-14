const quizAppHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#102c31">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<title>Idioms Learning | English Ability Enhancement</title>
<style>
:root {
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-display: 'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif;
  --bg-hero: linear-gradient(135deg, #064e3b 0%, #065f46 45%, #047857 100%);
  --surface: #ffffff;
  --surface-alt: #f8fafc;
  --ink-primary: #0f172a;
  --ink-secondary: #334155;
  --ink-muted: #64748b;
  --emerald-main: #059669;
  --emerald-dark: #065f46;
  --emerald-light: #ecfdf5;
  --emerald-border: #a7f3d0;
  --border-subtle: #e2e8f0;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font-sans);
  color: var(--ink-primary);
  background-color: #f1f5f9;
  line-height: 1.6;
  min-height: 100vh;
}
button, select { font: inherit; color: inherit; }
button { cursor: pointer; }
button:disabled { cursor: not-allowed; }
button:focus-visible, select:focus-visible { outline: 3px solid #3b82f6; outline-offset: 2px; }

.hero {
  background: var(--bg-hero);
  color: #ffffff;
  padding: clamp(14px, 3vw, 22px) 16px clamp(28px, 4.5vw, 36px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(6, 78, 59, 0.25);
}
.hero::before {
  content: "";
  position: absolute;
  top: -40%;
  right: -10%;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, transparent 70%);
  pointer-events: none;
}
.hero::after {
  content: "";
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%);
  pointer-events: none;
}
.wrap {
  width: min(100% - 32px, 860px);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.nav-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #a7f3d0;
  flex-wrap: wrap;
}
.nav-breadcrumbs a {
  color: #d1fae5;
  text-decoration: none;
  transition: color 0.15s ease;
}
.nav-breadcrumbs a:hover {
  color: #ffffff;
  text-decoration: underline;
}
.nav-breadcrumbs span { opacity: 0.75; }

.course-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ecfdf5;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  font-weight: 800;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 6px;
}
.hero h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.4rem, 3.2vw, 1.95rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 10px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
}
.hero p {
  color: #d1fae5;
  font-size: clamp(0.96rem, 2vw, 1.12rem);
  max-width: 64ch;
  line-height: 1.5;
}

main {
  margin-top: -22px !important;
  padding-bottom: 50px;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  margin-bottom: 14px;
  box-shadow: var(--shadow-md);
}
.tabs button {
  flex: 1 1 calc(50% - 8px);
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 14px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: var(--ink-secondary);
  font-weight: 700;
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  transition: all 0.18s ease;
}
@media (min-width: 820px) {
  .tabs button {
    flex: 1 1 0;
  }
}
.tabs button:hover:not([aria-pressed="true"]) {
  background: #f1f5f9;
  color: var(--ink-primary);
}
.tabs button[aria-pressed="true"] {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.35);
}
.tabs button .tab-count {
  font-size: 0.76rem;
  padding: 2px 8px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.08);
}
.tabs button[aria-pressed="true"] .tab-count {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

.card {
  padding: clamp(22px, 5vw, 40px);
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  box-shadow: var(--shadow-xl);
  transition: transform 0.2s ease;
}

.status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--emerald-dark);
}
.status-pill {
  background: var(--emerald-light);
  color: var(--emerald-dark);
  border: 1px solid var(--emerald-border);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.82rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.status-pill::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
}

progress {
  display: block;
  width: 100%;
  height: 9px;
  margin: 12px 0 24px;
  appearance: none;
  border: 0;
  background: #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
}
progress::-webkit-progress-bar { background: #e2e8f0; }
progress::-webkit-progress-value {
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  border-radius: 20px;
}
progress::-moz-progress-bar { background: #059669; }

h2 {
  font-family: var(--font-display);
  margin: 6px 0 14px;
  font-size: clamp(1.4rem, 4vw, 1.95rem);
  font-weight: 700;
  line-height: 1.3;
  color: #0f172a;
  letter-spacing: -0.02em;
}
h2:focus { outline: none; }
.prompt {
  margin: 0 0 20px;
  color: var(--ink-secondary);
  font-size: 1.02rem;
  font-weight: 500;
}

.choices {
  display: grid;
  gap: 10px;
}
.choice {
  display: flex;
  text-align: left;
  align-items: center;
  gap: 14px;
  min-height: 56px;
  padding: 12px 18px;
  border: 1.5px solid #cbd5e1;
  border-radius: 14px;
  background: #ffffff;
  color: var(--ink-primary);
  font-size: 1.02rem;
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  transition: all 0.18s ease;
}
.choice:not(:disabled):hover {
  background: #f8fafc;
  border-color: #059669;
  transform: translateY(-1.5px);
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.12);
}
.letter {
  display: grid;
  place-items: center;
  min-width: 32px;
  height: 32px;
  border-radius: 10px;
  background: #f1f5f9;
  color: #475569;
  font-size: 0.88rem;
  font-weight: 800;
  transition: all 0.18s ease;
}
.choice:not(:disabled):hover .letter {
  background: #d1fae5;
  color: #065f46;
}
.choice.good {
  background: #ecfdf5 !important;
  border-color: #10b981 !important;
  color: #065f46 !important;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.2) !important;
}
.choice.good .letter {
  background: #059669 !important;
  color: #ffffff !important;
}
.choice.bad {
  background: #fef2f2 !important;
  border-color: #ef4444 !important;
  color: #991b1b !important;
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.18) !important;
}
.choice.bad .letter {
  background: #dc2626 !important;
  color: #ffffff !important;
}
.mark {
  margin-left: auto;
  font-weight: 800;
  font-size: 1.25rem;
}

.feedback:not(:empty) { margin-top: 22px; }
.message {
  border-radius: 16px;
  padding: 18px 20px;
  border: 1.5px solid transparent;
  animation: fadeIn 0.25s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.message.good {
  background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
  border-color: #a7f3d0;
  color: #065f46;
}
.message.bad {
  background: linear-gradient(135deg, #fef2f2 0%, #fff1f2 100%);
  border-color: #fecaca;
  color: #991b1b;
}
.message strong {
  display: block;
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 6px;
}
.message p {
  font-size: 0.98rem;
  line-height: 1.55;
  margin: 4px 0;
}

.tense-examples {
  margin: 14px 0 0;
  padding: 14px 0 0;
  list-style: none;
  border-top: 1.5px dashed rgba(6, 95, 70, 0.2);
}
.message.bad .tense-examples {
  border-top-color: rgba(153, 27, 27, 0.2);
}
.tense-examples li {
  font-size: 0.94rem;
  line-height: 1.5;
  margin-top: 6px;
}
.tense-examples strong {
  display: inline-block;
  min-width: 4.6em;
  color: #047857;
  font-weight: 800;
}
.message.bad .tense-examples strong { color: #b91c1c; }

.match {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  gap: 12px 18px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border-subtle);
}
.match label {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
}
select {
  width: 100%;
  min-width: 0;
  min-height: 48px;
  border: 1.5px solid #cbd5e1;
  border-radius: 12px;
  background: #ffffff;
  padding: 8px 12px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink-primary);
  box-shadow: var(--shadow-sm);
  transition: border-color 0.15s ease;
}
select:focus { border-color: #059669; }
.match-feedback {
  grid-column: 1 / -1;
  padding: 12px 16px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  font-size: 0.92rem;
  color: #334155;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  margin-top: 26px;
  flex-wrap: wrap;
}
.primary, .secondary {
  min-height: 48px;
  padding: 10px 22px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.98rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.18s ease;
}
.primary {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: #ffffff;
  border: 0;
  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
}
.primary:not(:disabled):hover {
  background: linear-gradient(135deg, #047857 0%, #064e3b 100%);
  transform: translateY(-1.5px);
  box-shadow: 0 6px 18px rgba(5, 150, 105, 0.45);
}
.primary:disabled {
  background: #e2e8f0;
  color: #94a3b8;
  box-shadow: none;
}
.secondary {
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  color: var(--ink-secondary);
}
.secondary:not(:disabled):hover {
  background: #f8fafc;
  border-color: #94a3b8;
  color: var(--ink-primary);
}
.secondary:disabled { opacity: 0.45; }

.review {
  padding-left: 24px;
  margin: 18px 0;
}
.review li {
  margin-bottom: 16px;
  font-size: 0.98rem;
  line-height: 1.55;
}
.review li strong {
  color: #047857;
  font-size: 1.05rem;
}


/* Previous Year Q&A Styles */
.pyq-container { display: flex; flex-direction: column; gap: 20px; }
.pyq-intro { background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: 14px; padding: 16px 20px; color: #065f46; }
.pyq-intro h3 { font-size: 1.15rem; font-weight: 800; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
.pyq-intro p { font-size: 0.9rem; color: #047857; line-height: 1.5; margin-bottom: 10px; }
.pyq-meta-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.pyq-tag { background: #ffffff; border: 1px solid #6ee7b7; color: #065f46; font-size: 0.76rem; font-weight: 750; padding: 3px 10px; border-radius: 9999px; }
.pyq-nav-filter { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 6px; }
.pyq-filter-btn { padding: 6px 14px; border-radius: 9999px; border: 1.5px solid #cbd5e1; background: #ffffff; font-size: 0.82rem; font-weight: 700; color: #475569; cursor: pointer; transition: all .15s ease; }
.pyq-filter-btn:hover { border-color: #059669; color: #059669; }
.pyq-filter-btn.active { background: #059669; border-color: #059669; color: #ffffff; box-shadow: 0 2px 6px rgba(5, 150, 105, 0.25); }
.pyq-item { background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04); }
.pyq-header { background: #f8fafc; padding: 14px 18px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.pyq-section-badge { background: #102c31; color: #ffffff; font-size: 0.74rem; font-weight: 800; letter-spacing: 0.04em; padding: 3px 9px; border-radius: 6px; text-transform: uppercase; }
.pyq-marks-badge { font-size: 0.78rem; font-weight: 750; color: #059669; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 2px 8px; border-radius: 6px; }
.pyq-question { padding: 18px 20px 14px; }
.pyq-question h4 { font-size: 1.05rem; color: #0f172a; line-height: 1.5; font-weight: 750; }
.pyq-answer-details { border-top: 1px solid #f1f5f9; padding: 18px 20px; background: #ffffff; }
.pyq-answer-title { font-size: 1.02rem; font-weight: 800; color: #065f46; margin-bottom: 6px; }
.pyq-delivery { font-size: 0.86rem; font-style: italic; color: #64748b; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px dashed #e2e8f0; }
.pyq-body { font-size: 0.94rem; line-height: 1.65; color: #334155; }
.pyq-body p { margin-bottom: 12px; }
.dialogue-box { display: flex; flex-direction: column; gap: 8px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; }
.turn { padding: 8px 12px; border-radius: 8px; background: #ffffff; border-left: 3px solid #059669; font-size: 0.92rem; line-height: 1.5; }
.turn .speaker { font-weight: 800; color: #065f46; margin-right: 6px; }
.debate-duo { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 10px; }
@media (max-width: 720px) { .debate-duo { grid-template-columns: 1fr; } }
.debate-side { border-radius: 12px; padding: 16px; display: flex; flex-direction: column; gap: 10px; }
.for-side { background: #f0fdf4; border: 1.5px solid #a7f3d0; }
.against-side { background: #fef2f2; border: 1.5px solid #fecaca; }
.side-badge { font-size: 0.78rem; font-weight: 800; padding: 3px 8px; border-radius: 6px; display: inline-block; align-self: flex-start; }
.for-side .side-badge { background: #059669; color: #fff; }
.against-side .side-badge { background: #dc2626; color: #fff; }
.debate-side h5 { margin: 0; font-size: 0.96rem; font-weight: 800; color: #0f172a; }
.debate-side p { font-size: 0.88rem; color: #475569; margin: 0; }
.debate-side ul { padding-left: 18px; margin: 0; display: flex; flex-direction: column; gap: 8px; }
.debate-side li { font-size: 0.88rem; line-height: 1.5; color: #334155; }
.debate-side li strong { color: #0f172a; }
.pyq-tips { margin-top: 14px; padding: 12px 14px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; }
.pyq-tips-title { font-size: 0.84rem; font-weight: 800; color: #92400e; margin-bottom: 6px; }
.pyq-tips ul { margin: 0; padding-left: 18px; font-size: 0.84rem; color: #78350f; line-height: 1.45; }

.footer {
  text-align: center;
  margin-top: 28px;
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}

@media (max-width: 600px) {
  .match { grid-template-columns: 1fr; gap: 8px; }
  .tabs { flex-direction: column; gap: 4px; }
  .tabs button { padding: 10px; }
  .actions { flex-direction: column-reverse; }
  .actions button { width: 100%; justify-content: center; }
}
</style>
</head>
<body>
<header class="hero"><div class="wrap">
<div class="nav-breadcrumbs"><a href="/">Academic Hub</a> <span>→</span> <a href="/calicut-university-fyugp">FYUGP</a> <span>→</span> <span>IMA DS Semester 1</span> <span>→</span> <span>English</span> <span>→</span> <span id="hero-crumb" style="color:#fff">Idioms Learning</span></div>
<div class="course" id="hero-course">Listening &amp; Speaking · English AEC</div><h1 id="hero-title">Idioms Learning</h1><p id="hero-desc">Learn what common idiomatic expressions mean and practise using them in context.</p></div></header>
<main class="wrap">
<nav class="tabs" aria-label="Learning modes">
<button type="button" data-mode="practice" aria-pressed="true">🎯 Idiom Practice <span class="tab-count" id="count-practice">59 Qs</span></button>
<button type="button" data-mode="context" aria-pressed="false">✍️ Fill in the Blank <span class="tab-count" id="count-context">59 Qs</span></button>
<button type="button" data-mode="match" aria-pressed="false">🧩 Matching Sets <span class="tab-count" id="count-match">12 Sets</span></button>
<button type="button" data-mode="pyq" aria-pressed="false">📝 Previous year Q&amp; A <span class="tab-count" id="count-pyq">9 Qs</span></button>
</nav>
<section class="card" id="card" aria-label="Quiz"></section>
<p class="footer" id="footer-text">Idioms Learning Module · English Ability Enhancement Course · Calicut University FYUGP</p>
</main>
<script>
const idioms = \`
Scrape the barrel|Resort to the least desirable options|After the strongest applicants declined, the team was scraping the barrel.
Burn your boats or bridges|Make it impossible or difficult to go back|Deleting the only backup burned their bridges with the old system.
Break new ground|Do something innovative or unprecedented|The team broke new ground with a design nobody had tried before.
Sell like hot cakes|Sell very quickly|The concert tickets sold like hot cakes and were gone in minutes.
Run around in circles|Make a lot of effort without making progress|We kept discussing the same issue without reaching a decision and ended up running around in circles.
Have an ace up your sleeve|Have a useful secret advantage in reserve|She had an ace up her sleeve: a backup plan nobody else knew about.
A black sheep|A member seen as a disgrace or an outsider by a group|His relatives treated him as the black sheep after he repeatedly stole from the family business.
Down for the count|Be defeated or unable to continue|The runner was down for the count after injuring her ankle and had to leave the race.
Draw the line|Set a limit on what is acceptable|I can help with homework, but I draw the line at doing it for you.
Up a creek without a paddle|Be in trouble with no easy way out|When my phone died and I realised I had no map, I was up a creek without a paddle.
Keep an ear to the ground|Stay alert for news or developments|Keep an ear to the ground for any news about exam dates.
Eat like a horse|Eat a large amount|After training, Ravi ate like a horse and finished three helpings.
A snowball effect|A process that grows as each change triggers another|Late fees increased the debt, leading to even more late fees in a snowball effect.
A chip off the old block|Someone who resembles a parent in character or habits|Maya loves fixing radios just like her father. She is a chip off the old block.
Fair and square|Honestly and according to the rules|Asha won fair and square by following the same rules as everyone else.
A blessing in disguise|Something that seems bad at first but turns out well|Missing the bus was a blessing in disguise because I met an old friend while waiting for the next one.
A dime a dozen|Very common and easy to find|Basic phone cases are a dime a dozen at this market.
Bite the bullet|Face a difficult or unpleasant situation with determination|He bit the bullet and made the difficult call he had been putting off.
Call it a day|Stop working for now|We finished the last task and decided to call it a day.
Cut somebody some slack|Be less critical or demanding of someone|It's her first day, so cut her some slack if she needs extra time.
Cut corners|Skip important steps to save time, effort or money|They cut corners by skipping the safety checks to finish early.
Go back to the drawing board|Start planning again after an idea fails|The prototype failed every test, so we went back to the drawing board.
Hang in there|Keep going through a difficult situation|The course is hard at first, but hang in there and keep practising.
It's not rocket science|Something is fairly easy to understand or do|To join the call, just tap the link. It's not rocket science.
Let someone off the hook|Release someone from an obligation, blame or punishment|The teacher let him off the hook and excused him from the extra assignment.
Miss the boat|Lose an opportunity by acting too late|I missed the boat when I applied after the deadline.
No pain, no gain|Progress often requires hard work or discomfort|Learning to play well took months of daily practice. No pain, no gain.
Pull yourself together|Regain control of your emotions and composure|After the shock, she took a breath and pulled herself together before speaking.
The last straw|The final problem that makes a situation intolerable|The third cancelled lesson was the last straw, so I changed tutors.
The best of both worlds|Enjoy the advantages of two different situations|Working from home two days a week gives me quiet focus and time with colleagues. It's the best of both worlds.
Add insult to injury|Make an already unpleasant situation worse|They lost my bag and, to add insult to injury, charged me to file a claim.
A penny for your thoughts|A friendly way to ask what someone is thinking|You've gone quiet. A penny for your thoughts?
A storm in a teacup|A lot of fuss about a minor issue|The long argument over the colour of one poster was a storm in a teacup.
Bark up the wrong tree|Follow a mistaken lead or blame the wrong person|If you think I took your book, you're barking up the wrong tree. I was away all day.
Bite off more than you can chew|Take on more than you can handle|By joining five clubs during exam week, I bit off more than I could chew.
Break the ice|Help people relax and start talking|A quick game broke the ice at the first meeting.
Compare apples and oranges|Compare things that are too different for a fair comparison|Judging a city bus and a bicycle by the same standards is like comparing apples and oranges.
Cost an arm and a leg|Be very expensive|Replacing the whole roof will cost an arm and a leg.
At the drop of a hat|Immediately and without hesitation|She will come and help at the drop of a hat.
Count your chickens before they hatch|Assume a good outcome before it is certain|Spending the prize money before the winner is announced is counting your chickens before they hatch.
Don't put all your eggs in one basket|Avoid risking everything on a single option|Apply to several colleges. Don't put all your eggs in one basket.
Every cloud has a silver lining|Even a difficult situation can have a positive side|The rain cancelled the match, but it gave us time to rest. Every cloud has a silver lining.
Get a taste of your own medicine|Experience the same unpleasant treatment you gave others|After teasing others all week, he got a taste of his own medicine when they teased him back.
Give someone the cold shoulder|Deliberately ignore or snub someone|She gave him the cold shoulder by refusing to greet him or speak to him.
Go on a wild goose chase|Go on a fruitless search|The address was fake, so looking for the shop sent us on a wild goose chase.
Let the cat out of the bag|Reveal a secret, often accidentally|I let the cat out of the bag when I mentioned the surprise party to the guest of honour.
Live and learn|Learn something from experience, often from a mistake|I used the wrong paint and had to start again. Live and learn.
Look before you leap|Think about the consequences before acting|Read the terms before you sign. Look before you leap.
On thin ice|In a risky position where another mistake could lead to trouble|After two warnings, he was on thin ice and could lose his job if he was late again.
Once in a blue moon|Very rarely|We live far apart and only meet once in a blue moon.
Play devil's advocate|Argue an opposing view to test an idea|I'll play devil's advocate and point out what could go wrong with the plan.
Put something on ice|Temporarily put something on hold|We put the renovation on ice until we could afford it.
Spill the beans|Reveal secret information|Someone spilled the beans about the surprise gift before her birthday.
Take a rain check|Decline an invitation now and suggest doing it another time|I can't make dinner tonight. Can I take a rain check for next week?
Take it with a grain of salt|Treat a claim with some doubt|I took the rumour with a grain of salt until there was proof.
Beat around the bush|Avoid talking directly about the main issue|Stop beating around the bush and tell me why you missed the meeting.
Hard to swallow|Difficult to believe or accept|His excuse was hard to swallow because the details kept changing.
Dig around|Search for information|The reporters dug around in old records to see what had happened.
A bright spark|A clever or lively person|She's a bright spark who solves tricky problems quickly.
\`.trim().split("\\n").map(line => line.split("|"));
const tenseExamples = [
  ["The team scraped the barrel to fill the last slot.", "The team scrapes the barrel when its top candidates turn down the job.", "The team will have to scrape the barrel if nobody else applies."],
  ["He burned his bridges when he insulted his former boss.", "She burns her bridges whenever she quits without notice.", "You'll burn your bridges if you send that angry email."],
  ["The researchers broke new ground with their discovery.", "This lab breaks new ground in battery design.", "The team hopes its next invention will break new ground."],
  ["The tickets sold like hot cakes yesterday.", "These snacks sell like hot cakes at the school fair.", "The new phone will sell like hot cakes when it launches."],
  ["We ran around in circles for hours without finding a solution.", "We run around in circles whenever we argue about the same problem.", "We'll run around in circles if we keep ignoring the cause."],
  ["She had an ace up her sleeve during the debate.", "She has an ace up her sleeve for today's match.", "He'll have an ace up his sleeve if the first plan fails."],
  ["His relatives treated him as the black sheep of the family.", "Her family sees her as the black sheep because she rejects their traditions.", "If he breaks another promise, his relatives will see him as the black sheep."],
  ["The boxer was down for the count after that punch.", "The boxer is down for the count.", "One more hard hit and the boxer will be down for the count."],
  ["I drew the line at lending him more money.", "I draw the line at sharing my password.", "I'll draw the line if they ask me to work every weekend."],
  ["We were up a creek without a paddle when the car broke down.", "I'm up a creek without a paddle now that I've lost my wallet.", "We'll be up a creek without a paddle if our only ride cancels."],
  ["I kept an ear to the ground for news about the results.", "She keeps an ear to the ground for job openings.", "I'll keep an ear to the ground for news about the timetable."],
  ["He ate like a horse after the match.", "He eats like a horse after training.", "He'll eat like a horse after tomorrow's long run."],
  ["One missed payment caused a snowball effect.", "Every new delay makes the snowball effect worse.", "A further delay will create a snowball effect."],
  ["Everyone said Maya was a chip off the old block when she repaired her first radio.", "Maya is a chip off the old block, always fixing things like her father.", "If Maya keeps fixing things like her father, everyone will call her a chip off the old block."],
  ["Asha won the match fair and square.", "Asha always plays fair and square.", "If Asha wins tomorrow, she'll win fair and square."],
  ["Missing that flight was a blessing in disguise.", "Working from home is a blessing in disguise because I get more time with my family.", "This delay will be a blessing in disguise if it gives us time to fix the error."],
  ["Cheap umbrellas were a dime a dozen at the old market.", "Basic phone cases are a dime a dozen here.", "Once production expands, these chargers will be a dime a dozen."],
  ["She bit the bullet and told her teacher about the mistake.", "He usually bites the bullet and admits when he's wrong.", "I'll bite the bullet and make the difficult call tomorrow."],
  ["We called it a day after finishing the report.", "We usually call it a day at six.", "We'll call it a day once we pack the last box."],
  ["The coach cut me some slack when I was new.", "My coach cuts me some slack when I'm recovering from an injury.", "I'll cut you some slack while you learn the rules."],
  ["The builders cut corners by skipping an inspection.", "This contractor cuts corners to finish jobs quickly.", "If we rush the repairs, someone will be tempted to cut corners."],
  ["We went back to the drawing board when the first design failed.", "The team goes back to the drawing board whenever a design fails its tests.", "We'll go back to the drawing board if the next test fails."],
  ["She hung in there even when the training got tough.", "He hangs in there when progress is slow.", "I'll hang in there until the exams are over."],
  ["Setting up the printer wasn't rocket science.", "Changing this setting isn't rocket science.", "Once you've seen the demo, setting it up won't be rocket science."],
  ["The teacher let me off the hook for forgetting the worksheet.", "My coach rarely lets anyone off the hook for missing practice.", "They'll let us off the hook if we explain what happened."],
  ["I missed the boat by applying after the deadline.", "He often misses the boat because he waits too long.", "You'll miss the boat if you don't apply today."],
  ["My coach said, “No pain, no gain,” after a tough session.", "I remind myself, “No pain, no gain,” on hard training days.", "When practice gets tough tomorrow, I'll remind myself, “No pain, no gain.”"],
  ["She pulled herself together before the interview.", "He pulls himself together by taking a few deep breaths.", "I'll pull myself together before I go on stage."],
  ["The third cancelled lesson was the last straw.", "This latest excuse is the last straw.", "One more missed deadline will be the last straw."],
  ["Living near town and working from home gave her the best of both worlds.", "Living near the park gives me the best of both worlds: fresh air and quick access to town.", "Moving to that neighbourhood will give us the best of both worlds."],
  ["They cancelled my booking and, to add insult to injury, kept the deposit.", "The printer wastes paper and, to add insult to injury, jams every morning.", "If they charge a late fee for their own mistake, that will add insult to injury."],
  ["When I went quiet, she said, “A penny for your thoughts?”", "You look deep in thought. A penny for your thoughts?", "If he goes quiet tomorrow, I'll ask, “A penny for your thoughts?”"],
  ["The argument over the poster colour was a storm in a teacup.", "This fuss over the seating plan is a storm in a teacup.", "Once everyone sees how small the issue is, they'll call it a storm in a teacup."],
  ["The detectives barked up the wrong tree when they blamed the driver.", "You're barking up the wrong tree if you think I took your pen.", "You'll be barking up the wrong tree if you keep looking for the key in my bag."],
  ["I bit off more than I could chew when I joined five clubs.", "She often bites off more than she can chew by accepting every task.", "You'll bite off more than you can chew if you take on another project."],
  ["A quick game broke the ice at yesterday's meeting.", "Our teacher breaks the ice with a simple game.", "I'll tell a funny story to break the ice tomorrow."],
  ["We compared apples and oranges when we judged bikes and buses by the same standards.", "Comparing this small café with a hotel buffet is like comparing apples and oranges.", "We'll be comparing apples and oranges if we judge both services on price alone."],
  ["The repairs cost an arm and a leg last year.", "That designer bag costs an arm and a leg.", "Replacing the roof will cost an arm and a leg."],
  ["She left at the drop of a hat when we called.", "He helps his friends at the drop of a hat.", "She'll come at the drop of a hat if you need her."],
  ["I counted my chickens before they hatched when I spent the prize money before the result.", "He counts his chickens before they hatch whenever he spends money he hasn't earned yet.", "You'll be counting your chickens before they hatch if you book a trip before getting leave."],
  ["I spread my savings across several accounts because I didn't want to put all my eggs in one basket.", "She avoids putting all her eggs in one basket by applying to several colleges.", "I'll apply for several jobs so I won't put all my eggs in one basket."],
  ["The match was cancelled, but it gave us a rest. I thought, “Every cloud has a silver lining.”", "When a plan falls through, I remind myself that every cloud has a silver lining.", "If tomorrow's picnic gets rained out, I'll remember that every cloud has a silver lining and enjoy a quiet day at home."],
  ["He got a taste of his own medicine when his friends teased him back.", "He gets a taste of his own medicine whenever his friends beat him at his own game.", "She'll get a taste of her own medicine when her classmates stop sharing their notes with her."],
  ["She gave me the cold shoulder at yesterday's meeting.", "He gives me the cold shoulder whenever I say hello.", "They'll give him the cold shoulder if he keeps ignoring their messages."],
  ["We went on a wild goose chase looking for a shop that had closed years ago.", "This outdated map keeps sending tourists on a wild goose chase.", "We'll go on a wild goose chase if we follow that fake address."],
  ["She let the cat out of the bag about yesterday's surprise party.", "He often lets the cat out of the bag when he gets excited.", "Someone will let the cat out of the bag if we tell the whole class."],
  ["I used the wrong paint yesterday. Live and learn!", "Whenever I make a mistake, I tell myself, “Live and learn.”", "If my first attempt fails tomorrow, I'll say, “Live and learn,” and try again."],
  ["I rushed into the deal and later wished I'd looked before I leapt.", "She looks before she leaps by reading every agreement carefully.", "I'll look before I leap and check the contract before signing tomorrow."],
  ["He was on thin ice after his second warning.", "You're on thin ice after missing two deadlines.", "You'll be on thin ice if you arrive late again."],
  ["When we lived far apart, we met once in a blue moon.", "We meet once in a blue moon these days.", "Once she moves abroad, we'll probably see her once in a blue moon."],
  ["Maya played devil's advocate during yesterday's discussion.", "He often plays devil's advocate to test our ideas.", "I'll play devil's advocate at tomorrow's meeting."],
  ["We put the renovation on ice last month.", "The committee puts new projects on ice when funds run low.", "We'll put the launch on ice until the issue is fixed."],
  ["He spilled the beans about the surprise gift yesterday.", "She sometimes spills the beans when she gets excited.", "I'm afraid he'll spill the beans before the party."],
  ["I took a rain check on dinner last Friday.", "Ravi often takes a rain check when work runs late.", "I'll take a rain check on Saturday's game if my knee still hurts."],
  ["I took his claim with a grain of salt yesterday.", "She takes online rumours with a grain of salt.", "I'll take that prediction with a grain of salt until I see the evidence."],
  ["He beat around the bush before admitting what happened.", "She beats around the bush when the topic makes her uncomfortable.", "He'll beat around the bush if you ask him who broke the vase."],
  ["His excuse was hard to swallow.", "His explanation is hard to swallow.", "That story will be hard to swallow without evidence."],
  ["The reporters dug around in old records last week.", "She digs around in the archives whenever she needs more facts.", "I'll dig around in my old emails for the receipt."],
  ["She was a bright spark in our class last year.", "He's a bright spark who solves puzzles quickly.", "She'll be the bright spark on tomorrow's quiz team."]
];
const queryQuiz = new URLSearchParams(window.location.search).get("quiz");
const is25Mode = queryQuiz === "25" || queryQuiz === "internal-25";

if (is25Mode) {
  document.title = "25 Idioms Test for Internal Exam Prep | English Ability Enhancement";
  const heroCrumb = document.querySelector("#hero-crumb");
  const heroCourse = document.querySelector("#hero-course");
  const heroTitle = document.querySelector("#hero-title");
  const heroDesc = document.querySelector("#hero-desc");
  const footerText = document.querySelector("#footer-text");
  const countPractice = document.querySelector("#count-practice");
  const countContext = document.querySelector("#count-context");
  const countMatch = document.querySelector("#count-match");

  if (heroCrumb) heroCrumb.textContent = "25 Idioms Test for Internal Exam Prep";
  if (heroCourse) heroCourse.innerHTML = "⚡ INTERNAL EXAM PREP · 25 HIGH-YIELD IDIOMS";
  if (heroTitle) heroTitle.textContent = "25 Idioms Test for Internal Exam Prep";
  if (heroDesc) heroDesc.textContent = "25 high-priority idioms for internal exams: MCQs, fill-in-the-blank, and 5 matching sets.";
  if (footerText) footerText.textContent = "25 Idioms Test for Internal Exam Prep · Calicut University FYUGP";
  if (countPractice) countPractice.textContent = "25 Qs";
  if (countContext) countContext.textContent = "25 Qs";
  if (countMatch) countMatch.textContent = "5 Sets";
}

const rawBlanks = [
  {
    "sentence": "After three top candidates turned down the job offer, the committee was ______ to find a replacement.",
    "idiom": "Scrape the barrel",
    "why": "“Scrape the barrel” means resorting to the least desirable choices when better options are exhausted."
  },
  {
    "sentence": "By shouting insults at his former supervisor upon resigning, David chose to ______.",
    "idiom": "Burn your boats or bridges",
    "why": "“Burn your boats or bridges” means making it impossible or very difficult to return to an earlier situation."
  },
  {
    "sentence": "Their groundbreaking research in gene therapy is set to ______ in medical science.",
    "idiom": "Break new ground",
    "why": "“Break new ground” means doing something truly innovative, original, or unprecedented."
  },
  {
    "sentence": "On launch day, the author's new thriller novel began to ______ across all bookstores.",
    "idiom": "Sell like hot cakes",
    "why": "“Sell like hot cakes” means selling out extremely quickly and in high demand."
  },
  {
    "sentence": "Without an agreed agenda, the committee members argued for two hours and ended up ______.",
    "idiom": "Run around in circles",
    "why": "“Run around in circles” means exerting lots of energy and effort without achieving real progress."
  },
  {
    "sentence": "The defense attorney smiled calmly because she still had ______ to reveal in court.",
    "idiom": "Have an ace up your sleeve",
    "why": "“Have an ace up your sleeve” means having a secret, powerful advantage or backup plan in reserve."
  },
  {
    "sentence": "Because he pursued contemporary theatre rather than family medicine, his relatives viewed him as ______.",
    "idiom": "A black sheep",
    "why": "“A black sheep” refers to a member considered odd, disgraced, or an outsider by the family or group."
  },
  {
    "sentence": "After sustaining a severe fracture in the final lap, the marathon runner was ______.",
    "idiom": "Down for the count",
    "why": "“Down for the count” means being completely defeated, exhausted, or incapacitated from continuing."
  },
  {
    "sentence": "I am happy to review your essay draft, but I ______ at doing your homework assignments for you.",
    "idiom": "Draw the line",
    "why": "“Draw the line” means setting a firm moral or practical boundary on what you are willing to accept."
  },
  {
    "sentence": "When his car broke down in the remote jungle and his phone battery died, he was truly ______.",
    "idiom": "Up a creek without a paddle",
    "why": "“Up a creek without a paddle” describes being stuck in a critical predicament with no easy escape."
  },
  {
    "sentence": "Our senior campus representative advised us to ______ for upcoming internship circulars.",
    "idiom": "Keep an ear to the ground",
    "why": "“Keep an ear to the ground” means staying alert, watchful, and informed about emerging developments."
  },
  {
    "sentence": "After running fifteen kilometres along the beach path, the athletes sat down and ______.",
    "idiom": "Eat like a horse",
    "why": "“Eat like a horse” means eating exceptionally large quantities of food with immense appetite."
  },
  {
    "sentence": "A tiny mistake in the balance sheet triggered late penalties and an audit in ______.",
    "idiom": "A snowball effect",
    "why": "“A snowball effect” refers to an escalating sequence where one small event accumulates momentum."
  },
  {
    "sentence": "Vikram demonstrates the same brilliant carpentry craftsmanship as his father; he is ______.",
    "idiom": "A chip off the old block",
    "why": "“A chip off the old block” characterizes someone who closely mirrors a parent's qualities or talents."
  },
  {
    "sentence": "She earned first prize in the national debate championship ______ by honoring all rules.",
    "idiom": "Fair and square",
    "why": "“Fair and square” means achieved honestly, transparently, and strictly according to official regulations."
  },
  {
    "sentence": "Missing the 8 AM express train turned out to be ______ when it derailed later that morning.",
    "idiom": "A blessing in disguise",
    "why": "“A blessing in disguise” is an event that seems unfortunate at first but later yields great fortune."
  },
  {
    "sentence": "Generic plastic phone accessories and cheap keychains are ______ in this weekend flea market.",
    "idiom": "A dime a dozen",
    "why": "“A dime a dozen” denotes items or ideas that are commonplace, abundant, and easily acquired."
  },
  {
    "sentence": "Rather than delaying the uncomfortable dental procedure any longer, she decided to ______.",
    "idiom": "Bite the bullet",
    "why": "“Bite the bullet” means facing a painful, daunting, or unpleasant duty with resolute courage."
  },
  {
    "sentence": "We have finalized all thirty presentation slides, so let us pack up and ______.",
    "idiom": "Call it a day",
    "why": "“Call it a day” means deciding to bring a work session or activity to an end for the time being."
  },
  {
    "sentence": "It is his first shift operating the front dispatch desk, so please ______ if he takes extra time.",
    "idiom": "Cut somebody some slack",
    "why": "“Cut somebody some slack” means showing leniency, patience, and avoiding harsh criticism."
  },
  {
    "sentence": "The building contractors attempted to ______ on foundation concrete, causing structural cracks.",
    "idiom": "Cut corners",
    "why": "“Cut corners” means skipping essential stages or quality measures to save money, time, or labor."
  },
  {
    "sentence": "When the aerodynamics simulation crashed during the first test, the team had to ______.",
    "idiom": "Go back to the drawing board",
    "why": "“Go back to the drawing board” means restarting planning from scratch after an approach completely fails."
  },
  {
    "sentence": "The first semester courses can feel overwhelming at times, but ______ and keep practicing daily.",
    "idiom": "Hang in there",
    "why": "“Hang in there” is an encouraging phrase urging someone to endure hardship and maintain resilience."
  },
  {
    "sentence": "Entering your attendance registration code on the student portal is easy; ______.",
    "idiom": "It's not rocket science",
    "why": "“It's not rocket science” emphasizes that a task is relatively straightforward and uncomplicated."
  },
  {
    "sentence": "The dean forgave his honest bookkeeping oversight and chose to ______ with a simple reminder.",
    "idiom": "Let someone off the hook",
    "why": "“Let someone off the hook” means releasing someone from punishment, culpability, or an obligation."
  },
  {
    "sentence": "If you wait until after tomorrow's final deadline to submit the form, you will totally ______.",
    "idiom": "Miss the boat",
    "why": "“Miss the boat” means losing a valuable opportunity or window of advantage due to tardiness."
  },
  {
    "sentence": "Waking up at 5 AM for endurance drills is painful, but the coach always repeats: ______.",
    "idiom": "No pain, no gain",
    "why": "“No pain, no gain” reminds us that true progress, skill, or strength demands strenuous exertion."
  },
  {
    "sentence": "Wipe away your tears, take a steadying breath, and ______ before entering the interview room.",
    "idiom": "Pull yourself together",
    "why": "“Pull yourself together” means recovering emotional composure, calm control, and focus."
  },
  {
    "sentence": "The third sudden rent increase within four months was ______ that prompted the tenants to move.",
    "idiom": "The last straw",
    "why": "“The last straw” describes the ultimate minor trouble that makes an accumulating burden intolerable."
  },
  {
    "sentence": "Working three days in the office and two from home gives me team interaction and quiet focus; it is ______.",
    "idiom": "The best of both worlds",
    "why": "“The best of both worlds” refers to enjoying the distinct advantages of two contrasting situations."
  },
  {
    "sentence": "The courier misdelivered my passport and then, to ______, demanded a penalty fee for replacement.",
    "idiom": "Add insult to injury",
    "why": "“Add insult to injury” means exacerbating an already humiliating or painful predicament."
  },
  {
    "sentence": "You have been sitting by the window in deep silence for ten minutes; ______?",
    "idiom": "A penny for your thoughts",
    "why": "“A penny for your thoughts” is a warm, polite invitation asking what another person is thinking about."
  },
  {
    "sentence": "Their fierce forty-minute debate regarding what color mug to buy for the staff room was ______.",
    "idiom": "A storm in a teacup",
    "why": "“A storm in a teacup” describes disproportionate excitement, fury, or drama over an insignificant matter."
  },
  {
    "sentence": "If you suspect Priya borrowed your lecture notes, you are ______; she was away all week.",
    "idiom": "Bark up the wrong tree",
    "why": "“Bark up the wrong tree” means directing accusations, efforts, or investigations in the wrong direction."
  },
  {
    "sentence": "By taking on five research electives while preparing for competitive exams, he ______.",
    "idiom": "Bite off more than you can chew",
    "why": "“Bite off more than you can chew” means undertaking responsibilities larger than your capacity."
  },
  {
    "sentence": "A short, fun trivia contest at the start of orientation helped ______ among unfamiliar students.",
    "idiom": "Break the ice",
    "why": "“Break the ice” means easing initial awkwardness, social tension, or shyness in a new group."
  },
  {
    "sentence": "Evaluating a short lyric poem with the exact criteria used for an 800-page historical novel is ______.",
    "idiom": "Compare apples and oranges",
    "why": "“Compare apples and oranges” means comparing things so fundamentally different that comparison is invalid."
  },
  {
    "sentence": "Importing bespoke titanium aircraft components will ______ and severely strain our budget.",
    "idiom": "Cost an arm and a leg",
    "why": "“Cost an arm and a leg” is a common idiom meaning to be exceedingly expensive or financially draining."
  },
  {
    "sentence": "Whenever a junior batchmate asks for programming guidance, Ananya will assist ______.",
    "idiom": "At the drop of a hat",
    "why": "“At the drop of a hat” means taking action instantly, willingly, and without delay."
  },
  {
    "sentence": "Reserving hotel suites before hearing whether the university funded the project is ______.",
    "idiom": "Count your chickens before they hatch",
    "why": "“Count your chickens before they hatch” warns against banking on positive outcomes before they materialize."
  },
  {
    "sentence": "Instead of staking your entire scholarship prospect on a single college application, ______.",
    "idiom": "Don't put all your eggs in one basket",
    "why": "“Don't put all your eggs in one basket” advises diversifying options to avoid risking everything at once."
  },
  {
    "sentence": "The sudden road closure cancelled our trip but gave us time to finish our reports, showing that ______.",
    "idiom": "Every cloud has a silver lining",
    "why": "“Every cloud has a silver lining” conveys that even frustrating circumstances possess a beneficial aspect."
  },
  {
    "sentence": "After years of playing loud music late at night, the arrogant neighbor finally got ______.",
    "idiom": "Get a taste of your own medicine",
    "why": "“Get a taste of your own medicine” means receiving the same harsh or unfair treatment one gave to others."
  },
  {
    "sentence": "Offended by his disrespectful comments at lunch, Maya decided to ______ and refused to answer him.",
    "idiom": "Give someone the cold shoulder",
    "why": "“Give someone the cold shoulder” means intentionally ignoring, snubbing, or displaying cold aloofness."
  },
  {
    "sentence": "Searching the entire town for an unregistered antique shop with a fake address became ______.",
    "idiom": "Go on a wild goose chase",
    "why": "“Go on a wild goose chase” denotes a hopeless, chaotic, and completely futile quest."
  },
  {
    "sentence": "Rohan inadvertently ______ when he congratulated the winner before the official jury announcement.",
    "idiom": "Let the cat out of the bag",
    "why": "“Let the cat out of the bag” means inadvertently disclosing private or surprise information."
  },
  {
    "sentence": "I accidentally formatted my memory card and lost two days of lecture recordings; well, ______.",
    "idiom": "Live and learn",
    "why": "“Live and learn” expresses philosophical acceptance of gaining wisdom through unexpected mistakes."
  },
  {
    "sentence": "Review every clause of the tenancy agreement before handing over the deposit; always ______.",
    "idiom": "Look before you leap",
    "why": "“Look before you leap” stresses considering all risks and repercussions prior to taking bold actions."
  },
  {
    "sentence": "Having arrived an hour late after two previous disciplinary warnings, the clerk is skating ______.",
    "idiom": "On thin ice",
    "why": "“On thin ice” describes walking in an precarious position where the slightest error triggers catastrophe."
  },
  {
    "sentence": "Because her sister lives in California and she works in Calicut, the siblings meet only ______.",
    "idiom": "Once in a blue moon",
    "why": "“Once in a blue moon” is an idiomatic phrase meaning an event transpires extremely infrequently."
  },
  {
    "sentence": "During our product design review, I will ______ to test whether our business model has flaws.",
    "idiom": "Play devil's advocate",
    "why": "“Play devil's advocate” means arguing an opposing viewpoint purely to examine the strength of an idea."
  },
  {
    "sentence": "Because regional tax rates were uncertain, the board chose to ______ until the next fiscal quarter.",
    "idiom": "Put something on ice",
    "why": "“Put something on ice” means temporarily deferring, postponing, or freezing an initiative."
  },
  {
    "sentence": "Please do not ______ regarding the surprise retirement celebration planned for our director.",
    "idiom": "Spill the beans",
    "why": "“Spill the beans” means prematurely or indiscreetly divulging a well-kept secret."
  },
  {
    "sentence": "I cannot join you for coffee this afternoon due to urgent revisions, but can I ______ for Saturday?",
    "idiom": "Take a rain check",
    "why": "“Take a rain check” means declining an invitation gracefully while proposing to reschedule later."
  },
  {
    "sentence": "Until the board issues an authenticated press notice, accept these unverified market rumours ______.",
    "idiom": "Take it with a grain of salt",
    "why": "“Take it with a grain of salt” means regarding assertions with healthy skepticism and reservation."
  },
  {
    "sentence": "Stop ______ and state clearly whether you will attend tomorrow's seminar or not.",
    "idiom": "Beat around the bush",
    "why": "“Beat around the bush” means avoiding direct discussion of the central matter through evasion."
  },
  {
    "sentence": "His claim that he lost his term paper because an alien spacecraft scanned his drive was ______.",
    "idiom": "Hard to swallow",
    "why": "“Hard to swallow” characterizes explanations or statements that are utterly implausible or difficult to accept."
  },
  {
    "sentence": "Investigative reporters had to ______ in dusty municipal property records to uncover the corruption.",
    "idiom": "Dig around",
    "why": "“Dig around” means probing, investigating, and diligently searching for hidden facts."
  },
  {
    "sentence": "With her sharp intellect and lightning-quick logical deductions, young Meera is truly ______.",
    "idiom": "A bright spark",
    "why": "“A bright spark” designates an exceptionally witty, perceptive, or clever individual."
  }
];

const activeIdioms = is25Mode ? idioms.slice(0, 25) : idioms;
const activeBlanks = is25Mode ? rawBlanks.slice(0, 25) : rawBlanks;

// 5 matching sets of 5 idioms (0-24) for 25 mode, 12 matching sets covering syllabus for full mode
const fullMatchingGroups = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34],
  [35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54],
  [55, 56, 57, 58, 0]
];
const matchingGroups = is25Mode ? fullMatchingGroups.slice(0, 5) : fullMatchingGroups;

const shuffle = items => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
const practice = activeIdioms.map(([idiom, meaning, example], index) => {
  const other = activeIdioms.filter((_, i) => i !== index && !([45,52].includes(index) && [45,52].includes(i)));
  return {
    idiomId: index,
    title: idiom,
    prompt: "What does this expression mean?",
    correct: meaning,
    options: shuffle([meaning, ...shuffle(other).slice(0,3).map(item => item[1])]),
    why: example
  };
});
const context = activeBlanks.map((item, index) => {
  const otherIdxs = activeIdioms.map((_, i) => i).filter(i => i !== index);
  const shuffledOther = shuffle(otherIdxs).slice(0, 3).map(i => activeIdioms[i][0]);
  return {
    idiomId: index,
    title: item.sentence,
    prompt: "Choose the idiom that best fills in the blank.",
    correct: item.idiom,
    options: shuffle([item.idiom, ...shuffledOther]),
    why: item.why
  };
});
const lessons = {
  practice,
  context,
  match: matchingGroups.map(ids => ({ids, order: shuffle(ids)}))
};
const makeState = () => ({index: 0, answers: {}, finished: false});
const states = Object.fromEntries(Object.keys(lessons).map(key => [key,makeState()]));
let mode = "practice";
const card = document.querySelector("#card");
const escapeText = value => String(value).replace(/[&<>"']/g, char => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
})[char]);


const pyqQuestions = JSON.parse(decodeURIComponent(escape(atob("W3siaWQiOjEsIm51bSI6MSwic2VjdGlvbiI6IlNlY3Rpb24gQTogU3BlZWNoIFdyaXRpbmcgKDEwIE1hcmtzKSIsInF1ZXN0aW9uIjoiWW91IGFyZSBhIHN1Y2Nlc3NmdWwgaW5kZXBlbmRlbnQgd29tYW4gZW50cmVwcmVuZXVyLiBEcmFmdCBhIHNwZWVjaCBpbnNwaXJpbmcgdGhlIHlvdW5nZXIgZ2VuZXJhdGlvbiBvbiB0aGUgaW1wb3J0YW5jZSBvZiBlZHVjYXRpb24gaW4gbGl2aW5nIGEgbGlmZSBvZiBpbmRlcGVuZGVuY2UuIiwibWV0YSI6IjF4MTAgPSAxMCBNYXJrcyDCtyBTcGVlY2ggV3JpdGluZyDCtyBJbnNwaXJpbmcgdGhlIFlvdXRoIiwic3BlZWNoVGl0bGUiOiJUaGUgU2hpZWxkIG9mIEtub3dsZWRnZTogRWR1Y2F0aW9uIGFzIHRoZSBUcnVlIEVuZ2luZSBvZiBJbmRlcGVuZGVuY2UiLCJzcGVlY2hEZWxpdmVyeSI6IlJlc3BlY3RlZCBkaWduaXRhcmllcyBvbiB0aGUgZGFpcywgdGVhY2hlcnMsIGFuZCBteSBicmlsbGlhbnQgeW91bmcgZnJpZW5kcywiLCJib2R5SHRtbCI6IlxuPHA+PHN0cm9uZz5TYWx1dGF0aW9uICZhbXA7IEhvb2s6PC9zdHJvbmc+IFJlc3BlY3RlZCBmYWN1bHR5LCBtZW50b3JzLCBhbmQgdGhlIHVuc3RvcHBhYmxlIHlvdW5nIG1pbmRzIGdhdGhlcmVkIGhlcmUgdG9kYXnigJRnb29kIG1vcm5pbmcuIFN0YW5kaW5nIGJlZm9yZSB5b3UgYXMgYW4gZW50cmVwcmVuZXVyIHdobyBidWlsdCBhIHZlbnR1cmUgZnJvbSB0aGUgZ3JvdW5kIHVwLCBwZW9wbGUgb2Z0ZW4gYXNrIG1lIGFib3V0IG15IGdyZWF0ZXN0IGFzc2V0LiBXYXMgaXQgaW5pdGlhbCB2ZW50dXJlIGNhcGl0YWw/IFdhcyBpdCBsdWNrPyBPciB3YXMgaXQgbWFya2V0IHRpbWluZz8gTXkgYW5zd2VyIGlzIGFsd2F5cyBpbW1lZGlhdGUgYW5kIHVud2F2ZXJpbmc6IGl0IHdhcyBteSBlZHVjYXRpb24uPC9wPlxuXG48cD48c3Ryb25nPkNvcmUgQXJndW1lbnQ6PC9zdHJvbmc+IEVkdWNhdGlvbiBpcyBuZWl0aGVyIGEgcGFwZXIgY3JlZGVudGlhbCBub3IganVzdCBhbiBlbnRyeSB0aWNrZXQgdG8geW91ciBmaXJzdCBqb2IuIEVkdWNhdGlvbiBpcyB0aGUgdWx0aW1hdGUgYXJjaGl0ZWN0IG9mIGh1bWFuIGRpZ25pdHkgYW5kIHNlbGYtcmVsaWFuY2UuIFdoZW4geW91IGVkdWNhdGUgeW91cnNlbGYsIHlvdSBkbyBub3QgbWVyZWx5IGxlYXJuIGhvdyB0byBhbnN3ZXIgZXhhbWluYXRpb24gcXVlc3Rpb25zOyB5b3UgdHJhaW4geW91ciBtaW5kIHRvIHRoaW5rIGNyaXRpY2FsbHksIGV2YWx1YXRlIHJpc2tzLCBxdWVzdGlvbiBhcmJpdHJhcnkgYm91bmRhcmllcywgYW5kIHNvbHZlIHByb2JsZW1zIHRoYXQgb3RoZXJzIHdhbGsgYXdheSBmcm9tLiBGb3IgYW55IHlvdW5nIGluZGl2aWR1YWzigJRhbmQgcGFydGljdWxhcmx5IGZvciB5b3VuZyB3b21lbuKAlGVkdWNhdGlvbiBpcyB0aGUgc2hpZWxkIHRoYXQgZW5zdXJlcyB5b3UgbmV2ZXIgaGF2ZSB0byBkZXBlbmQgb24gc29tZW9uZSBlbHNlJ3MgbWVyY3ksIHBlcm1pc3Npb24sIG9yIHZhbGlkYXRpb24gdG8gZGVzaWduIHlvdXIgZnV0dXJlLjwvcD5cblxuPHA+PHN0cm9uZz5PdmVyY29taW5nIE9ic3RhY2xlczo8L3N0cm9uZz4gV2hlbiBJIHNldCBvdXQgaW50byB0aGUgYnVzaW5lc3MgZWNvc3lzdGVtLCB0aGUgaGVhZHdpbmRzIHdlcmUgcmVhbC4gVGhlcmUgd2VyZSBtb21lbnRzIG9mIGRvdWJ0LCBmaW5hbmNpYWwgY29uc3RyYWludHMsIGFuZCBza2VwdGljcyB3aG8gYmVsaWV2ZWQgaW5kZXBlbmRlbnQgZW50ZXJwcmlzZSB3YXMgdG9vIHR1cmJ1bGVudCBhIHBhdGguIEJ1dCBib29rcywgaW50ZWxsZWN0dWFsIGRpc2NpcGxpbmUsIGFuZCBhY2FkZW1pYyBncm91bmRpbmcgdGF1Z2h0IG1lIHJlc2lsaWVuY2UuIEZpbmFuY2lhbCBsaXRlcmFjeSBnYXZlIG1lIHRoZSBjb25maWRlbmNlIHRvIHJlYWQgYmFsYW5jZSBzaGVldHM7IGNvbW11bmljYXRpb24gc2tpbGxzIGdhdmUgbWUgdGhlIHZvaWNlIHRvIG5lZ290aWF0ZSBpbiBib2FyZHJvb21zOyBhbmQgZXRoaWNhbCBlZHVjYXRpb24gdGF1Z2h0IG1lIHRvIGxlYWQgd2l0aCBlbXBhdGh5LjwvcD5cblxuPHA+PHN0cm9uZz5DYWxsIHRvIEFjdGlvbjo8L3N0cm9uZz4gRG8gbm90IHRyZWF0IHlvdXIgc3R1ZGVudCB5ZWFycyBsaWdodGx5LiBHdWFyZCB5b3VyIGN1cmlvc2l0eSB3aXRoIGZpZXJjZSBkZWRpY2F0aW9uLiBMZWFybiBzY2llbmNlLCB1bmRlcnN0YW5kIGZpbmFuY2UsIG1hc3RlciBkaWdpdGFsIHRvb2xzLCBhbmQgYXJ0aWN1bGF0ZSB5b3VyIHRob3VnaHRzIHdpdGggYm9sZG5lc3MuIFdoZW4geW91IG1hc3RlciB5b3VyIGtub3dsZWRnZSwgeW91IG1hc3RlciB5b3VyIGRlc3RpbnkuIFN0ZXAgZm9yd2FyZCBpbnRvIHRoZSB3b3JsZCBub3Qgc2Vla2luZyBwYXRyb25zLCBidXQgYXMgYXJjaGl0ZWN0cyBvZiB5b3VyIG93biBpbmRlcGVuZGVuY2UuIFRoYW5rIHlvdSwgYW5kIG1heSB5b3VyIGpvdXJuZXkgYmUgbGltaXRsZXNzITwvcD5cbiIsImV4YW1UaXBzIjpbIkZvbGxvdyBzdGFuZGFyZCBzcGVlY2ggc3RydWN0dXJlOiBFbmdhZ2luZyBzYWx1dGF0aW9uLCBzZWxmLWludHJvZHVjdGlvbiwgY29yZSBtZXNzYWdlLCBzdXBwb3J0aW5nIGV4YW1wbGVzLCBhbmQgbWVtb3JhYmxlIGNhbGwgdG8gYWN0aW9uLiIsIlVzZSByaGV0b3JpY2FsIHF1ZXN0aW9ucyBhbmQgZGlyZWN0IGFkZHJlc3MgKCdteSBmcmllbmRzJywgJ2FzayB5b3Vyc2VsZicpIHRvIGtlZXAgbGlzdGVuZXJzIGludmVzdGVkLiIsIkFkb3B0IGFuIHVwbGlmdGluZywgYXV0aG9yaXRhdGl2ZSB5ZXQgcmVsYXRhYmxlIHRvbmUuIl19LHsiaWQiOjIsIm51bSI6Miwic2VjdGlvbiI6IlNlY3Rpb24gQTogU3BlZWNoIFdyaXRpbmcgKDEwIE1hcmtzKSIsInF1ZXN0aW9uIjoiWW91IGFyZSBhbiBlbnZpcm9ubWVudGFsIGVkdWNhdG9yLiBZb3UgYXJlIGludml0ZWQgdG8gc3BlYWsgYXQgYSBzZW1pbmFyIG9uIGNsaW1hdGUgY2hhbmdlLiBXcml0ZSBhIHNwZWVjaCBvbiB0aGlzIHRvcGljLiIsIm1ldGEiOiIxeDEwID0gMTAgTWFya3MgwrcgU3BlZWNoIFdyaXRpbmcgwrcgQ2xpbWF0ZSBBY3Rpb24gJiBSZXNwb25zaWJpbGl0eSIsInNwZWVjaFRpdGxlIjoiQmV5b25kIFRoZSBUaXBwaW5nIFBvaW50OiBUdXJuaW5nIEVjb2xvZ2ljYWwgQ29uc2Npb3VzbmVzcyBpbnRvIFVyZ2VudCBBY3Rpb24iLCJzcGVlY2hEZWxpdmVyeSI6IkRpc3Rpbmd1aXNoZWQgZ3Vlc3RzLCBmZWxsb3cgcmVzZWFyY2hlcnMsIGFuZCBjb25zY2lvdXMgY2l0aXplbnMsIiwiYm9keUh0bWwiOiJcbjxwPjxzdHJvbmc+T3BlbmluZyBJbXBhY3Q6PC9zdHJvbmc+IEdvb2QgbW9ybmluZy4gV2UgZ2F0aGVyIGhlcmUgdG9kYXkgdW5kZXIgdGhlIGJhbm5lciBvZiBjbGltYXRlIHNjaWVuY2UsIGJ1dCBsZXQgdXMgYmVnaW4gd2l0aCBjb21wbGV0ZSBob25lc3R5OiBjbGltYXRlIGNoYW5nZSBpcyBubyBsb25nZXIgYSBkaXN0YW50IHRoZW9yZXRpY2FsIGdyYXBoIHByb2plY3RpbmcgdGVtcGVyYXR1cmVzIGludG8gdGhlIGxhdGUgdHdlbnR5LWZpcnN0IGNlbnR1cnkuIEl0IGlzIHRoZSBzY29yY2hpbmcgaGVhdHdhdmUgZHJ5aW5nIG91ciB3YXRlcnNoZWRzLCB0aGUgdW5zZWFzb25hbCBmbG9vZHMgc3VibWVyZ2luZyBhZ3JpY3VsdHVyYWwgaGVhcnRsYW5kcywgYW5kIHRoZSByaXNpbmcgc2VhIGxldmVscyBjaGlwcGluZyBhd2F5IGF0IGNvYXN0YWwgY29tbXVuaXRpZXMgcmlnaHQgb3V0c2lkZSBvdXIgd2luZG93cy48L3A+XG5cbjxwPjxzdHJvbmc+U2NpZW50aWZpYyBDb250ZXh0Ojwvc3Ryb25nPiBBcyBhbiBlbnZpcm9ubWVudGFsIGVkdWNhdG9yIHdobyBzcGVuZHMgdGltZSBib3RoIGluIHNjaWVudGlmaWMgbGFib3JhdG9yaWVzIGFuZCBydXJhbCBlY29zeXN0ZW1zLCBJIGhhdmUgd2l0bmVzc2VkIHRoZSBmcmFnaWxlIGJhbGFuY2UgdW5yYXZlbC4gVGhlIHNjaWVudGlmaWMgY29uc2Vuc3VzIGlzIHVuYW5pbW91c+KAlHdlIGFyZSBmYXN0IGFwcHJvYWNoaW5nIHBsYW5ldGFyeSB0aXBwaW5nIHBvaW50cy4gQ2FyYm9uIGVtaXNzaW9ucywgdW5hYmF0ZWQgZGVmb3Jlc3RhdGlvbiwgYW5kIGluZHVzdHJpYWwgd2FzdGUgaGF2ZSBkZXN0YWJpbGl6ZWQgY3ljbGVzIHRoYXQgdG9vayBtaWxsaW9ucyBvZiB5ZWFycyB0byBzdGFiaWxpemUuIFlldCwgZGVzcGFpciBpcyBhIGx1eHVyeSB0aGUgY3VycmVudCBnZW5lcmF0aW9uIGNhbm5vdCBhZmZvcmQuIERlc3BhaXIgbGVhZHMgdG8gaW5hY3Rpb24sIGFuZCBpbmFjdGlvbiBpcyBzdXJyZW5kZXIuPC9wPlxuXG48cD48c3Ryb25nPlN5c3RlbWljICZhbXA7IExvY2FsIEFjdGlvbjo8L3N0cm9uZz4gUmVhbCBlbnZpcm9ubWVudGFsIHRyYW5zaXRpb24gZGVtYW5kcyBhIGR1YWwgYXBwcm9hY2g6IHN5c3RlbWljIHBvbGljeSBhY2NvdW50YWJpbGl0eSBhbmQgZ3Jhc3Nyb290cyBlY29sb2dpY2FsIHJlc3BvbnNpYmlsaXR5LiBXZSBtdXN0IGRlbWFuZCBjYXJib24gdGF4YXRpb24sIHJlbmV3YWJsZSBncmlkIGludGVncmF0aW9uLCBhbmQgc3RyaWN0IGNvbnNlcnZhdGlvbiBsYXdzIGZyb20gb3VyIHBvbGljeW1ha2Vycy4gQ29uY3VycmVudGx5LCBpbiBvdXIgdW5pdmVyc2l0aWVzIGFuZCBob21lcywgd2UgbXVzdCBwaW9uZWVyIGEgemVyby13YXN0ZSBjdWx0dXJlLCByZWdlbmVyYXRlIG5hdGl2ZSBncmVlbiBjb3ZlcnMsIGFuZCB0cmFuc2l0aW9uIGF3YXkgZnJvbSBzaW5nbGUtdXNlIHBsYXN0aWNzLiBFdmVyeSB1bml0IG9mIGVuZXJneSBjb25zZXJ2ZWQgYW5kIGV2ZXJ5IGxvY2FsIGJpb2RpdmVyc2l0eSBwYXRjaCBwcmVzZXJ2ZWQgc3RyZW5ndGhlbnMgY29tbXVuaXR5IHJlc2lsaWVuY2UuPC9wPlxuXG48cD48c3Ryb25nPkNsb3NpbmcgQ2hhcmdlOjwvc3Ryb25nPiBUaGUgRWFydGggd2lsbCBlbmR1cmU7IHRoZSBxdWVzdGlvbiBpcyB3aGV0aGVyIGh1bWFuIGNpdmlsaXphdGlvbiB3aWxsIG1haW50YWluIHRoZSBlbnZpcm9ubWVudGFsIGdyYWNlIHRvIGxpdmUgdXBvbiBpdC4gTGV0IGhpc3RvcnkgcmVjb3JkIHRoYXQgd2hlbiBvdXIgcGxhbmV0IHN0b29kIGF0IHRoZSBjcm9zc3JvYWRzIG9mIGVjb2xvZ2ljYWwgY3Jpc2lzLCB0aGlzIGdlbmVyYXRpb24gZGlkIG5vdCBvZmZlciBleGN1c2Vz4oCUd2Ugb2ZmZXJlZCBjb3VyYWdlLCBpbnRlbGxlY3QsIGFuZCBjb2xsZWN0aXZlIHJlbmV3YWwuIExldCB1cyBhY3QgdG9kYXkuIFRoYW5rIHlvdS48L3A+XG4iLCJleGFtVGlwcyI6WyJCYWxhbmNlIGFsYXJtaW5nIGVudmlyb25tZW50YWwgZmFjdHMgd2l0aCBlbXBvd2VyaW5nLCBhY3Rpb25hYmxlIHNvbHV0aW9ucy4iLCJJbmNvcnBvcmF0ZSBlbnZpcm9ubWVudGFsIHRlcm1pbm9sb2d5IG5hdHVyYWxseTogdGlwcGluZyBwb2ludHMsIGJpb2RpdmVyc2l0eSwgY2FyYm9uIGZvb3RwcmludCwgZWNvbG9naWNhbCByZXNpbGllbmNlLiIsIkNvbmNsdWRlIHdpdGggYW4gaW1wYXNzaW9uZWQgYXBwZWFsIHRoYXQgbGluZ2VycyBpbiB0aGUgbWluZHMgb2YgdGhlIGF1ZGllbmNlLiJdfSx7ImlkIjozLCJudW0iOjMsInNlY3Rpb24iOiJTZWN0aW9uIEE6IFNwZWVjaCBXcml0aW5nICgxMCBNYXJrcykiLCJxdWVzdGlvbiI6IllvdSBhcmUgYSBzb2NpYWwgbWVkaWEgc3Rhci4gWW91IGFyZSBpbnZpdGVkIHRvIGluYXVndXJhdGUgYSBmdW5jdGlvbi4gV3JpdGUgYSBzcGVlY2ggb24gdGhlIGltcGFjdCBvZiBzb2NpYWwgbWVkaWEgb24gdGhlIHlvdW5nIGdlbmVyYXRpb24uIiwibWV0YSI6IjF4MTAgPSAxMCBNYXJrcyDCtyBTcGVlY2ggV3JpdGluZyDCtyBTb2NpYWwgTWVkaWEgSW1wYWN0Iiwic3BlZWNoVGl0bGUiOiJDdXJhdGVkIEZlZWRzIHZzLiBBdXRoZW50aWMgTGl2ZXM6IE1hc3RlcmluZyB0aGUgQWxnb3JpdGhtIEJlZm9yZSBJdCBNYXN0ZXJzIFlvdSIsInNwZWVjaERlbGl2ZXJ5IjoiUmVzcGVjdGVkIG9yZ2FuaXNlcnMsIHRlYWNoZXJzLCBjcmVhdGl2ZSBtaW5kcywgYW5kIGJlbG92ZWQgZnJpZW5kcywiLCJib2R5SHRtbCI6IlxuPHA+PHN0cm9uZz5SZWxhdGFibGUgT3BlbmluZzo8L3N0cm9uZz4gR29vZCBtb3JuaW5nIGV2ZXJ5b25lISBJdCBpcyBhbiBpbW1lbnNlIHByaXZpbGVnZSB0byBpbmF1Z3VyYXRlIHRoaXMgdmlicmFudCBldmVudC4gTW9zdCBvZiB5b3UgcHJvYmFibHkga25vdyBtZSB0aHJvdWdoIGEgZ2xvd2luZyByZWN0YW5ndWxhciBzY3JlZW7igJRhIHR3by1taW51dGUgdmlkZW8gcmVlbCwgYSB2aXJhbCBzb3VuZGJpdGUsIG9yIGEgY2FyZWZ1bGx5IGNvbG9yLWdyYWRlZCBwaG90b2dyYXBoLiBCdXQgdG9kYXksIHN0YW5kaW5nIGJlZm9yZSB5b3UgaW4gdGhyZWUgZGltZW5zaW9ucywgSSB3YW50IHRvIHN0ZXAgYmVoaW5kIHRoZSBjYW1lcmEgZmlsdGVyIGFuZCBzcGVhayBmcm9tIHRoZSBoZWFydCBhYm91dCB0aGUgZG91YmxlLWVkZ2VkIHN3b3JkIHNoYXBpbmcgb3VyIGdlbmVyYXRpb246IHNvY2lhbCBtZWRpYS48L3A+XG5cbjxwPjxzdHJvbmc+VGhlIEJyaWdodCBTaWRlOjwvc3Ryb25nPiBMZXQgdXMgYWNrbm93bGVkZ2UgdGhlIGltbWVuc2UgZGVtb2NyYXRpYyBwb3dlciBvZiBzb2NpYWwgcGxhdGZvcm1zLiBOZXZlciBpbiBodW1hbiBoaXN0b3J5IGhhcyBhIHRlZW5hZ2VyIHdpdGggYSBzbWFydHBob25lIGhhZCB0aGUgcG93ZXIgdG8gYnJvYWRjYXN0IHBvZXRyeSB0byBtaWxsaW9ucywgY3Jvd2RmdW5kIHJlbGllZiBmdW5kcyBkdXJpbmcgbmF0dXJhbCBkaXNhc3RlcnMsIG9yZ2FuaXplIHNvY2lhbCBtb3ZlbWVudHMsIG9yIGxhdW5jaCBpbnRlcm5hdGlvbmFsIGNyZWF0aXZlIHZlbnR1cmVzIHdpdGhvdXQgd2FpdGluZyBmb3IgdHJhZGl0aW9uYWwgZ2F0ZWtlZXBlcnMuIFNvY2lhbCBtZWRpYSBoYXMgY3JlYXRlZCBjb21tdW5pdGllcyB3aGVyZSBtYXJnaW5hbGl6ZWQgdm9pY2VzIGZpbmQgc29sYWNlLCBzb2xpZGFyaXR5LCBhbmQgZW1wb3dlcm1lbnQuPC9wPlxuXG48cD48c3Ryb25nPlRoZSBIaWRkZW4gQ29zdDo8L3N0cm9uZz4gQnV0IGFzIHNvbWVvbmUgd2hvIG5hdmlnYXRlcyB0aGUgZGlnaXRhbCBlbmdpbmUgZGFpbHksIEkgc2VlIHRoZSBzaGFkb3dzIGFzIGNsZWFybHkgYXMgdGhlIHNwb3RsaWdodC4gQWxnb3JpdGhtcyBhcmUgZW5naW5lZXJlZCBub3QgZm9yIHlvdXIgbWVudGFsIGhlYWx0aCwgYnV0IGZvciB5b3VyIGNvbnRpbnVvdXMgZW5nYWdlbWVudC4gSW4gdGhlIHB1cnN1aXQgb2YgYWxnb3JpdGhtaWMgYXBwcm92YWwsIHdlIHJpc2sgdHJhZGluZyBkZWVwIGZvY3VzIGZvciBkb3BhbWluZSBoaXRzLCBhbmQgYXV0aGVudGljIHJlYWxpdHkgZm9yIGN1cmF0ZWQgcGVyZmVjdGlvbi4gQ29tcGFyaXNvbiBpcyB0aGUgdGhpZWYgb2Ygam95LCBhbmQgY29tcGFyaW5nIHlvdXIgYmVoaW5kLXRoZS1zY2VuZXMgcmVhbGl0eSB3aXRoIHNvbWVvbmUgZWxzZSdzIGhpZ2hsaWdodCByZWVsIGJyZWVkcyBhbnhpZXR5IGFuZCBsb25lbGluZXNzLiBGdXJ0aGVybW9yZSwgdGhlIGRpZ2l0YWwgZWNobyBjaGFtYmVyIG9mdGVuIGVyb2RlcyBvdXIgYWJpbGl0eSB0byBlbmdhZ2Ugd2l0aCBudWFuY2VkLCBkaXZlcnNlIHZpZXdwb2ludHMuPC9wPlxuXG48cD48c3Ryb25nPlRoZSBQcmVzY3JpcHRpb246PC9zdHJvbmc+IE15IGRlYXIgZnJpZW5kcywgdXNlIHNvY2lhbCBtZWRpYSBhcyBhIHRvb2wgdG8gY3JlYXRlLCB0byBsZWFybiwgYW5kIHRvIGNvbm5lY3TigJRuZXZlciBhcyBhIG1pcnJvciB0byBkZXRlcm1pbmUgeW91ciBzZWxmLXdvcnRoLiBCdWlsZCBkaWdpdGFsIGRpc2NpcGxpbmU6IGN1cmF0ZSB5b3VyIGZlZWQgd2l0aCBjcmVhdG9ycyB3aG8gZWR1Y2F0ZSBhbmQgaW5zcGlyZSwgdGFrZSByZWd1bGFyIHNjcmVlbiBkZXRveGVzLCBhbmQgbnVydHVyZSBvZmZsaW5lIGZyaWVuZHNoaXBzLiBMZXQgc29jaWFsIG1lZGlhIGFtcGxpZnkgeW91ciBnaWZ0cywgYnV0IG5ldmVyIGxldCBpdCBkaWN0YXRlIHlvdXIgc291bC4gSSB0YWtlIGltbWVuc2Ugam95IGluIGRlY2xhcmluZyB0aGlzIGV2ZW50IG9mZmljaWFsbHkgb3BlbiEgVGhhbmsgeW91ITwvcD5cbiIsImV4YW1UaXBzIjpbIkFja25vd2xlZGdlIHRoZSBzcGVha2VyIHBlcnNvbmE6IFNwZWFrIGFzIGEgc29jaWFsIG1lZGlhIGNyZWF0b3Igd2l0aCBhdXRoZW50aWMgaW5zaWRlciBpbnNpZ2h0cy4iLCJNYWludGFpbiBhIGJhbGFuY2VkIHZpZXc6IGhpZ2hsaWdodCBkZW1vY3JhdGljIGNyZWF0aXZpdHkgd2hpbGUgY3JpdGlxdWluZyBhbGdvcml0aG1pYyBhZGRpY3Rpb24gYW5kIG1lbnRhbCBoZWFsdGggaW1wYWN0cy4iLCJJbmNsdWRlIHRoZSBvZmZpY2lhbCBjZXJlbW9uaWFsIGluYXVndXJhdGlvbiBwaHJhc2UgdG93YXJkcyB0aGUgZW5kLiJdfSx7ImlkIjo0LCJudW0iOjQsInNlY3Rpb24iOiJTZWN0aW9uIEI6IENvbnZlcnNhdGlvbiBXcml0aW5nICgxNSBNYXJrcykiLCJxdWVzdGlvbiI6IldyaXRlIGEgY29udmVyc2F0aW9uIGFtb25nIHlvdXIgY2xhc3NtYXRlcyByZWdhcmRpbmcgdGhlIGNoYW5nZXMgdGhhdCB5b3Ugd2FudCB0byBzZWUgaW4gdGhlIFVuaXZlcnNpdHkuIChBdCBsZWFzdCAxNSB0dXJucywgd2l0aCBlYWNoIHR1cm4gYnkgYSBkaWZmZXJlbnQgc3BlYWtlcikuIiwibWV0YSI6IjF4MTUgPSAxNSBNYXJrcyDCtyBDb252ZXJzYXRpb24gV3JpdGluZyDCtyBVbml2ZXJzaXR5IFJlZm9ybXMgKDE2IERpc3RpbmN0IFR1cm5zKSIsInNwZWVjaFRpdGxlIjoiRGlhbG9ndWU6IFJlaW1hZ2luaW5nIE91ciBVbml2ZXJzaXR5IENhbXB1cyBmb3IgMjFzdCBDZW50dXJ5IE5lZWRzIiwic3BlZWNoRGVsaXZlcnkiOiJTZXR0aW5nOiBDb2xsZWdlIGNvdXJ0eWFyZCBkdXJpbmcgdGhlIGFmdGVybm9vbiBicmVhay4gQ2xhc3NtYXRlcyBSYWh1bCwgQW5hbnlhLCBhbmQgRmFyaGFuIGRpc2N1c3MgY2FtcHVzIGltcHJvdmVtZW50cy4iLCJib2R5SHRtbCI6IlxuPGRpdiBjbGFzcz1cImRpYWxvZ3VlLWJveFwiPlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjEuIFJhaHVsOjwvc3Bhbj4gSGV5IGd1eXMsIGRpZCB5b3Ugbm90aWNlIGhvdyBvdmVyY3Jvd2RlZCB0aGUgY2VudHJhbCBsaWJyYXJ5IHN0dWR5IGhhbGwgd2FzIHRoaXMgbW9ybmluZyBiZWZvcmUgdGhlIGludGVybmFsIHRlc3Q/PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+Mi4gQW5hbnlhOjwvc3Bhbj4gQWJzb2x1dGVseSEgSSBoYWQgdG8gd2FuZGVyIGFjcm9zcyB0aHJlZSBmbG9vcnMganVzdCB0byBmaW5kIGEgc2luZ2xlIGRlc2sgd2l0aCBhIGZ1bmN0aW9uaW5nIHBvd2VyIG91dGxldC48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj4zLiBGYXJoYW46PC9zcGFuPiBUaGF0IGlzIGV4YWN0bHkgd2h5IHVuaXZlcnNpdHkgaW5mcmFzdHJ1Y3R1cmUgbmVlZHMgdXJnZW50IG1vZGVybml6aW5nLiBXZSBuZWVkIGRlZGljYXRlZCAyNHg3IGNvbGxhYm9yYXRpdmUgc3R1ZHkgbG91bmdlcyB3aXRoIGhpZ2gtc3BlZWQgY2FtcHVzIFdpLUZpLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjQuIFJhaHVsOjwvc3Bhbj4gVGhhdCBpcyBhIHNvbGlkIHBvaW50LCBGYXJoYW4uIEFuZCB3aGlsZSB3ZSB0YWxrIGFib3V0IHRlY2ggZmFjaWxpdGllcywgb3VyIHN0dWRlbnQgcG9ydGFsIGlzIGFub3RoZXIgaGVhZGFjaGXigJRpdCBjb25zdGFudGx5IGNyYXNoZXMgb24gc2VtZXN0ZXIgcmVnaXN0cmF0aW9uIGRheSE8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj41LiBBbmFueWE6PC9zcGFuPiBUZWxsIG1lIGFib3V0IGl0ISBUaGUgZW50aXJlIGRpZ2l0YWwgYWRtaW5pc3RyYXRpb24gbXVzdCBiZSByZXZhbXBlZCB3aXRoIGFuIGludHVpdGl2ZSwgbW9iaWxlLXJlc3BvbnNpdmUgcG9ydGFsIGZvciBhdHRlbmRhbmNlLCBoYWxsIHRpY2tldHMsIGFuZCBtYXJrIHNoZWV0cy48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj42LiBGYXJoYW46PC9zcGFuPiBCZXlvbmQgdGVjaG5vbG9neSwgd2hhdCBhYm91dCBvdXIgY2FmZXRlcmlhPyBUaGUgZm9vZCBvcHRpb25zIGFyZSByZXBldGl0aXZlIGFuZCBsYWNrIG51dHJpdGlvbmFsIGJhbGFuY2UgZm9yIHN0dWRlbnRzIHN0YXlpbmcgb24gY2FtcHVzIHVudGlsIGV2ZW5pbmcuPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+Ny4gUmFodWw6PC9zcGFuPiBJIGNvdWxkbid0IGFncmVlIG1vcmUsIEZhcmhhbi4gQSBzdWJzaWRpemVkIGNhbnRlZW4gd2l0aCBmcmVzaCwgaHlnaWVuaWMsIGFuZCBhZmZvcmRhYmxlIGNob2ljZXMgd291bGQgbWFrZSBhIHdvcmxkIG9mIGRpZmZlcmVuY2UuPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+OC4gQW5hbnlhOjwvc3Bhbj4gQnV0IHdoYXQgY29uY2VybnMgbWUgbW9zdCBpcyB0aGUgY2xhc3Nyb29tIHBlZGFnb2d5LiBEb24ndCB5b3UgZmVlbCBvdXIgY3VycmljdWx1bSBpcyBzdGlsbCB0b28gdGhlb3J5LWhlYXZ5IGFuZCBleGFtLWNlbnRyaWM/PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+OS4gRmFyaGFuOjwvc3Bhbj4gWW91IGhpdCB0aGUgbmFpbCBvbiB0aGUgaGVhZCwgQW5hbnlhLiBXZSBuZWVkIG1vcmUgaGFuZHMtb24gd29ya3Nob3BzLCBmaWVsZCByZXNlYXJjaCwgYW5kIGluZHVzdHJpYWwgaW50ZXJuc2hpcHMgaW50ZWdyYXRlZCBkaXJlY3RseSBpbnRvIG91ciBzZW1lc3RlciBjcmVkaXRzLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjEwLiBSYWh1bDo8L3NwYW4+IEV4YWN0bHkhIEFuZCBndWVzdCBtYXN0ZXJjbGFzc2VzIHdpdGggaW5kdXN0cnkgcHJhY3RpdGlvbmVycyBzaG91bGQgYmVjb21lIGEgbW9udGhseSBmZWF0dXJlIHJhdGhlciB0aGFuIGEgcmFyZSBhbm51YWwgZXZlbnQuPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+MTEuIEFuYW55YTo8L3NwYW4+IFdoYXQgYWJvdXQgc3R1ZGVudCB3ZWxmYXJlPyBUaGUgdW5pdmVyc2l0eSBkZXNwZXJhdGVseSBuZWVkcyBhIGRlZGljYXRlZCwgY29uZmlkZW50aWFsIG1lbnRhbCB3ZWxsbmVzcyBjb3Vuc2VsbGluZyBjZW50ZXIgd2l0aCBsaWNlbnNlZCBwc3ljaG9sb2dpc3RzLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjEyLiBGYXJoYW46PC9zcGFuPiBUaGF0IGlzIGEgY3J1Y2lhbCBvYnNlcnZhdGlvbi4gU2VtZXN0ZXIgcHJlc3N1cmVzIGFuZCBjYXJlZXIgYW54aWV0aWVzIGNhbiB0YWtlIGEgaGVhdnkgdG9sbCBvbiBzdHVkZW50cywgYW5kIGNhbXB1cyBzdXBwb3J0IG11c3QgYmUgcHJvYWN0aXZlLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjEzLiBSYWh1bDo8L3NwYW4+IExldCB1cyBub3QgZm9yZ2V0IHNwb3J0cyBhbmQgY3JlYXRpdmUgY2x1YnMuIE91ciBzcG9ydHMgZ3JvdW5kIGFuZCBhdWRpdG9yaXVtIGF1ZGlvIHN5c3RlbXMgaGF2ZSBiZWVuIGF3YWl0aW5nIHJlbm92YXRpb24gZm9yIG92ZXIgYSB5ZWFyLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjE0LiBBbmFueWE6PC9zcGFuPiBUcnVlLiBBIHVuaXZlcnNpdHkgc2hvdWxkIGJlIGFuIGVjb3N5c3RlbSB0aGF0IG51cnR1cmVzIHdob2xlIGluZGl2aWR1YWxzLCBub3QganVzdCBleGFtIHJvbGwgbnVtYmVycy48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj4xNS4gRmFyaGFuOjwvc3Bhbj4gV2h5IGRvbid0IHdlIGRyYWZ0IGEgY29uc3RydWN0aXZlIHByb3Bvc2FsIGluY29ycG9yYXRpbmcgdGhlc2UgZml2ZSBrZXkgcG9pbnRzIGFuZCBzdWJtaXQgaXQgdGhyb3VnaCB0aGUgU3R1ZGVudCBVbmlvbiByZXByZXNlbnRhdGl2ZSB0byB0aGUgRGVhbj88L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj4xNi4gUmFodWw6PC9zcGFuPiBFeGNlbGxlbnQgaWRlYSEgTGV0J3Mgc2l0IHRvZ2V0aGVyIGFmdGVyIGNsYXNzLCBwdXQgb3VyIHBldGl0aW9uIGRvd24gb24gcGFwZXIsIGFuZCBnYXRoZXIgc3R1ZGVudCBzaWduYXR1cmVzIGFjcm9zcyBhbGwgZGVwYXJ0bWVudHMuPC9kaXY+XG48L2Rpdj5cbiIsImV4YW1UaXBzIjpbIlN0cmljdGx5IGZ1bGZpbGwgdGhlIHJ1YnJpYzogUHJvdmlkZSBhdCBsZWFzdCAxNSBjbGVhciwgbnVtYmVyZWQgdHVybnMgd2l0aCBuYXR1cmFsIHByb2dyZXNzaW9uIGFuZCB2YXJpZWQgc3BlYWtlcnMuIiwiS2VlcCBjb252ZXJzYXRpb25hbCBtYXJrZXJzIGFjdGl2ZSAoJ0hleSBndXlzJywgJ1RlbGwgbWUgYWJvdXQgaXQnLCAnSSBjb3VsZG4ndCBhZ3JlZSBtb3JlJykuIiwiQ29uY2x1ZGUgd2l0aCBhIHByb2FjdGl2ZSByZXNvbHV0aW9uIChkcmFmdGluZyBhIGNvbnN0cnVjdGl2ZSBwZXRpdGlvbikuIl19LHsiaWQiOjUsIm51bSI6NSwic2VjdGlvbiI6IlNlY3Rpb24gQjogQ29udmVyc2F0aW9uIFdyaXRpbmcgKDE1IE1hcmtzKSIsInF1ZXN0aW9uIjoiV3JpdGUgYSBjb252ZXJzYXRpb24gdGhhdCB5b3Ugd2lsbCBoYXZlIHdpdGggeW91ciBmcmllbmRzIG9uIHRoZSB1c2Ugb2YgQUkuIChBdCBsZWFzdCAxNSB0dXJucywgd2l0aCBlYWNoIHR1cm4gYnkgYSBkaWZmZXJlbnQgc3BlYWtlcikuIiwibWV0YSI6IjF4MTUgPSAxNSBNYXJrcyDCtyBDb252ZXJzYXRpb24gV3JpdGluZyDCtyBUaGUgSW1wYWN0ICYgRXRoaWNzIG9mIEFJICgxNiBEaXN0aW5jdCBUdXJucykiLCJzcGVlY2hUaXRsZSI6IkRpYWxvZ3VlOiBBSSBpbiBBY2FkZW1pY3MgYW5kIFNvY2lldHkg4oCUIFRvb2wgb2YgTGliZXJhdGlvbiBvciBDcnV0Y2g/Iiwic3BlZWNoRGVsaXZlcnkiOiJTZXR0aW5nOiBDYW1wdXMgY2FmZXRlcmlhIHRhYmxlIGFmdGVyIGEgbGVjdHVyZSBvbiBlbWVyZ2luZyB0ZWNobm9sb2dpZXMuIEZyaWVuZHMgWm95YSwgQXJqdW4sIGFuZCBNZWVyYSBzaGFyZSBwZXJzcGVjdGl2ZXMuIiwiYm9keUh0bWwiOiJcbjxkaXYgY2xhc3M9XCJkaWFsb2d1ZS1ib3hcIj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj4xLiBab3lhOjwvc3Bhbj4gQXJqdW4sIEkgc2F3IHlvdSBleHBlcmltZW50aW5nIHdpdGggdGhhdCBBSSBjb2RlIGFzc2lzdGFudCB5ZXN0ZXJkYXkuIERpZCBpdCBhY3R1YWxseSBkZWJ1ZyB5b3VyIGVudGlyZSBwcm9ncmFtbWluZyBhc3NpZ25tZW50PzwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjIuIEFyanVuOjwvc3Bhbj4gSXQgZGlkLCBab3lhISBJbiBsZXNzIHRoYW4gdGhpcnR5IHNlY29uZHMsIGl0IGlkZW50aWZpZWQgYSBzeW50YXggYnVnIHRoYXQgaGFkIGtlcHQgbWUgc2NyYXRjaGluZyBteSBoZWFkIGZvciB0d28gaG91cnMuPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+My4gTWVlcmE6PC9zcGFuPiBUaGF0IHNvdW5kcyByZW1hcmthYmx5IGVmZmljaWVudCwgYnV0IGRvZXNuJ3QgaXQgd29ycnkgeW91IHRoYXQgcmVseWluZyBvbiBBSSBtaWdodCBkdWxsIG91ciBvd24gcHJvYmxlbS1zb2x2aW5nIHNraWxscyBvdmVyIHRpbWU/PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+NC4gQXJqdW46PC9zcGFuPiBJIHNlZSB5b3VyIHBvaW50LCBNZWVyYSwgYnV0IEkgbG9vayBhdCBBSSBsaWtlIGEgbW9kZXJuIHNjaWVudGlmaWMgY2FsY3VsYXRvci4gSXQgYXV0b21hdGVzIHJlcGV0aXRpdmUgc3ludGF4IHNvIHdlIGNhbiBmb2N1cyBvbiBoaWdoZXItbGV2ZWwgc3lzdGVtIGxvZ2ljLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjUuIFpveWE6PC9zcGFuPiBUaGF0IGhvbGRzIHRydWUgaW4gY29tcHV0ZXIgc2NpZW5jZSwgYnV0IHdoYXQgYWJvdXQgbGl0ZXJhdHVyZSBhbmQgZXNzYXkgd3JpdGluZz8gTWFueSBzdHVkZW50cyBqdXN0IHByb21wdCBhbiBBSSB0byBnZW5lcmF0ZSBjb21wbGV0ZSBhc3NpZ25tZW50cyB3aXRob3V0IHJlYWRpbmcgdGhlIHNvdXJjZSBtYXRlcmlhbC48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj42LiBNZWVyYTo8L3NwYW4+IEV4YWN0bHksIFpveWEhIFdoZW4geW91IGJ5cGFzcyByZWFkaW5nIGFuZCBzdHJ1Z2dsZSwgeW91IGJ5cGFzcyBjb2duaXRpdmUgZGV2ZWxvcG1lbnQgYW5kIHRoZSBqb3kgb2Ygb3JpZ2luYWwgY3JlYXRpdmUgdm9pY2UuPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+Ny4gQXJqdW46PC9zcGFuPiBJIGFncmVlIHRoYXQgYmxpbmQgY29weS1wYXN0aW5nIGlzIGFjYWRlbWljIGRpc2hvbmVzdHkuIEJ1dCB3aGF0IGlmIHdlIHVzZSBBSSBhcyBhbiBpbnRlbGxpZ2VudCBTb2NyYXRpYyB0dXRvciB0byBjbGFyaWZ5IGRpZmZpY3VsdCBjb25jZXB0cyBhbmQgYnJhaW5zdG9ybSBhbmdsZXM/PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+OC4gWm95YTo8L3NwYW4+IFRoYXQgaXMgYSBjb25zdHJ1Y3RpdmUgd2F5IHRvIGVtcGxveSBpdC4gV2hlbiB1c2VkIHRvIHN1bW1hcml6ZSBjb21wbGV4IGpvdXJuYWwgcGFwZXJzIG9yIGNyZWF0ZSBtb2NrIHRlc3QgcXVpenplcywgaXQgc2lnbmlmaWNhbnRseSBib29zdHMgbGVhcm5pbmcgdmVsb2NpdHkuPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+OS4gTWVlcmE6PC9zcGFuPiBTdGlsbCwgd2hhdCBhYm91dCB0aGUgYnJvYWRlciBldGhpY2FsIHF1ZXN0aW9ucz8gV2hhdCBhYm91dCBhbGdvcml0aG1pYyBiaWFzLCBkYXRhIHByaXZhY3ksIGFuZCB0aGUgZGlzcGxhY2VtZW50IG9mIGVudHJ5LWxldmVsIGpvYnM/PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+MTAuIEFyanVuOjwvc3Bhbj4gVGhvc2UgY2hhbGxlbmdlcyBhcmUgZGVlcGx5IHNlcmlvdXMuIE1pbGxpb25zIG9mIGF1dG9tYXRlZCB0YXNrcyBtaWdodCB3aXBlIG91dCB0cmFkaXRpb25hbCByb2xlcyB1bmxlc3MgeW91bmcgZ3JhZHVhdGVzIHVwc2tpbGwgaW4gQUkgZ292ZXJuYW5jZSBhbmQgcHJvbXB0IGVuZ2luZWVyaW5nLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjExLiBab3lhOjwvc3Bhbj4gRnVydGhlcm1vcmUsIHRyYWluaW5nIHRoZXNlIG1hc3NpdmUgbW9kZWxzIGNvbnN1bWVzIGltbWVuc2UgZWxlY3RyaWNhbCBlbmVyZ3kgYW5kIHdhdGVyIGZvciBzZXJ2ZXIgY29vbGluZywgd2hpY2ggaW1wYWN0cyBvdXIgY2xpbWF0ZSBjcmlzaXMuPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+MTIuIE1lZXJhOjwvc3Bhbj4gTm90IHRvIG1lbnRpb24gaW50ZWxsZWN0dWFsIHByb3BlcnR5ISBHZW5lcmF0aXZlIG1vZGVscyB0cmFpbiBvbiBtaWxsaW9ucyBvZiBhcnRpc3RzJyBhbmQgd3JpdGVycycgb3JpZ2luYWwgd29yayB3aXRob3V0IGZhaXIgYXR0cmlidXRpb24gb3IgY29tcGVuc2F0aW9uLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjEzLiBBcmp1bjo8L3NwYW4+IFRob3NlIGFyZSB2YWxpZCBjcml0aXF1ZXMuIFRoYXQgaXMgd2h5IGludGVybmF0aW9uYWwgcmVndWxhdG9yeSBmcmFtZXdvcmtzIGFuZCB0cmFuc3BhcmVudCBjb3B5cmlnaHQgZ3VpZGVsaW5lcyBhcmUgdXJnZW50bHkgbmVlZGVkLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjE0LiBab3lhOjwvc3Bhbj4gSXQgYWxsIGJvaWxzIGRvd24gdG8gY29uc2Npb3VzIGFnZW5jeTogQUkgc2hvdWxkIGJlIGEgY29waWxvdCB0aGF0IGV4cGFuZHMgaHVtYW4gY2FwYWJpbGl0eSwgbmV2ZXIgYW4gYXV0b3BpbG90IHRoYXQgcmVwbGFjZXMgaHVtYW4gY29uc2NpZW5jZS48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj4xNS4gTWVlcmE6PC9zcGFuPiBWZXJ5IHdlbGwgYXJ0aWN1bGF0ZWQsIFpveWEuIFdlIG11c3QgcmVtYWluIHRoaW5rZXJzIHdobyB1dGlsaXplIHRoZSBtYWNoaW5lLCByYXRoZXIgdGhhbiBjb25zdW1lcnMgc2hhcGVkIGJ5IHRoZSBhbGdvcml0aG0uPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+MTYuIEFyanVuOjwvc3Bhbj4gQWdyZWVkLiBMZXQgdXMgbWFrZSBzdXJlIHdlIHVuZGVyc3RhbmQgYm90aCBpdHMgaW1tZW5zZSBwb3RlbnRpYWwgYW5kIGl0cyBldGhpY2FsIGJvdW5kYXJpZXMgYXMgd2UgcHJlcGFyZSBmb3IgZnV0dXJlIGNhcmVlcnMuPC9kaXY+XG48L2Rpdj5cbiIsImV4YW1UaXBzIjpbIkVuc3VyZSBhdCBsZWFzdCAxNSBiYWxhbmNlZCBkaWFsb2d1ZSB0dXJucyBjb3ZlcmluZyB0ZWNobmljYWwgYmVuZWZpdHMsIGV0aGljYWwgZGlsZW1tYXMsIGFuZCBhY2FkZW1pYyBpbnRlZ3JpdHkuIiwiU2hvdyBnZW51aW5lIGRlYmF0ZTogc3BlYWtlcnMgY2hhbGxlbmdlIGFuZCByZWZpbmUgZWFjaCBvdGhlcidzIHZpZXdwb2ludHMgcG9saXRlbHkuIiwiQ29uY2x1ZGUgd2l0aCBhIGJhbGFuY2VkIGNvbnNlbnN1cyBvbiBldGhpY2FsIEFJIGNvLWV4aXN0ZW5jZS4iXX0seyJpZCI6NiwibnVtIjo2LCJzZWN0aW9uIjoiU2VjdGlvbiBCOiBDb252ZXJzYXRpb24gV3JpdGluZyAoMTUgTWFya3MpIiwicXVlc3Rpb24iOiJJbWFnaW5lIHlvdSBhcmUgYXBwbHlpbmcgZm9yIGFuIGludGVybnNoaXAuIFdyaXRlIGEgY29udmVyc2F0aW9uIHRoYXQgeW91IHdpbGwgaGF2ZSB3aXRoIHlvdXIgdGVhY2hlciBzZWVraW5nIGd1aWRhbmNlLiAoQXQgbGVhc3QgMTUgdHVybnMsIHdpdGggZWFjaCB0dXJuIGJ5IGEgZGlmZmVyZW50IHNwZWFrZXIpLiIsIm1ldGEiOiIxeDE1ID0gMTUgTWFya3MgwrcgQ29udmVyc2F0aW9uIFdyaXRpbmcgwrcgTWVudG9yc2hpcCAmIEludGVybnNoaXAgR3VpZGFuY2UgKDE2IERpc3RpbmN0IFR1cm5zKSIsInNwZWVjaFRpdGxlIjoiRGlhbG9ndWU6IFNlZWtpbmcgQWNhZGVtaWMgTWVudG9yc2hpcCBmb3IgYSBTdW1tZXIgUmVzZWFyY2ggSW50ZXJuc2hpcCIsInNwZWVjaERlbGl2ZXJ5IjoiU2V0dGluZzogRmFjdWx0eSBEZXBhcnRtZW50IG9mZmljZS4gU3R1ZGVudCBLYXJ0aGlrIGtub2NrcyBhbmQgY29uc3VsdHMgaGlzIEVuZ2xpc2ggJiBSZXNlYXJjaCBNZW50b3IsIERyLiBQcml5YS4iLCJib2R5SHRtbCI6IlxuPGRpdiBjbGFzcz1cImRpYWxvZ3VlLWJveFwiPlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjEuIEthcnRoaWs6PC9zcGFuPiBHb29kIG1vcm5pbmcsIERyLiBQcml5YS4gTWF5IEkgdGFrZSBhIGZldyBtb21lbnRzIG9mIHlvdXIgdGltZSB0byBkaXNjdXNzIG15IHN1bW1lciBpbnRlcm5zaGlwIHBsYW5zPzwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjIuIERyLiBQcml5YTo8L3NwYW4+IEdvb2QgbW9ybmluZywgS2FydGhpayEgUGxlYXNlIHRha2UgYSBzZWF0LiBJIHdvdWxkIGJlIGRlbGlnaHRlZCB0byBoZWxwLiBXaGF0IHNwZWNpZmljIGludGVybnNoaXAgb3Bwb3J0dW5pdHkgYXJlIHlvdSB0YXJnZXRpbmc/PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+My4gS2FydGhpazo8L3NwYW4+IFRoYW5rIHlvdSwgbWEnYW0uIFRoZSBOYXRpb25hbCBDZW50ZXIgZm9yIFBvbGljeSBSZXNlYXJjaCBoYXMgYW5ub3VuY2VkIHRoZWlyIHVuZGVyZ3JhZHVhdGUgc3VtbWVyIHJlc2VhcmNoIGZlbGxvd3NoaXAgaW4gZGV2ZWxvcG1lbnRhbCBjb21tdW5pY2F0aW9uLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjQuIERyLiBQcml5YTo8L3NwYW4+IFRoYXQgaXMgYSBwcmVzdGlnaW91cyBmZWxsb3dzaGlwISBJdCBhbGlnbnMgZXhjZXB0aW9uYWxseSB3ZWxsIHdpdGggeW91ciBjb3Vyc2V3b3JrIGluIHB1YmxpYyBjb21tdW5pY2F0aW9uIGFuZCByZXNlYXJjaCB3cml0aW5nLiBIYXZlIHlvdSBjaGVja2VkIHRoZSBlbGlnaWJpbGl0eSBjcml0ZXJpYT88L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj41LiBLYXJ0aGlrOjwvc3Bhbj4gWWVzLCBtYSdhbS4gVGhleSByZXF1aXJlIGEgbWluaW11bSA3NSUgYWdncmVnYXRlIHNjb3JlLCBhbiB1cGRhdGVkIGN1cnJpY3VsdW0gdml0YWUsIGFuZCBhIDUwMC13b3JkIFN0YXRlbWVudCBvZiBQdXJwb3NlIGV4cGxhaW5pbmcgb3VyIHJlc2VhcmNoIGludGVyZXN0cy48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj42LiBEci4gUHJpeWE6PC9zcGFuPiBFeGNlbGxlbnQuIFlvdXIgYWNhZGVtaWMgcmVjb3JkIGlzIHN0cm9uZy4gV2hlcmUgZG8geW91IGZlZWwgeW91IG5lZWQgdGhlIG1vc3QgcmVmaW5lbWVudCBhdCB0aGlzIHN0YWdlPzwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjcuIEthcnRoaWs6PC9zcGFuPiBIb25lc3RseSwgbWEnYW0sIEkgYW0gZmVlbGluZyBzbGlnaHRseSBvdmVyd2hlbG1lZCB3aGlsZSBkcmFmdGluZyB0aGUgU3RhdGVtZW50IG9mIFB1cnBvc2UuIEkgYW0gdW5zdXJlIGhvdyB0byBzdGFuZCBvdXQgYW1vbmcgYXBwbGljYW50cyBmcm9tIGFjcm9zcyB0aGUgY291bnRyeS48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj44LiBEci4gUHJpeWE6PC9zcGFuPiBUaGF0IGlzIGNvbXBsZXRlbHkgbmF0dXJhbC4gVGhlIGtleSB0byBhIGNvbXBlbGxpbmcgU09QIGlzIHNwZWNpZmljaXR5OiBkbyBub3QganVzdCBzdGF0ZSB0aGF0IHlvdSBsb3ZlIGNvbW11bmljYXRpb247IGNvbm5lY3QgeW91ciBjbGFzc3Jvb20gbGVhcm5pbmdzIHRvIHJlYWwgY29tbXVuaXR5IGlzc3Vlcy48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj45LiBLYXJ0aGlrOjwvc3Bhbj4gQ291bGQgSSBtZW50aW9uIHRoZSBydXJhbCBmaWVsZCBzdXJ2ZXkgb24gbG9jYWwgaW5mb3JtYXRpb24gYWNjZXNzIHRoYXQgb3VyIHRlYW0gY29uZHVjdGVkIGR1cmluZyB0aGUgbGFzdCBzZW1lc3Rlcj88L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj4xMC4gRHIuIFByaXlhOjwvc3Bhbj4gQWJzb2x1dGVseSEgSGlnaGxpZ2h0IHlvdXIgbWV0aG9kb2xvZ3ksIHRoZSBkYXRhIGdhdGhlcmluZyBjaGFsbGVuZ2VzIHlvdSBzb2x2ZWQsIGFuZCB3aGF0IGVtcGlyaWNhbCBpbnNpZ2h0cyB5b3UgZGVyaXZlZC4gVGhhdCBwcm92ZXMgaGFuZHMtb24gY29tcGV0ZW5jZS48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInR1cm5cIj48c3BhbiBjbGFzcz1cInNwZWFrZXJcIj4xMS4gS2FydGhpazo8L3NwYW4+IFVuZGVyc3Rvb2QsIG1hJ2FtLiBTaG91bGQgSSBhbHNvIGluY2x1ZGUgcmVmZXJlbmNlcyB0byB0aGUgcHVibGlzaGVkIHdvcmsgb2YgdGhlIGZlbGxvd3NoaXAncyBsZWFkIHJlc2VhcmNoIHByb2Zlc3NvcnM/PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+MTIuIERyLiBQcml5YTo8L3NwYW4+IE1vc3QgZGVmaW5pdGVseS4gU2hvd2luZyB0aGF0IHlvdSBoYXZlIHJlYWQgdGhlaXIgcmVjZW50IHBvbGljeSBicmllZnMgZGVtb25zdHJhdGVzIGludGVsbGVjdHVhbCBjdXJpb3NpdHkgYW5kIGdlbnVpbmUgZGVkaWNhdGlvbiB0byB0aGVpciBtYW5kYXRlLjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjEzLiBLYXJ0aGlrOjwvc3Bhbj4gVGhhdCBjbGFyaWZpZXMgbXkgcm9hZG1hcCBpbW1lbnNlbHkuIEFsc28sIHRoZSBndWlkZWxpbmVzIHN0YXRlIHRoYXQgd2UgbmVlZCBhbiBhY2FkZW1pYyBsZXR0ZXIgb2YgcmVjb21tZW5kYXRpb24uIFdvdWxkIHlvdSBiZSB3aWxsaW5nIHRvIHN1cHBvcnQgbXkgY2FuZGlkYWN5PzwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjE0LiBEci4gUHJpeWE6PC9zcGFuPiBJIHdvdWxkIGJlIG1vcmUgdGhhbiBoYXBweSB0byB3cml0ZSBhIHN0cm9uZyByZWNvbW1lbmRhdGlvbiBmb3IgeW91LCBLYXJ0aGlrLCBnaXZlbiB5b3VyIGNvbnNpc3RlbmN5IGFuZCBhY2FkZW1pYyBkaWxpZ2VuY2UgaW4gY2xhc3MuPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0dXJuXCI+PHNwYW4gY2xhc3M9XCJzcGVha2VyXCI+MTUuIEthcnRoaWs6PC9zcGFuPiBJIGFtIHByb2ZvdW5kbHkgZ3JhdGVmdWwgZm9yIHlvdXIga2luZG5lc3MgYW5kIG1lbnRvcnNoaXAsIERyLiBQcml5YS4gSSB3aWxsIHBvbGlzaCBteSBkcmFmdCBhbmQgc2VuZCBpdCB0byB5b3VyIGVtYWlsIGJ5IHRvbW9ycm93IGFmdGVybm9vbiBmb3IgcmV2aWV3LjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidHVyblwiPjxzcGFuIGNsYXNzPVwic3BlYWtlclwiPjE2LiBEci4gUHJpeWE6PC9zcGFuPiBQbGVhc2UgZG8gc28uIFJldmlldyBpdCB3aXRoIGEgc2hhcnAgY3JpdGljYWwgZXllLCBwcm9vZnJlYWQgdGhvcm91Z2hseSwgYW5kIGJlbGlldmUgaW4geW91ciBjYXBhYmlsaXRpZXMuIEJlc3Qgb2YgbHVjayE8L2Rpdj5cbjwvZGl2PlxuIiwiZXhhbVRpcHMiOlsiTWFpbnRhaW4gcHJvZmVzc2lvbmFsLCByZXNwZWN0ZnVsIHJlZ2lzdGVyIGFwcHJvcHJpYXRlIGZvciBhIHN0dWRlbnQtbWVudG9yIGRpYWxvZ3VlLiIsIkluY29ycG9yYXRlIHByYWN0aWNhbCBpbnRlcm5zaGlwIGVsZW1lbnRzOiBTdGF0ZW1lbnQgb2YgUHVycG9zZSAoU09QKSwgQ1YsIGVsaWdpYmlsaXR5LCByZWNvbW1lbmRhdGlvbnMuIiwiRW5zdXJlIHNlcXVlbnRpYWwgdHVybi10YWtpbmcgd2l0aCBhdCBsZWFzdCAxNSBjb21wbGV0ZSBzZW50ZW5jZXMuIl19LHsiaWQiOjcsIm51bSI6Nywic2VjdGlvbiI6IlNlY3Rpb24gQzogRGViYXRlIFdyaXRpbmcgKDE1IE1hcmtzKSIsInF1ZXN0aW9uIjoiQUkgY2FuIHJlcGxhY2UgdGVhY2hlcnMuIiwibWV0YSI6IjF4MTUgPSAxNSBNYXJrcyDCtyBEZWJhdGUgV3JpdGluZyDCtyBDb21wcmVoZW5zaXZlICdGb3InIGFuZCAnQWdhaW5zdCcgQXJndW1lbnRzIiwic3BlZWNoVGl0bGUiOiJEZWJhdGUgTW90aW9uOiAnQUkgQ2FuIFJlcGxhY2UgVGVhY2hlcnMnIiwic3BlZWNoRGVsaXZlcnkiOiJGb3JtYWwgUGFybGlhbWVudGFyeSBEZWJhdGUgZm9ybWF0IHByZXNlbnRpbmcgYm90aCAnRm9yIHRoZSBNb3Rpb24nIGFuZCAnQWdhaW5zdCB0aGUgTW90aW9uJyBhcmd1bWVudHMuIiwiYm9keUh0bWwiOiJcbjxkaXYgY2xhc3M9XCJkZWJhdGUtZHVvXCI+XG4gIDxkaXYgY2xhc3M9XCJkZWJhdGUtc2lkZSBmb3Itc2lkZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJhZGdlXCI+8J+foiBGb3IgVGhlIE1vdGlvbiAoQWZmaXJtYXRpdmUpPC9kaXY+XG4gICAgPGg1Pktub3dsZWRnZSBTY2FsYWJpbGl0eSwgUGVyc29uYWxpemF0aW9uLCBhbmQgVW5pdmVyc2FsIEVxdWl0eTwvaDU+XG4gICAgPHA+PGVtPlJlc3BlY3RlZCBqdXJ5LCBjaGFpcnBlcnNvbiwgYW5kIHdvcnRoeSBvcHBvbmVudHM6PC9lbT4gSSBzdGFuZCBpbiBzdHJvbmcgYWZmaXJtYXRpb24gb2YgdGhlIG1vdGlvbiB0aGF0IEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIGNhbiwgYW5kIGluIG1hbnkgcmVzcGVjdHMgd2lsbCwgcmVwbGFjZSB0aGUgdHJhZGl0aW9uYWwgcm9sZSBvZiB0ZWFjaGVycy48L3A+XG4gICAgPHVsPlxuICAgICAgPGxpPjxzdHJvbmc+SHlwZXItUGVyc29uYWxpemVkIEFkYXB0aXZlIFBlZGFnb2d5Ojwvc3Ryb25nPiBIdW1hbiB0ZWFjaGVycywgbm8gbWF0dGVyIGhvdyBnaWZ0ZWQsIGZhY2Ugc2V2ZXJlIGNvZ25pdGl2ZSBsaW1pdGF0aW9ucyBtYW5hZ2luZyBhIGNsYXNzcm9vbSBvZiBmb3J0eSBvciBmaWZ0eSBkaXZlcnNlIGxlYXJuZXJzLiBBSSBhbGdvcml0aG1zIGFzc2VzcyBhIHN0dWRlbnQncyByZWFsLXRpbWUgY29tcHJlaGVuc2lvbiBzcGVlZCwgYWRhcHQgcXVpeiBkaWZmaWN1bHR5LCBpZGVudGlmeSBtaWNyby1jb25jZXB0dWFsIGdhcHMsIGFuZCB0YWlsb3IgY3VzdG9taXplZCBleHBsYW5hdGlvbnMgdGhhdCBtYXRjaCBlYWNoIHN0dWRlbnQncyB1bmlxdWUgbGVhcm5pbmcgY3VydmUuPC9saT5cbiAgICAgIDxsaT48c3Ryb25nPlVuaXZlcnNhbCAyNHg3IEFjY2Vzc2liaWxpdHk6PC9zdHJvbmc+IFdvcmxkLWNsYXNzIGluc3RydWN0aW9uIHNob3VsZG4ndCBiZSBnYXRlZCBieSBleHBlbnNpdmUgcHJpdmF0ZSBzY2hvb2wgZmVlcyBvciBnZW9ncmFwaGljIGx1Y2suIEFuIEFJIHRlYWNoZXIgb3BlcmF0ZXMgYXJvdW5kIHRoZSBjbG9jayBhY3Jvc3Mgc21hcnRwaG9uZXMsIGJyZWFraW5nIGxpbmd1aXN0aWMgYmFycmllcnMgd2l0aCBpbnN0YW50YW5lb3VzIHRyYW5zbGF0aW9uIGFuZCBicmluZ2luZyBoaWdoLXRpZXIgZWR1Y2F0aW9uIHRvIHJlbW90ZSwgdW5kZXJwcml2aWxlZ2VkIGxlYXJuZXJzIGdsb2JhbGx5LjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5JbmZpbml0ZSBQYXRpZW5jZSAmYW1wOyBPYmplY3RpdmUgRXZhbHVhdGlvbjo8L3N0cm9uZz4gQUkgZWR1Y2F0b3JzIG5ldmVyIHN1ZmZlciBmcm9tIHBoeXNpY2FsIGZhdGlndWUsIHN0cmVzcywgZW1vdGlvbmFsIGJ1cm5vdXQsIG9yIHBlcnNvbmFsIGJpYXMuIEV2ZXJ5IHN0dWRlbnQgcXVlcnkgaXMgbWV0IHdpdGggaWRlbnRpY2FsIHBhdGllbmNlLCBhbmQgYXNzaWdubWVudHMgYXJlIGdyYWRlZCBzdHJpY3RseSBhZ2FpbnN0IG9iamVjdGl2ZSBydWJyaWNzIHdpdGhvdXQgc3ViY29uc2Npb3VzIGZhdm91cml0aXNtLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5Db25jbHVzaW9uOjwvc3Ryb25nPiBUaGUgY2xhc3NpY2FsIG1vZGVsIG9mIGEgdGVhY2hlciBsZWN0dXJpbmcgb24gYSBibGFja2JvYXJkIGlzIGFudGlxdWF0ZWQuIFdoZW4gdGVjaG5vbG9neSBjYW4gdGVhY2ggZmFzdGVyLCBhZGFwdCBkZWVwZXIsIGFuZCBkZW1vY3JhdGl6ZSBrbm93bGVkZ2UgZ2xvYmFsbHksIEFJIHN0YW5kcyByZWFkeSB0byBhc3N1bWUgdGhlIHBlZGFnb2dpY2FsIG1hbnRsZS48L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJkZWJhdGUtc2lkZSBhZ2FpbnN0LXNpZGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZS1iYWRnZVwiPvCflLQgQWdhaW5zdCBUaGUgTW90aW9uIChOZWdhdGl2ZSk8L2Rpdj5cbiAgICA8aDU+RW1wYXRoeSwgTW9yYWwgTWVudG9yc2hpcCwgYW5kIHRoZSBIdW1hbiBTb3VsIG9mIFBlZGFnb2d5PC9oNT5cbiAgICA8cD48ZW0+UmVzcGVjdGVkIGp1cnksIGNoYWlycGVyc29uLCBhbmQgZXN0ZWVtZWQgbWVtYmVyczo8L2VtPiBJIHN0YW5kIGluIHZlaGVtZW50IG9wcG9zaXRpb24gdG8gdGhlIHJlZHVjdGlvbmlzdCBtb3Rpb24gdGhhdCBBSSBjYW4gZXZlciByZXBsYWNlIHJlYWwgdGVhY2hlcnMuPC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaT48c3Ryb25nPlRlYWNoaW5nIGlzIEVtcGF0aHksIE5vdCBNZXJlIERhdGEgVHJhbnNmZXI6PC9zdHJvbmc+IEFuIGFsZ29yaXRobSBjYW4gcHJvY2VzcyBzeW50YXgsIGJ1dCBpdCBjYW5ub3QgbG9vayBpbnRvIHRoZSB0aXJlZCBleWVzIG9mIGEgZGVzcG9uZGVudCBjaGlsZCwgcGVyY2VpdmUgZW1vdGlvbmFsIGdyaWVmLCBvciBvZmZlciBhIGNvbWZvcnRpbmcgd29yZCB0aGF0IHByZXZlbnRzIGEgc3R1ZGVudCBmcm9tIGdpdmluZyB1cCBvbiBsaWZlLiBFZHVjYXRpb24gaXMgZnVuZGFtZW50YWxseSBhIHJlbGF0aW9uYWwgZW5jb3VudGVyIHJvb3RlZCBpbiBodW1hbiBlbXBhdGh5LjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5JbmN1bGNhdGlvbiBvZiBWYWx1ZXMgYW5kIE1vcmFsIEltYWdpbmF0aW9uOjwvc3Ryb25nPiBHcmVhdCB0ZWFjaGVycyBkbyBub3QgbWVyZWx5IGRpc3BlbnNlIHN5bGxhYmk7IHRoZXkgY3VsdGl2YXRlIGludGVncml0eSwgY2l2aWMgY291cmFnZSwgZGVtb2NyYXRpYyByZXNwb25zaWJpbGl0eSwgYW5kIGV0aGljYWwgY29uc2NpZW5jZS4gQSBzaWxpY29uIG1vZGVsIHRyYWluZWQgb24gaGlzdG9yaWNhbCBzdGF0aXN0aWNhbCBjb3JyZWxhdGlvbnMgY2Fubm90IG1vZGVsIG1vcmFsIGJyYXZlcnkgb3IgaW5zcGlyZSBjaGFyYWN0ZXIuPC9saT5cbiAgICAgIDxsaT48c3Ryb25nPkNyZWF0aXZlIFNwYXJrICZhbXA7IFNvY3JhdGljIElucXVpcnk6PC9zdHJvbmc+IFRydWUgZWR1Y2F0aW9uIG9jY3VycyB3aGVuIGEgbWVudG9yIGNoYWxsZW5nZXMgc3R1ZGVudHMgdG8gcXVlc3Rpb24gcHJlbWlzZXMsIHNwYXJrIHNwb250YW5lb3VzIGNsYXNzcm9vbSBkZWJhdGVzLCBhbmQgaW52ZW50IHVucHJlY2VkZW50ZWQgcGFyYWRpZ21zLiBBSSBtZXJlbHkgcmVjb25maWd1cmVzIGV4aXN0aW5nIHRleHQ7IGl0IGxhY2tzIHNwb250YW5lb3VzIGh1bWFuIHBhc3Npb24gYW5kIGNyZWF0aXZlIGludHVpdGlvbi48L2xpPlxuICAgICAgPGxpPjxzdHJvbmc+Q29uY2x1c2lvbjo8L3N0cm9uZz4gTWFjaGluZXMgY2FuIGJlIGJyaWxsaWFudCBpbnN0cnVjdGlvbmFsIGNhbGN1bGF0b3JzLCBidXQgdGhleSBjYW4gbmV2ZXIgYmUgdGVhY2hlcnMuIFRvIHJlcGxhY2UgYSB0ZWFjaGVyIHdpdGggYW4gYWxnb3JpdGhtIGlzIHRvIHJlZHVjZSB0aGUgaHVtYW4gc291bCBvZiBsZWFybmluZyB0byBtZXJlIGRhdGEgcG9pbnRzLiBUaGUgaHVtYW4gdGVhY2hlciByZW1haW5zIGlycmVwbGFjZWFibGUuPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiZXhhbVRpcHMiOlsiUHJlc2VudCBib3RoIHNpZGVzIHdpdGggZXF1YWwgYW5hbHl0aWNhbCBkZXB0aCBhbmQgcmhldG9yaWNhbCBwb3dlci4iLCJVc2UgZm9ybWFsIGRlYmF0ZSBtYXJrZXJzICgnVGhlIG1vdGlvbiBiZWZvcmUgdXMgdG9kYXkgaXMuLi4nLCAnSSBzdGFuZCBpbiBzdHJvbmcgYWZmaXJtYXRpb24uLi4nLCAnTXkgd29ydGh5IG9wcG9uZW50cyBhcmd1ZSwgYnV0Li4uJykuIiwiSGlnaGxpZ2h0IHN0cnVjdHVyYWwgY29udHJhc3RzOiBBbGdvcml0aG1pYyBzY2FsYWJpbGl0eSB2cy4gaHVtYW4gZW1vdGlvbmFsIG1lbnRvcnNoaXAuIl19LHsiaWQiOjgsIm51bSI6OCwic2VjdGlvbiI6IlNlY3Rpb24gQzogRGViYXRlIFdyaXRpbmcgKDE1IE1hcmtzKSIsInF1ZXN0aW9uIjoiRWR1Y2F0aW9uIG9mIHdvbWVuIGRldGVybWluZXMgdGhlIGRldmVsb3BtZW50IG9mIGEgbmF0aW9uLiIsIm1ldGEiOiIxeDE1ID0gMTUgTWFya3MgwrcgRGViYXRlIFdyaXRpbmcgwrcgQ29tcHJlaGVuc2l2ZSAnRm9yJyBhbmQgJ0FnYWluc3QnIEFyZ3VtZW50cyIsInNwZWVjaFRpdGxlIjoiRGViYXRlIE1vdGlvbjogJ0VkdWNhdGlvbiBvZiBXb21lbiBEZXRlcm1pbmVzIHRoZSBEZXZlbG9wbWVudCBvZiBhIE5hdGlvbiciLCJzcGVlY2hEZWxpdmVyeSI6IkZvcm1hbCBQYXJsaWFtZW50YXJ5IERlYmF0ZSBmb3JtYXQgcHJlc2VudGluZyBwZXJzdWFzaXZlIGFyZ3VtZW50cyBvbiBib3RoIHNpZGVzLiIsImJvZHlIdG1sIjoiXG48ZGl2IGNsYXNzPVwiZGViYXRlLWR1b1wiPlxuICA8ZGl2IGNsYXNzPVwiZGViYXRlLXNpZGUgZm9yLXNpZGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2lkZS1iYWRnZVwiPvCfn6IgRm9yIFRoZSBNb3Rpb24gKEFmZmlybWF0aXZlKTwvZGl2PlxuICAgIDxoNT5UaGUgTXVsdGlwbGllciBFZmZlY3Q6IEVjb25vbWljIFByb3NwZXJpdHksIEhlYWx0aCwgYW5kIEdlbmVyYXRpb25hbCBQcm9ncmVzczwvaDU+XG4gICAgPHA+PGVtPkhvbm91cmFibGUgYWRqdWRpY2F0b3JzLCB3b3J0aHkgb3Bwb25lbnRzLCBhbmQgcmVzcGVjdGVkIGF1ZGllbmNlOjwvZW0+IEkgdW5lcXVpdm9jYWxseSBhZmZpcm0gdGhhdCB0aGUgZWR1Y2F0aW9uIG9mIHdvbWVuIGlzIHRoZSBwcmltYXJ5IGxpbmNocGluIGdvdmVybmluZyB0aGUgY29tcHJlaGVuc2l2ZSBkZXZlbG9wbWVudCBvZiBhbnkgY2l2aWxpemF0aW9uLjwvcD5cbiAgICA8dWw+XG4gICAgICA8bGk+PHN0cm9uZz5VbmxvY2tpbmcgNTAlIG9mIE5hdGlvbmFsIEVjb25vbWljIFBvdGVudGlhbDo8L3N0cm9uZz4gS2VlcGluZyB3b21lbiB1bmRlcmVkdWNhdGVkIGFydGlmaWNpYWxseSBjdXRzIGEgbmF0aW9uJ3MgaW50ZWxsZWN0dWFsLCBlbnRyZXByZW5ldXJpYWwsIGFuZCBwcm9kdWN0aXZlIGxhYm9yIGZvcmNlIGluIGhhbGYuIEVtcGlyaWNhbCBzdHVkaWVzIGJ5IHRoZSBXb3JsZCBCYW5rIGRlbW9uc3RyYXRlIHRoYXQgZXZlcnkgYWRkaXRpb25hbCB5ZWFyIG9mIHNlY29uZGFyeSBlZHVjYXRpb24gZm9yIHdvbWVuIGV4cG9uZW50aWFsbHkgcmFpc2VzIG5hdGlvbmFsIEdEUCBhbmQgaW5kdXN0cmlhbCBvdXRwdXQuPC9saT5cbiAgICAgIDxsaT48c3Ryb25nPkludGVyZ2VuZXJhdGlvbmFsIEhlYWx0aCAmYW1wOyBEZW1vZ3JhcGhpYyBWaXRhbGl0eTo8L3N0cm9uZz4gQXMgdGhlIHRpbWVsZXNzIEFmcmljYW4gcHJvdmVyYiBzdGF0ZXMsICdFZHVjYXRlIGEgbWFuIGFuZCB5b3UgZWR1Y2F0ZSBhbiBpbmRpdmlkdWFsOyBlZHVjYXRlIGEgd29tYW4gYW5kIHlvdSBlZHVjYXRlIGEgZmFtaWx5IGFuZCBuYXRpb24uJyBFZHVjYXRlZCB3b21lbiBlbnN1cmUgbWF0ZXJuYWwgc3Vydml2YWwsIGRyYW1hdGljYWxseSByZWR1Y2UgaW5mYW50IG1hbG51dHJpdGlvbiwgZW5zdXJlIGNoaWxkaG9vZCB2YWNjaW5hdGlvbiwgYW5kIGludmVzdCB1cCB0byA5MCUgb2YgdGhlaXIgZWFybmluZ3MgYmFjayBpbnRvIGZhbWlseSBlZHVjYXRpb24uPC9saT5cbiAgICAgIDxsaT48c3Ryb25nPkRlbW9jcmF0aWMgR292ZXJuYW5jZSAmYW1wOyBTb2NpYWwgSnVzdGljZTo8L3N0cm9uZz4gTmF0aW9ucyB3aXRoIGhpZ2hseSBlZHVjYXRlZCBmZW1hbGUgcG9wdWxhdGlvbnMgY29uc2lzdGVudGx5IGV4aGliaXQgbG93ZXIgY29ycnVwdGlvbiBpbmRpY2VzLCBtb3JlIGh1bWFuZSBzb2NpYWwgd2VsZmFyZSBsZWdpc2xhdGlvbiwgYW5kIHN0cm9uZ2VyIHJ1bGUgb2YgbGF3LiBXb21lbidzIGxlYWRlcnNoaXAgdHJhbnNmb3JtcyBwb2xpY3kgcHJpb3JpdGllcyB0b3dhcmQgZWR1Y2F0aW9uLCBoZWFsdGhjYXJlLCBhbmQgcGVhY2VidWlsZGluZy48L2xpPlxuICAgICAgPGxpPjxzdHJvbmc+Q29uY2x1c2lvbjo8L3N0cm9uZz4gTm8gbmF0aW9uIGhhcyBldmVyIGFjaGlldmVkIGVuZHVyaW5nIGRldmVsb3BtZW50IHdoaWxlIGxlYXZpbmcgaXRzIGRhdWdodGVycyBpbiBkYXJrbmVzcy4gRmVtYWxlIGVkdWNhdGlvbiBpcyBub3QgYSBsdXh1cnnigJRpdCBpcyB0aGUgZm91bmRhdGlvbmFsIHByZXJlcXVpc2l0ZSBvZiBuYXRpb25hbCBzb3ZlcmVpZ250eSBhbmQgcHJvZ3Jlc3MuPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZGViYXRlLXNpZGUgYWdhaW5zdC1zaWRlXCI+XG4gICAgPGRpdiBjbGFzcz1cInNpZGUtYmFkZ2VcIj7wn5S0IEFnYWluc3QgVGhlIE1vdGlvbiAoTmVnYXRpdmUpPC9kaXY+XG4gICAgPGg1PkhvbGlzdGljIERldmVsb3BtZW50OiBUaGUgUHJpbWFjeSBvZiBNdWx0aS1QaWxsYXIgSW5zdGl0dXRpb25hbCBTeXN0ZW1zPC9oNT5cbiAgICA8cD48ZW0+SG9ub3VyYWJsZSBhZGp1ZGljYXRvcnMgYW5kIHJlc3BlY3RlZCBnYXRoZXJpbmc6PC9lbT4gV2hpbGUgbm8gcmF0aW9uYWwgbWluZCBkaXNwdXRlcyB0aGUgaW50cmluc2ljIHZhbHVlIG9mIHdvbWVuJ3MgbGl0ZXJhY3ksIEkgb3Bwb3NlIHRoZSBtb3Rpb24ncyB0b3RhbGl6aW5nIGFzc2VydGlvbiB0aGF0IGZlbWFsZSBlZHVjYXRpb24gKmFsb25lKiBkZXRlcm1pbmVzIG5hdGlvbmFsIGRldmVsb3BtZW50LjwvcD5cbiAgICA8dWw+XG4gICAgICA8bGk+PHN0cm9uZz5UaGUgVHJhcCBvZiBJbnN0aXR1dGlvbmFsIERldGVybWluaXNtOjwvc3Ryb25nPiBTZXZlcmFsIGRldmVsb3BpbmcgZWNvbm9taWVzIGhhdmUgYWNoaWV2ZWQgbmVhci11bml2ZXJzYWwgZmVtYWxlIGxpdGVyYWN5LCB5ZXQgcmVtYWluIHBsYWd1ZWQgYnkgc3lzdGVtaWMgcG92ZXJ0eSwgaGlnaCBlZHVjYXRlZCB1bmVtcGxveW1lbnQsIGFuZCBkZWJ0IGR1ZSB0byBjb3JydXB0IGdvdmVybmFuY2UsIGxhY2sgb2YgaW5kdXN0cmlhbCBpbmZyYXN0cnVjdHVyZSwgYW5kIGZpc2NhbCBtaXNtYW5hZ2VtZW50LjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5FY29ub21pYyBEZXZlbG9wbWVudCBEZW1hbmRzIENvbXByZWhlbnNpdmUgU3lzdGVtczo8L3N0cm9uZz4gUmVhbCBuYXRpb25hbCBkZXZlbG9wbWVudCByZXF1aXJlcyBzdGFibGUgZW5lcmd5IGdyaWRzLCB0cmFuc3BhcmVudCBqdWRpY2lhbCBpbnN0aXR1dGlvbnMsIHJvYnVzdCBtYW51ZmFjdHVyaW5nLCBwaHlzaWNhbCBzYWZldHksIGFuZCBtYWNyb2Vjb25vbWljIHN0YWJpbGl0eS4gV2l0aG91dCBjYXBpdGFsIGFuZCBqb2IgY3JlYXRpb24sIGVkdWNhdGlvbiBhbG9uZSBjYW5ub3QgcHJvZHVjZSBlY29ub21pYyBzYWx2YXRpb24uPC9saT5cbiAgICAgIDxsaT48c3Ryb25nPlVuaXZlcnNhbCwgTm9uLVNpbG9lZCBIdW1hbiBEZXZlbG9wbWVudDo8L3N0cm9uZz4gRGV2ZWxvcG1lbnQgY2Fubm90IGJlIHNlZ3JlZ2F0ZWQgYnkgZ2VuZGVyLiBVcGxpZnRpbmcgYSBuYXRpb24gZGVtYW5kcyBzaW11bHRhbmVvdXMgZm9jdXMgb24gaGVhbHRoY2FyZSBpbmZyYXN0cnVjdHVyZSwgYWdyYXJpYW4gcmVmb3JtLCBzY2llbnRpZmljIGlubm92YXRpb24sIGFuZCB1bml2ZXJzYWwgcHJpbWFyeSBlZHVjYXRpb24gZm9yIGJveXMgYW5kIGdpcmxzIGFsaWtlLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5Db25jbHVzaW9uOjwvc3Ryb25nPiBXb21lbidzIGVkdWNhdGlvbiBpcyBhIHZpdGFsIGNhdGFseXN0LCBidXQgaXQgY2Fubm90IGZ1bmN0aW9uIGluIGFuIGluc3RpdHV0aW9uYWwgdmFjdXVtLiBUbyBjbGFpbSBpdCBzaW5nbGUtaGFuZGVkbHkgZGV0ZXJtaW5lcyBkZXZlbG9wbWVudCBpZ25vcmVzIHRoZSBjb21wbGV4IGVjb25vbWljLCBwb2xpdGljYWwsIGFuZCBpbmZyYXN0cnVjdHVyYWwgbWFjaGluZXJ5IHJlcXVpcmVkIHRvIGVsZXZhdGUgYSBuYXRpb24uPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiZXhhbVRpcHMiOlsiTm90aWNlIHRoZSBudWFuY2VkIHN0cmF0ZWd5IGZvciB0aGUgbmVnYXRpdmUgc2lkZTogTmV2ZXIgYXR0YWNrIHdvbWVuJ3MgZWR1Y2F0aW9uLCBidXQgY2hhbGxlbmdlIHRoZSB3b3JkICdkZXRlcm1pbmVzJyBhcyBhbiBvdmVyc2ltcGxpZmljYXRpb24gb2YgbXVsdGktZmFjdG9yaWFsIGVjb25vbWljIGRldmVsb3BtZW50LiIsIkluY2x1ZGUgZW1waXJpY2FsIGRhdGEgcmVmZXJlbmNlcyAoV29ybGQgQmFuayBzdGF0aXN0aWNzLCBkZW1vZ3JhcGhpYyB0cmFuc2l0aW9uKS4iLCJDb25jbHVkZSBlYWNoIHNwZWVjaCB3aXRoIGNyaXNwIHJoZXRvcmljYWwgc3ludGhlc2lzLiJdfSx7ImlkIjo5LCJudW0iOjksInNlY3Rpb24iOiJTZWN0aW9uIEM6IERlYmF0ZSBXcml0aW5nICgxNSBNYXJrcykiLCJxdWVzdGlvbiI6Ik9ubGluZSBtb2RlIG9mIGVkdWNhdGlvbiBpcyBhcyBlZmZlY3RpdmUgYXMgb2ZmbGluZSBtb2RlIGZvciBlbmhhbmNpbmcgY29tbXVuaWNhdGlvbiBza2lsbHMuIiwibWV0YSI6IjF4MTUgPSAxNSBNYXJrcyDCtyBEZWJhdGUgV3JpdGluZyDCtyBDb21wcmVoZW5zaXZlICdGb3InIGFuZCAnQWdhaW5zdCcgQXJndW1lbnRzIiwic3BlZWNoVGl0bGUiOiJEZWJhdGUgTW90aW9uOiAnT25saW5lIEVkdWNhdGlvbiBJcyBBcyBFZmZlY3RpdmUgQXMgT2ZmbGluZSBFZHVjYXRpb24gZm9yIEVuaGFuY2luZyBDb21tdW5pY2F0aW9uIFNraWxscyciLCJzcGVlY2hEZWxpdmVyeSI6IkZvcm1hbCBQYXJsaWFtZW50YXJ5IERlYmF0ZSBmb3JtYXQgY29udHJhc3RpbmcgZGlnaXRhbCBjb21tdW5pY2F0aW9uIHBhcmFkaWdtcyB3aXRoIHBoeXNpY2FsIGludGVycGVyc29uYWwgaW50ZXJhY3Rpb24uIiwiYm9keUh0bWwiOiJcbjxkaXYgY2xhc3M9XCJkZWJhdGUtZHVvXCI+XG4gIDxkaXYgY2xhc3M9XCJkZWJhdGUtc2lkZSBmb3Itc2lkZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJhZGdlXCI+8J+foiBGb3IgVGhlIE1vdGlvbiAoQWZmaXJtYXRpdmUpPC9kaXY+XG4gICAgPGg1Pkdsb2JhbCBDb2xsYWJvcmF0aW9uLCBEaWdpdGFsIExpdGVyYWN5LCBhbmQgUmVtb3RlIFByb2Zlc3Npb25hbCBNYXN0ZXJ5PC9oNT5cbiAgICA8cD48ZW0+UmVzcGVjdGVkIGNoYWlycGVyc29uLCBqdXJ5IG1lbWJlcnMsIGFuZCBkZWFyIGF1ZGllbmNlOjwvZW0+IEkgcmlzZSB0byBkZWZlbmQgdGhlIG1vdGlvbiB0aGF0IG9ubGluZSBlZHVjYXRpb24gaXMgZXF1YWxseSwgaWYgbm90IG1vcmUsIGVmZmVjdGl2ZSBpbiBkZXZlbG9waW5nIG1vZGVybiwgZ2xvYmFsbHkgcmVsZXZhbnQgY29tbXVuaWNhdGlvbiBza2lsbHMuPC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaT48c3Ryb25nPkFsaWdubWVudCB3aXRoIENvbnRlbXBvcmFyeSBHbG9iYWwgV29ya3BsYWNlczo8L3N0cm9uZz4gTW9kZXJuIGNvcnBvcmF0ZSBjb21tdW5pY2F0aW9uIGRvZXMgbm90IGhhcHBlbiBzb2xlbHkgYWNyb3NzIHBoeXNpY2FsIHRhYmxlczsgaXQgdGhyaXZlcyBvbiBab29tLCBNaWNyb3NvZnQgVGVhbXMsIGNvbGxhYm9yYXRpdmUgY2xvdWQgd29ya3NwYWNlcywgYW5kIG11bHRpbmF0aW9uYWwgdmlydHVhbCBib2FyZHJvb21zLiBPbmxpbmUgZWR1Y2F0aW9uIHRyYWlucyBzdHVkZW50cyBpbiBjYW1lcmEgcHJlc2VuY2UsIGNvbmNpc2UgZW1haWwgYXJ0aWN1bGF0aW9uLCBzY3JlZW4tc2hhcmluZyByaGV0b3JpYywgYW5kIGRpZ2l0YWwgZXRpcXVldHRlLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5PdmVyY29taW5nIFNvY2lhbCBJbmhhYml0YXRpb24gJmFtcDsgUHJvbW90aW5nIEluY2x1c2l2ZSBWb2ljZTo8L3N0cm9uZz4gSW4gcGh5c2ljYWwgY2xhc3Nyb29tcywgZG9taW5hbnQsIGV4dHJvdmVydGVkIHZvaWNlcyBvZnRlbiBjcm93ZCBvdXQgaW50cm92ZXJ0ZWQgc3R1ZGVudHMuIERpZ2l0YWwgcGxhdGZvcm1zIHdpdGggdGhyZWFkZWQgZGlzY3Vzc2lvbiBmb3J1bXMsIGNoYXQtYm94IGludGVyYWN0aW9ucywgYW5kIHJlY29yZGVkIHNwZWVjaCBzdWJtaXNzaW9ucyBhbGxvdyBzaHkgbGVhcm5lcnMgdG8gYXJ0aWN1bGF0ZSBhbmFseXRpY2FsIHRob3VnaHRzIHdpdGggY29uZmlkZW5jZS48L2xpPlxuICAgICAgPGxpPjxzdHJvbmc+Qm9yZGVyLUZyZWUgTXVsdGljdWx0dXJhbCBEaWFsZWN0aWNhbCBFeGNoYW5nZTo8L3N0cm9uZz4gT25saW5lIGVkdWNhdGlvbiBhbGxvd3MgYSBzdHVkZW50IGluIENhbGljdXQgdG8gZGViYXRlLCBjb252ZXJzZSwgYW5kIGNvbGxhYm9yYXRlIG9uIGdyb3VwIHByb2plY3RzIHdpdGggcGVlcnMgaW4gVG9reW8sIExvbmRvbiwgb3IgTmV3IFlvcmvigJRmb3N0ZXJpbmcgY3Jvc3MtY3VsdHVyYWwgY29tbXVuaWNhdGlvbiBkZXh0ZXJpdHkgdGhhdCBwaHlzaWNhbCBsb2NhbCBjYW1wdXNlcyBjYW5ub3QgcmVwbGljYXRlLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5Db25jbHVzaW9uOjwvc3Ryb25nPiBDb21tdW5pY2F0aW9uIGhhcyBldm9sdmVkIGludG8gdGhlIGRpZ2l0YWwgZXJhLiBPbmxpbmUgdHJhaW5pbmcgcHJlcGFyZXMgbGVhcm5lcnMgZm9yIHRoZSBib3VuZGFyeWxlc3MgcmVhbGl0eSBvZiB0d2VudHktZmlyc3QtY2VudHVyeSBnbG9iYWwgaW50ZXJhY3Rpb24uPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZGViYXRlLXNpZGUgYWdhaW5zdC1zaWRlXCI+XG4gICAgPGRpdiBjbGFzcz1cInNpZGUtYmFkZ2VcIj7wn5S0IEFnYWluc3QgVGhlIE1vdGlvbiAoTmVnYXRpdmUpPC9kaXY+XG4gICAgPGg1PkJvZHkgTGFuZ3VhZ2UsIFNwb250YW5lb3VzIFJlc29uYW5jZSwgYW5kIFVuZmlsdGVyZWQgSHVtYW4gUHJlc2VuY2U8L2g1PlxuICAgIDxwPjxlbT5SZXNwZWN0ZWQganVyeSwgY2hhaXJwZXJzb24sIGFuZCBmZWxsb3cgcGFydGljaXBhbnRzOjwvZW0+IEkgc3RhbmQgaW4gZmlybSBvcHBvc2l0aW9uIHRvIHRoZSBwcmVtaXNlIHRoYXQgdmlydHVhbCBzY3JlZW5zIGNhbiBldmVyIGVxdWF0ZSB0byB0aGUgcmljaCwgbGl2aW5nIGxhYm9yYXRvcnkgb2YgcGh5c2ljYWwgY29tbXVuaWNhdGlvbi48L3A+XG4gICAgPHVsPlxuICAgICAgPGxpPjxzdHJvbmc+VGhlIExvc3Mgb2YgTm9uLVZlcmJhbCBDb21tdW5pY2F0aW9uOjwvc3Ryb25nPiBDb21tdW5pY2F0aW9uIHRoZW9yaXN0cyByZWNvZ25pemUgdGhhdCBvdmVyIDcwJSBvZiBodW1hbiBjb21tdW5pY2F0aW9uIGlzIG5vbi12ZXJiYWzigJRtaWNyby1mYWNpYWwgZXhwcmVzc2lvbnMsIHBvc3R1cmUsIHBoeXNpY2FsIGVuZXJneSwgaGFuZCBnZXN0dXJlcywgYW5kIGF1dGhlbnRpYyBleWUgY29udGFjdC4gT24gdmlkZW8gY2FsbHMsIGxhdGVuY3ksIGZyb3plbiBzY3JlZW5zLCBhbmQgbXV0ZWQgbWljcm9waG9uZXMgZmxhdHRlbiBpbnRlcnBlcnNvbmFsIGR5bmFtaXNtIGludG8gcm9ib3RpYyBleGNoYW5nZXMuPC9saT5cbiAgICAgIDxsaT48c3Ryb25nPlNwb250YW5lb3VzIEltcHJvdmlzYXRpb24gdnMuIEN1cmF0ZWQgU2NyaXB0aW5nOjwvc3Ryb25nPiBQaHlzaWNhbCBjbGFzc3Jvb21zIGRlbWFuZCByZWFsLXRpbWUgaW1wcm92aXNhdGlvbiwgaGFuZGxpbmcgbGl2ZSBhdWRpZW5jZSBoZWNrbGluZywgc2Vuc2luZyByb29tIHRlbXBlcmF0dXJlLCBhbmQgYWRqdXN0aW5nIHlvdXIgcmhldG9yaWNhbCBjYWRlbmNlIG9uIHRoZSBmbHkuIE9ubGluZSBjb21tdW5pY2F0aW9uIG9mdGVuIGFsbG93cyBwcmVwYXJlZCBub3RlcyBvZmYtc2NyZWVuLCBlbGltaW5hdGluZyB0aGUgZmlyZSB0aGF0IHRlbXBlcnMgZ2VudWluZSBvcmF0b3JpY2FsIHByZXNlbmNlLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5JbmZvcm1hbCBDYW1wdXMgSW50ZXJhY3Rpb24gJmFtcDsgUGVlciBCb25kaW5nOjwvc3Ryb25nPiBUaGUgZmluZXN0IGNvbW11bmljYXRpb24gc2tpbGxzIGFyZSBub3QgYWNxdWlyZWQgZHVyaW5nIGZvcm1hbCBsZWN0dXJlczsgdGhleSBhcmUgZm9yZ2VkIGluIGNhbnRlZW4gZGViYXRlcywgaGFsbHdheSBiYW50ZXJzLCBjdWx0dXJhbCBjb21wZXRpdGlvbnMsIGFuZCBpbXByb21wdHUgc3R1ZGVudCB1bmlvbiBlbGVjdGlvbnMuIFpvb20gbGlua3MgdGVybWluYXRlIHRoZSBzZWNvbmQgYSBsZWN0dXJlIGVuZHMsIHdpcGluZyBvdXQgb3JnYW5pYyBodW1hbiBzb2NpYWxpemF0aW9uLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5Db25jbHVzaW9uOjwvc3Ryb25nPiBBIGNhbWVyYSBsZW5zIGlzIGEgd2luZG93LCBub3QgYSB3b3JsZC4gWW91IGNhbiBsZWFybiBkaWdpdGFsIHN5bnRheCBvbmxpbmUsIGJ1dCB5b3UgbGVhcm4gdHJ1ZSwgZmVhcmxlc3MsIHNvdWwtc3RpcnJpbmcgaHVtYW4gY29tbXVuaWNhdGlvbiBpbiB0aGUgcmVhbCwgdW5maWx0ZXJlZCBwaHlzaWNhbCBwcmVzZW5jZSBvZiBvdGhlcnMuPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiZXhhbVRpcHMiOlsiR3JvdW5kIGFyZ3VtZW50cyBpbiBtb2Rlcm4gcmVhbGl0aWVzOiByZW1vdGUgbXVsdGluYXRpb25hbCB3b3JrcGxhY2VzIHZzLiBib2R5IGxhbmd1YWdlIGFuZCBoYWxsd2F5IHNvY2lhbGl6YXRpb24uIiwiVXNlIHZpdmlkIGNvbnRyYXN0IGltYWdlcnk6ICdjYW1lcmEgbGVucyBpcyBhIHdpbmRvdywgbm90IGEgd29ybGQnLCAnbWljcm8tZmFjaWFsIGV4cHJlc3Npb25zIGFuZCBhdXRoZW50aWMgZXllIGNvbnRhY3QnLiIsIkRlbGl2ZXIgYmFsYW5jZWQsIGhpZ2hseSBhcnRpY3VsYXRlIGRlYmF0ZSBwcm9zZSB0aGF0IGNvbW1hbmRzIG1heGltdW0gZXhhbWluZXIgbWFya3MuIl19XQ=="))));
let pyqActiveFilter = "all";

function renderPyq() {
  const filtered = pyqActiveFilter === "all" ? pyqQuestions : pyqQuestions.filter(function(q) { return q.type === pyqActiveFilter; });
  var filterButtonsHtml = [
    '<button type="button" class="pyq-filter-btn ' + (pyqActiveFilter === "all" ? "active" : "") + '" data-pyq-filter="all">All Questions (9)</button>',
    '<button type="button" class="pyq-filter-btn ' + (pyqActiveFilter === "speech" ? "active" : "") + '" data-pyq-filter="speech">Section A: Speech (3)</button>',
    '<button type="button" class="pyq-filter-btn ' + (pyqActiveFilter === "conversation" ? "active" : "") + '" data-pyq-filter="conversation">Section B: Conversation (3)</button>',
    '<button type="button" class="pyq-filter-btn ' + (pyqActiveFilter === "debate" ? "active" : "") + '" data-pyq-filter="debate">Section C: Debate (3)</button>'
  ].join("");

  var questionsHtml = filtered.map(function(q) {
    var tipsList = q.examTips.map(function(t) { return '<li>' + escapeText(t) + '</li>'; }).join("");
    return '<article class="pyq-item" id="pyq-item-' + q.id + '">' +
      '<div class="pyq-header">' +
        '<span class="pyq-section-badge">' + escapeText(q.section) + '</span>' +
        '<span class="pyq-marks-badge">Question ' + q.num + '</span>' +
      '</div>' +
      '<div class="pyq-question">' +
        '<h4><strong>Q' + q.num + '.</strong> ' + escapeText(q.question) + '</h4>' +
      '</div>' +
      '<div class="pyq-answer-details">' +
        '<div class="pyq-answer-title">✨ ' + escapeText(q.speechTitle) + '</div>' +
        '<div class="pyq-delivery">' + escapeText(q.speechDelivery) + '</div>' +
        '<div class="pyq-body">' + q.bodyHtml + '</div>' +
        '<div class="pyq-tips">' +
          '<div class="pyq-tips-title">💡 Examiner Insights &amp; High-Scoring Tips</div>' +
          '<ul>' + tipsList + '</ul>' +
        '</div>' +
      '</div>' +
    '</article>';
  }).join("");

  card.innerHTML = '<div class="pyq-container">' +
    '<div class="pyq-intro">' +
      '<h3>📄 Calicut University FYUGP 2025 Examination Paper</h3>' +
      '<p><strong>ENG01A 101 — Communication Skills in English: Listening and Speaking</strong><br>First Semester Five Year Integrated P.G. Programme (2025 Admission) · Maximum Marks: 50 · Time: 3 Hours</p>' +
      '<div class="pyq-meta-tags">' +
        '<span class="pyq-tag">🎯 EN25110101B</span>' +
        '<span class="pyq-tag">📝 Model Answers &amp; Marking Rubrics</span>' +
        '<span class="pyq-tag">💡 Speech Writing, Conversations &amp; Debates</span>' +
      '</div>' +
    '</div>' +
    '<div class="pyq-nav-filter">' + filterButtonsHtml + '</div>' +
    '<div class="pyq-list" style="display:flex; flex-direction:column; gap:16px;">' + questionsHtml + '</div>' +
  '</div>';

  var filterBtns = card.querySelectorAll("[data-pyq-filter]");
  for (var i = 0; i < filterBtns.length; i++) {
    (function(btn) {
      btn.onclick = function() {
        pyqActiveFilter = btn.dataset.pyqFilter;
        renderPyq();
      };
    })(filterBtns[i]);
  }
}

function render(focus = false) {
  if (mode === 'pyq') {
    renderPyq();
    if (focus) card.focus();
    return;
  }

  const state = states[mode];
  const list = lessons[mode];
  if (state.finished) {
    renderResults(state, list);
  } else {
    const question = list[state.index];
    const answer = state.answers[state.index];
    const answered = answer !== undefined;
    const number = state.index + 1;
    const label = mode === "match" ? "Set" : "Question";
    const title = mode === "match" ? "Match each idiom to its meaning" : question.title;
    const completed = Object.keys(state.answers).length;
    card.innerHTML = \`
      <div class="status"><span>\${label} \${number} of \${list.length}</span><span>\${completed} checked</span></div>
      <progress aria-label="\${label}s checked" value="\${completed}" max="\${list.length}"></progress>
      <h2 tabindex="-1">\${escapeText(title)}</h2>
      <p class="prompt">\${mode === "match" ? "Choose one meaning for each idiom, then check all five." : question.prompt || "Choose the expression that best completes the sentence."}</p>
      \${mode === "match" ? matchMarkup(question, answer) : choicesMarkup(question, answer)}
      <div class="feedback" id="feedback" role="status" tabindex="-1">\${answered ? feedbackMarkup(question, answer) : ""}</div>
      <div class="actions">
        <button class="secondary" id="previous" \${number === 1 ? "disabled" : ""}>← Previous</button>
        <button class="primary" id="advance" \${answered ? "" : "disabled"}>\${!answered && mode === "match" ? "Check matches" : number === list.length ? "See results" : "Next →"}</button>
      </div>\`;
    bindQuestion(state, question, answered, list.length);
  }
  if (focus) card.querySelector("h2").focus();
}

function choicesMarkup(question, answer) {
  return \`<div class="choices">\${question.options.map((option, i) => {
    const checked = answer !== undefined;
    const good = checked && option === question.correct;
    const bad = checked && option === answer && !good;
    return \`<button class="choice \${good ? "good" : bad ? "bad" : ""}" data-choice="\${i}" \${checked ? "disabled" : ""}>
      <span class="letter">\${"ABCD"[i]}</span><span>\${escapeText(option)}</span>
      \${good || bad ? \`<span class="mark">\${good ? "✓" : "✕"}<span hidden>\${good ? " Correct answer" : " Your incorrect answer"}</span></span>\` : ""}
    </button>\`;
  }).join("")}</div>\`;
}

function examplesMarkup(id) {
  return \`<ul class="tense-examples" aria-label="Example sentences">\${["Past", "Present", "Future"].map((label, i) =>
    \`<li><strong>\${label}</strong> \${escapeText(tenseExamples[id][i])}</li>\`).join("")}</ul>\`;
}

function matchMarkup(question, answer) {
  return question.ids.map((id, row) => {
    const checked = answer !== undefined;
    const correct = checked && answer[row] === id;
    return \`<div class="match">
      <label for="match-\${row}"><strong>\${escapeText(idioms[id][0])}</strong></label>
      <select id="match-\${row}" \${checked ? "disabled" : ""}>
        <option value="">Choose a meaning</option>
        \${question.order.map(option => \`<option value="\${option}" \${checked && answer[row] === option ? "selected" : ""}>\${escapeText(idioms[option][1])}</option>\`).join("")}
      </select>
      \${checked ? \`<div class="match-feedback"><strong>\${correct ? "✓ Correct" : "✕ Correct match"} · \${escapeText(idioms[id][1])}</strong><br>\${escapeText(idioms[id][2])}\${examplesMarkup(id)}</div>\` : ""}
    </div>\`;
  }).join("");
}

function feedbackMarkup(question, answer) {
  if (mode === "match") {
    const count = question.ids.filter((id,i) => id === answer[i]).length;
    return \`<div class="message \${count === 5 ? "good" : "bad"}"><strong>\${count} of 5 matched correctly</strong><p>Each row shows the correct meaning and an example of how the idiom is used.</p></div>\`;
  }
  const correct = answer === question.correct;
  const explanation = mode === "practice"
    ? \`“\${question.title}” means “\${question.correct.toLowerCase()}.”\`
    : \`The sentence calls for “\${question.correct}.”\`;
  return \`<div class="message \${correct ? "good" : "bad"}">
    <strong>\${correct ? "✓ Correct" : "✕ Incorrect"}</strong>
    <p>\${escapeText(explanation)}</p><p><b>\${mode === "practice" ? "In context" : "Why"}.</b> \${escapeText(question.why)}</p>
    \${examplesMarkup(question.idiomId)}
  </div>\`;
}

function bindQuestion(state, question, answered, length) {
  const advance = card.querySelector("#advance");
  const selects = [...card.querySelectorAll("select")];
  function check(answer) {
    state.answers[state.index] = answer;
    render();
    card.querySelector("#feedback").focus();
  }
  for (const button of card.querySelectorAll("[data-choice]")) {
    button.onclick = () => check(question.options[Number(button.dataset.choice)]);
  }
  for (const select of selects) {
    select.onchange = () => { advance.disabled = selects.some(field => field.value === ""); };
  }
  advance.onclick = () => {
    if (!answered) {
      check(selects.map(field => Number(field.value)));
      return;
    }
    if (state.index + 1 === length) state.finished = true;
    else state.index++;
    render(true);
  };
  card.querySelector("#previous").onclick = () => {
    state.index--;
    render(true);
  };
}

function renderResults(state, list) {
  const missed = [];
  for (const [i, question] of list.entries()) {
    const answer = state.answers[i];
    if (mode === "match") {
      question.ids.forEach((id, row) => {
        if (answer[row] !== id) missed.push(idioms[id]);
      });
    } else if (answer !== question.correct) {
      missed.push(mode === "practice" ? [question.title,question.correct,question.why] : [question.correct,question.why]);
    }
  }
  const total = mode === "match" ? list.length * 5 : list.length;
  card.innerHTML = \`<div class="status">Section complete</div><h2 tabindex="-1">\${total - missed.length} of \${total} correct</h2>
    \${missed.length ? \`<p class="prompt">Review the answers you missed.</p><ol class="review">\${missed.map(([title,meaning,example]) =>
      \`<li><strong>\${escapeText(title)}</strong><br>\${escapeText(meaning)}\${example ? \`<br>\${escapeText(example)}\` : ""}</li>\`).join("")}</ol>\` :
      "<p class='prompt'>You answered every question in this section correctly.</p>"}
    <button class="primary" id="retry">Try this section again</button>\`;
  card.querySelector("#retry").onclick = () => {
    states[mode] = makeState();
    render(true);
  };
}
for (const tab of document.querySelectorAll("[data-mode]")) {
  tab.onclick = () => {
    mode = tab.dataset.mode;
    document.querySelectorAll("[data-mode]").forEach(item => item.setAttribute("aria-pressed",String(item === tab)));
    render(true);
  };
}
render();
</script>
</body>
</html>`;

export default quizAppHtml;

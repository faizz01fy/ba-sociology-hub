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
  padding: clamp(32px, 6vw, 56px) 16px clamp(52px, 8vw, 76px);
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
  margin-bottom: 18px;
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
  margin-bottom: 12px;
}
.hero h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.3rem, 6vw, 3.6rem);
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
  margin-top: -38px !important;
  padding-bottom: 50px;
}

.tabs {
  display: flex;
  gap: 6px;
  padding: 6px;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: var(--shadow-lg);
}
.tabs button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 10px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: var(--ink-secondary);
  font-weight: 700;
  font-size: clamp(0.85rem, 2.2vw, 0.98rem);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
  if (heroDesc) heroDesc.textContent = "Targeted practice covering the first 25 syllabus idioms with MCQs, context sentence fill-in-the-blank, and 5 interactive matching sets.";
  if (footerText) footerText.textContent = "25 Idioms Test for Internal Exam Prep · Calicut University FYUGP";
  if (countPractice) countPractice.textContent = "25 Qs";
  if (countContext) countContext.textContent = "25 Qs";
  if (countMatch) countMatch.textContent = "5 Sets";
}

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


const pyqQuestions = JSON.parse("[{\"id\":1,\"num\":1,\"section\":\"Section A: Speech Writing (10 Marks)\",\"question\":\"You are a successful independent woman entrepreneur. Draft a speech inspiring the younger generation on the importance of education in living a life of independence.\",\"meta\":\"1x10 = 10 Marks · Speech Writing · Inspiring the Youth\",\"speechTitle\":\"The Shield of Knowledge: Education as the True Engine of Independence\",\"speechDelivery\":\"Respected dignitaries on the dais, teachers, and my brilliant young friends,\",\"bodyHtml\":\"\\n<p><strong>Salutation &amp; Hook:</strong> Respected faculty, mentors, and the unstoppable young minds gathered here today—good morning. Standing before you as an entrepreneur who built a venture from the ground up, people often ask me about my greatest asset. Was it initial venture capital? Was it luck? Or was it market timing? My answer is always immediate and unwavering: it was my education.</p>\\n\\n<p><strong>Core Argument:</strong> Education is neither a paper credential nor just an entry ticket to your first job. Education is the ultimate architect of human dignity and self-reliance. When you educate yourself, you do not merely learn how to answer examination questions; you train your mind to think critically, evaluate risks, question arbitrary boundaries, and solve problems that others walk away from. For any young individual—and particularly for young women—education is the shield that ensures you never have to depend on someone else's mercy, permission, or validation to design your future.</p>\\n\\n<p><strong>Overcoming Obstacles:</strong> When I set out into the business ecosystem, the headwinds were real. There were moments of doubt, financial constraints, and skeptics who believed independent enterprise was too turbulent a path. But books, intellectual discipline, and academic grounding taught me resilience. Financial literacy gave me the confidence to read balance sheets; communication skills gave me the voice to negotiate in boardrooms; and ethical education taught me to lead with empathy.</p>\\n\\n<p><strong>Call to Action:</strong> Do not treat your student years lightly. Guard your curiosity with fierce dedication. Learn science, understand finance, master digital tools, and articulate your thoughts with boldness. When you master your knowledge, you master your destiny. Step forward into the world not seeking patrons, but as architects of your own independence. Thank you, and may your journey be limitless!</p>\\n\",\"examTips\":[\"Follow standard speech structure: Engaging salutation, self-introduction, core message, supporting examples, and memorable call to action.\",\"Use rhetorical questions and direct address ('my friends', 'ask yourself') to keep listeners invested.\",\"Adopt an uplifting, authoritative yet relatable tone.\"]},{\"id\":2,\"num\":2,\"section\":\"Section A: Speech Writing (10 Marks)\",\"question\":\"You are an environmental educator. You are invited to speak at a seminar on climate change. Write a speech on this topic.\",\"meta\":\"1x10 = 10 Marks · Speech Writing · Climate Action & Responsibility\",\"speechTitle\":\"Beyond The Tipping Point: Turning Ecological Consciousness into Urgent Action\",\"speechDelivery\":\"Distinguished guests, fellow researchers, and conscious citizens,\",\"bodyHtml\":\"\\n<p><strong>Opening Impact:</strong> Good morning. We gather here today under the banner of climate science, but let us begin with complete honesty: climate change is no longer a distant theoretical graph projecting temperatures into the late twenty-first century. It is the scorching heatwave drying our watersheds, the unseasonal floods submerging agricultural heartlands, and the rising sea levels chipping away at coastal communities right outside our windows.</p>\\n\\n<p><strong>Scientific Context:</strong> As an environmental educator who spends time both in scientific laboratories and rural ecosystems, I have witnessed the fragile balance unravel. The scientific consensus is unanimous—we are fast approaching planetary tipping points. Carbon emissions, unabated deforestation, and industrial waste have destabilized cycles that took millions of years to stabilize. Yet, despair is a luxury the current generation cannot afford. Despair leads to inaction, and inaction is surrender.</p>\\n\\n<p><strong>Systemic &amp; Local Action:</strong> Real environmental transition demands a dual approach: systemic policy accountability and grassroots ecological responsibility. We must demand carbon taxation, renewable grid integration, and strict conservation laws from our policymakers. Concurrently, in our universities and homes, we must pioneer a zero-waste culture, regenerate native green covers, and transition away from single-use plastics. Every unit of energy conserved and every local biodiversity patch preserved strengthens community resilience.</p>\\n\\n<p><strong>Closing Charge:</strong> The Earth will endure; the question is whether human civilization will maintain the environmental grace to live upon it. Let history record that when our planet stood at the crossroads of ecological crisis, this generation did not offer excuses—we offered courage, intellect, and collective renewal. Let us act today. Thank you.</p>\\n\",\"examTips\":[\"Balance alarming environmental facts with empowering, actionable solutions.\",\"Incorporate environmental terminology naturally: tipping points, biodiversity, carbon footprint, ecological resilience.\",\"Conclude with an impassioned appeal that lingers in the minds of the audience.\"]},{\"id\":3,\"num\":3,\"section\":\"Section A: Speech Writing (10 Marks)\",\"question\":\"You are a social media star. You are invited to inaugurate a function. Write a speech on the impact of social media on the young generation.\",\"meta\":\"1x10 = 10 Marks · Speech Writing · Social Media Impact\",\"speechTitle\":\"Curated Feeds vs. Authentic Lives: Mastering the Algorithm Before It Masters You\",\"speechDelivery\":\"Respected organisers, teachers, creative minds, and beloved friends,\",\"bodyHtml\":\"\\n<p><strong>Relatable Opening:</strong> Good morning everyone! It is an immense privilege to inaugurate this vibrant event. Most of you probably know me through a glowing rectangular screen—a two-minute video reel, a viral soundbite, or a carefully color-graded photograph. But today, standing before you in three dimensions, I want to step behind the camera filter and speak from the heart about the double-edged sword shaping our generation: social media.</p>\\n\\n<p><strong>The Bright Side:</strong> Let us acknowledge the immense democratic power of social platforms. Never in human history has a teenager with a smartphone had the power to broadcast poetry to millions, crowdfund relief funds during natural disasters, organize social movements, or launch international creative ventures without waiting for traditional gatekeepers. Social media has created communities where marginalized voices find solace, solidarity, and empowerment.</p>\\n\\n<p><strong>The Hidden Cost:</strong> But as someone who navigates the digital engine daily, I see the shadows as clearly as the spotlight. Algorithms are engineered not for your mental health, but for your continuous engagement. In the pursuit of algorithmic approval, we risk trading deep focus for dopamine hits, and authentic reality for curated perfection. Comparison is the thief of joy, and comparing your behind-the-scenes reality with someone else's highlight reel breeds anxiety and loneliness. Furthermore, the digital echo chamber often erodes our ability to engage with nuanced, diverse viewpoints.</p>\\n\\n<p><strong>The Prescription:</strong> My dear friends, use social media as a tool to create, to learn, and to connect—never as a mirror to determine your self-worth. Build digital discipline: curate your feed with creators who educate and inspire, take regular screen detoxes, and nurture offline friendships. Let social media amplify your gifts, but never let it dictate your soul. I take immense joy in declaring this event officially open! Thank you!</p>\\n\",\"examTips\":[\"Acknowledge the speaker persona: Speak as a social media creator with authentic insider insights.\",\"Maintain a balanced view: highlight democratic creativity while critiquing algorithmic addiction and mental health impacts.\",\"Include the official ceremonial inauguration phrase towards the end.\"]},{\"id\":4,\"num\":4,\"section\":\"Section B: Conversation Writing (15 Marks)\",\"question\":\"Write a conversation among your classmates regarding the changes that you want to see in the University. (At least 15 turns, with each turn by a different speaker).\",\"meta\":\"1x15 = 15 Marks · Conversation Writing · University Reforms (16 Distinct Turns)\",\"speechTitle\":\"Dialogue: Reimagining Our University Campus for 21st Century Needs\",\"speechDelivery\":\"Setting: College courtyard during the afternoon break. Classmates Rahul, Ananya, and Farhan discuss campus improvements.\",\"bodyHtml\":\"\\n<div class=\\\"dialogue-box\\\">\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">1. Rahul:</span> Hey guys, did you notice how overcrowded the central library study hall was this morning before the internal test?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">2. Ananya:</span> Absolutely! I had to wander across three floors just to find a single desk with a functioning power outlet.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">3. Farhan:</span> That is exactly why university infrastructure needs urgent modernizing. We need dedicated 24x7 collaborative study lounges with high-speed campus Wi-Fi.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">4. Rahul:</span> That is a solid point, Farhan. And while we talk about tech facilities, our student portal is another headache—it constantly crashes on semester registration day!</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">5. Ananya:</span> Tell me about it! The entire digital administration must be revamped with an intuitive, mobile-responsive portal for attendance, hall tickets, and mark sheets.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">6. Farhan:</span> Beyond technology, what about our cafeteria? The food options are repetitive and lack nutritional balance for students staying on campus until evening.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">7. Rahul:</span> I couldn't agree more, Farhan. A subsidized canteen with fresh, hygienic, and affordable choices would make a world of difference.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">8. Ananya:</span> But what concerns me most is the classroom pedagogy. Don't you feel our curriculum is still too theory-heavy and exam-centric?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">9. Farhan:</span> You hit the nail on the head, Ananya. We need more hands-on workshops, field research, and industrial internships integrated directly into our semester credits.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">10. Rahul:</span> Exactly! And guest masterclasses with industry practitioners should become a monthly feature rather than a rare annual event.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">11. Ananya:</span> What about student welfare? The university desperately needs a dedicated, confidential mental wellness counselling center with licensed psychologists.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">12. Farhan:</span> That is a crucial observation. Semester pressures and career anxieties can take a heavy toll on students, and campus support must be proactive.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">13. Rahul:</span> Let us not forget sports and creative clubs. Our sports ground and auditorium audio systems have been awaiting renovation for over a year.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">14. Ananya:</span> True. A university should be an ecosystem that nurtures whole individuals, not just exam roll numbers.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">15. Farhan:</span> Why don't we draft a constructive proposal incorporating these five key points and submit it through the Student Union representative to the Dean?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">16. Rahul:</span> Excellent idea! Let's sit together after class, put our petition down on paper, and gather student signatures across all departments.</div>\\n</div>\\n\",\"examTips\":[\"Strictly fulfill the rubric: Provide at least 15 clear, numbered turns with natural progression and varied speakers.\",\"Keep conversational markers active ('Hey guys', 'Tell me about it', 'I couldn't agree more').\",\"Conclude with a proactive resolution (drafting a constructive petition).\"]},{\"id\":5,\"num\":5,\"section\":\"Section B: Conversation Writing (15 Marks)\",\"question\":\"Write a conversation that you will have with your friends on the use of AI. (At least 15 turns, with each turn by a different speaker).\",\"meta\":\"1x15 = 15 Marks · Conversation Writing · The Impact & Ethics of AI (16 Distinct Turns)\",\"speechTitle\":\"Dialogue: AI in Academics and Society — Tool of Liberation or Crutch?\",\"speechDelivery\":\"Setting: Campus cafeteria table after a lecture on emerging technologies. Friends Zoya, Arjun, and Meera share perspectives.\",\"bodyHtml\":\"\\n<div class=\\\"dialogue-box\\\">\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">1. Zoya:</span> Arjun, I saw you experimenting with that AI code assistant yesterday. Did it actually debug your entire programming assignment?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">2. Arjun:</span> It did, Zoya! In less than thirty seconds, it identified a syntax bug that had kept me scratching my head for two hours.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">3. Meera:</span> That sounds remarkably efficient, but doesn't it worry you that relying on AI might dull our own problem-solving skills over time?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">4. Arjun:</span> I see your point, Meera, but I look at AI like a modern scientific calculator. It automates repetitive syntax so we can focus on higher-level system logic.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">5. Zoya:</span> That holds true in computer science, but what about literature and essay writing? Many students just prompt an AI to generate complete assignments without reading the source material.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">6. Meera:</span> Exactly, Zoya! When you bypass reading and struggle, you bypass cognitive development and the joy of original creative voice.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">7. Arjun:</span> I agree that blind copy-pasting is academic dishonesty. But what if we use AI as an intelligent Socratic tutor to clarify difficult concepts and brainstorm angles?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">8. Zoya:</span> That is a constructive way to employ it. When used to summarize complex journal papers or create mock test quizzes, it significantly boosts learning velocity.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">9. Meera:</span> Still, what about the broader ethical questions? What about algorithmic bias, data privacy, and the displacement of entry-level jobs?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">10. Arjun:</span> Those challenges are deeply serious. Millions of automated tasks might wipe out traditional roles unless young graduates upskill in AI governance and prompt engineering.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">11. Zoya:</span> Furthermore, training these massive models consumes immense electrical energy and water for server cooling, which impacts our climate crisis.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">12. Meera:</span> Not to mention intellectual property! Generative models train on millions of artists' and writers' original work without fair attribution or compensation.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">13. Arjun:</span> Those are valid critiques. That is why international regulatory frameworks and transparent copyright guidelines are urgently needed.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">14. Zoya:</span> It all boils down to conscious agency: AI should be a copilot that expands human capability, never an autopilot that replaces human conscience.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">15. Meera:</span> Very well articulated, Zoya. We must remain thinkers who utilize the machine, rather than consumers shaped by the algorithm.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">16. Arjun:</span> Agreed. Let us make sure we understand both its immense potential and its ethical boundaries as we prepare for future careers.</div>\\n</div>\\n\",\"examTips\":[\"Ensure at least 15 balanced dialogue turns covering technical benefits, ethical dilemmas, and academic integrity.\",\"Show genuine debate: speakers challenge and refine each other's viewpoints politely.\",\"Conclude with a balanced consensus on ethical AI co-existence.\"]},{\"id\":6,\"num\":6,\"section\":\"Section B: Conversation Writing (15 Marks)\",\"question\":\"Imagine you are applying for an internship. Write a conversation that you will have with your teacher seeking guidance. (At least 15 turns, with each turn by a different speaker).\",\"meta\":\"1x15 = 15 Marks · Conversation Writing · Mentorship & Internship Guidance (16 Distinct Turns)\",\"speechTitle\":\"Dialogue: Seeking Academic Mentorship for a Summer Research Internship\",\"speechDelivery\":\"Setting: Faculty Department office. Student Karthik knocks and consults his English & Research Mentor, Dr. Priya.\",\"bodyHtml\":\"\\n<div class=\\\"dialogue-box\\\">\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">1. Karthik:</span> Good morning, Dr. Priya. May I take a few moments of your time to discuss my summer internship plans?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">2. Dr. Priya:</span> Good morning, Karthik! Please take a seat. I would be delighted to help. What specific internship opportunity are you targeting?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">3. Karthik:</span> Thank you, ma'am. The National Center for Policy Research has announced their undergraduate summer research fellowship in developmental communication.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">4. Dr. Priya:</span> That is a prestigious fellowship! It aligns exceptionally well with your coursework in public communication and research writing. Have you checked the eligibility criteria?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">5. Karthik:</span> Yes, ma'am. They require a minimum 75% aggregate score, an updated curriculum vitae, and a 500-word Statement of Purpose explaining our research interests.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">6. Dr. Priya:</span> Excellent. Your academic record is strong. Where do you feel you need the most refinement at this stage?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">7. Karthik:</span> Honestly, ma'am, I am feeling slightly overwhelmed while drafting the Statement of Purpose. I am unsure how to stand out among applicants from across the country.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">8. Dr. Priya:</span> That is completely natural. The key to a compelling SOP is specificity: do not just state that you love communication; connect your classroom learnings to real community issues.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">9. Karthik:</span> Could I mention the rural field survey on local information access that our team conducted during the last semester?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">10. Dr. Priya:</span> Absolutely! Highlight your methodology, the data gathering challenges you solved, and what empirical insights you derived. That proves hands-on competence.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">11. Karthik:</span> Understood, ma'am. Should I also include references to the published work of the fellowship's lead research professors?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">12. Dr. Priya:</span> Most definitely. Showing that you have read their recent policy briefs demonstrates intellectual curiosity and genuine dedication to their mandate.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">13. Karthik:</span> That clarifies my roadmap immensely. Also, the guidelines state that we need an academic letter of recommendation. Would you be willing to support my candidacy?</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">14. Dr. Priya:</span> I would be more than happy to write a strong recommendation for you, Karthik, given your consistency and academic diligence in class.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">15. Karthik:</span> I am profoundly grateful for your kindness and mentorship, Dr. Priya. I will polish my draft and send it to your email by tomorrow afternoon for review.</div>\\n  <div class=\\\"turn\\\"><span class=\\\"speaker\\\">16. Dr. Priya:</span> Please do so. Review it with a sharp critical eye, proofread thoroughly, and believe in your capabilities. Best of luck!</div>\\n</div>\\n\",\"examTips\":[\"Maintain professional, respectful register appropriate for a student-mentor dialogue.\",\"Incorporate practical internship elements: Statement of Purpose (SOP), CV, eligibility, recommendations.\",\"Ensure sequential turn-taking with at least 15 complete sentences.\"]},{\"id\":7,\"num\":7,\"section\":\"Section C: Debate Writing (15 Marks)\",\"question\":\"AI can replace teachers.\",\"meta\":\"1x15 = 15 Marks · Debate Writing · Comprehensive 'For' and 'Against' Arguments\",\"speechTitle\":\"Debate Motion: 'AI Can Replace Teachers'\",\"speechDelivery\":\"Formal Parliamentary Debate format presenting both 'For the Motion' and 'Against the Motion' arguments.\",\"bodyHtml\":\"\\n<div class=\\\"debate-duo\\\">\\n  <div class=\\\"debate-side for-side\\\">\\n    <div class=\\\"side-badge\\\">🟢 For The Motion (Affirmative)</div>\\n    <h5>Knowledge Scalability, Personalization, and Universal Equity</h5>\\n    <p><em>Respected jury, chairperson, and worthy opponents:</em> I stand in strong affirmation of the motion that Artificial Intelligence can, and in many respects will, replace the traditional role of teachers.</p>\\n    <ul>\\n      <li><strong>Hyper-Personalized Adaptive Pedagogy:</strong> Human teachers, no matter how gifted, face severe cognitive limitations managing a classroom of forty or fifty diverse learners. AI algorithms assess a student's real-time comprehension speed, adapt quiz difficulty, identify micro-conceptual gaps, and tailor customized explanations that match each student's unique learning curve.</li>\\n      <li><strong>Universal 24x7 Accessibility:</strong> World-class instruction shouldn't be gated by expensive private school fees or geographic luck. An AI teacher operates around the clock across smartphones, breaking linguistic barriers with instantaneous translation and bringing high-tier education to remote, underprivileged learners globally.</li>\\n      <li><strong>Infinite Patience &amp; Objective Evaluation:</strong> AI educators never suffer from physical fatigue, stress, emotional burnout, or personal bias. Every student query is met with identical patience, and assignments are graded strictly against objective rubrics without subconscious favouritism.</li>\\n      <li><strong>Conclusion:</strong> The classical model of a teacher lecturing on a blackboard is antiquated. When technology can teach faster, adapt deeper, and democratize knowledge globally, AI stands ready to assume the pedagogical mantle.</li>\\n    </ul>\\n  </div>\\n\\n  <div class=\\\"debate-side against-side\\\">\\n    <div class=\\\"side-badge\\\">🔴 Against The Motion (Negative)</div>\\n    <h5>Empathy, Moral Mentorship, and the Human Soul of Pedagogy</h5>\\n    <p><em>Respected jury, chairperson, and esteemed members:</em> I stand in vehement opposition to the reductionist motion that AI can ever replace real teachers.</p>\\n    <ul>\\n      <li><strong>Teaching is Empathy, Not Mere Data Transfer:</strong> An algorithm can process syntax, but it cannot look into the tired eyes of a despondent child, perceive emotional grief, or offer a comforting word that prevents a student from giving up on life. Education is fundamentally a relational encounter rooted in human empathy.</li>\\n      <li><strong>Inculcation of Values and Moral Imagination:</strong> Great teachers do not merely dispense syllabi; they cultivate integrity, civic courage, democratic responsibility, and ethical conscience. A silicon model trained on historical statistical correlations cannot model moral bravery or inspire character.</li>\\n      <li><strong>Creative Spark &amp; Socratic Inquiry:</strong> True education occurs when a mentor challenges students to question premises, spark spontaneous classroom debates, and invent unprecedented paradigms. AI merely reconfigures existing text; it lacks spontaneous human passion and creative intuition.</li>\\n      <li><strong>Conclusion:</strong> Machines can be brilliant instructional calculators, but they can never be teachers. To replace a teacher with an algorithm is to reduce the human soul of learning to mere data points. The human teacher remains irreplaceable.</li>\\n    </ul>\\n  </div>\\n</div>\\n\",\"examTips\":[\"Present both sides with equal analytical depth and rhetorical power.\",\"Use formal debate markers ('The motion before us today is...', 'I stand in strong affirmation...', 'My worthy opponents argue, but...').\",\"Highlight structural contrasts: Algorithmic scalability vs. human emotional mentorship.\"]},{\"id\":8,\"num\":8,\"section\":\"Section C: Debate Writing (15 Marks)\",\"question\":\"Education of women determines the development of a nation.\",\"meta\":\"1x15 = 15 Marks · Debate Writing · Comprehensive 'For' and 'Against' Arguments\",\"speechTitle\":\"Debate Motion: 'Education of Women Determines the Development of a Nation'\",\"speechDelivery\":\"Formal Parliamentary Debate format presenting persuasive arguments on both sides.\",\"bodyHtml\":\"\\n<div class=\\\"debate-duo\\\">\\n  <div class=\\\"debate-side for-side\\\">\\n    <div class=\\\"side-badge\\\">🟢 For The Motion (Affirmative)</div>\\n    <h5>The Multiplier Effect: Economic Prosperity, Health, and Generational Progress</h5>\\n    <p><em>Honourable adjudicators, worthy opponents, and respected audience:</em> I unequivocally affirm that the education of women is the primary linchpin governing the comprehensive development of any civilization.</p>\\n    <ul>\\n      <li><strong>Unlocking 50% of National Economic Potential:</strong> Keeping women undereducated artificially cuts a nation's intellectual, entrepreneurial, and productive labor force in half. Empirical studies by the World Bank demonstrate that every additional year of secondary education for women exponentially raises national GDP and industrial output.</li>\\n      <li><strong>Intergenerational Health &amp; Demographic Vitality:</strong> As the timeless African proverb states, 'Educate a man and you educate an individual; educate a woman and you educate a family and nation.' Educated women ensure maternal survival, dramatically reduce infant malnutrition, ensure childhood vaccination, and invest up to 90% of their earnings back into family education.</li>\\n      <li><strong>Democratic Governance &amp; Social Justice:</strong> Nations with highly educated female populations consistently exhibit lower corruption indices, more humane social welfare legislation, and stronger rule of law. Women's leadership transforms policy priorities toward education, healthcare, and peacebuilding.</li>\\n      <li><strong>Conclusion:</strong> No nation has ever achieved enduring development while leaving its daughters in darkness. Female education is not a luxury—it is the foundational prerequisite of national sovereignty and progress.</li>\\n    </ul>\\n  </div>\\n\\n  <div class=\\\"debate-side against-side\\\">\\n    <div class=\\\"side-badge\\\">🔴 Against The Motion (Negative)</div>\\n    <h5>Holistic Development: The Primacy of Multi-Pillar Institutional Systems</h5>\\n    <p><em>Honourable adjudicators and respected gathering:</em> While no rational mind disputes the intrinsic value of women's literacy, I oppose the motion's totalizing assertion that female education *alone* determines national development.</p>\\n    <ul>\\n      <li><strong>The Trap of Institutional Determinism:</strong> Several developing economies have achieved near-universal female literacy, yet remain plagued by systemic poverty, high educated unemployment, and debt due to corrupt governance, lack of industrial infrastructure, and fiscal mismanagement.</li>\\n      <li><strong>Economic Development Demands Comprehensive Systems:</strong> Real national development requires stable energy grids, transparent judicial institutions, robust manufacturing, physical safety, and macroeconomic stability. Without capital and job creation, education alone cannot produce economic salvation.</li>\\n      <li><strong>Universal, Non-Siloed Human Development:</strong> Development cannot be segregated by gender. Uplifting a nation demands simultaneous focus on healthcare infrastructure, agrarian reform, scientific innovation, and universal primary education for boys and girls alike.</li>\\n      <li><strong>Conclusion:</strong> Women's education is a vital catalyst, but it cannot function in an institutional vacuum. To claim it single-handedly determines development ignores the complex economic, political, and infrastructural machinery required to elevate a nation.</li>\\n    </ul>\\n  </div>\\n</div>\\n\",\"examTips\":[\"Notice the nuanced strategy for the negative side: Never attack women's education, but challenge the word 'determines' as an oversimplification of multi-factorial economic development.\",\"Include empirical data references (World Bank statistics, demographic transition).\",\"Conclude each speech with crisp rhetorical synthesis.\"]},{\"id\":9,\"num\":9,\"section\":\"Section C: Debate Writing (15 Marks)\",\"question\":\"Online mode of education is as effective as offline mode for enhancing communication skills.\",\"meta\":\"1x15 = 15 Marks · Debate Writing · Comprehensive 'For' and 'Against' Arguments\",\"speechTitle\":\"Debate Motion: 'Online Education Is As Effective As Offline Education for Enhancing Communication Skills'\",\"speechDelivery\":\"Formal Parliamentary Debate format contrasting digital communication paradigms with physical interpersonal interaction.\",\"bodyHtml\":\"\\n<div class=\\\"debate-duo\\\">\\n  <div class=\\\"debate-side for-side\\\">\\n    <div class=\\\"side-badge\\\">🟢 For The Motion (Affirmative)</div>\\n    <h5>Global Collaboration, Digital Literacy, and Remote Professional Mastery</h5>\\n    <p><em>Respected chairperson, jury members, and dear audience:</em> I rise to defend the motion that online education is equally, if not more, effective in developing modern, globally relevant communication skills.</p>\\n    <ul>\\n      <li><strong>Alignment with Contemporary Global Workplaces:</strong> Modern corporate communication does not happen solely across physical tables; it thrives on Zoom, Microsoft Teams, collaborative cloud workspaces, and multinational virtual boardrooms. Online education trains students in camera presence, concise email articulation, screen-sharing rhetoric, and digital etiquette.</li>\\n      <li><strong>Overcoming Social Inhabitation &amp; Promoting Inclusive Voice:</strong> In physical classrooms, dominant, extroverted voices often crowd out introverted students. Digital platforms with threaded discussion forums, chat-box interactions, and recorded speech submissions allow shy learners to articulate analytical thoughts with confidence.</li>\\n      <li><strong>Border-Free Multicultural Dialectical Exchange:</strong> Online education allows a student in Calicut to debate, converse, and collaborate on group projects with peers in Tokyo, London, or New York—fostering cross-cultural communication dexterity that physical local campuses cannot replicate.</li>\\n      <li><strong>Conclusion:</strong> Communication has evolved into the digital era. Online training prepares learners for the boundaryless reality of twenty-first-century global interaction.</li>\\n    </ul>\\n  </div>\\n\\n  <div class=\\\"debate-side against-side\\\">\\n    <div class=\\\"side-badge\\\">🔴 Against The Motion (Negative)</div>\\n    <h5>Body Language, Spontaneous Resonance, and Unfiltered Human Presence</h5>\\n    <p><em>Respected jury, chairperson, and fellow participants:</em> I stand in firm opposition to the premise that virtual screens can ever equate to the rich, living laboratory of physical communication.</p>\\n    <ul>\\n      <li><strong>The Loss of Non-Verbal Communication:</strong> Communication theorists recognize that over 70% of human communication is non-verbal—micro-facial expressions, posture, physical energy, hand gestures, and authentic eye contact. On video calls, latency, frozen screens, and muted microphones flatten interpersonal dynamism into robotic exchanges.</li>\\n      <li><strong>Spontaneous Improvisation vs. Curated Scripting:</strong> Physical classrooms demand real-time improvisation, handling live audience heckling, sensing room temperature, and adjusting your rhetorical cadence on the fly. Online communication often allows prepared notes off-screen, eliminating the fire that tempers genuine oratorical presence.</li>\\n      <li><strong>Informal Campus Interaction &amp; Peer Bonding:</strong> The finest communication skills are not acquired during formal lectures; they are forged in canteen debates, hallway banters, cultural competitions, and impromptu student union elections. Zoom links terminate the second a lecture ends, wiping out organic human socialization.</li>\\n      <li><strong>Conclusion:</strong> A camera lens is a window, not a world. You can learn digital syntax online, but you learn true, fearless, soul-stirring human communication in the real, unfiltered physical presence of others.</li>\\n    </ul>\\n  </div>\\n</div>\\n\",\"examTips\":[\"Ground arguments in modern realities: remote multinational workplaces vs. body language and hallway socialization.\",\"Use vivid contrast imagery: 'camera lens is a window, not a world', 'micro-facial expressions and authentic eye contact'.\",\"Deliver balanced, highly articulate debate prose that commands maximum examiner marks.\"]}]");
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

/**
 * Active Recall & Learning Hub — High-Yield Revision Engine
 * 
 * Features:
 * 1. Deep Curated Card Banks with complete, authentic Active-Recall Flashcards (1560 curated cards).
 * 2. Infinite Random Synthesizer (10,000+ Random Questions on demand across English Grammar and Core Degree Subjects).
 * 3. Pure Active-Recall Flashcards: Clean questions, full answers, zero MCQ option artifacts.
 * 4. On every visit and click, starts and rotates through completely RANDOM cards.
 * 5. Deterministic bidirectional navigation with seamless random-access pool.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. AUTHENTIC CURATED ACTIVE RECALL QUESTION BANK (1560 cards)
  // =========================================================================
  const LMS_PDF_CARDS = [
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Who authored the article “Minds, Brains and Programs”?",
    "titleSec": "“Minds, Brains and Programs” എന്ന പ്രശസ്തമായ പ്രബന്ധം രചിച്ചത് ആര്?",
    "lang": "ml",
    "hint": "Philosophy of AI · John Searle & The Chinese Room (1980)",
    "backEn": "<strong>Answer:</strong> John Searle<br>John Searle published 'Minds, Brains and Programs' in 1980 in 'Behavioral and Brain Sciences', introducing the famous Chinese Room thought experiment to argue that syntactic manipulation of symbols can never produce semantic understanding or consciousness.",
    "backSec": "<strong>ഉത്തരം:</strong> 1980-ൽ ജോൺ സിയേൾ രചിച്ച പ്രബന്ധമാണ് 'മൈൻഡ്സ്, ബ്രെയിൻസ് ആൻഡ് പ്രോഗ്രാംസ്'. കമ്പ്യൂട്ടറുകളിലെ ചിഹ്ന നിർവ്വഹണത്തിന് (Syntax) യഥാർത്ഥ അർത്ഥബോധം (Semantics) ഉണ്ടാക്കാൻ കഴിയില്ലെന്ന് സമർത്ഥിക്കുന്ന ചൈനീസ് റൂം പരീക്ഷണം ഇതിലൂടെയാണ് അദ്ദേഹം അവതരിപ്പിച്ചത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Who was the first to use the human terminology “memory” when referring to a computer?",
    "titleSec": "കമ്പ്യൂട്ടറിനെ പരാമർശിക്കുമ്പോൾ 'മെമ്മറി' (Memory) എന്ന മനുഷ്യ പദം ആദ്യമായി ഉപയോഗിച്ചത് ആര്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Von Neumann Architecture & Computer Memory",
    "backEn": "<strong>Answer:</strong> John von Neumann<br>John von Neumann was the first computer architect to borrow the biological human term 'memory' (specifically in his 1945 'First Draft of a Report on the EDVAC') to describe primary internal storage registers.",
    "backSec": "<strong>ഉത്തരം:</strong> 1945-ൽ EDVAC കമ്പ്യൂട്ടർ രൂപകൽപ്പന റിപ്പോർട്ടിൽ ജോൺ വോൺ ന്യൂമാനാണ് ആന്തരിക സംഭരണ ഘടകങ്ങളെ സൂചിപ്പിക്കാൻ 'മെമ്മറി' എന്ന ജൈവിക പദം ആദ്യമായി ഉപയോഗിച്ചത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Who is considered the founder of information theory?",
    "titleSec": "ഇൻഫർമേഷൻ തിയറിയുടെ (Information Theory) ഉപജ്ഞാതാവായി കണക്കാക്കപ്പെടുന്നത് ആര്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Claude Shannon & Information Theory (1948)",
    "backEn": "<strong>Answer:</strong> Claude Shannon<br>Claude Shannon published 'A Mathematical Theory of Communication' in 1948, establishing Information Theory, quantifying information in 'bits', and laying the mathematical foundations for telecommunications and digital computation.",
    "backSec": "<strong>ഉത്തരം:</strong> 1948-ൽ 'എ മാത്തമാറ്റിക്കൽ തിയറി ഓഫ് കമ്മ്യൂണിക്കേഷൻ' പ്രസിദ്ധീകരിച്ചുകൊണ്ട് ക്ലോഡ് ഷാനനാണ് ഇൻഫർമേഷൻ തിയറിക്ക് അടിത്തറയിട്ടതും 'ബിറ്റ്' (Bit) എന്ന അളവ് രൂപീകരിച്ചതും."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Who is the author of the notable research entitled “Intelligent Machinery”?",
    "titleSec": "“Intelligent Machinery” എന്ന ശ്രദ്ധേയമായ ഗവേഷണ രചനയുടെ രചയിതാവ് ആര്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Alan Turing's 'Intelligent Machinery' (1948)",
    "backEn": "<strong>Answer:</strong> Alan M. Turing<br>Alan Turing wrote the pioneering report 'Intelligent Machinery' in 1948 for the National Physical Laboratory (NPL), where he anticipated neural networks (unorganized machines) and computational learning.",
    "backSec": "<strong>ഉത്തരം:</strong> 1948-ൽ നാഷണൽ ഫിസിക്കൽ ലബോറട്ടറിക്ക് വേണ്ടി അലൻ ട്യൂറിങ് എഴുതിയ പ്രബന്ധമാണ് 'ഇന്റലിജന്റ് മെഷിനറി'. യന്ത്രങ്ങളിലെ ന്യൂറൽ ലേണിംഗ് സാധ്യതകളെക്കുറിച്ചുള്ള ആദ്യ ചർച്ചകൾ ഇതിൽ ഉൾപ്പെടുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is the philosophical discipline that examines the nature, origins, boundaries, and legitimacy of knowledge?",
    "titleSec": "അറിവിന്റെ സ്വഭാവം, ഉത്ഭവം, അതിരുകൾ, പ്രാമാണികത എന്നിവയെക്കുറിച്ച് പഠിക്കുന്ന തത്ത്വശാസ്ത്ര ശാഖ ഏതാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Epistemology (The Theory of Knowledge)",
    "backEn": "<strong>Answer:</strong> Epistemology<br>Epistemology (from Greek episteme 'knowledge' + logos 'study') is the major branch of philosophy that critically investigates what knowledge is, how it is acquired, its limits, and justification.",
    "backSec": "<strong>ഉത്തരം:</strong> അറിവ് എന്താണ്, അറിവ് എങ്ങനെ നേടുന്നു, അതിന്റെ സത്യാവസ്ഥ എങ്ങനെ സാധൂകരിക്കുന്നു എന്ന് ആഴത്തിൽ പരിശോധിക്കുന്ന തത്ത്വശാസ്ത്ര ശാഖയാണ് ജ്ഞാനമീമാംസ (Epistemology)."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What constitutes the fundamental basis of knowledge in philosophy and epistemology?",
    "titleSec": "തത്ത്വശാസ്ത്രത്തിലും ജ്ഞാനമീമാംസയിലും അറിവിന്റെ അടിസ്ഥാന ഘടകമായി കണക്കാക്കുന്നത് എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Truth as the Fundamental Basis of Knowledge",
    "backEn": "<strong>Answer:</strong> Truth<br>In classical epistemology (Justified True Belief), Truth is the non-negotiable core basis of knowledge: one cannot 'know' something that is false; truth ensures belief corresponds with reality.",
    "backSec": "<strong>ഉത്തരം:</strong> പരമ്പരാഗത ജ്ഞാനശാസ്ത്ര നിർവ്വചനത്തിൽ (Justified True Belief) 'സത്യം' അറിവിന്റെ ഒഴിച്ചുകൂടാനാവാത്ത അടിസ്ഥാനമാണ്; തെറ്റായ ഒരു കാര്യത്തെ അറിവായി കണക്കാക്കാൻ കഴിയില്ല."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which theory posits that truth is that which accurately represents or corresponds to objective reality?",
    "titleSec": "സത്യം എന്നത് വസ്തുനിഷ്ഠ യാഥാർത്ഥ്യത്തെ കൃത്യമായി പ്രതിനിധീകരിക്കുന്നതാണ് എന്ന് വാദിക്കുന്ന സിദ്ധാന്തം ഏതാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Correspondence Theory of Truth",
    "backEn": "<strong>Answer:</strong> Correspondence<br>The Correspondence Theory of Truth posits that a statement or belief is true if and only if it corresponds to or reflects an objective, external state of affairs in the world.",
    "backSec": "<strong>ഉത്തരം:</strong> ഒരു പ്രസ്താവനയോ വിശ്വാസമോ ബാഹ്യ ലോകത്തിലെ യഥാർത്ഥ യാഥാർത്ഥ്യവുമായി കൃത്യമായി യോജിക്കുമ്പോഴാണ് അത് സത്യമാകുന്നത് എന്ന് കറസ്‌പോണ്ടൻസ് തിയറി വ്യക്തമാക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What concerns the reason or evidence that supports a belief?",
    "titleSec": "ഒരു വിശ്വാസത്തെ സാധൂകരിക്കുന്ന കാരണങ്ങളെയോ തെളിവുകളെയോ സൂചിപ്പിക്കുന്ന പദം ഏതാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Epistemic Justification",
    "backEn": "<strong>Answer:</strong> Justification<br>Justification is the epistemic reason, rational warrant, or empirical evidence that supports an agent's belief, distinguishing genuine knowledge from mere lucky guesses.",
    "backSec": "<strong>ഉത്തരം:</strong> ഒരു വിശ്വാസത്തിന് യുക്തിപരമായ പിന്തുണ നൽകുകയും അതിനെ കേവലം ഒരു ഊഹത്തിൽ നിന്ന് വ്യത്യസ്തമാക്കി അറിവിലേക്ക് ഉയർത്തുകയും ചെയ്യുന്നത് സാധൂകരണമാണ് (Justification)."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is the subfield of ethics that focuses on the practical application of ethical concepts?",
    "titleSec": "ധാർമ്മിക ആശയങ്ങളുടെ പ്രായോഗിക പ്രയോഗത്തിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്ന എത്തിക്സിന്റെ ഉപവിഭാഗം ഏതാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Applied Ethics",
    "backEn": "<strong>Answer:</strong> Applied ethics<br>Applied Ethics is the subfield of moral philosophy that examines specific, practical, real-world ethical dilemmas—including AI ethics, biomedical ethics, and environmental responsibility.",
    "backSec": "<strong>ഉത്തരം:</strong> നിർമ്മിത ബുദ്ധി, വൈദ്യശാസ്ത്രം, പരിസ്ഥിതി തുടങ്ങിയ മേഖലകളിലെ യഥാർത്ഥ ജീവിത പ്രതിസന്ധികളെ വിശകലനം ചെയ്യുന്ന നൈതിക ശാഖയാണ് അപ്ലൈഡ് എത്തിക്സ്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "During which decade was the classical model of artificial intelligence (AI) developed?",
    "titleSec": "ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസിന്റെ ക്ലാസിക്കൽ മോഡൽ വികസിച്ച ദശാബ്ദം ഏതാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Origins of Classical AI (1950s)",
    "backEn": "<strong>Answer:</strong> 1950s<br>Classical Artificial Intelligence was officially born in the 1950s, catalyzed by Alan Turing's 1950 paper and the 1956 Dartmouth Summer Research Project where the term 'Artificial Intelligence' was coined.",
    "backSec": "<strong>ഉത്തരം:</strong> 1950-ൽ അലൻ ട്യൂറിങ്ങിന്റെ പഠനവും 1956-ലെ ഡാർട്ട്മൗത്ത് കോൺഫറൻസും വഴി 1950-കളിലാണ് ക്ലാസിക്കൽ AI ഒരു ഔദ്യോഗിക പഠനശാഖയായി രൂപംകൊണ്ടത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Symbolic AI or rule-based AI was also known as what?",
    "titleSec": "സിംബോളിക് AI അഥവാ റൂൾ-ബേസ്ഡ് AI അറിയപ്പെട്ടിരുന്ന മറ്റൊരു പേര് എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · GOFAI & Classical Symbolic AI",
    "backEn": "<strong>Answer:</strong> GOFAI (Good Old-Fashioned AI) / Classical Model<br>Symbolic rule-based AI was famously dubbed GOFAI ('Good Old-Fashioned AI') by philosopher John Haugeland, representing the classical paradigm where intelligence is explicit symbol manipulation.",
    "backSec": "<strong>ഉത്തരം:</strong> തത്ത്വചിന്തകനായ ജോൺ ഹോഗ്ലാൻഡ് രൂപപ്പെടുത്തിയ GOFAI (Good Old-Fashioned AI) എന്ന പേരിൽ സിംബോളിക് റൂൾ-ബേസ്ഡ് AI അറിയപ്പെടുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What does PSSH stand for?",
    "titleSec": "PSSH എന്നതിന്റെ പൂർണ്ണരൂപം എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Physical Symbol System Hypothesis (PSSH)",
    "backEn": "<strong>Answer:</strong> Physical Symbol System Hypothesis<br>Formulated by Allen Newell and Herbert A. Simon in 1976, the Physical Symbol System Hypothesis (PSSH) states that a physical symbol system possesses the necessary and sufficient means for general intelligent action.",
    "backSec": "<strong>ഉത്തരം:</strong> 1976-ൽ അല്ലൻ ന്യൂവലും ഹെർബർട്ട് സൈമണും അവതരിപ്പിച്ച ഫിസിക്കൽ സിംബൽ സിസ്റ്റം ഹൈപ്പോതെസിസ് (PSSH) പൊതുവായ ബുദ്ധിപരമായ പ്രവർത്തനത്തിന് ചിഹ്ന വ്യവസ്ഥ അനിവാര്യമാണെന്ന് വാദിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which language became important for Symbolic AI research?",
    "titleSec": "സിംബോളിക് AI ഗവേഷണത്തിൽ ഏറ്റവും നിർണായകമായി മാറിയ പ്രോഗ്രാമിംഗ് ഭാഷ ഏതാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · LISP Programming Language (John McCarthy, 1958)",
    "backEn": "<strong>Answer:</strong> LISP<br>LISP (List Processing), developed by John McCarthy in 1958, became the dominant language for classical Symbolic AI research due to its powerful symbolic computation and recursive macro capabilities.",
    "backSec": "<strong>ഉത്തരം:</strong> 1958-ൽ ജോൺ മക്കാർത്തി വികസിപ്പിച്ച ലിസ്പ് (LISP) ലിസ്റ്റ് പ്രോസസ്സിംഗിനും സിംബോളിക് യുക്തി ചിന്തകൾക്കും ഏറ്റവും അനുയോജ്യമായ ഭാഷയായി മാറി."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "In Symbolic AI, problem-solving is often described as?",
    "titleSec": "സിംബോളിക് AI-യിൽ പ്രശ്നപരിഹാരം (Problem Solving) പൊതുവെ നിർവ്വചിക്കപ്പെടുന്നത് എങ്ങനെയാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · State Space Search in Symbolic AI",
    "backEn": "<strong>Answer:</strong> Searching a state space<br>In classical Symbolic AI, problem-solving is formalized as searching through a 'state space'—a graph of interconnected nodes representing possible configurations from an initial state to a goal state.",
    "backSec": "<strong>ഉത്തരം:</strong> സാധ്യമായ അവസ്ഥകളുടെ ഒരു ശൃംഖലയിലൂടെ (State Space) ലക്ഷ്യസ്ഥാനത്തേക്ക് വഴികൾ തിരയുന്ന പ്രക്രിയയായാണ് സിംബോളിക് AI പ്രശ്നപരിഹാരത്തെ കാണുന്നത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which early AI program is a classic example of cognitive simulation?",
    "titleSec": "കോഗ്നിറ്റീവ് സിമുലേഷന്റെ (Cognitive Simulation) ക്ലാസിക് ഉദാഹരണമായ ആദ്യകാല AI പ്രോഗ്രാം ഏതാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · General Problem Solver (GPS, 1957)",
    "backEn": "<strong>Answer:</strong> General Problem Solver (GPS)<br>The General Problem Solver (GPS), created in 1957 by Herbert Simon, Allen Newell, and Cliff Shaw, was the premier cognitive simulation program designed to emulate human means-ends analysis.",
    "backSec": "<strong>ഉത്തരം:</strong> 1957-ൽ സൈമണും ന്യൂവലും ചേർന്ന് നിർമ്മിച്ച GPS, മനുഷ്യന്റെ മാനസിക പ്രശ്നപരിഹാര തന്ത്രങ്ങളെ അതേപടി സിമുലേറ്റ് ചെയ്ത പ്രോഗ്രാമാണ്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "In cognitive simulation, intelligence is achieved by?",
    "titleSec": "ചോദ്യം 16: Cognitive Simulation Paradigm",
    "lang": "ml",
    "hint": "Philosophy of AI · Cognitive Simulation Paradigm",
    "backEn": "<strong>Answer:</strong> Modeling internal mental representations<br>Cognitive simulation aims not merely to produce intelligent outputs, but to recreate the internal cognitive processes and mental representations used by human minds when solving problems.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Expert systems are examples of?",
    "titleSec": "ചോദ്യം 17: Expert Systems as Symbolic AI",
    "lang": "ml",
    "hint": "Philosophy of AI · Expert Systems as Symbolic AI",
    "backEn": "<strong>Answer:</strong> Symbolic AI<br>Expert systems (like DENDRAL and MYCIN) are prime implementations of Symbolic AI, consisting of an explicit knowledge base of human-crafted IF-THEN rules and an inference engine.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (A) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Who were major contributors to the cognitive simulation approach?",
    "titleSec": "ചോദ്യം 18: Allen Newell & Herbert Simon",
    "lang": "ml",
    "hint": "Philosophy of AI · Allen Newell & Herbert Simon",
    "backEn": "<strong>Answer:</strong> Newell and Simon<br>Allen Newell and Herbert Simon were the pioneering figures of cognitive simulation, inventing the Logic Theorist and GPS, and demonstrating that computers could model human heuristics.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "John McCarthy is associated with the development of?",
    "titleSec": "ചോദ്യം 19: John McCarthy & Symbolic Logic AI",
    "lang": "ml",
    "hint": "Philosophy of AI · John McCarthy & Symbolic Logic AI",
    "backEn": "<strong>Answer:</strong> Symbolic AI<br>John McCarthy coined the term 'Artificial Intelligence', developed the LISP language, and championed logic-based Symbolic AI (such as situation calculus) to represent commonsense reasoning.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Who proposed The Turing Test?",
    "titleSec": "ട്യൂറിങ് ടെസ്റ്റ് (Turing Test) നിർദ്ദേശിച്ചത് ആര്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Alan Turing & The Turing Test (1950)",
    "backEn": "<strong>Answer:</strong> Alan Turing<br>British mathematician and codebreaker Alan Turing proposed the Turing Test (originally the 'Imitation Game') in his landmark 1950 paper 'Computing Machinery and Intelligence'.",
    "backSec": "<strong>ഉത്തരം:</strong> 1950-ൽ പ്രശസ്ത ഗണിതശാസ്ത്രജ്ഞനായ അലൻ ട്യൂറിങ്ങാണ് യന്ത്രങ്ങൾക്ക് ചിന്തിക്കാനാകുമോ എന്ന് പരിശോധിക്കുന്നതിനുള്ള ഈ പരീക്ഷണം അവതരിപ്പിച്ചത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "The Turing Test was introduced in Turing’s 1950 paper titled?",
    "titleSec": "ട്യൂറിങ് ടെസ്റ്റ് അവതരിപ്പിക്കപ്പെട്ട അലൻ ട്യൂറിങ്ങിന്റെ 1950-ലെ പ്രബന്ധത്തിന്റെ ശീർഷകം എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Computing Machinery and Intelligence (1950)",
    "backEn": "<strong>Answer:</strong> Computing Machinery and Intelligence<br>Alan Turing introduced the Turing Test in his classic 1950 paper 'Computing Machinery and Intelligence' published in the philosophy journal 'Mind', opening with: 'I propose to consider the question, \"Can machines think?\"'.",
    "backSec": "<strong>ഉത്തരം:</strong> 'മൈൻഡ്' (Mind) ജേണലിൽ പ്രസിദ്ധീകരിച്ച 'Computing Machinery and Intelligence' എന്ന പ്രബന്ധത്തിലൂടെയാണ് ട്യൂറിങ് ഈ ആശയം ലോകത്തിന് സമർപ്പിച്ചത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "In the Turing Test, a machine is considered intelligent if it?",
    "titleSec": "ട്യൂറിങ് ടെസ്റ്റിൽ ഒരു യന്ത്രത്തെ ബുദ്ധിശക്തിയുള്ളതായി കണക്കാക്കുന്നത് എപ്പോഴാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Operational Criteria of the Turing Test",
    "backEn": "<strong>Answer:</strong> Can imitate human responses convincingly<br>In the Turing Test, a machine is judged intelligent based on its external linguistic performance: if it can converse in natural language and imitate human responses convincingly enough to deceive a human interrogator.",
    "backSec": "<strong>ഉത്തരം:</strong> മനുഷ്യന്റെ സംഭാഷണ ശൈലിയെ ബോധ്യപ്പെടുത്തുന്ന വിധത്തിൽ അനുകരിച്ച് ഒരു മനുഷ്യ വിധികർത്താവിനെ ആശയക്കുഴപ്പത്തിലാക്കാൻ കഴിയുമ്പോഴാണ് യന്ത്രം ബുദ്ധിശക്തിയുള്ളതായി കണക്കാക്കപ്പെടുന്നത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "The primary focus of the Turing Test is on?",
    "titleSec": "ചോദ്യം 23: Behaviorist Basis of the Turing Test",
    "lang": "ml",
    "hint": "Philosophy of AI · Behaviorist Basis of the Turing Test",
    "backEn": "<strong>Answer:</strong> External behavior<br>The Turing Test is grounded in philosophical behaviorism: it evaluates purely external observable linguistic behavior and conversational performance, ignoring internal hardware or subjective states.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "According to Turing, if a machine passes the test, we should say it?",
    "titleSec": "ചോദ്യം 24: Turing's Definition of Machine Thinking",
    "lang": "ml",
    "hint": "Philosophy of AI · Turing's Definition of Machine Thinking",
    "backEn": "<strong>Answer:</strong> Can think<br>Turing argued that if a machine's linguistic behavior is indistinguishable from a human's, there is no legitimate intellectual justification to deny that the machine can 'think'.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "A major criticism of the Turing Test is that it?",
    "titleSec": "ചോദ്യം 25: Criticism of the Turing Test (Imitation vs. Intelligence)",
    "lang": "ml",
    "hint": "Philosophy of AI · Criticism of the Turing Test (Imitation vs. Intelligence)",
    "backEn": "<strong>Answer:</strong> Confuses imitation with real intelligence<br>A central critique (advanced by Searle, Block, and others) is that the Turing Test conflates behavioral imitation with genuine intelligence, understanding, and intentionality.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Who proposed The Chinese Room argument?",
    "titleSec": "ചൈനീസ് റൂം (Chinese Room) വാദം അവതരിപ്പിച്ച തത്ത്വചിന്തകൻ ആര്?",
    "lang": "ml",
    "hint": "Philosophy of AI · John Searle & The Chinese Room",
    "backEn": "<strong>Answer:</strong> John Searle<br>American philosopher John Searle formulated the Chinese Room thought experiment in 1980 to demonstrate that computers manipulate symbols purely on syntax without any semantic comprehension.",
    "backSec": "<strong>ഉത്തരം:</strong> കമ്പ്യൂട്ടറുകളുടെ ചിഹ്ന നിർവ്വഹണത്തിന് യാതൊരു അർത്ഥബോധവുമില്ലെന്ന് തെളിയിക്കാൻ ജോൺ സിയേളാണ് ഈ ചിന്താപരീക്ഷണം രൂപകൽപ്പന ചെയ്തത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "The Chinese Room thought experiment was designed to challenge?",
    "titleSec": "ചൈനീസ് റൂം ചിന്താപരീക്ഷണം ഏത് സങ്കൽപ്പത്തെ വെല്ലുവിളിക്കാനാണ് നിർമ്മിക്കപ്പെട്ടത്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Refutation of Strong AI",
    "backEn": "<strong>Answer:</strong> Strong AI<br>Searle designed the Chinese Room specifically to challenge 'Strong AI'—the doctrine that an appropriately programmed computer literally has a mind and genuinely understands.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായി പ്രോഗ്രാം ചെയ്ത കമ്പ്യൂട്ടറുകൾക്ക് യഥാർത്ഥ മനസ്സ് ഉണ്ടെന്ന് വാദിക്കുന്ന 'സ്ട്രോങ് AI' (Strong AI) സങ്കൽപ്പത്തെയാണ് ചൈനീസ് റൂം തള്ളിക്കളഞ്ഞത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "In the Chinese Room, the person inside the room is manipulating?",
    "titleSec": "ചോദ്യം 28: Syntax Manipulation in Chinese Room",
    "lang": "ml",
    "hint": "Philosophy of AI · Syntax Manipulation in Chinese Room",
    "backEn": "<strong>Answer:</strong> Symbols according to rules<br>Inside the Chinese Room, the English-speaking person manipulates uninterpreted Chinese symbols strictly according to formal syntactic rules (an algorithm), without understanding their meaning.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which test is indirectly criticized by the Chinese Room argument?",
    "titleSec": "ചോദ്യം 29: Chinese Room vs. Turing Test",
    "lang": "ml",
    "hint": "Philosophy of AI · Chinese Room vs. Turing Test",
    "backEn": "<strong>Answer:</strong> Turing Test<br>The Chinese Room directly undermines the Turing Test by proving that a system can pass the Turing Test (producing convincing Chinese answers) without understanding a single word of Chinese.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Searle’s argument distinguishes between?",
    "titleSec": "ചോദ്യം 30: Syntax vs. Semantics Distinction",
    "lang": "ml",
    "hint": "Philosophy of AI · Syntax vs. Semantics Distinction",
    "backEn": "<strong>Answer:</strong> Syntax and semantics<br>Searle's famous dictum is 'Syntax is not sufficient for semantics': computers operate on formal syntactic structures (shapes/symbols), whereas human minds possess semantics (meaning and intentionality).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (A) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Who is generally referred to as the Father of Modern Philosophy?",
    "titleSec": "ആധുനിക തത്ത്വശാസ്ത്രത്തിന്റെ പിതാവ് എന്ന് പൊതുവെ അറിയപ്പെടുന്നത് ആര്?",
    "lang": "ml",
    "hint": "Philosophy of AI · René Descartes: Father of Modern Philosophy",
    "backEn": "<strong>Answer:</strong> René Descartes<br>René Descartes (1596–1650) is widely revered as the Father of Modern Philosophy for shifting philosophical inquiry toward epistemology, rationalism, and subjective consciousness.",
    "backSec": "<strong>ഉത്തരം:</strong> യുക്തിചിന്തയ്ക്കും ജ്ഞാനശാസ്ത്രത്തിനും പുതിയ ദിശാബോധം നൽകിയ ഫ്രഞ്ച് തത്ത്വചിന്തകനായ റെനെ ദെക്കാർത്തിനെയാണ് ആധുനിക തത്ത്വശാസ്ത്രത്തിന്റെ പിതാവായി കണക്കാക്കുന്നത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Descartes begins his philosophy with a method of?",
    "titleSec": "ചോദ്യം 32: Methodological / Radical Doubt",
    "lang": "ml",
    "hint": "Philosophy of AI · Methodological / Radical Doubt",
    "backEn": "<strong>Answer:</strong> Systematic / Radical doubt<br>Descartes systematically deployed 'Methodological Radical Doubt' in his 'Meditations on First Philosophy', rejecting any belief that could possibly be doubted until he found an indubitable foundation.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is meant by descartes' famous statement *cogito, ergo sum*?",
    "titleSec": "ദെക്കാർത്തിന്റെ പ്രസിദ്ധമായ 'Cogito, ergo sum' എന്ന വാക്യത്തിന്റെ അർത്ഥം എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Cogito, Ergo Sum",
    "backEn": "<strong>Answer:</strong> I think, therefore I am<br>'Cogito, ergo sum' is Latin for 'I think, therefore I am' (or 'I am thinking, therefore I exist')—the foundational truth that even if an evil demon deceives him, he must exist to doubt or be deceived.",
    "backSec": "<strong>ഉത്തരം:</strong> 'ഞാൻ ചിന്തിക്കുന്നു, അതിനാൽ ഞാൻ ഉണ്ടെന്ന് ഉറപ്പാണ്' എന്നാണ് ഇതിന്റെ അർത്ഥം. സംശയിക്കാൻ പോലും ഒരു ചിന്തകൻ വേണം എന്നതിലൂടെ അദ്ദേഹം തന്റെ നിലനിൽപ്പ് സ്വയം തെളിയിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "According to Descartes, the essence of the mind is?",
    "titleSec": "ചോദ്യം 34: Essence of Mind (Res Cogitans)",
    "lang": "ml",
    "hint": "Philosophy of AI · Essence of Mind (Res Cogitans)",
    "backEn": "<strong>Answer:</strong> Thought<br>According to Descartes, the fundamental essence of mind (res cogitans) is Thought (conscious awareness, deliberation, doubting), whereas the essence of matter (res extensa) is Extension in space.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "According to Descartes, the idea of God is the idea of?",
    "titleSec": "ചോദ്യം 35: Descartes' Ontological Conception of God",
    "lang": "ml",
    "hint": "Philosophy of AI · Descartes' Ontological Conception of God",
    "backEn": "<strong>Answer:</strong> An infinite and perfect being<br>In Meditation III and V, Descartes argues that the innate idea of God within the human mind is the clear and distinct idea of an infinite, omnipotent, and supremely perfect being.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Descartes uses the conceivability argument to show that?",
    "titleSec": "ചോദ്യം 36: The Conceivability Argument for Dualism",
    "lang": "ml",
    "hint": "Philosophy of AI · The Conceivability Argument for Dualism",
    "backEn": "<strong>Answer:</strong> Mind and body are distinct<br>Descartes uses the Conceivability Argument to demonstrate that because he can clearly and distinctly conceive of his mind existing without his body, mind and body are fundamentally distinct substances.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Descartes believes he can clearly conceive of himself as?",
    "titleSec": "ചോദ്യം 37: Res Cogitans: The Thinking Thing",
    "lang": "ml",
    "hint": "Philosophy of AI · Res Cogitans: The Thinking Thing",
    "backEn": "<strong>Answer:</strong> A thinking thing without a body<br>In his Meditations, Descartes asserts: 'I am a thinking thing' (res cogitans)—a substance whose whole nature or essence is simply to think, conceivable entirely separate from physical embodiment.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "The conceivability argument claims that if two things can be clearly conceived apart, then they?",
    "titleSec": "ചോദ്യം 38: Logical Separation in Conceivability Argument",
    "lang": "ml",
    "hint": "Philosophy of AI · Logical Separation in Conceivability Argument",
    "backEn": "<strong>Answer:</strong> Can exist separately<br>Descartes' modal logic argues that if mind and body can be clearly and distinctly conceived independently of each other, God has the power to create them separately, proving they are distinct substances.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "The divisibility argument concludes that because bodies are divisible and minds are not, they are?",
    "titleSec": "ചോദ്യം 39: The Divisibility Argument (Res Extensa vs Res Cogitans)",
    "lang": "ml",
    "hint": "Philosophy of AI · The Divisibility Argument (Res Extensa vs Res Cogitans)",
    "backEn": "<strong>Answer:</strong> Distinct substances<br>Descartes argues in Meditation VI that physical bodies are always divisible into parts, whereas the mind is indivisible and unified; therefore, by Leibniz's law, mind and body must be distinct substances.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "In the divisibility argument, Descartes claims that cutting the body?",
    "titleSec": "ചോദ്യം 40: Indivisibility of Conscious Mind",
    "lang": "ml",
    "hint": "Philosophy of AI · Indivisibility of Conscious Mind",
    "backEn": "<strong>Answer:</strong> Does not divide the mind<br>Descartes observed that amputating an arm or leg reduces the body, but does not amputate half of consciousness or divide the thinking mind into fractions; the mind remains a complete, unified whole.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Descartes’ view that mind and body are two different substances is called?",
    "titleSec": "മനസ്സും ശരീരവും രണ്ട് വ്യത്യസ്ത പദാർത്ഥങ്ങളാണെന്ന ദെക്കാർത്തിന്റെ വീക്ഷണം അറിയപ്പെടുന്നത് എങ്ങനെയാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Substance Dualism (Cartesian Dualism)",
    "backEn": "<strong>Answer:</strong> Dualism<br>Descartes' view that reality is composed of two distinct metaphysical substances—mental substance (res cogitans) and physical matter (res extensa)—is called Substance Dualism (or Cartesian Dualism).",
    "backSec": "<strong>ഉത്തരം:</strong> ചിന്താശേഷിയുള്ള മനസ്സും (Res Cogitans) സ്ഥലവിസ്തൃതിയുള്ള ശരീരവും (Res Extensa) പരസ്പരം വിഭിന്നമാണെന്ന വീക്ഷണമാണ് കാർട്ടീഷ്യൻ ഡ്യുവലിസം."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "In Descartes’ philosophy, mental states are known with?",
    "titleSec": "ചോദ്യം 42: Epistemic Certainty of Mental States",
    "lang": "ml",
    "hint": "Philosophy of AI · Epistemic Certainty of Mental States",
    "backEn": "<strong>Answer:</strong> Absolute certainty<br>In Cartesian epistemology, our own immediate mental states are known with absolute incorrigible certainty (direct privileged access), whereas knowledge of the external physical world is mediated and vulnerable to doubt.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "In Indian philosophy, the sources of valid knowledge are called?",
    "titleSec": "ഭാരതീയ തത്ത്വചിന്തയിൽ സാധുവായ അറിവിന്റെ സ്രോതസ്സുകൾ അറിയപ്പെടുന്നത് ഏത് പേരിലാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Pramāṇa: Sources of Valid Knowledge in Indian Epistemology",
    "backEn": "<strong>Answer:</strong> Pramāṇa<br>In Indian philosophy (Darśanas), the valid means or sources through which true knowledge (Pramā) is acquired are termed 'Pramāṇas'.",
    "backSec": "<strong>ഉത്തരം:</strong> യഥാർത്ഥ അറിവ് (പ്രമ) സമ്പാദിക്കുന്നതിനുള്ള സാധുവായ മാർഗ്ഗങ്ങളെയാണ് ഭാരതീയ ദർശനങ്ങളിൽ 'പ്രമാണങ്ങൾ' എന്ന് വിളിക്കുന്നത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is accepted as a Pramāṇa by almost all Indian philosophical schools?",
    "titleSec": "ഭാരതീയ തത്ത്വചിന്താ ശാഖകൾ മിക്കവാറും എല്ലാം പൊതുവായി അംഗീകരിക്കുന്ന പ്രമാണം ഏതാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Pratyakṣa (Perception) Across Indian Schools",
    "backEn": "<strong>Answer:</strong> Pratyakṣa (Perception)<br>Pratyakṣa (direct sensory perception) is accepted as a valid Pramāṇa by virtually every school of Indian philosophy, from orthodox Nyāya and Vedānta to heterodox Cārvāka, Buddhism, and Jainism.",
    "backSec": "<strong>ഉത്തരം:</strong> ഇന്ദ്രിയങ്ങളിലൂടെ നേരിട്ട് അറിയുന്ന അറിവായ 'പ്രത്യക്ഷം' ചാർവാകർ, ബുദ്ധമതം, ജൈനമതം, ന്യായം തുടങ്ങി ഏതാണ്ട് എല്ലാ ദർശനങ്ങളും അംഗീകരിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which Pramāṇa refers to knowledge gained through inference?",
    "titleSec": "അനുമാനത്തിലൂടെ ലഭിക്കുന്ന അറിവിനെ സൂചിപ്പിക്കുന്ന പ്രമാണം ഏതാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Anumāna (Inference)",
    "backEn": "<strong>Answer:</strong> Anumāna<br>Anumāna is the Pramāṇa of inferential knowledge, where an unperceived fact (sādhya, e.g. fire) is deduced from an observed sign (liṅga/hetu, e.g. smoke) based on universal concomitance (vyāpti).",
    "backSec": "<strong>ഉത്തരം:</strong> നേരിട്ട് കാണുന്ന അടയാളത്തിൽ നിന്ന് (പുക) കാണാത്ത സത്യത്തെ (തീ) യുക്തിപരമായി അനുമാനിച്ചെടുക്കുന്ന മാർഗ്ഗമാണ് അനുമാനം."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Buddhism accepts how many Pramāṇas?",
    "titleSec": "ചോദ്യം 46: Buddhism's Two Pramāṇas",
    "lang": "ml",
    "hint": "Philosophy of AI · Buddhism's Two Pramāṇas",
    "backEn": "<strong>Answer:</strong> Two<br>Buddhist epistemology (systematized by Dignāga and Dharmakīrti) strictly accepts only two Pramāṇas: Pratyakṣa (Perception) and Anumāna (Inference), rejecting testimony and comparison as independent sources.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which two Pramāṇas are accepted by Buddhism?",
    "titleSec": "ചോദ്യം 47: Buddhist Epistemic Criteria",
    "lang": "ml",
    "hint": "Philosophy of AI · Buddhist Epistemic Criteria",
    "backEn": "<strong>Answer:</strong> Perception and Inference<br>Dignāga established that there are only two objects of knowledge (particulars / svalakṣaṇa and universals / sāmānyalakṣaṇa), corresponding strictly to Perception and Inference respectively.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is nyāya philosophy is primarily concerned with?",
    "titleSec": "ചോദ്യം 48: Nyāya: The School of Logic and Epistemology",
    "lang": "ml",
    "hint": "Philosophy of AI · Nyāya: The School of Logic and Epistemology",
    "backEn": "<strong>Answer:</strong> Logical reasoning and valid knowledge<br>The Nyāya school, founded by Sage Gautama (Akṣapāda), is famous as the Indian school of rigorous logical reasoning, critical debate (vāda), and systematic epistemology.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "In Nyāya, valid knowledge is called?",
    "titleSec": "ചോദ്യം 49: Pramā: Valid Cognition in Nyāya",
    "lang": "ml",
    "hint": "Philosophy of AI · Pramā: Valid Cognition in Nyāya",
    "backEn": "<strong>Answer:</strong> Pramā<br>In Nyāya philosophy, valid knowledge of reality is called 'Pramā' (true cognition that is faithful to its object), whereas invalid knowledge is termed 'Apramā'.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "How many Pramāṇas are accepted by the Nyāya school?",
    "titleSec": "ന്യായ ദർശനം എത്ര പ്രമാണങ്ങളെ അംഗീകരിക്കുന്നു?",
    "lang": "ml",
    "hint": "Philosophy of AI · The Four Pramāṇas of Nyāya",
    "backEn": "<strong>Answer:</strong> Four<br>Nyāya accepts exactly four Pramāṇas: Pratyakṣa (Perception), Anumāna (Inference), Upamāna (Comparison/Analogy), and Śabda (Verbal Testimony).",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രത്യക്ഷം, അനുമാനം, ഉപമാനം, ശബ്ദം എന്നിങ്ങനെ നാല് പ്രമാണങ്ങളെയാണ് ന്യായ തത്ത്വചിന്ത ഔദ്യോഗികമായി അംഗീകരിക്കുന്നത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is NOT a Nyāya Pramāṇa?",
    "titleSec": "ചോദ്യം 51: Exclusion of Arthāpatti in Nyāya",
    "lang": "ml",
    "hint": "Philosophy of AI · Exclusion of Arthāpatti in Nyāya",
    "backEn": "<strong>Answer:</strong> Presumption (Arthāpatti)<br>Arthāpatti (Presumption/Postulation) is NOT an independent Nyāya pramāṇa; Nyāya subsumes postulation under Anumāna (Inference).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (D) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Anumāna (inference) is based on?",
    "titleSec": "ചോദ്യം 52: Vyāpti: The Foundation of Anumāna",
    "lang": "ml",
    "hint": "Philosophy of AI · Vyāpti: The Foundation of Anumāna",
    "backEn": "<strong>Answer:</strong> Universal relation (Vyāpti)<br>Inference (Anumāna) is grounded in Vyāpti—the invariable, unconditional universal relation of concomitance between the sign/reason (hetu) and the inferred fact (sādhya), as between smoke and fire.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Nyāya philosophers analyzed error in order to?",
    "titleSec": "ചോദ്യം 53: Nyāya Analysis of Cognitive Error (Khyātivāda)",
    "lang": "ml",
    "hint": "Philosophy of AI · Nyāya Analysis of Cognitive Error (Khyātivāda)",
    "backEn": "<strong>Answer:</strong> Improve valid cognition<br>Nyāya philosophers meticulously investigated perceptual illusion and error (Anyathākhyāti) to understand cognitive breakdowns and refine standards for validating true knowledge.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (A) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which pramāṇa is closest to AI sensor data?",
    "titleSec": "ചോദ്യം 54: AI Sensor Inputs as Pratyakṣa",
    "lang": "ml",
    "hint": "Philosophy of AI · AI Sensor Inputs as Pratyakṣa",
    "backEn": "<strong>Answer:</strong> Perception (Pratyakṣa)<br>In philosophical comparisons between AI and Indian epistemology, raw sensor streams (cameras, LiDAR, microphones) directly correspond to Pratyakṣa (direct sensory perception).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (A) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Learning from patterns in data in AI is similar to?",
    "titleSec": "ചോദ്യം 55: Machine Learning Induction as Anumāna",
    "lang": "ml",
    "hint": "Philosophy of AI · Machine Learning Induction as Anumāna",
    "backEn": "<strong>Answer:</strong> Anumāna (inference)<br>Machine learning algorithms extract statistical correlations and inductive rules from patterns in training data to predict unseen test examples, directly mirroring Anumāna (inference based on universal relation).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Trusting information from a database in AI resembles?",
    "titleSec": "ചോദ്യം 56: Database Retrieval as Śabda (Verbal Testimony)",
    "lang": "ml",
    "hint": "Philosophy of AI · Database Retrieval as Śabda (Verbal Testimony)",
    "backEn": "<strong>Answer:</strong> Śabda (testimony)<br>When an AI query engine or agent retrieves facts from trusted pre-trained weights or relational databases, it epistemically mirrors Śabda—accepting knowledge from an authoritative external source (āptavākya).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "A major concern in both Indian epistemology and AI is?",
    "titleSec": "ചോദ്യം 57: Epistemic Validity in Indian Philosophy & AI",
    "lang": "ml",
    "hint": "Philosophy of AI · Epistemic Validity in Indian Philosophy & AI",
    "backEn": "<strong>Answer:</strong> Validity of knowledge<br>Both Indian epistemologists and AI researchers are centrally concerned with the Validity of Knowledge: how an agent verifies that its representations, predictions, and beliefs are sound, truthful, and free of bias or error.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which questions is central to epistemology?",
    "titleSec": "ചോദ്യം 58: The Core Epistemological Inquiry",
    "lang": "ml",
    "hint": "Philosophy of AI · The Core Epistemological Inquiry",
    "backEn": "<strong>Answer:</strong> What can we know and how do we know it?<br>Epistemology is the philosophical study of knowledge, fundamentally inquiring: 'What can we know, what are the conditions for genuine knowledge, and how is knowledge justified?'.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which philosopher is most closely associated with empiricism?",
    "titleSec": "ചോദ്യം 59: John Locke & Classical Empiricism",
    "lang": "ml",
    "hint": "Philosophy of AI · John Locke & Classical Empiricism",
    "backEn": "<strong>Answer:</strong> John Locke<br>John Locke (1632–1704) is the father of British Empiricism, arguing in 'An Essay Concerning Human Understanding' that all knowledge derives exclusively from sensory experience and reflection.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "According to John Locke, the human mind at birth is like?",
    "titleSec": "ജോൺ ലോക്കിന്റെ അഭിപ്രായത്തിൽ, ജനനസമയത്ത് മനുഷ്യന്റെ മനസ്സ് എങ്ങനെയാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Tabula Rasa (The Blank Slate)",
    "backEn": "<strong>Answer:</strong> A blank slate (tabula rasa)<br>John Locke famously compared the human mind at birth to a 'tabula rasa' (blank slate or white paper void of all characters), rejecting Cartesian innate ideas and stating all knowledge comes from experience.",
    "backSec": "<strong>ഉത്തരം:</strong> ജനിക്കുമ്പോൾ മനുഷ്യന്റെ മനസ്സ് എഴുതാത്ത ഒരു വെളുത്ത കടലാസ് (തബുല റാസ) പോലെയാണെന്നും അനുഭവങ്ങളിലൂടെയാണ് എല്ലാ അറിവും അവിടെ രേഖപ്പെടുത്തപ്പെടുന്നതെന്നും ജോൺ ലോക്ക് വാദിച്ചു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Identity Theory in the philosophy of mind claims that?",
    "titleSec": "മൈൻഡ്-ബ്രെയിൻ ഐഡന്റിറ്റി തിയറി (Identity Theory) വാദിക്കുന്നത് എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Mind-Brain Identity Theory (Type Physicalism)",
    "backEn": "<strong>Answer:</strong> Mental states are identical to brain states<br>Identity Theory asserts that mental states are literally identical with neurological physical brain states (e.g., pain is identical to the firing of C-fibers).",
    "backSec": "<strong>ഉത്തരം:</strong> മാനസികാവസ്ഥകളും ഭൗതിക മസ്തിഷ്കാവസ്ഥകളും വേർതിരിക്കാനാവാത്തവിധം ഒന്നുതന്നെയാണെന്നാണ് ഐഡന്റിറ്റി തിയറി സമർത്ഥിക്കുന്നത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Identity Theory is also known as?",
    "titleSec": "ചോദ്യം 62: Mind-Brain Identity Theory Terminology",
    "lang": "ml",
    "hint": "Philosophy of AI · Mind-Brain Identity Theory Terminology",
    "backEn": "<strong>Answer:</strong> Mind–Brain Identity Theory<br>Identity Theory is formally and synonymously known in philosophy of mind as 'Mind–Brain Identity Theory' or 'Type Physicalism'.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which philosopher is most closely associated with the development of Identity Theory?",
    "titleSec": "ചോദ്യം 63: J. J. C. Smart & Identity Theory",
    "lang": "ml",
    "hint": "Philosophy of AI · J. J. C. Smart & Identity Theory",
    "backEn": "<strong>Answer:</strong> J. J. C. Smart<br>Australian philosopher J. J. C. Smart championed Identity Theory in his classic 1959 paper 'Sensations and Brain Processes', arguing mental events are strictly physical brain processes.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Functionalism defines mental states mainly in terms of their?",
    "titleSec": "ഫങ്ഷണലിസം (Functionalism) മാനസികാവസ്ഥകളെ പ്രധാനമായും നിർവ്വചിക്കുന്നത് എന്തിന്റെ അടിസ്ഥാനത്തിലാണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Functionalism & Causal Roles",
    "backEn": "<strong>Answer:</strong> Causal roles/relations<br>Functionalism identifies mental states by their functional role: their causal interactions with sensory inputs, other internal mental states, and behavioral outputs.",
    "backSec": "<strong>ഉത്തരം:</strong> ഇൻപുട്ടുകളും മാനസികാവസ്ഥകളും ഔട്ട്പുട്ടുകളും തമ്മിലുള്ള കാര്യകാരണ ബന്ധങ്ങളെയും അവ നിർവ്വഹിക്കുന്ന ധർമ്മങ്ങളെയും അടിസ്ഥാനമാക്കിയാണ് ഫങ്ഷണലിസം മനസ്സിനെ നിർവ്വചിക്കുന്നത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Functionalism emerged largely as an alternative to?",
    "titleSec": "ചോദ്യം 65: Functionalism as an Alternative to Identity Theory & Behaviorism",
    "lang": "ml",
    "hint": "Philosophy of AI · Functionalism as an Alternative to Identity Theory & Behaviorism",
    "backEn": "<strong>Answer:</strong> Identity theory and behaviorism<br>Functionalism arose to overcome the biological chauvinism of Identity Theory (which tied mind strictly to human brain wetware) and the superficiality of Behaviorism (which ignored internal mental states).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "According to functionalism, a mental state is identified by?",
    "titleSec": "ചോദ്യം 66: Functional Definition: Input-Output Relations",
    "lang": "ml",
    "hint": "Philosophy of AI · Functional Definition: Input-Output Relations",
    "backEn": "<strong>Answer:</strong> Input–output relations<br>In functionalism, a mental state is determined by its systematic relations between environmental sensory inputs, internal state transitions, and behavioral outputs.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "The idea that the same mental state can exist in different physical systems is called?",
    "titleSec": "ഒരേ മാനസികാവസ്ഥയ്ക്ക് വ്യത്യസ്ത ഭൗതിക മാധ്യമങ്ങളിൽ നിലനിൽക്കാൻ കഴിയുമെന്ന സങ്കൽപ്പം അറിയപ്പെടുന്നത് എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Multiple Realizability Thesis",
    "backEn": "<strong>Answer:</strong> Multiple realization<br>Pioneered by Hilary Putnam, Multiple Realizability is the thesis that the same mental state (like pain or belief) can be implemented in diverse physical substrates—human brains, octopus nervous systems, or silicon computers.",
    "backSec": "<strong>ഉത്തരം:</strong> മനുഷ്യന്റെ മസ്തിഷ്ക കോശങ്ങളിലും ഒക്ടോപസിന്റെ നാഡീവ്യവസ്ഥയിലും കമ്പ്യൂട്ടർ ചിപ്പുകളിലും ഒരേ ചിന്താരീതി സാക്ഷാത്കരിക്കാമെന്ന പുട്നത്തിന്റെ സിദ്ധാന്തമാണിത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which philosopher is strongly associated with functionalism?",
    "titleSec": "ചോദ്യം 68: Hilary Putnam: Pioneer of Functionalism",
    "lang": "ml",
    "hint": "Philosophy of AI · Hilary Putnam: Pioneer of Functionalism",
    "backEn": "<strong>Answer:</strong> Hilary Putnam<br>Philosopher Hilary Putnam developed computational functionalism (machine-state functionalism) in the 1960s, introducing the Turing Machine analogy for human psychological states.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Functionalism compared the mind to a?",
    "titleSec": "ചോദ്യം 69: The Computational Metaphor of Mind",
    "lang": "ml",
    "hint": "Philosophy of AI · The Computational Metaphor of Mind",
    "backEn": "<strong>Answer:</strong> Computer program<br>Functionalism famously formulated the computational theory of mind: the mind is to the brain as software (a computer program) is to physical hardware.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Philosophical behaviorism claims that?",
    "titleSec": "ചോദ്യം 70: Philosophical Behaviorism",
    "lang": "ml",
    "hint": "Philosophy of AI · Philosophical Behaviorism",
    "backEn": "<strong>Answer:</strong> Mental states are patterns of behavior or dispositions to behave<br>Philosophical Behaviorism (logical behaviorism) holds that mental concepts and terms do not refer to private internal episodes, but to publicly observable behavioral patterns and dispositions to act.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Who is most closely associated with philosophical behaviorism?",
    "titleSec": "ചോദ്യം 71: Gilbert Ryle & Behaviorism",
    "lang": "ml",
    "hint": "Philosophy of AI · Gilbert Ryle & Behaviorism",
    "backEn": "<strong>Answer:</strong> Gilbert Ryle<br>Gilbert Ryle is the chief philosophical figure behind logical behaviorism, arguing in 'The Concept of Mind' (1949) that talk of mental states refers to dispositions to behave in certain ways.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which book by Gilbert Ryle criticized Cartesian dualism?",
    "titleSec": "ചോദ്യം 72: The Concept of Mind (Gilbert Ryle, 1949)",
    "lang": "ml",
    "hint": "Philosophy of AI · The Concept of Mind (Gilbert Ryle, 1949)",
    "backEn": "<strong>Answer:</strong> The Concept of Mind<br>In his revolutionary 1949 masterpiece 'The Concept of Mind', Gilbert Ryle attacked Cartesian dualism as a monumental category mistake.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "The idea that the mind is a \"ghost in the machine\" was criticized by?",
    "titleSec": "മനസ്സ് ഒരു 'മെഷീനിലെ പ്രേതമാണ്' (Ghost in the Machine) എന്ന കാർട്ടീഷ്യൻ സങ്കൽപ്പത്തെ നിശിതമായി വിമർശിച്ചത് ആര്?",
    "lang": "ml",
    "hint": "Philosophy of AI · The 'Ghost in the Machine' Critique",
    "backEn": "<strong>Answer:</strong> Ryle<br>Gilbert Ryle coined the scathing phrase 'the dogma of the Ghost in the Machine' to ridicule Descartes' view of an immaterial mind inhabiting a mechanical physical body.",
    "backSec": "<strong>ഉത്തരം:</strong> 1949-ൽ ഗിൽബർട്ട് റൈൽ തന്റെ 'The Concept of Mind' എന്ന കൃതിയിലൂടെ കാർട്ടീഷ്യൻ ദ്വൈതവാദത്തെ പരിഹസിക്കാൻ ഈ പ്രയോഗം ഉപയോഗിച്ചു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which theory holds that mental states can be fully explained without reference to inner experiences?",
    "titleSec": "ചോദ്യം 74: Behaviorist Rejection of Inner Experience",
    "lang": "ml",
    "hint": "Philosophy of AI · Behaviorist Rejection of Inner Experience",
    "backEn": "<strong>Answer:</strong> Behaviorism<br>Behaviorism asserts that psychological explanations can be completely articulated through external stimuli and observable responses, without reference to private subjective qualia or inner states.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "In AI research, what challenge parallels the mind-body problem in philosophy?",
    "titleSec": "ചോദ്യം 75: The Symbol Grounding Problem in AI",
    "lang": "ml",
    "hint": "Philosophy of AI · The Symbol Grounding Problem in AI",
    "backEn": "<strong>Answer:</strong> Symbolic grounding problem<br>The Symbol Grounding Problem (Stevan Harnad) asks how artificial computational symbols acquire intrinsic real-world meaning, directly paralleling philosophy's mind-body and intentionality problems.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (A) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "How can a system illustrate behaviorist ideas?",
    "titleSec": "ചോദ്യം 76: Behaviorist Principles in Computational Systems",
    "lang": "ml",
    "hint": "Philosophy of AI · Behaviorist Principles in Computational Systems",
    "backEn": "<strong>Answer:</strong> By showing intelligent behavior based on input and rules<br>An AI system demonstrates behaviorist tenets by executing appropriate external actions and responses based strictly on input stimuli and rule sets, without needing subjective conscious experiences.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is the main goal of AI alignment?",
    "titleSec": "AI അലൈൻമെന്റിന്റെ (AI Alignment) പ്രധാന ലക്ഷ്യം എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · AI Value Alignment",
    "backEn": "<strong>Answer:</strong> To ensure AI systems act according to human values and intentions<br>AI Alignment is the crucial field of AI safety dedicated to ensuring artificial intelligence systems accurately adhere to and advance human moral values, intent, and safety.",
    "backSec": "<strong>ഉത്തരം:</strong> നിർമ്മിത ബുദ്ധി സംവിധാനങ്ങൾ പൂർണ്ണമായും മനുഷ്യ മൂല്യങ്ങൾക്കും താല്പര്യങ്ങൾക്കും സുരക്ഷയ്ക്കും അനുസൃതമായി പ്രവർത്തിക്കുന്നുവെന്ന് ഉറപ്പാക്കുകയാണ് AI അലൈൻമെന്റിന്റെ ലക്ഷ്യം."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Why is embedding human values important in AI systems?",
    "titleSec": "ചോദ്യം 78: Human-Centered Values in AI Systems",
    "lang": "ml",
    "hint": "Philosophy of AI · Human-Centered Values in AI Systems",
    "backEn": "<strong>Answer:</strong> To ensure AI respects human dignity, safety, fairness, and well-being<br>Embedding human values is imperative so that autonomous automated decisions uphold human dignity, physical safety, distributive fairness, privacy, and fundamental human rights.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (D) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Continuous monitoring of AI systems is important because?",
    "titleSec": "ചോദ്യം 79: Monitoring Against Goal Drift & Distribution Shift",
    "lang": "ml",
    "hint": "Philosophy of AI · Monitoring Against Goal Drift & Distribution Shift",
    "backEn": "<strong>Answer:</strong> AI systems may drift from human-aligned behavior over time<br>Continuous post-deployment monitoring is essential because machine learning models experience distribution drift, emergent behaviors, and divergence from human goals over time in complex environments.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (A) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is the primary purpose of transparency and explainability in AI?",
    "titleSec": "AI-യിലെ സുതാര്യതയുടെയും എക്സ്പ്ലെയിനബിലിറ്റിയുടെയും (XAI) പ്രാഥമിക ഉദ്ദേശ്യം എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Transparency & Explainable AI (XAI)",
    "backEn": "<strong>Answer:</strong> To make AI decisions visible, understandable, accountable, and trustworthy<br>Transparency and Explainable AI (XAI) ensure that algorithmic decisions are interpretable, auditable, accountable, and understandable to humans who are impacted by them.",
    "backSec": "<strong>ഉത്തരം:</strong> AI എടുക്കുന്ന സുപ്രധാന തീരുമാനങ്ങൾ മനുഷ്യർക്ക് കാണാനും മനസ്സിലാക്കാനും അവയുടെ ഉത്തരവാദിത്തം ഉറപ്പുവരുത്താനും സാധ്യമാക്കുക എന്നതാണ് XAI-യുടെ ഉദ്ദേശ്യം."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is a major concern associated with superintelligent AI as an existential threat?",
    "titleSec": "ചോദ്യം 81: Superintelligence & The Value Misalignment Threat",
    "lang": "ml",
    "hint": "Philosophy of AI · Superintelligence & The Value Misalignment Threat",
    "backEn": "<strong>Answer:</strong> It might pursue goals misaligned with human values.<br>Nick Bostrom and AI safety researchers emphasize that a superintelligent AI could present an existential catastrophe if its optimization objective is slightly misaligned with human survival (the 'Orthogonality Thesis').",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Why is the concept of “autonomy” in AI relevant to existential threats?",
    "titleSec": "ചോദ്യം 82: AI Autonomy and Existential Risk",
    "lang": "ml",
    "hint": "Philosophy of AI · AI Autonomy and Existential Risk",
    "backEn": "<strong>Answer:</strong> Greater autonomy allows AI to act independently<br>High autonomy grants an AI system the power to take irreversible actions, allocate real-world resources, and resist shutdown without human approval, magnifying existential danger if misaligned.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (D) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What does AGI (Artificial General Intelligence) refer to?",
    "titleSec": "ചോദ്യം 83: Artificial General Intelligence (AGI)",
    "lang": "ml",
    "hint": "Philosophy of AI · Artificial General Intelligence (AGI)",
    "backEn": "<strong>Answer:</strong> AI with humanlike general intelligence across domains / can perform any intellectual task a human can<br>AGI refers to a machine that exhibits human-level general cognitive adaptability—capable of understanding, learning, reasoning, and transferring knowledge across any intellectual domain.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Why is AGI considered “far” or a distant goal?",
    "titleSec": "ചോദ്യം 84: The Horizon of AGI: Commonsense & True Understanding",
    "lang": "ml",
    "hint": "Philosophy of AI · The Horizon of AGI: Commonsense & True Understanding",
    "backEn": "<strong>Answer:</strong> Because current AI lacks understanding, reasoning, and common sense<br>AGI remains distant because contemporary deep learning models rely on statistical pattern matching rather than genuine causal reasoning, robust common sense, and semantic comprehension.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "How does the lack of autonomy in AI relate to AGI being far?",
    "titleSec": "ചോദ്യം 85: Narrow Supervision vs. General Autonomous Reasoning",
    "lang": "ml",
    "hint": "Philosophy of AI · Narrow Supervision vs. General Autonomous Reasoning",
    "backEn": "<strong>Answer:</strong> AI needs human supervision and cannot self-direct learning across domains<br>Existing AI systems are narrow tools that require human prompt engineering and supervision, lacking self-directed domain transfer, metacognition, and autonomous general reasoning.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "The primary reason learning algorithms acquire moral bias is?",
    "titleSec": "മെഷീൻ ലേണിംഗ് അൽഗോരിതങ്ങളിൽ പക്ഷപാതം (Bias) ഉണ്ടാകാനുള്ള പ്രധാന കാരണം എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Root Causes of Algorithmic Bias",
    "backEn": "<strong>Answer:</strong> Learning from historically biased data<br>Machine learning models learn by optimizing on historical training datasets, thereby inheriting, encoding, and magnifying societal, racial, and gender prejudices present in past human records.",
    "backSec": "<strong>ഉത്തരം:</strong> ചരിത്രപരമായി മനുഷ്യസമൂഹത്തിൽ നിലനിന്നിരുന്ന വിവേചനങ്ങളും മുൻവിധികളും അടങ്ങിയ ഡാറ്റയിൽ നിന്ന് കമ്പ്യൂട്ടറുകൾ പഠിക്കുന്നത് കൊണ്ടാണ് അൽഗോരിതങ്ങളിൽ പക്ഷപാതം ഉണ്ടാകുന്നത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which helps directly detect algorithmic bias?",
    "titleSec": "ചോദ്യം 87: Algorithmic Bias & Fairness Audits",
    "lang": "ml",
    "hint": "Philosophy of AI · Algorithmic Bias & Fairness Audits",
    "backEn": "<strong>Answer:</strong> Bias and fairness audits<br>Independent algorithmic fairness audits, parity testing (e.g. demographic parity, equalized odds), and bias evaluations directly diagnose systemic discrimination in AI models.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Embedding fairness constraints into a model relates to?",
    "titleSec": "ചോദ്യം 88: Ethical Optimization & Algorithmic Design",
    "lang": "ml",
    "hint": "Philosophy of AI · Ethical Optimization & Algorithmic Design",
    "backEn": "<strong>Answer:</strong> Algorithm design / Ethical optimization<br>Embedding fairness criteria (e.g., counterfactual fairness penalties, constrained optimization) directly into the objective function during training is a core practice of ethical algorithm design.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Bias that emerges after deployment is best addressed through?",
    "titleSec": "ചോദ്യം 89: Post-Deployment Algorithmic Monitoring",
    "lang": "ml",
    "hint": "Philosophy of AI · Post-Deployment Algorithmic Monitoring",
    "backEn": "<strong>Answer:</strong> Continuous monitoring and updates<br>Once deployed, models encounter shifting demographic distributions and unforeseen real-world feedback loops; continuous auditing and iterative updating are required to mitigate emerging bias.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Optimizing AI systems only for accuracy may lead to?",
    "titleSec": "ചോദ്യം 90: Perils of Pure Accuracy Optimization",
    "lang": "ml",
    "hint": "Philosophy of AI · Perils of Pure Accuracy Optimization",
    "backEn": "<strong>Answer:</strong> Amplification of existing social biases / social order<br>When an AI optimizes purely for raw statistical accuracy without fairness constraints, it systematically exploits historical majority advantages, reinforcing and amplifying existing social inequities.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Ethical optimization of AI mainly focuses on?",
    "titleSec": "ചോദ്യം 91: Ethical AI Optimization",
    "lang": "ml",
    "hint": "Philosophy of AI · Ethical AI Optimization",
    "backEn": "<strong>Answer:</strong> Aligning AI goals with ethical values and human well-being<br>Ethical optimization broadens the objective function beyond raw commercial efficiency, intentionally balancing accuracy with fairness, transparency, safety, and human flourishing.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Ethical optimization helps prevent Which problems in AI systems?",
    "titleSec": "ചോദ്യം 92: Holistic Benefits of Ethical Optimization",
    "lang": "ml",
    "hint": "Philosophy of AI · Holistic Benefits of Ethical Optimization",
    "backEn": "<strong>Answer:</strong> Algorithm-based bias; Discrimination; Harmful or unsafe outcomes<br>Comprehensive ethical optimization safeguards against algorithmic bias, prevents discriminatory outcomes in lending/hiring/justice, and stops unsafe behaviors in high-stakes environments.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (D) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Embedding ethics into AI design from the start is called?",
    "titleSec": "ചോദ്യം 93: Ethics-by-Design (Value-Sensitive Design)",
    "lang": "ml",
    "hint": "Philosophy of AI · Ethics-by-Design (Value-Sensitive Design)",
    "backEn": "<strong>Answer:</strong> Ethics-by-Design<br>'Ethics-by-Design' is the proactive architectural principle that integrates moral principles, privacy controls, and fairness constraints into the AI system's core design from the very first blueprint.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is conducting an evaluation of potential social, ethical, and legal consequences before deploying ai known as?",
    "titleSec": "ചോദ്യം 94: Ethical & Human Rights Impact Assessments",
    "lang": "ml",
    "hint": "AI Foundations & Philosophy of Mind",
    "backEn": "<strong>Answer:</strong> Impact Assessment<br>An Ethical Impact Assessment (EIA) is a formal pre-deployment evaluation that investigates potential harms, systemic discrimination, legal compliance, and social repercussions before an AI is deployed.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (A) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which principle ensures that a self-driving car’s decision can be understood and explained?",
    "titleSec": "ചോദ്യം 95: Transparency in Autonomous Vehicles",
    "lang": "ml",
    "hint": "Philosophy of AI · Transparency in Autonomous Vehicles",
    "backEn": "<strong>Answer:</strong> Transparency<br>The ethical principle of Transparency demands that an autonomous vehicle's sensor telemetry, world model, and decision rationale can be audited, explained, and understood by regulators and investigators.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What should be the highest ethical priority for a self-driving car?",
    "titleSec": "സ്വയം ഓടുന്ന ഒരു കാറിന്റെ (Autonomous Vehicle) പരമോന്നത നൈതിക മുൻഗണന എന്തായിരിക്കണം?",
    "lang": "ml",
    "hint": "Philosophy of AI · Paramount Ethical Priority: Human Safety",
    "backEn": "<strong>Answer:</strong> Ensuring human safety<br>Across all ethical frameworks and automotive safety standards (such as ISO 26262), the unconditional highest moral and engineering priority of an autonomous vehicle is safeguarding human life and physical safety.",
    "backSec": "<strong>ഉത്തരം:</strong> എല്ലാ സാങ്കേതിക, വാണിജ്യ താല്പര്യങ്ങൾക്കും അതീതമായി മനുഷ്യജീവന്റെ സുരക്ഷ ഉറപ്പാക്കുക എന്നതാണ് ഒരു സ്വയംഭരണ വാഹനത്തിന്റെ പരമോന്നത ധാർമ്മിക കർത്തവ്യം."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What ethical practice helps prevent discrimination in AI-driven vehicles?",
    "titleSec": "ചോദ്യം 97: Demographically Audited Training Datasets",
    "lang": "ml",
    "hint": "Philosophy of AI · Demographically Audited Training Datasets",
    "backEn": "<strong>Answer:</strong> Using ethically audited and diverse training data<br>Autonomous driving vision systems must be trained on diverse, audited datasets representing diverse skin tones, wheelchair users, and varied clothing to ensure pedestrian detection works equally for everyone.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which ethical principle emphasizes that AI should support, not replace, human moral judgment?",
    "titleSec": "ചോദ്യം 98: Human-Centered Design (Human-in-the-Loop)",
    "lang": "ml",
    "hint": "Philosophy of AI · Human-Centered Design (Human-in-the-Loop)",
    "backEn": "<strong>Answer:</strong> Human-centered design<br>Human-Centered AI insists that intelligent machines must function as cognitive tools that augment, assist, and support human moral deliberation rather than usurping human moral responsibility.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is morality primarily concerned with?",
    "titleSec": "ചോദ്യം 99: The Core Domain of Morality",
    "lang": "ml",
    "hint": "Philosophy of AI · The Core Domain of Morality",
    "backEn": "<strong>Answer:</strong> Distinguishing right from wrong<br>Morality is the domain of normative ethics fundamentally concerned with distinguishing right from wrong conduct, justice from injustice, and virtue from vice.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Moral values mainly guide a person’s?",
    "titleSec": "ചോദ്യം 100: Moral Values as Behavioral Guides",
    "lang": "ml",
    "hint": "Philosophy of AI · Moral Values as Behavioral Guides",
    "backEn": "<strong>Answer:</strong> Ethical behavior<br>Moral values provide internalized principles, virtues, and conscience that guide an agent's ethical behavior, personal integrity, and treatment of other beings.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What is meant by moral harm?",
    "titleSec": "ചോദ്യം 101: Definition of Moral Harm",
    "lang": "ml",
    "hint": "Philosophy of AI · Definition of Moral Harm",
    "backEn": "<strong>Answer:</strong> Violation of moral rights, dignity, or well-being<br>Moral harm transcends mere physical pain or financial balance sheets; it occurs whenever an entity's fundamental moral rights, autonomy, dignity, psychological sanctity, or intrinsic worth are violated.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which best represents moral harm in AI systems?",
    "titleSec": "ചോദ്യം 102: Moral Harm in Automated Decision Systems",
    "lang": "ml",
    "hint": "Philosophy of AI · Moral Harm in Automated Decision Systems",
    "backEn": "<strong>Answer:</strong> Biased decision-making<br>In automated AI systems, moral harm manifests when biased algorithms deny qualified individuals bank loans, job interviews, healthcare, or parole based on demographic identity, violating justice and human dignity.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "A moral agent is best defined as an entity that can?",
    "titleSec": "ധാർമ്മിക പ്രവർത്തകൻ (Moral Agent) എന്നതുകൊണ്ട് അർത്ഥമാക്കുന്നത് എന്താണ്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Moral Agency Defined",
    "backEn": "<strong>Answer:</strong> Distinguish right from wrong and be held responsible<br>A Moral Agent is an entity that possesses the cognitive capacity to deliberate about moral rules, distinguish right from wrong, form moral intentions, and be held morally responsible for its choices.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയും തെറ്റും സ്വയം വേർതിരിച്ചറിയാനും സ്വന്തം പ്രവൃത്തികൾക്ക് പൂർണ്ണ ഉത്തരവാദിത്തം വഹിക്കാനും ശേഷിയുള്ള സ്വതന്ത്ര ഇച്ഛാശക്തിയുള്ള വ്യക്തിയെയാണ് മോറൽ ഏജന്റ് എന്ന് വിളിക്കുന്നത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Moral agents must possess?",
    "titleSec": "ചോദ്യം 104: Pre-conditions of Moral Agency: Intentionality & Autonomy",
    "lang": "ml",
    "hint": "Philosophy of AI · Pre-conditions of Moral Agency: Intentionality & Autonomy",
    "backEn": "<strong>Answer:</strong> Intentionality and autonomy<br>Philosophers agree that genuine moral agency requires intentionality (having conscious mental states directed at the world) and genuine autonomy (freedom to choose otherwise and act for reasons).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Which ethical capacity allows a moral agent to be praised or blamed?",
    "titleSec": "ചോദ്യം 105: Free Will as the Basis of Praise and Blame",
    "lang": "ml",
    "hint": "Philosophy of AI · Free Will as the Basis of Praise and Blame",
    "backEn": "<strong>Answer:</strong> Free will<br>In moral philosophy, an agent can only be legitimately praised or blamed for an action if they acted with Free Will—possessing moral autonomy and the ability to choose otherwise.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "When AI causes harm, who should be held morally accountable?",
    "titleSec": "ചോദ്യം 106: Human Stakeholder Accountability for AI",
    "lang": "ml",
    "hint": "Philosophy of AI · Human Stakeholder Accountability for AI",
    "backEn": "<strong>Answer:</strong> Human stakeholders involved<br>Because current AI systems lack consciousness and moral agency, when an AI system inflicts harm, moral and legal liability rests on the human stakeholders—developers, deployment organizations, and executives.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (C) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "If an AI system were conscious and morally autonomous, it might?",
    "titleSec": "ചോദ്യം 107: Sentient Autonomous AI as Moral Agents",
    "lang": "ml",
    "hint": "Philosophy of AI · Sentient Autonomous AI as Moral Agents",
    "backEn": "<strong>Answer:</strong> Be considered a moral agent<br>Philosophers argue that if a future AI were to attain genuine consciousness, subjective experience, and genuine moral autonomy, it could no longer be treated as a mere tool, but as a moral agent.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "Consciousness is best described as the?",
    "titleSec": "ചോദ്യം 108: Consciousness (Phenomenal Awareness)",
    "lang": "ml",
    "hint": "Philosophy of AI · Consciousness (Phenomenal Awareness)",
    "backEn": "<strong>Answer:</strong> Awareness of oneself and one's surroundings<br>Consciousness is fundamentally subjective phenomenal awareness: Thomas Nagel's famous criterion that 'there is something that it is like to be' that entity, experiencing sensations and surroundings from within.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "What does qualia refer to?",
    "titleSec": "ക്വാലിയ (Qualia) എന്നത് എന്തിനെയാണ് സൂചിപ്പിക്കുന്നത്?",
    "lang": "ml",
    "hint": "Philosophy of AI · Qualia: The Qualitative Character of Experience",
    "backEn": "<strong>Answer:</strong> First-person subjective experience<br>In philosophy of mind, 'Qualia' refers to the introspectively accessible, first-person subjective qualities of conscious experiences—such as the perceived redness of a rose or the painful sting of a burn.",
    "backSec": "<strong>ഉത്തരം:</strong> ഒരു ചുവന്ന റോസാപ്പൂ കാണുമ്പോഴോ വേദന അനുഭവിക്കുമ്പോഴോ ഒരു വ്യക്തിക്ക് ഉള്ളിൽ മാത്രം അനുഭവപ്പെടുന്ന ആത്മനിഷ്ഠ ഗുണപരമായ അനുഭവങ്ങളെയാണ് ക്വാലിയ എന്ന് വിളിക്കുന്നത്."
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of AI",
    "titleEn": "The right of autonomy mainly protects a person's?",
    "titleSec": "ചോദ്യം 110: The Right to Moral Autonomy",
    "lang": "ml",
    "hint": "Philosophy of AI · The Right to Moral Autonomy",
    "backEn": "<strong>Answer:</strong> Freedom to make informed decisions<br>The fundamental ethical right of autonomy guarantees a person's freedom to make informed, self-directed decisions about their own body, life, thoughts, and destiny without coercive algorithmic manipulation.",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം (B) ആണ്. ഇത് തത്ത്വശാസ്ത്ര സിദ്ധാന്തങ്ങളുമായി കൃത്യമായി യോജിക്കുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the total geographical area of Kerala?",
    "titleSec": "കേരളത്തിന്റെ ആകെ ഭൂവിസ്തൃതി എത്ര ചതുരശ്ര കിലോമീറ്ററാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Geographical Area of Kerala",
    "backEn": "<strong>Answer:</strong> 38,863 square kilometres<br>According to the official geographical survey and university curriculum, Kerala forms a narrow strip of land along the southwest coast of India with a total area of 38,863 square kilometres.",
    "backSec": "<strong>ഉത്തരം:</strong> ഔദ്യോഗിക ഭൂമിശാസ്ത്ര രേഖകൾ പ്രകാരം തെക്കുപടിഞ്ഞാറൻ തീരപ്രദേശത്ത് സ്ഥിതിചെയ്യുന്ന കേരളത്തിന്റെ ആകെ വിസ്തൃതി 38,863 ചതുരശ്ര കിലോമീറ്ററാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Into how many distinct longitudinal physical zones is Kerala traditionally divided based on elevation?",
    "titleSec": "ഭൂപ്രകൃതിയും ഉയരവും അടിസ്ഥാനമാക്കി കേരളത്തെ പ്രധാനമായും എത്ര സ്വാഭാവിക മേഖലകളായാണ് തിരിച്ചിരിക്കുന്നത്?",
    "lang": "ml",
    "hint": "History of Keralam · Three Physical Divisions of Kerala",
    "backEn": "<strong>Answer:</strong> Three (Highland, Midland, and Lowland)<br>Kerala is physically classified into three parallel longitudinal zones: High-land (Malanad, above 75 metres), Mid-land (Idanad, between 7.5 and 75 metres), and Low-land (Theerarambham/Kadaloram, below 7.5 metres).",
    "backSec": "<strong>ഉത്തരം:</strong> സമുദ്രനിരപ്പിൽ നിന്നുള്ള ഉയരത്തിന്റെ അടിസ്ഥാനത്തിൽ കേരളത്തെ മലനാട് (75 മീറ്ററിന് മുകളിൽ), ഇടനാട് (7.5 - 75 മീറ്റർ), തീരപ്രദേശം (7.5 മീറ്ററിൽ താഴെ) എന്നിങ്ങനെ മൂന്ന് സ്വാഭാവിക മേഖലകളായി തിരിച്ചിരിക്കുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the average width of the famous Palakkad Gap (Palghat Gap) in the Western Ghats?",
    "titleSec": "പശ്ചിമഘട്ടത്തിലെ പ്രകൃതിദത്ത വിടവായ പാലക്കാട് ചുരത്തിന്റെ ശരാശരി വീതി എത്രയാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · The Palakkad Gap",
    "backEn": "<strong>Answer:</strong> Approximately 30 kilometres<br>The Palakkad Gap is a prominent natural discontinuity in the Western Ghats measuring approximately 30 kilometres in width, situated between the Nilgiri hills to the north and the Anamalai hills to the south.",
    "backSec": "<strong>ഉത്തരം:</strong> നീലഗിരി മലനിരകൾക്കും ആനമലയ്ക്കുമിടയിൽ സ്ഥിതിചെയ്യുന്ന പാലക്കാട് ചുരത്തിന് ഏകദേശം 30 കിലോമീറ്റർ വീതിയുണ്ട്. ഇത് കേരളത്തെ തമിഴ് സമതലങ്ങളുമായി ബന്ധിപ്പിച്ച പ്രധാന ചരിത്രപാതയാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which mountain pass connects the port city of Kollam with Tirunelveli in southern Tamil Nadu?",
    "titleSec": "തെക്കൻ തമിഴ്നാട്ടിലെ തിരുനെൽവേലിയെ പുരാതന തുറമുഖ നഗരമായ കൊല്ലവുമായി ബന്ധിപ്പിക്കുന്ന പ്രധാന മലമ്പാത ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Aryankavu Mountain Pass",
    "backEn": "<strong>Answer:</strong> Aryankavu Pass<br>The Aryankavu Pass, situated at an elevation of about 400 metres, served as the principal southern overland trade artery linking the historic seaport of Quilon (Kollam) with Tirunelveli and southern Tamil Nadu.",
    "backSec": "<strong>ഉത്തരം:</strong> ഏകദേശം 400 മീറ്റർ ഉയരത്തിൽ സ്ഥിതിചെയ്യുന്ന ആര്യങ്കാവ് ചുരമാണ് കൊല്ലം തുറമുഖത്തെയും തെക്കൻ കേരളത്തെയും തിരുനെൽവേലിയുമായി ബന്ധിപ്പിച്ചിരുന്ന പ്രധാന വ്യാപാര പാത."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "How many total rivers flow through Kerala, and how many flow westward into the Arabian Sea?",
    "titleSec": "കേരളത്തിൽ ആകെ എത്ര നദികളുണ്ട്? ഇതിൽ എത്ര നദികളാണ് പടിഞ്ഞാറോട്ട് ഒഴുകി അറബിക്കടലിൽ ചേരുന്നത്?",
    "lang": "ml",
    "hint": "History of Keralam · Hydrography and River Systems of Kerala",
    "backEn": "<strong>Answer:</strong> Total 44 rivers; 41 westward, 3 eastward<br>Kerala has 44 major rivers in total. Of these, 41 flow westward down the steep slopes of the Western Ghats into the Arabian Sea and coastal backwaters, while 3 flow eastward (Kabani, Bhavani, and Pambar) to join the Cauvery river system.",
    "backSec": "<strong>ഉത്തരം:</strong> കേരളത്തിൽ ആകെ 44 നദികളാണുള്ളത്. ഇതിൽ 41 എണ്ണം പടിഞ്ഞാറോട്ടും 3 എണ്ണം (കബനി, ഭവാനി, പാമ്പാർ) കിഴക്കോട്ടും ഒഴുകുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which is the longest river in Kerala?",
    "titleSec": "കേരളത്തിലെ ഏറ്റവും നീളം കൂടിയ നദി ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Longest River: Periyar",
    "backEn": "<strong>Answer:</strong> Periyar<br>The Periyar is the longest river in Kerala, with a total length of 244 kilometres. It originates in the Sivagiri hills of the Western Ghats and flows past Aluva into the Arabian Sea.",
    "backSec": "<strong>ഉത്തരം:</strong> 244 കിലോമീറ്റർ നീളമുള്ള പെരിയാറാണ് കേരളത്തിലെ ഏറ്റവും നീളം കൂടിയ നദി. പശ്ചിമഘട്ടത്തിലെ ശിവഗിരി മലനിരകളിൽ നിന്നാണ് ഇത് ഉത്ഭവിക്കുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which river in Kerala is celebrated as the cradle of Kerala's culture and is also known as Nila?",
    "titleSec": "കേരളത്തിന്റെ സാംസ്കാരിക നദി എന്നറിയപ്പെടുന്നതും 'നീല' (Nila) എന്ന് വിളിക്കപ്പെടുന്നതുമായ നദി ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Bharathapuzha (Nila) and Cultural Heritage",
    "backEn": "<strong>Answer:</strong> Bharathapuzha<br>Bharathapuzha (209 km), historically known as Nila, is revered as the cultural lifeline of Kerala, on whose banks historical assemblies like the Mamankam were celebrated at Thirunavaya.",
    "backSec": "<strong>ഉത്തരം:</strong> 209 കിലോമീറ്റർ നീളമുള്ള ഭാരതപ്പുഴയാണ് നിള എന്നറിയപ്പെടുന്നത്. മാമാങ്കം അരങ്ങേറിയിരുന്ന തിരുനാവായ ഉൾപ്പെടെ കേരളത്തിന്റെ നിരവധി ചരിത്ര-സാംസ്കാരിക കേന്ദ്രങ്ങൾ നിളയുടെ തീരത്താണ് സ്ഥിതിചെയ്യുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the largest backwater (Kayal) lake in Kerala?",
    "titleSec": "കേരളത്തിലെ ഏറ്റവും വലിയ കായൽ ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Vembanad Lake",
    "backEn": "<strong>Answer:</strong> Vembanad Kayal<br>Vembanad Kayal is the largest lake in Kerala and the longest lake in India, spanning the districts of Ernakulam, Alappuzha, and Kottayam, covering over 200 sq km.",
    "backSec": "<strong>ഉത്തരം:</strong> എറണാകുളം, ആലപ്പുഴ, കോട്ടയം ജില്ലകളിലായി വ്യാപിച്ചുകിടക്കുന്ന വേമ്പനാട്ട് കായലാണ് കേരളത്തിലെ ഏറ്റവും വലിയ കായലും ഇന്ത്യയിലെ ഏറ്റവും നീളം കൂടിയ തടാകവും."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the unique morphological characteristic that gives Ashtamudi Kayal its name?",
    "titleSec": "അഷ്ടമുടി കായലിന് ആ പേര് ലഭിക്കാൻ കാരണമായ സവിശേഷത എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Morphology of Ashtamudi Kayal",
    "backEn": "<strong>Answer:</strong> It possesses eight radiating branches or arms ('braids')<br>Ashtamudi derives its name from 'Ashta' (eight) and 'Mudi' (braids/branches), describing its unique palm-shaped topography where eight major arms radiate from its central water basin.",
    "backSec": "<strong>ഉത്തരം:</strong> കേന്ദ്രഭാഗത്തുനിന്ന് എട്ട് ശാഖകളായി പിരിഞ്ഞു കിടക്കുന്ന സവിശേഷ ഘടനയുള്ളതിനാലാണ് (എട്ട് മുടികൾ/ശാഖകൾ) ഈ കായലിന് 'അഷ്ടമുടി' എന്ന പേര് ലഭിച്ചത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which soil type is most extensively distributed across the midland (Idanad) tract of Kerala?",
    "titleSec": "കേരളത്തിലെ ഇടനാട് മേഖലയിൽ ഏറ്റവും കൂടുതൽ കാണപ്പെടുന്ന പ്രധാന മണ്ണ് ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Laterite Soils of Kerala",
    "backEn": "<strong>Answer:</strong> Laterite soil<br>Laterite soil (formed by intense weathering under tropical monsoon conditions with alternating wet and dry spells) covers nearly 65% of Kerala's landmass, dominating the midland undulating hillocks.",
    "backSec": "<strong>ഉത്തരം:</strong> കേരളത്തിന്റെ ആകെ ഭൂവിസ്തൃതിയുടെ 65 ശതമാനത്തിലധികം വ്യാപിച്ചുകിടക്കുന്നതും ഇടനാടൻ കുന്നിൻപ്രദേശങ്ങളിൽ സമൃദ്ധമായി കാണപ്പെടുന്നതുമായ മണ്ണാണ് ലാറ്ററൈറ്റ് (ചെങ്കൽ മണ്ണ്)."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What are the distinctive characteristics of the 'Kari' soils found in the Kuttanad region?",
    "titleSec": "കുട്ടനാട് മേഖലയിൽ കാണപ്പെടുന്ന 'കരി' (Kari) മണ്ണിന്റെ സവിശേഷത എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Kari Soils of Kuttanad",
    "backEn": "<strong>Answer:</strong> Deep black, highly acidic peat soils occurring 1–2 metres below sea level with submerged timber remains<br>Kari soils are peculiar black peat soils found in patches across Alappuzha and Kottayam (Kuttanad). Occurring 1–2 metres below mean sea level, they are poorly drained, highly acidic, and contain remnants of ancient submerged forests.",
    "backSec": "<strong>ഉത്തരം:</strong> സമുദ്രനിരപ്പിൽ നിന്നും 1-2 മീറ്റർ താഴെയായി കാണപ്പെടുന്ന കരിമണ്ണ് കറുത്ത നിറമുള്ളതും കടുത്ത അമ്ലഗുണമുള്ളതും പുരാതന വനങ്ങൾ മുങ്ങിപ്പോയി രൂപപ്പെട്ട പീറ്റ് മണ്ണിന് സമാനവുമാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "The Southwest Monsoon, which brings heavy rainfall to Kerala starting in early June, is traditionally known in Malayalam as?",
    "titleSec": "ജൂൺ ആദ്യവാരത്തിൽ കേരളത്തിൽ ആരംഭിക്കുന്ന തെക്കുപടിഞ്ഞാറൻ മൺസൂൺ മലയാളത്തിൽ ഏത് പേരിലാണ് അറിയപ്പെടുന്നത്?",
    "lang": "ml",
    "hint": "History of Keralam · Southwest Monsoon (Edavappathi)",
    "backEn": "<strong>Answer:</strong> Edavappathi<br>The Southwest Monsoon hits Kerala around the middle of the Malayalam month of Edavam (early June), and is hence culturally and meteorologically known as 'Edavappathi'.",
    "backSec": "<strong>ഉത്തരം:</strong> മലയാള മാസമായ ഇടവത്തിന്റെ പകുതിയോടെ (ജൂൺ തുടക്കത്തിൽ) എത്തുന്ന തെക്കുപടിഞ്ഞാറൻ കാലവർഷം പരമ്പരാഗതമായി 'ഇടവപ്പാതി' എന്നറിയപ്പെടുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "The Northeast Monsoon, active during October and November with evening thunderstorms, is designated in Kerala as?",
    "titleSec": "ഒക്ടോബർ-നവംബർ മാസങ്ങളിൽ ഇടിമിന്നലോട് കൂടി ലഭിക്കുന്ന വടക്കുകിഴക്കൻ മൺസൂൺ അറിയപ്പെടുന്നത് ഏത് പേരിലാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Northeast Monsoon (Thulavarsham)",
    "backEn": "<strong>Answer:</strong> Thulavarsham<br>The Northeast Monsoon occurs during the Malayalam month of Thulam (October–November) and is universally called 'Thulavarsham'. It is characterized by cyclonic winds and afternoon/evening thunderstorms.",
    "backSec": "<strong>ഉത്തരം:</strong> തുലാം മാസത്തിൽ പെയ്യുന്ന വടക്കുകിഴക്കൻ കാലവർഷം 'തുലാവർഷം' എന്നറിയപ്പെടുന്നു. ഉച്ചകഴിഞ്ഞുള്ള ഇടിമിന്നലോടു കൂടിയ മഴയാണ് ഇതിന്റെ പ്രത്യേകത."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which historic natural commodity from the Kerala hills was famously referred to in ancient Greco-Roman trade as 'Black Gold'?",
    "titleSec": "ഗ്രീക്കോ-റോമൻ വാണിജ്യത്തിൽ 'കറുത്ത പൊന്ന്' (Black Gold) എന്നറിയപ്പെട്ടിരുന്ന കേരളത്തിലെ വിഭവമേതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Black Pepper as 'Black Gold'",
    "backEn": "<strong>Answer:</strong> Black Pepper<br>Black Pepper (Piper nigrum), indigenous to the evergreen forests of the Western Ghats, commanded astronomical value in classical Mediterranean markets, earning the famous epithet 'Black Gold' (Yavanapriya).",
    "backSec": "<strong>ഉത്തരം:</strong> പാശ്ചാത്യ വിപണികളിൽ സ്വർണ്ണത്തോളം മൂല്യമുണ്ടായിരുന്ന കേരളത്തിലെ കുരുമുളകാണ് 'കറുത്ത പൊന്ന്' (Black Gold / യവനപ്രിയ) എന്നറിയപ്പെട്ടിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which Greek navigator is credited with discovering the direct trans-oceanic monsoon route across the Arabian Sea to Malabar around 45–47 CE?",
    "titleSec": "എ.ഡി 45-47 കാലഘട്ടത്തിൽ അറബിക്കടലിലൂടെ കേരള തീരത്തേക്ക് നേരിട്ട് കപ്പലോട്ടം സാധ്യമാക്കിയ മൺസൂൺ കാറ്റിന്റെ ദിശ കണ്ടെത്തിയ ഗ്രീക്ക് നാവികൻ ആര്?",
    "lang": "ml",
    "hint": "History of Keralam · Hippalus and the Monsoon Wind",
    "backEn": "<strong>Answer:</strong> Hippalus<br>Hippalus, a Greek mariner, discovered the regular periodic nature of the Southwest monsoon winds (hence called the 'Hippalus Wind' in the Periplus), allowing ships to sail directly from the Gulf of Aden to Muziris in just 40 days.",
    "backSec": "<strong>ഉത്തരം:</strong> എ.ഡി ഒന്നാം നൂറ്റാണ്ടിൽ മൺസൂൺ കാറ്റിന്റെ ഗതി തിരിച്ചറിഞ്ഞ് ഏദനിലെ തുറമുഖങ്ങളിൽ നിന്ന് കേരളത്തിലെ മുസിരിസ്സിലേക്ക് നേരിട്ട് യാത്ര സാധ്യമാക്കിയത് ഹിപ്പാലസ് എന്ന ഗ്രീക്ക് നാവികനാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which plateau of the Western Ghats is the most extensive in Kerala, famous for ancient tea, coffee, and spice plantations?",
    "titleSec": "കേരളത്തിലെ പശ്ചിമഘട്ടത്തിലുള്ള പ്രധാനപ്പെട്ടതും വിശാലവുമായ പീഠഭൂമി ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Wayanad Plateau",
    "backEn": "<strong>Answer:</strong> Wayanad Plateau<br>The Wayanad Plateau, standing at an elevation of 700 to 1200 metres, represents a contiguous extension of the Deccan/Mysore plateau into Kerala, renowned for prehistoric rock art and fertile spice plantations.",
    "backSec": "<strong>ഉത്തരം:</strong> 700 മുതൽ 1200 മീറ്റർ വരെ ഉയരത്തിൽ സ്ഥിതിചെയ്യുന്ന വയനാട് പീഠഭൂമി ഡക്കാൻ/മൈസൂർ പീഠഭൂമിയുടെ തുടർച്ചയാണ്. സമ്പന്നമായ വനവിഭവങ്ങൾക്കും ശിലായുഗ സംസ്കാരങ്ങൾക്കും ഇത് പേരുകേട്ടതാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "The Perambadi Pass in the Western Ghats provided a historical transport link between?",
    "titleSec": "പശ്ചിമഘട്ടത്തിലെ പെരമ്പാടി ചുരം ബന്ധിപ്പിച്ചിരുന്ന പ്രദേശങ്ങൾ ഏതെല്ലാമാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Perambadi Pass",
    "backEn": "<strong>Answer:</strong> Kannur (Malabar) and Coorg (Kodagu)<br>The Perambadi Pass provided crucial access between northern Malabar (Kannur/Thalassery) and Coorg (Kodagu) on the Mysore plateau, serving military expeditions and pepper caravans.",
    "backSec": "<strong>ഉത്തരം:</strong> വടക്കൻ മലബാറിലെ കണ്ണൂരിനെ കുടക് (Coorg) മലനിരകളുമായും മൈസൂർ പീഠഭൂമിയുമായും ബന്ധിപ്പിച്ചിരുന്ന ചരിത്രപ്രധാനമായ പാതയാണ് പെരമ്പാടി ചുരം."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which European fort ruins located along the coastal mouth of Periyar remind us of the strategic role of waterways in maritime defence?",
    "titleSec": "പെരിയാറിന്റെ അഴിമുഖത്ത് വൈപ്പിൻ ദ്വീപിൽ പോർച്ചുഗീസുകാർ 1503-ൽ നിർമ്മിച്ച ഏറ്റവും പഴയ യൂറോപ്യൻ കോട്ട ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Pallippuram Fort and Coastal Defence",
    "backEn": "<strong>Answer:</strong> Pallippuram Fort (Ayakkotta)<br>Pallippuram Fort (Ayakkotta), built by the Portuguese in 1503 on the northern tip of Vypin island near the mouth of the Periyar, is the oldest surviving European fort in India.",
    "backSec": "<strong>ഉത്തരം:</strong> 1503-ൽ പോർച്ചുഗീസുകാർ പെരിയാർ അഴിമുഖത്തിന്റെ കാവലിനായി നിർമ്മിച്ച പള്ളിപ്പുറം കോട്ടയാണ് (ആയക്കോട്ട) ഇന്ത്യയിൽ ഇന്നും അവശേഷിക്കുന്ന ഏറ്റവും പഴയ യൂറോപ്യൻ കോട്ട."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the geological epoch corresponding to the Palaeolithic period (Old Stone Age)?",
    "titleSec": "പുരാശിലായുഗം (Palaeolithic Age) ഉൾപ്പെടുന്ന ഭൂമിശാസ്ത്രപരമായ യുഗം (Epoch) ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Pleistocene Epoch and Palaeolithic Age",
    "backEn": "<strong>Answer:</strong> Pleistocene<br>The Palaeolithic Age coincides with the Pleistocene geological epoch (popularly known as the Great Ice Age), spanning from about 2.5 million years ago to roughly 10,000 BCE.",
    "backSec": "<strong>ഉത്തരം:</strong> ഹിമയുഗം എന്നറിയപ്പെടുന്ന പ്ലീസ്റ്റോസീൻ (Pleistocene) ഭൂമിശാസ്ത്ര യുഗത്തിലാണ് മനുഷ്യ സംസ്കാരത്തിന്റെ ആദ്യ ഘട്ടമായ പുരാശിലായുഗം (പാലിയോലിത്തിക്) നിലനിന്നിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which diagnostic stone tool industry is characteristic of the Lower Palaeolithic Acheulian culture?",
    "titleSec": "ലോവർ പാലിയോലിത്തിക് അച്ചൂലിയൻ (Acheulian) സംസ്കാരത്തിന്റെ മുഖമുദ്രയായ ശിലാ ഉപകരണങ്ങൾ ഏവ?",
    "lang": "ml",
    "hint": "History of Keralam · Acheulian Hand-axe Industry",
    "backEn": "<strong>Answer:</strong> Bifacial hand-axes and cleavers<br>The Acheulian cultural tradition of the Lower Palaeolithic is distinguished worldwide by bifacially worked stone tools, predominantly pear-shaped hand-axes and cleavers made by flaking quartz or quartzite.",
    "backSec": "<strong>ഉത്തരം:</strong> ഇരുവശങ്ങളും ചെത്തിമിനുക്കിയ കൈക്കോടാലികളും (Hand-axes) ക്ലീവറുകളുമാണ് (Cleavers) ലോവർ പാലിയോലിത്തിക് അച്ചൂലിയൻ സംസ്കാരത്തിന്റെ സവിശേഷത."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Who is revered as the pioneer of prehistoric archaeology in India for discovering the first Palaeolithic hand-axe at Pallavaram in 1863?",
    "titleSec": "1863-ൽ പല്ലാവരത്ത് നിന്ന് ആദ്യത്തെ പുരാശിലായുധം കണ്ടെത്തി ഇന്ത്യൻ പ്രാഗ്ചരിത്ര പഠനങ്ങൾക്ക് തുടക്കം കുറിച്ചത് ആര്?",
    "lang": "ml",
    "hint": "History of Keralam · Robert Bruce Foote: Father of Indian Prehistory",
    "backEn": "<strong>Answer:</strong> Robert Bruce Foote<br>Robert Bruce Foote, a British geologist of the Geological Survey of India, discovered the first Acheulian hand-axe at Pallavaram near Madras in 1863, establishing the deep antiquity of human presence in India.",
    "backSec": "<strong>ഉത്തരം:</strong> 1863-ൽ മദ്രാസിന് സമീപമുള്ള പല്ലാവരത്ത് നിന്ന് കൈക്കോടാലി കണ്ടെത്തിക്കൊണ്ട് റോബർട്ട് ബ്രൂസ് ഫൂട്ടാണ് ഇന്ത്യയിലെ പ്രാഗ്ചരിത്ര ഗവേഷണങ്ങളുടെ പിതാവായി മാറിയത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "In which river valley of Palakkad district were Lower and Middle Palaeolithic stone tools discovered in Kerala?",
    "titleSec": "കേരളത്തിൽ പാലക്കാട് ജില്ലയിലെ ഏത് നദീതടങ്ങളിലാണ് പുരാശിലായുധങ്ങൾ (Palaeolithic tools) ആദ്യമായി കണ്ടെത്തപ്പെട്ടത്?",
    "lang": "ml",
    "hint": "History of Keralam · Palaeolithic Discoveries in Palakkad",
    "backEn": "<strong>Answer:</strong> Walayar and Kanjirapuzha valleys<br>Systematic surveys by archaeologists including P. Rajendran in the Walayar, Kanjirapuzha, and Malampuzha basins of Palakkad revealed Acheulian hand-axes, scrapers, and cleavers, establishing Palaeolithic occupation in Kerala.",
    "backSec": "<strong>ഉത്തരം:</strong> പാലക്കാട് ജില്ലയിലെ വാളയാർ, കാഞ്ഞിരപ്പുഴ, മലമ്പുഴ നദീതടങ്ങളിൽ നിന്നാണ് കേരളത്തിലെ ആദ്യകാല ശിലായുധങ്ങളായ കൈക്കോടാലികളും സ്ക്രാപ്പറുകളും കണ്ടെത്തിയത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What primary lifestyle characterized human societies during the Palaeolithic period?",
    "titleSec": "പുരാശിലായുഗത്തിലെ മനുഷ്യരുടെ പ്രധാന ഉപജീവന രീതി എന്തായിരുന്നു?",
    "lang": "ml",
    "hint": "History of Keralam · Palaeolithic Hunter-Gatherer Economy",
    "backEn": "<strong>Answer:</strong> Nomadic hunting and gathering<br>Palaeolithic humans lived in small bands as mobile hunter-gatherers, moving seasonally across landscapes following game and foraging wild roots, tubers, berries, and fruits.",
    "backSec": "<strong>ഉത്തരം:</strong> പുരാശിലായുഗ മനുഷ്യർ സംഘങ്ങളായി തിരിഞ്ഞ് മൃഗങ്ങളെ വേട്ടയാടിയും കാട്ടുവിഭവങ്ങൾ ശേഖരിച്ചും നാടോടികളായാണ് ജീവിച്ചിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the technical term for the miniature stone tools that define the Mesolithic period?",
    "titleSec": "മധ്യശിലായുഗത്തിന്റെ (Mesolithic period) മുഖമുദ്രയായ സൂക്ഷ്മ ശിലാ ഉപകരണങ്ങൾ അറിയപ്പെടുന്നത് എങ്ങനെയാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Microliths of the Mesolithic Age",
    "backEn": "<strong>Answer:</strong> Microliths<br>The Mesolithic (Middle Stone Age) is technologically defined by 'microliths'—tiny stone tools typically between 1 and 5 cm in length, such as blades, lunates, triangles, and trapezes mounted onto wood or bone handles.",
    "backSec": "<strong>ഉത്തരം:</strong> 1 മുതൽ 5 സെന്റീമീറ്റർ വരെ മാത്രം വലിപ്പമുള്ള, മരത്തിലോ എല്ലിലോ പിടിപ്പിച്ച് ഉപയോഗിച്ചിരുന്ന ചെറു ശിലാ ഉപകരണങ്ങളാണ് 'സൂക്ഷ്മശിലകൾ' (Microliths)."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which celebrated rock shelter in Kollam district yielded evidence of Mesolithic habitation and microliths dated to around 4000 BCE?",
    "titleSec": "ഏകദേശം ബി.സി 4000 പഴക്കം കണക്കാക്കപ്പെടുന്ന സൂക്ഷ്മശിലകളും മധ്യശിലായുഗ തെളിവുകളും ലഭിച്ച കൊല്ലം ജില്ലയിലെ ശിലാകേന്ദ്രം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Tenmalai Mesolithic Rock Shelter",
    "backEn": "<strong>Answer:</strong> Tenmalai (Thenmala)<br>The Tenmalai rock shelter in Kollam district was excavated by archaeologist P. Rajendran, yielding classic geometric microliths and wood charcoal dated by radiocarbon to circa 4000 BCE.",
    "backSec": "<strong>ഉത്തരം:</strong> കൊല്ലം ജില്ലയിലെ തെന്മലയിലുള്ള പ്രകൃതിദത്ത ശിലാകേന്ദ്രത്തിൽ നിന്നാണ് ഡോ. പി. രാജേന്ദ്രന്റെ ഗവേഷണങ്ങളിലൂടെ സൂക്ഷ്മശിലായുധങ്ങളും മധ്യശിലായുഗ തെളിവുകളും കണ്ടെത്തിയത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is an essential hallmark that distinguishes the Neolithic Age from preceding stone ages?",
    "titleSec": "നവീന ശിലായുഗത്തെ (Neolithic Age) മുൻകാല ശിലായുഗങ്ങളിൽ നിന്ന് വേർതിരിക്കുന്ന പ്രധാന സവിശേഷത എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Hallmarks of the Neolithic Revolution",
    "backEn": "<strong>Answer:</strong> Ground and polished stone axes, agriculture, and animal domestication<br>The Neolithic ('New Stone Age') is characterized by polished stone celts, the dawn of plant cultivation (agriculture), domestication of animals, settled village life, and pottery making.",
    "backSec": "<strong>ഉത്തരം:</strong> മിനുസപ്പെടുത്തിയ ശിലാ ഉപകരണങ്ങൾ (Celts), കൃഷിയുടെ ആരംഭം, മൃഗങ്ങളെ മെരുക്കൽ, മൺപാത്ര നിർമ്മാണം, സ്ഥിരവാസ കേന്ദ്രങ്ങൾ എന്നിവയാണ് നവീന ശിലായുഗത്തിന്റെ സവിശേഷതകൾ."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "In which region of Kerala were polished stone celts and beads characteristic of the Neolithic phase discovered?",
    "titleSec": "നവീന ശിലായുഗത്തിന്റേതായ മിനുസപ്പെടുത്തിയ ശിലാ കോടാലികളും മണികളും കേരളത്തിൽ എവിടെ നിന്നാണ് പ്രധാനമായും ലഭിച്ചത്?",
    "lang": "ml",
    "hint": "History of Keralam · Neolithic Sites in Wayanad",
    "backEn": "<strong>Answer:</strong> Kalpetta and Pulppalli in Wayanad<br>Neolithic ground stone celts and beads have been reported from Kalpetta, Pulppalli, and Sultan Bathery in the Wayanad highland plateau, as well as along the upper Periyar bed near Alwaye.",
    "backSec": "<strong>ഉത്തരം:</strong> വയനാട് ജില്ലയിലെ കൽപ്പറ്റ, പുൽപ്പള്ളി, സുൽത്താൻ ബത്തേരി എന്നിവിടങ്ങളിൽ നിന്നും ആലുവ പെരിയാർ തടങ്ങളിൽ നിന്നുമാണ് നവീന ശിലായുഗ ഉപകരണങ്ങൾ കണ്ടെത്തിയിട്ടുള്ളത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Why do archaeologists consider the Neolithic phase in Kerala to have been relatively brief?",
    "titleSec": "കേരളത്തിലെ നവീന ശിലായുഗ ഘട്ടം വളരെ ഹ്രസ്വമായിരുന്നു എന്ന് പുരാവസ്തു ഗവേഷകർ കരുതാൻ കാരണമെന്ത്?",
    "lang": "ml",
    "hint": "History of Keralam · Brief Neolithic Transition in Kerala",
    "backEn": "<strong>Answer:</strong> Because it was swiftly overlapped and replaced by the Iron Age Megalithic culture<br>In Kerala, the Neolithic phase was relatively brief because the region transitioned rapidly from late stone tool usage directly into the Iron Age Megalithic culture around 1000 BCE, largely bypassing an extensive Chalcolithic phase.",
    "backSec": "<strong>ഉത്തരം:</strong> നവീന ശിലായുഗത്തിൽ നിന്ന് കേരളം വളരെ പെട്ടെന്ന് തന്നെ ഇരുമ്പുയുഗത്തിലെ മഹാശിലാ സംസ്കാരത്തിലേക്ക് പ്രവേശിച്ചതിനാലാണ് ഈ ഘട്ടം ഹ്രസ്വമായിരുന്നു എന്ന് കരുതപ്പെടുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What raw material was predominantly flaked to manufacture microliths in prehistoric Kerala?",
    "titleSec": "കേരളത്തിലെ സൂക്ഷ്മശിലകൾ (Microliths) നിർമ്മിക്കാൻ പ്രധാനമായും ഉപയോഗിച്ചിരുന്ന കല്ല് ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Raw Materials for Microliths",
    "backEn": "<strong>Answer:</strong> Quartz and chert<br>Mesolithic hunter-gatherers in Kerala extensively utilized milky vein quartz, crystal quartz, and chert flaked from river gravels to produce sharp-edged microlithic blades and points.",
    "backSec": "<strong>ഉത്തരം:</strong> കേരളത്തിലെ പുഴത്തടങ്ങളിൽ സുലഭമായിരുന്ന ക്വാർട്സ് (വെളുത്ത പരൽക്കല്ല്), ചെർട്ട് തുടങ്ങിയ കാഠിന്യമേറിയ കല്ലുകൾ ചെത്തിമിനുക്കിയാണ് സൂക്ഷ്മശിലകൾ നിർമ്മിച്ചിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is a recognized Mesolithic microlithic site in Ernakulam district?",
    "titleSec": "എറണാകുളം ജില്ലയിൽ സ്ഥിതിചെയ്യുന്ന പ്രസിദ്ധമായ മധ്യശിലായുഗ (Mesolithic) കേന്ദ്രം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Keezhillam Mesolithic Site",
    "backEn": "<strong>Answer:</strong> Keezhillam<br>Keezhillam in Ernakulam district is an identified prehistoric site where surface explorations recovered Mesolithic quartz flakes and core tools.",
    "backSec": "<strong>ഉത്തരം:</strong> എറണാകുളം ജില്ലയിലെ കീഴില്ലത്ത് നിന്നാണ് മധ്യശിലായുഗ കാലഘട്ടത്തിലെ ക്വാർട്സ് ശിലാ ഉപകരണങ്ങളും ഫ്ലേക്കുകളും കണ്ടെത്തപ്പെട്ടത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the primary archaeological method used to identify the relative age of prehistoric stone tool horizons in river valleys?",
    "titleSec": "നദീതടങ്ങളിൽ പുരാശിലായുധങ്ങളുടെ കാലപ്പഴക്കം നിർണ്ണയിക്കാൻ പുരാവസ്തു ഗവേഷകർ ഉപയോഗിക്കുന്ന പ്രാഥമിക രീതി ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Stratigraphic and Terrace Dating",
    "backEn": "<strong>Answer:</strong> Stratigraphy and river terrace analysis<br>In river valley contexts, geologists and prehistorians study river terraces (T1, T2, T3) and geological stratigraphy (layering of gravels and silts) to determine relative cultural chronologies.",
    "backSec": "<strong>ഉത്തരം:</strong> നദീതടങ്ങളിലെ മൺപാളികളെക്കുറിച്ചുള്ള പഠനമായ സ്ട്രാറ്റിഗ്രഫിയും (Stratigraphy) പുഴത്തട്ടുകളിലെ പ്രകൃതിദത്ത മാറ്റങ്ങളും പരിശോധിച്ചാണ് ശിലായുധങ്ങളുടെ ആപേക്ഷിക കാലപ്പഴക്കം നിർണ്ണയിക്കുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which transition in human lifestyle marks the boundary between the Mesolithic and Neolithic periods?",
    "titleSec": "മധ്യശിലായുഗത്തിൽ നിന്ന് നവീന ശിലായുഗത്തിലേക്കുള്ള മാറ്റത്തിൽ മനുഷ്യജീവിതത്തിൽ ഉണ്ടായ പ്രധാന വഴിത്തിരിവ് എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · The Neolithic Shift to Food Production",
    "backEn": "<strong>Answer:</strong> Shift from pure food gathering to food production (agriculture and domestication)<br>V. Gordon Childe coined the phrase 'Neolithic Revolution' to describe the profound economic transformation from parasitic foraging (hunting/gathering) to food production (agriculture and pastoralism).",
    "backSec": "<strong>ഉത്തരം:</strong> കേവലം പ്രകൃതിയിൽ നിന്ന് ഭക്ഷണം ശേഖരിച്ചിരുന്ന അവസ്ഥയിൽ നിന്ന് കാർഷിക വൃത്തിയിലൂടെ സ്വയം ഭക്ഷണം ഉൽപ്പാദിപ്പിക്കാൻ തുടങ്ങിയതാണ് (Food Production) നവീന ശിലായുഗത്തിന്റെ ഏറ്റവും വലിയ പ്രത്യേകത."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What kind of edge did Neolithic celts possess, compared to earlier Palaeolithic bifaces?",
    "titleSec": "പാലിയോലിത്തിക് ആയുധങ്ങളെ അപേക്ഷിച്ച് നവീന ശിലായുഗത്തിലെ ശിലാ കോടാലികൾക്ക് (Celts) ഉണ്ടായിരുന്ന വ്യത്യാസം എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Polished Neolithic Celts",
    "backEn": "<strong>Answer:</strong> Ground, pecked, and polished symmetrical cutting edges<br>Neolithic stone axes (celts) were manufactured through systematic pecking, grinding, and polishing against abrasive rock slabs to produce razor-sharp, symmetrical cutting edges suitable for felling timber and tilling soil.",
    "backSec": "<strong>ഉത്തരം:</strong> നവീന ശിലായുഗത്തിലെ കോടാലികൾ ഉരച്ചു മിനുസപ്പെടുത്തിയതും സമമിതിയാർന്നതും മരങ്ങൾ മുറിക്കാനും കൃഷിക്കും ഉപയോഗിക്കാൻ തക്ക മൂർച്ചയുള്ളതുമായിരുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which sites in Palakkad district has yielded prehistoric microlithic artifacts?",
    "titleSec": "പാലക്കാട് ജില്ലയിൽ മധ്യശിലായുഗ സൂക്ഷ്മ ശിലായുധങ്ങൾ കണ്ടെത്തിയ പ്രധാന കേന്ദ്രമേതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Anakkara Prehistoric Site",
    "backEn": "<strong>Answer:</strong> Anakkara<br>Anakkara, situated in the Bharathapuzha basin in Palakkad, is an established prehistoric site where archaeologists recovered microlithic stone tools and Megalithic burial remnants.",
    "backSec": "<strong>ഉത്തരം:</strong> ഭാരതപ്പുഴ തടത്തിൽ സ്ഥിതിചെയ്യുന്ന ആനക്കരയിൽ നിന്ന് സൂക്ഷ്മശിലകളും മഹാശിലാ സ്മാരകങ്ങളും പുരാവസ്തു ഗവേഷകർ കണ്ടെത്തിയിട്ടുണ്ട്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the key technical difference between 'petroglyphs' and 'pictographs' in prehistoric rock art?",
    "titleSec": "പ്രാഗ്ചരിത്ര ശിലാകലയിൽ 'പെട്രോഗ്ലിഫുകളും' (Petroglyphs) 'പിക്ടോഗ്രാഫുകളും' (Pictographs) തമ്മിലുള്ള പ്രധാന വ്യത്യാസം എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Petroglyphs vs. Pictographs",
    "backEn": "<strong>Answer:</strong> Petroglyphs are carved/incised into rock surfaces, while pictographs are painted with pigments<br>In archaeology, 'petroglyphs' refer to rock engravings made by pecking, incising, or carving into the bedrock. 'Pictographs' refer to rock paintings created using natural mineral pigments (like hematite red ochre or kaolin white).",
    "backSec": "<strong>ഉത്തരം:</strong> പാറകളിൽ കൊത്തിയുണ്ടാക്കുന്ന ചിത്രങ്ങളെ 'പെട്രോഗ്ലിഫുകൾ' (ശിലാലിഖിതങ്ങൾ/കൊത്തുപണികൾ) എന്നും ചായക്കൂട്ടുകൾ ഉപയോഗിച്ച് വരയ്ക്കുന്ന ചിത്രങ്ങളെ 'പിക്ടോഗ്രാഫുകൾ' (ശിലാചിത്രങ്ങൾ) എന്നും വിളിക്കുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Where is the world-renowned Edakkal Cave situated?",
    "titleSec": "ലോകപ്രശസ്തമായ ഇടക്കൽ ഗുഹ (Edakkal Cave) സ്ഥിതിചെയ്യുന്നത് എവിടെയാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Location of Edakkal Cave",
    "backEn": "<strong>Answer:</strong> Ambukuthi Hills near Sultan Bathery, Wayanad<br>Edakkal Cave is located on Ambukuthi Mala (hills) near Ambalavayal, about 12 km from Sultan Bathery in Wayanad district, at an altitude of approximately 1,200 metres.",
    "backSec": "<strong>ഉത്തരം:</strong> വയനാട് ജില്ലയിലെ സുൽത്താൻ ബത്തേരിക്കടുത്ത് അമ്പലവയലിലുള്ള അമ്പുകുത്തി മലനിരകളിലാണ് (ഏകദേശം 1200 മീറ്റർ ഉയരത്തിൽ) ഇടക്കൽ ഗുഹ സ്ഥിതിചെയ്യുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Who discovered the prehistoric rock engravings of Edakkal Cave in 1894?",
    "titleSec": "1894-ൽ ഇടക്കൽ ഗുഹയിലെ പ്രാഗ്ചരിത്ര ശിലാ കൊത്തുപണികൾ കണ്ടെത്തിയ ബ്രിട്ടീഷ് ഉദ്യോഗസ്ഥൻ ആര്?",
    "lang": "ml",
    "hint": "History of Keralam · Discovery of Edakkal Cave by Fred Fawcett",
    "backEn": "<strong>Answer:</strong> Fred Fawcett<br>Fred Fawcett, the Superintendent of Police in Malabar, discovered the Edakkal rock engravings in 1894 while on an excursion, publishing his pioneering findings in the 'Indian Antiquary' in 1901.",
    "backSec": "<strong>ഉത്തരം:</strong> 1894-ൽ മലബാർ പോലീസ് സൂപ്രണ്ടായിരുന്ന ഫ്രെഡ് ഫോസെറ്റാണ് ഇടക്കൽ ഗുഹയിലെ അപൂർവ്വ ശിലാ കൊത്തുപണികൾ കണ്ടെത്തി ലോകശ്രദ്ധയിൽ കൊണ്ടുവന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Geomorphologically, why is Edakkal technically not a true cavern, and what does its name mean?",
    "titleSec": "ഭൂമിശാസ്ത്രപരമായി ഇടക്കൽ ഒരു സ്വാഭാവിക ഗുഹയല്ല; 'ഇടക്കൽ' എന്ന പേരിന്റെ അർത്ഥവും അതിന്റെ ഘടനയും എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Geomorphic Structure of Edakkal",
    "backEn": "<strong>Answer:</strong> It is a natural cleft where a huge rock wedge got stuck between two massive rocks ('stone in between')<br>'Edakkal' literally translates to 'a stone in between' (Eda + Kal). It is a fissure rock shelter formed when a massive boulder split from the cliff and lodged tightly between two huge vertical rock walls, forming a roof.",
    "backSec": "<strong>ഉത്തരം:</strong> രണ്ട് വലിയ പാറകൾക്കിടയിൽ മലമുകളിൽ നിന്ന് അടർന്നുവീണ മറ്റൊരു ഭീമൻ പാറ ഇടയിൽ കുടുങ്ങി മേൽക്കൂരയായി മാറിയതാണ് ഇത്. 'ഇടയിലെ കല്ല്' എന്നതിൽ നിന്നാണ് 'ഇടക്കൽ' എന്ന പേര് വന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which iconic anthropomorphic motif is famously etched on the rock surface of Edakkal Cave?",
    "titleSec": "ഇടക്കൽ ഗുഹയിൽ കൊത്തിവെച്ചിട്ടുള്ള ഏറ്റവും ശ്രദ്ധേയമായ മനുഷ്യരൂപം (Anthropomorphic motif) ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Anthropomorphic Motifs at Edakkal",
    "backEn": "<strong>Answer:</strong> A stylized human figure with an elaborate conical headgear / head-dress<br>Edakkal is celebrated for its mysterious anthropomorphic engravings, most notably the 'man with headgear' or ritual mask, accompanied by a female figure with square-headed headdress and ritual dancers.",
    "backSec": "<strong>ഉത്തരം:</strong> വിചിത്രമായ കിരീടമോ തലപ്പാവോ ധരിച്ച വലിയ മനുഷ്യരൂപവും (Man with headgear) ആചാരപരമായ നൃത്തച്ചുവടുകളോടെയുള്ള സ്ത്രീരൂപങ്ങളുമാണ് ഇടക്കല്ലിലെ പ്രധാന കൊത്തുപണികൾ."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What vehicular representation at Edakkal Cave has been widely discussed by archaeologists as evidence of transport technology?",
    "titleSec": "ഇടക്കൽ ഗുഹയിലെ ചിത്രങ്ങളിൽ പുരാതന ഗതാഗത വിദ്യയുടെ തെളിവായി ഗവേഷകർ ചൂണ്ടിക്കാണിക്കുന്ന ചിത്രം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · The Wheeled Cart Motif at Edakkal",
    "backEn": "<strong>Answer:</strong> A wheeled cart with spoked wheels and a driver<br>On the extreme left wall at Edakkal, there is an engraving of a wheeled vehicle with adjoining circular spoked motifs and an associated figure, widely interpreted by scholars as an early wheeled cart.",
    "backSec": "<strong>ഉത്തരം:</strong> ഇടക്കൽ ഗുഹയുടെ ചുവരിൽ ആഴത്തിൽ കൊത്തിവെച്ചിട്ടുള്ള ചക്രങ്ങളുള്ള വണ്ടിയുടെയും അതിന് മുകളിലിരിക്കുന്ന ഡ്രൈവറുടെയും രൂപം പുരാതന ഗതാഗത സങ്കേതങ്ങളുടെ തെളിവായി പഠിക്കപ്പെടുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Where is the famous rock painting (pictograph) site of Marayur located?",
    "titleSec": "കേരളത്തിൽ ഏറ്റവും കൂടുതൽ ശിലാചിത്രങ്ങൾ (Pictographs) കാണപ്പെടുന്ന മറയൂർ സ്ഥിതിചെയ്യുന്നത് എവിടെയാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Location of Marayur Rock Art",
    "backEn": "<strong>Answer:</strong> In the Anjunad Valley along the Pambar river in Idukki district<br>Marayur rock art sites (including Ezhuthupara, Attala, and Pathipara) are situated in the Chinnar Wildlife Sanctuary and Anjunad valley along the Pambar river in Idukki district, also renowned for sandalwood forests and dolmens.",
    "backSec": "<strong>ഉത്തരം:</strong> ഇടുക്കി ജില്ലയിലെ പാമ്പാർ നദീതടത്തിലുള്ള അഞ്ചുനാട് താഴ്വരയിലാണ് (മറയൂർ) പ്രശസ്തമായ എഴുത്തുപാറ, അട്ടള തുടങ്ങിയ ശിലാചിത്ര കേന്ദ്രങ്ങളും മുനിയറകളും സ്ഥിതിചെയ്യുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What colors of mineral pigment dominate the rock paintings at Marayur?",
    "titleSec": "മറയൂരിലെ ശിലാചിത്രങ്ങളിൽ പ്രധാനമായും ഉപയോഗിച്ചിരിക്കുന്ന പ്രകൃതിദത്ത നിറങ്ങൾ ഏതെല്ലാമാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Pigments in Marayur Rock Paintings",
    "backEn": "<strong>Answer:</strong> Red ochre (hematite) and white (kaolin)<br>Prehistoric rock artists at Marayur utilized locally sourced natural earth pigments, primarily red ochre (derived from iron oxide/hematite) and white pigment (derived from kaolin or lime).",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രകൃതിദത്തമായ കാവിമണ്ണും (Red Ochre) വെളുത്ത കളിമണ്ണും (Kaolin) വെള്ളത്തിൽ ചാലിച്ചാണ് മറയൂരിലെ ശിലാചിത്രങ്ങൾ വരച്ചിരിക്കുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is meant by the archaeological term 'superimposition' observed in rock art?",
    "titleSec": "ശിലാകലയിലെ (Rock Art) 'സൂപ്പർഇംപോസിഷൻ' (Superimposition) എന്നതുകൊണ്ട് അർത്ഥമാക്കുന്നത് എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Superimposition in Rock Art",
    "backEn": "<strong>Answer:</strong> Painting or engraving new motifs directly over older, pre-existing figures<br>'Superimposition' occurs when prehistoric artists etched or painted figures directly on top of older designs, creating stratified visual layers that help archaeologists determine relative chronological sequences.",
    "backSec": "<strong>ഉത്തരം:</strong> നേരത്തെ വരച്ചതോ കൊത്തിയതോ ആയ ചിത്രങ്ങൾക്ക് മുകളിലായി പിൽക്കാലത്ത് വീണ്ടും പുതിയ ചിത്രങ്ങൾ വരച്ചുചേർക്കുന്നതിനെയാണ് 'സൂപ്പർഇംപോസിഷൻ' എന്ന് വിളിക്കുന്നത്. ചിത്രങ്ങളുടെ കാലപ്പഴക്കം അറിയാൻ ഇത് സഹായിക്കുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which animals is frequently depicted in the rock paintings of Marayur?",
    "titleSec": "മറയൂരിലെ ശിലാചിത്രങ്ങളിൽ നിരന്തരമായി ചിത്രീകരിച്ചിട്ടുള്ള മൃഗം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Faunal Depictions at Marayur",
    "backEn": "<strong>Answer:</strong> Humped bull and cattle<br>Rock art in the Chinnar-Marayur belt prominently depicts humped cattle (zebu), wild sambar, deer, elephant, and hunting scenes, illustrating both wild fauna and pastoral domestication.",
    "backSec": "<strong>ഉത്തരം:</strong> മറയൂരിലെ ചിത്രങ്ങളിൽ വേട്ടയാടൽ രംഗങ്ങൾക്കൊപ്പം തിമിളയുള്ള കാളകൾ, മാൻ, കാട്ടുപോത്ത്, ആന തുടങ്ങിയ നാടൻ മൃഗങ്ങളുടെ രൂപങ്ങൾ ധാരാളമായി കാണാം."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which other rock shelter in Wayanad, located near Edakkal, is noted for prehistoric geometric petroglyphs?",
    "titleSec": "വയനാട്ടിൽ ഇടക്കലിന് സമീപം ജ്യാമിതീയ ശിലാ കൊത്തുപണികൾ കണ്ടെത്തിയ മറ്റൊരു ശിലാകേന്ദ്രം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Tovari Rock Shelter",
    "backEn": "<strong>Answer:</strong> Tovari (Thovari)<br>Tovari (Thovari) rock shelter, located near Ambalavayal in Wayanad, contains ancient geometric petroglyphs and symbolic incised patterns closely related to the cultural horizon of Edakkal.",
    "backSec": "<strong>ഉത്തരം:</strong> വയനാട്ടിലെ അമ്പലവയലിനടുത്തുള്ള തോവരി (Tovari) ശിലാകേന്ദ്രത്തിൽ നിന്നാണ് ഇടക്കല്ലിലെ ചിത്രങ്ങളോട് സാമ്യമുള്ള പുരാതന ജ്യാമിതീയ കൊത്തുപണികൾ കണ്ടെത്തിയത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the primary interpretation accepted by modern archaeologists regarding the function of prehistoric rock art?",
    "titleSec": "പ്രാഗ്ചരിത്ര ശിലാചിത്രങ്ങളുടെ ധർമ്മത്തെക്കുറിച്ച് പുരാവസ്തു ഗവേഷകർ മുന്നോട്ടുവെക്കുന്ന പ്രധാന നിഗമനം എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Ritual and Sympathetic Function of Rock Art",
    "backEn": "<strong>Answer:</strong> Ritualistic, totemic, and sympathetic magic associated with subsistence, hunting, and spiritual beliefs<br>Anthropologists and archaeologists view rock art as symbolic expressions of early human belief systems—serving totemic clan identity, shamanic hunting rituals (sympathetic magic), fertility rites, and communication with spirits.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രാചീന മനുഷ്യരുടെ വേട്ടയാടൽ വിജയത്തിനായുള്ള അനുഷ്ഠാനങ്ങൾ, ഗോത്രചിഹ്നങ്ങൾ (Totemism), ആത്മാക്കളോടുള്ള പ്രാർത്ഥനകൾ, പ്രകൃതിശക്തികളോടുള്ള ആരാധന എന്നിവയുമായി ബന്ധപ്പെട്ടാണ് ഈ ശിലാകലകൾ രൂപപ്പെട്ടത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which rock shelter located in southern Kerala (Thiruvananthapuram district) contains remarkable geometric and anthropomorphic engravings?",
    "titleSec": "തിരുവനന്തപുരം ജില്ലയിൽ ജ്യാമിതീയ രൂപങ്ങളും മനുഷ്യരൂപങ്ങളും കൊത്തിവെച്ചിട്ടുള്ള പ്രാഗ്ചരിത്ര ശിലാകേന്ദ്രം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Ancode Cave Petroglyphs",
    "backEn": "<strong>Answer:</strong> Ancode Cave<br>The Ancode rock shelter in Thiruvananthapuram district features distinct prehistoric geometric engravings, intersecting triangles, and anthropomorphic motifs representing early communal life.",
    "backSec": "<strong>ഉത്തരം:</strong> തിരുവനന്തപുരം ജില്ലയിലെ ആങ്കോട് ഗുഹയിൽ നിന്നാണ് ത്രികോണങ്ങളും ചതുരങ്ങളും അടക്കമുള്ള ജ്യാമിതീയ രൂപങ്ങളും ആചാരപരമായ മനുഷ്യരൂപങ്ങളും അടങ്ങിയ ശിലാ കൊത്തുപണികൾ കണ്ടെത്തിയത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What geometric figure, symbolizing structural rigidity and stability, is frequently incised in the rock art of Edakkal and Ancode?",
    "titleSec": "ഇടക്കൽ, ആങ്കോട് ശിലാ കൊത്തുപണികളിൽ ഏറ്റവും കൂടുതൽ ആവർത്തിക്കപ്പെടുന്ന ജ്യാമിതീയ രൂപം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Geometric Triangle Motifs in Rock Art",
    "backEn": "<strong>Answer:</strong> Triangles<br>Triangles (formed by intersecting lines connecting three points) represent unalterable rigid geometric forms, prominently incised in both non-figurative symbolic compositions and anthropomorphic torsos at Edakkal and Ancode.",
    "backSec": "<strong>ഉത്തരം:</strong> മനുഷ്യരൂപങ്ങളുടെ ശരീരഭാഗങ്ങളായും സ്വതന്ത്ര പ്രതീകങ്ങളായും ഇടക്കല്ലിലും ആങ്കോടും നിരന്തരമായി കൊത്തിവെച്ചിട്ടുള്ള പ്രധാന ജ്യാമിതീയ രൂപം ത്രികോണങ്ങളാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Why did pastoral communities during the prehistoric and Megalithic eras frequently utilize rock shelters in the Chinnar region?",
    "titleSec": "ചിന്നാർ-മറയൂർ മേഖലയിലെ ശിലാകേന്ദ്രങ്ങൾ പ്രാചീന കാലത്ത് ഇടയന്മാർ പ്രധാനമായും എന്തിനാണ് ഉപയോഗിച്ചിരുന്നത്?",
    "lang": "ml",
    "hint": "History of Keralam · Pastoral Use of Chinnar Rock Shelters",
    "backEn": "<strong>Answer:</strong> As temporary pens to safeguard livestock and cattle overnight during seasonal migrations<br>Archaeological studies indicate that pastoral herders moving through the Chinnar/Marayur dry deciduous hill tracts used the rock shelters as overnight cattle folds to safeguard their livestock from predatory carnivores during transhumance.",
    "backSec": "<strong>ഉത്തരം:</strong> സീസണൽ യാത്രകളിൽ വന്യമൃഗങ്ങളുടെ ആക്രമണങ്ങളിൽ നിന്ന് കന്നുകാലികളെ രാത്രികാലങ്ങളിൽ സംരക്ഷിക്കുന്നതിനുള്ള സ്വാഭാവിക തൊഴുത്തുകളായാണ് (Cattle pens) ഇടയന്മാർ ഈ ശിലാകേന്ദ്രങ്ങളെ ഉപയോഗിച്ചിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which early historic Tamil Brahmi inscription was discovered inscribed alongside the prehistoric petroglyphs at Edakkal Cave?",
    "titleSec": "ഇടക്കൽ ഗുഹയിലെ ചിത്രങ്ങൾക്ക് സമീപത്ത് നിന്നും വായിച്ചെടുക്കപ്പെട്ട പുരാതന തമിഴ്-ബ്രാഹ്മി ലിഖിതത്തിൽ പരാമർശിക്കുന്ന പേര് എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Tamil-Brahmi Inscriptions at Edakkal",
    "backEn": "<strong>Answer:</strong> An inscription mentioning 'I-Pazhama' or the Chera king Kadummi Puthak Chera<br>In addition to prehistoric petroglyphs, epigraphists (like I. Mahadevan and M.R. Raghava Varier) deciphered Tamil-Brahmi inscriptions at Edakkal dating from c. 3rd century BCE to 4th century CE, referencing names like 'Kadummi Puthak Chera'.",
    "backSec": "<strong>ഉത്തരം:</strong> ഇടക്കൽ ഗുഹയിൽ പുരാതന ശിലാ കൊത്തുപണികൾക്ക് പുറമെ ചേരരാജാവായ 'കഡുമ്മി പുത ചേരൻ' എന്ന് പരാമർശിക്കുന്ന തമിഴ്-ബ്രാഹ്മി ശിലാലിഖിതങ്ങളും ചരിത്രകാരന്മാർ കണ്ടെത്തിയിട്ടുണ്ട്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the etymological origin of the term 'Megalith'?",
    "titleSec": "'മെഗാലിത്ത്' (Megalith) എന്ന വാക്കിന്റെ ഭാഷാപരമായ ഉത്ഭവം എവിടെ നിന്നാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Etymology of Megalith",
    "backEn": "<strong>Answer:</strong> From Greek 'Megas' (great/large) and 'Lithos' (stone)<br>The term 'Megalith' is derived from the Greek words 'megas' meaning large/huge and 'lithos' meaning stone, referring to monuments built of massive stone blocks without mortar during the Iron Age.",
    "backSec": "<strong>ഉത്തരം:</strong> 'മെഗാസ്' (വലിയ), 'ലിത്തോസ്' (കല്ല്) എന്നീ ഗ്രീക്ക് വാക്കുകളിൽ നിന്നാണ് 'മെഗാലിത്ത്' (മഹാശില) എന്ന പദം രൂപപ്പെട്ടത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What broad chronological span is generally assigned to the Megalithic Culture (Iron Age) in Kerala and South India?",
    "titleSec": "കേരളത്തിലും ദക്ഷിണേന്ത്യയിലും മഹാശിലാ സംസ്കാരം (Megalithic Culture) നിലനിന്നിരുന്ന കാലഘട്ടം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Chronology of South Indian Megalithic Culture",
    "backEn": "<strong>Answer:</strong> Circa 1000 BCE to 300/500 CE<br>Radiocarbon determinations and stratigraphic excavations date South India's Megalithic (Iron Age) culture from approximately 1000 BCE to roughly 300/500 CE, overlapping into the Sangam / Early Historic period.",
    "backSec": "<strong>ഉത്തരം:</strong> ഇരുമ്പുയുഗത്തോട് അനുബന്ധിച്ച് ബി.സി 1000 മുതൽ എ.ഡി 300/500 വരെയുള്ള കാലഘട്ടത്തിലാണ് ദക്ഷിണേന്ത്യയിൽ മഹാശിലാ സംസ്കാരം നിലനിന്നിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which distinctive mushroom-shaped megalithic monument consists of four clinostats (curved upright stones) supporting a hemispherical capstone?",
    "titleSec": "നാല് ചെരിഞ്ഞ ചെങ്കൽ പാളികൾക്ക് മുകളിലായി കുടയുടെ ആകൃതിയിൽ തൊപ്പികല്ല് വെച്ചുണ്ടാക്കുന്ന കേരളത്തിന്റെ തനത് മഹാശിലാ സ്മാരകം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Topikkal (Hat Stone / Umbrella Stone)",
    "backEn": "<strong>Answer:</strong> Topikkal (Hat Stone / Umbrella Stone)<br>Topikkal (Hat Stone or Umbrella Stone) is unique to Kerala: it consists of four unmortared inward-leaning curved laterite clinostats supporting a circular convex capstone, resembling a traditional palm-leaf umbrella.",
    "backSec": "<strong>ഉത്തരം:</strong> നാല് ചെരിഞ്ഞ കല്ലുകളിൽ വൃത്താകൃതിയിലുള്ള തൊപ്പി പോലെയുള്ള വലിയ കല്ല് ഉറപ്പിച്ചു നിർത്തുന്ന തൊപ്പിക്കല്ല് (കുടക്കല്ല്) കേരളത്തിൽ മാത്രം കാണപ്പെടുന്ന സവിശേഷ മഹാശിലാ സ്മാരകമാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is a 'Kudakkal' (Hood Stone) in Kerala megalithic archaeology?",
    "titleSec": "തൂണുകളില്ലാതെ നേരിട്ട് നിലത്തുറപ്പിച്ചു വെച്ചിരിക്കുന്ന കൂൺ ആകൃതിയിലുള്ള മഹാശിലാ സ്മാരകമായ 'കുടക്കല്ല്' (Hood Stone) എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Kudakkal (Hood Stone)",
    "backEn": "<strong>Answer:</strong> A dressed dome-shaped laterite stone placed flush over a burial pit without supporting pillars<br>Kudakkal (Hood stone) is a solid, plano-convex, mushroom-shaped dressed block of laterite placed directly on the ground over a burial pit/urn without any supporting clinostat pillars.",
    "backSec": "<strong>ഉത്തരം:</strong> താങ്ങുതൂണുകളൊന്നുമില്ലാതെ, ശവസംസ്കാര കുഴികൾക്ക് മുകളിലായി നേരിട്ട് മണ്ണിൽ ഉറപ്പിച്ചു നിർത്തുന്ന കൂൺ ആകൃതിയിലുള്ള ചെങ്കല്ലിനെയാണ് 'കുടക്കല്ല്' എന്ന് വിളിക്കുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What are single upright commemorative monoliths erected over megalithic burial sites called?",
    "titleSec": "മരിച്ചവരുടെ സ്മരണയ്ക്കായി ലംബമായി നാട്ടിനിർത്തുന്ന ഒറ്റക്കൽ സ്മാരകങ്ങൾ (Standing Stones) അറിയപ്പെടുന്നത് എങ്ങനെയാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Menhirs (Standing Stones)",
    "backEn": "<strong>Answer:</strong> Menhirs (Pulachikallu / Nadukal)<br>Menhirs (known locally as Pulachikallu or Nadukal) are tall, monolithic standing stones erected vertically in memory of deceased ancestors or fallen warrior chieftains.",
    "backSec": "<strong>ഉത്തരം:</strong> ഭൂമിയിൽ ലംബമായി കുത്തിനിർത്തുന്ന വലിയ ഒറ്റക്കല്ലുകളാണ് മെൻഹിറുകൾ. കേരളത്തിൽ ഇവ 'പുലച്ചിക്കല്ല്' എന്നും 'നടുകല്ല്' എന്നും അറിയപ്പെടുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which subterranean megalithic monument type is completely unique to the laterite rock formations of the Malabar coast in Kerala?",
    "titleSec": "കേരളത്തിലെ മലബാർ മേഖലയിൽ ചെങ്കൽപ്പാറകൾ തുരന്നുണ്ടാക്കിയ അപൂർവ്വ മഹാശിലാ സ്മാരകങ്ങൾ ഏവ?",
    "lang": "ml",
    "hint": "History of Keralam · Rock-cut Burial Caves of Kerala",
    "backEn": "<strong>Answer:</strong> Rock-cut burial caves (e.g., Porkalam, Chovvannur, Eyyal)<br>Rock-cut caves (carved into hard subterranean laterite with central pillars, benches, recessed niches, and circular ceiling openings) are virtually exclusive to Kerala, famously excavated at Chovvannur, Kandanissery, Porkalam, and Eyyal in Thrissur.",
    "backSec": "<strong>ഉത്തരം:</strong> തൃശ്ശൂരിലെ ചൊവ്വന്നൂർ, കണ്ടണിശ്ശേരി, പോർക്കുളം, ഇയ്യൽ എന്നിവിടങ്ങളിൽ കാണപ്പെടുന്ന, ചെങ്കല്ല് തുരന്ന് നിർമ്മിച്ച ശവക്കല്ലറ ഗുഹകൾ കേരളത്തിന്റെ തനത് സവിശേഷതയാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the traditional Malayalam term for large terracotta burial urns discovered across megalithic sites in Kerala?",
    "titleSec": "കേരളത്തിൽ മഹാശിലാ സംസ്കാര കാലത്ത് അസ്ഥികളും ഉപകരണങ്ങളും അടക്കം ചെയ്യാൻ ഉപയോഗിച്ചിരുന്ന വലിയ മൺഭരണികൾ അറിയപ്പെടുന്ന പേരെന്ത്?",
    "lang": "ml",
    "hint": "History of Keralam · Nannangadi (Urn Burials)",
    "backEn": "<strong>Answer:</strong> Nannangadi (Muthumakkachadi)<br>Large pyriform terracotta burial urns containing post-excarnation skeletal remains, iron tools, and pottery are called 'Nannangadi' or 'Muthumakkachadi' (jars of the ancient ancestors).",
    "backSec": "<strong>ഉത്തരം:</strong> മൃതശരീരങ്ങളുടെ അവശിഷ്ടങ്ങൾ അടക്കം ചെയ്തിരുന്ന വലിയ മൺപാത്രങ്ങളാണ് 'നന്നങ്ങാടികൾ' അഥവാ 'മുതുമക്കച്ചാടികൾ' എന്നറിയപ്പെടുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Who conducted the very first systematic excavation of megalithic monuments in India at Chettapparamba near Kozhikode in 1819?",
    "titleSec": "1819-ൽ കോഴിക്കോടിനടുത്തുള്ള ചെട്ടപ്പറമ്പിൽ ഇന്ത്യയിലെ ആദ്യത്തെ ശാസ്ത്രീയ മഹാശിലാ ഖനനം നടത്തിയത് ആര്?",
    "lang": "ml",
    "hint": "History of Keralam · J. Babington's 1819 Excavation",
    "backEn": "<strong>Answer:</strong> Dr. J. Babington<br>Dr. J. Babington carried out the first recorded archaeological excavation of Megaliths in India at Chettapparamba near Kozhikode in 1819, describing the umbrella stones and rock-cut chambers in the 'Transactions of the Literary Society of Bombay'.",
    "backSec": "<strong>ഉത്തരം:</strong> 1819-ൽ ചെട്ടപ്പറമ്പിൽ ഖനനം നടത്തി കുടക്കല്ലുകളെയും നന്നങ്ങാടികളെയും കുറിച്ച് ബോംബെ ലിറ്റററി സൊസൈറ്റിയിൽ പ്രബന്ധം അവതരിപ്പിച്ച ഡോ. ജെ. ബാബിംഗ്ടണാണ് ഇന്ത്യയിലെ മെഗാലിത്തിക് ഗവേഷണങ്ങൾക്ക് തുടക്കമിട്ടത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which ceramic ware produced through inverted firing is the ubiquitous hallmark of South Indian megalithic burials?",
    "titleSec": "ദക്ഷിണേന്ത്യയിലെ മഹാശിലാ സംസ്കാരത്തിന്റെ മുഖമുദ്രയായി എല്ലാ ശവക്കല്ലറകളിൽ നിന്നും ലഭിക്കുന്ന പ്രധാന മൺപാത്രമേതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Black and Red Ware (BRW)",
    "backEn": "<strong>Answer:</strong> Black and Red Ware (BRW)<br>Black and Red Ware (BRW), manufactured by an inverted firing technique that turns the interior and rim black while the exterior turns red, is the premier diagnostic pottery found in almost every megalithic burial.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രത്യേക രീതിയിൽ ചുട്ടെടുത്ത് ഉള്ളിൽ കറുപ്പും പുറത്ത് ചുവപ്പും നിറമുള്ള ബ്ലാക്ക് ആൻഡ് റെഡ് വെയർ (BRW) മൺപാത്രങ്ങളാണ് മെഗാലിത്തിക് സംസ്കാരത്തിന്റെ ഏറ്റവും പ്രധാനപ്പെട്ട തെളിവ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What distinctive surface decoration characterizes 'Russet Coated Painted Ware' (RCPW) found in Megalithic-Early Historic contexts?",
    "titleSec": "മഹാശിലാ-ആദ്യകാല ചരിത്ര കാലഘട്ടങ്ങളിൽ കാണപ്പെടുന്ന 'റസ്സറ്റ് കോട്ടഡ് പെയിന്റഡ് വെയർ' (RCPW) മൺപാത്രങ്ങളുടെ പ്രത്യേകത എന്താണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Russet Coated Painted Ware (RCPW)",
    "backEn": "<strong>Answer:</strong> White kaolin paste rectilinear and curvilinear geometric designs beneath a russet-colored slip<br>Russet Coated Painted Ware (often called Andhra Ware) features white kaolin clay geometric patterns (wavy lines, dots, zig-zags) coated under a translucent russet-colored ochre wash.",
    "backSec": "<strong>ഉത്തരം:</strong> ചുവപ്പ് കലർന്ന പ്രതലത്തിൽ വെളുത്ത കളിമൺ ചായം കൊണ്ട് വരച്ച തരംഗരൂപത്തിലുള്ള വരകളും ജ്യാമിതീയ ഡിസൈനുകളുമാണ് റസ്സറ്റ് കോട്ടഡ് മൺപാത്രങ്ങളുടെ പ്രത്യേകത."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which metal objects form the most extensive category of utilitarian grave goods recovered from Kerala megaliths?",
    "titleSec": "കേരളത്തിലെ മഹാശിലാ കല്ലറകളിൽ നിന്ന് ഏറ്റവും കൂടുതൽ കണ്ടെത്തിയിട്ടുള്ള ലോഹ ഉപകരണങ്ങൾ ഏവ?",
    "lang": "ml",
    "hint": "History of Keralam · Iron Objects in Megaliths",
    "backEn": "<strong>Answer:</strong> Iron implements (swords, daggers, axes, sickles, tripods, and billhooks)<br>Megalithic tombs yield extensive iron artifacts: weapons (swords, daggers, spears, arrowheads, tridents) and agrarian tools (axes, sickles, spades, tripods), attesting to mature iron metallurgy.",
    "backSec": "<strong>ഉത്തരം:</strong> വാളുകൾ, കഠാരകൾ, കുന്തങ്ങൾ, കോടാലികൾ, അരിവാളുകൾ, മുക്കണ്ണികൾ തുടങ്ങിയ ഇരുമ്പ് ആയുധങ്ങളും കാർഷിക ഉപകരണങ്ങളുമാണ് മെഗാലിത്തിക് കല്ലറകളിൽ നിന്ന് ധാരാളമായി ലഭിച്ചത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What type of luxury semi-precious stone beads, chemically etched with permanent white alkaline patterns, were prized in megalithic burials?",
    "titleSec": "മെഗാലിത്തിക് ശവക്കല്ലറകളിൽ നിന്ന് ലഭിച്ച, വെളുത്ത വരകൾ പതിപ്പിച്ച അമൂല്യ രത്നക്കല്ല് മണികൾ ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Etched Carnelian Beads",
    "backEn": "<strong>Answer:</strong> Etched carnelian beads<br>Etched carnelian beads (made of orange-red quartz etched with geometric patterns using plant alkaline juices like soda ash) were prestigious trade items placed with the deceased.",
    "backSec": "<strong>ഉത്തരം:</strong> ചുവന്ന നിറമുള്ള അഗേറ്റ്/കാർണിലിയൻ കല്ലുകളിൽ പ്രത്യേക ആൽക്കലൈൻ ലായനി ഉപയോഗിച്ച് വെളുത്ത ജ്യാമിതീയ വരകൾ കൊത്തിയുണ്ടാക്കിയ മണികൾ വ്യാപാര ബന്ധങ്ങളുടെ തെളിവാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What funerary practice is reflected by the presence of only selected, broken bone fragments in megalithic urns rather than complete skeletons?",
    "titleSec": "പൂർണ്ണമായ അസ്ഥികൂടങ്ങൾക്ക് പകരം ചില അസ്ഥി കഷണങ്ങൾ മാത്രം നന്നങ്ങാടികളിൽ കാണപ്പെടുന്നത് ഏത് സംസ്കാര രീതിയെ കാണിക്കുന്നു?",
    "lang": "ml",
    "hint": "History of Keralam · Secondary Burial Practice",
    "backEn": "<strong>Answer:</strong> Secondary burial (post-excarnation burial of selected bones)<br>Megalithic communities practiced 'secondary burial': bodies were first exposed to elements (excarnation) or temporarily interred; later, selected dry bones were collected and ritually deposited in the urn.",
    "backSec": "<strong>ഉത്തരം:</strong> മൃതദേഹം ആദ്യം മറ്റെവിടെയെങ്കിലും ഉപേക്ഷിച്ച് മാസങ്ങൾക്ക് ശേഷം അവശേഷിക്കുന്ന ചില പ്രധാന അസ്ഥികൾ മാത്രം ശേഖരിച്ച് നന്നങ്ങാടിയിലാക്കി കുഴിച്ചിടുന്ന ദ്വിതീയ സംസ്കാര രീതിയാണ് (Secondary burial) നിലനിന്നിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which notable megalithic site in northern Kerala was excavated by the Archaeological Survey of India (ASI) in 2001?",
    "titleSec": "2001-ൽ ആർക്കിയോളജിക്കൽ സർവേ ഓഫ് ഇന്ത്യ (ASI) വടക്കൻ കേരളത്തിൽ ഖനനം നടത്തിയ പ്രശസ്തമായ മെഗാലിത്തിക് കേന്ദ്രം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Ummichipoyil Megalithic Excavation (2001)",
    "backEn": "<strong>Answer:</strong> Ummichipoyil<br>The Ummichipoyil excavation in Kasaragod district, conducted in 2001 by the ASI, revealed rock-cut caves, iron weapons (swords, daggers, tridents), pottery, and carnelian beads in northern Kerala.",
    "backSec": "<strong>ഉത്തരം:</strong> കാസർഗോഡ് ജില്ലയിലെ ഉമ്മിച്ചിപ്പൊയിലിൽ 2001-ൽ ASI നടത്തിയ ഖനനത്തിൽ ചെങ്കൽ ഗുഹകളും വാളുകൾ, കുന്തങ്ങൾ, മൺപാത്രങ്ങൾ, മണികൾ എന്നിവയുമടങ്ങിയ സമ്പന്നമായ ഇരുമ്പുയുഗ തെളിവുകൾ ലഭിച്ചു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "In megalithic excavations at Mangadu near Kollam, what significant artifact was recovered that indicated early iron metallurgy?",
    "titleSec": "കൊല്ലത്തിന് സമീപമുള്ള മാങ്ങാട് (Mangadu) നടത്തിയ ഖനനത്തിൽ നിന്ന് ലഭിച്ച പ്രധാന കണ്ടെത്തൽ എന്തായിരുന്നു?",
    "lang": "ml",
    "hint": "History of Keralam · Mangadu Megalithic Findings",
    "backEn": "<strong>Answer:</strong> Iron daggers, iron slag, and a crucible inside urn burials<br>Excavations at Mangadu near Kollam revealed urn burials with iron daggers, terracotta figurines, and iron slag, providing radiocarbon dates around 900–1000 BCE.",
    "backSec": "<strong>ഉത്തരം:</strong> മാങ്ങാട് നടത്തിയ ഖനനത്തിൽ നന്നങ്ങാടികൾക്കൊപ്പം ഇരുമ്പ് കഠാരകളും മൺപാത്രങ്ങളും ലഭിച്ചു. ഇത് ബി.സി 1000-നടുത്തുള്ള കാലപ്പഴക്കം കാണിക്കുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What socio-religious belief is unequivocally demonstrated by the inclusion of food vessels, weapons, tools, and ornaments inside megalithic graves?",
    "titleSec": "കല്ലറകളിൽ മരിച്ചവർക്കൊപ്പം ഭക്ഷണപാത്രങ്ങളും ആയുധങ്ങളും ആഭരണങ്ങളും വെച്ചടക്കം ചെയ്തിരുന്നത് ഏത് വിശ്വാസത്തെയാണ് തെളിയിക്കുന്നത്?",
    "lang": "ml",
    "hint": "History of Keralam · Belief in Afterlife and Ancestor Cult",
    "backEn": "<strong>Answer:</strong> Belief in an afterlife (life after death) and ancestor veneration<br>Depositing personal weapons, pottery for food and drink, ornaments, and tools alongside the deceased proves that megalithic communities possessed a profound belief in life after death and actively propitiated ancestral spirits.",
    "backSec": "<strong>ഉത്തരം:</strong> മരണശേഷവും ആത്മാവ് നിലനിൽക്കുന്നുവെന്നും മരിച്ചവർക്ക് പരലോകത്ത് ഈ വസ്തുക്കൾ ആവശ്യമായി വരുമെന്നുമുള്ള ശക്തമായ മരണാനന്തര ജീവിത (Afterlife) വിശ്വാസമാണ് ഇതിലൂടെ വ്യക്തമാകുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Sangam literature is generally dated between?",
    "titleSec": "സംഘകാല സാഹിത്യത്തിന്റെ കാലഘട്ടമായി പൊതുവെ കണക്കാക്കപ്പെടുന്നത് എപ്പോഴാണ്? (LMS Q1)",
    "lang": "ml",
    "hint": "History of Keralam · Chronology of Sangam Literature",
    "backEn": "<strong>Answer:</strong> 300 BCE – 300 CE<br>According to the official University LMS chapter-end assessment and mainstream historiography, Sangam literature is conventionally dated between 300 BCE and 300 CE.",
    "backSec": "<strong>ഉത്തരം:</strong> ചരിത്രകാരന്മാരും പാഠ്യപദ്ധതിയും പൊതുവായി അംഗീകരിച്ചിട്ടുള്ള സംഘകാല സാഹിത്യത്തിന്റെ കാലഘട്ടം ബി.സി 300 മുതൽ എ.ഡി 300 വരെയാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is an example of Akam literature?",
    "titleSec": "അകം (Akam) സാഹിത്യത്തിന് ഉദാഹരണം ഏതാണ്? (LMS Q2)",
    "lang": "ml",
    "hint": "History of Keralam · Akam vs. Puram: Akananuru",
    "backEn": "<strong>Answer:</strong> Akananuru<br>According to the LMS assessment, Sangam poetry is classified into Akam (internal, personal, love poetics) and Puram (external, war, statecraft). Akananuru ('The 400 Love Poems') is the classic example of Akam.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രണയം, കുടുംബജീവിതം, വികാരങ്ങൾ എന്നിവ പ്രതിപാദിക്കുന്ന അകം കവിതകളുടെ സമാഹാരമാണ് 'അകനാനൂറ്'. പുറനാനൂറും പതിറ്റുപത്തും പുറം വിഭാഗത്തിലാണ് വരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "The presiding deity of the Kurinji landscape in the Tinai concept is?",
    "titleSec": "തിണ (Tinai) സങ്കൽപ്പത്തിൽ കുറിഞ്ചി (Kurinji) ഭൂപ്രദേശത്തിന്റെ അധിദേവത ആരാണ്? (LMS Q3)",
    "lang": "ml",
    "hint": "History of Keralam · Kurinji Tinai and Murugan",
    "backEn": "<strong>Answer:</strong> Murugan<br>In the five-fold ecological Tinai concept, the Kurinji landscape (mountainous and forest tract) has as its presiding deity Murugan (Seyon, the red god of the hills and warfare).",
    "backSec": "<strong>ഉത്തരം:</strong> മലകളും കാടുകളും നിറഞ്ഞ കുറിഞ്ചി തിണയുടെ ദേവനാണ് മുരുകൻ. വേട്ടയാടലും തേൻ ശേഖരണവുമായിരുന്നു ഇവിടുത്തെ ഉപജീവനം."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which landscape in the Tinai concept is associated with agriculture and fertile river valleys?",
    "titleSec": "കൃഷിയുമായും ഫലഭൂയിഷ്ഠമായ നദീതടങ്ങളുമായും ബന്ധപ്പെട്ടിരിക്കുന്ന തിണ ഏതാണ്? (LMS Q4)",
    "lang": "ml",
    "hint": "History of Keralam · Marutam Tinai (Agrarian Plain)",
    "backEn": "<strong>Answer:</strong> Marutam<br>Marutam denotes the fertile alluvial river plains dedicated to wet-paddy agriculture, associated with the deity Ventan (Indra) and the poetics of lovers' quarrels (udal).",
    "backSec": "<strong>ഉത്തരം:</strong> വയലുകളും ഫലഭൂയിഷ്ഠമായ നദീതടങ്ങളും അടങ്ങിയ കാർഷിക മേഖലയെയാണ് തിണ സങ്കൽപ്പത്തിൽ 'മരുതം' എന്ന് വിളിക്കുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "The author of the celebrated ethical treatise Thirukkural is?",
    "titleSec": "പ്രസിദ്ധമായ ധർമ്മനീതി ഗ്രന്ഥമായ തിരുക്കുറലിന്റെ (Thirukkural) രചയിതാവ് ആര്? (LMS Q5)",
    "lang": "ml",
    "hint": "History of Keralam · Thirukkural by Thiruvalluvar",
    "backEn": "<strong>Answer:</strong> Thiruvalluvar<br>The renowned didactic ethical masterpiece Thirukkural (comprising 1,330 couplets divided into Aram, Porul, and Inbam) was authored by the venerated Tamil philosopher Thiruvalluvar.",
    "backSec": "<strong>ഉത്തരം:</strong> 1330 കുറളുകളിലൂടെ ധർമ്മം, അർത്ഥം, കാമം എന്നിവയെക്കുറിച്ച് പ്രതിപാദിക്കുന്ന വിശ്വപ്രസിദ്ധ ഗ്രന്ഥമായ തിരുക്കുറൽ രചിച്ചത് തിരുവള്ളുവരാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which classical Greco-Roman text provides detailed navigational information about the ports of Muziris and Nelcynda?",
    "titleSec": "മുസിരിസ്, നെൽക്കിണ്ട എന്നീ തുറമുഖങ്ങളെക്കുറിച്ച് വിശദമായ വിവരങ്ങൾ നൽകുന്ന ഗ്രീക്കോ-റോമൻ ഗ്രന്ഥം ഏതാണ്? (LMS Q6)",
    "lang": "ml",
    "hint": "History of Keralam · Periplus of the Erythraean Sea",
    "backEn": "<strong>Answer:</strong> Periplus of the Erythraean Sea<br>The 'Periplus of the Erythraean Sea', written by an anonymous Greek navigator in the mid-1st century CE, provides an eyewitness sailing manual describing the route, anchorage, and trade goods at Muziris and Nelcynda.",
    "backSec": "<strong>ഉത്തരം:</strong> എ.ഡി ഒന്നാം നൂറ്റാണ്ടിൽ രചിക്കപ്പെട്ട 'പെരിപ്ലസ് ഓഫ് ദി എറിത്രിയൻ സീ' എന്ന കപ്പലോട്ട വഴികാട്ടി പുസ്തകത്തിലാണ് മുസിരിസ്സിനെക്കുറിച്ചും നെൽക്കിണ്ടയെക്കുറിച്ചും കൃത്യമായ വിവരങ്ങൾ നൽകിയിട്ടുള്ളത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Pattanam in Ernakulam district is widely identified by archaeologists with the ancient port of?",
    "titleSec": "എറണാകുളം ജില്ലയിലെ പട്ടണം (Pattanam) പുരാവസ്തു ഗവേഷകർ തിരിച്ചറിഞ്ഞിരിക്കുന്നത് ഏത് പുരാതന തുറമുഖമായാണ്? (LMS Q7)",
    "lang": "ml",
    "hint": "History of Keralam · Pattanam Excavation & Muziris",
    "backEn": "<strong>Answer:</strong> Muziris<br>Multi-season archaeological excavations at Pattanam near Kodungallur (conducted by KCHR) revealed extensive Mediterranean amphorae, terra sigillata, Roman glass, and a wharf, confirming it as the premier site of ancient Muziris.",
    "backSec": "<strong>ഉത്തരം:</strong> പട്ടണത്തുനിന്ന് ലഭിച്ച റോമൻ ആംഫോറ പാത്രങ്ങൾ, നാണയങ്ങൾ, ബോട്ട് ജെട്ടി എന്നിവയുടെ അടിസ്ഥാനത്തിൽ പുരാതന തുറമുഖമായ മുസിരിസ്സാണ് പട്ടണം എന്ന് ചരിത്രകാരന്മാർ സ്ഥിരീകരിക്കുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What does the term 'muvendar' in sangam tamil historiography refer to?",
    "titleSec": "സംഘകാല ചരിത്രത്തിൽ 'മൂവേന്തർ' (Muvendar) എന്നതുകൊണ്ട് അർത്ഥമാക്കുന്നത് എന്താണ്? (LMS Q8)",
    "lang": "ml",
    "hint": "History of Keralam · Muvendar: Three Crowned Kings",
    "backEn": "<strong>Answer:</strong> Three crowned kings (Chera, Chola, and Pandya)<br>The term 'Muvendar' (Three Great Vendar) denotes the three sovereign crowned monarchs of ancient Tamilakam: the Cheras, the Cholas, and the Pandyas.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രാചീന തമിഴകത്തെ മൂന്ന് പ്രമുഖ രാജവംശങ്ങളായ ചേര, ചോള, പാണ്ഡ്യ രാജാക്കന്മാരെയാണ് 'മൂവേന്തർ' എന്ന് വിളിക്കുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Who was a famous Kurunila Mannar (Velir chieftain) known for ruling the hill tract of Parambu?",
    "titleSec": "പറമ്പ് മലയുടെ അധിപനായിരുന്ന പ്രസിദ്ധനായ കുറുനില മന്നൻ (Velir chieftain) ആരാണ്? (LMS Q9)",
    "lang": "ml",
    "hint": "History of Keralam · Vel Pari of Parambu Hill",
    "backEn": "<strong>Answer:</strong> Pari<br>Vel Pari was the most celebrated of the Seven Great Patrons (Kadaiyezhu Vallalgal), ruler of Parambu hill, renowned in Sangam poetry for his supreme generosity (offering his royal chariot to support a mullai creeper).",
    "backSec": "<strong>ഉത്തരം:</strong> തന്റെ കൊട്ടാരരഥം മുല്ലവള്ളിക്ക് പടരാൻ വിട്ടുകൊടുത്ത മഹാദാനിയായ വേൾ പാരിയാണ് പറമ്പ് മല കേന്ദ്രീകരിച്ച് ഭരിച്ചിരുന്ന പ്രമുഖ കുറുനില മന്നൻ."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What were hero stones erected in memory of fallen warriors in early tamil society known as?",
    "titleSec": "യുദ്ധത്തിലും കന്നുകാലി കവർച്ച തടയുന്നതിലും വീരമൃത്യു വരിച്ച പടയാളികളുടെ സ്മരണയ്ക്കായി നാട്ടിയിരുന്ന സ്മാരക ശിലകൾ ഏവ? (LMS Q10)",
    "lang": "ml",
    "hint": "History of Keralam · Nadukal (Hero Stones)",
    "backEn": "<strong>Answer:</strong> Nadukal<br>Nadukal (inscribed hero stones) were planted in honor of brave warriors who fell defending their village or recovering cattle from raiders, ritually worshipped by communities as described in the Purananuru.",
    "backSec": "<strong>ഉത്തരം:</strong> വീരമൃത്യു വരിച്ച യോദ്ധാക്കളുടെ ത്യാഗത്തെ ആദരിക്കാൻ ലിഖിതങ്ങളോടുകൂടി നാട്ടിയിരുന്ന വീരക്കല്ലുകളാണ് 'നടുകല്ല്' (Nadukal) എന്നറിയപ്പെടുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which Sangam anthology of the Ettuttokai collection is exclusively dedicated to praising the kings of the Chera dynasty?",
    "titleSec": "സംഘകാല എട്ടുത്തൊകൈ കൃതികളിൽ ചേര രാജാക്കന്മാരുടെ അപദാനങ്ങൾ മാത്രം വാഴ്ത്തുന്ന കൃതി ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Pathitrupathu and the Cheras",
    "backEn": "<strong>Answer:</strong> Pathitrupathu<br>Pathitrupathu ('The Ten Tens') is composed of ten sets of ten poems, each decade celebrating the lineage, military conquests, administrative virtues, and royal charity of a specific Chera king of ancient Kerala.",
    "backSec": "<strong>ഉത്തരം:</strong> പത്ത് ചേര രാജാക്കന്മാരെക്കുറിച്ച് പത്ത് കവികൾ രചിച്ച പത്ത് കവിതകൾ വീതമുള്ള 'പതിറ്റുപത്ത്' പുരാതന കേരളത്തിന്റെ ചേര ചരിത്രത്തിലേക്ക് വെളിച്ചം വീശുന്ന അമൂല്യ കൃതിയാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Who authored the celebrated Tamil epic Silappadikaram, and what was his relationship to the Chera king Senguttuvan?",
    "titleSec": "ചിലപ്പതികാരം (Silappadikaram) എന്ന ഇതിഹാസ കാവ്യം രചിച്ച ഇളങ്കോ അടികൾ ചേരരാജാവായ ചെങ്കുട്ടുവന്റെ ആരായിരുന്നു?",
    "lang": "ml",
    "hint": "History of Keralam · Silappadikaram and Ilango Adigal",
    "backEn": "<strong>Answer:</strong> Ilango Adigal, who was the younger brother of Cheran Senguttuvan<br>Silappadikaram was composed by Ilango Adigal, an ascetic Jain prince who was the younger brother of the renowned Chera monarch Cheran Senguttuvan.",
    "backSec": "<strong>ഉത്തരം:</strong> ചേരരാജാവായ ചേരൻ ചെങ്കുട്ടുവന്റെ അനുജനായിരുന്ന ഇളങ്കോ അടികളാണ് കണ്ണകിയുടെ കഥ പറയുന്ന പ്രശസ്ത ഇതിഹാസമായ ചിലപ്പതികാരം രചിച്ചത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the royal heraldic emblem of the ancient Chera dynasty?",
    "titleSec": "പ്രാചീന ചേര രാജവംശത്തിന്റെ രാജമുദ്ര (Emblem) എന്തായിരുന്നു?",
    "lang": "ml",
    "hint": "History of Keralam · Chera Emblem: Bow and Arrow",
    "backEn": "<strong>Answer:</strong> Bow and Arrow<br>The royal insignia of the Cheras was the Bow and Arrow (Villu). In contrast, the Cholas used the Tiger (Puli) and the Pandyas used the Twin Fish (Kayal).",
    "backSec": "<strong>ഉത്തരം:</strong> വില്ലും അമ്പുമാണ് ചേരന്മാരുടെ ഔദ്യോഗിക ചിഹ്നം. ചോളന്മാരുടേത് പുലിയും പാണ്ഡ്യന്മാരുടേത് ഇരട്ടമത്സ്യവുമായിരുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which 1st-century Roman naturalist famously lamented that Rome was drained of over 50 million sesterces annually to pay for Indian luxury goods like spices and pepper?",
    "titleSec": "കുരുമുളക് തുടങ്ങിയ സുഗന്ധദ്രവ്യങ്ങൾക്കായി വർഷം തോറും 5 കോടിയിലധികം റോമൻ നാണയങ്ങൾ ഇന്ത്യയിലേക്ക് ഒഴുകുന്നുവെന്ന് വിലപിച്ച റോമൻ ചരിത്രകാരൻ ആര്?",
    "lang": "ml",
    "hint": "History of Keralam · Pliny the Elder and the Roman Currency Drain",
    "backEn": "<strong>Answer:</strong> Pliny the Elder<br>In his encyclopedic work 'Naturalis Historia' (77 CE), Pliny the Elder lamented the enormous economic drain of Roman gold and silver to India to satisfy Roman demand for Malabar pepper, fine muslin, and gems.",
    "backSec": "<strong>ഉത്തരം:</strong> തന്റെ 'നാച്ചുറൽ ഹിസ്റ്ററി' (Naturalis Historia) എന്ന ഗ്രന്ഥത്തിൽ പ്ലിനിയാണ് റോമൻ സാമ്രാജ്യത്തിലെ സ്വർണ്ണവും വെള്ളിയും കുരുമുളകിനായി മലബാർ തീരത്തേക്ക് ഒഴുകുന്നതിനെക്കുറിച്ച് പരിതപിച്ചത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What 4th-century Roman road map depicts South India and explicitly marks a temple dedicated to Emperor Augustus at Muziris ('Templum Augusti')?",
    "titleSec": "മുസിരിസ്സിൽ അഗസ്റ്റസ് ചക്രവർത്തിക്കായി നിർമ്മിച്ച റോമൻ ക്ഷേത്രം ('Templum Augusti') രേഖപ്പെടുത്തിയിട്ടുള്ള പുരാതന റോമൻ മാപ്പ് ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Tabula Peutingeriana and the Temple of Augustus",
    "backEn": "<strong>Answer:</strong> Tabula Peutingeriana (Peutinger Table)<br>The 'Tabula Peutingeriana' is an illustrated road map of the Roman cursus publicus which depicts the Malabar coast, marking 'Muziris' alongside an icon indicating the 'Templum Augusti' (Temple of Augustus), proving a permanent Roman mercantile settlement.",
    "backSec": "<strong>ഉത്തരം:</strong> പുരാതന റോമൻ റോഡ് മാപ്പായ പ്യൂട്ടിംഗർ ടേബിളിൽ (Tabula Peutingeriana) മുസിരിസ്സ് തുറമുഖത്ത് അഗസ്റ്റസ് ചക്രവർത്തിയുടെ ഒരു റോമൻ ക്ഷേത്രം നിലനിന്നിരുന്നതായി അടയാളപ്പെടുത്തിയിട്ടുണ്ട്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What is the primary historical value of the 2nd-century CE Greek document known as the 'Vienna Papyrus' (Muziris Papyrus)?",
    "titleSec": "രണ്ടാം നൂറ്റാണ്ടിലെ ഗ്രീക്ക് രേഖയായ 'വിയന്ന പാപ്പിറസ്' (Muziris Papyrus) ചരിത്രപരമായി വളരെ പ്രധാനപ്പെട്ടതാകാൻ കാരണമെന്ത്?",
    "lang": "ml",
    "hint": "History of Keralam · The Vienna Papyrus (Muziris Papyrus)",
    "backEn": "<strong>Answer:</strong> It contains a maritime trade and loan agreement for a massive cargo of Malabar black pepper and ivory on the ship Hermapollon<br>The Vienna Papyrus (P. Vindob. G 40822) contains a legal commercial loan contract between an Alexandria financier and a merchant concerning cargo on the ship 'Hermapollon' loaded with Muziris pepper, Gangetic nard, and ivory evaluated at several million sesterces.",
    "backSec": "<strong>ഉത്തരം:</strong> മുസിരിസ്സിൽ നിന്ന് 'ഹെർമാപോളൻ' എന്ന കപ്പലിൽ റോമിലേക്ക് കയറ്റി അയച്ച കുരുമുളക്, ആനക്കൊമ്പ് എന്നിവയുടെ ലക്ഷക്കണക്കിന് നാണയങ്ങൾ മൂല്യമുള്ള വൻ വാണിജ്യ വായ്പാ കരാറാണ് വിയന്ന പാപ്പിറസിൽ ഉള്ളത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which indigenous sea-traders and salt manufacturers are frequently mentioned in Sangam literature as traveling in caravans with bullock carts?",
    "titleSec": "സംഘകാലത്ത് തീരദേശത്ത് ഉപ്പ് ഉൽപ്പാദിപ്പിക്കുകയും കാളവണ്ടികളിൽ ഉൾനാടുകളിലേക്ക് കൊണ്ടുപോയി ബാർട്ടർ വ്യാപാരം നടത്തുകയും ചെയ്തിരുന്ന വ്യാപാരികൾ അറിയപ്പെട്ടിരുന്നത് എങ്ങനെയാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Umanar Salt Traders",
    "backEn": "<strong>Answer:</strong> Umanar<br>The 'Umanar' were the coastal salt manufacturers and overland merchants described in Sangam poetry traveling in long bullock-cart caravans (Umana Chattu) into the interior hills to barter salt for hill products and grains.",
    "backSec": "<strong>ഉത്തരം:</strong> കടൽത്തീരങ്ങളിൽ ഉപ്പുണ്ടാക്കി കാളവണ്ടിക്കൂട്ടങ്ങളിൽ ഉൾനാടൻ മലയോരങ്ങളിലെത്തിച്ച് മലഞ്ചരക്കുകൾക്ക് പകരമായി കൈമാറിയിരുന്ന സംഘകാല വ്യാപാരികളാണ് 'ഉമണർ' എന്നറിയപ്പെട്ടിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which title was commonly adopted by the rulers of the Chera kingdom of Mahodayapuram?",
    "titleSec": "മഹോദയപുരത്തെ ചേര രാജാക്കന്മാർ സ്വീകരിച്ചിരുന്ന പ്രധാന സ്ഥാനപ്പേര് എന്തായിരുന്നു? (LMS Q1)",
    "lang": "ml",
    "hint": "History of Keralam · The Royal Title 'Perumal'",
    "backEn": "<strong>Answer:</strong> Perumal<br>According to the LMS assessment, the paramount rulers of the Second Chera Kingdom of Mahodayapuram (c. 800–1122 CE) held the distinctive dynastic title of 'Perumal' (or Cheraman Perumal).",
    "backSec": "<strong>ഉത്തരം:</strong> മഹോദയപുരം (കൊടുങ്ങല്ലൂർ) കേന്ദ്രമാക്കി കേരളം ഭരിച്ച രണ്ടാം ചേര സാമ്രാജ്യത്തിലെ ഭരണാധികാരികൾ 'പെരുമാൾ' അഥവാ 'ചേരമാൻ പെരുമാൾ' എന്ന സ്ഥാനപ്പേരിലാണ് അറിയപ്പെട്ടിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What was the advisory council that assisted the chera perumal in religious and temple affairs known as?",
    "titleSec": "ക്ഷേത്ര-മത കാര്യങ്ങളിലും ഭരണത്തിലും ചേരമാൻ പെരുമാളിനെ ഉപദേശിച്ചിരുന്ന പരമോന്നത സമിതി ഏതാണ്? (LMS Q2)",
    "lang": "ml",
    "hint": "History of Keralam · Nalu Thali (Four Royal Temple Assemblies)",
    "backEn": "<strong>Answer:</strong> Nalu Thali<br>According to the LMS assessment, the Nalu Thali comprised representatives from the four major Brahmin temple assemblies of Mahodayapuram (Nityavichareswaram, Parameswaram, Melthali, and Nediyathali) who acted as the paramount council advising the Perumal.",
    "backSec": "<strong>ഉത്തരം:</strong> മഹോദയപുരത്തെ നാല് പ്രധാന ബ്രാഹ്മണ ക്ഷേത്ര സഭകളിലെ (മേൽത്തളി, നെടിയത്തളി, പരമേശ്വരം, നിത്യവിചാരേശ്വരം) പ്രതിനിധികൾ അടങ്ങിയ ഉപദേശക സമിതിയാണ് 'നാലു തളി'."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What were the members of the nalu thali known as?",
    "titleSec": "നാലു തളിയിലെ അംഗങ്ങൾ ഔദ്യോഗികമായി അറിയപ്പെട്ടിരുന്നത് എങ്ങനെയാണ്? (LMS Q3)",
    "lang": "ml",
    "hint": "History of Keralam · Thali Adhikarikal",
    "backEn": "<strong>Answer:</strong> Thali Adhikarikal<br>According to the LMS assessment, the presiding heads/representatives of each of the four council temples forming the Nalu Thali were officially styled 'Thali Adhikarikal' (or Thaliyatiris).",
    "backSec": "<strong>ഉത്തരം:</strong> നാലു തളികളിലെ ഓരോ ക്ഷേത്ര ഭരണ ചുമതലയും വഹിച്ചിരുന്ന പ്രധാന പ്രതിനിധികളെ 'തളി അധികാരികൾ' (തളിയാതിരിമാർ) എന്നാണ് വിളിച്ചിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which official acted as the principal representative of the king and presided over village assemblies?",
    "titleSec": "രാജാവിന്റെ മുഖ്യ പ്രതിനിധിയായി പ്രവർത്തിക്കുകയും സഭാ സമ്മേളനങ്ങളിൽ അധ്യക്ഷത വഹിക്കുകയും ചെയ്തിരുന്ന ഉന്നത ഉദ്യോഗസ്ഥൻ ആര്? (LMS Q4)",
    "lang": "ml",
    "hint": "History of Keralam · Koyil Adhikarikal (Crown Representative)",
    "backEn": "<strong>Answer:</strong> Koyil Adhikarikal<br>According to the LMS assessment, the 'Koyil Adhikarikal' was typically a member of the royal family or crown prince who functioned as the king's supreme executive officer and personal deputy presiding over important state and local assemblies.",
    "backSec": "<strong>ഉത്തരം:</strong> പെരുമാളിന്റെ നേരിട്ടുള്ള പ്രതിനിധിയായി ഭരണപരമായ തീരുമാനങ്ങൾ നടപ്പിലാക്കുകയും പ്രധാന യോഗങ്ങളിൽ അധ്യക്ഷത വഹിക്കുകയും ചെയ്തിരുന്നത് 'കോയിൽ അധികാരികൾ' ആയിരുന്നു."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What was the elite bodyguard of the chera perumal known as?",
    "titleSec": "ചേരമാൻ പെരുമാളിന്റെ ജീവൻ സംരക്ഷിക്കാൻ പ്രതിജ്ഞാബദ്ധരായിരുന്ന അംഗരക്ഷക സൈന്യം അറിയപ്പെട്ടിരുന്നത് എങ്ങനെയാണ്? (LMS Q5)",
    "lang": "ml",
    "hint": "History of Keralam · The Royal Bodyguard: Ayiram ('The Thousand')",
    "backEn": "<strong>Answer:</strong> Ayiram<br>According to the LMS assessment, the personal military bodyguard force sworn to protect the Perumal was known as 'Ayiram' (The Thousand, such as the Onnu Kure Ayiram of Kodungallur), acting as lethal suicide shock troops in war.",
    "backSec": "<strong>ഉത്തരം:</strong> രാജാവിനെ സംരക്ഷിക്കാൻ വേണ്ടി ജീവൻ സമർപ്പിച്ച ചേരമാൻ പെരുമാളിന്റെ സൈനിക അംഗരക്ഷക വ്യൂഹമാണ് 'ആയിരം' (ഉദാ: ഒന്നു കുറേ ആയിരം) എന്നറിയപ്പെട്ടിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What was an annual land tax during the Chera period?",
    "titleSec": "രണ്ടാം ചേര സാമ്രാജ്യ കാലത്ത് നിലവിലിരുന്ന വാർഷിക ഭൂനികുതി ഏതാണ്? (LMS Q6)",
    "lang": "ml",
    "hint": "History of Keralam · Attaikkol (Annual Land Revenue)",
    "backEn": "<strong>Answer:</strong> Attaikkol<br>According to the LMS assessment, 'Attaikkol' was the mandatory annual land revenue tax paid to the crown or state by landholders and tenants during the Chera Perumal kingdom.",
    "backSec": "<strong>ഉത്തരം:</strong> ചേര ഭരണകാലത്ത് ഭൂവുടമകളിൽ നിന്നും കർഷകരിൽ നിന്നും വർഷം തോറും പിരിച്ചിരുന്ന പ്രധാന ഭൂനികുതിയാണ് 'ആട്ടൈക്കോൾ' (Attaikkol)."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "The urban administrative body in the Chera kingdom was called?",
    "titleSec": "ചേര സാമ്രാജ്യത്തിൽ നഗരങ്ങളിലെയും കച്ചവട കേന്ദ്രങ്ങളിലെയും ഭരണസമിതി അറിയപ്പെട്ടിരുന്നത് എങ്ങനെയാണ്? (LMS Q7)",
    "lang": "ml",
    "hint": "History of Keralam · Nagaram (Urban Commercial Assembly)",
    "backEn": "<strong>Answer:</strong> Nagaram<br>According to the LMS assessment, 'Nagaram' was the autonomous civic and trade administration body representing commercial market towns and merchant settlements in the Chera kingdom.",
    "backSec": "<strong>ഉത്തരം:</strong> നഗരങ്ങളിലെയും പ്രധാന വ്യാപാര കേന്ദ്രങ്ങളിലെയും ഭരണകാര്യങ്ങൾ നിയന്ത്രിച്ചിരുന്ന വ്യാപാരികളുടെ കൂട്ടായ്മയാണ് 'നഗരം' (Nagaram)."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What were the binding resolutions passed by village assemblies in medieval kerala known as?",
    "titleSec": "മധ്യകാല കേരളത്തിൽ ഗ്രാമസഭകളും ക്ഷേത്രസഭകളും പാസാക്കിയിരുന്ന ഭരണഘടനാപരമായ കരാറുകളും നിയമങ്ങളും അറിയപ്പെട്ടിരുന്നത് എങ്ങനെയാണ്? (LMS Q8)",
    "lang": "ml",
    "hint": "History of Keralam · Kachchams (Constitutional Resolutions)",
    "backEn": "<strong>Answer:</strong> Kachchams<br>According to the LMS assessment, 'Kachchams' were formal constitutional resolutions and statutory agreements enacted by assemblies (such as the famous Muzhikkulam Kachcham) to govern temple property, tenancy rights, and administrative duties.",
    "backSec": "<strong>ഉത്തരം:</strong> ക്ഷേത്ര ഭരണവും ഭൂവുടമാവകാശങ്ങളും കൃത്യമായി പാലിക്കുന്നതിനായി സഭകൾ ഉണ്ടാക്കിയിരുന്ന നിയമപരമായ പ്രമേയങ്ങളെയാണ് 'കച്ചങ്ങൾ' (Kachchams) എന്ന് വിളിച്ചിരുന്നത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which eminent historian argued that the Chera Perumals followed a patrilineal system with a council of Brahmin oligarchs, rather than matrilineal succession?",
    "titleSec": "ചേര പെരുമാക്കന്മാർ മരുമക്കത്തായമല്ല, മക്കത്തായ സമ്പ്രദായമാണ് പിൻതുടർന്നത് എന്ന് ലിഖിത തെളിവുകളോടെ സമർത്ഥിച്ച ചരിത്രകാരൻ ആര്? (LMS Q9)",
    "lang": "ml",
    "hint": "History of Keralam · M.G.S. Narayanan on Chera Perumal Succession",
    "backEn": "<strong>Answer:</strong> M. G. S. Narayanan<br>According to the LMS assessment and epigraphic research, Prof. M.G.S. Narayanan (author of 'Perumals of Kerala') proved through inscriptional evidence that the Chera Perumals followed patrilineal succession (father to son), refuting older theories.",
    "backSec": "<strong>ഉത്തരം:</strong> 'പെരുമാൾസ് ഓഫ് കേരള' എന്ന ഗവേഷണ ഗ്രന്ഥത്തിലൂടെ പ്രൊഫ. എം.ജി.എസ്. നാരായണനാണ് ചേര പെരുമാക്കന്മാർക്കിടയിൽ മക്കത്തായ സമ്പ്രദായമാണ് നിലനിന്നിരുന്നതെന്ന് തെളിയിച്ചത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "The capital of the Chera Perumal kingdom, Mahodayapuram, has been identified with present-day?",
    "titleSec": "ചേര പെരുമാക്കന്മാരുടെ തലസ്ഥാനമായിരുന്ന മഹോദയപുരം ഇന്നത്തെ ഏത് നഗരമായാണ് തിരിച്ചറിഞ്ഞിട്ടുള്ളത്? (LMS Q10)",
    "lang": "ml",
    "hint": "History of Keralam · Identification of Mahodayapuram with Kodungallur",
    "backEn": "<strong>Answer:</strong> Kodungallur<br>According to the LMS assessment, Mahodayapuram (Makotai or Mahodayapattanam), the majestic fortified capital of the Second Cheras, has been conclusively identified with present-day Kodungallur in Thrissur district.",
    "backSec": "<strong>ഉത്തരം:</strong> രണ്ടാം ചേര സാമ്രാജ്യത്തിന്റെ പ്രൗഢമായ തലസ്ഥാന നഗരിയായിരുന്ന മഹോദയപുരം (മാകോത) ഇന്നത്തെ തൃശ്ശൂർ ജില്ലയിലെ കൊടുങ്ങല്ലൂരാണ്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which is the earliest dated epigraph discovered in Kerala, issued in 830 CE in Vattezhuttu script?",
    "titleSec": "കേരളത്തിൽ നിന്ന് ലഭിച്ചിട്ടുള്ളതിൽ വെച്ച് ഏറ്റവും പഴയ ലിഖിതമായി കണക്കാക്കപ്പെടുന്ന 830-ലെ വട്ടെഴുത്ത് ശിലാരേഖ ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Vazhappally Inscription (830 CE)",
    "backEn": "<strong>Answer:</strong> Vazhappally Inscription<br>The Vazhappally Inscription, discovered near Changanassery, is dated to 830 CE (the 12th regnal year of Rajashekhara Varman). Written in Vattezhuttu script, it is the earliest available epigraphical record from Kerala.",
    "backSec": "<strong>ഉത്തരം:</strong> എ.ഡി 830-ൽ രാജശേഖര വർമ്മന്റെ കാലത്ത് പുറപ്പെടുവിച്ച ചങ്ങനാശ്ശേരിക്ക് സമീപമുള്ള വാഴപ്പള്ളി ശാസനമാണ് കേരളത്തിൽ നിന്ന് ലഭിച്ച ഏറ്റവും പുരാതനമായ ലിഖിതം."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "The famous Tarisapalli Copper Plates of 849 CE were granted to which West Asian merchant leader by Ayyanadikal Tiruvadikal, the governor of Venad?",
    "titleSec": "എ.ഡി 849-ൽ വേണാട് ഭരണാധികാരിയായ അയ്യനടികൾ തിരുവടികൾ പ്രസിദ്ധമായ തരിസാപ്പള്ളി ശാസനം നൽകിയത് ഏത് വിദേശ വ്യാപാരിക്കാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Tarisapalli Copper Plates & Mar Sapir Iso",
    "backEn": "<strong>Answer:</strong> Mar Sapir Iso<br>The Tarisapalli Plates (issued at Kollam in 849 CE during the reign of Sthanu Ravi Varma) granted land, agricultural serfs, and 72 commercial privileges to Mar Sapir Iso, the leader of the West Asian Christian merchants.",
    "backSec": "<strong>ഉത്തരം:</strong> കൊല്ലത്തെ ക്രിസ്ത്യൻ വ്യാപാര പ്രമുഖനായ മാർ സാപിർ ഈശോയ്ക്കാണ് തരിസാപ്പള്ളി പള്ളി നിർമ്മാണത്തിനും വ്യാപാരത്തിനുമായി 72 പ്രത്യേക പദവികൾ നൽകിക്കൊണ്ട് തരിസാപ്പള്ളി ശാസനം അനുവദിച്ചത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "The Jewish Copper Plates of Cochin (1000 CE), issued by Bhaskara Ravi Varman I at Muyirikkode, conferred 72 royal prerogatives on which Jewish leader?",
    "titleSec": "എ.ഡി 1000-ൽ ഭാസ്കര രവിവർമ്മൻ ഒന്നാമൻ ജൂത ശാസനം വഴി 72 രാജകീയ പദവികൾ അനുവദിച്ചു നൽകിയ ജൂത പ്രമുഖൻ ആരാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Jewish Copper Plates of Cochin & Joseph Rabban",
    "backEn": "<strong>Answer:</strong> Joseph Rabban<br>The Jewish Copper Plates (dated to 1000 CE) granted hereditary royal honors (such as traveling in palanquins, blowing trumpet horns, daytime lanterns, and tax remissions) to Jewish merchant leader Joseph Rabban, appointing him head of the Anjuvannam guild.",
    "backSec": "<strong>ഉത്തരം:</strong> കൊടുങ്ങല്ലൂരിലെ ജൂത സമൂഹത്തിന്റെ തലവനായ ജോസഫ് റബ്ബാന് പല്ലക്കിൽ സഞ്ചരിക്കാനും പകൽവിളക്ക് കത്തിക്കാനും അഞ്ചുവണ്ണം ഗിൽഡിന്റെ തലവനാകാനുമുള്ള അവകാശങ്ങളാണ് ജൂത ശാസനത്തിലൂടെ ലഭിച്ചത്."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What kind of guild was 'Anjuvannam' in medieval Kerala epigraphy?",
    "titleSec": "മധ്യകാല കേരളത്തിലെ ലിഖിതങ്ങളിൽ പരാമർശിക്കുന്ന 'അഞ്ചുവണ്ണം' (Anjuvannam) ഏത് തരത്തിലുള്ള സംഘമായിരുന്നു?",
    "lang": "ml",
    "hint": "History of Keralam · Anjuvannam Merchant Guild",
    "backEn": "<strong>Answer:</strong> A powerful commercial corporation primarily comprising West Asian foreign merchants (Jews, Christians, and Muslims)<br>Anjuvannam (Hanjamana) was an autonomous trans-oceanic merchant guild operating along peninsular ports, predominantly composed of foreign maritime traders including West Asian Christians, Jews, and Arabs.",
    "backSec": "<strong>ഉത്തരം:</strong> പശ്ചിമേഷ്യയിൽ നിന്നുള്ള ക്രിസ്ത്യൻ, ജൂത, അറബ് വ്യാപാരികൾ ഉൾപ്പെട്ട പ്രബലമായ അന്താരാഷ്ട്ര സമുദ്ര വാണിജ്യ സംഘമായിരുന്നു 'അഞ്ചുവണ്ണം'."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "What was the celebrated Vedic educational academy established in 866 CE by Ay King Karunandadakkan in southern Kerala?",
    "titleSec": "എ.ഡി 866-ൽ ആയ് രാജാവായ കരുനന്തടക്കൻ തെക്കൻ കേരളത്തിൽ സ്ഥാപിച്ച പ്രശസ്തമായ ഉന്നത വിദ്യാഭ്യാസ കേന്ദ്രം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Kanthalur Salai and Parthivapuram Salai",
    "backEn": "<strong>Answer:</strong> Kanthalur Salai (Parthivapuram Salai)<br>Kanthalur Salai (and its sister Parthivapuram Salai established by King Karunandadakkan in 866 CE) was a renowned armed Vedic boarding academy providing advanced education in Sanskrit, scriptures, logic, and military arts.",
    "backSec": "<strong>ഉത്തരം:</strong> ദക്ഷിണേന്ത്യയിലെ നളന്ദ എന്നറിയപ്പെട്ടിരുന്ന, വേദ പഠനത്തിനും ആയോധനകലകൾക്കും പേരുകേട്ട ഉന്നത വിദ്യാഭ്യാസ കേന്ദ്രമായിരുന്നു കാന്തള്ളൂർ ശാലയും പാർത്ഥിവപുരം ശാലയും."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "In the agrarian feudal structure of the Chera kingdom, what were the hereditary trustees of temple properties called?",
    "titleSec": "മധ്യകാല കേരളത്തിലെ ക്ഷേത്ര ഭൂസ്വത്തുക്കളുടെ മേൽനോട്ടം വഹിച്ചിരുന്ന ഭരണസമിതിയിലെ ബ്രാഹ്മണ ട്രസ്റ്റിമാർ അറിയപ്പെട്ടിരുന്നത് എങ്ങനെയാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Uralar (Temple Trustees)",
    "backEn": "<strong>Answer:</strong> Uralar<br>In medieval Kerala, temple committees were headed by 'Uralar' (hereditary Brahmin trustees) who exercised autocratic control over vast Devaswom and Brahmaswom temple estates and tenant rents.",
    "backSec": "<strong>ഉത്തരം:</strong> ക്ഷേത്രങ്ങളുടെയും ബ്രഹ്മസ്വ-ദേവസ്വ സ്വത്തുക്കളുടെയും പൂർണ്ണ ഉടമസ്ഥാവകാശവും മേൽനോട്ടവും കയ്യാളിയിരുന്ന ഉന്നത ബ്രാഹ്മണ സമിതിയാണ് 'ഊരാളർ'."
  },
  {
    "category": "history",
    "subject": "History of Keralam",
    "titleEn": "Which historic resolution passed by a temple assembly in the 9th century became the supreme model code of conduct across Kerala for managing temple property and penalizing corrupt Uralar?",
    "titleSec": "ക്ഷേത്ര സ്വത്തുക്കൾ സംരക്ഷിക്കുന്നതിനും അഴിമതിക്കാരായ ഊരാളന്മാർക്കെതിരെ നടപടിയെടുക്കുന്നതിനുമായി 9-ാം നൂറ്റാണ്ടിൽ രൂപീകരിച്ച മാതൃകാ ഭരണഘടനാ ചട്ടം ഏതാണ്?",
    "lang": "ml",
    "hint": "History of Keralam · Muzhikkulam Kachcham",
    "backEn": "<strong>Answer:</strong> Muzhikkulam Kachcham<br>Enacted at Muzhikkulam temple during the reign of Sthanu Ravi or his predecessor, the Muzhikkulam Kachcham laid down strict statutory penalties (forfeiture of trustee rights, confiscation of land) for corrupt Uralar, becoming the constitutional precedent for all later Kerala Kachchams.",
    "backSec": "<strong>ഉത്തരം:</strong> മൂഴിക്കുളം ക്ഷേത്രത്തിൽ വെച്ച് അംഗീകരിക്കപ്പെട്ട 'മൂഴിക്കുളം കച്ചം' പിൽക്കാലത്ത് കേരളത്തിലെ എല്ലാ ക്ഷേത്ര സഭകൾക്കും ബാധകമായ സുപ്രധാന പെരുമാറ്റച്ചട്ടമായി മാറി."
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Where did Martin Luther King Jr. deliver the 'I Have a Dream' speech?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> Washington, D.C.<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Washington, D.C."
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What major theme does King emphasize in his 'dream'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> Racial equality and harmony<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Racial equality and harmony"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which rhetorical device is most famously used throughout the speech?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> Repetition<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Repetition"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "King refers to the Declaration of Independence to emphasize which idea?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> The promise of equal rights for all<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The promise of equal rights for all"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to the speech, what should people be judged by?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> The content of their character<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The content of their character"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What is the primary effect of King's use of 'we' throughout the speech?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> To create a sense of unity and inclusion<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: To create a sense of unity and inclusion"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which historical document or speech is referenced by King when he opens with 'Five score years ago'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> Abraham Lincoln's Gettysburg Address<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Abraham Lincoln's Gettysburg Address"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which literary or rhetorical device is used when King refers to another historical text or speech?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> Intertextuality<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Intertextuality"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Why does King repeat the phrase 'one hundred years later' several times in the speech?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> To emphasize the long delay in achieving justice and freedom<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: To emphasize the long delay in achieving justice and freedom"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In the check or promissory note metaphor, what does the 'bad check' refer to?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> America's failure to deliver guaranteed constitutional rights to citizens of colour<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: America's failure to deliver guaranteed constitutional rights to citizens of colour"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which rhetorical appeal is primarily used when King evokes deep emotions such as injustice, empathy, and hope?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> Pathos<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Pathos"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What literary device is exemplified by the repetition of a phrase at the beginning of successive clauses (such as 'I have a dream')?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> Anaphora<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Anaphora"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does King advocate when confronting injustice and oppression?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> Responding with nonviolence, dignity, and moral strength<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Responding with nonviolence, dignity, and moral strength"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "The speech mainly inspires which feeling in listeners and participants of the civil rights movement?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> Hope<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Hope"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Toward the end of the address, King urges his audience?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Martin Luther King Jr. - 'I Have a Dream' Speech",
    "backEn": "<strong>Answer:</strong> To continue organized, relentless, nonviolent action across their home states<br>Key concept in Martin Luther King Jr. - 'I Have a Dream' Speech (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: To continue organized, relentless, nonviolent action across their home states"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to the poem, what instruction is heard at the break of day that encourages renewal and resilience?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> Start again, and do not dwell on the past or future.<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Start again, and do not dwell on the past or future."
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What specific critique is offered regarding the 'holy dove', often symbolising peace or innocence?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> It is continually caught, bought, and sold, confirming it is 'never free'.<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: It is continually caught, bought, and sold, confirming it is 'never free'."
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "The speaker rejects complicity with the 'lawless crowd' and highlights the hypocrisy of the powerful by noting that the 'killers in high places' are doing what action?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> Saying their prayers out loud.<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Saying their prayers out loud."
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What metaphorical element is identified as the necessary channel for 'the light' to enter, reflecting the central theme of grace through imperfection?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> A crack, a crack in everything.<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: A crack, a crack in everything."
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "The poem states that 'Every heart, every heart / To love will come.' However, how is the arrival of this love characterised, indicating a sense of vulnerability?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> But like a refugee.<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: But like a refugee."
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Leonard Cohen's 'Anthem' is often interpreted as a call for?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> Acceptance of human flaws, vulnerability, and imperfections<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Acceptance of human flaws, vulnerability, and imperfections"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In 'Anthem', Cohen mentions 'the bells', which can be interpreted as a metaphor for?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> Change, spiritual awakening, and hope<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Change, spiritual awakening, and hope"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Leonard Cohen's 'Anthem' encourages listeners to?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> Embrace imperfection as an inevitable and beautiful part of life<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Embrace imperfection as an inevitable and beautiful part of life"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What kind of text is 'Anthem' in the course listening module?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> A song with poetic lyrics<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: A song with poetic lyrics"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What message do the birds give in the first stanza of 'Anthem'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> Start again and live fully in the present<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Start again and live fully in the present"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In the third stanza of 'Anthem', what kind of 'signs' are given to humanity?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> Evidence of social and moral decay<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Evidence of social and moral decay"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In the fifth stanza, what does 'You can add up the parts, but you won't have the sum' suggest?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> Life cannot be fully understood or explained purely by mechanical reason<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Life cannot be fully understood or explained purely by mechanical reason"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "The phrase 'forget your perfect offering' advises us to?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Leonard Cohen - 'Anthem'",
    "backEn": "<strong>Answer:</strong> Let go of the paralyzing pursuit of perfection and contribute what we can<br>Key concept in Leonard Cohen - 'Anthem' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Let go of the paralyzing pursuit of perfection and contribute what we can"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "How does Amy Morales Lara personally define art in the context of her discussion?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> A form of creative expression that can help you tell a story<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: A form of creative expression that can help you tell a story"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Amy Morales Lara, what is the primary role of a 'helper' in the context of social work?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> To partner with someone in their own process of self-development and growth<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: To partner with someone in their own process of self-development and growth"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What phrase, spoken by her professor, validated Amy Morales Lara's idea of combining creative arts and social work?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> \"In many ways, many social workers are also frustrated artists.\"<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: \"In many ways, many social workers are also frustrated artists.\""
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Amy Morales Lara notes that art is present in advocacy. What specific example does she cite to show how creative people use art in advocacy?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> Utilizing beautiful images and inspiring words on picket signs during protests<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Utilizing beautiful images and inspiring words on picket signs during protests"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Amy Morales Lara highlights that the Bronx had a meaningful art renaissance. Name any two cultural developments she mentions that were cultivated in the Bronx?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> Hip-hop and salsa<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Hip-hop and salsa"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "When encouraging the audience to enter an art space, what key quality does Amy Morales Lara explicitly state is NOT the goal?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> Perfection<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Perfection"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In 'Art as Social Work', Amy Morales Lara emphasizes the role of creative art in?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> Facilitating emotional healing, empowerment, and liberation<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Facilitating emotional healing, empowerment, and liberation"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "How does Amy Morales Lara view the intersection of art and social work?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> As a powerful tool for community building and emotional support<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: As a powerful tool for community building and emotional support"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "How does Amy begin her TED Talk?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> By admitting that she felt lost and uncertain about her direction in life<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: By admitting that she felt lost and uncertain about her direction in life"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What two main questions does Amy ask herself at the start of her journey?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> Who she wants to become and what she wants to do with her life<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Who she wants to become and what she wants to do with her life"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Who famously inspired Amy's foundational concept of being a 'helper'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> Mr. Rogers<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Mr. Rogers"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What central question drives Amy's TED Talk presentation?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> How to combine the compassion of social work with the power of creative arts<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: How to combine the compassion of social work with the power of creative arts"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "How does Amy define the professional discipline of social work?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> A practice-based discipline and profession promoting social change, problem-solving, and empowerment<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: A practice-based discipline and profession promoting social change, problem-solving, and empowerment"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "How did songwriting and music help Amy on a personal level during difficult times?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> It helped her process trauma and challenge negative self-narratives<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: It helped her process trauma and challenge negative self-narratives"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What empowering final message does Amy leave the audience with?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Amy Morales Lara - 'Art as Social Work'",
    "backEn": "<strong>Answer:</strong> Compassion, empathy, and curiosity allow all of us to be helpers in our communities<br>Key concept in Amy Morales Lara - 'Art as Social Work' (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Compassion, empathy, and curiosity allow all of us to be helpers in our communities"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Speaking skills primarily refer to the ability to?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Speaking Skills & Oral Communication",
    "backEn": "<strong>Answer:</strong> Express ideas clearly, fluently, and effectively through spoken language<br>Key concept in Speaking Skills & Oral Communication (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Express ideas clearly, fluently, and effectively through spoken language"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which practices helps most in improving English pronunciation?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Speaking Skills & Oral Communication",
    "backEn": "<strong>Answer:</strong> Active listening and imitating proficient, clear speakers<br>Key concept in Speaking Skills & Oral Communication (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Active listening and imitating proficient, clear speakers"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does fluency in oral communication mean?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Speaking Skills & Oral Communication",
    "backEn": "<strong>Answer:</strong> Speaking smoothly and easily with natural pace and minimal hesitation<br>Key concept in Speaking Skills & Oral Communication (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Speaking smoothly and easily with natural pace and minimal hesitation"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which factor ensures that the tone, register, and vocabulary chosen match the social situation and audience?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Speaking Skills & Oral Communication",
    "backEn": "<strong>Answer:</strong> Appropriateness (Sociolinguistic competence)<br>Key concept in Speaking Skills & Oral Communication (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Appropriateness (Sociolinguistic competence)"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Organising thoughts before speaking mainly helps a speaker to?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Speaking Skills & Oral Communication",
    "backEn": "<strong>Answer:</strong> Provide clarity, coherence, and logical flow of ideas<br>Key concept in Speaking Skills & Oral Communication (Module 1).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Provide clarity, coherence, and logical flow of ideas"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What is the central theme of George Carlin's monologue 'Soft Language'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · George Carlin - 'Soft Language'",
    "backEn": "<strong>Answer:</strong> The pervasive use of euphemisms to conceal harsh realities<br>Key concept in George Carlin - 'Soft Language' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The pervasive use of euphemisms to conceal harsh realities"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Carlin, why do people and institutions resort to soft language?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · George Carlin - 'Soft Language'",
    "backEn": "<strong>Answer:</strong> To make painful or disturbing reality easier to face and conceal truth<br>Key concept in George Carlin - 'Soft Language' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: To make painful or disturbing reality easier to face and conceal truth"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What was the direct, visceral term used during World War I to describe severe psychological trauma experienced by soldiers?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · George Carlin - 'Soft Language'",
    "backEn": "<strong>Answer:</strong> Shell Shock<br>Key concept in George Carlin - 'Soft Language' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Shell Shock"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which sanitized term replaced 'Shell Shock' during World War II?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · George Carlin - 'Soft Language'",
    "backEn": "<strong>Answer:</strong> Battle Fatigue<br>Key concept in George Carlin - 'Soft Language' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Battle Fatigue"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Carlin, what happened to the clinical term describing combat trauma over generations?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · George Carlin - 'Soft Language'",
    "backEn": "<strong>Answer:</strong> It became progressively longer, more technical, and detached from human suffering<br>Key concept in George Carlin - 'Soft Language' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: It became progressively longer, more technical, and detached from human suffering"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does Carlin suggest about euphemistic language in everyday life?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · George Carlin - 'Soft Language'",
    "backEn": "<strong>Answer:</strong> It robs language of life and hides uncomfortable truths behind sterile jargon<br>Key concept in George Carlin - 'Soft Language' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: It robs language of life and hides uncomfortable truths behind sterile jargon"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which literary technique is most prominent throughout Carlin's stand-up performance?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · George Carlin - 'Soft Language'",
    "backEn": "<strong>Answer:</strong> Satire, irony, and sharp social commentary<br>Key concept in George Carlin - 'Soft Language' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Satire, irony, and sharp social commentary"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What broader philosophical message does Carlin convey through his critique?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · George Carlin - 'Soft Language'",
    "backEn": "<strong>Answer:</strong> The words we use shape how we perceive, rationalize, and accept reality<br>Key concept in George Carlin - 'Soft Language' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The words we use shape how we perceive, rationalize, and accept reality"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What major historical event significantly influenced Arthur Miller's understanding of economic society and shaped his dramatic works?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Arthur Miller - 'Death of a Salesman'",
    "backEn": "<strong>Answer:</strong> The Great Depression<br>Key concept in Arthur Miller - 'Death of a Salesman' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The Great Depression"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which play established Arthur Miller's international reputation and won both the Pulitzer Prize and the Tony Award?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Arthur Miller - 'Death of a Salesman'",
    "backEn": "<strong>Answer:</strong> Death of a Salesman<br>Key concept in Arthur Miller - 'Death of a Salesman' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Death of a Salesman"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Who was the primary personal inspiration for the character of Willy Loman?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Arthur Miller - 'Death of a Salesman'",
    "backEn": "<strong>Answer:</strong> Arthur Miller's uncle, Manny Newman<br>Key concept in Arthur Miller - 'Death of a Salesman' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Arthur Miller's uncle, Manny Newman"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which core theme is most central to the tragedy of Death of a Salesman?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Arthur Miller - 'Death of a Salesman'",
    "backEn": "<strong>Answer:</strong> The illusory promises and destructive pressures of the American Dream<br>Key concept in Arthur Miller - 'Death of a Salesman' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The illusory promises and destructive pressures of the American Dream"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Why does Biff lose his childhood admiration and respect for his father, Willy?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Arthur Miller - 'Death of a Salesman'",
    "backEn": "<strong>Answer:</strong> Biff catches Willy having an extramarital affair in a Boston hotel room<br>Key concept in Arthur Miller - 'Death of a Salesman' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Biff catches Willy having an extramarital affair in a Boston hotel room"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does the surrounding urban transformation of Willy's neighbourhood symbolize in the play?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Arthur Miller - 'Death of a Salesman'",
    "backEn": "<strong>Answer:</strong> The claustrophobic loss of personal freedom, security, and connection to nature<br>Key concept in Arthur Miller - 'Death of a Salesman' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The claustrophobic loss of personal freedom, security, and connection to nature"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In the opening of the play, what serious problem causes Willy to return home unexpectedly from his sales road trip?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Arthur Miller - 'Death of a Salesman'",
    "backEn": "<strong>Answer:</strong> He suffers mental exhaustion, loses driving concentration, and repeatedly swerves off the road<br>Key concept in Arthur Miller - 'Death of a Salesman' (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: He suffers mental exhaustion, loses driving concentration, and repeatedly swerves off the road"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Who is the charismatic teacher conducting the unorthodox English literature lesson in the 'Rip It Out' scene?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> John Keating<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: John Keating"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does Dr. J. Evans Pritchard's essay attempt to do to literary appreciation?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> Measure the greatness of poetry mathematically using Cartesian coordinate graphs and formulas<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Measure the greatness of poetry mathematically using Cartesian coordinate graphs and formulas"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Why does Mr. Keating command his students to physically tear out the introduction of their poetry textbook?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> Because he rejects the artificial, mechanical reduction of artistic passion into mathematical formulas<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Because he rejects the artificial, mechanical reduction of artistic passion into mathematical formulas"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Mr. Keating, what is the profound reason human beings read and write poetry?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> Because we are members of the human race, filled with passion, and poetry sustains the human soul<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Because we are members of the human race, filled with passion, and poetry sustains the human soul"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which visionary poet does Mr. Keating quote when delivering his powerful speech about the 'powerful play' of life?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> Walt Whitman<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Walt Whitman"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does Mr. Keating mean when he asks his students: 'What will your verse be?'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> He challenges them to discover their purpose and make their own unique, meaningful contribution to the world<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: He challenges them to discover their purpose and make their own unique, meaningful contribution to the world"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Why is the 'Rip It Out' lesson included in the undergraduate English literature curriculum?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> To encourage critical inquiry, deep aesthetic appreciation, and independent thinking<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: To encourage critical inquiry, deep aesthetic appreciation, and independent thinking"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What fundamental dynamic makes Keating's classroom scene revolutionary within the school?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> Promoting questioning of dogma, free expression, and intellectual autonomy<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Promoting questioning of dogma, free expression, and intellectual autonomy"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "How is Welton Academy depicted in the film?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> A rigid, deeply conservative institution governed by tradition, honour, discipline, and obedience<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: A rigid, deeply conservative institution governed by tradition, honour, discipline, and obedience"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What is Mr. Keating's core critique of traditional, formulaic poetry pedagogy?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> That poetry must be felt, experienced, and tasted rather than mechanically dissected<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: That poetry must be felt, experienced, and tasted rather than mechanically dissected"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In the classroom, the act of tearing out the textbook's introductory essay symbolizes?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Rip It Out' (Dead Poets Society / Poetry)",
    "backEn": "<strong>Answer:</strong> The decisive rejection of mechanical conformism, rigid dogma, and intellectual fear<br>Key concept in 'Rip It Out' (Dead Poets Society / Poetry) (Module 2).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The decisive rejection of mechanical conformism, rigid dogma, and intellectual fear"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "\"The Second Coming\" was written by W. B. Yeats in the immediate aftermath of which global catastrophe?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · W. B. Yeats - 'The Second Coming'",
    "backEn": "<strong>Answer:</strong> The First World War<br>Key concept in W. B. Yeats - 'The Second Coming' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The First World War"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In the opening stanza of the poem, what does the 'falcon' that cannot hear the falconer primarily symbolize?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · W. B. Yeats - 'The Second Coming'",
    "backEn": "<strong>Answer:</strong> Humanity or human intellect breaking away from moral control and spiritual guidance<br>Key concept in W. B. Yeats - 'The Second Coming' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Humanity or human intellect breaking away from moral control and spiritual guidance"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What terrifying historical reality does the iconic line \"Things fall apart; the centre cannot hold\" suggest?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · W. B. Yeats - 'The Second Coming'",
    "backEn": "<strong>Answer:</strong> Civilization is disintegrating into moral chaos, anarchy, and political collapse<br>Key concept in W. B. Yeats - 'The Second Coming' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Civilization is disintegrating into moral chaos, anarchy, and political collapse"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does in yeats's esoteric philosophy, the latin phrase 'spiritus mundi' refer to?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · W. B. Yeats - 'The Second Coming'",
    "backEn": "<strong>Answer:</strong> The universal collective memory, subconscious, and archetypal reservoir of humanity<br>Key concept in W. B. Yeats - 'The Second Coming' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The universal collective memory, subconscious, and archetypal reservoir of humanity"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "The ominous 'rough beast' slouching towards Bethlehem symbolizes?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · W. B. Yeats - 'The Second Coming'",
    "backEn": "<strong>Answer:</strong> The terrifying dawn of a violent, monstrous new historical cycle<br>Key concept in W. B. Yeats - 'The Second Coming' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The terrifying dawn of a violent, monstrous new historical cycle"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which encapsulates the overarching theme of \"The Second Coming\"?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · W. B. Yeats - 'The Second Coming'",
    "backEn": "<strong>Answer:</strong> Apocalyptic dread, pervasive violence, moral confusion, and civilizational collapse<br>Key concept in W. B. Yeats - 'The Second Coming' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Apocalyptic dread, pervasive violence, moral confusion, and civilizational collapse"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "The poem concludes with a haunting rhetorical question about the beast slouching towards Bethlehem. What is the psychological effect of this ending?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · W. B. Yeats - 'The Second Coming'",
    "backEn": "<strong>Answer:</strong> It leaves readers with deep dread, ominous suspense, and cosmic uncertainty<br>Key concept in W. B. Yeats - 'The Second Coming' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: It leaves readers with deep dread, ominous suspense, and cosmic uncertainty"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "James Finn Garner's \"The Frog Prince\" is a satirical modern parody of the classic fairy tale originally popularized by?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · James Finn Garner - 'The Frog Prince'",
    "backEn": "<strong>Answer:</strong> The Grimm Brothers<br>Key concept in James Finn Garner - 'The Frog Prince' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The Grimm Brothers"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In Garner's humorous politically-correct retelling, how is the princess character depicted?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · James Finn Garner - 'The Frog Prince'",
    "backEn": "<strong>Answer:</strong> As an independent, environmentally-conscious, eco-feminist woman<br>Key concept in James Finn Garner - 'The Frog Prince' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: As an independent, environmentally-conscious, eco-feminist woman"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "When the princess kisses the frog and breaks the spell, what does the frog transform into?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · James Finn Garner - 'The Frog Prince'",
    "backEn": "<strong>Answer:</strong> A greedy, exploitative corporate real estate developer<br>Key concept in James Finn Garner - 'The Frog Prince' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: A greedy, exploitative corporate real estate developer"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which socio-economic issue is sharply satirized when the transformed frog announces plans to bulldoze the marsh and build condominiums?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · James Finn Garner - 'The Frog Prince'",
    "backEn": "<strong>Answer:</strong> Unchecked predatory capitalism and environmental destruction<br>Key concept in James Finn Garner - 'The Frog Prince' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Unchecked predatory capitalism and environmental destruction"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which prominent literary techniques are employed throughout Garner's Politically Correct Bedtime Stories?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · James Finn Garner - 'The Frog Prince'",
    "backEn": "<strong>Answer:</strong> Satire, parody, irony, and subversion of fairy-tale tropes<br>Key concept in James Finn Garner - 'The Frog Prince' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Satire, parody, irony, and subversion of fairy-tale tropes"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What is the primary artistic and social objective of Garner's modernized retelling?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · James Finn Garner - 'The Frog Prince'",
    "backEn": "<strong>Answer:</strong> To entertain audiences while humorously exposing modern societal hypocrisies and gender stereotypes<br>Key concept in James Finn Garner - 'The Frog Prince' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: To entertain audiences while humorously exposing modern societal hypocrisies and gender stereotypes"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Helen Keller in her essay 'Optimism', what is the universal, fundamental desire shared by all human beings?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> True happiness and inner fulfilment<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: True happiness and inner fulfilment"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Helen Keller, where does authentic and enduring happiness originate?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> From inner spiritual strength, noble hope, and engaging in meaningful work<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: From inner spiritual strength, noble hope, and engaging in meaningful work"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What pivotal breakthrough transformed Helen Keller's childhood existence from 'darkness and stillness' into 'hope and joy'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> Unlocking the power of language and communication through teacher Anne Sullivan<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Unlocking the power of language and communication through teacher Anne Sullivan"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does Helen Keller characterize and denounce as 'false optimism'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> Blindly ignoring real human suffering and social injustice while pretending everything is perfect<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Blindly ignoring real human suffering and social injustice while pretending everything is perfect"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Keller, what profound virtues does facing and overcoming suffering cultivate in humanity?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> Patience, moral courage, resilience, and deep compassion for others<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Patience, moral courage, resilience, and deep compassion for others"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which statement accurately reflects Helen Keller's philosophy of work and human effort?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> The willingness and desire to engage in creative work is itself an active declaration of optimism<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The willingness and desire to engage in creative work is itself an active declaration of optimism"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "How does Helen Keller define optimism in the concluding section of her essay?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> As her personal religion, bedrock faith, and guiding philosophy of existence<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: As her personal religion, bedrock faith, and guiding philosophy of existence"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Helen Keller, what is definitely NOT the true foundation of optimism?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> Superficial material possessions, physical sensory comforts, and luxury<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Superficial material possessions, physical sensory comforts, and luxury"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does Helen Keller mean by asserting that 'the desire and will to work is in itself an expression of optimism'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> That choosing to work demonstrates faith that human effort matters and the future can be shaped<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: That choosing to work demonstrates faith that human effort matters and the future can be shaped"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Keller, why is confronting evil, hardship, and adversity essential for the human spirit?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> It tests and fortifies inner character, teaching human beings to truly value goodness and truth<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: It tests and fortifies inner character, teaching human beings to truly value goodness and truth"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does Helen Keller intend by her 'religion of optimism'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Helen Keller - 'Optimism: An Essay'",
    "backEn": "<strong>Answer:</strong> An abiding faith in human potential, divine benevolence, and the triumph of light over darkness<br>Key concept in Helen Keller - 'Optimism: An Essay' (Module 3).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: An abiding faith in human potential, divine benevolence, and the triumph of light over darkness"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Dr. B.R. Ambedkar, the caste system is fundamentally distinct from ordinary socioeconomic specialization because it is not merely a division of labour, but also a?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> Division of labourers into compartmentalized, graded hierarchies<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Division of labourers into compartmentalized, graded hierarchies"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Why does Dr. Ambedkar sharply criticize the caste system's mechanism for assigning occupations?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> Because it predetermines a person's life pursuit based on parental birth rather than individual aptitude and choice<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Because it predetermines a person's life pursuit based on parental birth rather than individual aptitude and choice"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In his historic treatise, what does Ambedkar identify as a primary limitation imposed by caste on the working individual?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> It prevents individuals from changing occupations as technological and economic circumstances evolve<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: It prevents individuals from changing occupations as technological and economic circumstances evolve"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Ambedkar argues that the hereditary rigidity of caste directly causes economic stagnation and unemployment because it?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> Prevents people from freely taking up productive callings outside their assigned birth caste even when jobs are vacant<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Prevents people from freely taking up productive callings outside their assigned birth caste even when jobs are vacant"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Ambedkar, why do many essential productive occupations in India provoke 'aversion' and reluctance among workers?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> Because society considers them ritually degrading, treating the worker with social stigma and contempt<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Because society considers them ritually degrading, treating the worker with social stigma and contempt"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What is Dr. Ambedkar's final economic assessment of the caste system as an organization of production?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> It is profoundly harmful because it suppresses natural inclinations, stifles initiative, and damages economic efficiency<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: It is profoundly harmful because it suppresses natural inclinations, stifles initiative, and damages economic efficiency"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Why was Dr. Ambedkar's undelivered presidential address for the Jat-Pat-Todak Mandal conference of Lahore (1936) cancelled by the organizers?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> The orthodox organizers found his uncompromising critique of sacred Hindu scriptures too provocative and demanded unaccepted revisions<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The orthodox organizers found his uncompromising critique of sacred Hindu scriptures too provocative and demanded unaccepted revisions"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Ambedkar, caste divides labourers into a hierarchy that is based strictly on?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> Accident of birth and inherited social lineage<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Accident of birth and inherited social lineage"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does Dr. Ambedkar identify as a catastrophic consequence of caste-based occupational assignment on human talent?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> It restricts individual freedom, smothers latent talent, and forces individuals into careers they despise<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: It restricts individual freedom, smothers latent talent, and forces individuals into careers they despise"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Dr. Ambedkar, the insidious psychological harm inflicted by caste lies in its capacity to?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> Instil feelings of inferiority, shame, helplessness, and enduring social stigma in subordinated classes<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Instil feelings of inferiority, shame, helplessness, and enduring social stigma in subordinated classes"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Ambedkar argues that the caste system cripples economic and social progress primarily because?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Dr. B.R. Ambedkar - 'Annihilation of Caste'",
    "backEn": "<strong>Answer:</strong> It rigidly locks generations into hereditary occupations regardless of individual ability or economic need<br>Key concept in Dr. B.R. Ambedkar - 'Annihilation of Caste' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: It rigidly locks generations into hereditary occupations regardless of individual ability or economic need"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What is the absurd reason for the humble cook's sudden rise to worldwide fame in Basheer's satirical tale?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Vaikom Muhammad Basheer - 'The World-Renowned Nose'",
    "backEn": "<strong>Answer:</strong> His nose begins to grow unusually long, extending past his mouth and chin<br>Key concept in Vaikom Muhammad Basheer - 'The World-Renowned Nose' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: His nose begins to grow unusually long, extending past his mouth and chin"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which social institution is most sharply satirized by Basheer for sensationally turning the poor cook into a public spectacle?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Vaikom Muhammad Basheer - 'The World-Renowned Nose'",
    "backEn": "<strong>Answer:</strong> The sensationalist commercial media and press<br>Key concept in Vaikom Muhammad Basheer - 'The World-Renowned Nose' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The sensationalist commercial media and press"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What does the cook's extraordinarily long nose primarily symbolize in the story?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Vaikom Muhammad Basheer - 'The World-Renowned Nose'",
    "backEn": "<strong>Answer:</strong> Society's hollow obsession with celebrity, irrational spectacle, and mass hype<br>Key concept in Vaikom Muhammad Basheer - 'The World-Renowned Nose' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Society's hollow obsession with celebrity, irrational spectacle, and mass hype"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which characterizations best describes the protagonist cook throughout the events?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Vaikom Muhammad Basheer - 'The World-Renowned Nose'",
    "backEn": "<strong>Answer:</strong> Simple, naive, bewildered, and easily exploited by opportunists<br>Key concept in Vaikom Muhammad Basheer - 'The World-Renowned Nose' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Simple, naive, bewildered, and easily exploited by opportunists"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "How does Basheer mainly critique partisan politics in 'The World-Renowned Nose'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Vaikom Muhammad Basheer - 'The World-Renowned Nose'",
    "backEn": "<strong>Answer:</strong> By depicting rival political factions violently exploiting the cook's nose to divide citizens and win power<br>Key concept in Vaikom Muhammad Basheer - 'The World-Renowned Nose' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: By depicting rival political factions violently exploiting the cook's nose to divide citizens and win power"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which distinctive literary style is most brilliantly showcased throughout Basheer's masterpiece?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · Vaikom Muhammad Basheer - 'The World-Renowned Nose'",
    "backEn": "<strong>Answer:</strong> Playful satire combined with hilarious irony, sharp wit, and purposeful exaggeration<br>Key concept in Vaikom Muhammad Basheer - 'The World-Renowned Nose' (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Playful satire combined with hilarious irony, sharp wit, and purposeful exaggeration"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What is the primary idyllic setting of Giuseppe Tornatore's cinematic masterpiece 'Cinema Paradiso'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Cinema Paradiso' - Movie Review",
    "backEn": "<strong>Answer:</strong> A small, nostalgic Sicilian village named Giancaldo<br>Key concept in 'Cinema Paradiso' - Movie Review (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: A small, nostalgic Sicilian village named Giancaldo"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "What vital role does the cinema projectionist Alfredo play in young Salvatore's (Toto's) life?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Cinema Paradiso' - Movie Review",
    "backEn": "<strong>Answer:</strong> He becomes Toto's wise mentor, guide, and surrogate father figure<br>Key concept in 'Cinema Paradiso' - Movie Review (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: He becomes Toto's wise mentor, guide, and surrogate father figure"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "According to Kusali Rupasinghe's review, why is 'Cinema Paradiso' widely celebrated as a profound 'love letter to cinema'?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Cinema Paradiso' - Movie Review",
    "backEn": "<strong>Answer:</strong> Because it honors the communal magic, tender nostalgia, and life-shaping power of movie-watching<br>Key concept in 'Cinema Paradiso' - Movie Review (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Because it honors the communal magic, tender nostalgia, and life-shaping power of movie-watching"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "In the local village theatre, what comical ritual does the parish priest perform whenever an affectionate kissing scene appears on screen?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Cinema Paradiso' - Movie Review",
    "backEn": "<strong>Answer:</strong> He vigorously rings his bell to order Alfredo to censor and cut the intimate footage<br>Key concept in 'Cinema Paradiso' - Movie Review (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: He vigorously rings his bell to order Alfredo to censor and cut the intimate footage"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which qualities of Kusali Rupasinghe's analysis best demonstrates exemplary film review writing?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Cinema Paradiso' - Movie Review",
    "backEn": "<strong>Answer:</strong> Weaving personal heartfelt memories with insightful critical analysis while scrupulously avoiding spoilers<br>Key concept in 'Cinema Paradiso' - Movie Review (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: Weaving personal heartfelt memories with insightful critical analysis while scrupulously avoiding spoilers"
  },
  {
    "category": "english",
    "subject": "English (ENG1FA101)",
    "titleEn": "Which poignant theme is most powerfully conveyed when adult Salvatore returns to Giancaldo following Alfredo's passing?",
    "titleSec": "ഇംഗ്ലീഷ് ഭാഷാ പഠനം",
    "lang": "ml",
    "hint": "English (ENG1FA101) · 'Cinema Paradiso' - Movie Review",
    "backEn": "<strong>Answer:</strong> The bittersweet weight of nostalgia, the passage of time, and the indelible imprint of childhood roots<br>Key concept in 'Cinema Paradiso' - Movie Review (Module 4).",
    "backSec": "<strong>ഉത്തരം:</strong> ശരിയായ ഉത്തരം: The bittersweet weight of nostalgia, the passage of time, and the indelible imprint of childhood roots"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who primarily introduced the term social control to sociology?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> EA Ross<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who authored The book “Social control”?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> EA Ross<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does social control refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Mechanism that ensure order and conformity<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who defined “Social control is the system society uses to make its members follow accepted standards of behaviour”?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> E A Ross<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Into which two broad categories did Karl Mannheim divide social control?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Direct and Indirect social control<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a prime example of indirect social control?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Customs<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is this type of social control is exercised through formalised institutional system, it known as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Organised social control<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which type of social control not proposed by Gurvitch?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Conscious social control<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is it is a method of social control through provide promotion, award or compliments, it known as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Positive social control<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "How did CH Cooley classify social control?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Conscious and Unconscious social control<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a formal means of social control?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Law<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "By what means is informal social control exercised?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Peer group<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What form of social control is religion considered to be?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Informal<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is the ultimate primary objective of social control in human society?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Maintain social order and stability<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who proposed The psychosexual development model?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Sigmund Freud<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to Freud, which structure of the personality operated on the pleasure principle?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Id<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who is known as the 'Father of Sociology'?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Auguste Comte<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "In which year was the term 'Sociology' coined?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> 1839<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to Emile Durkheim, sociology is the science of?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Social phenomena<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Max Weber defined sociology as the study of?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Social action<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who analysed class conflict between bourgeoisie and proletariat?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Karl Marx<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which concept is associated with Emile Durkheim?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Anomie<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Positivism was developed by?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Auguste Comte<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which sociologist proposed the Law of Three Stages?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Auguste Comte<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who divided sociology into Systematic, Historical and General Sociology?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Herbert Spencer<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who is associated with the Formalistic School?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Georg Simmel<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who explained the characteristics of sociology in 'The Social Order'?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Robert Bierstedt<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who introduced Gemeinschaft and Gesellschaft?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Ferdinand Tönnies<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The sociologist who explained the concept of division of labour in modern society is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Emile Durkheim<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The sociologist who analyzed social stratification in terms of class, status, and power is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Max Weber<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who is considered the Father of Rural Sociology?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Louis F. Ward<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who introduced the concept of the 'Sick Role'?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Talcott Parsons<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which intellectual movement emphasized reason and rational thinking in Europe during?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Enlightenment<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which intellectual movement is known as the 'Age of Reason'?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Enlightenment<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which historical period is known as the 'Rebirth of Classical Learning' in Europe?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Renaissance<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who is known as the Father of Humanism?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Francesco Petrarch<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which Renaissance scholar was a famous Dutch Humanist?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Erasmus<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which concept emphasizes the importance and freedom of the individual?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Individualism<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What term refers to the separation of religion from social and political life?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Secularism<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which philosophical movement emphasizes knowledge through sensory experience?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Empiricism<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What philosophy emphasizes knowledge based on observation and experience?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Empiricism<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who are the major empiricist philosophers of the Early Modern Period?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Francis Bacon, John Locke, David Hume<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which philosopher argued for natural rights such as life, liberty, and property?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> John Locke<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which thinker proposed the idea of Separation of Powers?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Montesquieu<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The Industrial Revolution first occurred in?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> United Kingdom<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "In which century did the Industrial Revolution begin?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> 18th Century<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is the shift from an agrarian society to an industrial society called?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Industrialization<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is rapid growth of cities during industrialization known as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Urbanization<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is meant by urbanisation?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Movement from rural to urban areas<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The French Revolution promoted?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Liberty, Equality, Fraternity<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which revolution promoted the ideals of Liberty, Equality, and Fraternity?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> French Revolution<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The major political event that influenced the emergence of sociology was the?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> French Revolution<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The social system that existed in France before the Revolution was called?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Feudalism<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What was the social structure of pre-revolutionary France known as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Estate<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to Karl Marx, the working class is called?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Proletariat<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The book written by Friedrich Engels about workers in England is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> The Condition of the Working Class in<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Social science<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "In terms of its epistemic approach, what type of science is sociology (categorical or normative)?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Categorical<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology studies?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Society as a whole<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology is both?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Rational and empirical<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Formalistic school believes that sociology has?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Limited scope<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Synthetic school believes sociology is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> General science<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Social morphology studies?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Population and structure<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology helps in?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Solving social problems<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology uses which method for study?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Scientific method<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is meant by observation in sociology?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Scientific and systematic watching<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Experimental method in sociology is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Difficult to apply strictly<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology is considered a general science because it studies?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Society as a whole<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Alfred Vierkandt belonged to the?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Specialistic (Formalistic) School<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Medical Sociology primarily studies?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Health, illness, and healthcare<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Industrial Sociology originated in?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> USA<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is NOT an area of Industrial Sociology?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Rural community life<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The study of how social factors like poverty, stress, and environment affect health is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Medical Sociology<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociological techniques include all of the following EXCEPT?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Laboratory Experiment<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which marginalized communities does sociological research and social welfare specifically highlight?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Tribal<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which influential 1951 work by Talcott Parsons introduced the concept of the 'Sick Role'?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> The Social System<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology is considered a general social science because it?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Studies society as a whole<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Political science mainly studies?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Formal political institutions<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is studied by Political Science?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Electoral systems<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Economics is mainly concerned with?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Production, distribution, and consumption<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology studies economic life in relation to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Social factors<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology studies economic behaviour in relation to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Culture and values<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "History mainly studies?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Past events<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology is concerned with?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> General patterns and processes<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Anthropology studies?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Total way of life<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Thinking sociologically is closely related to common sense because both deal with?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Everyday social life<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who introduced the concept of Sociological Imagination?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> C. Wright Mills<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociological Imagination mainly helps to connect?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Personal troubles and public issues<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which book popularised the concept of Sociological Imagination?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> The Sociological Imagination<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Personal troubles are?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Problems within an individual's immediate environment<br>s immediate environment'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Public issues are?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Problems affecting large numbers due to social structures<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does the 'quality of mind' mentioned by mills refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Sociological imagination<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Coffee drinking is an example used to explain?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Everyday social practices<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is meant by the connection between biography and history?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Individual life is shaped by historical forces<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Lack of sociological imagination leads to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Feeling of being trapped<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does sociology of everyday life mainly focus on?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Routine daily activities and interactions<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Common sense knowledge is generally?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Based on everyday experience and beliefs<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociology differs from common sense because it is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Scientific and systematic<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Max Weber is mainly associated with which type of sociology?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Interpretative sociology<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is meant by the german term 'verstehen'?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Empathetic understanding<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does the term 're' mean in research?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Again<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Research is best defined as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Systematic and scientific enquiry<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Sociological research mainly studies?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Human social behaviour and society<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which is NOT a characteristic of sociological research?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Personal bias<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Pure research mainly aims at?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Knowledge creation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does qualitative research deal with?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Qualities and experiences<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The first step in the research process is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Identification of research problem<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "A hypothesis is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Tentative statement<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The final step in the research process is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Reporting<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does ethics refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Moral principles guiding behaviour<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is an unethical practice?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Fabrication of data<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does anonymity refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Hiding identity of participants<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is meant by plagiarism?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Copying others' work without credit<br>work without credit'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who develops research ethics?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Institutions and committees<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Micro-sociology studies individual behaviour in?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Social interaction<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a key feature of Micro Sociology?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Focus on small-scale interactions<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is meant by the word 'micro'?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Small<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does the term 'level of analysis' in sociology refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Scale or scope of study<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who coined the term “symbolic interactionism” and is widely regarded as its founder?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> George Herbert Mead<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Symbolic Interactionism mainly focuses on?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Daily interactions and meanings<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who is the founder of Ethnomethodology?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Harold Garfinkel<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who developed Exchange Theory?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> George C. Homans<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What term describes the type of cooperation occurs when people perform different task to achieve a common goal, it?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Indirect cooperation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which type of cooperative behaviour exist in business organization, churches and government agencies?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Secondary cooperation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "For which form of cooperation does social division of labour and specialization serve as the foundation?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Indirect cooperation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which type of cooperation is seen in groups like family or friendship groups?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Primary cooperation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Of which form of cooperation are opportunistic or temporary self-interested attitudes characteristic?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Tertiary co-operation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who defined \"Competition is an interaction without social contact\"?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Park and Burgess<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is not a characteristics of competition?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Competition is static<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is an example of economic competition?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Individual fight for jobs<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is not a positive function of competition?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> It leads to monopoly<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who defined “Conflict as ‘the deliberate attempt to oppose, resist or coerce the will of another or others”?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> W. Green<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which sociologists considered human history as the history of class struggle?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Karl Marx<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is not a type of conflict mentioned by George Simmel?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Personal Conflict<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a type of conflict mentioned by Gillin and Gillin?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> War<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What sociological process refers to the continuous adjustments individuals make to resolve conflict and coexist?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Accommodation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "“Accommodation is the adjustment of hostile individuals or groups”, defined by?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Ogburn and Nimkoff<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is not a method of accommodation?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Conflict<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is the process of adjusting or compromising after a conflict known as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Accommodation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which type of social interaction involves rivalry for scarce resources?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Competition<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What term describes when a minority group gradually adopts the culture of the dominant group, it?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Assimilation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which type of interaction refers to the deliberate attempt to oppose, resist, or coerce the will of another or others,?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Conflict<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The process by which one culture is absorbed and integrated into another is called?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Assimilation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is not a characteristic of assimilation?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Assimilation is very fast process<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The term “Accommodation” was first used in this sense by which psychologist?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> J. M. Baldwin<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is not a characteristics of social group?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Different interests<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "How did George Simmel classify social groups?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Small groups and large groups<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which not a social groups classified by Sanderson?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Vertical groups<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who introduced the concept of primary groups?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> CH Cooley<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a prime example of primary group?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Family<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which book written by CH Cooley?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Social organization: Human nature and social order<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a characteristics of secondary groups?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Impersonal relationship<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The book ‘Folkways’ written by?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> WG Sumner<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "How did Pitirim Sorokin classify social group?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Horizontal and vertical groups<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does a person becomes a member of a group based on his own will, it refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Voluntary group<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does delegated groups refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> A group of individual only as representative of others<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which group classification describes members who share the same status or horizontal position in society?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Horizontal group<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a groups depicts the interactions of members with a sense of unity and support?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> In groups<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a prime example of Horizontal groups?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Occupational groups<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What term describes temporary groups formed through short-term or incidental social interactions?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Ephemeral group<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The term ‘reference group’ introduced by?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Muzafer Sherif<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The book 'An Outline of Social Psychology' written by?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Muzafer Sherif<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Into which two classic categories did Ferdinand Tönnies classify human social groups?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Gemeinschaft and Gesellschaft<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a prime example of congregate groups?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Religious group<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a prime example of secondary socialization?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Peer groups and school<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does anticipatory socialization refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Preparation for future roles<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The term anticipatory socialization developed by?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Robert K Merton<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What sociological process involves unlearning old behaviour patterns and adopting entirely new social roles?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Re-socialization<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "It is the process where individuals acquire gender roles and expectations that are socially constructed?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Gender socialization<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who defined “Socialization is a process through which social nature of human is formed from natural human?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> H. T. Majumdar<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The primary agents of early socialization?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Family<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who is considered an formal agent of socialization?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> School<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who is considered an informal agent of socialization?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Media<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The process by which individuals learn ideas, values and norms through mass communication is called?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Media socialization<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "It is an organized part of the personality structure and which organize our thoughts as well as makes a sense of the?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Ego<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "In Freudian psychoanalytic theory, which component of personality represents the logical, reality-oriented conscious mind?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Ego<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which structure of the personality operated on the morality principle?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Super ego<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to the Freud, What is a primary stage of personality development?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Oral Stage<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is the approximate age range for the Anal Stage of psychosexual development?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> 1 to 3 years<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The conflict that arises in the Phallic Stage, where a boy develops sexual desires for his mother and views his?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Oedipus complex<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "A female child could develop that love for the father and the jealousy against the mother, considering the latter to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Electra complex<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to Freud, Which stage is characterised that a people develop skills, values and?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Latent stage<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which sociologists suggest that self is not inborn but rather it comes from social experience or?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> GH Mead<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to GH mead, the self as comprising two inter related elements, that are?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> I and Me<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to Mead, What is an first stage of socialization?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Imitation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is not a stage of socialization proposed by GH Mead?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Genital stage<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Theory of cognitive development proposed by?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Jean Piaget<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which theorist proposed that ability of children learning is limited and influenced by their stage of?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Jean Piaget<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to Piaget, What is a primary stage of socialization?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Sensorimotor stage<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The word \"society\" is derived from which Latin word?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Societas<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to R. M. Maclver, society is best described as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> A web of social relationships<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The functional approach views society mainly as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> A continuous process of interaction<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is NOT a basic societal need according to Kingsley Davis?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Industrialization<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is NOT a characteristic of society?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Isolation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which society is mainly based on farming and land ownership?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Agrarian society<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The shift from family-based production to factory production is a feature of?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Industrial society<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Post-industrial society is also known as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Information society<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Social institutions are mainly responsible for?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Organising and guiding social life<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "The concept of social institutions as “established ways of relationships” was given by?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Maclver<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Enacted institutions are?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Deliberately created<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Manifest functions are?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Intended and visible functions<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does social structure refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Organized pattern of relationships in society<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who defined social structure as a network of relationships?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> A.R. Radcliffe-Brown<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Norms are?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Rules that guide behaviour<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Permissive norms refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Boundaries of acceptable behaviour<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does the term \"status\" refer to in sociology?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> A person's position in society<br>s position in society'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to H. M. Johnson, status consists of?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Rights and obligations<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Ascribed status is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Given at birth<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Becoming a doctor is an example of?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Achieved status<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does in sociology, a role refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> The expected behaviour of a person in a position<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does a \"role set\" refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Many roles linked to one status<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Role conflict occurs when?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Two or more roles create conflicting demands<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is a key characteristic of social change?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> It is continuous<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is an example of diffusion in social change?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Spread of the English language in India<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which statement about social change is correct?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> It can be planned or unplanned<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What does sociological imagination refer to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Linking personal experiences with wider social structures<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which is an unethical research practice?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Fabrication of data<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which is a key feature of micro-sociology?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Focus on small-scale interactions<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Social interaction is considered the basic building block of?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Social relationships<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to Cooley, cooperation occurs when?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Individuals recognize a common interest<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Competition is best described as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Goal-oriented conflict<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Conflict occurs when people give more importance to?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Personal interests<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "According to W. Green, conflict is?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> A deliberate attempt to oppose others<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Long-term conflict resolution where groups become similar is called?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Assimilation<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which best describes accommodation?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Temporary adjustment to avoid conflict<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Assimilation is best described as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Gradual cultural absorption<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which type of group is a temporary collection of people with no meaningful interaction?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Aggregate<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which group has a formal structure with written rules and defined membership?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Associational group<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Who introduced the concept of primary and secondary groups?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> C. H. Cooley<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Organised groups are also known as?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Associational groups<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is socialization?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> A process of learning social behaviour<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Which is the first and most basic agent of socialisation?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Family<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "What is gender socialisation?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Learning gender roles and expectations set by society<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "sociology",
    "subject": "Sociology",
    "titleEn": "Mead believed that the self develops through?",
    "titleSec": "സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Sociological Theory & Social Institutions",
    "backEn": "<strong>Answer:</strong> Interaction, communication, and role-taking<br>Essential principle established under Sociology Comprehensive Assessment · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: സോഷ്യോളജി സമഗ്ര പരീക്ഷ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What is the central concern of ethics?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> The study of right and wrong conduct<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Which branch of ethics studies the meaning of moral terms?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Meta-ethics<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What is the primary aim of normative ethics?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Establish standards for right action<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What does applied ethics deal with?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Practical moral problems<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Who is closely associated with classical utilitarianism?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Jeremy Bentham<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Utilitarianism evaluates actions mainly by their?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Consequences for overall well-being<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What is immanuel kant associated with?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Deontological ethics<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "A categorical imperative is a moral requirement that?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Applies unconditionally<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What does virtue ethics mainly focus on?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Character and virtues<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Which philosopher is strongly linked with classical virtue ethics?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Aristotle<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Ethical egoism argues that people should?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Act in their own self-interest<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Moral relativism generally suggests that moral judgments?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> May depend on cultural or individual frameworks<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Which value is most directly opposed to dishonesty?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Integrity<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What is the principle of justice is primarily concerned with?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Fairness and equitable treatment<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What is meant by beneficence?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Acting to promote others' welfare<br>welfare'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Non-maleficence is commonly expressed as?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Do no harm<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Respect for autonomy requires us to?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Respect informed choices of persons<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Informed consent means participants?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Voluntarily agree after receiving relevant information<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Academic plagiarism involves?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Presenting another person's work as one's own<br>s work as one's own'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What is meant by confidentiality in professional ethics?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Protecting private information appropriately<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "An ethical leader should?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Act fairly and accept accountability<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Which is an example of a conflict of interest?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> A decision-maker benefits personally from an official decision<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Whistleblowing is generally the act of?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Reporting serious wrongdoing<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Which approach judges actions by duties and rules?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Deontology<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "The utilitarian principle of greatest happiness seeks to?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Promote the greatest overall well-being<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What does aristotle's concept of the 'golden mean' refer to?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> A balanced virtue between extremes<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "The ethical idea of the Golden Rule is to?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Treat others as you would wish to be treated<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Moral reasoning involves?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Giving reasons to support moral judgments<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Which is a key feature of a moral dilemma?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Competing moral duties or values<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Integrity is best shown by?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Acting consistently with ethical principles<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Empathy helps ethical decision-making by?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Helping us understand others' perspectives<br>perspectives'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Discrimination is ethically problematic because it?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Treats people unfairly based on irrelevant characteristics<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Human rights are best understood as?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Basic rights and freedoms belonging to people<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Social responsibility requires individuals and organizations to?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Consider effects on society and stakeholders<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Environmental ethics considers duties toward?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Nature, ecosystems, and future generations<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What is the main objective of sustainable development?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Meet present needs without compromising future generations<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Animal ethics examines?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Moral consideration owed to non-human animals<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Research ethics requires researchers to?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Be honest, protect participants, and report methods responsibly<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What is meant by fabrication in research?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Making up data or results<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Falsification in research involves?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Manipulating materials, processes, or data misleadingly<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "A fair assessment should be based on?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Relevant and consistently applied criteria<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Professional competence includes?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Maintaining appropriate knowledge and skills<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "What is meant by accountability?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Being answerable for decisions and actions<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Transparency supports ethics by?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Making relevant processes and decisions understandable<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Which action demonstrates respect in disagreement?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Listening and responding without personal attacks<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Freedom of expression is ethically balanced with?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Others' rights, safety, and responsibilities<br>rights, safety, and responsibilities'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Ethical decision-making should consider?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Facts, values, stakeholders, and consequences<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "A stakeholder is?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> A person or group affected by a decision<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Justice as fairness asks decision-makers to?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Use fair procedures and consider equitable treatment<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Care ethics emphasizes?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Relationships, care, and responsiveness to needs<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Which theory emphasizes universal duties and respect for persons?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Kantian ethics<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Psychological egoism is the claim that people?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> In fact act from self-interest as a matter of motivation<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Altruism involves?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Concern for the welfare of others<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Moral courage is the ability to?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Do what is ethically right despite pressure or risk<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "A bribe is ethically troubling because it?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Improperly influences a decision through an undue benefit<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Fair use of power requires?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Avoiding abuse and respecting legitimate limits<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Digital ethics includes concerns about?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Privacy, security, fairness, and responsible technology use<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Algorithmic bias occurs when?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> A system produces unfair outcomes for some groups<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "Data privacy requires?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Responsible collection, use, and protection of personal information<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Fundamentals of Ethics",
    "titleEn": "An ethical response to discovering an error in a report is to?",
    "titleSec": "നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Fundamentals of Ethics · Fundamentals of Ethics · Core Concepts",
    "backEn": "<strong>Answer:</strong> Correct it promptly and communicate the correction<br>Essential principle established under Fundamentals of Ethics · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: നീതിശാസ്ത്രത്തിന്റെ അടിസ്ഥാന തത്ത്വങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "From which ancient language is the word 'education' derived?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Latin word<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Socrates education is an intellectual?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Midwifery<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The philosophical view that all that exists is physical?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Materialism<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The concept of Eudaimonia is related to?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Aristotle<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "“Education is not a preparation for life but life itself” who said it?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Dewey<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Western educational philosophy was laid in ancient?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Greek<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which philosophy of education posits that a child is not a miniature adult, but an evolving being with distinct stages of growth?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Naturalistic<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to which major educational philosophy is the primary aim of education the realization of personality and spiritual ideals?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Idealism<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which quintessential teaching method was pioneered by Socrates and refined by Plato and Hegel?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Dialectical method<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to which Indian thinker is education 'the manifestation of the perfection already in man'?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Vivekananda<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The most evocative term in Vivekananda’s educational lexicon is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Man-making<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Aurobindo’s philosophy of education is a call for a?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Spiritualized humanity<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which dominant, passive instructional model does Sri Aurobindo's Integral Education challenge?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Banking concept<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to who, the daily engagement in a productive craft provided rigorous and purposeful physical training?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Gandhi<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is meant by the word education is derived from the latin term educare, which?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> To lead out or draw forth<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Plato, education is primarily the process of?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Turning the soul toward the light of truth<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Aristotle believed that the main aim of education is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Development of sound mind in sound body<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The term education is derived from the Latin words educare and educere, which primarily mean?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> To nourish and to lead out<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "In Democracy and Education, John Dewey argues that education is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Life itself and rooted in experience<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The concept of conscientization in education is mainly associated with?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Paulo Freire<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to UNESCO, one of the major contemporary aims of education is to promote?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Peace and sustainable development<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The primary aim of the philosophy of education is to?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Critically examine the aims, values and foundations of education<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What does the normative function of the philosophy of education mainly deal with?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Setting educational standards and ideals<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The analytical function of philosophy of education primarily involves?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Examining logical inconsistencies in educational arguments<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The philosophy of education helps in curriculum development by?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Providing a rational basis for selecting subjects and content<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which best describes the primary functions of philosophy?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> To critically examine fundamental questions about reality, knowledge, and values<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The branch of philosophy that deals with the nature and limits of knowledge is called?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Epistemology<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Who is known for developing the method of systematic questioning known as the Socratic method?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Socrates<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The scope of philosophy includes all of the following except?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Manufacturing of industrial goods<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Idealism, the ultimate aim of education is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Development of the mind and realization of the self<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Who is regarded as an important philosopher associated with Idealism in educational philosophy?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Plato<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Sri Aurobindo's concept of education emphasizes?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Integral development of the individual<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is considered the most important aim of idealistic education?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Self-realization or exaltation of personality<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Who is regarded as the founder of the kindergarten system?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Friedrich Froebel<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is emphasized by idealism in education?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Mental, moral and spiritual development<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which teaching method did Plato consider the best method of learning?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Dialectic method<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to idealism, the teacher is primarily regarded as?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> A spiritual and moral guide<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Naturalism, the ultimate reality is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Nature<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Rousseau, the best teacher of the child is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Nature<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which method of education is strongly associated with Rousseau's Naturalism?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Play-way method<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Naturalism, the senses are regarded as?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> The gateway to knowledge<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is an important aim of Naturalistic education?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Adjustment with the environment<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is the slogan “Back to Nature” associated with in education?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Naturalism<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which type of curriculum is preferred by Naturalism?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Child-centered curriculum<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is emphasized in Naturalistic education?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Learning through experience<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which book by Rousseau is associated with his educational philosophy?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Emile, or On Education<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Rousseau’s concept of “negative education” emphasizes?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Minimal interference in the child’s natural development<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Naturalism, the central position in education is given to the?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Child<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which method does Naturalism emphasize for acquiring knowledge?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Learning by doing<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is emphasized by Naturalism in education?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Freedom, initiative and self-expression<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Naturalistic education primarily emphasizes the development of the child through?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Direct experience with nature and environment<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is meant by the term “pragmatism” is derived from the greek word pragma, which?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Activity, practice or action<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Who is considered the father of pragmatism in education?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> John Dewey<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to pragmatism, the curriculum should primarily be?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Child-centered, dynamic and flexible<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to John Dewey, education is primarily?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Reconstruction of experience<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to pragmatism, the role of the teacher is primarily that of a?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Guide and facilitator<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to pragmatism, discipline develops mainly through?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Active participation in group and purposeful activities<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to John Dewey, education is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Life itself<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to pragmatism, the school should function as a?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Miniature society<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which principle of curriculum development emphasizes combining subjects to form a cohesive body of knowledge?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Principle of integration<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is among the five layers of existence, the physical layer known as?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Anamaya (Annamaya)<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is among the five layers of existence, the vital layer known as?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Pranamaya<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is among the five layers of existence, the mental layer known as?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Manomaya<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Indian educational philosophy, the highest aim of education is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Self-realization (Atmajnana)<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which concept refers to the realization of the true nature of the self in Indian educational philosophy?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Atmajnana<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which sequence represents the three stages of learning leading towards deeper understanding?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Shravana → Manana → Nididhyasana<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "In Indian educational philosophy, the integration of spiritual and secular knowledge is expressed through?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Paravidya and Aparavidya<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "For Vivekananda, the ultimate test of education was?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Character<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Whose message was a radical reimagining of education which he famously termed “man-making”?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Vivekananda<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Swami Vivekananda, the true aim of education is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Manifestation of the perfection already within the individual<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Vivekananda, education as character-making primarily develops?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Strength of mind, intellect, character, and self-reliance<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is meant by according to sri aurobindo, integral development?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Nurturing every part of the human being — physical, vital, mental and spiritual<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The aim of physical education in Aurobindo's system is to?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Create a strong, harmonious and disciplined body fit to express higher consciousness<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Aurobindo distinguishes the true development of the mind from rote learning by emphasizing?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Concentration, clarity, creativity, intuition and inner silence<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The statement “Nothing can be taught” implies that the teacher should?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Act as a guide who helps the child discover knowledge within<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Education according to the nature of the child means that?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Each child's unique tendencies and inner law of development must be respected<br>s unique tendencies and inner law of development must be respected'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Why did Aurobindo stress the primacy of the mother tongue as the medium of instruction?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> It enables natural, spontaneous expression of thought and originality<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Sri Aurobindo's philosophy, education is primarily understood as?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> A conscious process of integral self-development<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What does the integral aspect of education in aurobindo's thought refer to?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Developing the body, emotions, mind and inner spiritual core together<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Sri Aurobindo, why must the mind be consulted in its growth?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> To respect the learner’s natural development, interests and capacities<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is the role of the teacher according to Sri Aurobindo’s educational philosophy?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Guide, helper and facilitator<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which best represents Sri Aurobindo’s view of mental education?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Development of mental faculties such as reasoning, imagination, memory and creativity<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Sri Aurobindo, education should proceed?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> From near to far, from what is to what shall be<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Gandhi, the primary aim of education is to?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Develop morally strong, socially responsible and spiritually awakened individuals<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Gandhi, “knowledge without character” is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Dangerous<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is central to Gandhian education as service?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Welfare of society and the common good<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "In Gandhian education, productive work and manual labour primarily help develop?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Dignity of labour and self-reliance<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Gandhi, the teacher should primarily act as a?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Moral guide and role model<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Gandhian education, true service should be?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Voluntary and based on inner moral conviction<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is meant by in gandhian educational philosophy, true swaraj primarily?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Self-rule and mastery over one's own desires<br>s own desires'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The integration of head, heart and hand in Gandhian education signifies?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Holistic development of intellectual, moral and practical faculties<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Gandhi emphasized education through the mother tongue mainly to?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Promote cultural self-respect and deeper understanding<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "In Gandhian philosophy, productive manual work in education is intended to?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Promote dignity of labour and economic self-reliance<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Mahatma Gandhi, self-discipline in education primarily aims at?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Developing inner control aligned with truth and nonviolence<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The integration of productive manual work in education helps cultivate?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Habits of patience, responsibility and self￾control<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "In Gandhian basic education or Nai Talim, the center of the curriculum is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Craft or productive work<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "The spiritual foundation of Gandhian education is primarily based on?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Truth and nonviolence<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Mahatma Gandhi, vocational education should primarily aim at?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Integrating productive work with moral and intellectual development<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Gandhian vocational education promotes economic self-reliance in order to achieve?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Swaraj or self-rule<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Mahatma Gandhi, the primary aim of women's education was to?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Promote moral, intellectual and social empowerment<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Gandhi's concept of Nai Talim emphasized?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Craft-centered and productive work-based education<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Gandhi believed that educating women would have a multiplying effect on society because?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Women were the primary educators of children at home<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "In Gandhian philosophy, women were considered especially suited for nonviolent resistance because of their?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Moral courage and patience<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Gandhi opposed the blind imitation of Western education for women because he believed education should?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Be rooted in cultural values and moral development<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to which educational philosopher is the ultimate aim of progressive education the cultivation of democratic citizenship?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Dewey<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Plato, education is essentially?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Turning the soul towards the light of truth<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Who emphasized education as growth and reconstruction of experience?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> John Dewey<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which branch of philosophy is concerned with moral values and the principles of right conduct?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Ethics<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Swami Vivekananda, the essence of education is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Concentration of mind<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Who is considered the prominent proponent of Naturalism in education?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Jean-Jacques Rousseau<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is an important aim of education according to Naturalism?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Development according to the child’s nature<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Rousseau, what should be the role of the teacher?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Non-interfering observer and facilitator<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Pragmatism, the most important method of learning is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Learning by doing<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Which teaching method is given significant importance by pragmatism?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Learning by doing<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What is among the five layers of existence, the spiritual layer known as?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Anandaya (Anandamaya)<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "What philosophical and metaphysical tradition serves as the foundation of Swami Vivekananda's educational thought?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Advaita<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "How should the vital or life force be treated according to Aurobindo?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Educated and sublimated through art, music and disciplined activity<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "Sri Aurobindo describes the human being as a “transitional being” to emphasize that?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Humans are evolving towards a higher spiritual consciousness<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Mahatma Gandhi, the ultimate aim of education is?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Liberation of the individual at personal and social levels (Harmonious development)<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "In Gandhian philosophy, true discipline should be?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Voluntary and internally motivated<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "philosophy",
    "subject": "Philosophy of Education",
    "titleEn": "According to Gandhi, the relationship between intellectual and vocational learning should be?",
    "titleSec": "വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Philosophy of Education · Philosophy of Education · Core Concepts",
    "backEn": "<strong>Answer:</strong> Integrated and correlated<br>Essential principle established under Philosophy of Education · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: വിദ്യാഭ്യാസ ദർശനം · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What was the primary nature of the indian economy during the pre-independence period?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Agrarian<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Who proposed “Drain of Wealth” theory?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Dadabhai Naoroji<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What was mainly affected by deindustrialisation in india during british rule?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Handicrafts and Cottage Industries<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "One major feature of the Indian economy before Independence was?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Widespread poverty<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The primary objective of British economic policies in India was to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Serve British economic interests<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The main objective behind adopting economic planning in India after Independence was to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Achieve rapid economic growth and social justice<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is the model of economy adopted by india during the planning era known as?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Mixed Economy<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The Green Revolution in India was mainly associated with the increase in production of?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Wheat and Rice<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Public Sector Undertakings (PSUs) were mainly established to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Control strategic and heavy industries<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "One major limitation of economic planning in India was?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Bureaucratic delays and License Raj<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The New Economic Policy introduced in 1991 is commonly known as?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> LPG Reforms<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does the macroeconomic reform acronym LPG stand for in India?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Liberalisation, Privatisation, Globalisation<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does liberalisation mainly refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Reducing government controls and regulations<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is meant by privatisation?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Transfer of ownership from government to private sector<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "One major objective of Globalisation is to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Increase trade and investment across countries<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does real income mainly refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Income adjusted for inflation<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "How is per capita income calculated?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> National Income ÷ Population<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Purchasing Power decreases when?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Inflation rises<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is a limitation of using income as the sole indicator of development?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Ignores income inequality<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Real GDP is preferred over Nominal GDP because it?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Adjusts for price changes<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Life Expectancy mainly indicates?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Average years a person is expected to live<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Infant Mortality Rate measures?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Deaths of infants under one year per 1,000 births<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does literacy rate refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Percentage of people who can read and write<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Skill Development mainly helps in?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Improving employability and productivity<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Health and Education together contribute to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Human Capital Formation<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Who is considered a hidden form of unemployment common in agriculture?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Disguised unemployment<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Income inequality can hinder economic development because?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> It reduces aggregate demand and social cohesion<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Population pressure becomes a problem when?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Population grows faster than available resources and infrastructure<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is an example of infrastructure deficit?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Lack of sufficient roads, electricity, and hospitals<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does regional imbalance in economic development refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Unequal growth and development between regions<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which statements correctly distinguishes economic growth from economic development?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Economic growth measures the increase in production, while economic development includes improvements in living standards.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Why is understanding the difference between economic growth and economic development important?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Because it helps evaluate whether economic expansion is improving citizens’ lives.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which best represents economic growth?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Rise in GDP and total production of goods and services<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is NOT a focus of economic development?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Increasing GDP alone<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which statement correctly distinguish between economic growth and economic development?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Economic growth measures the increase in production while economic growth includes improvement in the living standards.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does the phrase “growth is about numbers, development is about life” imply?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Economic growth measures output while development measures the improvement in quality of life.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What was the primary nature of the indian economy during the pre-independence period?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Agrarian<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Who proposed “Drain of Wealth” theory?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Dadabhai Naoroji<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What was mainly affected by deindustrialization in india during british rule?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Craft and cottage industries<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "One major feature of Indian economy before independence was?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Widespread poverty<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The primary objective of British economic policies in India was to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Serve British economic interests<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The main objective behind adopting economic planning in India after independence was to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Achieve rapid economic growth and social justice<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is the model of economy adopted by india during the planning era known as?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Mixed economy<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The Green Revolution in India was mainly associated with the increase in the production of?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Wheat and rice<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The public sector undertakings (PSUs) were mainly established to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Control strategic and heavy industries<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "One major limitation of economic planning in India was?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Bureaucratic delay and license system<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The New Economic Policy introduced in 1991 is commonly known as?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> LPG Reform<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does the macroeconomic reform acronym LPG stand for in India?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Liberalization, Privatization, Globalization<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does liberalization mainly refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Reducing government control and regulations<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Life expectancy mainly indicates?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Average years a person is expected to live<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Infant mortality rate measures?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Deaths of infants under one year per thousand births<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does literacy rate refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Percentage of people who can read and write<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Skill development mainly helps in?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Improving employability and productivity<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Health and education together contribute to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Human capital formation<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Income inequality can hinder economic development because?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> It reduces aggregate demand and social cohesion<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Population pressure becomes a problem when?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Population grows faster than available resources and infrastructure<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "NITI Aayog was established in the year?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 2015<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The primary function of RBI is to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Control money supply and regulate banking<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The Finance Commission is constituted under which Article of the Indian Constitution?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Article 280<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Public sector enterprises are mainly established to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Promote social welfare and strategic economic development<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which institution ensures enforcement of law and protection of property rights in the economy?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Judiciary<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "MGNREGA primarily aims to provide?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Guaranteed rural employment<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Under MGNREGA, rural households are guaranteed a minimum of?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 100 days<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The Public Distribution System mainly ensures?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Food security<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which best defines poverty in a multidimensional context?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> A state of deprivation that limits an individual's capacity to attain a minimally acceptable standard of living<br>s capacity to attain a minimally acceptable standard of living'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "According to Amartya Sen’s ‘Capability Approach,’ what is the primary focus when measuring poverty?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> The ability to lead a life that one has reason to value<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which statements about absolute and relative poverty is true?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Absolute poverty uses fixed income thresholds that do not change over time.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The Multidimensional Poverty Index (MPI) considers Which dimensions?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Health, education, and living standards<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What distinguishes economic poverty from capability poverty?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Economic poverty addresses income levels, whereas capability poverty relates to the ability to lead a valued life.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which organization is responsible for the calculation of the poverty line in India using data collected by the National Sample Survey Office (NSSO)?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> NITI Aayog<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is the primary reason for using consumption expenditure as a measure for estimating poverty rather than income levels?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Consumption patterns are more stable compared to income.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What method was introduced by the NSSO to address the limitations of the Uniform Reference Period (URP) for estimating poverty?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Mixed Reference Period (MRP)<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "According to the Tendulkar Committee recommendations, which approach should be used for poverty estimation?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Consumption expenditure-based approach<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What was a significant limitation of the URP method in estimating poverty?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> It tends to underestimate total consumption expenditure.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does the Human Development Report (1997) primarily argue about traditional poverty lines?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> They can be manipulated by governments to show declining poverty levels.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "According to the Multidimensional Poverty Index (MPI), Which dimensions is NOT included?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Housing quality<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "How is the Multidimensional Poverty Index (MPI) calculated?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> By summing the deprivations across its three dimensions and dividing by total indicators.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which statements about the National Multidimensional Poverty Index (NMPI) in India is TRUE?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> It uses a dual-cut-off counting method based on the Alkire-Foster methodology.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What significant change in poverty levels in India was reported in the Progress Review 2023?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> A decline in the poverty headcount ratio from 29.17% in 2013-14 to 11.28% in 2022-2023.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which methodology was adopted by the Indian government in 2005 to measure poverty?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> The Tendulkar methodology<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "According to the 2011 estimates of the World Bank, what percentage of the Indian population lived below the poverty line of $1.25 per day?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 23.6%<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What percentage of India's GDP is spent on health, which is significantly lower than that of China?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 1%<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is the current definition of extreme poverty according to the World Bank's International Poverty Line?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> $2.15 per person per day<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which states showed the highest percentage reduction in the rural poverty headcount ratio between FY12 and FY23 according to the RBI study?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Himachal Pradesh<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which programmes was initiated in the 1970s as a direct approach to combat poverty in rural areas of India?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Crash Scheme for Rural Employment (CSRE)<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The Integrated Rural Development Programme (IRDP) was initially launched in which year?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 1978-79<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What was the primary objective of the Rural Landless Employment Guarantee Programme (RLEGP) when it was launched?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> To expand employment opportunities for rural landless individuals<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which statements best describes the outcome of the IRDP according to evaluations?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> It was restructured and renamed due to its lack of effectiveness.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is a primary characteristic of high-poverty groups in India?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Extremely low and unstable incomes<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which factor contributes significantly to the high poverty rates among Scheduled Tribes (STs) in India?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Geographic isolation from basic services<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "In the context of high-poverty groups, what does \"binding liquidity and credit constraints\" refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> The inability to smooth consumption during economic shocks<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is a significant barrier to employment faced by Scheduled Castes (SCs) in India?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Discrimination based on caste status<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which statements about rural poverty in India is true?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> The majority of rural poor are women and children.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Human poverty includes deprivation in?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Health, education and living standards<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Poverty gap measures?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Shortfall of poor from poverty line<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Multidimensional Poverty Index (MPI) primarily measures poverty based on?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Health, Education and Living Standards<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is NOT a dimension used in the Global MPI?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Stock market participation<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which Sustainable Development Goal (SDG) is directly related to eliminating poverty?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> SDG 1 – No Poverty<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Income-based measurement of poverty classifies a household as poor when?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Its income falls below the predetermined poverty line<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "One major advantage of income-based poverty measurement is that it?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Is directly linked to labor market earnings<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Who chaired the Tendulkar Committee?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Suresh D. Tendulkar<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which NSSO round did Rangarajan primarily use?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 68th (70th as context in option D)<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "A primary objective of Rangarajan was to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Update poverty lines reflecting contemporary consumption and urban costs<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Rangarajan estimate for poverty ratio in 2011–12 (as given)?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 29.5% (given as 30% / option D variant)<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What key differences between these two committees were highlighted?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Rangarajan updated estimates using recent data and emphasised urban costs<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Key difference highlighted (Tendulkar vs Rangarajan)?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Rangarajan updated estimates using recent data and emphasised urban costs<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which statements about rural poverty in India is correct?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Rural poverty is mainly driven by dependence on agriculture and low productivity.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does poverty ratio refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> percentage of population below poverty line<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "How many days of guaranteed wage employment per year does MGNREGA provide to rural households?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 100<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which programme was launched to provide guarantee-based employment in rural India?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> MGNREGA<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is an example of a multidimensional aspect of poverty?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Access to education, health, sanitation, and housing<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which government program launched post-2014 primarily aimed at providing affordable housing to the urban poor?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> PMAY-Urban<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "During Phase II (1980s–1990s) of poverty reduction in India, which program primarily contributed to rural employment?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Jawahar Rozgar Yojana (JRY)<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is a key limitation of income-based measurement in developing countries like India?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Large informal sector leads to underreporting of income<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Income-based poverty measurement may overestimate poverty because it does NOT consider?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Consumption smoothing through borrowing and savings<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The international poverty line expressed in PPP dollars is mainly used by which organisation?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> World Bank<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Under the Uniform Reference Period (URP), the recall period used for all consumption items is?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 30 days<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The Mixed Reference Period (MRP) method uses a 365-day recall period primarily for?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Infrequently purchased goods such as clothing and durable<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The major limitation of URP is?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Underestimation of low-frequency consumption items<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does absolute poverty refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Inability to meet minimum basic needs<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which component of poverty is most directly linked to intergenerational poverty?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Education<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The Headcount Ratio measures?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Proportion of population below poverty line<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Poverty Gap Index primarily measures?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Distance of the poor from the poverty line<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Poverty measured in terms of minimum subsistence requirement known as?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Absolute poverty<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which economist developed the capability approach to understanding poverty?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Amartya Sen<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Poverty is often described as a deprivation of?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Basic capabilities and opportunities<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Absolute poverty focus on?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Minimum living standards required for survival<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does chronic poverty refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Long term persistent poverty<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Multidimensional Poverty Index (MPI) primary measures poverty based on?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Health, Education and Living Standards<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The global Multidimensional Poverty Index (MPI) is published by?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> United Nations Development Programme (UNDP) and Oxford Poverty and Human Development Initiative (OPHI)<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does income inequality primarily refer to in an economy?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> A situation where a small section of the population has a much larger share of income than the majority.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "According to the study by Thomas Piketty and Lucas Chancel, what was the share of national income for the top 1% in 2013-14?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 21.7%<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which factors is NOT a cause of income inequality in India as discussed in the provided material?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Government policies that intentionally reduce wealth concentration.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "How did economic reforms initiated in India from the 1980s onwards impact income inequality?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> They led to a dramatic increase in income inequality favouring the wealthy.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What role does the government play in perpetuating income inequality according to the discussed material?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> The government supports private investments that favor wealthy individuals.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does the Gini coefficient measure in the context of income distribution?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> The degree of income inequality within a population<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is true regarding the Lorenz curve?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> A curve that lies above another indicates a more equal income distribution.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which methods is used to calculate the range of income inequality?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> The difference between the lowest and highest income observations.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which statement best describes the McLoone Index?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> It divides the sum of all incomes below the median by the median income.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is a significant limitation of the Gini coefficient?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> It does not account for demographic variations among subgroups.<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is the primary focus of the Ahluwalia-Chenery Welfare Index?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Assessing income distribution and social welfare<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "In the context of the Ahluwalia-Chenery Welfare Index, what can a rising GNI per capita potentially indicate?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Disproportionate benefits to the wealthy while the poor remain unaffected<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "When calculating the weighted index of social welfare using quintiles, if the weights add up to less than one, what is the implication?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> It indicates a flaw in the measurement of income distribution<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "How does the poverty-weighted index differ from the GNI-weighted index in its analysis?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> It places higher importance on the income growth of the lowest income groups<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Based on the Ahluwalia-Chenery Welfare Index, which scenario would most likely result in a higher social welfare index?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> A country where income grows equally across all quintiles<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which index is commonly used to measure income inequality?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Gini Coefficient<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does income inequality refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Differences in earnings and income distribution<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "According to the World Inequality Database, the income share of the top 1% in India has?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Increased sharply<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which organization publishes the Human Development Report?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> UNDP<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Wealth inequality refers to unequal distribution of?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Assets and property<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which programmes provides a legal guarantee of wage employment in rural areas?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Mahatma Gandhi National Rural Employment Guarantee Act<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Under Pradhan Mantri Mudra Yojana, loans up to ■50,000 are classified under?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Shishu<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The primary objective of the Mahatma Gandhi National Rural Employment Guarantee Act is to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Provide 100 days of guaranteed wage employment to rural households<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Pradhan Mantri Kaushal Vikas Yojana mainly focuses on?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Skill training and certification for youth<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is a major objective of the Skill India Mission?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Enhancing employability through industry-relevant skills<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which type of taxation helps reduce income inequality?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Progressive taxation<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is the main objective of the public distribution system (pds)?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Provide subsidized food grains to the poor<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which government policy focuses on providing financial assistance to farmers?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> PM-KISAN<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The main objective of social welfare programmes is to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Promote social justice and reduce poverty<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "A straight diagonal line in the Lorenz Curve indicates?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Perfect equality<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Reducing income inequality is important for?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Inclusive and balanced development<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "High income inequality can lead to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Poverty and social unrest<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is a common daily life example of income inequality?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Salary gap between jobs<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Rural–urban income gap occurs mainly because?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Urban areas have more employment opportunities<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which sector generally provides the lowest and most uncertain income in India?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Agriculture<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The digital divide contributes to the urban–rural income gap because?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Urban areas usually have better access to digital tools and internet<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Migration from rural to urban areas usually happens because?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Better employment and income prospects<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which sector is the main source of income in most rural areas?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Agriculture<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "One major reason urban areas have higher income levels is?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Better infrastructure and job opportunities<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Gender inequality contributes to income inequality mainly through?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Wage gaps and limited career opportunities<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does the urban–rural divide mainly refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Difference in income and opportunities between cities and villages<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Gender inequality contributes to income inequality because?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Women often receive lower wages and fewer opportunities<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which helps reduce income inequality?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Inclusive growth and welfare policies<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "In the Lorenz Curve graph, the horizontal axis represents?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Percentage of population<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "The Lorenz Curve is mainly used to show?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Income or wealth distribution<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is meant by regional imbalance in development?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Unequal economic progress among different regions<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which factor directly limits earning potential due to lack of job opportunities?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Unemployment<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Educated unemployment is characterised by?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> People with formal education being unable to find suitable jobs<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "A person is considered unemployed only if he/she?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Is actively seeking work<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which type of unemployment occurs when workers are willing to work but cannot find any job at all?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Open unemployment<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Disguised unemployment is mainly found in?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Agriculture sector<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Labour Force consists of?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Employed + Unemployed persons seeking work<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is meant by underemployment?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Working below one’s skill or fewer hours than desired<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Seasonal unemployment occurs due to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Climate and seasonal nature of work<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "People who are students, homemakers, or not seeking jobs belong to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Not in Labour Force<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "A person is considered unemployed if they are?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Is willing and able to work but cannot find a job<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Open unemployment refers to a situation where?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> People are willing to work but cannot find any job<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Disguised unemployment is mainly found in which sector?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Agriculture and rural household enterprises<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "How is the unemployment rate calculated?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Unemployed / Labour Force × 100<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Worker Population Ratio (WPR) measures?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Employed persons as a percentage of working age population<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is one major consequence of unemployment?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Wastage of human resources and lower economic growth<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which type of unemployment is hidden and not easily visible?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Disguised unemployment<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What does working age population generally refer to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 15–59/64 years<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Frictional unemployment occurs because?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Workers are transitioning between jobs or entering the labour market<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Structural unemployment arises primarily due to?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Mismatch between workers’ skills and job requirements<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What is NOT included in unemployment?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> A retired person not seeking work<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What was the main contribution of V. M. Dandekar and N. Rath's 1971 study to poverty estimation in India?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Suggested a poverty line based on 2250 calories per day<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Which committee recommended a poverty line based on nutritional requirements of 2400 calories in rural areas and 2100 calories in urban areas?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Alagh Committee<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "Under the 1993 Lakdawala Committee methodology, which price index was used for updating urban poverty lines?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Consumer Price Index for Industrial Workers (CPI-IW)<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "According to the Rangarajan Committee, what percentage of the rural and urban populations were estimated to be below the poverty line in 2011-12?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> 30.9 percent rural and 26.4 percent urban<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Economics & Indian Economy",
    "titleEn": "What methodology did the Rangarajan Committee use to provide a more precise estimate of the poverty line compared with earlier committees?",
    "titleSec": "ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Economics & Indian Economy · Development Issues in Indian Economy · Core Concepts",
    "backEn": "<strong>Answer:</strong> Modified Mixed Recall Period consumption expenditure data<br>Essential principle established under Development Issues in Indian Economy · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: ഇന്ത്യൻ സമ്പദ്‌വ്യവസ്ഥയിലെ വികസന പ്രശ്നങ്ങൾ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What market conditions occur when quantity supplied exceeds quantity demanded, and when quantity demanded exceeds quantity supplied?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Surplus; shortage<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "The price of a good will tend to rise when?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> A temporary shortage at the current price occurs (assuming no price controls are imposed)<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What fundamental relationships govern market supply, demand, and equilibrium price?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The intersection of the supply and demand curves shows the equilibrium price and quantity in a market.; A surplus is a situation where quantity supplied exceeds quantity demanded; A shortage is a situation where quantity demanded exceeds quantity supplied.; Shortages and surpluses set in motion actions by many buyers and sellers that will move the market toward the equilibrium price and quantity unless otherwise prevented.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What occurs when a shock disrupts the existing market equilibrium?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The demand curve shifts, leading to a new equilibrium.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "A positive demand shock typically results in Which outcomes?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> An increase in the quantity of goods consumed at a higher price.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Which best describes a negative supply shock?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> A situation where production is disrupted, causing a decrease in supply and an increase in prices.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "If consumer income suddenly decreases, What is the likely effect on the demand curve?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The demand curve shifts inward, indicating decreased demand.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "When technological advancements improve production efficiency, what is the expected impact on supply?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The supply curve shifts right, leading to lower prices.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is a policy that governments use to shift supply curves?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Taxation<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is the primary effect of licensing laws on the labor market?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> They raise the average quality of the workforce.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "A quota on imports is likely to result in Which market conditions?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Higher prices and reduced quantities of the imported goods<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What happens when a binding price floor is set above the equilibrium wage?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> It results in a surplus of labor.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Which statements accurately describes why supply and demand might not equal each other?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Government interventions can influence supply or demand.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is a preference map primarily used for in consumer choice theory?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> To illustrate a consumer's preferences over combinations of two goods<br>s preferences over combinations of two goods'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Which statements best describes consumer preferences?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> They vary from person to person based on individual tastes and experiences<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "In the context of preference maps, what does the term 'indifference curve' refer to?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> A curve representing combinations of goods providing the same level of satisfaction<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What occurs at the consumer equilibrium point on a preference map?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The consumer maximizes satisfaction within their income limits<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "How do changes in the price of goods affect the budget line in preference maps?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The budget line rotates, leading to changes in consumption<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What does the Marginal Rate of Substitution (MRS) indicate in consumer theory?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The rate at which a consumer is willing to substitute one good for another while keeping total utility constant<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "According to the ordinal approach to utility, how can consumers express their preferences?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> By ranking preferences among different bundles of goods<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is a property of indifference curves?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Each point on the curve represents the same level of satisfaction<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is the significance of the Marginal Rate of Substitution (MRS) in demand theory?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> It forms the basis for understanding consumer equilibrium when MRS equals the ratio of prices<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "How is the Marginal Rate of Substitution mathematically expressed?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> MRSxy = MUx / MUy<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What does a budget constraint represent?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The maximum amount of goods a consumer can purchase with a fixed income.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "How does a change in price affect the budget constraint?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> It rotates the budget line and alters the slope.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What happens to the budget line when a consumer's income increases?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The budget line shifts outward, expanding the opportunity set.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Why is the slope of the budget constraint important?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> It shows the opportunity cost of one good in terms of another.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is NOT a limitation of budget constraint analysis?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Ignores the effect of market fluctuations.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is the primary question that consumer theory seeks to answer regarding consumer behaviour?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> How does a consumer choose the best affordable bundle of goods?<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Which statements best describes the principle of optimal bundles in consumer choice?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Optimal bundles lie on the convex sections of indifference curves.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Why is the convexity of indifference curves significant in consumer choice theory?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> It reflects a diminishing marginal rate of substitution (MRS).<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What does the statement 'buying where more is better' imply about consumer preferences?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Consumers will choose combinations of goods that maximize their satisfaction.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "If a consumer's budget line shifts outward due to an increase in income, what is the expected outcome?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The consumer will have access to higher indifference curves.<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What kind of relationship exists between demand for a good and price of its substitute goods?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Direct<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What kind of relationship exists between price of a good and demand of its complementary good?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Inverse<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What kind of relationship exists between income and demand of inferior good?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Inverse<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What kind of relationship exists between income and demand of a normal good?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Direct<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "How is law of demand expressed functionally?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> DX = f (PX), ceteris paribus<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is the mathematical sign of the slope of a downward-sloping demand curve?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Negative<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "According to the income effect, why does a fall in a good's price cause quantity demanded to rise?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Real income<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "According to the substitution effect, why does a consumer demand more of a good when its price falls relative to substitutes?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Relative price of other goods<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What are the defining economic characteristics of a Giffen good?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> An inferior good; One with high negative income elasticity of demand; Consumed by low-paid workers<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What defines a Veblen good in microeconomic consumer theory?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Good of status; Consumed by very high-income group; Like diamonds<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Which factors uniquely influence aggregate market demand rather than an individual's demand?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Number of consumers in the market; Age and sex composition of population; Distribution of income<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What are the major recognized exceptions where the Law of Demand does not hold?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Emergency; Expectation of price rise; Conspicuous goods<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "How is a contraction of demand represented graphically along a demand curve?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Upward movement on the demand curve<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "How is an increase in demand represented graphically with respect to the demand curve?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Rightward shift of the demand curve<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "How is an expansion of demand represented graphically along a demand curve?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Downward movement on the demand curve<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "When same units are demanded at a higher price, it shows?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Increase in demand<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "When there is fall in the price of complementary good and rise in the price of substitute good, it shows?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Increase in demand<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "How does a decrease in consumer income affect the demand curve for an inferior good?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Shifts to the right<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "If an increase in the price of Good Y causes demand for Good X to rise, how are the two goods related?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Substitutes<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What three essential components must be stated for any economic demand statement to be complete?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Price of the good; Quantity of the good; Period of time<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What underlying market variables are assumed to remain constant (ceteris paribus) in the Law of Supply?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Price of related goods; State of technology; Cost of production<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is the mathematical sign of the slope of an upward-sloping supply curve?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Positive<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "How is the market supply curve derived from individual firm supply curves?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Horizontal<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Movement along the supply curve is also called?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Change in quantity supplied<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "An upward movement along a supply curve shows?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Expansion in supply<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "A rightward shift in supply curve shows?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Increase in supply<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "When less quantity is supplied at a lower price, it shows?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Contraction in supply<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "When same quantity is supplied at a higher price, it shows?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Decrease in supply<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "When market demand and supply both increase, which change is indeterminate?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The change in equilibrium price<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "When both demand and supply increase, what happens to the equilibrium quantity?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> It always increases<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "If the market supply curve shifts to the left, what is the expected effect on the equilibrium price?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The equilibrium price increases<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Why do indifference curves slope downward from left to right?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> To show that a consumer gives up some of one good to obtain more of another<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What does a higher indifference curve represent?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> A combination of goods that gives higher satisfaction<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Which property of indifference curves reflects a preference for a mix of goods?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Convexity to the origin<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "If two indifference curves intersect, which axiom is violated?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Transitivity<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is NOT an assumption of indifference-curve analysis?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Utility is measurable in numerical values<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "How does the law of equi-marginal utility help consumers maximize total utility?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> It balances marginal utility per unit of money across goods<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "The marginal rate of substitution is measured by which feature of an indifference curve?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The slope of the indifference curve<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is the primary focus of the theory of constrained consumer choice?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Describing how consumers maximize satisfaction within income and price limits<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "At the point of consumer equilibrium, which condition is satisfied?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The consumer is on the highest reachable indifference curve<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "If the price of a complementary good rises, what happens to demand for the original good?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> It decreases<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "When a consumer's income increases, what typically happens to demand for a normal good?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> It increases<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Which factor does NOT shift a commodity's demand curve?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The commodity's own price<br>s own price'.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What does the demand function Dx = f(Px, Py, T, Y, A, N, Ep, U) primarily show?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The relationship between quantity demanded and the factors influencing demand<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Which variables are represented in the supply function Sx = f(Px, Pz, T, C, GP)?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Price of good X, price of a related good, technology, production cost, and government policy<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Under diminishing marginal utility, what happens to marginal satisfaction as more units of a good are consumed?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> It decreases with each additional unit<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "Which characteristic of utility describes its dependence on personal preferences?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Subjective<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What is the primary focus of utility theory in economics?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> Explaining how individuals make choices under scarcity<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What does utility mean in economics?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The satisfaction or pleasure gained from consuming goods and services<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "economics",
    "subject": "Microeconomics",
    "titleEn": "What does a utility function express in microeconomic theory?",
    "titleSec": "മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ",
    "lang": "ml",
    "hint": "Microeconomics · Microeconomic Foundation · Core Concepts",
    "backEn": "<strong>Answer:</strong> The relationship between quantities of goods consumed and the satisfaction obtained<br>Essential principle established under Microeconomic Foundation · Core Concepts.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്രധാന ആശയം: മൈക്രോ ഇക്കണോമിക് ഫൗണ്ടേഷൻ · അടിസ്ഥാന ആശയങ്ങൾ"
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ആത്മകഥ (Autobiography)'?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>നിർവ്വചനം:</strong> സ്വന്തം ജീവിതാനുഭവങ്ങൾ സ്വയം സത്യസന്ധമായി എഴുതി തയ്യാറാക്കുന്ന സാഹിത്യരൂപം.",
    "backSec": "അധ്യായം: ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ഗുരുകുല സമ്പ്രദായം'?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>നിർവ്വചനം:</strong> ഗുരുവിന്റെ കൂടെ താമസിച്ച് കലയും വിദ്യയും അച്ചടക്കത്തോടെ അഭ്യസിക്കുന്ന പരമ്പരാഗത രീതി.",
    "backSec": "അധ്യായം: ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'കഥകളി സംഗീതം'?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>നിർവ്വചനം:</strong> കഥകളിക്ക് പശ്ചാത്തലമായി ആലപിക്കുന്ന കർണ്ണാടക-സോപാന സംഗീത ശൈലിയിലുള്ള ആലാപനം.",
    "backSec": "അധ്യായം: ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കലാമണ്ഡലം ഹൈദരാലിയുടെ ആത്മകഥയുടെ പേരെന്താണ്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> ഓർമ്മതൻ വിസ്മയം<br>കലാമണ്ഡലം ഹൈദരാലിയുടെ പ്രസിദ്ധമായ ആത്മകഥയാണ് 'ഓർമ്മതൻ വിസ്മയം'.",
    "backSec": "കലാമണ്ഡലം ഹൈദരാലിയുടെ പ്രസിദ്ധമായ ആത്മകഥയാണ് 'ഓർമ്മതൻ വിസ്മയം'."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ആത്മകഥ (Autobiography) എന്ന പദത്തിലെ 'ബയോസ്' (Bios) എന്ന പദത്തിന്റെ അർത്ഥമെന്ത്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> ജീവിതം<br>'ഓട്ടോസ്' എന്നാൽ സ്വയം, 'ബയോസ്' എന്നാൽ ജീവിതം, 'ഗ്രാഫിയ' എന്നാൽ എഴുത്ത് എന്നാണ് ഗ്രീക്ക് പദാർത്ഥം.",
    "backSec": "'ഓട്ടോസ്' എന്നാൽ സ്വയം, 'ബയോസ്' എന്നാൽ ജീവിതം, 'ഗ്രാഫിയ' എന്നാൽ എഴുത്ത് എന്നാണ് ഗ്രീക്ക് പദാർത്ഥം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കലാമണ്ഡലം ഹൈദരാലിയുടെ പ്രധാന ഗുരുനാഥൻ ആരായിരുന്നു?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> കലാമണ്ഡലം നീലകണ്ഠൻ നമ്പീശൻ<br>ഹൈദരാലിയുടെ സംഗീത ഗുരു പ്രശസ്ത കഥകളി സംഗീതാചാര്യൻ കലാമണ്ഡലം നീലകണ്ഠൻ നമ്പീശനാണ്.",
    "backSec": "ഹൈദരാലിയുടെ സംഗീത ഗുരു പ്രശസ്ത കഥകളി സംഗീതാചാര്യൻ കലാമണ്ഡലം നീലകണ്ഠൻ നമ്പീശനാണ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഏത് കലാരൂപത്തിലെ സംഗീതത്തിലാണ് ഹൈദരാലി പ്രാവീണ്യം നേടിയത്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> കഥകളി സംഗീതം<br>കഥകളി സംഗീതത്തിലെ അതികായനായിരുന്നു കലാമണ്ഡലം ഹൈദരാലി.",
    "backSec": "കഥകളി സംഗീതത്തിലെ അതികായനായിരുന്നു കലാമണ്ഡലം ഹൈദരാലി."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഹൈദരാലിക്ക് കലാമണ്ഡലത്തിൽ പ്രവേശനം നൽകാൻ മുൻകൈയെടുത്ത മഹാകവി ആര്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> വള്ളത്തോൾ നാരായണമേനോൻ<br>കേരള കലാമണ്ഡലത്തിന്റെ സ്ഥാപകനായ വള്ളത്തോൾ നാരായണമേനോന്റെ മതനിരപേക്ഷ നിലപാടാണ് ഹൈദരാലിക്ക് പ്രവേശനം നൽകിയത്.",
    "backSec": "കേരള കലാമണ്ഡലത്തിന്റെ സ്ഥാപകനായ വള്ളത്തോൾ നാരായണമേനോന്റെ മതനിരപേക്ഷ നിലപാടാണ് ഹൈദരാലിക്ക് പ്രവേശനം നൽകിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സ്വാതന്ത്ര്യലബ്ധിക്കു ശേഷം ഏകദേശം എത്ര വർഷം കഴിഞ്ഞാണ് ഹൈദരാലി കലാമണ്ഡലത്തിലെത്തുന്നത്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> പത്തു വർഷം<br>സ്വാതന്ത്ര്യലബ്ധിക്കു ശേഷം ഏകദേശം 10 വർഷം കഴിഞ്ഞാണ് ഹൈദരാലി കലാമണ്ഡലത്തിൽ പഠിക്കാൻ എത്തുന്നത്.",
    "backSec": "സ്വാതന്ത്ര്യലബ്ധിക്കു ശേഷം ഏകദേശം 10 വർഷം കഴിഞ്ഞാണ് ഹൈദരാലി കലാമണ്ഡലത്തിൽ പഠിക്കാൻ എത്തുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഹൈദരാലിക്ക് കടുത്ത പനി വന്ന രാത്രിയിൽ ആരും കാണാതെ വന്ന് പുതപ്പിച്ചു കൊടുത്തത് ആര്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> നീലകണ്ഠൻ നമ്പീശൻ ആശാൻ<br>തന്റെ ഗുരുവായ നീലകണ്ഠൻ നമ്പീശൻ ആശാനാണ് രാത്രിയിൽ വന്ന് ശിഷ്യനെ പുതപ്പിച്ചു കൊടുത്തത്.",
    "backSec": "തന്റെ ഗുരുവായ നീലകണ്ഠൻ നമ്പീശൻ ആശാനാണ് രാത്രിയിൽ വന്ന് ശിഷ്യനെ പുതപ്പിച്ചു കൊടുത്തത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അഹിന്ദുവായതിനാൽ ഹൈദരാലിക്ക് പ്രവേശനം നിഷേധിക്കപ്പെട്ട ഇടങ്ങൾ ഏവ?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> ക്ഷേത്രങ്ങളിലെ കളിയരങ്ങുകൾ<br>അക്കാലത്ത് ക്ഷേത്രങ്ങളിലെ കളിയരങ്ങുകളിൽ ഹൈദരാലിക്ക് പ്രവേശനം നിഷേധിക്കപ്പെട്ടിരുന്നു.",
    "backSec": "അക്കാലത്ത് ക്ഷേത്രങ്ങളിലെ കളിയരങ്ങുകളിൽ ഹൈദരാലിക്ക് പ്രവേശനം നിഷേധിക്കപ്പെട്ടിരുന്നു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഹൈദരാലി അന്തരിച്ച വർഷമേത്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> 2006 ജനുവരി 5<br>2006 ജനുവരി 5-നാണ് റോഡപകടത്തിൽ കലാമണ്ഡലം ഹൈദരാലി അന്തരിച്ചത്.",
    "backSec": "2006 ജനുവരി 5-നാണ് റോഡപകടത്തിൽ കലാമണ്ഡലം ഹൈദരാലി അന്തരിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ആത്മകഥയുടെ ഏറ്റവും പ്രധാനപ്പെട്ട ആന്തരിക ഗുണം എന്താണ്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> പച്ചയായ സത്യസന്ധതയും ആത്മനിഷ്ഠതയും<br>സ്വന്തം ജീവിതത്തെക്കുറിച്ചുള്ള സത്യസന്ധമായ ആത്മപരിശോധനയും ആത്മനിഷ്ഠതയുമാണ് ആത്മകഥയുടെ അടിസ്ഥാനം.",
    "backSec": "സ്വന്തം ജീവിതത്തെക്കുറിച്ചുള്ള സത്യസന്ധമായ ആത്മപരിശോധനയും ആത്മനിഷ്ഠതയുമാണ് ആത്മകഥയുടെ അടിസ്ഥാനം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ഓട്ടോബയോഗ്രഫി' എന്ന വാക്കിലെ 'ഓട്ടോസ്' എന്ന പദത്തിന്റെ അർത്ഥം?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> സ്വയം<br>ഗ്രീക്കിൽ 'Autos' എന്നാൽ സ്വയം എന്നാണ് അർത്ഥം.",
    "backSec": "ഗ്രീക്കിൽ 'Autos' എന്നാൽ സ്വയം എന്നാണ് അർത്ഥം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കഥകളി സംഗീതത്തിൽ ഹൈദരാലി കൊണ്ടുവന്ന പ്രധാന മാറ്റം എന്തായിരുന്നു?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> ശബ്ദമാധുര്യവും ഭാവതീവ്രതയും ചേർന്ന ജനകീയ ശൈലി<br>രാഗഭാവങ്ങളെ അതീവ മാധുര്യത്തോടെയും ഭാവതീവ്രതയോടെയും ആലപിച്ച് ജനകീയമാക്കാൻ ഹൈദരാലിക്ക് സാധിച്ചു.",
    "backSec": "രാഗഭാവങ്ങളെ അതീവ മാധുര്യത്തോടെയും ഭാവതീവ്രതയോടെയും ആലപിച്ച് ജനകീയമാക്കാൻ ഹൈദരാലിക്ക് സാധിച്ചു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കലാമണ്ഡലം സ്ഥിതി ചെയ്യുന്നത് ഏത് ജില്ലയിലാണ്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> തൃശ്ശൂർ (ചെറുതുരുത്തി)<br>തൃശ്ശൂർ ജില്ലയിലെ ചെറുതുരുത്തിയിലാണ് കേരള കലാമണ്ഡലം സ്ഥിതി ചെയ്യുന്നത്.",
    "backSec": "തൃശ്ശൂർ ജില്ലയിലെ ചെറുതുരുത്തിയിലാണ് കേരള കലാമണ്ഡലം സ്ഥിതി ചെയ്യുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഹൈദരാലിയുടെ ജന്മസ്ഥലം എവിടെയാണ്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> ഓട്ടുപാറ (വടക്കാഞ്ചേരി)<br>തൃശ്ശൂർ ജില്ലയിലെ വടക്കാഞ്ചേരിക്കടുത്തുള്ള ഓട്ടുപാറയിലാണ് ഹൈദരാലി ജനിച്ചത്.",
    "backSec": "തൃശ്ശൂർ ജില്ലയിലെ വടക്കാഞ്ചേരിക്കടുത്തുള്ള ഓട്ടുപാറയിലാണ് ഹൈദരാലി ജനിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ' എന്ന പാഠഭാഗം നൽകുന്ന പ്രധാന സന്ദേശം എന്താണ്?",
    "titleSec": "ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ആത്മകഥ: എന്റെ ഗുരുനാഥനെ ഓർക്കുമ്പോൾ",
    "backEn": "<strong>ഉത്തരം:</strong> ജാതിമതങ്ങൾക്കതീതമായ ഗുരുശിഷ്യബന്ധവും കലയുടെ മഹത്വവും<br>കലയ്ക്കും യഥാർത്ഥ മാനവികതയ്ക്കും ജാതിമത വേലിക്കെട്ടുകളെക്കാൾ ഉന്നതമായ സ്ഥാനമുണ്ടെന്ന സന്ദേശമാണിത്.",
    "backSec": "കലയ്ക്കും യഥാർത്ഥ മാനവികതയ്ക്കും ജാതിമത വേലിക്കെട്ടുകളെക്കാൾ ഉന്നതമായ സ്ഥാനമുണ്ടെന്ന സന്ദേശമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'സഞ്ചാരസാഹിത്യം (Travelogue)'?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>നിർവ്വചനം:</strong> യാത്രാനുഭവങ്ങളും ഭൂപ്രകൃതിയും സംസ്കാരവും പ്രതിപാദിക്കുന്ന സാഹിത്യശാഖ.",
    "backSec": "അധ്യായം: സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ക്രാക്കാത്തോവ (Krakatoa)'?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>നിർവ്വചനം:</strong> ഇന്തോനേഷ്യയിലെ സുമാത്രയ്ക്കും ജാവയ്ക്കും ഇടയിലുള്ള സുന്ദാ കടലിടുക്കിലെ അഗ്നിപർവ്വതം.",
    "backSec": "അധ്യായം: സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ഡെക്ക് യാത്രക്കാർ (Deck Passengers)'?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>നിർവ്വചനം:</strong> കപ്പലിലെ തട്ടിൽ കുറഞ്ഞ ചെലവിൽ യാത്ര ചെയ്യുന്ന സാധാരണക്കാരായ ജനങ്ങൾ.",
    "backSec": "അധ്യായം: സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കിഴവനും കൊക്കാത്തുവായും' എന്ന യാത്രാവിവരണം ഏത് പുസ്തകത്തിലേതാണ്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> ഇന്തോനേഷ്യൻ യാത്രാവിവരണം (ബാലിദ്വീപ് യാത്ര)<br>എസ്.കെ. പൊറ്റെക്കാട്ടിന്റെ ഇന്തോനേഷ്യൻ യാത്രാവിവരണത്തിലെ അധ്യായമാണിത്.",
    "backSec": "എസ്.കെ. പൊറ്റെക്കാട്ടിന്റെ ഇന്തോനേഷ്യൻ യാത്രാവിവരണത്തിലെ അധ്യായമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എസ്.കെ. പൊറ്റെക്കാട്ടിന് ജ്ഞാനപീഠ പുരസ്കാരം നേടിക്കൊടുത്ത കൃതി ഏതാണ്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> ഒരു ദേശത്തിന്റെ കഥ<br>1980-ൽ 'ഒരു ദേശത്തിന്റെ കഥ' എന്ന നോവലിനാണ് പൊറ്റെക്കാട്ടിന് ജ്ഞാനപീഠം ലഭിച്ചത്.",
    "backSec": "1980-ൽ 'ഒരു ദേശത്തിന്റെ കഥ' എന്ന നോവലിനാണ് പൊറ്റെക്കാട്ടിന് ജ്ഞാനപീഠം ലഭിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കപ്പലിന്റെ ഡെക്കിലിരുന്ന് പൊറ്റെക്കാട്ട് വായിച്ച വിദേശ നോവൽ ഏതാണ്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> കിഴവനും കടലും (The Old Man and the Sea)<br>ഏണസ്റ്റ് ഹെമിങ്‌വേയുടെ 'The Old Man and the Sea' ആണ് അദ്ദേഹം വായിച്ചത്.",
    "backSec": "ഏണസ്റ്റ് ഹെമിങ്‌വേയുടെ 'The Old Man and the Sea' ആണ് അദ്ദേഹം വായിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കിഴവനും കടലും' എന്ന നോവലിലെ പ്രധാന കഥാപാത്രമായ വൃദ്ധന്റെ പേരെന്ത്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> സാന്തിയാഗോ<br>ക്യൂബൻ വൃദ്ധനായ മുക്കുവന്റെ പേര് സാന്തിയാഗോ എന്നാണ്.",
    "backSec": "ക്യൂബൻ വൃദ്ധനായ മുക്കുവന്റെ പേര് സാന്തിയാഗോ എന്നാണ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ക്രാക്കാത്തോവ അഗ്നിപർവ്വത സ്ഫോടനം ഉണ്ടായ വർഷമേത്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> 1883 ആഗസ്റ്റ്<br>1883 ആഗസ്റ്റിലാണ് ഭീകരമായ ക്രാക്കാത്തോവ അഗ്നിപർവ്വത സ്ഫോടനം ഉണ്ടായത്.",
    "backSec": "1883 ആഗസ്റ്റിലാണ് ഭീകരമായ ക്രാക്കാത്തോവ അഗ്നിപർവ്വത സ്ഫോടനം ഉണ്ടായത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ക്രാക്കാത്തോവ സ്ഫോടനത്തിൽ എത്രപേർ കൊല്ലപ്പെട്ടതായാണ് കണക്കാക്കുന്നത്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> 36,000-ലധികം<br>സ്ഫോടനത്തിലും തുടർന്നുണ്ടായ സുനാമിയിലുമായി 36,000-ൽ അധികം ആളുകൾ കൊല്ലപ്പെട്ടു.",
    "backSec": "സ്ഫോടനത്തിലും തുടർന്നുണ്ടായ സുനാമിയിലുമായി 36,000-ൽ അധികം ആളുകൾ കൊല്ലപ്പെട്ടു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ക്രാക്കാത്തോവ സ്ഫോടനത്തിന്റെ ശബ്ദം എത്ര മൈൽ അകലെ വരെ കേട്ടു?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> 3000 മൈൽ<br>ഏകദേശം 3,000 മൈൽ ദൂരം വരെ സ്ഫോടനത്തിന്റെ ഭയങ്കര ശബ്ദം മുഴങ്ങിക്കേട്ടു.",
    "backSec": "ഏകദേശം 3,000 മൈൽ ദൂരം വരെ സ്ഫോടനത്തിന്റെ ഭയങ്കര ശബ്ദം മുഴങ്ങിക്കേട്ടു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "പൊറ്റെക്കാട്ട് കപ്പലിലെ ഒന്നാം ക്ലാസ് ഉപേക്ഷിച്ച് എവിടേക്കാണ് പോയത്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> ഡെക്കിലേക്ക് (തട്ടിലേക്ക്)<br>സാധാരണക്കാരായ ജാവക്കാർ യാത്ര ചെയ്യുന്ന കപ്പലിന്റെ ഡെക്കിലേക്കാണ് അദ്ദേഹം പോയത്.",
    "backSec": "സാധാരണക്കാരായ ജാവക്കാർ യാത്ര ചെയ്യുന്ന കപ്പലിന്റെ ഡെക്കിലേക്കാണ് അദ്ദേഹം പോയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഡെക്കിൽ ഉണ്ടായിരുന്ന സാധാരണ യാത്രക്കാർ ഏത് ദേശക്കാരായിരുന്നു?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> ജാവക്കാർ (ഇന്തോനേഷ്യക്കാർ)<br>ഇന്തോനേഷ്യയിലെ ജാവ ദ്വീപുകാരായ സാധാരണക്കാരായിരുന്നു ഡെക്കിലെ യാത്രക്കാർ.",
    "backSec": "ഇന്തോനേഷ്യയിലെ ജാവ ദ്വീപുകാരായ സാധാരണക്കാരായിരുന്നു ഡെക്കിലെ യാത്രക്കാർ."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഏണസ്റ്റ് ഹെമിങ്‌വേ ഏത് രാജ്യക്കാരനായ എഴുത്തുകാരനാണ്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> അമേരിക്ക<br>ഏണസ്റ്റ് ഹെമിങ്‌വേ വിഖ്യാതനായ അമേരിക്കൻ നോവലിസ്റ്റാണ്.",
    "backSec": "ഏണസ്റ്റ് ഹെമിങ്‌വേ വിഖ്യാതനായ അമേരിക്കൻ നോവലിസ്റ്റാണ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'മനുഷ്യൻ പരാജയപ്പെടാൻ സൃഷ്ടിക്കപ്പെട്ടവനല്ല' എന്ന വാക്യം ആരുടെ കൃതിയിലേതാണ്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> ഏണസ്റ്റ് ഹെമിങ്‌വേ<br>ഹെമിങ്‌വേയുടെ 'കിഴവനും കടലും' എന്ന നോവലിലെ വിഖ്യാത വാക്യമാണിത്.",
    "backSec": "ഹെമിങ്‌വേയുടെ 'കിഴവനും കടലും' എന്ന നോവലിലെ വിഖ്യാത വാക്യമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ക്രാക്കാത്തോവ സ്ഥിതി ചെയ്യുന്നത് ഏത് കടലിടുക്കിലാണ്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> സുന്ദാ കടലിടുക്ക് (Sunda Strait)<br>ജാവയ്ക്കും സുമാത്രയ്ക്കും ഇടയിലുള്ള സുന്ദാ കടലിടുക്കിലാണ് ക്രാക്കാത്തോവ.",
    "backSec": "ജാവയ്ക്കും സുമാത്രയ്ക്കും ഇടയിലുള്ള സുന്ദാ കടലിടുക്കിലാണ് ക്രാക്കാത്തോവ."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എസ്.കെ. പൊറ്റെക്കാട്ടിന്റെ യാത്ര നടന്ന വർഷമേത്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> 1955<br>1955-ലാണ് അദ്ദേഹം ഇന്തോനേഷ്യൻ ദ്വീപുകളിലേക്ക് കപ്പൽയാത്ര നടത്തിയത്.",
    "backSec": "1955-ലാണ് അദ്ദേഹം ഇന്തോനേഷ്യൻ ദ്വീപുകളിലേക്ക് കപ്പൽയാത്ര നടത്തിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സാന്തിയാഗോ പിടിച്ച ഭീമാകാരമായ മത്സ്യത്തിന്റെ ഇനം ഏതാണ്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> മാർലിൻ (Marlin)<br>ഭീമാകാരമായ മാർലിൻ മത്സ്യത്തെയാണ് സാന്തിയാഗോ ദിവസങ്ങളോളം പൊരുതി പിടികൂടിയത്.",
    "backSec": "ഭീമാകാരമായ മാർലിൻ മത്സ്യത്തെയാണ് സാന്തിയാഗോ ദിവസങ്ങളോളം പൊരുതി പിടികൂടിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കിഴവനും കൊക്കാത്തുവായും' എന്ന പാഠഭാഗം പ്രധാനമായും ചർച്ച ചെയ്യുന്നത് എന്താണ്?",
    "titleSec": "സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · സഞ്ചാരസാഹിത്യം: കിഴവനും കൊക്കാത്തുവായും",
    "backEn": "<strong>ഉത്തരം:</strong> പ്രകൃതിയുടെ സംഹാരശക്തിയും മനുഷ്യന്റെ തോൽക്കാത്ത ഇച്ഛാശക്തിയും<br>പ്രകൃതിയുടെ ഭീകരതയും മനുഷ്യന്റെ ചെറുത്തുനിൽപ്പും തമ്മിലുള്ള സമന്വയമാണ് ഇതിന്റെ കാതൽ.",
    "backSec": "പ്രകൃതിയുടെ ഭീകരതയും മനുഷ്യന്റെ ചെറുത്തുനിൽപ്പും തമ്മിലുള്ള സമന്വയമാണ് ഇതിന്റെ കാതൽ."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'അഭിമുഖം (Interview)'?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>നിർവ്വചനം:</strong> ഒരു വ്യക്തിയുടെ ചിന്തകളും അനുഭവങ്ങളും ചോദ്യോത്തരങ്ങളിലൂടെ പുറത്തുകൊണ്ടുവരുന്ന മാധ്യമരൂപം.",
    "backSec": "അധ്യായം: അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ആന്തരിക ജീവിതം'?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>നിർവ്വചനം:</strong> മനുഷ്യന്റെ ബാഹ്യമായ പ്രകടനങ്ങൾക്കപ്പുറമുള്ള മനസ്സിന്റെ വികാരവിചാരങ്ങളും ഏകാന്തതയും.",
    "backSec": "അധ്യായം: അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'കഥയിലെ സത്യം'?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>നിർവ്വചനം:</strong> യാഥാർത്ഥ്യത്തെ ഭാവനയിലൂടെ സർഗ്ഗാത്മകമായി മാറ്റിപ്പണിയുന്ന സാഹിത്യ സത്യം.",
    "backSec": "അധ്യായം: അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മാധവിക്കുട്ടിയുമായി അഭിമുഖം നടത്തിയത് ആരാണ്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> അക്ബർ കക്കട്ടിൽ<br>പ്രശസ്ത കഥാകൃത്ത് അക്ബർ കക്കട്ടിലാണ് മാധവിക്കുട്ടിയുമായി ഈ അഭിമുഖം നടത്തിയത്.",
    "backSec": "പ്രശസ്ത കഥാകൃത്ത് അക്ബർ കക്കട്ടിലാണ് മാധവിക്കുട്ടിയുമായി ഈ അഭിമുഖം നടത്തിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കഥ കഥയാണ്, ചരിത്രമല്ല' എന്ന് പ്രസ്താവിച്ച സാഹിത്യകാരി ആര്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> കമലാ സുരയ്യ (മാധവിക്കുട്ടി)<br>സാഹിത്യരചനയിൽ ഭാവനയുടെയും സത്യത്തിന്റെയും ഇഴയടുപ്പം വ്യക്തമാക്കാൻ മാധവിക്കുട്ടി പറഞ്ഞതാണിത്.",
    "backSec": "സാഹിത്യരചനയിൽ ഭാവനയുടെയും സത്യത്തിന്റെയും ഇഴയടുപ്പം വ്യക്തമാക്കാൻ മാധവിക്കുട്ടി പറഞ്ഞതാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അക്ബർ കക്കട്ടിലിന്റെ പ്രസിദ്ധമായ അധ്യാപക സർവ്വീസ് കഥകളുടെ സമാഹാരം ഏതാണ്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> പാഠം 30<br>മലയാളത്തിലെ ആദ്യ അധ്യാപക സർവ്വീസ് സ്റ്റോറിയായി കണക്കാക്കപ്പെടുന്ന കൃതിയാണ് അക്ബർ കക്കട്ടിലിന്റെ 'പാഠം 30'.",
    "backSec": "മലയാളത്തിലെ ആദ്യ അധ്യാപക സർവ്വീസ് സ്റ്റോറിയായി കണക്കാക്കപ്പെടുന്ന കൃതിയാണ് അക്ബർ കക്കട്ടിലിന്റെ 'പാഠം 30'."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മാധവിക്കുട്ടിക്ക് ഏത് വർഷമാണ് സാഹിത്യത്തിനുള്ള നോബൽ സമ്മാന നാമനിർദ്ദേശം ലഭിച്ചത്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> 1984<br>1984-ൽ സാഹിത്യത്തിനുള്ള നോബൽ പുരസ്കാരത്തിന് മാധവിക്കുട്ടിയുടെ പേര് നിർദ്ദേശിക്കപ്പെട്ടിരുന്നു.",
    "backSec": "1984-ൽ സാഹിത്യത്തിനുള്ള നോബൽ പുരസ്കാരത്തിന് മാധവിക്കുട്ടിയുടെ പേര് നിർദ്ദേശിക്കപ്പെട്ടിരുന്നു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കടൽ മയൂരം' എന്ന കഥയിലെ പ്രധാന സ്ത്രീ കഥാപാത്രം ആര്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> പ്രൊഫസർ രേണുകാദേവി<br>'കടൽ മയൂരം' എന്ന കഥയിലെ പ്രൊഫസറായ സ്ത്രീ കഥാപാത്രമാണ് രേണുകാദേവി.",
    "backSec": "'കടൽ മയൂരം' എന്ന കഥയിലെ പ്രൊഫസറായ സ്ത്രീ കഥാപാത്രമാണ് രേണുകാദേവി."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "പ്രൊഫസർ രേണുകാദേവി മരണപ്പെടുന്നത് എവിടെ വെച്ചാണ്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> സിംഗപ്പൂരിൽ<br>സിംഗപ്പൂരിലെ ഹോട്ടലിൽ വെച്ചാണ് രേണുകാദേവി മരണപ്പെടുന്നത്.",
    "backSec": "സിംഗപ്പൂരിലെ ഹോട്ടലിൽ വെച്ചാണ് രേണുകാദേവി മരണപ്പെടുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മാധവിക്കുട്ടി ഇംഗ്ലീഷിൽ കവിതകൾ എഴുതിയിരുന്നത് ഏത് പേരിലാണ്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> കമലാ ദാസ്<br>ഇംഗ്ലീഷ് കാവ്യലോകത്ത് 'കമലാ ദാസ്' എന്ന പേരിലാണ് അവർ പ്രസിദ്ധയായത്.",
    "backSec": "ഇംഗ്ലീഷ് കാവ്യലോകത്ത് 'കമലാ ദാസ്' എന്ന പേരിലാണ് അവർ പ്രസിദ്ധയായത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മാധവിക്കുട്ടിയുടെ ലോകപ്രശസ്തമായ ആത്മകഥ ഏതാണ്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> എന്റെ കഥ (My Story)<br>അത്യന്തം കോളിളക്കം സൃഷ്ടിച്ച മാധവിക്കുട്ടിയുടെ വിശ്വവിഖ്യാത ആത്മകഥയാണ് 'എന്റെ കഥ'.",
    "backSec": "അത്യന്തം കോളിളക്കം സൃഷ്ടിച്ച മാധവിക്കുട്ടിയുടെ വിശ്വവിഖ്യാത ആത്മകഥയാണ് 'എന്റെ കഥ'."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മനുഷ്യന് എത്ര ജീവിതങ്ങളുണ്ടെന്നാണ് മാധവിക്കുട്ടി അഭിമുഖത്തിൽ പറയുന്നത്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> രണ്ട് ജീവിതങ്ങൾ (ബാഹ്യവും ആന്തരികവും)<br>ബാഹ്യജീവിതവും ആന്തരികജീവിതവും എന്നിങ്ങനെ രണ്ട് ജീവിതങ്ങളുണ്ടെന്ന് അവർ വ്യക്തമാക്കുന്നു.",
    "backSec": "ബാഹ്യജീവിതവും ആന്തരികജീവിതവും എന്നിങ്ങനെ രണ്ട് ജീവിതങ്ങളുണ്ടെന്ന് അവർ വ്യക്തമാക്കുന്നു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ബോർഡിംഗിൽ കഴിയുന്ന പെൺകുട്ടിയുടെ നിസ്സഹായാവസ്ഥ പറയുന്ന കഥ ഏതാണ്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> രക്താർബ്ബുദം<br>'രക്താർബ്ബുദം' എന്ന കഥയിലാണ് അമ്മ നിർബന്ധിച്ച് ബോർഡിംഗിലാക്കിയ മകളുടെ കഥ പറയുന്നത്.",
    "backSec": "'രക്താർബ്ബുദം' എന്ന കഥയിലാണ് അമ്മ നിർബന്ധിച്ച് ബോർഡിംഗിലാക്കിയ മകളുടെ കഥ പറയുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മാധവിക്കുട്ടിയുടെ ഭർത്താവ് മാധവദാസ് ഏത് അന്താരാഷ്ട്ര സ്ഥാപനത്തിലാണ് പ്രവർത്തിച്ചിരുന്നത്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> ഇന്റർനാഷണൽ മോണിറ്ററി ഫണ്ട് (IMF)<br>മാധവദാസ് IMF-ന്റെ സീനിയർ കൺസൾട്ടന്റായിരുന്നു.",
    "backSec": "മാധവദാസ് IMF-ന്റെ സീനിയർ കൺസൾട്ടന്റായിരുന്നു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മാധവിക്കുട്ടി ഇസ്ലാം മതം സ്വീകരിച്ച ശേഷം സ്വീകരിച്ച പേരെന്ത്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> കമലാ സുരയ്യ<br>ഇസ്ലാം മതം സ്വീകരിച്ച ശേഷം 'കമലാ സുരയ്യ' എന്ന പേര് സ്വീകരിച്ചു.",
    "backSec": "ഇസ്ലാം മതം സ്വീകരിച്ച ശേഷം 'കമലാ സുരയ്യ' എന്ന പേര് സ്വീകരിച്ചു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മാധവിക്കുട്ടി എത്ര നോവലുകൾ രചിച്ചിട്ടുണ്ട്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> 12 നോവലുകൾ<br>'മാനസി' ഉൾപ്പെടെ 12 പുസ്തകങ്ങൾ നോവൽ രൂപത്തിൽ പ്രസിദ്ധീകരിച്ചു.",
    "backSec": "'മാനസി' ഉൾപ്പെടെ 12 പുസ്തകങ്ങൾ നോവൽ രൂപത്തിൽ പ്രസിദ്ധീകരിച്ചു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മാധവിക്കുട്ടിയുടെ കഥകളുടെ പ്രധാന ആന്തരികഭാവം എന്താണ്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> കപടസദാചാര വിമർശനവും സ്നേഹദാഹവും ഏകാന്തതയും<br>സ്ത്രീഹൃദയത്തിന്റെ ഏകാന്തതയും സ്നേഹദാഹവും കാപട്യങ്ങൾക്കെതിരായ തുറന്നുപറച്ചിലുമാണ് കാതൽ.",
    "backSec": "സ്ത്രീഹൃദയത്തിന്റെ ഏകാന്തതയും സ്നേഹദാഹവും കാപട്യങ്ങൾക്കെതിരായ തുറന്നുപറച്ചിലുമാണ് കാതൽ."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അക്ബർ കക്കട്ടിൽ അന്തരിച്ച വർഷമേത്?",
    "titleSec": "അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · അഭിമുഖം: മാധവിക്കുട്ടിയുമായി അക്ബർ കക്കട്ടിൽ നടത്തിയ അഭിമുഖം",
    "backEn": "<strong>ഉത്തരം:</strong> 2016<br>അക്ബർ കക്കട്ടിൽ 2016 ഫെബ്രുവരിയിൽ അന്തരിച്ചു.",
    "backSec": "അക്ബർ കക്കട്ടിൽ 2016 ഫെബ്രുവരിയിൽ അന്തരിച്ചു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ഡാർക്ക് ടൂറിസം (Dark Tourism)'?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>നിർവ്വചനം:</strong> വംശഹത്യകൾ, യുദ്ധങ്ങൾ, പ്രകൃതിദുരന്തങ്ങൾ എന്നിവ നടന്ന ദുരന്തഭൂമികൾ സന്ദർശിക്കുന്ന യാത്രാരീതി.",
    "backSec": "അധ്യായം: പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?) — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ഓപ്പറേഷൻ നെമെസിസ്'?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>നിർവ്വചനം:</strong> അർമേനിയൻ വംശഹത്യക്ക് കാരണക്കാരായ ഓട്ടോമൻ നേതാക്കളെ വധിക്കാൻ രൂപീകരിച്ച രഹസ്യ പദ്ധതി.",
    "backSec": "അധ്യായം: പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?) — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'പോഡ്കാസ്റ്റ് (Podcast)'?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>നിർവ്വചനം:</strong> ഇന്റർനെറ്റിലൂടെ ഡൗൺലോഡ് ചെയ്ത് കേൾക്കാവുന്ന ഡിജിറ്റൽ ശ്രാവ്യ ഉള്ളടക്കം.",
    "backSec": "അധ്യായം: പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?) — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അർമേനിയയിലെ ശോകഗാനം' എന്ന പാഠഭാഗം ഏത് സാഹിത്യ ശാഖയിൽ ഉൾപ്പെടുന്നു?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> പോഡ്കാസ്റ്റ് സ്ക്രിപ്റ്റ് / യാത്രാവിവരണം<br>സജി മാർക്കോസ് തയ്യാറാക്കിയ ഡാർക്ക് ടൂറിസം പോഡ്കാസ്റ്റ് രചനയാണിത്.",
    "backSec": "സജി മാർക്കോസ് തയ്യാറാക്കിയ ഡാർക്ക് ടൂറിസം പോഡ്കാസ്റ്റ് രചനയാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ദുരന്തസ്ഥലങ്ങളും വംശഹത്യ കേന്ദ്രങ്ങളും സന്ദർശിക്കുന്ന യാത്രാരീതിയെ എന്തു വിളിക്കുന്നു?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> ഡാർക്ക് ടൂറിസം (Dark Tourism)<br>ചരിത്രത്തിലെ കണ്ണീരും ചോരയും വീണ ദുരന്തഭൂമികൾ സന്ദർശിക്കുന്നതിനെ ഡാർക്ക് ടൂറിസം എന്ന് വിളിക്കുന്നു.",
    "backSec": "ചരിത്രത്തിലെ കണ്ണീരും ചോരയും വീണ ദുരന്തഭൂമികൾ സന്ദർശിക്കുന്നതിനെ ഡാർക്ക് ടൂറിസം എന്ന് വിളിക്കുന്നു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അർമേനിയൻ വംശഹത്യ നടന്ന പ്രധാന കാലഘട്ടം ഏതാണ്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> 1915–1919<br>ഒന്നാം ലോകമഹായുദ്ധകാലത്ത് 1915-1919-ലാണ് അർമേനിയൻ വംശഹത്യ അരങ്ങേറിയത്.",
    "backSec": "ഒന്നാം ലോകമഹായുദ്ധകാലത്ത് 1915-1919-ലാണ് അർമേനിയൻ വംശഹത്യ അരങ്ങേറിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അർമേനിയൻ വംശഹത്യക്ക് നേതൃത്വം നൽകിയ ഓട്ടോമൻ ഭരണാധികാരി ആര്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> തലാത്ത് പാഷ (Talaat Pasha)<br>ഓട്ടോമൻ തുർക്കി ആഭ്യന്തര മന്ത്രിയായിരുന്ന തലാത്ത് പാഷയാണ് വംശഹത്യക്ക് നേതൃത്വം നൽകിയത്.",
    "backSec": "ഓട്ടോമൻ തുർക്കി ആഭ്യന്തര മന്ത്രിയായിരുന്ന തലാത്ത് പാഷയാണ് വംശഹത്യക്ക് നേതൃത്വം നൽകിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "തലാത്ത് പാഷയെ വധിച്ച അർമേനിയൻ യുവാവ് ആരാണ്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> സൊഗൊമോൻ തെഹ്ലിരിയൻ (Soghomon Tehlirian)<br>കുടുംബം നഷ്ടപ്പെട്ട സൊഗൊമോൻ തെഹ്ലിരിയനാണ് തലാത്ത് പാഷയെ വധിച്ചത്.",
    "backSec": "കുടുംബം നഷ്ടപ്പെട്ട സൊഗൊമോൻ തെഹ്ലിരിയനാണ് തലാത്ത് പാഷയെ വധിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "തലാത്ത് പാഷ കൊല്ലപ്പെട്ടത് ഏത് നഗരത്തിൽ വെച്ചാണ്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> ബെർലിൻ (ജർമ്മനി)<br>1921 മാർച്ച് 15-ന് ജർമ്മനിയിലെ ബെർലിനിൽ വെച്ചാണ് കൊലപാതകം നടന്നത്.",
    "backSec": "1921 മാർച്ച് 15-ന് ജർമ്മനിയിലെ ബെർലിനിൽ വെച്ചാണ് കൊലപാതകം നടന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അർമേനിയൻ വംശഹത്യയുടെ പ്രധാന സൂത്രധാരന്മാരെ വധിക്കാൻ രൂപീകരിച്ച ദൗത്യം ഏത്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> ഓപ്പറേഷൻ നെമെസിസ് (Operation Nemesis)<br>ഗ്രീക്ക് പ്രതികാര ദേവതയായ നെമെസിസിന്റെ പേരിൽ അറിയപ്പെട്ട രഹസ്യ ദൗത്യമായിരുന്നു ഓപ്പറേഷൻ നെമെസിസ്.",
    "backSec": "ഗ്രീക്ക് പ്രതികാര ദേവതയായ നെമെസിസിന്റെ പേരിൽ അറിയപ്പെട്ട രഹസ്യ ദൗത്യമായിരുന്നു ഓപ്പറേഷൻ നെമെസിസ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "തെഹ്ലിരിയനെ കുറ്റവിമുക്തനാക്കി വിട്ടയച്ച കോടതി ഏതാണ്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> ബെർലിൻ കോടതി<br>1921-ൽ ബെർലിൻ കോടതിയാണ് ചരിത്രപ്രസിദ്ധമായ വിധിയിലൂടെ തെഹ്ലിരിയനെ വിട്ടയച്ചത്.",
    "backSec": "1921-ൽ ബെർലിൻ കോടതിയാണ് ചരിത്രപ്രസിദ്ധമായ വിധിയിലൂടെ തെഹ്ലിരിയനെ വിട്ടയച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അർമേനിയയുടെ തലസ്ഥാനം ഏതാണ്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> യെരവാൻ (Yerevan)<br>അർമേനിയൻ തലസ്ഥാനമായ യെരവാനിലാണ് വംശഹത്യ സ്മാരകം സ്ഥിതി ചെയ്യുന്നത്.",
    "backSec": "അർമേനിയൻ തലസ്ഥാനമായ യെരവാനിലാണ് വംശഹത്യ സ്മാരകം സ്ഥിതി ചെയ്യുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അർമേനിയക്കാരെ ഓട്ടോമൻ സൈന്യം ഏത് മരുഭൂമിയിലൂടെയാണ് മരണയാത്ര നടത്തിയത്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> സിറിയൻ മരുഭൂമി (ദേർ എസ്-സോർ)<br>സിറിയൻ മരുഭൂമിയിലൂടെയുള്ള കൊടും നടത്തത്തിലാണ് ലക്ഷക്കണക്കിന് ആളുകൾ പട്ടിണിയും ദാഹവും മൂലം മരിച്ചത്.",
    "backSec": "സിറിയൻ മരുഭൂമിയിലൂടെയുള്ള കൊടും നടത്തത്തിലാണ് ലക്ഷക്കണക്കിന് ആളുകൾ പട്ടിണിയും ദാഹവും മൂലം മരിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അർമേനിയയിലെ ശോകഗാനം' പോഡ്കാസ്റ്റ് തയ്യാറാക്കിയ മലയാളി ആര്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> സജി മാർക്കോസ്<br>സജി മാർക്കോസാണ് ഈ പോഡ്കാസ്റ്റ് ആഖ്യാനം തയ്യാറാക്കിയത്.",
    "backSec": "സജി മാർക്കോസാണ് ഈ പോഡ്കാസ്റ്റ് ആഖ്യാനം തയ്യാറാക്കിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "തെഹ്ലിരിയന്റെ കുടുംബം കൊല്ലപ്പെടുമ്പോൾ അദ്ദേഹത്തിന്റെ പ്രായം എത്രയായിരുന്നു?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> 4 വയസ്സ്<br>നാല് വയസ്സുള്ളപ്പോഴാണ് അദ്ദേഹത്തിന്റെ കൺമുന്നിൽ വെച്ച് മാതാപിതാക്കളും സഹോദരങ്ങളും കൊല്ലപ്പെട്ടത്.",
    "backSec": "നാല് വയസ്സുള്ളപ്പോഴാണ് അദ്ദേഹത്തിന്റെ കൺമുന്നിൽ വെച്ച് മാതാപിതാക്കളും സഹോദരങ്ങളും കൊല്ലപ്പെട്ടത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ബാലനായ തെഹ്ലിരിയന് അഭയം നൽകിയത് ഏത് വിഭാഗത്തിൽപ്പെട്ട സ്ത്രീയായിരുന്നു?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> കുർദ്ദ് സ്ത്രീ (Kurdish woman)<br>ഒരു കുർദ്ദ് സ്ത്രീയുടെ വീട്ടിലാണ് ആ ബാലൻ അഭയം കണ്ടെത്തിയത്.",
    "backSec": "ഒരു കുർദ്ദ് സ്ത്രീയുടെ വീട്ടിലാണ് ആ ബാലൻ അഭയം കണ്ടെത്തിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അർമേനിയൻ വംശഹത്യയിൽ കൊല്ലപ്പെട്ടവരുടെ ഏകദേശ എണ്ണം എത്രയാണ്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> പത്തുലക്ഷത്തിലധികം (1 to 1.5 million)<br>പത്തുലക്ഷത്തിലധികം (10 to 15 ലക്ഷം) അർമേനിയക്കാരാണ് വംശഹത്യയിൽ കൊല്ലപ്പെട്ടത്.",
    "backSec": "പത്തുലക്ഷത്തിലധികം (10 to 15 ലക്ഷം) അർമേനിയക്കാരാണ് വംശഹത്യയിൽ കൊല്ലപ്പെട്ടത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഈ പാഠഭാഗം നൽകുന്ന ആത്യന്തികമായ സന്ദേശം എന്താണ്?",
    "titleSec": "പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · പോഡ്കാസ്റ്റ് / വിവർത്തനം: അർമേനിയയിലെ ശോകഗാനം (സൊഗൊമോൻ തെഹ്ലിരിയനെ അറിയാമോ?)",
    "backEn": "<strong>ഉത്തരം:</strong> ഭരണകൂട ഭീകരതയ്ക്കെതിരെയുള്ള മാനവിക ജാഗ്രതയും നീതിബോധവും<br>വംശീയ ഉന്മൂലനങ്ങൾക്കെതിരെയുള്ള ലോകമനസ്സാക്ഷിയുടെ ഉണർവും നീതിയുമാണ് പാഠത്തിന്റെ സന്ദേശം.",
    "backSec": "വംശീയ ഉന്മൂലനങ്ങൾക്കെതിരെയുള്ള ലോകമനസ്സാക്ഷിയുടെ ഉണർവും നീതിയുമാണ് പാഠത്തിന്റെ സന്ദേശം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'പൂവമ്പഴം'?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>നിർവ്വചനം:</strong> കദളിപ്പഴം; കഥയിൽ ആത്തേരമ്മയുടെ നാട്ടുപേരും അടിച്ചമർത്തപ്പെട്ട വാത്സല്യ-കാമനകളുടെ പ്രതീകവുമാണ്.",
    "backSec": "അധ്യായം: ചെറുകഥ: പൂവമ്പഴം — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'അന്തർജ്ജനം'?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>നിർവ്വചനം:</strong> നമ്പൂതിരി സമുദായത്തിലെ സ്ത്രീകളെ വിളിച്ചിരുന്ന പദം (അകത്തിരിക്കുന്നവർ).",
    "backSec": "അധ്യായം: ചെറുകഥ: പൂവമ്പഴം — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'മാനസിക സംഘർഷം'?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>നിർവ്വചനം:</strong> സാമൂഹിക വിലക്കുകളും ഉള്ളിലെ വികാരങ്ങളും തമ്മിൽ മനസ്സിലുണ്ടാകുന്ന ഉരസൽ.",
    "backSec": "അധ്യായം: ചെറുകഥ: പൂവമ്പഴം — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'പൂവമ്പഴം' എന്ന പ്രശസ്തമായ ചെറുകഥ രചിച്ചത് ആര്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> കാരൂർ നീലകണ്ഠപ്പിള്ള<br>കാരൂർ നീലകണ്ഠപ്പിള്ളയാണ് 'പൂവമ്പഴം' എന്ന ചെറുകഥയുടെ രചയിതാവ്.",
    "backSec": "കാരൂർ നീലകണ്ഠപ്പിള്ളയാണ് 'പൂവമ്പഴം' എന്ന ചെറുകഥയുടെ രചയിതാവ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കഥയിലെ പ്രധാന സ്ത്രീ കഥാപാത്രമായ അന്തർജ്ജനത്തിന്റെ പേരെന്ത്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> ആത്തേരമ്മ (പൂവമ്പഴം)<br>പൂവമ്പുഴ സ്വദേശിയായ ആത്തേരമ്മയാണ് കഥയിലെ കേന്ദ്ര കഥാപാത്രം.",
    "backSec": "പൂവമ്പുഴ സ്വദേശിയായ ആത്തേരമ്മയാണ് കഥയിലെ കേന്ദ്ര കഥാപാത്രം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ആത്തേരമ്മയോട് സഹതാപവും സ്നേഹവും പുലർത്തിയിരുന്ന യുവാവ് ആര്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> അപ്പു<br>മനയിലെ ആശ്രിതനായ അപ്പു എന്ന യുവാവാണ് ആത്തേരമ്മയോട് സഹതാപം കാണിച്ചത്.",
    "backSec": "മനയിലെ ആശ്രിതനായ അപ്പു എന്ന യുവാവാണ് ആത്തേരമ്മയോട് സഹതാപം കാണിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ആത്തേരമ്മ അപ്പുവിന് സ്നേഹത്തോടെ നൽകിയ ഫലം ഏതാണ്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> പൂവമ്പഴം (കദളിപ്പഴം)<br>കദളിപ്പഴം അഥവാ പൂവമ്പഴമാണ് ആത്തേരമ്മ അപ്പുവിന് കഴിക്കാൻ നൽകിയത്.",
    "backSec": "കദളിപ്പഴം അഥവാ പൂവമ്പഴമാണ് ആത്തേരമ്മ അപ്പുവിന് കഴിക്കാൻ നൽകിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'The Philosophy of the Short-Story' എന്ന പ്രബന്ധം രചിച്ചത് ആര്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> ബ്രാൻഡർ മാത്യൂസ് (1885)<br>1885-ൽ ബ്രാൻഡർ മാത്യൂസ് ആണ് ചെറുകഥയുടെ തത്ത്വചിന്തയെക്കുറിച്ച് പ്രബന്ധം പ്രസിദ്ധീകരിച്ചത്.",
    "backSec": "1885-ൽ ബ്രാൻഡർ മാത്യൂസ് ആണ് ചെറുകഥയുടെ തത്ത്വചിന്തയെക്കുറിച്ച് പ്രബന്ധം പ്രസിദ്ധീകരിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സാഹിത്യ പ്രവർത്തക സഹകരണ സംഘത്തിന്റെ (SPCS) സ്ഥാപക സെക്രട്ടറി ആരായിരുന്നു?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> കാരൂർ നീലകണ്ഠപ്പിള്ള<br>കാരൂർ നീലകണ്ഠപ്പിള്ളയാണ് എഴുത്തുകാരുടെ കൂട്ടായ്മയായ SPCS രൂപീകരിക്കുന്നതിൽ പ്രധാന പങ്കുവഹിച്ചത്.",
    "backSec": "കാരൂർ നീലകണ്ഠപ്പിള്ളയാണ് എഴുത്തുകാരുടെ കൂട്ടായ്മയായ SPCS രൂപീകരിക്കുന്നതിൽ പ്രധാന പങ്കുവഹിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ആത്തേരമ്മയ്ക്ക് ജീവിതത്തിൽ നഷ്ടപ്പെട്ട ഉറ്റബന്ധങ്ങൾ ആരെല്ലാമായിരുന്നു?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> ഭർത്താവും ഏക മകനും<br>ഭർത്താവും ഏക മകനും മരിച്ചതോടെയാണ് അവർ മനയിൽ പൂർണ്ണമായും ഒറ്റപ്പെട്ടത്.",
    "backSec": "ഭർത്താവും ഏക മകനും മരിച്ചതോടെയാണ് അവർ മനയിൽ പൂർണ്ണമായും ഒറ്റപ്പെട്ടത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മനയിൽ നടന്ന പ്രധാന വിശേഷ ചടങ്ങ് എന്തായിരുന്നു?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> നമ്പൂതിരിയുടെ മൂന്നാമത്തെ വേളി (വിവാഹം)<br>മനയിലെ നമ്പൂതിരി മൂന്നാമതൊരു അന്തർജ്ജനത്തെ വേളി കഴിക്കുന്ന സന്ദർഭത്തിലാണ് കഥ നടക്കുന്നത്.",
    "backSec": "മനയിലെ നമ്പൂതിരി മൂന്നാമതൊരു അന്തർജ്ജനത്തെ വേളി കഴിക്കുന്ന സന്ദർഭത്തിലാണ് കഥ നടക്കുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'എന്റെ വീതത്തിന് ഞാനും അവരെ വേദനിപ്പിച്ചു' എന്ന് സ്വയം വിലപിച്ചത് ആര്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> അപ്പു<br>ആത്തേരമ്മയുടെ മുറിയിൽ നിന്ന് ഓടിപ്പോന്ന ശേഷം കുറ്റബോധത്താൽ നീറിയ അപ്പുവാണ് ഇത് പറയുന്നത്.",
    "backSec": "ആത്തേരമ്മയുടെ മുറിയിൽ നിന്ന് ഓടിപ്പോന്ന ശേഷം കുറ്റബോധത്താൽ നീറിയ അപ്പുവാണ് ഇത് പറയുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'പൂവമ്പഴം' എന്ന ശീർഷകം കഥയിൽ എന്തിനെയാണ് സൂചിപ്പിക്കുന്നത്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> ആത്തേരമ്മയെയും അവരുടെ അടിച്ചമർത്തപ്പെട്ട സ്നേഹദാഹത്തെയും<br>ആത്തേരമ്മയുടെ നാട്ടുപേരും ഒപ്പം അവരുടെ ആന്തരിക വികാരങ്ങളുടെ പ്രതീകവുമാണ് പൂവമ്പഴം.",
    "backSec": "ആത്തേരമ്മയുടെ നാട്ടുപേരും ഒപ്പം അവരുടെ ആന്തരിക വികാരങ്ങളുടെ പ്രതീകവുമാണ് പൂവമ്പഴം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കാരൂർ നീലകണ്ഠപ്പിള്ളയുടെ ജന്മസ്ഥലം എവിടെയാണ്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> ഏറ്റുമാനൂർ (കോട്ടയം)<br>1898-ൽ കോട്ടയം ജില്ലയിലെ ഏറ്റുമാനൂരിലാണ് കാരൂർ ജനിച്ചത്.",
    "backSec": "1898-ൽ കോട്ടയം ജില്ലയിലെ ഏറ്റുമാനൂരിലാണ് കാരൂർ ജനിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കാരൂർ പ്രധാനമായും ഏത് വിഭാഗം ജനങ്ങളുടെ ജീവിതമാണ് കഥകളിൽ ആവിഷ്കരിച്ചത്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> സാധാരണക്കാരായ അധ്യാപകരും ഗ്രാമീണരും<br>പ്രാഥമിക അധ്യാപകരുടെയും സാധാരണ ഗ്രാമീണരുടെയും ജീവിതമാണ് കാരൂരിന്റെ പ്രധാന തട്ടകം.",
    "backSec": "പ്രാഥമിക അധ്യാപകരുടെയും സാധാരണ ഗ്രാമീണരുടെയും ജീവിതമാണ് കാരൂരിന്റെ പ്രധാന തട്ടകം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ആത്തേരമ്മ അപ്പുവിനെ മുറിയിലേക്ക് വിളിപ്പിച്ചത് എപ്പോൾ?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> ഊണ് കഴിഞ്ഞ ഉടനെ<br>കല്യാണസദ്യ കഴിഞ്ഞ് എല്ലാവരും പിരിഞ്ഞ ശേഷമാണ് അവർ അപ്പുവിനെ വിളിപ്പിച്ചത്.",
    "backSec": "കല്യാണസദ്യ കഴിഞ്ഞ് എല്ലാവരും പിരിഞ്ഞ ശേഷമാണ് അവർ അപ്പുവിനെ വിളിപ്പിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അപ്പു ആത്തേരമ്മയുടെ മുറിയിൽ നിന്ന് ഭയന്നോടാൻ കാരണം എന്ത്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> അവരുടെ ഭാവത്തിലും പെരുമാറ്റത്തിലും കാമനകളുടെ ധ്വനി കണ്ടതുകൊണ്ട്<br>ആത്തേരമ്മയുടെ സംസാരത്തിൽ തെളിഞ്ഞ അടിച്ചമർത്തപ്പെട്ട കാമനകളെ ഉൾക്കൊള്ളാനാവാതെയാണ് അപ്പു ഭയന്നത്.",
    "backSec": "ആത്തേരമ്മയുടെ സംസാരത്തിൽ തെളിഞ്ഞ അടിച്ചമർത്തപ്പെട്ട കാമനകളെ ഉൾക്കൊള്ളാനാവാതെയാണ് അപ്പു ഭയന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'പൂവമ്പഴം' എന്ന കഥ നൽകുന്ന ആത്യന്തികമായ സന്ദേശം എന്താണ്?",
    "titleSec": "ചെറുകഥ: പൂവമ്പഴം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: പൂവമ്പഴം",
    "backEn": "<strong>ഉത്തരം:</strong> മനുഷ്യസഹജമായ ഏകാന്തതയോടും സ്നേഹദാഹത്തോടുമുള്ള സഹാനുഭൂതി<br>സഹജീവികളുടെ ഏകാന്തതയെയും വികാരങ്ങളെയും സഹാനുഭൂതിയോടെ കാണണമെന്ന സന്ദേശമാണിത്.",
    "backSec": "സഹജീവികളുടെ ഏകാന്തതയെയും വികാരങ്ങളെയും സഹാനുഭൂതിയോടെ കാണണമെന്ന സന്ദേശമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'വില്ലുവണ്ടി സമരം (1893)'?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>നിർവ്വചനം:</strong> അധഃസ്ഥിതരുടെ സഞ്ചാരസ്വാതന്ത്ര്യത്തിനായി അയ്യങ്കാളി വെങ്ങാനൂരിൽ നടത്തിയ ചരിത്രസമരം.",
    "backSec": "അധ്യായം: ചെറുകഥ: വില്ലുവണ്ടി — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'സവർണ്ണ പൊതുബോധം'?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>നിർവ്വചനം:</strong> ഉപരിവർഗ്ഗ താല്പര്യങ്ങളെയും മുൻവിധികളെയും സ്വാഭാവിക സത്യങ്ങളായി കാണുന്ന മനോഭാവം.",
    "backSec": "അധ്യായം: ചെറുകഥ: വില്ലുവണ്ടി — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'സ്ഥാപനവൽക്കൃത വിവേചനം'?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>നിർവ്വചനം:</strong> നിയമപരമായി സമത്വമുണ്ടെങ്കിലും വിദ്യാഭ്യാസ-തൊഴിൽ ഇടങ്ങളിൽ ഒളിഞ്ഞുകിടക്കുന്ന വിവേചനം.",
    "backSec": "അധ്യായം: ചെറുകഥ: വില്ലുവണ്ടി — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'വില്ലുവണ്ടി' എന്ന കഥ രചിച്ചത് ആര്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> കെ. രേഖ<br>സമകാലിക കഥാകൃത്തായ കെ. രേഖയാണ് 'വില്ലുവണ്ടി' എന്ന കഥ എഴുതിയത്.",
    "backSec": "സമകാലിക കഥാകൃത്തായ കെ. രേഖയാണ് 'വില്ലുവണ്ടി' എന്ന കഥ എഴുതിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കഥയിലെ പ്രധാന ദലിത് കഥാപാത്രമായ പെൺകുട്ടിയുടെ പേരെന്ത്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> ഉമാബാലൻ<br>മാനേജ്‌മെന്റ് പഠനം പൂർത്തിയാക്കിയ ഉമാബാലനാണ് കഥയിലെ കേന്ദ്ര കഥാപാത്രം.",
    "backSec": "മാനേജ്‌മെന്റ് പഠനം പൂർത്തിയാക്കിയ ഉമാബാലനാണ് കഥയിലെ കേന്ദ്ര കഥാപാത്രം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മഹാത്മാ അയ്യങ്കാളി ചരിത്രപ്രസിദ്ധമായ വില്ലുവണ്ടി സമരം നടത്തിയത് ഏത് വർഷത്തിലാണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> 1893<br>1893-ൽ വെങ്ങാനൂരിലെ പൊതുവഴിയിലൂടെ വില്ലുവണ്ടി ഓടിച്ചാണ് അയ്യങ്കാളി സമരം നടത്തിയത്.",
    "backSec": "1893-ൽ വെങ്ങാനൂരിലെ പൊതുവഴിയിലൂടെ വില്ലുവണ്ടി ഓടിച്ചാണ് അയ്യങ്കാളി സമരം നടത്തിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കഥയിലെ സവർണ്ണ മുൻവിധികളുള്ള അധ്യാപക കഥാപാത്രം ആരാണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> വെങ്കിട സാർ<br>വെങ്കിട സാറാണ് ഉമാബാലനോട് ജാതിവിവേചനപരമായ സമീപനം പുലർത്തുന്നത്.",
    "backSec": "വെങ്കിട സാറാണ് ഉമാബാലനോട് ജാതിവിവേചനപരമായ സമീപനം പുലർത്തുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഉമാബാലന്റെ സഹപാഠിയായി കഥയിൽ കടന്നുവരുന്ന മറ്റൊരു വിദ്യാർത്ഥി ആര്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> ഇല്യാസ്<br>ഇല്യാസ് എന്ന വിദ്യാർത്ഥിയും ഉമാബാലന്റെ സഹപാഠിയായി കടന്നുവരുന്നുണ്ട്.",
    "backSec": "ഇല്യാസ് എന്ന വിദ്യാർത്ഥിയും ഉമാബാലന്റെ സഹപാഠിയായി കടന്നുവരുന്നുണ്ട്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഉമാബാലൻ പഠിച്ച ഉന്നത കോഴ്സ് ഏതാണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> മാനേജ്‌മെന്റ് കോഴ്സ് (MBA/Management)<br>പ്രൊഫഷണൽ മാനേജ്‌മെന്റ് കോഴ്സാണ് അവൾ പഠിച്ചത്.",
    "backSec": "പ്രൊഫഷണൽ മാനേജ്‌മെന്റ് കോഴ്സാണ് അവൾ പഠിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അയ്യങ്കാളി വില്ലുവണ്ടിയിൽ പൂട്ടിയിരുന്നത് ഏത് മൃഗങ്ങളെയാണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> രണ്ട് വെള്ളക്കാളകൾ<br>മണികെട്ടിയ രണ്ട് വെള്ളക്കാളകളെ പൂട്ടിയ വില്ലുവണ്ടിയിലാണ് അയ്യങ്കാളി സഞ്ചരിച്ചത്.",
    "backSec": "മണികെട്ടിയ രണ്ട് വെള്ളക്കാളകളെ പൂട്ടിയ വില്ലുവണ്ടിയിലാണ് അയ്യങ്കാളി സഞ്ചരിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അയ്യങ്കാളി ദലിത് കുട്ടികളുടെ വിദ്യാഭ്യാസത്തിനായി വിദ്യാലയ പ്രവേശന സമരം തുടങ്ങിയ വർഷമേത്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> 1904<br>1904-ൽ വെങ്ങാനൂരിൽ സ്വന്തമായി പള്ളിക്കൂടം സ്ഥാപിച്ചും സമരം നടത്തിയും അദ്ദേഹം പോരാടി.",
    "backSec": "1904-ൽ വെങ്ങാനൂരിൽ സ്വന്തമായി പള്ളിക്കൂടം സ്ഥാപിച്ചും സമരം നടത്തിയും അദ്ദേഹം പോരാടി."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കഥ തുടങ്ങുന്നത് ഏത് സന്ദർഭത്തിലാണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> കോളേജ് അലുമിനി മീറ്റിംഗിന്റെ ക്ഷണക്കത്ത് കിട്ടുമ്പോൾ<br>പഴയ സഹപാഠികളുടെ ഒത്തുചേരൽ (Reunion) ക്ഷണക്കത്ത് കിട്ടുമ്പോഴാണ് കഥ ആരംഭിക്കുന്നത്.",
    "backSec": "പഴയ സഹപാഠികളുടെ ഒത്തുചേരൽ (Reunion) ക്ഷണക്കത്ത് കിട്ടുമ്പോഴാണ് കഥ ആരംഭിക്കുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "വെങ്കിട സാറിന്റെ പെരുമാറ്റത്തെ കഥയിൽ വിശേഷിപ്പിക്കുന്നത് എങ്ങനെയാണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> പരിഷ്കൃതമായ കാപട്യവും അദൃശ്യമായ ജാതിബോധവും<br>പുറമെ പരിഷ്കാരിയായി നടിച്ച് ഉള്ളിൽ ജാതിവിവേചനം കൊണ്ടുനടക്കുന്ന ആളാണ് വെങ്കിട സാർ.",
    "backSec": "പുറമെ പരിഷ്കാരിയായി നടിച്ച് ഉള്ളിൽ ജാതിവിവേചനം കൊണ്ടുനടക്കുന്ന ആളാണ് വെങ്കിട സാർ."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'വില്ലുവണ്ടി' എന്ന വാക്ക് കഥയിൽ എന്തിന്റെ പ്രതീകമാണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> കീഴാളരുടെ ചെറുത്തുനിൽപ്പും ആത്മാഭിമാനവും<br>അയ്യങ്കാളിയുടെ പോരാട്ടവീര്യത്തിന്റെയും കീഴാളരുടെ ആത്മാഭിമാനത്തിന്റെയും പ്രതീകമാണ് വില്ലുവണ്ടി.",
    "backSec": "അയ്യങ്കാളിയുടെ പോരാട്ടവീര്യത്തിന്റെയും കീഴാളരുടെ ആത്മാഭിമാനത്തിന്റെയും പ്രതീകമാണ് വില്ലുവണ്ടി."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഉമാബാലൻ കോളേജിൽ പ്രവേശനം നേടിയത് ഏത് വഴിയാണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> സംവരണം (Reservation)<br>സംവരണത്തിലൂടെയാണ് ഉമാബാലൻ ആ ഉന്നത സ്ഥാപനത്തിൽ എത്തിയത്.",
    "backSec": "സംവരണത്തിലൂടെയാണ് ഉമാബാലൻ ആ ഉന്നത സ്ഥാപനത്തിൽ എത്തിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സാധുജന പരിപാലന സംഘം (SJPS) സ്ഥാപിച്ചത് ആരാണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> മഹാത്മാ അയ്യങ്കാളി (1907)<br>1907-ൽ മഹാത്മാ അയ്യങ്കാളിയാണ് സാധുജന പരിപാലന സംഘം സ്ഥാപിച്ചത്.",
    "backSec": "1907-ൽ മഹാത്മാ അയ്യങ്കാളിയാണ് സാധുജന പരിപാലന സംഘം സ്ഥാപിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കഥാകാരിയായ കെ. രേഖയുടെ രചനകളുടെ പ്രധാന സവിശേഷത എന്താണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> തീക്ഷ്ണമായ സാമൂഹിക-സ്ത്രീപക്ഷ യാഥാർത്ഥ്യങ്ങൾ<br>സ്ത്രീജീവിതത്തിന്റെയും സാമൂഹിക അസമത്വങ്ങളുടെയും ശക്തമായ ആവിഷ്കാരമാണ് രേഖയുടെ കഥകൾ.",
    "backSec": "സ്ത്രീജീവിതത്തിന്റെയും സാമൂഹിക അസമത്വങ്ങളുടെയും ശക്തമായ ആവിഷ്കാരമാണ് രേഖയുടെ കഥകൾ."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'വില്ലുവണ്ടി' എന്ന കഥ വായനക്കാരോട് സംവദിക്കുന്ന പ്രധാന വിഷയം എന്താണ്?",
    "titleSec": "ചെറുകഥ: വില്ലുവണ്ടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചെറുകഥ: വില്ലുവണ്ടി",
    "backEn": "<strong>ഉത്തരം:</strong> ആധുനികതയുടെ മൂടുപടത്തിനുള്ളിലെ ജാതിവിവേചനവും അതിജീവനവും<br>ആധുനിക വിദ്യാഭ്യാസ ഇടങ്ങളിൽ നിലനിൽക്കുന്ന ജാതിവിവേചനങ്ങളും അതിജീവനവുമാണ് കഥയുടെ കാതൽ.",
    "backSec": "ആധുനിക വിദ്യാഭ്യാസ ഇടങ്ങളിൽ നിലനിൽക്കുന്ന ജാതിവിവേചനങ്ങളും അതിജീവനവുമാണ് കഥയുടെ കാതൽ."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ദൈവത്തിന്റെ കണ്ണ്'?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>നിർവ്വചനം:</strong> മനുഷ്യന്റെ സകല കർമ്മങ്ങളെയും സദാ വീക്ഷിക്കുന്ന പരമമായ പ്രപഞ്ച നീതി.",
    "backSec": "അധ്യായം: നോവൽ: ദൈവത്തിന്റെ കണ്ണ് — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'നാരകത്ത് തറവാട്'?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>നിർവ്വചനം:</strong> നോവലിലെ സംഭവങ്ങൾ നടക്കുന്ന, ജീർണ്ണതയും നിധിവേട്ടയും നിറഞ്ഞ പരമ്പരാഗത വീട്.",
    "backSec": "അധ്യായം: നോവൽ: ദൈവത്തിന്റെ കണ്ണ് — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'കുട്ടിയുടെ ദൃഷ്ടി (Child's Point of View)'?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>നിർവ്വചനം:</strong> നിഷ്കളങ്കമായ കണ്ണിലൂടെ മുതിർന്നവരുടെ സങ്കീർണ്ണതകൾ കാണുന്ന സാഹിത്യ തന്ത്രം.",
    "backSec": "അധ്യായം: നോവൽ: ദൈവത്തിന്റെ കണ്ണ് — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ദൈവത്തിന്റെ കണ്ണ്' എന്ന നോവൽ രചിച്ചത് ആരാണ്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> എൻ.പി. മുഹമ്മദ്<br>എൻ.പി. മുഹമ്മദാണ് കേന്ദ്ര സാഹിത്യ അക്കാദമി അവാർഡ് നേടിയ 'ദൈവത്തിന്റെ കണ്ണ്' എഴുതിയത്.",
    "backSec": "എൻ.പി. മുഹമ്മദാണ് കേന്ദ്ര സാഹിത്യ അക്കാദമി അവാർഡ് നേടിയ 'ദൈവത്തിന്റെ കണ്ണ്' എഴുതിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ദൈവത്തിന്റെ കണ്ണ്' എന്ന നോവലിന് കേന്ദ്ര സാഹിത്യ അക്കാദമി പുരസ്കാരം ലഭിച്ച വർഷമേത്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> 1993<br>1993-ലാണ് ഈ നോവലിന് കേന്ദ്ര സാഹിത്യ അക്കാദമി അവാർഡ് ലഭിച്ചത്.",
    "backSec": "1993-ലാണ് ഈ നോവലിന് കേന്ദ്ര സാഹിത്യ അക്കാദമി അവാർഡ് ലഭിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "നോവലിന്റെ പ്രധാന കഥാ പശ്ചാത്തലമായ ഗ്രാമം ഏതാണ്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> പരപ്പനങ്ങാടി<br>മലപ്പുറം ജില്ലയിലെ തീരദേശ ഗ്രാമമായ പരപ്പനങ്ങാടിയാണ് നോവലിന്റെ പശ്ചാത്തലം.",
    "backSec": "മലപ്പുറം ജില്ലയിലെ തീരദേശ ഗ്രാമമായ പരപ്പനങ്ങാടിയാണ് നോവലിന്റെ പശ്ചാത്തലം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "നോവലിലെ പ്രധാന കേന്ദ്ര കഥാപാത്രമായ ബാലന്റെ പേരെന്ത്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> കോയമോൻ (അഹമ്മദ്)<br>കോയമോൻ എന്ന ബാലന്റെ ദൃഷ്ടിയിലൂടെയാണ് കഥ വികസിക്കുന്നത്.",
    "backSec": "കോയമോൻ എന്ന ബാലന്റെ ദൃഷ്ടിയിലൂടെയാണ് കഥ വികസിക്കുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കോയമോന്റെ കളിക്കൂട്ടുകാരിയായ ഉമ്മുവിനെ എത്രാമത്തെ വയസ്സിലാണ് വിവാഹം കഴിപ്പിച്ചത്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> 10-ാം വയസ്സിൽ<br>ബാലവിവാഹത്തിന്റെ ഇരയായി പത്താം വയസ്സിലാണ് ഉമ്മുവിനെ വിവാഹം കഴിപ്പിച്ചത്.",
    "backSec": "ബാലവിവാഹത്തിന്റെ ഇരയായി പത്താം വയസ്സിലാണ് ഉമ്മുവിനെ വിവാഹം കഴിപ്പിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "തറവാട്ടിൽ ചങ്ങലയിൽ ബന്ധിക്കപ്പെട്ട നിലയിൽ കഴിയുന്ന കഥാപാത്രം ആര്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> മോയ്മതാലി<br>കോയമോന്റെ പ്രിയപ്പെട്ട ഇളയച്ഛനായ മോയ്മതാലിയാണ് മാനസികാസ്വാസ്ഥ്യം മൂലം ചങ്ങലയിൽ കഴിയുന്നത്.",
    "backSec": "കോയമോന്റെ പ്രിയപ്പെട്ട ഇളയച്ഛനായ മോയ്മതാലിയാണ് മാനസികാസ്വാസ്ഥ്യം മൂലം ചങ്ങലയിൽ കഴിയുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "നിധിവേട്ടയ്ക്കായി നാരകത്ത് തറവാട്ടിലെത്തുന്ന മന്ത്രവാദി ആരാണ്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> താമി<br>താമി എന്ന മന്ത്രവാദിയാണ് നിധിയെടുക്കാൻ തറവാട്ടിൽ എത്തുന്നത്.",
    "backSec": "താമി എന്ന മന്ത്രവാദിയാണ് നിധിയെടുക്കാൻ തറവാട്ടിൽ എത്തുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അന്ധവിശ്വാസങ്ങൾക്കെതിരെ യുക്തിചിന്തയും വായനയും ഉയർത്തിപ്പിടിച്ച കഥാപാത്രം ആര്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> കുഞ്ഞഹമ്മദ് മാസ്റ്റർ<br>കുഞ്ഞഹമ്മദ് മാസ്റ്ററാണ് ശാസ്ത്രബോധവും വായനയും പ്രോത്സാഹിപ്പിച്ചത്.",
    "backSec": "കുഞ്ഞഹമ്മദ് മാസ്റ്ററാണ് ശാസ്ത്രബോധവും വായനയും പ്രോത്സാഹിപ്പിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "നാട്ടുകാർ കുഞ്ഞഹമ്മദ് മാസ്റ്ററെ ആക്ഷേപിച്ചു വിളിച്ച പേരെന്ത്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> നായ്ക്കുഞ്ഞഹമ്മദ്<br>യാഥാസ്ഥിതിക സമൂഹത്തിന്റെ പുച്ഛം കാരണം അവർ അദ്ദേഹത്തെ 'നായ്ക്കുഞ്ഞഹമ്മദ്' എന്ന് വിളിച്ചു.",
    "backSec": "യാഥാസ്ഥിതിക സമൂഹത്തിന്റെ പുച്ഛം കാരണം അവർ അദ്ദേഹത്തെ 'നായ്ക്കുഞ്ഞഹമ്മദ്' എന്ന് വിളിച്ചു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എൻ.പി. മുഹമ്മദ് കേരള സാഹിത്യ അക്കാദമിയിൽ വഹിച്ച പ്രധാന പദവി എന്തായിരുന്നു?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> പ്രസിഡന്റ്<br>എൻ.പി. മുഹമ്മദ് കേരള സാഹിത്യ അക്കാദമി പ്രസിഡന്റായി സേവനമനുഷ്ഠിച്ചിട്ടുണ്ട്.",
    "backSec": "എൻ.പി. മുഹമ്മദ് കേരള സാഹിത്യ അക്കാദമി പ്രസിഡന്റായി സേവനമനുഷ്ഠിച്ചിട്ടുണ്ട്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ദൈവത്തിന്റെ കണ്ണ്' എന്ന ശീർഷകം എന്തിനെയാണ് അർത്ഥമാക്കുന്നത്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> മനുഷ്യന്റെ സകല കർമ്മങ്ങളെയും സദാ വീക്ഷിക്കുന്ന പ്രപഞ്ച നീതി<br>മനുഷ്യന്റെ സകല ചതികളും തെറ്റുകളും നിരീക്ഷിക്കുന്ന പരമമായ പ്രപഞ്ച നീതിയാണിത്.",
    "backSec": "മനുഷ്യന്റെ സകല ചതികളും തെറ്റുകളും നിരീക്ഷിക്കുന്ന പരമമായ പ്രപഞ്ച നീതിയാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "നോവലിൽ തകർച്ച നേരിടുന്ന പ്രധാന കുടുംബം ഏതാണ്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> നാരകത്ത് തറവാട്<br>നാരകത്ത് തറവാടിന്റെ തകർച്ചയും പതനവുമാണ് കഥയുടെ കാതൽ.",
    "backSec": "നാരകത്ത് തറവാടിന്റെ തകർച്ചയും പതനവുമാണ് കഥയുടെ കാതൽ."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എൻ.പി. മുഹമ്മദും എം.ടി. വാസുദേവൻ നായരും ചേർന്നെഴുതിയ സംയുക്ത നോവൽ ഏതാണ്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> അറബിപ്പൊന്ന്<br>സ്വർണ്ണക്കള്ളക്കടത്തിന്റെ പശ്ചാത്തലത്തിൽ ഇരുവരും ചേർന്നെഴുതിയ വിഖ്യാത നോവലാണ് 'അറബിപ്പൊന്ന്'.",
    "backSec": "സ്വർണ്ണക്കള്ളക്കടത്തിന്റെ പശ്ചാത്തലത്തിൽ ഇരുവരും ചേർന്നെഴുതിയ വിഖ്യാത നോവലാണ് 'അറബിപ്പൊന്ന്'."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എൻ.പി. മുഹമ്മദ് അന്തരിച്ച വർഷമേത്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> 2003 ജനുവരി 3<br>2003 ജനുവരി 3-നാണ് കോഴിക്കോട് വെച്ച് അദ്ദേഹം അന്തരിച്ചത്.",
    "backSec": "2003 ജനുവരി 3-നാണ് കോഴിക്കോട് വെച്ച് അദ്ദേഹം അന്തരിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ദൈവത്തിന്റെ കണ്ണ്' എന്ന നോവൽ മുന്നോട്ടുവെക്കുന്ന പ്രധാന സന്ദേശം എന്താണ്?",
    "titleSec": "നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നോവൽ: ദൈവത്തിന്റെ കണ്ണ്",
    "backEn": "<strong>ഉത്തരം:</strong> അന്ധവിശ്വാസങ്ങളുടെ വിനാശവും മാനവിക-യുക്തിബോധത്തിന്റെ ആവശ്യകതയും<br>അന്ധവിശ്വാസങ്ങൾ കുടുംബങ്ങളെ തകർക്കുമെന്നും വിവേകവും ശാസ്ത്രബോധവുമാണ് ആവശ്യമെന്നുമുള്ള സന്ദേശമാണിത്.",
    "backSec": "അന്ധവിശ്വാസങ്ങൾ കുടുംബങ്ങളെ തകർക്കുമെന്നും വിവേകവും ശാസ്ത്രബോധവുമാണ് ആവശ്യമെന്നുമുള്ള സന്ദേശമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'കിളിപ്പാട്ട്'?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>നിർവ്വചനം:</strong> തത്തയെക്കൊണ്ട് സരസ്വതീ വന്ദനം നടത്തി കഥ പാടിക്കുന്ന മലയാള കാവ്യരീതി.",
    "backSec": "അധ്യായം: കവിത: സമുദ്രലംഘനം — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'സുന്ദരകാണ്ഡം'?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>നിർവ്വചനം:</strong> രാമായണത്തിലെ അഞ്ചാമത്തെ കാണ്ഡം; ഹനുമാന്റെ ലങ്കായാത്രയും സീതാന്വേഷണവും പ്രതിപാദിക്കുന്നു.",
    "backSec": "അധ്യായം: കവിത: സമുദ്രലംഘനം — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'വീരരസം'?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>നിർവ്വചനം:</strong> ധീരത, ആത്മവിശ്വാസം, പരാക്രമം എന്നിവയിലൂടെ ഉളവാകുന്ന കാവ്യാനുഭൂതി.",
    "backSec": "അധ്യായം: കവിത: സമുദ്രലംഘനം — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മലയാള ഭാഷയുടെ പിതാവായി അറിയപ്പെടുന്നത് ആര്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> തുഞ്ചത്ത് രാമാനുജൻ എഴുത്തച്ഛൻ<br>തുഞ്ചത്ത് രാമാനുജൻ എഴുത്തച്ഛനാണ് മലയാള ഭാഷാപിതാവ്.",
    "backSec": "തുഞ്ചത്ത് രാമാനുജൻ എഴുത്തച്ഛനാണ് മലയാള ഭാഷാപിതാവ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'സമുദ്രലംഘനം' അധ്യാത്മരാമായണത്തിലെ ഏത് കാണ്ഡത്തിലാണ് ഉൾപ്പെടുന്നത്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> സുന്ദരകാണ്ഡം<br>ഹനുമാന്റെ ലങ്കായാത്രയും സീതാന്വേഷണവും പ്രതിപാദിക്കുന്ന സുന്ദരകാണ്ഡത്തിലാണ് സമുദ്രലംഘനം.",
    "backSec": "ഹനുമാന്റെ ലങ്കായാത്രയും സീതാന്വേഷണവും പ്രതിപാദിക്കുന്ന സുന്ദരകാണ്ഡത്തിലാണ് സമുദ്രലംഘനം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "തത്തയെക്കൊണ്ട് കഥ പറയിക്കുന്ന കാവ്യപ്രസ്ഥാനം ഏതാണ്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> കിളിപ്പാട്ട് പ്രസ്ഥാനം<br>എഴുത്തച്ഛൻ ജനകീയമാക്കിയ പ്രസ്ഥാനമാണ് കിളിപ്പാട്ട് പ്രസ്ഥാനം.",
    "backSec": "എഴുത്തച്ഛൻ ജനകീയമാക്കിയ പ്രസ്ഥാനമാണ് കിളിപ്പാട്ട് പ്രസ്ഥാനം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഹനുമാൻ സമുദ്രലംഘനത്തിന് മുമ്പ് കയറിനിന്ന പർവ്വതം ഏതാണ്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> മഹേന്ദ്രപർവ്വതം<br>ദക്ഷിണ സമുദ്രതീരത്തെ മഹേന്ദ്രപർവ്വതത്തിന്റെ മുകളിൽ നിന്നാണ് ഹനുമാൻ ആകാശത്തേക്ക് കുതിച്ചത്.",
    "backSec": "ദക്ഷിണ സമുദ്രതീരത്തെ മഹേന്ദ്രപർവ്വതത്തിന്റെ മുകളിൽ നിന്നാണ് ഹനുമാൻ ആകാശത്തേക്ക് കുതിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഹനുമാന്റെ മറഞ്ഞുപോയ ശക്തികളെ ഓർമ്മിപ്പിച്ചുണർത്തിയ വൃദ്ധ വാനരൻ ആര്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> ജാംബവാൻ<br>ജാംബവാന്റെ വാക്കുകളാണ് ഹനുമാന്റെ ശക്തിയെ ഉണർത്തിയത്.",
    "backSec": "ജാംബവാന്റെ വാക്കുകളാണ് ഹനുമാന്റെ ശക്തിയെ ഉണർത്തിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഹനുമാൻ ആരുടെ പുത്രനാണ്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> വായുദേവന്റെ (പവനപുത്രൻ)<br>ഹനുമാൻ വായുദേവന്റെ (പവനന്റെ) പുത്രനാണ്.",
    "backSec": "ഹനുമാൻ വായുദേവന്റെ (പവനന്റെ) പുത്രനാണ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഹനുമാൻ തന്റെ യാത്രയെ ഉപമിക്കുന്നത് എന്തിനോടാണ്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> ശ്രീരാമന്റെ അസ്ത്രത്തോട് (ബാണം)<br>'രാമബാണം കണക്കെ താൻ പായും' എന്നാണ് ഹനുമാൻ പ്രഖ്യാപിക്കുന്നത്.",
    "backSec": "'രാമബാണം കണക്കെ താൻ പായും' എന്നാണ് ഹനുമാൻ പ്രഖ്യാപിക്കുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എഴുത്തച്ഛൻ ജീവിച്ചിരുന്ന കാലഘട്ടം ഏതാണെന്നാണ് പൊതുവെ കരുതപ്പെടുന്നത്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> 16-ാം നൂറ്റാണ്ട്<br>പതിനാറാം നൂറ്റാണ്ടിലാണ് എഴുത്തച്ഛൻ ജീവിച്ചിരുന്നത്.",
    "backSec": "പതിനാറാം നൂറ്റാണ്ടിലാണ് എഴുത്തച്ഛൻ ജീവിച്ചിരുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സമുദ്രലംഘനം കാവ്യഭാഗത്ത് പ്രബലമായി നിൽക്കുന്ന പ്രധാന രസങ്ങൾ ഏവ?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> വീരരസവും ഭക്തിരസവും<br>ഹനുമാന്റെ വീര്യവും ശ്രീരാമനോടുള്ള ആഴമേറിയ ഭക്തിയുമാണ് ഇതിൽ നിറഞ്ഞുനിൽക്കുന്നത്.",
    "backSec": "ഹനുമാന്റെ വീര്യവും ശ്രീരാമനോടുള്ള ആഴമേറിയ ഭക്തിയുമാണ് ഇതിൽ നിറഞ്ഞുനിൽക്കുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എഴുത്തച്ഛന്റെ ജന്മസ്ഥലം എവിടെയാണ്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> തൃക്കണ്ടിയൂർ (തിരൂർ, മലപ്പുറം)<br>മലപ്പുറം ജില്ലയിലെ തിരൂരിനടുത്തുള്ള തൃക്കണ്ടിയൂരിലാണ് തുഞ്ചൻ പറമ്പ് സ്ഥിതി ചെയ്യുന്നത്.",
    "backSec": "മലപ്പുറം ജില്ലയിലെ തിരൂരിനടുത്തുള്ള തൃക്കണ്ടിയൂരിലാണ് തുഞ്ചൻ പറമ്പ് സ്ഥിതി ചെയ്യുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'മമ ജനകസദൃശനഹമതിചപലമൊരു കാറ്റെന്നു കണ്ടാലും' - ഇവിടെ 'ജനകൻ' എന്ന് ഉദ്ദേശിച്ചത് ആരെയാണ്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> വായുദേവനെ<br>തന്റെ പിതാവായ വായുദേവനെപ്പോലെ താനും അതിവേഗതയുള്ളവനാണെന്നാണ് ഹനുമാൻ പറയുന്നത്.",
    "backSec": "തന്റെ പിതാവായ വായുദേവനെപ്പോലെ താനും അതിവേഗതയുള്ളവനാണെന്നാണ് ഹനുമാൻ പറയുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "അധ്യാത്മരാമായണം കിളിപ്പാട്ടിൽ എത്ര കാണ്ഡങ്ങളുണ്ട്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> 6 കാണ്ഡങ്ങൾ<br>ബാല, അയോദ്ധ്യാ, ആരണ്യ, കിഷ്കിന്ധാ, സുന്ദര, യുദ്ധ കാണ്ഡങ്ങൾ ഉൾപ്പെടെ ആറ് കാണ്ഡങ്ങളാണുള്ളത്.",
    "backSec": "ബാല, അയോദ്ധ്യാ, ആരണ്യ, കിഷ്കിന്ധാ, സുന്ദര, യുദ്ധ കാണ്ഡങ്ങൾ ഉൾപ്പെടെ ആറ് കാണ്ഡങ്ങളാണുള്ളത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എഴുത്തച്ഛന്റെ മറ്റൊരു പ്രശസ്തമായ കിളിപ്പാട്ട് കൃതി ഏതാണ്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> മഹാഭാരതം കിളിപ്പാട്ട്<br>മഹാഭാരതം കിളിപ്പാട്ടാണ് എഴുത്തച്ഛന്റെ മറ്റൊരു പ്രധാന കൃതി.",
    "backSec": "മഹാഭാരതം കിളിപ്പാട്ടാണ് എഴുത്തച്ഛന്റെ മറ്റൊരു പ്രധാന കൃതി."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സമുദ്രത്തിന്റെ വിസ്തൃതി എത്ര യോജനയാണെന്നാണ് കവിതയിൽ പറയുന്നത്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> 100 യോജന<br>നൂറുയോജന വിസ്താരമുള്ള സമുദ്രത്തെയാണ് ഹനുമാൻ ചാടിക്കടക്കുന്നത്.",
    "backSec": "നൂറുയോജന വിസ്താരമുള്ള സമുദ്രത്തെയാണ് ഹനുമാൻ ചാടിക്കടക്കുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'സമുദ്രലംഘനം' എന്ന കാവ്യഭാഗം വായനക്കാർക്ക് നൽകുന്ന പ്രചോദനം എന്താണ്?",
    "titleSec": "കവിത: സമുദ്രലംഘനം",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: സമുദ്രലംഘനം",
    "backEn": "<strong>ഉത്തരം:</strong> അസാധ്യമെന്ന് തോന്നുന്നതിനെയും ഇച്ഛാശക്തിയും വിശ്വാസവും കൊണ്ട് കീഴടക്കാം<br>പ്രതിസന്ധികളെ ഇച്ഛാശക്തിയോടെ അതിജീവിക്കാമെന്ന വലിയ ആത്മവിശ്വാസമാണ് ഈ കവിത പകരുന്നത്.",
    "backSec": "പ്രതിസന്ധികളെ ഇച്ഛാശക്തിയോടെ അതിജീവിക്കാമെന്ന വലിയ ആത്മവിശ്വാസമാണ് ഈ കവിത പകരുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ഖണ്ഡകാവ്യം'?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>നിർവ്വചനം:</strong> മഹാകാവ്യത്തിന്റെ സകല ലക്ഷണങ്ങളും തികയാത്ത, എന്നാൽ ഏതെങ്കിലും ഒരു ഭാവത്തെ ആഴത്തിൽ പ്രതിപാദിക്കുന്ന കാവ്യരൂപം.",
    "backSec": "അധ്യായം: കവിത: ചിന്താവിഷ്ടയായ സീത — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ആത്മഗതങ്ങൾ (Internal Monologue)'?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>നിർവ്വചനം:</strong> കഥാപാത്രം സ്വന്തം മനസ്സിൽ നടത്തുന്ന ആഴമേറിയ വിചാരങ്ങളുടെ ആവിഷ്കാരം.",
    "backSec": "അധ്യായം: കവിത: ചിന്താവിഷ്ടയായ സീത — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'പൗരാപവാദം'?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>നിർവ്വചനം:</strong> അയോദ്ധ്യയിലെ അലക്കുകാരനും പ്രജകളും സീതയുടെ പാതിവ്രത്യത്തെക്കുറിച്ച് പരസ്യമായി പറഞ്ഞ അധിക്ഷേപം.",
    "backSec": "അധ്യായം: കവിത: ചിന്താവിഷ്ടയായ സീത — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ചിന്താവിഷ്ടയായ സീത' എന്ന വിഖ്യാത കാവ്യം രചിച്ചത് ആര്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> മഹാകവി കുമാരനാശാൻ<br>മഹാകവി കുമാരനാശാനാണ് 1919-ൽ 'ചിന്താവിഷ്ടയായ സീത' രചിച്ചത്.",
    "backSec": "മഹാകവി കുമാരനാശാനാണ് 1919-ൽ 'ചിന്താവിഷ്ടയായ സീത' രചിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ചിന്താവിഷ്ടയായ സീത' ഏത് വൃത്തത്തിലാണ് രചിക്കപ്പെട്ടിരിക്കുന്നത്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> വസന്തതിലകം<br>സംസ്കൃത വൃത്തമായ 'വസന്തതിലകം' വൃത്തത്തിലാണ് ഈ കൃതി രചിക്കപ്പെട്ടത്.",
    "backSec": "സംസ്കൃത വൃത്തമായ 'വസന്തതിലകം' വൃത്തത്തിലാണ് ഈ കൃതി രചിക്കപ്പെട്ടത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ചിന്താവിഷ്ടയായ സീത' പ്രസിദ്ധീകരിച്ച വർഷമേത്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> 1919<br>1919-ലാണ് 'ചിന്താവിഷ്ടയായ സീത' ആദ്യമായി പുസ്തകരൂപത്തിൽ പ്രസിദ്ധീകരിച്ചത്.",
    "backSec": "1919-ലാണ് 'ചിന്താവിഷ്ടയായ സീത' ആദ്യമായി പുസ്തകരൂപത്തിൽ പ്രസിദ്ധീകരിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'പുരികം പുഴുപോൽ പിടഞ്ഞകം...' എന്ന ശ്ലോകത്തിൽ ആരെക്കുറിച്ചാണ് സീത ഓർക്കുന്നത്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> ലക്ഷ്മണനെ<br>കാട്ടിൽ തന്നെ ഉപേക്ഷിച്ചു പിരിയുന്ന ലക്ഷ്മണന്റെ വേദനയെക്കുറിച്ചാണ് സീത ഓർക്കുന്നത്.",
    "backSec": "കാട്ടിൽ തന്നെ ഉപേക്ഷിച്ചു പിരിയുന്ന ലക്ഷ്മണന്റെ വേദനയെക്കുറിച്ചാണ് സീത ഓർക്കുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കാട്ടിൽ ഉപേക്ഷിക്കപ്പെട്ട സീത ഏത് മഹർഷിയുടെ ആശ്രമത്തിലാണ് കഴിഞ്ഞത്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> വാത്മീകി മഹർഷിയുടെ<br>വാത്മീകി മഹർഷിയുടെ തപോവനത്തിലാണ് സീത ലവകുശന്മാരുമായി കഴിഞ്ഞത്.",
    "backSec": "വാത്മീകി മഹർഷിയുടെ തപോവനത്തിലാണ് സീത ലവകുശന്മാരുമായി കഴിഞ്ഞത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കുമാരനാശാന്റെ കാവ്യഗുരു ആര്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> ശ്രീനാരായണഗുരു<br>ശ്രീനാരായണഗുരുവാണ് കുമാരനാശാന്റെ ആത്മീയ-കാവ്യ വഴികാട്ടി.",
    "backSec": "ശ്രീനാരായണഗുരുവാണ് കുമാരനാശാന്റെ ആത്മീയ-കാവ്യ വഴികാട്ടി."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ശ്രീരാമൻ സീതയെ കാട്ടിലേക്ക് അയക്കാൻ കാരണമെന്തായിരുന്നു?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> പൗരാപവാദം (പ്രജകളുടെ അപവാദം)<br>അയോദ്ധ്യയിലെ പ്രജകളുടെ അടിസ്ഥാനരഹിതമായ പൗരാപവാദമാണ് സീതാപരിത്യാഗത്തിന് കാരണമായത്.",
    "backSec": "അയോദ്ധ്യയിലെ പ്രജകളുടെ അടിസ്ഥാനരഹിതമായ പൗരാപവാദമാണ് സീതാപരിത്യാഗത്തിന് കാരണമായത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ആശാന്റെ 'വീണപൂവ്' പ്രസിദ്ധീകരിച്ച വർഷമേത്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> 1907<br>1907-ൽ മിതവാദി പത്രത്തിലാണ് ആശാന്റെ 'വീണപൂവ്' ആദ്യമായി പ്രസിദ്ധീകരിച്ചത്.",
    "backSec": "1907-ൽ മിതവാദി പത്രത്തിലാണ് ആശാന്റെ 'വീണപൂവ്' ആദ്യമായി പ്രസിദ്ധീകരിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഒടുവിൽ വീണ്ടും പവിത്രത തെളിയിക്കാൻ ആവശ്യപ്പെട്ടപ്പോൾ സീത എന്തു ചെയ്തു?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> ഭൂമിദേവിയുടെ മടിത്തട്ടിലേക്ക് ആഴ്ന്നിറങ്ങി<br>ആത്മാഭിമാനം സംരക്ഷിച്ചുകൊണ്ട് സീത ഭൂമിദേവിയുടെ മടിത്തട്ടിലേക്ക് അപ്രത്യക്ഷയായി.",
    "backSec": "ആത്മാഭിമാനം സംരക്ഷിച്ചുകൊണ്ട് സീത ഭൂമിദേവിയുടെ മടിത്തട്ടിലേക്ക് അപ്രത്യക്ഷയായി."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ആശയഗംഭീരൻ' എന്ന വിശേഷണത്തിന് അർഹനായ കവി ആര്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> കുമാരനാശാൻ<br>ആഴമേറിയ ദാർശനിക ആശയങ്ങൾ ആവിഷ്കരിച്ചതിനാൽ കുമാരനാശാൻ 'ആശയാശാൻ' / 'ആശയഗംഭീരൻ' എന്നറിയപ്പെടുന്നു.",
    "backSec": "ആഴമേറിയ ദാർശനിക ആശയങ്ങൾ ആവിഷ്കരിച്ചതിനാൽ കുമാരനാശാൻ 'ആശയാശാൻ' / 'ആശയഗംഭീരൻ' എന്നറിയപ്പെടുന്നു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സീതയുടെ വിചാരങ്ങൾ പ്രധാനമായും കേന്ദ്രീകരിക്കുന്നത് ഏത് വിഷയത്തിലാണ്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> ശ്രീരാമന്റെ രാജധർമ്മവും സ്ത്രീയുടെ ആത്മാഭിമാനവും<br>രാജനീതിയുടെ പേരിലുള്ള ക്രൂരതയും സ്ത്രീയുടെ സ്വത്വബോധവുമാണ് പ്രധാന ചിന്താവിഷയം.",
    "backSec": "രാജനീതിയുടെ പേരിലുള്ള ക്രൂരതയും സ്ത്രീയുടെ സ്വത്വബോധവുമാണ് പ്രധാന ചിന്താവിഷയം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കുമാരനാശാൻ അന്തരിച്ചത് ഏത് അപകടത്തിലാണ്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> പല്ലനയാറ്റിലെ റെഡീമർ ബോട്ട് അപകടത്തിൽ (1924)<br>1924 ജനുവരി 16-ന് പല്ലനയാറ്റിലുണ്ടായ റെഡീമർ ബോട്ട് ദുരന്തത്തിലാണ് ആശാൻ അന്തരിച്ചത്.",
    "backSec": "1924 ജനുവരി 16-ന് പല്ലനയാറ്റിലുണ്ടായ റെഡീമർ ബോട്ട് ദുരന്തത്തിലാണ് ആശാൻ അന്തരിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എസ്.എൻ.ഡി.പി യോഗത്തിന്റെ ആദ്യത്തെ ജനറൽ സെക്രട്ടറി ആരായിരുന്നു?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> മഹാകവി കുമാരനാശാൻ<br>1903-ൽ എസ്.എൻ.ഡി.പി യോഗം രൂപീകരിച്ചപ്പോൾ ആദ്യ ജനറൽ സെക്രട്ടറി കുമാരനാശാനായിരുന്നു.",
    "backSec": "1903-ൽ എസ്.എൻ.ഡി.പി യോഗം രൂപീകരിച്ചപ്പോൾ ആദ്യ ജനറൽ സെക്രട്ടറി കുമാരനാശാനായിരുന്നു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കുമാരനാശാന്റെ മറ്റൊരു വിഖ്യാത ഖണ്ഡകാവ്യം ഏതാണ്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> ഇവയെല്ലാം<br>കരുണ, ചണ്ഡാലഭിക്ഷുകി, ദുരവസ്ഥ, നളിനി, ലീല തുടങ്ങിയവ ആശാന്റെ അമര രചനകളാണ്.",
    "backSec": "കരുണ, ചണ്ഡാലഭിക്ഷുകി, ദുരവസ്ഥ, നളിനി, ലീല തുടങ്ങിയവ ആശാന്റെ അമര രചനകളാണ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ചിന്താവിഷ്ടയായ സീത' എന്ന കാവ്യം ആധുനിക സമൂഹത്തോട് സംവദിക്കുന്നത് എന്താണ്?",
    "titleSec": "കവിത: ചിന്താവിഷ്ടയായ സീത",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ചിന്താവിഷ്ടയായ സീത",
    "backEn": "<strong>ഉത്തരം:</strong> സ്ത്രീയുടെ ആത്മാഭിമാനവും നീതിബോധവും സ്വാതന്ത്ര്യവും<br>സ്ത്രീയുടെ സ്വയംനിർണ്ണയാവകാശവും നീതിബോധവുമാണ് കാവ്യത്തിന്റെ പ്രധാന സന്ദേശം.",
    "backSec": "സ്ത്രീയുടെ സ്വയംനിർണ്ണയാവകാശവും നീതിബോധവുമാണ് കാവ്യത്തിന്റെ പ്രധാന സന്ദേശം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'വിലാപകാവ്യം (Elegy)'?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>നിർവ്വചനം:</strong> പ്രിയപ്പെട്ടവരുടെ വിയോഗത്തിൽ ദുഃഖം രേഖപ്പെടുത്തി രചിക്കുന്ന അനുസ്മരണ കവിത.",
    "backSec": "അധ്യായം: കവിത: ഇവനെക്കൂടി — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'നിളാനദി (ഭാരതപ്പുഴ)'?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>നിർവ്വചനം:</strong> കേരളീയ സംസ്കാരത്തിന്റെയും സാഹിത്യത്തിന്റെയും മാതൃനദി.",
    "backSec": "അധ്യായം: കവിത: ഇവനെക്കൂടി — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'മരുതഭൂമി'?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>നിർവ്വചനം:</strong> സംഘകാല തിണകളിൽ വയലും വയൽ சார்ந்த പ്രദേശവുമായ കാർഷിക ഭൂമി.",
    "backSec": "അധ്യായം: കവിത: ഇവനെക്കൂടി — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ഇവനെക്കൂടി' എന്ന കവിത ആരെ അനുസ്മരിച്ചുകൊണ്ട് എഴുതിയതാണ്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> മഹാകവി വൈലോപ്പിള്ളി ശ്രീധരമേനോനെ<br>മഹാകവി വൈലോപ്പിള്ളി അന്തരിച്ചപ്പോൾ (1985) സച്ചിദാനന്ദൻ രചിച്ച കവിതയാണിത്.",
    "backSec": "മഹാകവി വൈലോപ്പിള്ളി അന്തരിച്ചപ്പോൾ (1985) സച്ചിദാനന്ദൻ രചിച്ച കവിതയാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ഇവനെക്കൂടി' എന്ന കവിത രചിച്ച ആധുനിക കവി ആര്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> കെ. സച്ചിദാനന്ദൻ<br>പ്രശസ്ത കവിയും ചിന്തകനുമായ കെ. സച്ചിദാനന്ദനാണ് ഈ കവിത എഴുതിയത്.",
    "backSec": "പ്രശസ്ത കവിയും ചിന്തകനുമായ കെ. സച്ചിദാനന്ദനാണ് ഈ കവിത എഴുതിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കവിതയിൽ കവിയെ ഏറ്റുവാങ്ങാൻ പ്രാർത്ഥിക്കുന്നത് ഏത് നദിയോടാണ്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> നിളാനദി (ഭാരതപ്പുഴ)<br>കേരളത്തിന്റെ സാംസ്കാരിക നദിയായ നിളയോടാണ് വൈലോപ്പിള്ളിയെ ഏറ്റുവാങ്ങാൻ അഭ്യർത്ഥിക്കുന്നത്.",
    "backSec": "കേരളത്തിന്റെ സാംസ്കാരിക നദിയായ നിളയോടാണ് വൈലോപ്പിള്ളിയെ ഏറ്റുവാങ്ങാൻ അഭ്യർത്ഥിക്കുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "വൈലോപ്പിള്ളി ശ്രീധരമേനോൻ അന്തരിച്ച വർഷമേത്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> 1985 ഡിസംബർ<br>1985 ഡിസംബർ 22-നാണ് മഹാകവി വൈലോപ്പിള്ളി അന്തരിച്ചത്.",
    "backSec": "1985 ഡിസംബർ 22-നാണ് മഹാകവി വൈലോപ്പിള്ളി അന്തരിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "വൈലോപ്പിള്ളിയുടെ കാവ്യപ്രപഞ്ചത്തിൽ പെടാത്ത കൃതി ഏതാണ്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> രമണൻ<br>'രമണൻ' ചങ്ങമ്പുഴയുടെ കൃതിയാണ്; കുടിയൊഴിക്കലും കന്നിക്കൊയ്ത്തും കണ്ണീർപ്പാടവും വൈലോപ്പിള്ളിയുടേതാണ്.",
    "backSec": "'രമണൻ' ചങ്ങമ്പുഴയുടെ കൃതിയാണ്; കുടിയൊഴിക്കലും കന്നിക്കൊയ്ത്തും കണ്ണീർപ്പാടവും വൈലോപ്പിള്ളിയുടേതാണ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സച്ചിദാനന്ദൻ കേന്ദ്ര സാഹിത്യ അക്കാദമിയിൽ വഹിച്ച പ്രധാന പദവി എന്തായിരുന്നു?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> സെക്രട്ടറി<br>കേന്ദ്ര സാഹിത്യ അക്കാദമിയുടെ സെക്രട്ടറിയായി സച്ചിദാനന്ദൻ ദീർഘകാലം സേവനമനുഷ്ഠിച്ചിട്ടുണ്ട്.",
    "backSec": "കേന്ദ്ര സാഹിത്യ അക്കാദമിയുടെ സെക്രട്ടറിയായി സച്ചിദാനന്ദൻ ദീർഘകാലം സേവനമനുഷ്ഠിച്ചിട്ടുണ്ട്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കവിതയിൽ പരാമർശിക്കുന്ന പ്രാചീന സംഘകാല കവി ആരാണ്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> കപിലൻ<br>സംഘകാല കവിയായ കപിലന്റെ കാവ്യഭൂമിയെക്കുറിച്ച് കവിതയിൽ സൂചിപ്പിക്കുന്നുണ്ട്.",
    "backSec": "സംഘകാല കവിയായ കപിലന്റെ കാവ്യഭൂമിയെക്കുറിച്ച് കവിതയിൽ സൂചിപ്പിക്കുന്നുണ്ട്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "വൈലോപ്പിള്ളിയുടെ മാസ്റ്റർപീസ് കാവ്യമായി കരുതപ്പെടുന്ന കൃതി ഏത്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> കുടിയൊഴിക്കൽ<br>കേരളീയ മധ്യവർഗ്ഗത്തിന്റെ ആത്മവിചാരണയായ 'കുടിയൊഴിക്കൽ' വൈലോപ്പിള്ളിയുടെ മാസ്റ്റർപീസാണ്.",
    "backSec": "കേരളീയ മധ്യവർഗ്ഗത്തിന്റെ ആത്മവിചാരണയായ 'കുടിയൊഴിക്കൽ' വൈലോപ്പിള്ളിയുടെ മാസ്റ്റർപീസാണ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ഇവനെക്കൂടി' എന്ന കവിത ഏത് കാവ്യവിഭാഗത്തിൽപ്പെടുന്നു?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> വിലാപകാവ്യം (Elegy)<br>ഒരു വ്യക്തിയുടെ വിയോഗത്തിൽ രചിക്കുന്ന വിലാപകാവ്യമാണ് (Elegy) ഇത്.",
    "backSec": "ഒരു വ്യക്തിയുടെ വിയോഗത്തിൽ രചിക്കുന്ന വിലാപകാവ്യമാണ് (Elegy) ഇത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "വൈലോപ്പിള്ളിക്കവിതകളുടെ പ്രധാന സവിശേഷതയായി പറയുന്നത് എന്താണ്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> ശാസ്ത്രബോധവും മനുഷ്യസ്നേഹവും പ്രകൃതിസൗന്ദര്യവും<br>മണ്ണിലിറങ്ങി നിൽക്കുന്ന മാനവികതയും ശാസ്ത്രബോധവുമാണ് വൈലോപ്പിള്ളിയുടെ കാവ്യമുദ്ര.",
    "backSec": "മണ്ണിലിറങ്ങി നിൽക്കുന്ന മാനവികതയും ശാസ്ത്രബോധവുമാണ് വൈലോപ്പിള്ളിയുടെ കാവ്യമുദ്ര."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കവി വൈലോപ്പിള്ളിയുടെ ആത്മാവിനെ ഉപമിക്കുന്നത് എന്തിനോടാണ്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> സന്ധ്യാസൂര്യനോട്<br>ശാന്തമായി ചായുന്ന സന്ധ്യാസൂര്യനെപ്പോലെയാണ് കവിയുടെ സാന്നിധ്യം.",
    "backSec": "ശാന്തമായി ചായുന്ന സന്ധ്യാസൂര്യനെപ്പോലെയാണ് കവിയുടെ സാന്നിധ്യം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സച്ചിദാനന്ദൻ നിലവിൽ ഏത് സ്ഥാപനത്തിന്റെ പ്രസിഡന്റാണ്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> കേരള സാഹിത്യ അക്കാദമി<br>കേരള സാഹിത്യ അക്കാദമി പ്രസിഡന്റായി സച്ചിദാനന്ദൻ സേവനമനുഷ്ഠിക്കുന്നു.",
    "backSec": "കേരള സാഹിത്യ അക്കാദമി പ്രസിഡന്റായി സച്ചിദാനന്ദൻ സേവനമനുഷ്ഠിക്കുന്നു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "വൈലോപ്പിള്ളി ജനിച്ച വർഷം ഏതാണ്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> 1911 മെയ് 11<br>1911 മെയ് 11-ന് എറണാകുളം ജില്ലയിലെ കലൂരിലാണ് വൈലോപ്പിള്ളി ജനിച്ചത്.",
    "backSec": "1911 മെയ് 11-ന് എറണാകുളം ജില്ലയിലെ കലൂരിലാണ് വൈലോപ്പിള്ളി ജനിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ചരമകവിതകളെക്കുറിച്ച് സച്ചിദാനന്ദൻ കവിതയിൽ നടത്തുന്ന നിരീക്ഷണം എന്ത്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> അവ മരിച്ചവരെ പെട്ടെന്ന് സ്വർഗ്ഗത്തിലേക്ക് പറഞ്ഞയക്കുന്നു<br>സാധാരണ ചരമകവിതകൾ സ്വർഗ്ഗത്തിലേക്ക് പറഞ്ഞയക്കുമ്പോൾ, സച്ചിദാനന്ദൻ കവിയെ മണ്ണിലേക്ക് തിരിച്ചുവിളിക്കുന്നു.",
    "backSec": "സാധാരണ ചരമകവിതകൾ സ്വർഗ്ഗത്തിലേക്ക് പറഞ്ഞയക്കുമ്പോൾ, സച്ചിദാനന്ദൻ കവിയെ മണ്ണിലേക്ക് തിരിച്ചുവിളിക്കുന്നു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ഇവനെക്കൂടി' എന്ന കവിത മുന്നോട്ടുവെക്കുന്ന ആത്യന്തിക ദർശനം എന്താണ്?",
    "titleSec": "കവിത: ഇവനെക്കൂടി",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കവിത: ഇവനെക്കൂടി",
    "backEn": "<strong>ഉത്തരം:</strong> കവി മണ്ണിലും പ്രകൃതിയിലും അനശ്വരനായി ജീവിക്കുന്നു<br>മഹാകവികൾ സ്വന്തം കൃതികളിലൂടെയും മണ്ണിലൂടെയും മരണമില്ലാതെ അമരരായി ജീവിക്കുന്നുവെന്ന ദർശനമാണിത്.",
    "backSec": "മഹാകവികൾ സ്വന്തം കൃതികളിലൂടെയും മണ്ണിലൂടെയും മരണമില്ലാതെ അമരരായി ജീവിക്കുന്നുവെന്ന ദർശനമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'സ്ത്രീപക്ഷ നാടകവേദി (Feminist Theatre)'?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>നിർവ്വചനം:</strong> സ്ത്രീയുടെ അനുഭവങ്ങൾ, രാഷ്ട്രീയം, ലിംഗസമത്വം എന്നിവ മുൻനിർത്തിയുള്ള നാടകപ്രസ്ഥാനം.",
    "backSec": "അധ്യായം: നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'സ്മാർത്തവിചാരം (1905)'?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>നിർവ്വചനം:</strong> നമ്പൂതിരി സമുദായത്തിലെ വ്യഭിചാരക്കുറ്റം ആരോപിച്ച് സ്ത്രീകളെ ജാതിഭ്രഷ്ട് കൽപ്പിച്ചിരുന്ന സഭാവിചാരണ.",
    "backSec": "അധ്യായം: നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'അടുക്കളയിൽനിന്ന് അരങ്ങത്തേക്ക്'?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>നിർവ്വചനം:</strong> 1929-ൽ വി.ടി. ഭട്ടതിരിപ്പാട് രചിച്ച നവോത്ഥാന നാടകം.",
    "backSec": "അധ്യായം: നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ആധുനിക മലയാള നാടകവേദി ആരംഭിക്കുന്നത് ഏത് കൃതിയുടെ വിവർത്തനത്തോടെയാണ്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> കാളിദാസന്റെ അഭിജ്ഞാനശാകുന്തളം (1882)<br>1882-ൽ കേരളവർമ്മ വലിയകോയിത്തമ്പുരാൻ ശാകുന്തളം വിവർത്തനം ചെയ്തതോടെയാണ് ആധുനിക നാടകം തുടങ്ങിയത്.",
    "backSec": "1882-ൽ കേരളവർമ്മ വലിയകോയിത്തമ്പുരാൻ ശാകുന്തളം വിവർത്തനം ചെയ്തതോടെയാണ് ആധുനിക നാടകം തുടങ്ങിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അടുക്കളയിൽനിന്ന് അരങ്ങത്തേക്ക്' എന്ന വിപ്ലവകരമായ നാടകം രചിച്ചത് ആര്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> വി.ടി. ഭട്ടതിരിപ്പാട് (1929)<br>നമ്പൂതിരി സമുദായ പരിഷ്കരണത്തിനായി വി.ടി. ഭട്ടതിരിപ്പാടാണ് ഈ നാടകം രചിച്ചത്.",
    "backSec": "നമ്പൂതിരി സമുദായ പരിഷ്കരണത്തിനായി വി.ടി. ഭട്ടതിരിപ്പാടാണ് ഈ നാടകം രചിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "1905-ൽ ചരിത്രപ്രസിദ്ധമായ സ്മാർത്തവിചാരത്തിൽ 64 പ്രമാണിമാരുടെ പേരുകൾ വെളിപ്പെടുത്തിയ സ്ത്രീ ആര്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> കുറിയേടത്ത് താത്രി<br>ആൺകോയ്മയെ വിറപ്പിച്ച ചരിത്ര വിചാരണ നേരിട്ട ധീരവനിതയാണ് കുറിയേടത്ത് താത്രി.",
    "backSec": "ആൺകോയ്മയെ വിറപ്പിച്ച ചരിത്ര വിചാരണ നേരിട്ട ധീരവനിതയാണ് കുറിയേടത്ത് താത്രി."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'പാട്ടബാക്കി' എന്ന രാഷ്ട്രീയ നാടകം രചിച്ചത് ആരാണ്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> കെ. ദാമോദരൻ (1937)<br>1937-ൽ കർഷക പ്രസ്ഥാനത്തിന്റെ ഭാഗമായി കെ. ദാമോദരനാണ് 'പാട്ടബാക്കി' രചിച്ചത്.",
    "backSec": "1937-ൽ കർഷക പ്രസ്ഥാനത്തിന്റെ ഭാഗമായി കെ. ദാമോദരനാണ് 'പാട്ടബാക്കി' രചിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'നിങ്ങളെന്നെ കമ്മ്യൂണിസ്റ്റാക്കി' എന്ന നാടകം ഏത് നാടക സംഘത്തിന്റേതാണ്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> കെ.പി.എ.സി (KPAC)<br>തോപ്പിൽ ഭാസിയുടെ രചനയിൽ KPAC അവതരിപ്പിച്ച ജനകീയ നാടകമാണിത്.",
    "backSec": "തോപ്പിൽ ഭാസിയുടെ രചനയിൽ KPAC അവതരിപ്പിച്ച ജനകീയ നാടകമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സ്ത്രീപക്ഷ നാടകവേദി (Feminist Theatre) പ്രധാനമായും ഊന്നൽ നൽകുന്നത് എന്തിനാണ്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> സ്ത്രീയുടെ സ്വത്വം, സ്വാതന്ത്ര്യം, ശരീര രാഷ്ട്രീയം, ലിംഗനീതി<br>സ്ത്രീയുടെ സ്വത്വബോധവും തുല്യനീതിക്കായുള്ള പോരാട്ടവുമാണ് ഇതിന്റെ കാതൽ.",
    "backSec": "സ്ത്രീയുടെ സ്വത്വബോധവും തുല്യനീതിക്കായുള്ള പോരാട്ടവുമാണ് ഇതിന്റെ കാതൽ."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ആമുഖ രംഗത്ത് മെഴുകുതിരി കത്തിച്ചുവെച്ച് സംസാരിക്കുന്ന പെൺകുട്ടി കഥാപാത്രം ഏത് നാടകത്തിലേതാണ്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> പെൺകുട്ടി<br>'പെൺകുട്ടി' എന്ന സ്ത്രീപക്ഷ നാടകത്തിലാണ് ഈ രംഗമുള്ളത്.",
    "backSec": "'പെൺകുട്ടി' എന്ന സ്ത്രീപക്ഷ നാടകത്തിലാണ് ഈ രംഗമുള്ളത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അടുക്കളയിൽനിന്ന് അരങ്ങത്തേക്ക്' അരങ്ങേറിയ വർഷമേത്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> 1929<br>1929-ലാണ് ഇടക്കുന്നിയിൽ വെച്ച് ഈ നാടകം ആദ്യമായി അരങ്ങേറിയത്.",
    "backSec": "1929-ലാണ് ഇടക്കുന്നിയിൽ വെച്ച് ഈ നാടകം ആദ്യമായി അരങ്ങേറിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കുറിയേടത്ത് താത്രിയുടെ വിചാരണ നടന്നത് ഏത് നാട്ടുരാജ്യത്തിലാണ്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> കൊച്ചി രാജ്യം<br>കൊച്ചി മഹാരാജാവിന്റെ ഭരണകാലത്താണ് കൊച്ചിയിൽ ഈ സ്മാർത്തവിചാരം നടന്നത്.",
    "backSec": "കൊച്ചി മഹാരാജാവിന്റെ ഭരണകാലത്താണ് കൊച്ചിയിൽ ഈ സ്മാർത്തവിചാരം നടന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ശാകുന്തളം മലയാളത്തിലേക്ക് പരിഭാഷപ്പെടുത്തിയത് ആര്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> കേരളവർമ്മ വലിയകോയിത്തമ്പുരാൻ<br>1882-ൽ കേരളവർമ്മ വലിയകോയിത്തമ്പുരാനാണ് ശാകുന്തളം പരിഭാഷപ്പെടുത്തിയത്.",
    "backSec": "1882-ൽ കേരളവർമ്മ വലിയകോയിത്തമ്പുരാനാണ് ശാകുന്തളം പരിഭാഷപ്പെടുത്തിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അടുക്കളയിൽനിന്ന് അരങ്ങത്തേക്ക്' എന്ന ശീർഷകം എന്തിനെയാണ് അർത്ഥമാക്കുന്നത്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> സ്ത്രീകളുടെ വീട്ടുതടവറയിൽ നിന്നുള്ള മോചനവും പൊതുരംഗപ്രവേശവും<br>അന്തർജ്ജനങ്ങളെ അടുക്കളയിലെ ഇരുട്ടിൽ നിന്ന് സമൂഹത്തിന്റെ വെളിച്ചത്തിലേക്ക് നയിക്കുക എന്ന ആശയമാണിത്.",
    "backSec": "അന്തർജ്ജനങ്ങളെ അടുക്കളയിലെ ഇരുട്ടിൽ നിന്ന് സമൂഹത്തിന്റെ വെളിച്ചത്തിലേക്ക് നയിക്കുക എന്ന ആശയമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ആദ്യകാല നാടകങ്ങളിൽ സ്ത്രീവേഷം കെട്ടിയിരുന്നത് ആരായിരുന്നു?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> പുരുഷന്മാർ<br>അക്കാലത്ത് സ്ത്രീകൾ അരങ്ങിൽ വരാതിരുന്നതിനാൽ പുരുഷന്മാർ തന്നെയാണ് സ്ത്രീവേഷം ധരിച്ചിരുന്നത്.",
    "backSec": "അക്കാലത്ത് സ്ത്രീകൾ അരങ്ങിൽ വരാതിരുന്നതിനാൽ പുരുഷന്മാർ തന്നെയാണ് സ്ത്രീവേഷം ധരിച്ചിരുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സി.വി. രാമൻപിള്ളയുടെ പ്രശസ്തമായ പ്രഹസനം ഏത്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> കുറുപ്പില്ലാക്കളരി<br>'കുറുപ്പില്ലാക്കളരി' സി.വി.യുടെ വിഖ്യാതമായ പ്രഹസനമാണ്.",
    "backSec": "'കുറുപ്പില്ലാക്കളരി' സി.വി.യുടെ വിഖ്യാതമായ പ്രഹസനമാണ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "താത്രി എത്ര പുരുഷന്മാരുടെ പേരുകളാണ് വിചാരണയിൽ തെളിവോടെ വെളിപ്പെടുത്തിയത്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> 64 പേർ<br>64 സവർണ്ണ പ്രമാണിമാരുടെ പേരുകളാണ് അവർ വിചാരണയിൽ വെളിപ്പെടുത്തിയത്.",
    "backSec": "64 സവർണ്ണ പ്രമാണിമാരുടെ പേരുകളാണ് അവർ വിചാരണയിൽ വെളിപ്പെടുത്തിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സ്ത്രീപക്ഷ നാടകവേദിയുടെ ആത്യന്തിക ലക്ഷ്യം എന്താണ്?",
    "titleSec": "നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · നാടകവേദി: മലയാള നാടകവേദിയും സ്ത്രീപക്ഷ നാടകവേദിയും",
    "backEn": "<strong>ഉത്തരം:</strong> ലിംഗനീതിയും സ്ത്രീയുടെ സ്വയംനിർണ്ണയാവകാശവും ഉറപ്പാക്കൽ<br>സമൂഹത്തിൽ യഥാർത്ഥ ലിംഗസമത്വവും സ്ത്രീയുടെ ആത്മാഭിമാനവും സ്ഥാപിച്ചെടുക്കലാണിത്.",
    "backSec": "സമൂഹത്തിൽ യഥാർത്ഥ ലിംഗസമത്വവും സ്ത്രീയുടെ ആത്മാഭിമാനവും സ്ഥാപിച്ചെടുക്കലാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'സ്വത്വ പ്രതിസന്ധി (Identity Crisis)'?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>നിർവ്വചനം:</strong> താൻ ആരാണെന്നതിനെക്കുറിച്ചുള്ള ആഴമേറിയ ആശയക്കുഴപ്പവും സന്ദേഹവും.",
    "backSec": "അധ്യായം: ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം' — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'മാന്ത്രിക യാഥാർത്ഥ്യം (Magical Realism)'?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>നിർവ്വചനം:</strong> യാഥാർത്ഥ്യവും ഭാവനയും തമ്മിലുള്ള അതിർവരമ്പുകൾ മാഞ്ഞുപോകുന്ന ആഖ്യാനരീതി.",
    "backSec": "അധ്യായം: ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം' — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'സ്റ്റാറ്റിക് ഫ്രെയിമുകൾ (Static Frames)'?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>നിർവ്വചനം:</strong> ക്യാമറ ചലിപ്പിക്കാതെ നിശ്ചലമായി നിർത്തി ദൃശ്യങ്ങൾ പകർത്തിയെടുക്കുന്ന ഛായാഗ്രഹണ രീതി.",
    "backSec": "അധ്യായം: ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം' — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'നൻപകൽ നേരത്ത് മയക്കം' എന്ന സിനിമ സംവിധാനം ചെയ്തത് ആര്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> ലിജോ ജോസ് പെല്ലിശ്ശേരി<br>ലിജോ ജോസ് പെല്ലിശ്ശേരിയാണ് ഈ ചിത്രം സംവിധാനം ചെയ്തത്.",
    "backSec": "ലിജോ ജോസ് പെല്ലിശ്ശേരിയാണ് ഈ ചിത്രം സംവിധാനം ചെയ്തത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സിനിമയിലെ കേന്ദ്ര കഥാപാത്രങ്ങളായ ജെയിംസ് / സുന്ദരം എന്നിവരെ അവതരിപ്പിച്ച നടൻ ആര്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> മമ്മൂട്ടി<br>മമ്മൂട്ടിയാണ് അവിസ്മരണീയമായ രീതിയിൽ ഈ ഇരട്ട ഭാവങ്ങളെ അവതരിപ്പിച്ചത്.",
    "backSec": "മമ്മൂട്ടിയാണ് അവിസ്മരണീയമായ രീതിയിൽ ഈ ഇരട്ട ഭാവങ്ങളെ അവതരിപ്പിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സിനിമയുടെ തിരക്കഥ രചിച്ചത് ആരാണ്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> എസ്. ഹരീഷ്<br>പ്രശസ്ത എഴുത്തുകാരൻ എസ്. ഹരീഷാണ് സിനിമയുടെ തിരക്കഥ ഒരുക്കിയത്.",
    "backSec": "പ്രശസ്ത എഴുത്തുകാരൻ എസ്. ഹരീഷാണ് സിനിമയുടെ തിരക്കഥ ഒരുക്കിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ജെയിംസും കുടുംബവും യാത്ര പോയി മടങ്ങുന്നത് എവിടെ നിന്നാണ്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> വേളാങ്കണ്ണിയിൽ നിന്ന്<br>വേളാങ്കണ്ണി തീർത്ഥാടനം കഴിഞ്ഞ് മടങ്ങുമ്പോഴാണ് ബസ് ഗ്രാമത്തിന് സമീപം നിർത്തുന്നത്.",
    "backSec": "വേളാങ്കണ്ണി തീർത്ഥാടനം കഴിഞ്ഞ് മടങ്ങുമ്പോഴാണ് ബസ് ഗ്രാമത്തിന് സമീപം നിർത്തുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ജെയിംസ് ഉറക്കമുണർന്ന് രണ്ടാമത് സ്വീകരിക്കുന്ന തമിഴ് കഥാപാത്രത്തിന്റെ പേരെന്ത്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> സുന്ദരം<br>രണ്ട് വർഷം മുമ്പ് കാണാതായ സുന്ദരം എന്ന പാൽക്കാരനായാണ് ജെയിംസ് മാറുന്നത്.",
    "backSec": "രണ്ട് വർഷം മുമ്പ് കാണാതായ സുന്ദരം എന്ന പാൽക്കാരനായാണ് ജെയിംസ് മാറുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സിനിമയുടെ ഛായാഗ്രഹണം നിർവ്വഹിച്ചത് ആര്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> തേനി ഈശ്വർ<br>തേനി ഈശ്വറാണ് ചിത്രത്തിന്റെ മനോഹരമായ നിശ്ചല ഫ്രെയിമുകൾ പകർത്തിയത്.",
    "backSec": "തേനി ഈശ്വറാണ് ചിത്രത്തിന്റെ മനോഹരമായ നിശ്ചല ഫ്രെയിമുകൾ പകർത്തിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "പശ്ചാത്തലത്തിൽ നിരന്തരം മുഴങ്ങിക്കേൾക്കുന്നത് എന്താണ്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> പഴയ തമിഴ് സിനിമകളിലെയും നാടകങ്ങളിലെയും ഡയലോഗുകളും പാട്ടുകളും<br>പഴയ തമിഴ് സിനിമകളുടെയും നാടകങ്ങളുടെയും സംഭാഷണങ്ങളാണ് സിനിമയിലുടനീളം പശ്ചാത്തലത്തിൽ വരുന്നത്.",
    "backSec": "പഴയ തമിഴ് സിനിമകളുടെയും നാടകങ്ങളുടെയും സംഭാഷണങ്ങളാണ് സിനിമയിലുടനീളം പശ്ചാത്തലത്തിൽ വരുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'നാൻ ഇന്ത ഊരുക്കാരൻ അല്ലെ' എന്ന ചോദ്യം എന്തിനെയാണ് സൂചിപ്പിക്കുന്നത്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> കഥാപാത്രത്തിന്റെ ആഴമേറിയ സ്വത്വപ്രതിസന്ധിയെ<br>താൻ ആരാണെന്നുള്ള സന്ദേഹവും സ്വത്വപ്രതിസന്ധിയുമാണ് ഈ ചോദ്യത്തിലൂടെ പ്രകടമാകുന്നത്.",
    "backSec": "താൻ ആരാണെന്നുള്ള സന്ദേഹവും സ്വത്വപ്രതിസന്ധിയുമാണ് ഈ ചോദ്യത്തിലൂടെ പ്രകടമാകുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഒടുവിൽ ജെയിംസ് സ്വന്തം യഥാർത്ഥ സ്വത്വം തിരിച്ചറിയുന്നത് എവിടെ നോക്കുമ്പോഴാണ്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> കണ്ണാടിയിൽ<br>പഴയ ഡ്രസ്സിംഗ് ടേബിളിന്റെ കണ്ണാടിയിൽ സ്വന്തം മുഖം നോക്കുമ്പോഴാണ് അവൻ ജെയിംസാണെന്ന് തിരിച്ചറിയുന്നത്.",
    "backSec": "പഴയ ഡ്രസ്സിംഗ് ടേബിളിന്റെ കണ്ണാടിയിൽ സ്വന്തം മുഖം നോക്കുമ്പോഴാണ് അവൻ ജെയിംസാണെന്ന് തിരിച്ചറിയുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഈ ചിത്രത്തിന് കേരള സംസ്ഥാന ചലച്ചിത്ര പുരസ്കാരങ്ങളിൽ ലഭിച്ച പ്രധാന അംഗീകാരം എന്തായിരുന്നു?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> മികച്ച ചിത്രം, മികച്ച നടൻ (മമ്മൂട്ടി)<br>മികച്ച ചിത്രത്തിനുള്ള അവാർഡും മമ്മൂട്ടിക്ക് മികച്ച നടനുള്ള അവാർഡും ലഭിച്ചു.",
    "backSec": "മികച്ച ചിത്രത്തിനുള്ള അവാർഡും മമ്മൂട്ടിക്ക് മികച്ച നടനുള്ള അവാർഡും ലഭിച്ചു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ അന്താരാഷ്ട്ര ശ്രദ്ധ നേടിയ മറ്റൊരു ചിത്രം ഏതാണ്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> ഇവയെല്ലാം<br>ജല്ലിക്കട്ട്, ഈ.മ.യൗ, അങ്കമാലി ഡയറീസ് തുടങ്ങിയവ ലിജോയുടെ പ്രധാന ചിത്രങ്ങളാണ്.",
    "backSec": "ജല്ലിക്കട്ട്, ഈ.മ.യൗ, അങ്കമാലി ഡയറീസ് തുടങ്ങിയവ ലിജോയുടെ പ്രധാന ചിത്രങ്ങളാണ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സിനിമ നടക്കുന്ന പ്രധാന ഭൂപ്രദേശം ഏത് സംസ്ഥാനത്താണ്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> തമിഴ്നാട് (ഉൾനാടൻ ഗ്രാമം)<br>തമിഴ്നാട്ടിലെ ഒരു ശാന്തമായ ഉൾനാടൻ ഗ്രാമത്തിലാണ് സംഭവങ്ങൾ അരങ്ങേറുന്നത്.",
    "backSec": "തമിഴ്നാട്ടിലെ ഒരു ശാന്തമായ ഉൾനാടൻ ഗ്രാമത്തിലാണ് സംഭവങ്ങൾ അരങ്ങേറുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സിനിമയുടെ ശീർഷകമായ 'നൻപകൽ നേരത്ത് മയക്കം' എന്നതിന്റെ അർത്ഥം എന്താണ്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> ഉച്ചസമയത്തെ ചെറിയ ഉറക്കം (നട്ടുച്ച മയക്കം)<br>നട്ടുച്ച നേരത്ത് മനുഷ്യർ അനുഭവിക്കുന്ന ചെറിയൊരു പകൽമയക്കമാണിത്.",
    "backSec": "നട്ടുച്ച നേരത്ത് മനുഷ്യർ അനുഭവിക്കുന്ന ചെറിയൊരു പകൽമയക്കമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ജെയിംസിന്റെ തൊഴിൽപരമായ സ്വഭാവം എന്തായിരുന്നു?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> ഒരു തിയേറ്റർ ഉടമ / മലയാളി കുടുംബനാഥൻ<br>നാടക ട്രൂപ്പുമായി ബന്ധപ്പെട്ട് പ്രവർത്തിക്കുന്ന മലയാളി കുടുംബനാഥനാണ് ജെയിംസ്.",
    "backSec": "നാടക ട്രൂപ്പുമായി ബന്ധപ്പെട്ട് പ്രവർത്തിക്കുന്ന മലയാളി കുടുംബനാഥനാണ് ജെയിംസ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'നൻപകൽ നേരത്ത് മയക്കം' നൽകുന്ന പ്രധാന സന്ദേശം എന്താണ്?",
    "titleSec": "ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്രം: ലിജോ ജോസ് പെല്ലിശ്ശേരിയുടെ 'നൻപകൽ നേരത്ത് മയക്കം'",
    "backEn": "<strong>ഉത്തരം:</strong> മനുഷ്യജീവിതം ഒരു പകൽമയക്കം പോലെ മാന്ത്രികവും അനിശ്ചിതവുമാണ്<br>ജീവിതവും സ്വത്വങ്ങളും ഒരു പകൽമയക്കത്തിന്റെ അത്രയേ ഉള്ളൂ എന്ന വലിയ തത്ത്വചിന്തയാണിത്.",
    "backSec": "ജീവിതവും സ്വത്വങ്ങളും ഒരു പകൽമയക്കത്തിന്റെ അത്രയേ ഉള്ളൂ എന്ന വലിയ തത്ത്വചിന്തയാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'ലിറിക്കൽ നരേറ്റീവ് (Lyrical Narrative)'?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>നിർവ്വചനം:</strong> കഥയുടെ ഭാഗമായി മാറി കഥയെ മുന്നോട്ട് കൊണ്ടുപോകുന്ന ഗാനരചനാ രീതി.",
    "backSec": "അധ്യായം: ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'സുവർണ്ണ കാലഘട്ടം'?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>നിർവ്വചനം:</strong> വയലാർ, പി. ഭാസ്കരൻ, ഒ.എൻ.വി തുടങ്ങിയവരുടെ കവിത തുളുമ്പുന്ന ഗാനങ്ങൾ നിറഞ്ഞ 1960–1980 കാലഘട്ടം.",
    "backSec": "അധ്യായം: ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'മിനിമലിസം (Minimalism)'?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>നിർവ്വചനം:</strong> ആർഭാടങ്ങളില്ലാതെ ലളിതമായ വാക്കുകളിലൂടെയും സംഗീതോപകരണങ്ങളിലൂടെയും ഭാവം സൃഷ്ടിക്കുന്ന ശൈലി.",
    "backSec": "അധ്യായം: ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മലയാള സിനിമയ്ക്ക് സ്വന്തമായ ഗാനശൈലി സമ്മാനിച്ച 1954-ലെ ചരിത്രപ്രസിദ്ധമായ ചിത്രം ഏതാണ്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> നീലക്കുയിൽ<br>പി. ഭാസ്കരനും രാമു കാര്യാട്ടും ചേർന്ന് നിർമ്മിച്ച 'നീലക്കുയിൽ' മലയാള ഗാനശാഖയ്ക്ക് സ്വന്തം തനിമ നൽകി.",
    "backSec": "പി. ഭാസ്കരനും രാമു കാര്യാട്ടും ചേർന്ന് നിർമ്മിച്ച 'നീലക്കുയിൽ' മലയാള ഗാനശാഖയ്ക്ക് സ്വന്തം തനിമ നൽകി."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കായലരികത്ത് വലയെറിഞ്ഞപ്പോൾ' എന്ന വിഖ്യാത ഗാനം രചിച്ചതാര്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> പി. ഭാസ്കരൻ<br>പി. ഭാസ്കരൻ രചിച്ച് കെ. രാഘവൻ മാസ്റ്റർ ഈണം നൽകിയ ഗാനമാണിത്.",
    "backSec": "പി. ഭാസ്കരൻ രചിച്ച് കെ. രാഘവൻ മാസ്റ്റർ ഈണം നൽകിയ ഗാനമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മലയാള ചലച്ചിത്ര സംഗീതത്തിലെ ഏറ്റവും വിഖ്യാതമായ സംഗീത കൂട്ടുകെട്ട് ഏതാണ്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> വയലാർ - ദേവരാജൻ<br>നൂറുകണക്കിന് അമര ഗാനങ്ങൾ സൃഷ്ടിച്ച വയലാർ-ദേവരാജൻ കൂട്ടുകെട്ടാണ് ഏറ്റവും പ്രസിദ്ധം.",
    "backSec": "നൂറുകണക്കിന് അമര ഗാനങ്ങൾ സൃഷ്ടിച്ച വയലാർ-ദേവരാജൻ കൂട്ടുകെട്ടാണ് ഏറ്റവും പ്രസിദ്ധം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'തനിയേ മിഴികൾ തുളുമ്പിയോ' എന്ന ഗാനം ഏത് ചിത്രത്തിലേതാണ്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> ഗപ്പി (2016)<br>ജോൺപോൾ ജോർജ്ജ് സംവിധാനം ചെയ്ത 'ഗപ്പി' എന്ന ചിത്രത്തിലേതാണ് ഈ ഗാനം.",
    "backSec": "ജോൺപോൾ ജോർജ്ജ് സംവിധാനം ചെയ്ത 'ഗപ്പി' എന്ന ചിത്രത്തിലേതാണ് ഈ ഗാനം."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'തനിയേ മിഴികൾ തുളുമ്പിയോ' എന്ന ഗാനത്തിന്റെ രചയിതാവ് ആര്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> വിനായക് ശശികുമാർ<br>യുവ ഗാനരചയിതാവായ വിനായക് ശശികുമാറാണ് ഈ ഗാനം രചിച്ചത്.",
    "backSec": "യുവ ഗാനരചയിതാവായ വിനായക് ശശികുമാറാണ് ഈ ഗാനം രചിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'ഗപ്പി' ചിത്രത്തിലെ 'തനിയേ മിഴികൾ' എന്ന ഗാനത്തിന് സംഗീതം നൽകിയത് ആര്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> വിഷ്ണു വിജയ്<br>പ്രതിഭാശാലിയായ സംഗീത സംവിധായകൻ വിഷ്ണു വിജയ് ആണ് സംഗീതം നൽകിയത്.",
    "backSec": "പ്രതിഭാശാലിയായ സംഗീത സംവിധായകൻ വിഷ്ണു വിജയ് ആണ് സംഗീതം നൽകിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മലബാർ മാപ്പിളപ്പാട്ടിന്റെയും ഹിന്ദുസ്ഥാനി ഗസലിന്റെയും മാധുര്യം മലയാള സിനിമാ ഗാനങ്ങൾക്ക് നൽകിയ സംഗീതജ്ഞൻ ആര്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> എം.എസ്. ബാബുരാജ്<br>എം.എസ്. ബാബുരാജാണ് മലയാളത്തിന് അതുല്യമായ ഗസൽ ഈണങ്ങൾ സമ്മാനിച്ചത്.",
    "backSec": "എം.എസ്. ബാബുരാജാണ് മലയാളത്തിന് അതുല്യമായ ഗസൽ ഈണങ്ങൾ സമ്മാനിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'നീലക്കുയിൽ' എന്ന ചിത്രത്തിന് രാഷ്ട്രപതിയുടെ വെള്ളി മെഡൽ ലഭിച്ച വർഷമേത്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> 1954<br>1954-ലാണ് നീലക്കുയിലിന് ദേശീയ പുരസ്കാരം ലഭിച്ചത്.",
    "backSec": "1954-ലാണ് നീലക്കുയിലിന് ദേശീയ പുരസ്കാരം ലഭിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഒ.എൻ.വി. കുറുപ്പിന് ജ്ഞാനപീഠ പുരസ്കാരം ലഭിച്ച വർഷമേത്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> 2007<br>2007-ലാണ് മഹാകവി ഒ.എൻ.വി. കുറുപ്പിന് ജ്ഞാനപീഠം ലഭിച്ചത്.",
    "backSec": "2007-ലാണ് മഹാകവി ഒ.എൻ.വി. കുറുപ്പിന് ജ്ഞാനപീഠം ലഭിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "വിനായക് ശശികുമാർ സിനിമാ ഗാനരംഗത്ത് എത്തിയത് ഏത് ചിത്രത്തിലൂടെയാണ്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> കുട്ടീം കോലും (2013)<br>2013-ൽ 'കുട്ടീം കോലും' എന്ന ചിത്രത്തിലൂടെയാണ് വിനായക് ഗാനരചയിതാവായത്.",
    "backSec": "2013-ൽ 'കുട്ടീം കോലും' എന്ന ചിത്രത്തിലൂടെയാണ് വിനായക് ഗാനരചയിതാവായത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അയല പൊരിച്ചതുണ്ട്... കരിമീൻ വറുത്തതുണ്ട്' എന്ന പ്രസിദ്ധ നാടൻ ശൈലി ഗാനം രചിച്ചതാര്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> ശ്രീകുമാരൻ തമ്പി<br>ശ്രീകുമാരൻ തമ്പിയാണ് കീഴാള ജീവിതത്തിന്റെ രുചികൾ പറയുന്ന ഈ ഗാനം രചിച്ചത്.",
    "backSec": "ശ്രീകുമാരൻ തമ്പിയാണ് കീഴാള ജീവിതത്തിന്റെ രുചികൾ പറയുന്ന ഈ ഗാനം രചിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മലയാള ചലച്ചിത്ര പശ്ചാത്തല സംഗീതത്തിന്റെ കുലപതിയായി അറിയപ്പെടുന്ന സംഗീത സംവിധായകൻ ആര്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> ജോൺസൺ മാസ്റ്റർ<br>ജോൺസൺ മാസ്റ്ററാണ് പശ്ചാത്തല സംഗീതത്തിന് രണ്ട് തവണ ദേശീയ അവാർഡ് നേടിയത്.",
    "backSec": "ജോൺസൺ മാസ്റ്ററാണ് പശ്ചാത്തല സംഗീതത്തിന് രണ്ട് തവണ ദേശീയ അവാർഡ് നേടിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'തനിയേ മിഴികൾ തുളുമ്പിയോ' എന്ന ഗാനം ആലപിച്ച ഗായകൻ ആരാണ്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> സൂരജ് സന്തോഷ്<br>പ്രശസ്ത ഗായകൻ സൂരജ് സന്തോഷാണ് ഈ ഗാനം ഹൃദ്യമായി ആലപിച്ചത്.",
    "backSec": "പ്രശസ്ത ഗായകൻ സൂരജ് സന്തോഷാണ് ഈ ഗാനം ഹൃദ്യമായി ആലപിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "സമകാലിക ചലച്ചിത്ര ഗാനങ്ങളുടെ ഒരു പ്രധാന സവിശേഷത എന്താണ്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> കഥാഗതിയോട് ചേർന്നുനിൽക്കുന്ന മിനിമലിസ്റ്റ് ആഖ്യാന ശൈലി<br>കഥയുടെ ഒഴുക്കിനൊപ്പം ചേർന്നുനിൽക്കുന്ന മിനിമലിസ്റ്റ് ആഖ്യാനമാണ് ഇന്നത്തെ പ്രത്യേകത.",
    "backSec": "കഥയുടെ ഒഴുക്കിനൊപ്പം ചേർന്നുനിൽക്കുന്ന മിനിമലിസ്റ്റ് ആഖ്യാനമാണ് ഇന്നത്തെ പ്രത്യേകത."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "മലയാള ചലച്ചിത്ര ഗാനങ്ങൾ സമൂഹത്തിൽ ചെലുത്തിയ ഏറ്റവും വലിയ സ്വാധീനം എന്താണ്?",
    "titleSec": "ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · ചലച്ചിത്ര ഗാനം: മലയാള ചലച്ചിത്ര ഗാനശാഖയും ഗാനരചയിതാക്കളും",
    "backEn": "<strong>ഉത്തരം:</strong> സാഹിത്യത്തെയും കവിതയെയും ജനകീയമാക്കലും വൈകാരിക സംസ്കാരം രൂപപ്പെടുത്തലും<br>ഉന്നത കാവ്യസംസ്കാരത്തെയും സംഗീതത്തെയും സാധാരണ ജനങ്ങളിലേക്ക് എത്തിക്കാൻ ചലച്ചിത്ര ഗാനങ്ങൾക്ക് കഴിഞ്ഞു.",
    "backSec": "ഉന്നത കാവ്യസംസ്കാരത്തെയും സംഗീതത്തെയും സാധാരണ ജനങ്ങളിലേക്ക് എത്തിക്കാൻ ചലച്ചിത്ര ഗാനങ്ങൾക്ക് കഴിഞ്ഞു."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'കീഴാള ദൃശ്യസംസ്കാരം (Subaltern Visual Culture)'?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>നിർവ്വചനം:</strong> അധഃസ്ഥിത-പാർശ്വവൽക്കരിക്കപ്പെട്ട ജനതയുടെ ജീവിതവും രാഷ്ട്രീയവും പ്രതിഫലിക്കുന്ന ദൃശ്യകല.",
    "backSec": "അധ്യായം: കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം) — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'സാംസ്കാരിക പ്രതിരോധം'?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>നിർവ്വചനം:</strong> മേധാവിത്വ മൂല്യങ്ങൾക്കെതിരെ തനത് നാടൻ കലകളിലൂടെയും ഭാഷയിലൂടെയും നടത്തുന്ന ചെറുത്തുനിൽപ്പ്.",
    "backSec": "അധ്യായം: കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം) — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "എന്താണ് 'പാർശ്വവൽക്കരണം (Marginalization)'?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ സംജ്ഞകൾ · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>നിർവ്വചനം:</strong> ഒരു വിഭാഗം ജനങ്ങളെ വികസനത്തിൽ നിന്നും അധികാരത്തിൽ നിന്നും പുറന്തള്ളുന്ന അവസ്ഥ.",
    "backSec": "അധ്യായം: കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം) — സാഹിത്യ ആശയങ്ങളും പഠനക്കുറിപ്പും."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കമ്മട്ടിപ്പാടം' എന്ന വിഖ്യാത ചിത്രം സംവിധാനം ചെയ്തത് ആര്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> രാജീവ് രവി<br>പ്രശസ്ത സംവിധായകനും ഛായാഗ്രാഹകനുമായ രാജീവ് രവിയാണ് 'കമ്മട്ടിപ്പാടം' സംവിധാനം ചെയ്തത്.",
    "backSec": "പ്രശസ്ത സംവിധായകനും ഛായാഗ്രാഹകനുമായ രാജീവ് രവിയാണ് 'കമ്മട്ടിപ്പാടം' സംവിധാനം ചെയ്തത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അങ്കമാലി ഡയറീസ്' എന്ന ചിത്രം സംവിധാനം ചെയ്തത് ആര്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> ലിജോ ജോസ് പെല്ലിശ്ശേരി<br>ലിജോ ജോസ് പെല്ലിശ്ശേരിയാണ് 'അങ്കമാലി ഡയറീസ്' (2017) സംവിധാനം ചെയ്തത്.",
    "backSec": "ലിജോ ജോസ് പെല്ലിശ്ശേരിയാണ് 'അങ്കമാലി ഡയറീസ്' (2017) സംവിധാനം ചെയ്തത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കമ്മട്ടിപ്പാടം' എന്ന സിനിമ പ്രധാനമായും ചർച്ച ചെയ്യുന്ന ചരിത്രപരമായ പ്രശ്നം എന്താണ്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> കൊച്ചി നഗരവൽക്കരണവും ദലിതരുടെ ഭൂമി തട്ടിയെടുക്കലും പാർശ്വവൽക്കരണവും<br>എറണാകുളം നഗരവികസനത്തിന്റെ പേരിൽ ദലിതർ കുടിയൊഴിപ്പിക്കപ്പെട്ട യാഥാർത്ഥ്യമാണിത്.",
    "backSec": "എറണാകുളം നഗരവികസനത്തിന്റെ പേരിൽ ദലിതർ കുടിയൊഴിപ്പിക്കപ്പെട്ട യാഥാർത്ഥ്യമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കമ്മട്ടിപ്പാട'ത്തിലെ 'ഗംഗ' എന്ന കഥാപാത്രത്തിലൂടെ മികച്ച നടനുള്ള സംസ്ഥാന അവാർഡ് നേടിയത് ആര്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> വിനായകൻ<br>വിനായകനാണ് ഗംഗ എന്ന കഥാപാത്രത്തെ അവിസ്മരണീയമാക്കി സംസ്ഥാന അവാർഡ് നേടിയത്.",
    "backSec": "വിനായകനാണ് ഗംഗ എന്ന കഥാപാത്രത്തെ അവിസ്മരണീയമാക്കി സംസ്ഥാന അവാർഡ് നേടിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അങ്കമാലി ഡയറീസ്' ചിത്രത്തിന്റെ തിരക്കഥ രചിച്ചത് ആര്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> ചെമ്പൻ വിനോദ് ജോസ്<br>നടൻ ചെമ്പൻ വിനോദ് ജോസാണ് 'അങ്കമാലി ഡയറീസ്' രചിച്ചത്.",
    "backSec": "നടൻ ചെമ്പൻ വിനോദ് ജോസാണ് 'അങ്കമാലി ഡയറീസ്' രചിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കമ്മട്ടിപ്പാടം' സിനിമയുടെ തിരക്കഥാകൃത്ത് ആരാണ്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> പി. ബാലചന്ദ്രൻ<br>പ്രമുഖ നാടകകൃത്തും നടനുമായ അന്തരിച്ച പി. ബാലചന്ദ്രനാണ് തിരക്കഥ എഴുതിയത്.",
    "backSec": "പ്രമുഖ നാടകകൃത്തും നടനുമായ അന്തരിച്ച പി. ബാലചന്ദ്രനാണ് തിരക്കഥ എഴുതിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അങ്കമാലി ഡയറീസ്' ചിത്രത്തിലെ സംഗീത സംവിധായകൻ ആരാണ്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> പ്രശാന്ത് പിള്ള<br>പ്രശാന്ത് പിള്ളയാണ് ചിത്രത്തിലെ ചടുലമായ നാടൻ ഈണങ്ങൾ ഒരുക്കിയത്.",
    "backSec": "പ്രശാന്ത് പിള്ളയാണ് ചിത്രത്തിലെ ചടുലമായ നാടൻ ഈണങ്ങൾ ഒരുക്കിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഈ സിനിമകളിലെ നാടൻപാട്ടുകൾ പ്രധാനമായും പ്രതിനിധീകരിക്കുന്നത് ഏത് വിഭാഗത്തിന്റെ ശബ്ദമാണ്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> കീഴാള - തൊഴിലാളി വർഗ്ഗത്തിന്റെ (Subaltern)<br>പാർശ്വവൽക്കരിക്കപ്പെട്ട കീഴാള-തൊഴിലാളി വർഗ്ഗത്തിന്റെ ശബ്ദമാണിത്.",
    "backSec": "പാർശ്വവൽക്കരിക്കപ്പെട്ട കീഴാള-തൊഴിലാളി വർഗ്ഗത്തിന്റെ ശബ്ദമാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അങ്കമാലി ഡയറീസ്' സിനിമയിലെ പ്രധാന കഥാപാത്രമായ വിൻസെന്റ് പെപ്പെയെ അവതരിപ്പിച്ചത് ആര്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> ആന്റണി വർഗ്ഗീസ് (പെപ്പെ)<br>ആന്റണി വർഗ്ഗീസാണ് പെപ്പെ എന്ന നായക കഥാപാത്രത്തിലൂടെ അരങ്ങേറ്റം കുറിച്ചത്.",
    "backSec": "ആന്റണി വർഗ്ഗീസാണ് പെപ്പെ എന്ന നായക കഥാപാത്രത്തിലൂടെ അരങ്ങേറ്റം കുറിച്ചത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കമ്മട്ടിപ്പാട'ത്തിലെ ബാലൻ ചേട്ടൻ എന്ന കഥാപാത്രത്തെ അവതരിപ്പിച്ച നടൻ ആര്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> മണികണ്ഠൻ ആചാരി<br>മണികണ്ഠൻ ആചാരിയാണ് ബാലൻ ചേട്ടനെ അവതരിപ്പിച്ച് മികച്ച സ്വഭാവ നടനുള്ള അവാർഡ് നേടിയത്.",
    "backSec": "മണികണ്ഠൻ ആചാരിയാണ് ബാലൻ ചേട്ടനെ അവതരിപ്പിച്ച് മികച്ച സ്വഭാവ നടനുള്ള അവാർഡ് നേടിയത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'അങ്കമാലി ഡയറീസി'ലെ പ്രശസ്തമായ നാടൻപാട്ട് ഏതാണ്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> അയ്യപ്പന്റമ്മ നെയ്യപ്പം ചുട്ടു / തീയ്യമ്മേ<br>'തിയ്യമ്മേ', 'അയ്യപ്പന്റമ്മ നെയ്യപ്പം ചുട്ടു' തുടങ്ങിയവ ചിത്രത്തിലെ പ്രധാന നാടൻപാട്ടുകളാണ്.",
    "backSec": "'തിയ്യമ്മേ', 'അയ്യപ്പന്റമ്മ നെയ്യപ്പം ചുട്ടു' തുടങ്ങിയവ ചിത്രത്തിലെ പ്രധാന നാടൻപാട്ടുകളാണ്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "കീഴാള ദൃശ്യസംസ്കാരം വെല്ലുവിളിക്കുന്നത് എന്തിനെയാണ്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> പരമ്പരാഗത വരേണ്യ സൗന്ദര്യശാസ്ത്രത്തെയും വിവേചനങ്ങളെയും<br>വരേണ്യ സൗന്ദര്യസങ്കൽപ്പങ്ങളെയും ജാതി-വർഗ്ഗ വിവേചനങ്ങളെയുമാണ് കീഴാള സിനിമകൾ ചോദ്യം ചെയ്യുന്നത്.",
    "backSec": "വരേണ്യ സൗന്ദര്യസങ്കൽപ്പങ്ങളെയും ജാതി-വർഗ്ഗ വിവേചനങ്ങളെയുമാണ് കീഴാള സിനിമകൾ ചോദ്യം ചെയ്യുന്നത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "'കമ്മട്ടിപ്പാടം' സിനിമ പുറത്തിറങ്ങിയ വർഷമേത്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> 2016<br>2016 മെയ് മാസത്തിലാണ് 'കമ്മട്ടിപ്പാടം' റിലീസ് ചെയ്തത്.",
    "backSec": "2016 മെയ് മാസത്തിലാണ് 'കമ്മട്ടിപ്പാടം' റിലീസ് ചെയ്തത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "നാടൻപാട്ടുകൾക്ക് ഈ സിനിമകളിലുള്ള പ്രധാന ആഖ്യാന ധർമ്മം എന്താണ്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> കഥയുടെ അവിഭാജ്യ ഘടകമായി മാറി യാഥാർത്ഥ്യം പ്രകടിപ്പിക്കൽ<br>കഥയുടെ ആന്തരിക ഭാവമായി മാറി സാമൂഹിക യാഥാർത്ഥ്യങ്ങൾ പ്രകടിപ്പിക്കലാണിത്.",
    "backSec": "കഥയുടെ ആന്തരിക ഭാവമായി മാറി സാമൂഹിക യാഥാർത്ഥ്യങ്ങൾ പ്രകടിപ്പിക്കലാണിത്."
  },
  {
    "category": "malayalam",
    "subject": "Malayalam (AEC സാഹിത്യം)",
    "titleEn": "ഈ രണ്ട് സിനിമകളും മലയാള സിനിമാ ചരിത്രത്തിൽ അടയാളപ്പെടുത്തുന്നത് എന്തിനെയാണ്?",
    "titleSec": "കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "lang": "ml",
    "hint": "സാഹിത്യ പഠനം · കീഴാള ദൃശ്യസംസ്കാരം: ‘കമ്മട്ടിപ്പാടം’, ‘അങ്കമാലി ഡയറീസ്’ (നാടൻപാട്ടുകളുടെ സാമൂഹിക പ്രാധാന്യം)",
    "backEn": "<strong>ഉത്തരം:</strong> പ്രാദേശിക യാഥാർത്ഥ്യങ്ങളിലേക്കും കീഴാള സംസ്കാരത്തിലേക്കുമുള്ള ഭാവുകത്വ വഴിത്തിരിവ്<br>കീഴാള ജീവിതത്തിലേക്കും തനത് പ്രാദേശികതയിലേക്കും മലയാള സിനിമ തിരിഞ്ഞുനടന്ന ചരിത്ര നാഴികക്കല്ലുകളാണിവ.",
    "backSec": "കീഴാള ജീവിതത്തിലേക്കും തനത് പ്രാദേശികതയിലേക്കും മലയാള സിനിമ തിരിഞ്ഞുനടന്ന ചരിത്ര നാഴികക്കല്ലുകളാണിവ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the total external mark weightage assigned to the Mathematics / Numerical Skills syllabus?",
    "titleSec": "മാത്തമാറ്റിക്സ് / ന്യൂമറിക്കൽ സ്കിൽസ് പരീക്ഷയുടെ ആകെ എക്സ്റ്റേണൽ മാർക്ക് എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> 50 Marks<br>The official detailed syllabus clearly allocates 50 external examination marks across the 4 modules.",
    "backSec": "<strong>ഉത്തരം:</strong> 50 മാർക്ക്<br>ഔദ്യോഗിക സിലബസ് പ്രകാരം നാല് മൊഡ്യൂളുകളിലായി 50 മാർക്കിന്റെ ബാഹ്യ പരീക്ഷയാണ് ക്രമീകരിച്ചിരിക്കുന്നത്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "How many total instructional hours (including tutorials) are designated for this course?",
    "titleSec": "ഈ കോഴ്സിനായി ആകെ അനുവദിച്ചിട്ടുള്ള അധ്യാപന സമയം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> 45 Hours (36 lecture + 9 tutorial)<br>The course consists of 36 classroom lecture hours plus 9 dedicated tutorial hours, totaling 45 hours.",
    "backSec": "<strong>ഉത്തരം:</strong> 45 മണിക്കൂർ (36 ലക്ചർ + 9 ട്യൂട്ടോറിയൽ)<br>36 ക്ലാസ്സ് റൂം അധ്യാപന സമയവും 9 ട്യൂട്ടോറിയൽ സമയവും ചേർത്ത് ആകെ 45 മണിക്കൂറാണ് കോഴ്സിനുള്ളത്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Which publication and author is recommended as the Primary Reference for this course?",
    "titleSec": "ഈ കോഴ്സിന്റെ പ്രധാന റഫറൻസ് ഗ്രന്ഥമായി ശുപാർശ ചെയ്തിരിക്കുന്നത് ആരുടെ പുസ്തകമാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> Fast Track Objective Arithmetic by Rajesh Verma (Arihant)<br>Rajesh Verma's 'Fast Track Objective Arithmetic' published by Arihant is cited as Primary Reference 1.",
    "backSec": "<strong>ഉത്തരം:</strong> രാജേഷ് വർമ്മയുടെ ഫാസ്റ്റ് ട്രാക്ക് ഒബ്ജക്റ്റീവ് അരിത്മെറ്റിക് (അരിഹന്ത്)<br>അരിഹന്ത് പബ്ലിക്കേഷൻസിന്റെ രാജേഷ് വർമ്മ രചിച്ച 'ഫാസ്റ്റ് ട്രാക്ക് ഒബ്ജക്റ്റീവ് അരിത്മെറ്റിക്' ആണ് പ്രൈമറി റഫറൻസ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Which topics belong to Module I (Fundamentals of Arithmetic)?",
    "titleSec": "താഴെ പറയുന്നവയിൽ മൊഡ്യൂൾ 1-ൽ ഉൾപ്പെടുന്നത് ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> Place value, Divisibility tests, Number series & Fractions<br>Module I comprises Units 1 to 5: Place value, divisibility rules, number series, simple fractions, and decimal fractions.",
    "backSec": "<strong>ഉത്തരം:</strong> പ്ലേസ് വാല്യൂ, ഹരണ നിയമങ്ങൾ, സംഖ്യാ ശ്രേണികൾ & ഭിന്നസംഖ്യകൾ<br>മൊഡ്യൂൾ 1-ൽ പ്ലേസ് വാല്യൂ, ഹരണ നിയമങ്ങൾ, നമ്പർ സീരീസ്, സാധാരണ-ദശാംശ ഭിന്നസംഖ്യകൾ എന്നിവ ഉൾപ്പെടുന്നു."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "How many marks are allotted to Module II (Basic Arithmetic Operations)?",
    "titleSec": "മൊഡ്യൂൾ 2-ന് (അടിസ്ഥാന ഗണിത പ്രക്രിയകൾ) എത്ര മാർക്കാണ് നിശ്ചയിച്ചിട്ടുള്ളത്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> 13 Marks<br>Module II is officially weighted at 13 external marks covering HCF, LCM, roots, and simplifications.",
    "backSec": "<strong>ഉത്തരം:</strong> 13 മാർക്ക്<br>ഉ.സാ.ഘ, ല.സാ.ഗു, വർഗ്ഗമൂലം, ലഘൂകരണം എന്നിവ ഉൾപ്പെടുന്ന മൊഡ്യൂൾ 2-ന് 13 മാർക്കാണ് അനുവദിച്ചിട്ടുള്ളത്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Under which module is 'Problems Based on Ages' classified in the syllabus?",
    "titleSec": "പ്രായം സംബന്ധിച്ച കണക്കുകൾ സിലബസിൽ ഏത് മൊഡ്യൂളിലാണ് ഉൾപ്പെടുത്തിയിരിക്കുന്നത്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> Module III<br>Unit 14 'Problems based on ages' is placed inside Module III alongside Average, Ratio, and Percentage.",
    "backSec": "<strong>ഉത്തരം:</strong> മൊഡ്യൂൾ 3<br>മൊഡ്യൂൾ 3-ൽ ശരാശരി, അനുപാതം, ശതമാനം എന്നിവയ്ക്കൊപ്പം യൂണിറ്റ് 14 ആയിട്ടാണ് പ്രായം സംബന്ധിച്ച കണക്കുകൾ വരുന്നത്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Which module covers Profit and Loss, Discount, and Compound Interest?",
    "titleSec": "ലാഭനഷ്ടങ്ങൾ, ഡിസ്കൗണ്ട്, കൂട്ടുപലിശ എന്നിവ പഠിക്കുന്നത് ഏത് മൊഡ്യൂളിലാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> Module IV (Financial Mathematics)<br>Financial Mathematics (Module IV) covers Profit and Loss, Discount, Simple Interest, and Compound Interest.",
    "backSec": "<strong>ഉത്തരം:</strong> മൊഡ്യൂൾ 4 (ധനകാര്യ ഗണിതം)<br>മൊഡ്യൂൾ 4-ലാണ് വാണിജ്യ-ധനകാര്യ ഗണിത ഭാഗങ്ങളായ ലാഭനഷ്ടങ്ങൾ, ഡിസ്കൗണ്ട്, സാധാരണ-കൂട്ടുപലിശ എന്നിവ വരുന്നത്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the external mark share of Module IV in the syllabus blueprint?",
    "titleSec": "മൊഡ്യൂൾ 4-ന്റെ പരീക്ഷാ മാർക്ക് വിഹിതം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> 12 Marks<br>Module IV is assigned 12 marks in the 50-mark external scheme (12 + 13 + 13 + 12 = 50 marks).",
    "backSec": "<strong>ഉത്തരം:</strong> 12 മാർക്ക്<br>നാല് മൊഡ്യൂളുകളുടെ ആകെ 50 മാർക്കിൽ മൊഡ്യൂൾ 4-ന് 12 മാർക്കാണുള്ളത് (12 + 13 + 13 + 12 = 50)."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Which rule governs the hierarchy of operations in numerical simplifications in Module II?",
    "titleSec": "മൊഡ്യൂൾ 2-ലെ ലഘൂകരണ കണക്കുകളിൽ ക്രിയകളുടെ മുൻഗണന നിശ്ചയിക്കുന്ന നിയമം ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> VBODMAS Rule<br>VBODMAS (Vinculum, Brackets, Of, Division, Multiplication, Addition, Subtraction) specifies the exact priority of arithmetic operations.",
    "backSec": "<strong>ഉത്തരം:</strong> VBODMAS നിയമം<br>ഗണിത ക്രിയകളുടെ കൃത്യമായ മുൻഗണനാ ക്രമം നിശ്ചയിക്കുന്നത് VBODMAS നിയമമാണ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What open-ended exploratory topics are suggested in the syllabus for advanced study?",
    "titleSec": "വിപുലമായ പഠനത്തിനായി സിലബസിൽ നൽകിയിട്ടുള്ള ഓപ്പൺ എൻഡഡ് വിഷയങ്ങൾ ഏവ?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> Mixture, Alligation, Partnership, Pipes & Cisterns<br>The syllabus lists Types of Numbers, Mixture/Alligation, Partnership, and Pipes and Cisterns under Open Ended Unit V.",
    "backSec": "<strong>ഉത്തരം:</strong> മിശ്രിതങ്ങൾ (Alligation), പങ്കാളിത്തം, പൈപ്പും ടാങ്കും<br>ഓപ്പൺ എൻഡഡ് ഭാഗത്ത് മിശ്രിതങ്ങൾ, പാർട്ണർഷിപ്പ്, പൈപ്പും സിസ്റ്റേണും തുടങ്ങിയ പ്രായോഗിക വിഷയങ്ങളാണ് ഉൾപ്പെടുത്തിയിരിക്കുന്നത്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Which mathematical property asserts that HCF(a,b) × LCM(a,b) = a × b?",
    "titleSec": "രണ്ട് സംഖ്യകളുടെ ഗുണനഫലം അവയുടെ ഉ.സാ.ഘയുടെയും ല.സാ.ഗുവിന്റെയും ഗുണനഫലത്തിന് തുല്യമാണെന്ന തത്വം ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> Fundamental Product Property of HCF and LCM<br>For any two positive integers a and b, the product of their HCF and LCM always equals their product (a × b).",
    "backSec": "<strong>ഉത്തരം:</strong> ഉ.സാ.ഘ - ല.സാ.ഗു ഗുണനഫല തത്വം<br>ഏതൊരു രണ്ട് സംഖ്യകൾക്കും അവയുടെ ഉ.സാ.ഘ × ല.സാ.ഗു = സംഖ്യകളുടെ ഗുണനഫലം ആയിരിക്കും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "How are simple fractions distinguished from decimal fractions in Module I?",
    "titleSec": "സാധാരണ ഭിന്നസംഖ്യകളെ ദശാംശ ഭിന്നസംഖ്യകളിൽ നിന്നും എങ്ങനെ വേർതിരിക്കുന്നു?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> Simple fractions have p/q form (q≠0); Decimal fractions have powers of 10 in denominators<br>A simple fraction expresses a ratio p/q, whereas a decimal fraction has a denominator that is an explicit power of 10 (10, 100, 1000).",
    "backSec": "<strong>ഉത്തരം:</strong> സാധാരണ ഭിന്നസംഖ്യകൾ p/q രൂപത്തിലും, ദശാംശ ഭിന്നസംഖ്യകൾ 10-ന്റെ ഘാതങ്ങൾ ഛേദമായുമാണ് വരുന്നത്<br>ഛേദം 10, 100, 1000 തുടങ്ങിയ സംഖ്യകളായി വരുന്ന ഭിന്നസംഖ്യകളെയാണ് ദശാംശ ഭിന്നസംഖ്യകൾ എന്ന് വിളിക്കുന്നത്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the key difference between Simple Interest (SI) and Compound Interest (CI)?",
    "titleSec": "സാധാരണ പലിശയും (SI) കൂട്ടുപലിശയും (CI) തമ്മിലുള്ള പ്രധാന വ്യത്യാസം എന്താണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> SI is calculated only on principal; CI earns interest on accumulated interest as well<br>Simple interest remains constant each period on the original principal, whereas compound interest adds accrued interest back to principal.",
    "backSec": "<strong>ഉത്തരം:</strong> സാധാരണ പലിശ മുതലിന്മേൽ മാത്രം കണക്കാക്കുന്നു; കൂട്ടുപലിശയിൽ മുൻകാല പലിശയ്ക്കും പലിശ ലഭിക്കുന്നു<br>മുതലിന്മേൽ മാത്രം പലിശ കണക്കാക്കുന്നതാണ് സാധാരണ പലിശ. പലിശ മുതലിനോട് ചേർത്ത് വീണ്ടും പലിശ കണക്കാക്കുന്നതാണ് കൂട്ടുപലിശ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "In Module III, what formula determines the Average of a set of observations?",
    "titleSec": "മൊഡ്യൂൾ 3 പ്രകാരം ഒരു കൂട്ടം സംഖ്യകളുടെ ശരാശരി കാണാനുള്ള സൂത്രവാക്യം ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> Sum of observations divided by total number of observations<br>Average (Arithmetic Mean) = Sum of all observations / Number of observations.",
    "backSec": "<strong>ഉത്തരം:</strong> സംഖ്യകളുടെ ആകെത്തുകയെ സംഖ്യകളുടെ എണ്ണം കൊണ്ട് ഹരിക്കുക<br>ശരാശരി = നിരീക്ഷണങ്ങളുടെ ആകെത്തുക / നിരീക്ഷണങ്ങളുടെ എണ്ണം."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the primary objective of studying Basic Numerical Skills in undergraduate courses?",
    "titleSec": "ബിരുദ തലത്തിൽ അടിസ്ഥാന ന്യൂമറിക്കൽ സ്കിൽസ് പഠിപ്പിക്കുന്നതിന്റെ പ്രധാന ലക്ഷ്യം എന്താണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Detailed Syllabus & Examination Blueprint",
    "backEn": "<strong>Answer:</strong> To develop quantitative aptitude and rapid analytical problem-solving skills for competitive exams<br>The course aims to build mental arithmetic agility, quantitative problem-solving speed, and analytical confidence for careers and competitive exams.",
    "backSec": "<strong>ഉത്തരം:</strong> മത്സര പരീക്ഷകൾക്കും പ്രായോഗിക ജീവിതത്തിനും ആവശ്യമായ വിശകലന ശേഷിയും വേഗതയും വളർത്തുക<br>വിദ്യാർത്ഥികളിൽ വേഗത്തിലുള്ള കണക്കുകൂട്ടൽ രീതികളും പ്രശ്നപരിഹാര ശേഷിയും മത്സരപരീക്ഷാ മികവും രൂപപ്പെടുത്തുകയാണ് ഇതിന്റെ മുഖ്യ ലക്ഷ്യം."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the place value of 4 in 46,127?",
    "titleSec": "46,127 എന്ന സംഖ്യയിൽ 4-ന്റെ സ്ഥാനവില (Place value) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 40,000<br>In 46,127, 4 occupies the ten-thousands column: 4 × 10,000 = 40,000.",
    "backSec": "<strong>ഉത്തരം:</strong> 40,000<br>46,127-ൽ 4 സ്ഥിതി ചെയ്യുന്നത് പതിനായിരത്തിന്റെ സ്ഥാനത്താണ്: 4 × 10,000 = 40,000."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the difference between the place value and face value of 7 in 837,218?",
    "titleSec": "837,218 എന്ന സംഖ്യയിലെ 7-ന്റെ സ്ഥാനവിലയും മുഖവിലയും തമ്മിലുള്ള വ്യത്യാസം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 6,993<br>Place value of 7 is 7,000 (thousands place). Face value is 7. Difference = 7,000 - 7 = 6,993.",
    "backSec": "<strong>ഉത്തരം:</strong> 6,993<br>7-ന്റെ സ്ഥാനവില = 7,000. മുഖവില = 7. വ്യത്യാസം = 7,000 - 7 = 6,993."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the only even prime number in mathematics?",
    "titleSec": "താഴെ പറയുന്നവയിൽ ഇരട്ട സംഖ്യയായ ഒരേയൊരു അഭാജ്യ സംഖ്യ (Prime number) ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 2<br>2 is the smallest prime number and the only even prime number (all other even numbers are divisible by 2).",
    "backSec": "<strong>ഉത്തരം:</strong> 2<br>2 മാത്രമാണ് ഇരട്ട സംഖ്യയായ അഭാജ്യ സംഖ്യ. മറ്റെല്ലാ ഇരട്ട സംഖ്യകളും 2 കൊണ്ട് ഹരിക്കപ്പെടും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the sum of the first two prime numbers?",
    "titleSec": "ആദ്യത്തെ രണ്ട് അഭാജ്യ സംഖ്യകളുടെ തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 5 (2 + 3)<br>The first two prime numbers are 2 and 3. Their sum is 2 + 3 = 5.",
    "backSec": "<strong>ഉത്തരം:</strong> 5 (2 + 3)<br>ആദ്യത്തെ രണ്ട് അഭാജ്യ സംഖ്യകൾ 2, 3 എന്നിവയാണ്. അവയുടെ തുക = 2 + 3 = 5."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Which pair of numbers is relatively prime (coprime) to each other?",
    "titleSec": "താഴെ പറയുന്നവയിൽ പരസ്പര അഭാജ്യ സംഖ്യകൾ (Coprime pairs) ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> (92, 85) [HCF = 1]<br>Two numbers are coprime if their HCF is 1. Factors of 92 are 1, 2, 4, 23, 46, 92; factors of 85 are 1, 5, 17, 85. HCF = 1.",
    "backSec": "<strong>ഉത്തരം:</strong> (92, 85) [ഉ.സാ.ഘ = 1]<br>രണ്ട് സംഖ്യകളുടെ ഉ.സാ.ഘ 1 ആണെങ്കിൽ അവ പരസ്പര അഭാജ്യ സംഖ്യകളാണ്. 92, 85 എന്നിവയുടെ ഉ.സാ.ഘ 1 ആണ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The sum of place values of 2 in the number 2,424 is?",
    "titleSec": "2,424 എന്ന സംഖ്യയിലെ 2-കളുടെ സ്ഥാനവിലകളുടെ തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 2,020<br>First 2 is in thousands place (2,000); second 2 is in tens place (20). Sum = 2,000 + 20 = 2,020.",
    "backSec": "<strong>ഉത്തരം:</strong> 2,020<br>ആദ്യത്തെ 2-ന്റെ സ്ഥാനവില 2,000; രണ്ടാമത്തെ 2-ന്റെ സ്ഥാനവില 20. തുക = 2,000 + 20 = 2,020."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If a number is divisible by 9, what must be true about its digits?",
    "titleSec": "ഒരു സംഖ്യയെ 9 കൊണ്ട് പൂർണ്ണമായി ഹരിക്കാൻ കഴിയുമെങ്കിൽ താഴെ പറയുന്നവയിൽ ഏതാണ് ശരി?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> The sum of its digits is divisible by 9<br>A number is divisible by 9 if and only if the sum of all its individual digits is a multiple of 9.",
    "backSec": "<strong>ഉത്തരം:</strong> അക്കങ്ങളുടെ തുക 9 കൊണ്ട് ഹരിക്കപ്പെടണം<br>ഒരു സംഖ്യയിലെ എല്ലാ അക്കങ്ങളുടെയും തുക 9-ന്റെ ഗുണിതമാണെങ്കിൽ മാത്രമേ ആ സംഖ്യയെ 9 കൊണ്ട് ഹരിക്കാൻ കഴിയൂ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Using the divisibility test for 11, which number (such as 1,331) is divisible by 11?",
    "titleSec": "താഴെ പറയുന്നവയിൽ 11 കൊണ്ട് പൂർണ്ണമായി ഹരിക്കാൻ കഴിയുന്ന സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 1,331<br>In 1331: Sum of odd place digits (1st, 3rd) = 1 + 3 = 4; Sum of even place digits (2nd, 4th) = 3 + 1 = 4. Difference = 4 - 4 = 0. Hence divisible by 11.",
    "backSec": "<strong>ഉത്തരം:</strong> 1,331<br>1331-ൽ: ഒറ്റ സ്ഥാനങ്ങളുടെ തുക = 1+3=4, ഇരട്ട സ്ഥാനങ്ങളുടെ തുക = 3+1=4. വ്യത്യാസം = 4-4=0 ആയതിനാൽ ഇത് 11 കൊണ്ട് ഹരിക്കപ്പെടും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "In a division problem, divisor is 10, quotient is 12, and remainder is 5. What is the dividend?",
    "titleSec": "ഒരു ഹരണ കണക്കിൽ ഭാജകം 10-ഉം, ഹരണഫലം 12-ഉം, ശിഷ്ടം 5-ഉം ആയാൽ ഭാജ്യം (Dividend) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 125<br>Dividend = (Divisor × Quotient) + Remainder = (10 × 12) + 5 = 120 + 5 = 125.",
    "backSec": "<strong>ഉത്തരം:</strong> 125<br>ഭാജ്യം = (ഭാജകം × ഹരണഫലം) + ശിഷ്ടം = (10 × 12) + 5 = 120 + 5 = 125."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "How many prime numbers exist between 1 and 20?",
    "titleSec": "1-നും 20-നും ഇടയിൽ എത്ര അഭാജ്യ സംഖ്യകൾ (Prime numbers) ഉണ്ട്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 8 (2, 3, 5, 7, 11, 13, 17, 19)<br>The prime numbers under 20 are 2, 3, 5, 7, 11, 13, 17, and 19 (total 8).",
    "backSec": "<strong>ഉത്തരം:</strong> 8 (2, 3, 5, 7, 11, 13, 17, 19)<br>20-ൽ താഴെയുള്ള അഭാജ്യ സംഖ്യകൾ: 2, 3, 5, 7, 11, 13, 17, 19 (ആകെ 8 എണ്ണം)."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the smallest natural number?",
    "titleSec": "ഏറ്റവും ചെറിയ എണ്ണൽ സംഖ്യ (Natural number) ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 1<br>Natural numbers start from counting numbers: N = {1, 2, 3...}. Smallest is 1 (0 is the smallest whole number).",
    "backSec": "<strong>ഉത്തരം:</strong> 1<br>എണ്ണൽ സംഖ്യകൾ 1 മുതലാണ് ആരംഭിക്കുന്നത്. അതിനാൽ ഏറ്റവും ചെറിയ എണ്ണൽ സംഖ്യ 1 ആണ് (0 അഖണ്ഡ സംഖ്യയാണ്)."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A number is divisible by 6 if it is divisible by both?",
    "titleSec": "ഒരു സംഖ്യയെ 6 കൊണ്ട് ഹരിക്കാൻ കഴിയണമെങ്കിൽ അത് താഴെ പറയുന്ന ഏതെല്ലാം സംഖ്യകൾ കൊണ്ട് ഹരിക്കപ്പെടണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 2 and 3<br>Since 2 and 3 are coprime factors of 6 (2 × 3 = 6), a number divisible by both 2 and 3 is divisible by 6.",
    "backSec": "<strong>ഉത്തരം:</strong> 2-ഉം 3-ഉം<br>6-ന്റെ പരസ്പര അഭാജ്യ ഘടകങ്ങൾ 2, 3 ആയതിനാൽ, 2 കൊണ്ടും 3 കൊണ്ടും ഒരേപോലെ ഹരിക്കാൻ കഴിയുന്ന സംഖ്യ 6 കൊണ്ടും ഹരിക്കപ്പെടും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of 0 divided by any non-zero integer a?",
    "titleSec": "പൂജ്യത്തെ ഏതെങ്കിലും ഒരു സംഖ്യ a (a≠0) കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ഫലം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 0<br>0 divided by any non-zero number is always 0. (Division BY zero is undefined).",
    "backSec": "<strong>ഉത്തരം:</strong> 0<br>പൂജ്യത്തെ ഏത് പൂജ്യമല്ലാത്ത സംഖ്യ കൊണ്ട് ഹരിച്ചാലും ഫലം 0 ആയിരിക്കും (പൂജ്യം കൊണ്ട് ഹരിക്കുന്നത് നിർവചിക്കപ്പെട്ടിട്ടില്ല)."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The number 1 is classified as?",
    "titleSec": "1 എന്ന സംഖ്യയെ എങ്ങനെയാണ് തരംതിരിച്ചിരിക്കുന്നത്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> Neither prime nor composite<br>Prime numbers require exactly two distinct factors (1 and itself). Since 1 has only one factor, it is neither prime nor composite.",
    "backSec": "<strong>ഉത്തരം:</strong> അഭാജ്യവുമല്ല ഭാജ്യവുമല്ല<br>അഭാജ്യ സംഖ്യയ്ക്ക് കൃത്യം രണ്ട് വ്യത്യസ്ത ഘടകങ്ങൾ വേണം. 1-ന് ഒരു ഘടകം മാത്രമേയുള്ളൂ എന്നതിനാൽ ഇത് അഭാജ്യവുമല്ല ഭാജ്യവുമല്ല."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What least number must be subtracted from 13601 to get a number exactly divisible by 87?",
    "titleSec": "13601-ൽ നിന്ന് ഏറ്റവും കുറഞ്ഞത് ഏത് സംഖ്യ കുറച്ചാലാണ് 87 കൊണ്ട് പൂർണ്ണമായി ഹരിക്കാൻ കഴിയുക?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 1 · Number System",
    "backEn": "<strong>Answer:</strong> 29<br>Dividing 13601 by 87 gives quotient 156 with remainder 29 (156 × 87 = 13572; 13601 - 13572 = 29). Subtracting 29 leaves a multiple of 87.",
    "backSec": "<strong>ഉത്തരം:</strong> 29<br>13601-നെ 87 കൊണ്ട് ഹരിക്കുമ്പോൾ കിട്ടുന്ന ശിഷ്ടം 29 ആണ്. അതിനാൽ 29 കുറച്ചാൽ 87 കൊണ്ട് പൂർണ്ണമായി ഹരിക്കാം."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the next term in the series: 3, 7, 11, 15, 19,?",
    "titleSec": "3, 7, 11, 15, 19, ___ എന്ന ശ്രേണിയിലെ അടുത്ത സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 23 (19 + 4)<br>Common difference d = 7 - 3 = 4. Next term = 19 + 4 = 23.",
    "backSec": "<strong>ഉത്തരം:</strong> 23 (19 + 4)<br>ഇതൊരു സമാന്തര ശ്രേണിയാണ്, പൊതുവ്യത്യാസം d = 4. അടുത്ത പദം = 19 + 4 = 23."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the 10th term of the arithmetic progression 2, 5, 8, 11?",
    "titleSec": "2, 5, 8, 11... എന്ന സമാന്തര ശ്രേണിയിലെ 10-ാം പദം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 29 [Tn = 2 + (10-1)×3]<br>a = 2, d = 3. T10 = a + (10-1)d = 2 + 9×3 = 2 + 27 = 29.",
    "backSec": "<strong>ഉത്തരം:</strong> 29 [Tn = 2 + (10-1)×3]<br>ആദ്യപദം a = 2, പൊതുവ്യത്യാസം d = 3. T10 = 2 + (10-1)×3 = 2 + 27 = 29."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the missing number in the series: 2, 6, 18, 54,?",
    "titleSec": "2, 6, 18, 54, ___ എന്ന ശ്രേണിയിലെ അടുത്ത സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 162 (54 × 3)<br>This is a Geometric Progression with common ratio r = 3 (2×3=6, 6×3=18, 18×3=54). Next term = 54 × 3 = 162.",
    "backSec": "<strong>ഉത്തരം:</strong> 162 (54 × 3)<br>ഇതൊരു ഗുണോത്തര ശ്രേണിയാണ് (പൊതു അനുപാതം r = 3). അടുത്ത പദം = 54 × 3 = 162."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the missing number: 1, 4, 9, 16, 25, 36,?",
    "titleSec": "1, 4, 9, 16, 25, 36, ___ എന്ന ശ്രേണിയിലെ അടുത്ത സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 49 (7²)<br>This is the sequence of consecutive perfect squares: 1², 2², 3², 4², 5², 6², 7² = 49.",
    "backSec": "<strong>ഉത്തരം:</strong> 49 (7²)<br>ഇത് സംഖ്യകളുടെ വർഗ്ഗങ്ങളാണ്: 1², 2², 3², 4², 5², 6², അടുത്തത് 7² = 49."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the next number in the cube series: 1, 8, 27, 64,?",
    "titleSec": "1, 8, 27, 64, ___ എന്ന ഘന ശ്രേണിയിലെ അടുത്ത സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 125 (5³)<br>The terms are 1³=1, 2³=8, 3³=27, 4³=64, 5³ = 125.",
    "backSec": "<strong>ഉത്തരം:</strong> 125 (5³)<br>പദങ്ങൾ യഥാക്രമം 1³, 2³, 3³, 4³ എന്നിവയാണ്; അടുത്ത പദം 5³ = 125."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Identify the wrong number in the series: 3, 5, 9, 11, 15, 17, 21, 24?",
    "titleSec": "3, 5, 9, 11, 15, 17, 21, 24 എന്ന ശ്രേണിയിലെ തെറ്റായ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 24 (Should be 23: +2, +4, +2, +4 pattern)<br>Pattern adds alternately +2, +4: 3+2=5, 5+4=9, 9+2=11, 11+4=15, 15+2=17, 17+4=21, 21+2 = 23 (not 24).",
    "backSec": "<strong>ഉത്തരം:</strong> 24 (23 ആയിരിക്കണം: +2, +4 ക്രമം)<br>+2, +4 എന്നിങ്ങനെ ഒന്നിടവിട്ടാണ് കൂടുന്നത്: 21 + 2 = 23 ആണ് വരേണ്ടിയിരുന്നത്; അതിനാൽ 24 തെറ്റാണ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the sum of the first 20 natural numbers (1 + 2 + 3 +  + 20)?",
    "titleSec": "ആദ്യത്തെ 20 എണ്ണൽ സംഖ്യകളുടെ തുക (1 + 2 + ... + 20) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 210 [20 × 21 / 2]<br>Sum of first n natural numbers = n(n+1)/2 = 20 × 21 / 2 = 10 × 21 = 210.",
    "backSec": "<strong>ഉത്തരം:</strong> 210 [20 × 21 / 2]<br>ആദ്യത്തെ n എണ്ണൽ സംഖ്യകളുടെ തുക കാണാനുള്ള സൂത്രവാക്യം = n(n+1)/2 = 20 × 21 / 2 = 210."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the missing term: 2, 3, 5, 7, 11, 13,?",
    "titleSec": "2, 3, 5, 7, 11, 13, ___ എന്ന ശ്രേണിയിലെ അടുത്ത സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 17 (Next Prime Number)<br>This is the consecutive prime number sequence: 2, 3, 5, 7, 11, 13, next prime is 17.",
    "backSec": "<strong>ഉത്തരം:</strong> 17 (അടുത്ത അഭാജ്യ സംഖ്യ)<br>ഇത് ക്രമാനുഗതമായ അഭാജ്യ സംഖ്യകളുടെ ശ്രേണിയാണ്; 13 കഴിഞ്ഞുള്ള അടുത്ത അഭാജ്യ സംഖ്യ 17 ആണ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "In an AP, if first term a = 5 and common difference d = -2, what is the 6th term?",
    "titleSec": "ഒരു സമാന്തര ശ്രേണിയിൽ a = 5, d = -2 ആയാൽ 6-ാം പദം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> -5 [5 + 5×(-2) = 5 - 10]<br>T6 = a + (6 - 1)d = 5 + 5(-2) = 5 - 10 = -5.",
    "backSec": "<strong>ഉത്തരം:</strong> -5 [5 + 5×(-2) = 5 - 10]<br>T6 = a + (n-1)d = 5 + (6-1)(-2) = 5 + 5(-2) = 5 - 10 = -5."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the missing number in the alternating series: 4, 18, 7, 14, 10, 10, 13,?",
    "titleSec": "4, 18, 7, 14, 10, 10, 13, ___ എന്ന ഒന്നിടവിട്ട ശ്രേണിയിലെ അടുത്ത സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 6 (10 - 4)<br>Two interwoven series: Series 1 (odd positions): 4, 7, 10, 13 (+3 each); Series 2 (even positions): 18, 14, 10, ___ (-4 each). Next term = 10 - 4 = 6.",
    "backSec": "<strong>ഉത്തരം:</strong> 6 (10 - 4)<br>ഇതിൽ രണ്ട് ശ്രേണികൾ ഇടകലർന്നിരിക്കുന്നു: ആദ്യത്തേത് (+3): 4, 7, 10, 13; രണ്ടാമത്തേത് (-4): 18, 14, 10, അടുത്തത് 10 - 4 = 6."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the common ratio 'r' of the geometric sequence 81, 27, 9, 3, 1?",
    "titleSec": "81, 27, 9, 3, 1 എന്ന ഗുണോത്തര ശ്രേണിയുടെ പൊതു അനുപാതം (Common ratio) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 1/3<br>Common ratio r = T2 / T1 = 27 / 81 = 1/3.",
    "backSec": "<strong>ഉത്തരം:</strong> 1/3<br>പൊതു അനുപാതം r = രണ്ടാം പദം / ഒന്നാം പദം = 27 / 81 = 1/3."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the next number: 0, 6, 24, 60, 120, 210,?",
    "titleSec": "0, 6, 24, 60, 120, 210, ___ എന്ന ശ്രേണിയിലെ അടുത്ത സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 336 (7³ - 7 = 343 - 7)<br>Pattern is n³ - n: 1³-1=0, 2³-2=6, 3³-3=24, 4³-4=60, 5³-5=120, 6³-6=210, next is 7³-7 = 343 - 7 = 336.",
    "backSec": "<strong>ഉത്തരം:</strong> 336 (7³ - 7 = 343 - 7)<br>ക്രമം n³ - n എന്ന രൂപത്തിലാണ്: 1³-1=0, 2³-2=6, 3³-3=24... അടുത്തത് 7³-7 = 343 - 7 = 336."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If the 3rd term of an AP is 8 and 7th term is 20, what is the common difference d?",
    "titleSec": "ഒരു സമാന്തര ശ്രേണിയിലെ മൂന്നാം പദം 8-ഉം ഏഴാം പദം 20-ഉം ആയാൽ പൊതുവ്യത്യാസം d എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 3 [(20 - 8) / (7 - 3) = 12 / 4]<br>T7 - T3 = 4d => 20 - 8 = 4d => 12 = 4d => d = 3.",
    "backSec": "<strong>ഉത്തരം:</strong> 3 [(20 - 8) / (7 - 3) = 12 / 4]<br>T7 - T3 = 4d => 20 - 8 = 12 => 4d = 12 => d = 3."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the sum of all odd numbers from 1 to 19 inclusive (10 terms)?",
    "titleSec": "1 മുതൽ 19 വരെയുള്ള ഒറ്റസംഖ്യകളുടെ (10 എണ്ണം) ആകെത്തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 100 (n² = 10²)<br>Sum of first n odd natural numbers = n². Here n = 10, so 10² = 100.",
    "backSec": "<strong>ഉത്തരം:</strong> 100 (n² = 10²)<br>ആദ്യത്തെ n ഒറ്റസംഖ്യകളുടെ തുക = n². ഇവിടെ n = 10 ആയതിനാൽ തുക = 10² = 100."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the missing term in the sequence: 5, 11, 23, 47, 95,?",
    "titleSec": "5, 11, 23, 47, 95, ___ എന്ന ശ്രേണിയിലെ അടുത്ത സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 2 · Number Sequence & Series",
    "backEn": "<strong>Answer:</strong> 191 (95 × 2 + 1)<br>Pattern is ×2 + 1: 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95, 95×2+1 = 190 + 1 = 191.",
    "backSec": "<strong>ഉത്തരം:</strong> 191 (95 × 2 + 1)<br>ക്രമം: സംഖ്യയെ 2 കൊണ്ട് ഗുണിച്ച് 1 കൂട്ടുക: 95 × 2 + 1 = 190 + 1 = 191."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Convert the recurring decimal 0.3333 into a simple vulgar fraction?",
    "titleSec": "0.3333... എന്ന ആവർത്തന ദശാംശത്തെ സാധാരണ ഭിന്നസംഖ്യയാക്കി മാറ്റിയാൽ എത്ര ലഭിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 1/3<br>0.3̄ = 3/9 = 1/3.",
    "backSec": "<strong>ഉത്തരം:</strong> 1/3<br>0.3̄ = 3/9 = 1/3 (ലഘൂകരിക്കുമ്പോൾ 1/3)."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What defines an improper fraction (such as 7/4)?",
    "titleSec": "താഴെ പറയുന്നവയിൽ വിഷമഭിന്നം (Improper fraction) ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 7/4 (Numerator > Denominator)<br>An improper fraction has a numerator greater than or equal to its denominator. In 7/4, 7 > 4.",
    "backSec": "<strong>ഉത്തരം:</strong> 7/4 (അംശം > ഛേദം)<br>അംശം ഛേദത്തേക്കാൾ വലുതോ തുല്യമോ ആയാൽ അത് വിഷമഭിന്നമാണ്. 7/4-ൽ 7 > 4."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Simplify: (2/3) + (1/4)?",
    "titleSec": "(2/3) + (1/4) ന്റെ തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 11/12 [(8 + 3)/12]<br>LCM of 3 and 4 is 12. (2×4 + 1×3) / 12 = (8 + 3) / 12 = 11/12.",
    "backSec": "<strong>ഉത്തരം:</strong> 11/12 [(8 + 3)/12]<br>3, 4 എന്നിവയുടെ ല.സാ.ഗു = 12. (2×4 + 1×3)/12 = (8 + 3)/12 = 11/12."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Evaluate: (3/5) ÷ (9/10)?",
    "titleSec": "(3/5) ÷ (9/10) ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 2/3 [(3/5) × (10/9)]<br>(3/5) ÷ (9/10) = (3/5) × (10/9) = 30 / 45 = 2/3.",
    "backSec": "<strong>ഉത്തരം:</strong> 2/3 [(3/5) × (10/9)]<br>(3/5) ÷ (9/10) = (3/5) × (10/9) = 30/45 = 2/3."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Convert 0.25 into its simplest fractional form?",
    "titleSec": "0.25 എന്ന ദശാംശ സംഖ്യയെ ഏറ്റവും ലഘുവായ ഭിന്നസംഖ്യാ രൂപത്തിലാക്കുക.",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 1/4<br>0.25 = 25/100 = 1/4.",
    "backSec": "<strong>ഉത്തരം:</strong> 1/4<br>0.25 = 25/100 = 1/4."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Which fraction is larger: 3/4 or 5/7?",
    "titleSec": "3/4, 5/7 എന്നിവയിൽ വലിയ ഭിന്നസംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 3/4 (3 × 7 = 21 > 4 × 5 = 20)<br>Cross-multiplying: 3 × 7 = 21, and 4 × 5 = 20. Since 21 > 20, 3/4 > 5/7.",
    "backSec": "<strong>ഉത്തരം:</strong> 3/4 (3 × 7 = 21 > 4 × 5 = 20)<br>ക്രോസ് ഗുണനം ചെയ്യുമ്പോൾ: 3 × 7 = 21, 4 × 5 = 20. 21 > 20 ആയതിനാൽ 3/4 ആണ് വലുത്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Express 11/4 as a mixed fraction?",
    "titleSec": "11/4 എന്ന ഭിന്നസംഖ്യയെ മിശ്രഭിന്നമാക്കുക.",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 2 3/4 (11 ÷ 4 = 2 R 3)<br>11 divided by 4 gives quotient 2 and remainder 3, so 2 3/4.",
    "backSec": "<strong>ഉത്തരം:</strong> 2 3/4 (11 ÷ 4 = 2 ശിഷ്ടം 3)<br>11-നെ 4 കൊണ്ട് ഹരിച്ചാൽ ഫലം 2, ശിഷ്ടം 3. അതിനാൽ 2 3/4."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Convert the mixed fraction 3 2/5 into an improper fraction?",
    "titleSec": "3 2/5 എന്ന മിശ്രഭിന്നത്തെ വിഷമഭിന്നമാക്കുക.",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 17/5 [(3 × 5 + 2)/5]<br>(3 × 5 + 2) / 5 = (15 + 2) / 5 = 17/5.",
    "backSec": "<strong>ഉത്തരം:</strong> 17/5 [(3 × 5 + 2)/5]<br>(3 × 5 + 2)/5 = (15 + 2)/5 = 17/5."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Convert 0.474747 into a simple fraction?",
    "titleSec": "0.474747... എന്ന ആവർത്തന ദശാംശത്തെ ഭിന്നസംഖ്യയാക്കുക.",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 47/99<br>For two repeating digits 0.āb̄ = ab/99 = 47/99.",
    "backSec": "<strong>ഉത്തരം:</strong> 47/99<br>രണ്ട് അക്കങ്ങൾ ആവർത്തിക്കുന്നതിനാൽ ഛേദം 99 വരുന്നു: 47/99."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Calculate: (1/2) + (1/3) + (1/6)?",
    "titleSec": "(1/2) + (1/3) + (1/6) ന്റെ ആകെത്തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 1 [(3 + 2 + 1)/6 = 6/6]<br>LCM of 2, 3, 6 is 6. (3 + 2 + 1) / 6 = 6/6 = 1.",
    "backSec": "<strong>ഉത്തരം:</strong> 1 [(3 + 2 + 1)/6 = 6/6]<br>2, 3, 6 എന്നിവയുടെ ല.സാ.ഗു 6. (3 + 2 + 1)/6 = 6/6 = 1."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the reciprocal of 7/11?",
    "titleSec": "7/11 എന്ന ഭിന്നസംഖ്യയുടെ വ്യുൽക്രമം (Reciprocal) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 11/7<br>The reciprocal of a/b is b/a. Reciprocal of 7/11 is 11/7.",
    "backSec": "<strong>ഉത്തരം:</strong> 11/7<br>a/b യുടെ വ്യുൽക്രമം b/a ആണ്. അതിനാൽ 7/11 ന്റെ വ്യുൽക്രമം 11/7."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is 0.16666 converted to a fraction?",
    "titleSec": "0.16666... എന്ന സംഖ്യയെ ഭിന്നസംഖ്യയാക്കിയാൽ എത്ര ലഭിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 1/6 [(16 - 1)/90 = 15/90]<br>0.16̄ = (16 - 1) / 90 = 15/90 = 1/6.",
    "backSec": "<strong>ഉത്തരം:</strong> 1/6 [(16 - 1)/90 = 15/90]<br>0.16̄ = (16 - 1)/90 = 15/90 = 1/6."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If 1/7 of a number is subtracted from the number itself, the result is 180. What is the number?",
    "titleSec": "ഒരു സംഖ്യയിൽ നിന്ന് അതിന്റെ 1/7 കുറച്ചപ്പോൾ 180 ലഭിച്ചു. എങ്കിൽ ആ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 210 [6/7 x = 180 => x = 180 × 7/6]<br>x - x/7 = 6x/7 = 180. 6x = 180 × 7 = 1260 => x = 210.",
    "backSec": "<strong>ഉത്തരം:</strong> 210 [6/7 x = 180 => x = 180 × 7/6]<br>x - x/7 = 6x/7 = 180 => x = 180 × (7/6) = 30 × 7 = 210."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the product of (5/8) and (16/25)?",
    "titleSec": "(5/8), (16/25) എന്നിവയുടെ ഗുണനഫലം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 2/5 [(5×16)/(8×25) = 80/200]<br>(5 × 16) / (8 × 25) = (1 × 2) / (1 × 5) = 2/5.",
    "backSec": "<strong>ഉത്തരം:</strong> 2/5 [(5×16)/(8×25) = 80/200]<br>(5/8) × (16/25) = (5×16)/(8×25) = 80/200 = 2/5."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Arrange in descending order: 1/2, 2/3, 3/4?",
    "titleSec": "1/2, 2/3, 3/4 എന്നിവയെ അവരോഹണ ക്രമത്തിൽ (വലുതിൽ നിന്ന് ചെറുതിലേക്ക്) ക്രമീകരിക്കുക.",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 3 · Simple & Decimal Fractions",
    "backEn": "<strong>Answer:</strong> 3/4 > 2/3 > 1/2 (0.75 > 0.67 > 0.5)<br>In decimals: 3/4 = 0.75, 2/3 ≈ 0.667, 1/2 = 0.5. Descending order is 3/4 > 2/3 > 1/2.",
    "backSec": "<strong>ഉത്തരം:</strong> 3/4 > 2/3 > 1/2 (0.75 > 0.67 > 0.5)<br>ദശാംശ രൂപത്തിൽ: 3/4 = 0.75, 2/3 = 0.67, 1/2 = 0.5. അതിനാൽ ക്രമം: 3/4 > 2/3 > 1/2."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the place value of 6 in 65,489,203?",
    "titleSec": "65,489,203 എന്ന സംഖ്യയിൽ 6-ന്റെ സ്ഥാനവില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 6 × 10⁷<br>6 is followed by 7 digits, so its place value is 60,000,000 = 6 × 10⁷.",
    "backSec": "<strong>ഉത്തരം:</strong> 6 × 10⁷<br>6-ന് ശേഷം 7 അക്കങ്ങൾ ഉള്ളതിനാൽ അതിന്റെ സ്ഥാനവില 60,000,000 = 6 × 10⁷ ആണ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the product of the first two prime numbers?",
    "titleSec": "ആദ്യത്തെ രണ്ട് അഭാജ്യ സംഖ്യകളുടെ ഗുണനഫലം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 6 (2 × 3)<br>The first two primes are 2 and 3. Their product is 2 × 3 = 6.",
    "backSec": "<strong>ഉത്തരം:</strong> 6 (2 × 3)<br>ആദ്യത്തെ രണ്ട് അഭാജ്യ സംഖ്യകൾ 2, 3 എന്നിവയാണ്. അവയുടെ ഗുണനഫലം = 2 × 3 = 6."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What criteria must a number (such as 135) meet to be divisible by both 3 and 5?",
    "titleSec": "3 കൊണ്ടും 5 കൊണ്ടും ഒരുപോലെ ഹരിക്കാൻ കഴിയുന്ന സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 135 (Ends in 5, sum 1+3+5=9)<br>Divisible by 5 (ends in 5). Sum of digits 1+3+5 = 9, which is divisible by 3. Hence divisible by 15.",
    "backSec": "<strong>ഉത്തരം:</strong> 135 (അവസാനം 5, തുക 1+3+5=9)<br>അവസാന അക്കം 5 ആയതിനാൽ 5 കൊണ്ട് ഹരിക്കാം. അക്കങ്ങളുടെ തുക 9 ആയതിനാൽ 3 കൊണ്ടും ഹരിക്കാം."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the remainder when 41 × 19 + 4 is divided by 19?",
    "titleSec": "41 × 19 + 4 എന്ന സംഖ്യയെ 19 കൊണ്ട് ഹരിച്ചാൽ ലഭിക്കുന്ന ശിഷ്ടം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 4<br>41 × 19 is an exact multiple of 19. The remaining term 4 is < 19, so the remainder is 4.",
    "backSec": "<strong>ഉത്തരം:</strong> 4<br>41 × 19 എന്നത് 19-ന്റെ ഗുണിതമായതിനാൽ ശിഷ്ടം 0. ബാക്കിയുള്ള 4 ആണ് ശിഷ്ടമായി വരുന്നത്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "How many factors does the prime number 17 have?",
    "titleSec": "17 എന്ന അഭാജ്യ സംഖ്യയ്ക്ക് എത്ര ഘടകങ്ങൾ (Factors) ഉണ്ട്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> Exactly 2 (1 and 17)<br>By definition, a prime number has exactly two positive divisors: 1 and itself.",
    "backSec": "<strong>ഉത്തരം:</strong> കൃത്യം 2 എണ്ണം (1-ഉം 17-ഉം)<br>നിർവചനപ്രകാരം ഏതൊരു അഭാജ്യ സംഖ്യയ്ക്കും 1-ഉം ആ സംഖ്യയും ഉൾപ്പെടെ കൃത്യം രണ്ട് ഘടകങ്ങൾ മാത്രമേ ഉണ്ടാകൂ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the sum of all digits in the number 98,765?",
    "titleSec": "98,765 എന്ന സംഖ്യയിലെ എല്ലാ അക്കങ്ങളുടെയും തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 35 (9 + 8 + 7 + 6 + 5)<br>9 + 8 + 7 + 6 + 5 = 35.",
    "backSec": "<strong>ഉത്തരം:</strong> 35 (9 + 8 + 7 + 6 + 5)<br>9 + 8 + 7 + 6 + 5 = 35."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If a number is divisible by 12, it must be divisible by?",
    "titleSec": "ഒരു സംഖ്യയെ 12 കൊണ്ട് പൂർണ്ണമായി ഹരിക്കാൻ കഴിയുമെങ്കിൽ അത് താഴെ പറയുന്ന ഏതെല്ലാം സംഖ്യകൾ കൊണ്ട് ഹരിക്കപ്പെടണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> Both 3 and 4<br>3 and 4 are coprime factors of 12 (3 × 4 = 12, gcd=1).",
    "backSec": "<strong>ഉത്തരം:</strong> 3-ഉം 4-ഉം<br>3, 4 എന്നിവ 12-ന്റെ പരസ്പര അഭാജ്യ ഘടകങ്ങളാണ് (3 × 4 = 12). അതിനാൽ 3 കൊണ്ടും 4 കൊണ്ടും ഹരിക്കപ്പെടും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The value of 15 × 0 × 25 is?",
    "titleSec": "15 × 0 × 25 ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 0<br>Any product containing 0 as a factor is always equal to 0.",
    "backSec": "<strong>ഉത്തരം:</strong> 0<br>പൂജ്യം കൊണ്ട് ഏതൊരു സംഖ്യയെ ഗുണിച്ചാലും ഫലം 0 ആയിരിക്കും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the difference between 5/6 and 1/3?",
    "titleSec": "5/6-ൽ നിന്ന് 1/3 കുറച്ചാൽ എത്ര ലഭിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 1/2 [(5 - 2)/6 = 3/6]<br>5/6 - 2/6 = 3/6 = 1/2.",
    "backSec": "<strong>ഉത്തരം:</strong> 1/2 [(5 - 2)/6 = 3/6]<br>5/6 - 2/6 = 3/6 = 1/2."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is a classic example of an irrational number that cannot be written as a simple fraction?",
    "titleSec": "താഴെ പറയുന്നവയിൽ അഭിന്നക സംഖ്യ (Irrational number) ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> √2 (Non-terminating, non-repeating)<br>√2 cannot be expressed as p/q where p and q are integers, so it is irrational.",
    "backSec": "<strong>ഉത്തരം:</strong> √2 (ആവർത്തിക്കാത്ത അനന്ത ദശാംശം)<br>√2-നെ p/q രൂപത്തിൽ എഴുതാൻ കഴിയില്ല; അതിനാൽ ഇതൊരു അഭിന്നക സംഖ്യയാണ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the value of (3/4) of 200?",
    "titleSec": "200-ന്റെ 3/4 ഭാഗം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 150 [(200 / 4) × 3]<br>(3/4) × 200 = 3 × 50 = 150.",
    "backSec": "<strong>ഉത്തരം:</strong> 150 [(200 / 4) × 3]<br>(3/4) × 200 = 3 × 50 = 150."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The smallest 3-digit prime number is?",
    "titleSec": "മൂന്നക്കമുള്ള ഏറ്റവും ചെറിയ അഭാജ്യ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 101<br>100 is composite (divisible by 2). 101 has no divisors other than 1 and 101, so it is the smallest 3-digit prime.",
    "backSec": "<strong>ഉത്തരം:</strong> 101<br>100 ഭാജ്യസംഖ്യയാണ്. 101-ന് 1, 101 അല്ലാതെ മറ്റ് ഘടകങ്ങളില്ലാത്തതിനാൽ ഇതാണ് മൂന്നക്കമുള്ള ഏറ്റവും ചെറിയ അഭാജ്യ സംഖ്യ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the sum of the place values of 5 in 5,852?",
    "titleSec": "5,852 എന്ന സംഖ്യയിലെ 5-കളുടെ സ്ഥാനവിലകളുടെ തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 5,050 (5000 + 50)<br>First 5 is in thousands place (5000); second 5 is in tens place (50). Sum = 5000 + 50 = 5050.",
    "backSec": "<strong>ഉത്തരം:</strong> 5,050 (5000 + 50)<br>ആദ്യത്തെ 5-ന്റെ സ്ഥാനവില 5,000, രണ്ടാമത്തെ 5-ന്റെ സ്ഥാനവില 50. തുക = 5,000 + 50 = 5,050."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "When a number is divided by 8, remainder is 3. What is the remainder when twice that number is divided by 8?",
    "titleSec": "ഒരു സംഖ്യയെ 8 കൊണ്ട് ഹരിച്ചപ്പോൾ ശിഷ്ടം 3 കിട്ടി. ആ സംഖ്യയുടെ ഇരട്ടിയെ 8 കൊണ്ട് ഹരിച്ചാൽ ശിഷ്ടം എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 6 (2 × 3 = 6 < 8)<br>If N = 8k + 3, then 2N = 16k + 6 = 8(2k) + 6. The remainder is 6.",
    "backSec": "<strong>ഉത്തരം:</strong> 6 (2 × 3 = 6 < 8)<br>സംഖ്യ = 8k + 3 ആയാൽ ഇരട്ടി = 16k + 6. ഇതിനെ 8 കൊണ്ട് ഹരിച്ചാൽ ശിഷ്ടം 6 ആയിരിക്കും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the face value of 8 in the number 458,921?",
    "titleSec": "458,921 എന്ന സംഖ്യയിലെ 8-ന്റെ മുഖവില (Face value) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 1 · Numbers Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 8<br>The face value of any digit is the digit itself, regardless of its position, so it is 8.",
    "backSec": "<strong>ഉത്തരം:</strong> 8<br>ഒരു അക്കത്തിന്റെ മുഖവില എപ്പോഴും ആ അക്കം തന്നെയാണ്. അതിനാൽ 8-ന്റെ മുഖവില 8 ആണ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the LCM of 8, 15, 24, and 72?",
    "titleSec": "8, 15, 24, 72 എന്നീ സംഖ്യകളുടെ ല.സാ.ഗു (LCM) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 360<br>8 = 2³, 15 = 3 × 5, 24 = 2³ × 3, 72 = 2³ × 3². LCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360.",
    "backSec": "<strong>ഉത്തരം:</strong> 360<br>8 = 2³, 15 = 3 × 5, 24 = 2³ × 3, 72 = 2³ × 3². ല.സാ.ഗു = 2³ × 3² × 5 = 8 × 9 × 5 = 360."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If three numbers are 2a, 5a, and 7a, what is their LCM?",
    "titleSec": "2a, 5a, 7a എന്നീ മൂന്ന് സംഖ്യകളുടെ ല.സാ.ഗു എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 70a [2 × 5 × 7 × a]<br>Numbers share factor a. The coefficients 2, 5, 7 are pairwise prime. LCM = (2 × 5 × 7) × a = 70a.",
    "backSec": "<strong>ഉത്തരം:</strong> 70a [2 × 5 × 7 × a]<br>a പൊതുഘടകമാണ്. 2, 5, 7 എന്നിവ പരസ്പര അഭാജ്യ സംഖ്യകളാണ്. ല.സാ.ഗു = (2 × 5 × 7) × a = 70a."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The HCF and LCM of two numbers are 6 and 210 respectively. If one number is 30, what is the other number?",
    "titleSec": "രണ്ട് സംഖ്യകളുടെ ഉ.സാ.ഘ 6-ഉം ല.സാ.ഗു 210-ഉം ആണ്. ഒരു സംഖ്യ 30 ആയാൽ രണ്ടാമത്തെ സംഖ്യ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 42 [(6 × 210) / 30]<br>Other number = (HCF × LCM) / First number = (6 × 210) / 30 = 1260 / 30 = 42.",
    "backSec": "<strong>ഉത്തരം:</strong> 42 [(6 × 210) / 30]<br>രണ്ടാം സംഖ്യ = (ഉ.സാ.ഘ × ല.സാ.ഗു) / ഒന്നാം സംഖ്യ = (6 × 210) / 30 = 1260 / 30 = 42."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The product of two coprime numbers is 117. What is their LCM?",
    "titleSec": "പരസ്പര അഭാജ്യ സംഖ്യകളായ രണ്ട് സംഖ്യകളുടെ ഗുണനഫലം 117 ആണ്. എങ്കിൽ അവയുടെ ല.സാ.ഗു എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 117 (HCF of coprimes = 1)<br>Since coprime numbers have HCF = 1, their LCM = Product / HCF = 117 / 1 = 117.",
    "backSec": "<strong>ഉത്തരം:</strong> 117 (കോപ്രൈം സംഖ്യകളുടെ ഉ.സാ.ഘ = 1)<br>പരസ്പര അഭാജ്യ സംഖ്യകളുടെ ഉ.സാ.ഘ 1 ആയതിനാൽ, അവയുടെ ല.സാ.ഗു = ഗുണനഫലം / 1 = 117."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the HCF of 2/3 and 4/5?",
    "titleSec": "2/3, 4/5 എന്നീ ഭിന്നസംഖ്യകളുടെ ഉ.സാ.ഘ (HCF) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 2/15 [HCF(2,4) / LCM(3,5)]<br>HCF of fractions = HCF(numerators) / LCM(denominators) = HCF(2,4) / LCM(3,5) = 2 / 15.",
    "backSec": "<strong>ഉത്തരം:</strong> 2/15 [HCF(2,4) / LCM(3,5)]<br>ഭിന്നസംഖ്യകളുടെ ഉ.സാ.ഘ = അംശങ്ങളുടെ ഉ.സാ.ഘ / ഛേദങ്ങളുടെ ല.സാ.ഗു = HCF(2,4) / LCM(3,5) = 2/15."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the LCM of 2/3, 4/9, and 5/6?",
    "titleSec": "2/3, 4/9, 5/6 എന്നീ ഭിന്നസംഖ്യകളുടെ ല.സാ.ഗു (LCM) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 20/3 [LCM(2,4,5) / HCF(3,9,6)]<br>LCM = LCM(2, 4, 5) / HCF(3, 9, 6) = 20 / 3.",
    "backSec": "<strong>ഉത്തരം:</strong> 20/3 [LCM(2,4,5) / HCF(3,9,6)]<br>ല.സാ.ഗു = LCM(2, 4, 5) / HCF(3, 9, 6) = 20 / 3."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Three bells toll together at intervals of 9, 12, and 15 minutes. After how many hours will they toll together again?",
    "titleSec": "മൂന്ന് മണികൾ യഥാക്രമം 9, 12, 15 മിനിറ്റ് ഇടവേളകളിൽ അടിക്കുന്നു. എത്ര മണിക്കൂറിന് ശേഷം അവ വീണ്ടും ഒന്നിച്ച് അടിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 3 hours [LCM = 180 min = 3 hrs]<br>LCM(9, 12, 15) = 180 minutes. 180 / 60 = 3 hours.",
    "backSec": "<strong>ഉത്തരം:</strong> 3 മണിക്കൂർ [ല.സാ.ഗു = 180 മിനിറ്റ് = 3 മണിക്കൂർ]<br>9, 12, 15 എന്നിവയുടെ ല.സാ.ഗു = 180 മിനിറ്റ്. 180 / 60 = 3 മണിക്കൂർ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the HCF of two consecutive even numbers?",
    "titleSec": "തുടർച്ചയായ രണ്ട് ഇരട്ട സംഖ്യകളുടെ ഉ.സാ.ഘ (HCF) എപ്പോഴും എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 2<br>Any two consecutive even numbers are 2k and 2k + 2 = 2(k + 1). Since k and k+1 are consecutive coprimes, HCF is 2.",
    "backSec": "<strong>ഉത്തരം:</strong> 2<br>തുടർച്ചയായ ഇരട്ട സംഖ്യകൾ 2k, 2(k+1) രൂപത്തിലാണ്. k, k+1 എന്നിവയുടെ ഉ.സാ.ഘ 1 ആയതിനാൽ, ആകെ ഉ.സാ.ഘ 2 ആയിരിക്കും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the HCF of two consecutive numbers (e.g. 14 and 15)?",
    "titleSec": "തുടർച്ചയായ രണ്ട് എണ്ണൽ സംഖ്യകളുടെ (ഉദാ: 14, 15) ഉ.സാ.ഘ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 1<br>Consecutive integers are always coprime; their highest common factor is always 1.",
    "backSec": "<strong>ഉത്തരം:</strong> 1<br>തുടർച്ചയായ എണ്ണൽ സംഖ്യകൾ എപ്പോഴും പരസ്പര അഭാജ്യ സംഖ്യകളാണ്; അവയുടെ ഉ.സാ.ഘ എപ്പോഴും 1 ആയിരിക്കും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the greatest number which divides 29, 60, and 103 leaving remainders 5, 12, and 7 respectively?",
    "titleSec": "29, 60, 103 എന്നീ സംഖ്യകളെ ഹരിക്കുമ്പോൾ യഥാക്രമം 5, 12, 7 എന്നിങ്ങനെ ശിഷ്ടം നൽകുന്ന ഏറ്റവും വലിയ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 24 [HCF(24, 48, 96)]<br>Subtract remainders: 29-5=24; 60-12=48; 103-7=96. HCF(24, 48, 96) = 24.",
    "backSec": "<strong>ഉത്തരം:</strong> 24 [HCF(24, 48, 96)]<br>ശിഷ്ടങ്ങൾ കുറയ്ക്കുക: 29-5=24; 60-12=48; 103-7=96. 24, 48, 96 എന്നിവയുടെ ഉ.സാ.ഘ = 24."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the LCM of 24, 36, and 40?",
    "titleSec": "24, 36, 40 എന്നീ സംഖ്യകളുടെ ല.സാ.ഗു എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 360<br>24 = 2³ × 3, 36 = 2² × 3², 40 = 2³ × 5. LCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360.",
    "backSec": "<strong>ഉത്തരം:</strong> 360<br>24 = 2³ × 3, 36 = 2² × 3², 40 = 2³ × 5. ല.സാ.ഗു = 2³ × 3² × 5 = 360."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the HCF of 108, 288, and 360?",
    "titleSec": "108, 288, 360 എന്നീ സംഖ്യകളുടെ ഉ.സാ.ഘ (HCF) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 36<br>108 = 2² × 3³, 288 = 2⁵ × 3², 360 = 2³ × 3² × 5. Common prime factors with lowest powers: 2² × 3² = 4 × 9 = 36.",
    "backSec": "<strong>ഉത്തരം:</strong> 36<br>108 = 2² × 3³, 288 = 2⁵ × 3², 360 = 2³ × 3² × 5. ഉ.സാ.ഘ = 2² × 3² = 36."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If a number is exactly divisible by 11 and 13, it must be divisible by?",
    "titleSec": "ഒരു സംഖ്യ 11 കൊണ്ടും 13 കൊണ്ടും പൂർണ്ണമായി ഹരിക്കപ്പെടുന്നുവെങ്കിൽ അത് നിർബന്ധമായും ഹരിക്കപ്പെടുന്നത് ഏത് സംഖ്യ കൊണ്ടാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 11 × 13 (= 143)<br>Since 11 and 13 are prime numbers (coprime), their LCM is 11 × 13 = 143.",
    "backSec": "<strong>ഉത്തരം:</strong> 11 × 13 (= 143)<br>11, 13 എന്നിവ അഭാജ്യ സംഖ്യകളായതിനാൽ അവയുടെ ല.സാ.ഗു = 11 × 13 = 143 ആയിരിക്കും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the HCF of any prime number p and composite number c if c is not a multiple of p?",
    "titleSec": "ഒരു അഭാജ്യ സംഖ്യ p, മറ്റൊരു സംഖ്യ c യുടെ ഘടകമല്ലെങ്കിൽ അവയുടെ ഉ.സാ.ഘ എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 1<br>A prime p has only factors 1 and p. If p does not divide c, the only shared factor is 1.",
    "backSec": "<strong>ഉത്തരം:</strong> 1<br>p എന്ന അഭാജ്യ സംഖ്യയ്ക്ക് 1, p എന്നീ ഘടകങ്ങളേയുള്ളൂ. c-യെ p ഹരിക്കുന്നില്ലെങ്കിൽ അവയുടെ ഒരേയൊരു പൊതുഘടകം 1 മാത്രമായിരിക്കും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The LCM of two numbers is 48. The numbers are in the ratio 2 : 3. What is the sum of the numbers?",
    "titleSec": "രണ്ട് സംഖ്യകൾ 2 : 3 എന്ന അംശബന്ധത്തിലാണ്, അവയുടെ ല.സാ.ഗു 48 ആണ്. സംഖ്യകളുടെ തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 4 · HCF and LCM",
    "backEn": "<strong>Answer:</strong> 40 (Numbers are 16 and 24; 16 + 24 = 40)<br>Let numbers be 2x and 3x. LCM(2x, 3x) = 6x = 48 => x = 8. Numbers are 16 and 24. Sum = 16 + 24 = 40.",
    "backSec": "<strong>ഉത്തരം:</strong> 40 (സംഖ്യകൾ 16-ഉം 24-ഉം; തുക = 40)<br>സംഖ്യകൾ 2x, 3x ആയാൽ ല.സാ.ഗു = 6x = 48 => x = 8. സംഖ്യകൾ 16, 24. തുക = 16 + 24 = 40."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the square root of 576?",
    "titleSec": "576-ന്റെ വർഗ്ഗമൂലം (Square root) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 24 (24 × 24 = 576)<br>24² = 576, hence √576 = 24.",
    "backSec": "<strong>ഉത്തരം:</strong> 24 (24 × 24 = 576)<br>24 × 24 = 576 ആയതിനാൽ √576 = 24."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Which digits can NEVER appear as the unit digit of an integer perfect square?",
    "titleSec": "താഴെ പറയുന്നവയിൽ പൂർണ്ണ വർഗ്ഗ സംഖ്യയുടെ അവസാന അക്കമായി ഒരിക്കലും വരാത്തത് ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 7 (and 2, 3, 8)<br>Perfect squares can only end in 0, 1, 4, 5, 6, 9. They never end in 2, 3, 7, or 8.",
    "backSec": "<strong>ഉത്തരം:</strong> 7 (കൂടാതെ 2, 3, 8 എന്നിവയും)<br>പൂർണ്ണ വർഗ്ഗ സംഖ്യകൾ 0, 1, 4, 5, 6, 9 എന്നിവയിൽ മാത്രമേ അവസാനിക്കൂ; 2, 3, 7, 8 എന്നിവ ഒരിക്കലും അവസാന അക്കമാകില്ല."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the cube root of 1,728?",
    "titleSec": "1,728-ന്റെ ഘനമൂലം (Cube root) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 12 (12³ = 1728)<br>12 × 12 × 12 = 144 × 12 = 1,728, so ∛1728 = 12.",
    "backSec": "<strong>ഉത്തരം:</strong> 12 (12³ = 1728)<br>12 × 12 × 12 = 1,728 ആയതിനാൽ ∛1728 = 12."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Evaluate: √(0.0009)?",
    "titleSec": "√(0.0009) ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 0.03<br>√(9/10000) = √9 / √10000 = 3 / 100 = 0.03.",
    "backSec": "<strong>ഉത്തരം:</strong> 0.03<br>√(9/10000) = 3/100 = 0.03."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the smallest number by which 32 must be multiplied to make it a perfect square?",
    "titleSec": "32-നെ ഏത് ഏറ്റവും ചെറിയ സംഖ്യ കൊണ്ട് ഗുണിച്ചാലാണ് പൂർണ്ണ വർഗ്ഗമാകുന്നത്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 2 [32 × 2 = 64 = 8²]<br>32 = 2⁵ = (2² × 2²) × 2. Multiplying by 2 completes the pair: 32 × 2 = 64 = 8².",
    "backSec": "<strong>ഉത്തരം:</strong> 2 [32 × 2 = 64 = 8²]<br>32 = 2⁵. ഇതിനെ 2 കൊണ്ട് ഗുണിച്ചാൽ 64 (8²) ലഭിക്കുന്നു."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of √(64) + ∛(64)?",
    "titleSec": "√(64) + ∛(64) ന്റെ തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 12 (8 + 4)<br>√64 = 8, and ∛64 = 4. Sum = 8 + 4 = 12.",
    "backSec": "<strong>ഉത്തരം:</strong> 12 (8 + 4)<br>√64 = 8, ∛64 = 4. തുക = 8 + 4 = 12."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the square root of 1.44?",
    "titleSec": "1.44-ന്റെ വർഗ്ഗമൂലം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 1.2<br>√(144/100) = √144 / √100 = 12 / 10 = 1.2.",
    "backSec": "<strong>ഉത്തരം:</strong> 1.2<br>√(144/100) = 12/10 = 1.2."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the cube root of -216?",
    "titleSec": "-216-ന്റെ ഘനമൂലം (Cube root) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> -6 [(-6)³ = -216]<br>Cube root of a negative number is negative: (-6) × (-6) × (-6) = -216.",
    "backSec": "<strong>ഉത്തരം:</strong> -6 [(-6)³ = -216]<br>ഋണസംഖ്യയുടെ ഘനമൂലം ഋണസംഖ്യ തന്നെയായിരിക്കും: (-6)³ = -216."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of √169?",
    "titleSec": "√169 ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 13<br>13 × 13 = 169, so √169 = 13.",
    "backSec": "<strong>ഉത്തരം:</strong> 13<br>13 × 13 = 169 ആയതിനാൽ √169 = 13."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The area of a square field is 625 sq m. What is the length of each side?",
    "titleSec": "ഒരു സമചതുര സ്ഥലത്തിന്റെ വിസ്തീർണ്ണം 625 ച.മീ ആയാൽ ഒരു വശത്തിന്റെ നീളം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 25 m [√625 = 25]<br>Side = √(Area) = √625 = 25 metres.",
    "backSec": "<strong>ഉത്തരം:</strong> 25 മീറ്റർ [√625 = 25]<br>വശം = √വിസ്തീർണ്ണം = √625 = 25 മീറ്റർ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of ∛(0.008)?",
    "titleSec": "∛(0.008) ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 0.2<br>∛(8/1000) = ∛8 / ∛1000 = 2 / 10 = 0.2.",
    "backSec": "<strong>ഉത്തരം:</strong> 0.2<br>∛(8/1000) = 2/10 = 0.2."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of √(25 × 36)?",
    "titleSec": "√(25 × 36) ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 30 (5 × 6)<br>√(25 × 36) = √25 × √36 = 5 × 6 = 30.",
    "backSec": "<strong>ഉത്തരം:</strong> 30 (5 × 6)<br>√(25 × 36) = √25 × √36 = 5 × 6 = 30."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "How many digits are in the square root of a 4-digit perfect square?",
    "titleSec": "നാലക്കമുള്ള ഒരു പൂർണ്ണ വർഗ്ഗ സംഖ്യയുടെ വർഗ്ഗമൂലത്തിൽ എത്ര അക്കങ്ങൾ ഉണ്ടായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 2 digits [n/2 = 4/2 = 2]<br>For an n-digit number with even n, number of digits in square root is n/2 = 4/2 = 2.",
    "backSec": "<strong>ഉത്തരം:</strong> 2 അക്കങ്ങൾ [4/2 = 2]<br>ഇരട്ട അക്കങ്ങളുള്ള സംഖ്യയുടെ വർഗ്ഗമൂലത്തിലെ അക്കങ്ങളുടെ എണ്ണം n/2 ആയിരിക്കും (4/2 = 2)."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of (√2 + √2)²?",
    "titleSec": "(√2 + √2)² ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 8 [(2√2)² = 4 × 2]<br>(√2 + √2) = 2√2. Squaring gives (2√2)² = 4 × 2 = 8.",
    "backSec": "<strong>ഉത്തരം:</strong> 8 [(2√2)² = 4 × 2]<br>(√2 + √2) = 2√2. ഇതിന്റെ വർഗ്ഗം = (2√2)² = 4 × 2 = 8."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of ∛(343)?",
    "titleSec": "∛(343) ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 5 · Square Root & Cube Root",
    "backEn": "<strong>Answer:</strong> 7 (7 × 7 × 7 = 343)<br>7³ = 7 × 49 = 343, so ∛343 = 7.",
    "backSec": "<strong>ഉത്തരം:</strong> 7 (7 × 7 × 7 = 343)<br>7 × 7 × 7 = 343 ആയതിനാൽ ∛343 = 7."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Evaluate: 20 + 4 × (10 - 5)?",
    "titleSec": "20 + 4 × (10 - 5) ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 40 [20 + 4 × 5 = 20 + 20]<br>Brackets first: 10 - 5 = 5. Then multiplication: 4 × 5 = 20. Then addition: 20 + 20 = 40.",
    "backSec": "<strong>ഉത്തരം:</strong> 40 [20 + 4 × 5 = 20 + 20]<br>ആദ്യം ബ്രാക്കറ്റ്: 10 - 5 = 5. പിന്നീട് ഗുണനം: 4 × 5 = 20. ഒടുവിൽ സങ്കലനം: 20 + 20 = 40."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Evaluate: 16 ÷ 4 of 2?",
    "titleSec": "16 ÷ 4 of 2 ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 2 ['Of' precedes division: 16 ÷ 8 = 2]<br>'Of' has higher priority than division: 4 of 2 = 8. Then 16 ÷ 8 = 2.",
    "backSec": "<strong>ഉത്തരം:</strong> 2 ['Of' ഹരണത്തിന് മുൻപ്: 16 ÷ 8 = 2]<br>'Of' ഹരണത്തിന് മുൻപ് ചെയ്യണം: 4 of 2 = 8. പിന്നീട് 16 ÷ 8 = 2."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Simplify using algebraic formula: (105)²?",
    "titleSec": "(105)² ന്റെ മൂല്യം ബീജഗണിത സൂത്രവാക്യം ഉപയോഗിച്ച് കണ്ടെത്തുക.",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 11,025 [(100 + 5)² = 10000 + 1000 + 25]<br>(100 + 5)² = 100² + 2(100)(5) + 5² = 10,000 + 1,000 + 25 = 11,025.",
    "backSec": "<strong>ഉത്തരം:</strong> 11,025 [(100 + 5)² = 10000 + 1000 + 25]<br>(100 + 5)² = 10000 + 1000 + 25 = 11,025."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Evaluate: 65² - 35²?",
    "titleSec": "65² - 35² ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 3,000 [(65 - 35)(65 + 35) = 30 × 100]<br>Using a² - b² = (a - b)(a + b) = (65 - 35)(65 + 35) = 30 × 100 = 3,000.",
    "backSec": "<strong>ഉത്തരം:</strong> 3,000 [(65 - 35)(65 + 35) = 30 × 100]<br>a² - b² = (a - b)(a + b) = (65 - 35)(65 + 35) = 30 × 100 = 3,000."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Simplify: 50 - [20 + {15 - (8 - 3)}]?",
    "titleSec": "50 - [20 + {15 - (8 - 3)}] ലഘൂകരിച്ചാൽ എത്ര ലഭിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 20 [50 - [20 + 10] = 50 - 30]<br>Inner parenthesis: 8 - 3 = 5. Curly bracket: 15 - 5 = 10. Square bracket: 20 + 10 = 30. Result: 50 - 30 = 20.",
    "backSec": "<strong>ഉത്തരം:</strong> 20 [50 - [20 + 10] = 50 - 30]<br>ആദ്യം (8-3) = 5; ശേഷം {15-5} = 10; ശേഷം [20+10] = 30; ഒടുവിൽ 50 - 30 = 20."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of: 8 ÷ 2 × (2 + 2)?",
    "titleSec": "8 ÷ 2 × (2 + 2) ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 16 [8 ÷ 2 = 4; 4 × 4 = 16]<br>Brackets first: (2 + 2) = 4. Expression becomes 8 ÷ 2 × 4. Division and multiplication have equal priority, evaluated left to right: 8 ÷ 2 = 4, then 4 × 4 = 16.",
    "backSec": "<strong>ഉത്തരം:</strong> 16 [8 ÷ 2 = 4; 4 × 4 = 16]<br>ആദ്യം ബ്രാക്കറ്റ്: 2 + 2 = 4. പിന്നീട് ഇടത്തുനിന്ന് വലത്തോട്ട്: 8 ÷ 2 = 4; 4 × 4 = 16."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Evaluate: 100 - 3 × 10 + 5?",
    "titleSec": "100 - 3 × 10 + 5 ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 75 [100 - 30 + 5 = 70 + 5]<br>Multiplication first: 3 × 10 = 30. Expression is 100 - 30 + 5 = 70 + 5 = 75.",
    "backSec": "<strong>ഉത്തരം:</strong> 75 [100 - 30 + 5 = 70 + 5]<br>ആദ്യം ഗുണനം: 3 × 10 = 30. ശേഷം 100 - 30 + 5 = 75."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Simplify: (0.7 × 0.7 - 0.3 × 0.3) / (0.7 - 0.3)?",
    "titleSec": "(0.7 × 0.7 - 0.3 × 0.3) / (0.7 - 0.3) ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 1.0 [(a² - b²)/(a - b) = a + b = 0.7 + 0.3]<br>(a² - b²) / (a - b) = a + b. Here a = 0.7, b = 0.3. Sum = 0.7 + 0.3 = 1.0.",
    "backSec": "<strong>ഉത്തരം:</strong> 1.0 [a + b = 0.7 + 0.3 = 1.0]<br>(a² - b²)/(a - b) = a + b. അതിനാൽ 0.7 + 0.3 = 1.0."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of: 1/2 + 1/2 of 1/2?",
    "titleSec": "1/2 + 1/2 of 1/2 ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 3/4 [1/2 + 1/4 = 3/4]<br>'Of' first: 1/2 of 1/2 = 1/4. Then 1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
    "backSec": "<strong>ഉത്തരം:</strong> 3/4 [1/2 + 1/4 = 3/4]<br>ആദ്യം 'Of': 1/2 × 1/2 = 1/4. പിന്നീട് 1/2 + 1/4 = 3/4."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Simplify: 12 + 12 × 12 - 12 ÷ 12?",
    "titleSec": "12 + 12 × 12 - 12 ÷ 12 ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 155 [12 + 144 - 1 = 156 - 1]<br>Division: 12 ÷ 12 = 1. Multiplication: 12 × 12 = 144. Expression: 12 + 144 - 1 = 156 - 1 = 155.",
    "backSec": "<strong>ഉത്തരം:</strong> 155 [12 + 144 - 1 = 156 - 1]<br>ഹരണം: 12 ÷ 12 = 1. ഗുണനം: 12 × 12 = 144. ആകെ: 12 + 144 - 1 = 155."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of 99 × 99 using identity (100 - 1)²?",
    "titleSec": "(100 - 1)² സൂത്രവാക്യം ഉപയോഗിച്ച് 99 × 99 ന്റെ മൂല്യം കണ്ടെത്തുക.",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 9,801 [10000 - 200 + 1]<br>(100 - 1)² = 100² - 2(100)(1) + 1² = 10000 - 200 + 1 = 9801.",
    "backSec": "<strong>ഉത്തരം:</strong> 9,801 [10000 - 200 + 1]<br>(100 - 1)² = 10000 - 200 + 1 = 9801."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Evaluate: 5 × 5 + 5 ÷ 5 - 5?",
    "titleSec": "5 × 5 + 5 ÷ 5 - 5 ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 21 [25 + 1 - 5 = 26 - 5]<br>5 ÷ 5 = 1; 5 × 5 = 25. 25 + 1 - 5 = 26 - 5 = 21.",
    "backSec": "<strong>ഉത്തരം:</strong> 21 [25 + 1 - 5 = 26 - 5]<br>5 ÷ 5 = 1, 5 × 5 = 25. 25 + 1 - 5 = 21."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Simplify: 18 - [6 - {4 - (8 - 6 + 3)}]?",
    "titleSec": "18 - [6 - {4 - (8 - 6 + 3)}] ലഘൂകരിച്ചാൽ എത്ര ലഭിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 11 [Inner: 5; {4-5}=-1; [6-(-1)]=7; 18-7=11]<br>Parenthesis: 8 - 6 + 3 = 5. Curly: 4 - 5 = -1. Square: 6 - (-1) = 7. Outer: 18 - 7 = 11.",
    "backSec": "<strong>ഉത്തരം:</strong> 11 [ഉള്ളിൽ: 5; {4-5}=-1; [6+1]=7; 18-7=11]<br>8 - 6 + 3 = 5. പിന്നീട് 4 - 5 = -1. ശേഷം 6 - (-1) = 7. ഒടുവിൽ 18 - 7 = 11."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If a + b = 10 and ab = 21, what is the value of a² + b²?",
    "titleSec": "a + b = 10, ab = 21 ആയാൽ a² + b² ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 58 [(a+b)² - 2ab = 100 - 42]<br>a² + b² = (a + b)² - 2ab = 10² - 2(21) = 100 - 42 = 58.",
    "backSec": "<strong>ഉത്തരം:</strong> 58 [(a+b)² - 2ab = 100 - 42]<br>a² + b² = (a + b)² - 2ab = 100 - 42 = 58."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of (999)² - (998)²?",
    "titleSec": "(999)² - (998)² ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 6 · Simplifications & VBODMAS",
    "backEn": "<strong>Answer:</strong> 1,997 [(999 - 998)(999 + 998) = 1 × 1997]<br>a² - b² = (a - b)(a + b) = (999 - 998)(999 + 998) = 1 × 1,997 = 1,997.",
    "backSec": "<strong>ഉത്തരം:</strong> 1,997 [(999 - 998)(999 + 998) = 1 × 1997]<br>a² - b² = (a - b)(a + b) = (1)(1997) = 1,997."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the LCM of 0.25, 0.1, and 0.125?",
    "titleSec": "0.25, 0.1, 0.125 എന്നീ ദശാംശ സംഖ്യകളുടെ ല.സാ.ഗു (LCM) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 0.5 [250/1000, 100/1000, 125/1000 => LCM(250,100,125)/1000 = 500/1000]<br>Convert to thousandths: 250, 100, 125. LCM(250, 100, 125) = 500. Dividing by 1000 gives 0.5.",
    "backSec": "<strong>ഉത്തരം:</strong> 0.5 [LCM(250, 100, 125) / 1000 = 500/1000]<br>ആയിരത്തിന്റെ ഭാഗങ്ങളാക്കുക: 250, 100, 125. ല.സാ.ഗു = 500. 1000 കൊണ്ട് ഹരിച്ചാൽ 0.5."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the LCM of 2.5, 1.2, 20, and 7.5?",
    "titleSec": "2.5, 1.2, 20, 7.5 എന്നീ സംഖ്യകളുടെ ല.സാ.ഗു എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 60<br>Multiply by 10: 25, 12, 200, 75. LCM(25, 12, 200, 75) = 600. Divide by 10 gives 60.",
    "backSec": "<strong>ഉത്തരം:</strong> 60<br>10 കൊണ്ട് ഗുണിക്കുക: 25, 12, 200, 75. ല.സാ.ഗു = 600. 10 കൊണ്ട് ഹരിച്ചാൽ 60 ലഭിക്കുന്നു."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The HCF and LCM of m and n are 6 and 210. If m + n = 72, find the value of (1/m + 1/n)?",
    "titleSec": "m, n എന്നിവയുടെ ഉ.സാ.ഘ 6-ഉം ല.സാ.ഗു 210-ഉം ആണ്. m + n = 72 ആയാൽ (1/m + 1/n) ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 2/35 [(m+n)/(mn) = 72 / (6 × 210) = 72 / 1260]<br>1/m + 1/n = (m + n) / (mn). We know mn = HCF × LCM = 6 × 210 = 1260. So 72 / 1260 = 2 / 35.",
    "backSec": "<strong>ഉത്തരം:</strong> 2/35 [72 / 1260 = 2/35]<br>1/m + 1/n = (m + n) / (mn). mn = 6 × 210 = 1260. അതിനാൽ 72 / 1260 = 2/35."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the HCF of 4 × 27 × 3125 and 8 × 9 × 25 × 7?",
    "titleSec": "(2² × 3³ × 5⁵), (2³ × 3² × 5² × 7) എന്നിവയുടെ ഉ.സാ.ഘ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 900 [2² × 3² × 5² = 4 × 9 × 25]<br>Common prime powers with minimum exponents: 2² × 3² × 5² = 4 × 9 × 25 = 900.",
    "backSec": "<strong>ഉത്തരം:</strong> 900 [2² × 3² × 5² = 4 × 9 × 25]<br>കുറഞ്ഞ കൃതികൾ: 2² × 3² × 5² = 4 × 9 × 25 = 900."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The LCM of two numbers is 20 times their HCF. If sum of HCF and LCM is 2520, what is the HCF?",
    "titleSec": "രണ്ട് സംഖ്യകളുടെ ല.സാ.ഗു അവയുടെ ഉ.സാ.ഘയുടെ 20 ഇരട്ടിയാണ്. അവയുടെ തുക 2520 ആയാൽ ഉ.സാ.ഘ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 120 [21 × HCF = 2520 => HCF = 120]<br>LCM = 20H. H + LCM = H + 20H = 21H = 2520 => H = 2520 / 21 = 120.",
    "backSec": "<strong>ഉത്തരം:</strong> 120 [21 × HCF = 2520 => HCF = 120]<br>H + 20H = 21H = 2520 => H = 2520 / 21 = 120."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the least number which when divided by 6, 7, 8, 9, 12 leaves remainder 1 in each case?",
    "titleSec": "6, 7, 8, 9, 12 എന്നീ സംഖ്യകൾ കൊണ്ട് ഹരിക്കുമ്പോൾ 1 ശിഷ്ടം വരുന്ന ഏറ്റവും ചെറിയ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 505 [LCM(6,7,8,9,12) + 1 = 504 + 1]<br>LCM(6, 7, 8, 9, 12) = 504. Adding remainder 1 gives 504 + 1 = 505.",
    "backSec": "<strong>ഉത്തരം:</strong> 505 [ല.സാ.ഗു + 1 = 504 + 1]<br>ല.സാ.ഗു(6, 7, 8, 9, 12) = 504. ശിഷ്ടം 1 കൂട്ടുമ്പോൾ = 505."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The HCF of two numbers is 11 and their LCM is 7700. If one number is 275, find the other number?",
    "titleSec": "രണ്ട് സംഖ്യകളുടെ ഉ.സാ.ഘ 11-ഉം ല.സാ.ഗു 7700-ഉം ആണ്. ഒരു സംഖ്യ 275 ആയാൽ രണ്ടാമത്തെ സംഖ്യ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 308 [(11 × 7700) / 275]<br>Other number = (11 × 7700) / 275 = 7700 / 25 = 308.",
    "backSec": "<strong>ഉത്തരം:</strong> 308 [(11 × 7700) / 275]<br>(11 × 7700) / 275 = 308."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the square root of 0.09?",
    "titleSec": "0.09 ന്റെ വർഗ്ഗമൂലം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 0.3<br>√(9/100) = 3/10 = 0.3.",
    "backSec": "<strong>ഉത്തരം:</strong> 0.3<br>√(9/100) = 3/10 = 0.3."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Evaluate: √10000 - √64?",
    "titleSec": "√10000 - √64 ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 92 (100 - 8)<br>√10000 = 100, √64 = 8. 100 - 8 = 92.",
    "backSec": "<strong>ഉത്തരം:</strong> 92 (100 - 8)<br>100 - 8 = 92."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of 15² - 14²?",
    "titleSec": "15² - 14² ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 29 [(15 - 14)(15 + 14) = 1 × 29]<br>Difference of consecutive squares equals their sum: 15 + 14 = 29.",
    "backSec": "<strong>ഉത്തരം:</strong> 29 [15 + 14 = 29]<br>തുടർച്ചയായ സംഖ്യകളുടെ വർഗ്ഗങ്ങളുടെ വ്യത്യാസം അവയുടെ തുകയ്ക്ക് തുല്യമാണ്: 15 + 14 = 29."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The ratio of two numbers is 3 : 4 and their HCF is 4. What is their LCM?",
    "titleSec": "രണ്ട് സംഖ്യകളുടെ അംശബന്ധം 3 : 4-ഉം ഉ.സാ.ഘ 4-ഉം ആണ്. അവയുടെ ല.സാ.ഗു എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 48 [3 × 4 × 4]<br>Numbers are 3 × 4 = 12 and 4 × 4 = 16. LCM(12, 16) = 48.",
    "backSec": "<strong>ഉത്തരം:</strong> 48 [3 × 4 × 4]<br>സംഖ്യകൾ 12, 16. അവയുടെ ല.സാ.ഗു = 48."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the cube root of 27,000?",
    "titleSec": "27,000-ന്റെ ഘനമൂലം (Cube root) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 30 [∛27 × ∛1000 = 3 × 10]<br>∛(27 × 1000) = ∛27 × ∛1000 = 3 × 10 = 30.",
    "backSec": "<strong>ഉത്തരം:</strong> 30 [3 × 10 = 30]<br>∛27 × ∛1000 = 3 × 10 = 30."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Simplify: 100 ÷ 10 × 10?",
    "titleSec": "100 ÷ 10 × 10 ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 100 [100 ÷ 10 = 10; 10 × 10 = 100]<br>Division and multiplication have equal priority, executed left to right: 100 ÷ 10 = 10, then 10 × 10 = 100.",
    "backSec": "<strong>ഉത്തരം:</strong> 100 [100 ÷ 10 = 10; 10 × 10 = 100]<br>ഇടത്തുനിന്ന് വലത്തോട്ട്: 100 ÷ 10 = 10, ശേഷം 10 × 10 = 100."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the greatest common divisor (GCD) of 35 and 49?",
    "titleSec": "35, 49 എന്നീ സംഖ്യകളുടെ ഉ.സാ.ഘ (GCD) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 7<br>35 = 5 × 7, 49 = 7 × 7. Common factor is 7.",
    "backSec": "<strong>ഉത്തരം:</strong> 7<br>35 = 5 × 7, 49 = 7 × 7. പൊതുഘടകം = 7."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the value of: √[25 + √[121]]?",
    "titleSec": "√[25 + √[121]] ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 2 · Basic Operations Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 6 [√[25 + 11] = √36 = 6]<br>√121 = 11. Then √(25 + 11) = √36 = 6.",
    "backSec": "<strong>ഉത്തരം:</strong> 6 [√36 = 6]<br>√121 = 11. √(25 + 11) = √36 = 6."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the average of 10, 15, 25, and 30?",
    "titleSec": "10, 15, 25, 30 എന്നീ സംഖ്യകളുടെ ശരാശരി എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 20 [(10 + 15 + 25 + 30)/4 = 80/4]<br>Sum = 10 + 15 + 25 + 30 = 80. Average = 80 / 4 = 20.",
    "backSec": "<strong>ഉത്തരം:</strong> 20 [(10 + 15 + 25 + 30)/4 = 80/4]<br>തുക = 80, എണ്ണം = 4. ശരാശരി = 80 / 4 = 20."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the average of the first 50 natural numbers?",
    "titleSec": "ആദ്യത്തെ 50 എണ്ണൽ സംഖ്യകളുടെ ശരാശരി എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 25.5 [(50 + 1)/2]<br>Average of first n natural numbers = (n + 1) / 2 = 51 / 2 = 25.5.",
    "backSec": "<strong>ഉത്തരം:</strong> 25.5 [(50 + 1)/2]<br>ആദ്യത്തെ n എണ്ണൽ സംഖ്യകളുടെ ശരാശരി = (n + 1)/2 = 51/2 = 25.5."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the average of the first 10 even numbers?",
    "titleSec": "ആദ്യത്തെ 10 ഇരട്ട സംഖ്യകളുടെ ശരാശരി എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 11 [n + 1 = 10 + 1]<br>Average of first n even numbers is n + 1 = 10 + 1 = 11.",
    "backSec": "<strong>ഉത്തരം:</strong> 11 [n + 1 = 10 + 1]<br>ആദ്യത്തെ n ഇരട്ട സംഖ്യകളുടെ ശരാശരി = n + 1 = 10 + 1 = 11."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the average of the first 25 odd numbers?",
    "titleSec": "ആദ്യത്തെ 25 ഒറ്റ സംഖ്യകളുടെ ശരാശരി എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 25 (Formula: avg = n)<br>The average of first n odd natural numbers is always n. For n = 25, average is 25.",
    "backSec": "<strong>ഉത്തരം:</strong> 25 (സൂത്രവാക്യം: ശരാശരി = n)<br>ആദ്യത്തെ n ഒറ്റ സംഖ്യകളുടെ ശരാശരി എപ്പോഴും n തന്നെയായിരിക്കും. അതിനാൽ ഉത്തരം 25."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A car travels from A to B at 40 km/h and returns at 60 km/h. What is the average speed for the whole journey?",
    "titleSec": "ഒരു കാർ A-യിൽ നിന്ന് B-യിലേക്ക് 40 കി.മീ/മണിക്കൂർ വേഗതയിലും, തിരിച്ച് 60 കി.മീ/മണിക്കൂർ വേഗതയിലും സഞ്ചരിച്ചാൽ ശരാശരി വേഗത എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 48 km/h [2 × 40 × 60 / (40 + 60) = 4800 / 100]<br>Average Speed = 2xy / (x + y) = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h.",
    "backSec": "<strong>ഉത്തരം:</strong> 48 കി.മീ/മണിക്കൂർ [2 × 40 × 60 / 100 = 48]<br>ശരാശരി വേഗത = 2xy / (x + y) = (2 × 40 × 60) / 100 = 48 കി.മീ/മണിക്കൂർ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The average of 4 consecutive even numbers is 27. What is the largest of these numbers?",
    "titleSec": "തുടർച്ചയായ 4 ഇരട്ട സംഖ്യകളുടെ ശരാശരി 27 ആയാൽ അവയിൽ ഏറ്റവും വലിയ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 30 (Numbers are 24, 26, 28, 30)<br>Numbers are x, x+2, x+4, x+6. Average is (4x + 12)/4 = x + 3 = 27 => x = 24. Largest is 24 + 6 = 30.",
    "backSec": "<strong>ഉത്തരം:</strong> 30 (സംഖ്യകൾ 24, 26, 28, 30)<br>സംഖ്യകൾ x, x+2, x+4, x+6. ശരാശരി x + 3 = 27 => x = 24. ഏറ്റവും വലിയ സംഖ്യ = 24 + 6 = 30."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The average age of 30 students in a class is 15 years. If the teacher's age is included, the average becomes 16 years. What is the teacher's age?",
    "titleSec": "ഒരു ക്ലാസ്സിലെ 30 കുട്ടികളുടെ ശരാശരി പ്രായം 15 വയസ്സാണ്. അധ്യാപകന്റെ പ്രായം കൂടി ചേർത്തപ്പോൾ ശരാശരി 16 ആയി. അധ്യാപകന്റെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 46 years [(31 × 16) - (30 × 15) = 496 - 450]<br>Total age with teacher = 31 × 16 = 496. Total students = 30 × 15 = 450. Teacher's age = 496 - 450 = 46 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 46 വയസ്സ് [(31 × 16) - (30 × 15) = 496 - 450]<br>അധ്യാപകൻ ഉൾപ്പെടെയുള്ള ആകെ പ്രായം = 31 × 16 = 496. കുട്ടികളുടെ ആകെ പ്രായം = 30 × 15 = 450. അധ്യാപകന്റെ പ്രായം = 46 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A batsman has an average of 40 runs in 9 innings. How many runs must he score in the 10th innings to raise his average to 45?",
    "titleSec": "ഒരു ബാറ്റ്സ്മാന്റെ 9 ഇന്നിംഗ്സുകളിലെ ശരാശരി സ്കോർ 40 റൺസാണ്. ശരാശരി 45 ആക്കി ഉയർത്താൻ പത്താം ഇന്നിംഗ്സിൽ അദ്ദേഹം എത്ര റൺസ് നേടണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 90 runs [(10 × 45) - (9 × 40) = 450 - 360]<br>Required runs = (10 × 45) - (9 × 40) = 450 - 360 = 90 runs.",
    "backSec": "<strong>ഉത്തരം:</strong> 90 റൺസ് [(10 × 45) - (9 × 40) = 450 - 360]<br>ആവശ്യമായ റൺസ് = (10 × 45) - (9 × 40) = 450 - 360 = 90 റൺസ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The average of 5 numbers is 20. If one number is excluded, the average becomes 18. What is the excluded number?",
    "titleSec": "5 സംഖ്യകളുടെ ശരാശരി 20 ആണ്. അതിലൊരു സംഖ്യ ഒഴിവാക്കിയപ്പോൾ ശരാശരി 18 ആയി. ഒഴിവാക്കിയ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 28 [(5 × 20) - (4 × 18) = 100 - 72]<br>Excluded number = (5 × 20) - (4 × 18) = 100 - 72 = 28.",
    "backSec": "<strong>ഉത്തരം:</strong> 28 [(5 × 20) - (4 × 18) = 100 - 72]<br>ഒഴിവാക്കിയ സംഖ്യ = (5 × 20) - (4 × 18) = 100 - 72 = 28."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the average of all multiples of 5 from 5 to 50?",
    "titleSec": "5 മുതൽ 50 വരെയുള്ള 5-ന്റെ ഗുണിതങ്ങളുടെ ശരാശരി എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 27.5 [(5 + 50) / 2 = 55 / 2]<br>Multiples of 5 form an AP: Average = (First + Last) / 2 = (5 + 50) / 2 = 55 / 2 = 27.5.",
    "backSec": "<strong>ഉത്തരം:</strong> 27.5 [(5 + 50) / 2 = 55 / 2]<br>ഇതൊരു സമാന്തര ശ്രേണിയാണ്: ശരാശരി = (ആദ്യപദം + അവസാനപദം)/2 = (5 + 50)/2 = 27.5."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If the average of x, x+3, x+6, x+9, and x+12 is 15, what is the value of x?",
    "titleSec": "x, x+3, x+6, x+9, x+12 എന്നീ സംഖ്യകളുടെ ശരാശരി 15 ആയാൽ x-ന്റെ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 9 [Middle term x + 6 = 15 => x = 9]<br>In an odd-length AP, average equals middle term: x + 6 = 15 => x = 9.",
    "backSec": "<strong>ഉത്തരം:</strong> 9 [നടുവിലെ സംഖ്യ x + 6 = 15 => x = 9]<br>ഒറ്റയെണ്ണം പദങ്ങളുള്ള സമാന്തര ശ്രേണിയിൽ ശരാശരി നടുവിലെ പദമായിരിക്കും: x + 6 = 15 => x = 9."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The average weight of 8 men increases by 1.5 kg when a new man replaces one who weighs 65 kg. What is the weight of the new man?",
    "titleSec": "65 കിലോ ഭാരമുള്ള ഒരാൾക്ക് പകരം പുതിയ ഒരാൾ വന്നപ്പോൾ 8 പേരുടെ ശരാശരി ഭാരം 1.5 കിലോ കൂടി. പുതിയ ആളുടെ ഭാരം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 77 kg [65 + (8 × 1.5) = 65 + 12]<br>Weight of new man = 65 + (8 × 1.5) = 65 + 12 = 77 kg.",
    "backSec": "<strong>ഉത്തരം:</strong> 77 കിലോ [65 + (8 × 1.5) = 65 + 12]<br>പുതിയ ആളുടെ ഭാരം = 65 + (8 × 1.5) = 65 + 12 = 77 കിലോ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the average of squares of first 5 natural numbers (1, 4, 9, 16, 25)?",
    "titleSec": "ആദ്യത്തെ 5 എണ്ണൽ സംഖ്യകളുടെ വർഗ്ഗങ്ങളുടെ ശരാശരി എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 11 [(1 + 4 + 9 + 16 + 25) / 5 = 55 / 5]<br>Sum = 1 + 4 + 9 + 16 + 25 = 55. Average = 55 / 5 = 11.",
    "backSec": "<strong>ഉത്തരം:</strong> 11 [55 / 5 = 11]<br>വർഗ്ഗങ്ങളുടെ തുക = 55. ശരാശരി = 55 / 5 = 11."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The average temperature of Monday, Tuesday, and Wednesday was 40°C. That of Tuesday, Wednesday, and Thursday was 41°C. If Thursday was 42°C, what was Monday's temperature?",
    "titleSec": "തിങ്കൾ, ചൊവ്വ, ബുധൻ ദിവസങ്ങളിലെ ശരാശരി താപനില 40°C ആയിരുന്നു. ചൊവ്വ, ബുധൻ, വ്യാഴം ദിവസങ്ങളിലേത് 41°C ആയിരുന്നു. വ്യാഴാഴ്ച 42°C ആയിരുന്നുവെങ്കിൽ തിങ്കളാഴ്ചത്തെ താപനില എത്രയായിരുന്നു?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 39°C [Mon = Thu - 3 = 42 - 3]<br>(Tue+Wed+Thu) - (Mon+Tue+Wed) = 3(41) - 3(40) = 123 - 120 = 3 => Thu - Mon = 3 => Mon = 42 - 3 = 39°C.",
    "backSec": "<strong>ഉത്തരം:</strong> 39°C [തിങ്കൾ = വ്യാഴം - 3 = 42 - 3]<br>വ്യാഴം - തിങ്കൾ = 3(41) - 3(40) = 3°C => തിങ്കൾ = 42 - 3 = 39°C."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The average of 7 numbers is 8. If each number is multiplied by 3, what will be the new average?",
    "titleSec": "7 സംഖ്യകളുടെ ശരാശരി 8 ആണ്. ഓരോ സംഖ്യയെയും 3 കൊണ്ട് ഗുണിച്ചാൽ പുതിയ ശരാശരി എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 7 · Average",
    "backEn": "<strong>Answer:</strong> 24 (8 × 3)<br>If every observation is multiplied by k, the new average is also multiplied by k: 8 × 3 = 24.",
    "backSec": "<strong>ഉത്തരം:</strong> 24 (8 × 3)<br>എല്ലാ സംഖ്യകളെയും k കൊണ്ട് ഗുണിച്ചാൽ ശരാശരിയും k മടങ്ങാകും: 8 × 3 = 24."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the fourth proportional to 4, 9, and 12?",
    "titleSec": "4, 9, 12 എന്നീ സംഖ്യകളുടെ നാലാം അനുപാതം (Fourth proportional) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 27 [(9 × 12) / 4 = 108 / 4]<br>4 : 9 :: 12 : x => 4x = 9 × 12 => x = 108 / 4 = 27.",
    "backSec": "<strong>ഉത്തരം:</strong> 27 [(9 × 12) / 4 = 108 / 4]<br>4x = 9 × 12 => x = 108 / 4 = 27."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the mean proportional between 9 and 25?",
    "titleSec": "9, 25 എന്നീ സംഖ്യകളുടെ മധ്യ അനുപാതം (Mean proportional) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 15 [√(9 × 25) = 3 × 5]<br>Mean proportional x = √(a × b) = √(9 × 25) = 3 × 5 = 15.",
    "backSec": "<strong>ഉത്തരം:</strong> 15 [√(9 × 25) = 3 × 5]<br>മധ്യ അനുപാതം = √(9 × 25) = 3 × 5 = 15."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If A : B = 2 : 3 and B : C = 4 : 5, find A : B : C?",
    "titleSec": "A : B = 2 : 3, B : C = 4 : 5 ആയാൽ A : B : C എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 8 : 12 : 15<br>Multiply first ratio by 4 (8:12) and second ratio by 3 (12:15). A:B:C = 8:12:15.",
    "backSec": "<strong>ഉത്തരം:</strong> 8 : 12 : 15<br>B തുല്യമാക്കുക: A:B = 8:12, B:C = 12:15. അതിനാൽ A:B:C = 8:12:15."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the third proportional to 16 and 24?",
    "titleSec": "16, 24 എന്നീ സംഖ്യകളുടെ മൂന്നാം അനുപാതം (Third proportional) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 36 [24² / 16 = 576 / 16]<br>16 : 24 :: 24 : x => 16x = 24 × 24 => x = 576 / 16 = 36.",
    "backSec": "<strong>ഉത്തരം:</strong> 36 [24² / 16 = 576 / 16]<br>16x = 24 × 24 => x = 576 / 16 = 36."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Divide Rs. 700 among A and B in the ratio 3 : 4. How much does A receive?",
    "titleSec": "700 രൂപ A, B എന്നിവർക്ക് 3 : 4 എന്ന അംശബന്ധത്തിൽ വീതിച്ചാൽ A-യ്ക്ക് എത്ര രൂപ ലഭിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> Rs. 300 [(3/7) × 700]<br>Total parts = 3 + 4 = 7. A's share = (3/7) × 700 = Rs. 300.",
    "backSec": "<strong>ഉത്തരം:</strong> 300 രൂപ [(3/7) × 700]<br>ആകെ ഓഹരികൾ = 3 + 4 = 7. A യുടെ പങ്ക് = (3/7) × 700 = 300 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the compound ratio of 2 : 3 and 5 : 7?",
    "titleSec": "2 : 3, 5 : 7 എന്നീ അംശബന്ധങ്ങളുടെ സംയുക്ത അംശബന്ധം (Compound ratio) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 10 : 21 [(2 × 5) : (3 × 7)]<br>Compounded ratio = (2 × 5) : (3 × 7) = 10 : 21.",
    "backSec": "<strong>ഉത്തരം:</strong> 10 : 21 [(2 × 5) : (3 × 7)]<br>സംയുക്ത അംശബന്ധം = (2 × 5) : (3 × 7) = 10 : 21."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the duplicate ratio of 3 : 4?",
    "titleSec": "3 : 4 ന്റെ വർഗ്ഗാനുപാതം (Duplicate ratio) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 9 : 16 (3² : 4²)<br>Duplicate ratio of a : b is a² : b² = 3² : 4² = 9 : 16.",
    "backSec": "<strong>ഉത്തരം:</strong> 9 : 16 (3² : 4²)<br>വർഗ്ഗാനുപാതം = 3² : 4² = 9 : 16."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the sub-duplicate ratio of 49 : 81?",
    "titleSec": "49 : 81 ന്റെ വർഗ്ഗമൂലാനുപാതം (Sub-duplicate ratio) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 7 : 9 (√49 : √81)<br>Sub-duplicate ratio of a : b is √a : √b = √49 : √81 = 7 : 9.",
    "backSec": "<strong>ഉത്തരം:</strong> 7 : 9 (√49 : √81)<br>വർഗ്ഗമൂലാനുപാതം = √49 : √81 = 7 : 9."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If x : y = 3 : 5, find the value of (2x + 3y) : (5x + 2y)?",
    "titleSec": "x : y = 3 : 5 ആയാൽ (2x + 3y) : (5x + 2y) ന്റെ മൂല്യം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 21 : 25 [(6 + 15) : (15 + 10)]<br>Substitute x = 3, y = 5: (2×3 + 3×5) / (5×3 + 2×5) = (6 + 15) / (15 + 10) = 21 / 25.",
    "backSec": "<strong>ഉത്തരം:</strong> 21 : 25 [(6 + 15) : (15 + 10)]<br>x = 3, y = 5 നൽകുക: (6 + 15) / (15 + 10) = 21 : 25."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Two numbers are in the ratio 4 : 5. If their sum is 180, what is the smaller number?",
    "titleSec": "രണ്ട് സംഖ്യകൾ 4 : 5 എന്ന അംശബന്ധത്തിലാണ്. അവയുടെ തുക 180 ആയാൽ ചെറിയ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 80 [(4/9) × 180]<br>Total parts = 4 + 5 = 9. One part = 180 / 9 = 20. Smaller number = 4 × 20 = 80.",
    "backSec": "<strong>ഉത്തരം:</strong> 80 [(4/9) × 180]<br>ആകെ ഭാഗങ്ങൾ = 9. ഒരു ഭാഗം = 180 / 9 = 20. ചെറിയ സംഖ്യ = 4 × 20 = 80."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If 15 toys cost Rs. 450, how much will 25 toys cost at the same rate?",
    "titleSec": "15 കളിപ്പാട്ടങ്ങൾക്ക് 450 രൂപയായാൽ 25 കളിപ്പാട്ടങ്ങൾക്ക് എത്ര രൂപയാകും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> Rs. 750 [(450 / 15) × 25 = 30 × 25]<br>Cost of 1 toy = 450 / 15 = Rs. 30. Cost of 25 toys = 25 × 30 = Rs. 750.",
    "backSec": "<strong>ഉത്തരം:</strong> 750 രൂപ [30 × 25 = 750]<br>ഒരു കളിപ്പാട്ടത്തിന്റെ വില = 450 / 15 = 30 രൂപ. 25 എണ്ണത്തിന്റെ വില = 25 × 30 = 750 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If a : b = 5 : 7 and b : c = 14 : 15, what is a : c?",
    "titleSec": "a : b = 5 : 7, b : c = 14 : 15 ആയാൽ a : c എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 2 : 3 [(5/7) × (14/15) = 2/3]<br>a/c = (a/b) × (b/c) = (5/7) × (14/15) = (1/1) × (2/3) = 2/3, so a : c = 2 : 3.",
    "backSec": "<strong>ഉത്തരം:</strong> 2 : 3 [(5/7) × (14/15) = 2/3]<br>a/c = (5/7) × (14/15) = 2/3. അതിനാൽ a : c = 2 : 3."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What must be added to each term of ratio 7 : 11 so that it becomes 3 : 4?",
    "titleSec": "7 : 11 എന്ന അംശബന്ധത്തിലെ ഓരോ സംഖ്യയോടും ഏത് സംഖ്യ കൂട്ടിയാലാണ് അനുപാതം 3 : 4 ആകുന്നത്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 5 [(7 + 5) / (11 + 5) = 12 / 16 = 3/4]<br>(7 + x)/(11 + x) = 3/4 => 28 + 4x = 33 + 3x => x = 5.",
    "backSec": "<strong>ഉത്തരം:</strong> 5 [(7 + 5) / (11 + 5) = 12 / 16 = 3/4]<br>4(7 + x) = 3(11 + x) => 28 + 4x = 33 + 3x => x = 5."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If 12 men can finish a piece of work in 20 days, in how many days can 15 men finish the same work?",
    "titleSec": "12 ആളുകൾ ഒരു ജോലി 20 ദിവസം കൊണ്ട് ചെയ്യുമെങ്കിൽ 15 ആളുകൾ അതേ ജോലി എത്ര ദിവസം കൊണ്ട് ചെയ്യും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 16 days [(12 × 20) / 15 = 240 / 15]<br>Inverse proportion: M1 × D1 = M2 × D2 => 12 × 20 = 15 × D2 => D2 = 240 / 15 = 16 days.",
    "backSec": "<strong>ഉത്തരം:</strong> 16 ദിവസം [240 / 15 = 16]<br>വിപരീതാനുപാതം: 12 × 20 = 15 × D2 => D2 = 240 / 15 = 16 ദിവസം."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the simplest form of the ratio 250 ml to 2 litres?",
    "titleSec": "250 മില്ലിലിറ്ററും 2 ലിറ്ററും തമ്മിലുള്ള അംശബന്ധത്തിന്റെ ഏറ്റവും ലഘുവായ രൂപം ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 8 · Ratio & Proportion",
    "backEn": "<strong>Answer:</strong> 1 : 8 [250 ml : 2000 ml]<br>2 litres = 2,000 ml. Ratio = 250 : 2000 = 1 : 8.",
    "backSec": "<strong>ഉത്തരം:</strong> 1 : 8 [250 ml : 2000 ml]<br>2 ലിറ്റർ = 2,000 മില്ലിലിറ്റർ. അംശബന്ധം = 250 : 2000 = 1 : 8."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The ratio of ages of father and son is 5 : 2. If the sum of their ages is 70 years, what is the son's age?",
    "titleSec": "അച്ഛന്റെയും മകന്റെയും പ്രായത്തിന്റെ അംശബന്ധം 5 : 2 ആണ്. അവരുടെ പ്രായങ്ങളുടെ തുക 70 വയസ്സായാൽ മകന്റെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 20 years [7x = 70 => x = 10; son = 2 × 10]<br>5x + 2x = 7x = 70 => x = 10. Son's age = 2x = 2 × 10 = 20 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 20 വയസ്സ് [7x = 70 => x = 10; മകൻ = 2 × 10]<br>7x = 70 => x = 10. മകന്റെ പ്രായം = 2x = 20 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A father is 3 times as old as his son. After 15 years, he will be twice as old as his son. What is the son's present age?",
    "titleSec": "ഒരച്ഛന് മകന്റെ പ്രായത്തിന്റെ 3 ഇരട്ടി പ്രായമുണ്ട്. 15 വർഷം കഴിയുമ്പോൾ അച്ഛന്റെ പ്രായം മകന്റെ പ്രായത്തിന്റെ 2 ഇരട്ടിയാകും. മകന്റെ ഇപ്പോഴത്തെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 15 years [3x + 15 = 2(x + 15) => x = 15]<br>Father = 3x, Son = x. In 15 years: 3x + 15 = 2(x + 15) => 3x + 15 = 2x + 30 => x = 15 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 15 വയസ്സ് [3x + 15 = 2(x + 15) => x = 15]<br>3x + 15 = 2(x + 15) => 3x + 15 = 2x + 30 => x = 15 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The ages of A and B are in the ratio 4 : 5. Six years ago, their ages were in the ratio 7 : 9. What is B's present age?",
    "titleSec": "A, B എന്നിവരുടെ പ്രായത്തിന്റെ അംശബന്ധം 4 : 5 ആണ്. 6 വർഷം മുൻപ് ഇത് 7 : 9 ആയിരുന്നു. B യുടെ ഇപ്പോഴത്തെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 60 years [9(4x - 6) = 7(5x - 6) => x = 12; B = 5×12]<br>(4x - 6) / (5x - 6) = 7 / 9 => 36x - 54 = 35x - 42 => x = 12. B's age = 5 × 12 = 60 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 60 വയസ്സ് [B = 5 × 12 = 60 വയസ്സ്]<br>36x - 54 = 35x - 42 => x = 12. B യുടെ പ്രായം = 5 × 12 = 60 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Ten years ago, P was half of Q's age. If the ratio of their present ages is 3 : 4, what is the total of their present ages?",
    "titleSec": "10 വർഷം മുൻപ് P യുടെ പ്രായം Q വിന്റെ പ്രായത്തിന്റെ പകുതിയായിരുന്നു. ഇപ്പോഴത്തെ പ്രായത്തിന്റെ അനുപാതം 3 : 4 ആയാൽ അവരുടെ ഇപ്പോഴത്തെ ആകെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 35 years [P = 15, Q = 20; Sum = 35]<br>(3x - 10) = 1/2 (4x - 10) => 6x - 20 = 4x - 10 => 2x = 10 => x = 5. P = 15, Q = 20. Sum = 35 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 35 വയസ്സ് [P = 15, Q = 20; ആകെ = 35]<br>6x - 20 = 4x - 10 => 2x = 10 => x = 5. ആകെ പ്രായം = 15 + 20 = 35 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The sum of the ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?",
    "titleSec": "3 വർഷം ഇടവിട്ട് ജനിച്ച 5 കുട്ടികളുടെ പ്രായങ്ങളുടെ തുക 50 വയസ്സായാൽ ഏറ്റവും ഇളയ കുട്ടിയുടെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 4 years [5x + 30 = 50 => 5x = 20 => x = 4]<br>Ages are x, x+3, x+6, x+9, x+12. Sum = 5x + 30 = 50 => 5x = 20 => x = 4 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 4 വയസ്സ് [5x + 30 = 50 => 5x = 20 => x = 4]<br>x + (x+3) + (x+6) + (x+9) + (x+12) = 50 => 5x + 30 = 50 => 5x = 20 => x = 4 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A mother is 4 times older than her daughter. In 20 years, she will be twice as old. What is the mother's current age?",
    "titleSec": "ഒരമ്മയ്ക്ക് മകളുടെ 4 ഇരട്ടി പ്രായമുണ്ട്. 20 വർഷം കഴിയുമ്പോൾ അമ്മയുടെ പ്രായം മകളുടെ 2 ഇരട്ടിയാകും. അമ്മയുടെ ഇപ്പോഴത്തെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 40 years [Mother = 40, Daughter = 10; in 20 yrs: 60 = 2 × 30]<br>4x + 20 = 2(x + 20) => 4x + 20 = 2x + 40 => 2x = 20 => x = 10. Mother = 4x = 40 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 40 വയസ്സ് [അമ്മ = 40, മകൾ = 10; 20 വർഷം കഴിഞ്ഞ്: 60 = 2 × 30]<br>4x + 20 = 2x + 40 => 2x = 20 => x = 10. അമ്മയുടെ പ്രായം = 40 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The age difference between two brothers is 6 years. If the ratio of their ages is 5 : 7, what is the elder brother's age?",
    "titleSec": "രണ്ട് സഹോദരങ്ങൾ തമ്മിലുള്ള പ്രായവ്യത്യാസം 6 വയസ്സാണ്. അവരുടെ പ്രായത്തിന്റെ അനുപാതം 5 : 7 ആയാൽ മൂത്ത സഹോദരന്റെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 21 years [2x = 6 => x = 3; elder = 7 × 3]<br>Difference in parts = 7 - 5 = 2 parts = 6 years => 1 part = 3 years. Elder brother = 7 × 3 = 21 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 21 വയസ്സ് [2x = 6 => x = 3; മൂത്തയാൾ = 7 × 3 = 21]<br>അംശബന്ധത്തിലെ വ്യത്യാസം 2 ഭാഗം = 6 വയസ്സ് => 1 ഭാഗം = 3. മൂത്തയാൾ = 7 × 3 = 21 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Rahul was born when his father was 28 years old. Today, his father is 3 times as old as Rahul. How old is Rahul?",
    "titleSec": "രാഹുൽ ജനിച്ചപ്പോൾ അച്ഛന് 28 വയസ്സായിരുന്നു. ഇന്ന് അച്ഛന് രാഹുലിന്റെ 3 ഇരട്ടി പ്രായമുണ്ട്. രാഹുലിന്റെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 14 years [Father = R + 28 = 3R => 2R = 28 => R = 14]<br>Father's age = R + 28. Also Father = 3R => 3R = R + 28 => 2R = 28 => R = 14 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 14 വയസ്സ് [അച്ഛൻ = R + 28 = 3R => 2R = 28 => R = 14]<br>3R = R + 28 => 2R = 28 => R = 14 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The ratio of present ages of Anju and Manju is 3 : 5. After 5 years, sum of their ages will be 58 years. What is Anju's present age?",
    "titleSec": "അഞ്ജുവിന്റെയും മഞ്ജുവിന്റെയും ഇപ്പോഴത്തെ പ്രായത്തിന്റെ അനുപാതം 3 : 5 ആണ്. 5 വർഷത്തിന് ശേഷം അവരുടെ പ്രായങ്ങളുടെ തുക 58 വയസ്സാകും. അഞ്ജുവിന്റെ ഇപ്പോഴത്തെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 18 years [Present sum = 58 - 10 = 48; Anju = (3/8) × 48]<br>Sum of present ages = 58 - (5 + 5) = 48. Total parts = 3 + 5 = 8. Anju's age = (3/8) × 48 = 18 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 18 വയസ്സ് [ഇപ്പോഴത്തെ തുക = 48; അഞ്ജു = (3/8) × 48 = 18]<br>ഇപ്പോഴത്തെ തുക = 58 - 10 = 48. അഞ്ജുവിന്റെ പ്രായം = (3/8) × 48 = 18 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A is 2 years older than B who is twice as old as C. If total of ages of A, B, and C is 27, how old is B?",
    "titleSec": "A-യ്ക്ക് B യെക്കാൾ 2 വയസ്സ് കൂടുതലുണ്ട്, B-യ്ക്ക് C യുടെ 2 ഇരട്ടി പ്രായമുണ്ട്. മൂവരുടെയും ആകെ പ്രായം 27 ആയാൽ B യുടെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 10 years [C = x, B = 2x, A = 2x+2; 5x+2 = 27 => x = 5; B = 10]<br>Let C = x. Then B = 2x, A = 2x + 2. Sum = (2x + 2) + 2x + x = 5x + 2 = 27 => 5x = 25 => x = 5. B = 2x = 10 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 10 വയസ്സ് [C = 5, B = 10, A = 12; ആകെ = 27]<br>C = x ആയാൽ B = 2x, A = 2x + 2. ആകെ: 5x + 2 = 27 => 5x = 25 => x = 5. B യുടെ പ്രായം = 2x = 10 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A man's age is 150% of what it was 10 years ago, but 75% of what it will be 10 years hence. What is his present age?",
    "titleSec": "ഒരാളുടെ ഇപ്പോഴത്തെ പ്രായം 10 വർഷം മുൻപുള്ളതിന്റെ 150%-ഉം, 10 വർഷത്തിന് ശേഷമുള്ളതിന്റെ 75%-ഉം ആണ്. അദ്ദേഹത്തിന്റെ ഇപ്പോഴത്തെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 30 years [x = 1.5(x - 10) => 0.5x = 15 => x = 30]<br>x = (150/100)(x - 10) = 1.5x - 15 => 0.5x = 15 => x = 30 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 30 വയസ്സ് [x = 1.5(x - 10) => 0.5x = 15 => x = 30]<br>x = 1.5(x - 10) => x = 1.5x - 15 => 0.5x = 15 => x = 30 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The ratio of ages of two friends is 1 : 2. After 5 years, the ratio becomes 2 : 3. What is the sum of their present ages?",
    "titleSec": "രണ്ട് സുഹൃത്തുക്കളുടെ പ്രായത്തിന്റെ അനുപാതം 1 : 2 ആണ്. 5 വർഷത്തിന് ശേഷം ഇത് 2 : 3 ആകുമെങ്കിൽ അവരുടെ ഇപ്പോഴത്തെ ആകെ പ്രായം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 15 years [x = 5, 2x = 10; Sum = 15]<br>(x + 5)/(2x + 5) = 2/3 => 3x + 15 = 4x + 10 => x = 5. Ages are 5 and 10. Sum = 15 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 15 വയസ്സ് [x = 5, 2x = 10; ആകെ = 15]<br>3x + 15 = 4x + 10 => x = 5. പ്രായങ്ങൾ 5, 10. ആകെ തുക = 15 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If Suresh's present age is 40 years and Ramesh's age is 60 years, how many years ago was the ratio of their ages 3 : 5?",
    "titleSec": "സുരേഷിന് ഇപ്പോൾ 40 വയസ്സും രമേഷിന് 60 വയസ്സുമാണ്. എത്ര വർഷങ്ങൾക്ക് മുൻപാണ് അവരുടെ പ്രായത്തിന്റെ അനുപാതം 3 : 5 ആയിരുന്നത്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 10 years [(40 - 10) / (60 - 10) = 30 / 50 = 3/5]<br>(40 - t)/(60 - t) = 3/5 => 200 - 5t = 180 - 3t => 2t = 20 => t = 10 years ago.",
    "backSec": "<strong>ഉത്തരം:</strong> 10 വർഷം മുൻപ് [30/50 = 3/5]<br>200 - 5t = 180 - 3t => 2t = 20 => t = 10 വർഷം മുൻപ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The present average age of a husband and wife is 27 years. When they were married 4 years ago, what was their average age?",
    "titleSec": "ഒരു ദമ്പതികളുടെ ഇപ്പോഴത്തെ ശരാശരി പ്രായം 27 വയസ്സാണ്. 4 വർഷം മുൻപ് അവർ വിവാഹിതരായപ്പോൾ അവരുടെ ശരാശരി പ്രായം എത്രയായിരുന്നു?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 23 years [27 - 4 = 23]<br>If every person in a group was 4 years younger 4 years ago, the average age also decreases by exactly 4 years: 27 - 4 = 23 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 23 വയസ്സ് [27 - 4 = 23]<br>എല്ലാവരുടെയും പ്രായം 4 കുറയുമ്പോൾ ശരാശരിയും 4 കുറയുന്നു: 27 - 4 = 23 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A father tells his son, 'I was as old as you are at present at the time of your birth.' If the father is 38 now, how old was the son 5 years ago?",
    "titleSec": "'നീ ജനിച്ച സമയത്ത് എനിക്ക് നിന്റെ ഇന്നത്തെ പ്രായമായിരുന്നു' എന്ന് ഒരച്ഛൻ മകനോട് പറഞ്ഞു. അച്ഛന് ഇപ്പോൾ 38 വയസ്സുണ്ടെങ്കിൽ 5 വർഷം മുൻപ് മകന്റെ പ്രായം എത്രയായിരുന്നു?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 9 · Problems Based on Ages",
    "backEn": "<strong>Answer:</strong> 14 years [Son now = 38/2 = 19; 5 yrs ago = 19 - 5]<br>Let son's present age be x. Father's age at son's birth = 38 - x = x => 2x = 38 => x = 19. Five years ago, son was 19 - 5 = 14 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 14 വയസ്സ് [മകന്റെ ഇപ്പോഴത്തെ പ്രായം = 19; 5 വർഷം മുൻപ് = 14]<br>38 - x = x => 2x = 38 => x = 19. അഞ്ച് വർഷം മുൻപ് മകന്റെ പ്രായം = 19 - 5 = 14 വയസ്സ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Convert the fraction 3/8 into a percentage?",
    "titleSec": "3/8 എന്ന ഭിന്നസംഖ്യയെ ശതമാനമാക്കുക.",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 37.5% [(3/8) × 100 = 300 / 8]<br>(3/8) × 100 = 300 / 8 = 37.5%.",
    "backSec": "<strong>ഉത്തരം:</strong> 37.5% [300 / 8 = 37.5%]<br>(3/8) × 100 = 37.5%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is 15% of 600?",
    "titleSec": "600-ന്റെ 15% എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 90 [(15 / 100) × 600 = 15 × 6]<br>(15/100) × 600 = 15 × 6 = 90.",
    "backSec": "<strong>ഉത്തരം:</strong> 90 [15 × 6 = 90]<br>(15/100) × 600 = 90."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If a salary increases by 10% and then decreases by 10%, what is the net percentage change?",
    "titleSec": "ശമ്പളം ആദ്യം 10% കൂട്ടുകയും പിന്നീട് 10% കുറയ്ക്കുകയും ചെയ്താൽ ആകെ ശതമാന മാറ്റം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 1% Decrease [+10 - 10 - (10×10)/100 = -1%]<br>Net % = a + b + ab/100 = 10 - 10 - (10 × 10)/100 = -1% (1% decrease).",
    "backSec": "<strong>ഉത്തരം:</strong> 1% കുറവ് [-1%]<br>ആകെ മാറ്റം = 10 - 10 - (100/100) = -1% (1% കുറയുന്നു)."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If price of sugar rises by 25%, by what percent must a household reduce its consumption so that expenditure does not increase?",
    "titleSec": "പഞ്ചസാരയുടെ വില 25% വർദ്ധിച്ചാൽ കുടുംബ ബജറ്റ് കൂടാതിരിക്കാൻ ഉപഭോഗം എത്ര ശതമാനം കുറയ്ക്കണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 20% [[25 / (100 + 25)] × 100 = (25/125) × 100]<br>Reduction = [r / (100 + r)] × 100 = [25 / 125] × 100 = (1/5) × 100 = 20%.",
    "backSec": "<strong>ഉത്തരം:</strong> 20% [(25/125) × 100 = 20%]<br>കുറയ്ക്കേണ്ട ശതമാനം = [25 / 125] × 100 = 20%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "In an exam, a student scored 360 marks out of 500. What is his percentage score?",
    "titleSec": "ഒരു പരീക്ഷയിൽ 500-ൽ 360 മാർക്ക് നേടിയ വിദ്യാർത്ഥിയുടെ ശതമാനം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 72% [(360 / 500) × 100 = 360 / 5]<br>(360 / 500) × 100 = 360 / 5 = 72%.",
    "backSec": "<strong>ഉത്തരം:</strong> 72% [360 / 5 = 72%]<br>(360 / 500) × 100 = 72%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is 20% of 25% of 400?",
    "titleSec": "400-ന്റെ 25%-ന്റെ 20% എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 20 [(1/5) × (1/4) × 400 = (1/20) × 400]<br>25% of 400 = 100. 20% of 100 = 20.",
    "backSec": "<strong>ഉത്തരം:</strong> 20 [(1/20) × 400 = 20]<br>400-ന്റെ 25% = 100; 100-ന്റെ 20% = 20."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A town has a population of 100,000. It increases at the rate of 10% per annum. What will be the population after 2 years?",
    "titleSec": "ഒരു നഗരത്തിലെ ജനസംഖ്യ 100,000 ആണ്. ഇത് പ്രതിവർഷം 10% നിരക്കിൽ വർദ്ധിക്കുന്നുവെങ്കിൽ 2 വർഷത്തിന് ശേഷം ജനസംഖ്യ എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 121,000 [100000 × (1.1)² = 100000 × 1.21]<br>P = 100,000 × (1 + 10/100)² = 100,000 × 1.21 = 121,000.",
    "backSec": "<strong>ഉത്തരം:</strong> 121,000 [100000 × 1.21]<br>100,000 × (1.1)² = 100,000 × 1.21 = 121,000."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If A's income is 25% more than B's income, by what percentage is B's income less than A's income?",
    "titleSec": "A യുടെ വരുമാനം B യേക്കാൾ 25% കൂടുതലാണെങ്കിൽ, B യുടെ വരുമാനം A യേക്കാൾ എത്ര ശതമാനം കുറവാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 20% [[25 / (100 + 25)] × 100]<br>If B = 100, A = 125. Difference = 25. Less % = (25 / 125) × 100 = 20%.",
    "backSec": "<strong>ഉത്തരം:</strong> 20% [(25/125) × 100 = 20%]<br>B = 100 ആയാൽ A = 125. കുറവ് = (25/125) × 100 = 20%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A machine depreciates at 10% per year. If its present value is Rs. 10,000, what will its value be after 1 year?",
    "titleSec": "ഒരു യന്ത്രത്തിന്റെ വില പ്രതിവർഷം 10% തേയ്മാനം സംഭവിക്കുന്നു. ഇപ്പോഴത്തെ വില 10,000 രൂപയായാൽ 1 വർഷത്തിന് ശേഷമുള്ള വില എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> Rs. 9,000 [10000 - 10% of 10000]<br>Value = 10,000 × (1 - 0.10) = 10,000 × 0.90 = Rs. 9,000.",
    "backSec": "<strong>ഉത്തരം:</strong> 9,000 രൂപ [10000 - 1000]<br>10,000 - 1,000 = 9,000 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What number when increased by 20% becomes 240?",
    "titleSec": "ഏത് സംഖ്യയോടൊപ്പം അതിന്റെ 20% കൂട്ടിയാലാണ് 240 ആകുന്നത്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 200 [1.20 x = 240 => x = 240 / 1.2]<br>1.20 × x = 240 => x = 240 / 1.20 = 200.",
    "backSec": "<strong>ഉത്തരം:</strong> 200 [x = 240 / 1.2 = 200]<br>120% = 240 => 100% = (240/120) × 100 = 200."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Express 0.05 as a percentage?",
    "titleSec": "0.05-നെ ശതമാനമാക്കി മാറ്റുക.",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 5% [0.05 × 100]<br>0.05 × 100 = 5%.",
    "backSec": "<strong>ഉത്തരം:</strong> 5% [0.05 × 100]<br>0.05 × 100 = 5%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If 40% of a number is 80, what is 30% of that number?",
    "titleSec": "ഒരു സംഖ്യയുടെ 40% എന്നത് 80 ആയാൽ ആ സംഖ്യയുടെ 30% എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 60 [Number is 200; 30% of 200 = 60]<br>Number = (80 / 40) × 100 = 200. 30% of 200 = 60.",
    "backSec": "<strong>ഉത്തരം:</strong> 60 [സംഖ്യ 200; 30% = 60]<br>സംഖ്യ = 200. 200-ന്റെ 30% = 60."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "In an election between two candidates, the winner got 60% of total votes and won by 1,000 votes. What was the total number of votes polled?",
    "titleSec": "രണ്ട് പേർ മത്സരിച്ച തെരഞ്ഞെടുപ്പിൽ വിജയിച്ചയാൾക്ക് 60% വോട്ട് ലഭിക്കുകയും 1,000 വോട്ടിന്റെ ഭൂരിപക്ഷത്തിൽ ജയിക്കുകയും ചെയ്തു. ആകെ പോൾ ചെയ്ത വോട്ടുകൾ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 5,000 votes [Majority 20% = 1000 => 100% = 5000]<br>Winner = 60%, Loser = 40%. Difference = 20% = 1,000 votes. Total votes = (1000 / 20) × 100 = 5,000 votes.",
    "backSec": "<strong>ഉത്തരം:</strong> 5,000 വോട്ട് [20% = 1000 => 100% = 5000]<br>ഭൂരിപക്ഷം 20% = 1,000 വോട്ട്. ആകെ വോട്ട് (100%) = (1000 / 20) × 100 = 5,000."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What percentage of 1 hour is 1 minute and 12 seconds?",
    "titleSec": "1 മണിക്കൂറിന്റെ എത്ര ശതമാനമാണ് 1 മിനിറ്റും 12 സെക്കൻഡും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> 2% [72 seconds / 3600 seconds × 100]<br>1 hr = 3600 sec. 1 min 12 sec = 60 + 12 = 72 sec. % = (72 / 3600) × 100 = 2%.",
    "backSec": "<strong>ഉത്തരം:</strong> 2% [72 / 3600 × 100 = 2%]<br>1 മണിക്കൂർ = 3600 സെക്കൻഡ്; 1 മിനിറ്റ് 12 സെക്കൻഡ് = 72 സെക്കൻഡ്. ശതമാനം = (72/3600) × 100 = 2%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Class X has 30 students with 24 passing in first class (80%). Class Y has 35 students with 28 passing in first class (80%). Which class has a higher first-class percentage?",
    "titleSec": "ക്ലാസ് X-ൽ 30-ൽ 24 പേരും, ക്ലാസ് Y-ൽ 35-ൽ 28 പേരും ഫസ്റ്റ് ക്ലാസ് നേടി. ഏത് ക്ലാസ്സിലാണ് ഫസ്റ്റ് ക്ലാസ് ശതമാനം കൂടുതൽ?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 10 · Percentage",
    "backEn": "<strong>Answer:</strong> Both classes have equal percentage (80%)<br>Class X: (24/30) × 100 = 80%. Class Y: (28/35) × 100 = 80%. Both classes have identical pass rates.",
    "backSec": "<strong>ഉത്തരം:</strong> രണ്ട് ക്ലാസ്സുകളിലും തുല്യ ശതമാനം (80%)<br>ക്ലാസ് X: (24/30) × 100 = 80%. ക്ലാസ് Y: (28/35) × 100 = 80%. രണ്ട് ക്ലാസ്സുകളിലും തുല്യമാണ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the average of scores: 253, 124, 255, 534, 836, 375, 101, 443, 760?",
    "titleSec": "253, 124, 255, 534, 836, 375, 101, 443, 760 എന്നീ സ്കോറുകളുടെ ശരാശരി എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 413 [Sum = 3,717; Avg = 3,717 / 9 = 413]<br>Sum of 9 scores = 253 + 124 + 255 + 534 + 836 + 375 + 101 + 443 + 760 = 3,717. Average = 3,717 / 9 = 413.",
    "backSec": "<strong>ഉത്തരം:</strong> 413 [തുക = 3,717; ശരാശരി = 3,717 / 9 = 413]<br>9 സ്കോറുകളുടെ തുക = 3,717. ശരാശരി = 3,717 / 9 = 413."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A businessman bought 30 TV sets for Rs. 300,000. If the average cost of 15 TV sets is Rs. 9,000, what is the average cost of the remaining 15 TV sets?",
    "titleSec": "ഒരു വ്യാപാരി 30 ടി.വികൾ 300,000 രൂപയ്ക്ക് വാങ്ങി. അതിൽ 15 ടി.വികളുടെ ശരാശരി വില 9,000 രൂപയായാൽ ബാക്കി 15 എണ്ണത്തിന്റെ ശരാശരി വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> Rs. 11,000 [(300000 - 135000) / 15 = 165000 / 15]<br>Cost of first 15 = 15 × 9,000 = Rs. 135,000. Remaining cost = 300,000 - 135,000 = Rs. 165,000. Avg = 165,000 / 15 = Rs. 11,000.",
    "backSec": "<strong>ഉത്തരം:</strong> 11,000 രൂപ [165,000 / 15 = 11,000]<br>ബാക്കി തുക = 300,000 - 135,000 = 165,000. ബാക്കിയുള്ളവയുടെ ശരാശരി = 165,000 / 15 = 11,000 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The mean marks obtained by 7 students is 226. If the marks of 6 of them are 340, 180, 260, 56, 275, and 307, what are the marks of the 7th student?",
    "titleSec": "7 വിദ്യാർത്ഥികളുടെ ശരാശരി മാർക്ക് 226 ആണ്. അതിൽ 6 പേരുടെ മാർക്കുകൾ 340, 180, 260, 56, 275, 307 എന്നിവയായാൽ ഏഴാമത്തെ ആളുടെ മാർക്ക് എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 164 [Total 7 × 226 = 1582; 1582 - 1418 = 164]<br>Total marks = 7 × 226 = 1,582. Sum of 6 students = 340 + 180 + 260 + 56 + 275 + 307 = 1,418. 7th student = 1,582 - 1,418 = 164.",
    "backSec": "<strong>ഉത്തരം:</strong> 164 [ആകെ = 1582; 1582 - 1418 = 164]<br>ആകെ മാർക്ക് = 1,582. 6 പേരുടെ തുക = 1,418. ഏഴാമന്റെ മാർക്ക് = 1,582 - 1,418 = 164."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A cricketer has an average of 60 runs in 10 innings. How many runs must he score in the next innings to achieve an average of 62?",
    "titleSec": "ഒരു ക്രിക്കറ്റ് താരത്തിന്റെ 10 ഇന്നിംഗ്സുകളിലെ ശരാശരി സ്കോർ 60 റൺസാണ്. ശരാശരി 62 ആക്കാൻ അടുത്ത ഇന്നിംഗ്സിൽ അദ്ദേഹം എത്ര റൺസ് നേടണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 82 runs [(11 × 62) - (10 × 60) = 682 - 600]<br>Total required = 11 × 62 = 682. Current total = 10 × 60 = 600. Runs needed = 682 - 600 = 82 runs.",
    "backSec": "<strong>ഉത്തരം:</strong> 82 റൺസ് [682 - 600 = 82]<br>ആവശ്യമായ റൺസ് = (11 × 62) - (10 × 60) = 682 - 600 = 82 റൺസ്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the average of 124, 856, 331, 227, 963, 338, 259, and 662?",
    "titleSec": "124, 856, 331, 227, 963, 338, 259, 662 എന്നീ 8 സംഖ്യകളുടെ ശരാശരി എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 470 [Sum = 3,760; 3760 / 8 = 470]<br>Sum of 8 observations = 3,760. Average = 3,760 / 8 = 470.",
    "backSec": "<strong>ഉത്തരം:</strong> 470 [തുക = 3,760; 3760 / 8 = 470]<br>ആകെ തുക = 3,760. ശരാശരി = 3,760 / 8 = 470."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is 20% of 150?",
    "titleSec": "150-ന്റെ 20% എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 30 [(20 / 100) × 150]<br>20% of 150 = (1/5) × 150 = 30.",
    "backSec": "<strong>ഉത്തരം:</strong> 30 [(20 / 100) × 150]<br>150-ന്റെ 20% = 30."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The ratio of boys to girls in a school of 720 students is 7 : 5. How many more girls must be admitted to make the ratio 1 : 1?",
    "titleSec": "720 കുട്ടികളുള്ള ഒരു സ്കൂളിൽ ആൺകുട്ടികളും പെൺകുട്ടികളും തമ്മിലുള്ള അനുപാതം 7 : 5 ആണ്. അനുപാതം 1 : 1 ആകാൻ എത്ര പെൺകുട്ടികളെ കൂടി ചേർക്കണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 120 girls [Boys = 420, Girls = 300; 420 - 300 = 120]<br>Boys = (7/12) × 720 = 420. Girls = (5/12) × 720 = 300. To make ratio 1:1, girls must equal boys (420). 420 - 300 = 120 more girls.",
    "backSec": "<strong>ഉത്തരം:</strong> 120 പെൺകുട്ടികൾ [420 - 300 = 120]<br>ആൺകുട്ടികൾ = 420, പെൺകുട്ടികൾ = 300. തുല്യമാകാൻ 420 - 300 = 120 പെൺകുട്ടികൾ കൂടി വേണം."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If 30% of a number is 120, what is the number?",
    "titleSec": "ഒരു സംഖ്യയുടെ 30% എന്നത് 120 ആയാൽ ആ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 400 [(120 / 30) × 100]<br>0.30 × N = 120 => N = 120 / 0.30 = 400.",
    "backSec": "<strong>ഉത്തരം:</strong> 400 [(120 / 30) × 100]<br>സംഖ്യ = (120 / 30) × 100 = 400."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If A : B = 3 : 4 and B : C = 8 : 9, what is A : C?",
    "titleSec": "A : B = 3 : 4, B : C = 8 : 9 ആയാൽ A : C എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 2 : 3 [(3/4) × (8/9) = 24/36 = 2/3]<br>A/C = (A/B) × (B/C) = (3/4) × (8/9) = 24 / 36 = 2/3.",
    "backSec": "<strong>ഉത്തരം:</strong> 2 : 3 [(3/4) × (8/9) = 2/3]<br>A/C = (3/4) × (8/9) = 2/3."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the average of first 5 multiples of 3?",
    "titleSec": "3-ന്റെ ആദ്യത്തെ 5 ഗുണിതങ്ങളുടെ ശരാശരി എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 9 [(3 + 6 + 9 + 12 + 15)/5 = 45/5]<br>Multiples are 3, 6, 9, 12, 15. Average = (3 + 15)/2 = 9.",
    "backSec": "<strong>ഉത്തരം:</strong> 9 [45/5 = 9]<br>ശരാശരി = (ആദ്യപദം + അവസാനപദം)/2 = (3 + 15)/2 = 9."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If a number x is 10% less than y and y is 10% more than 125, what is x?",
    "titleSec": "y എന്നത് 125-നേക്കാൾ 10% കൂടുതലും, x എന്നത് y യേക്കാൾ 10% കുറവുമാണെങ്കിൽ x എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 123.75 [y = 137.5; x = 137.5 - 13.75]<br>y = 125 × 1.10 = 137.5. x = 137.5 × 0.90 = 123.75.",
    "backSec": "<strong>ഉത്തരം:</strong> 123.75 [y = 137.5; x = 137.5 - 13.75]<br>y = 125 × 1.10 = 137.5. x = 137.5 × 0.90 = 123.75."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The ratio of two numbers is 5 : 8 and their difference is 48. What is the smaller number?",
    "titleSec": "രണ്ട് സംഖ്യകൾ 5 : 8 എന്ന അംശബന്ധത്തിലാണ്, അവയുടെ വ്യത്യാസം 48 ആണ്. ചെറിയ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 80 [3 parts = 48 => 1 part = 16; 5 × 16 = 80]<br>Difference = 8 - 5 = 3 parts = 48 => 1 part = 16. Smaller number = 5 × 16 = 80.",
    "backSec": "<strong>ഉത്തരം:</strong> 80 [3 ഭാഗം = 48 => 1 ഭാഗം = 16; 5 × 16 = 80]<br>വ്യത്യാസം 3 ഭാഗം = 48 => 1 ഭാഗം = 16. ചെറിയ സംഖ്യ = 5 × 16 = 80."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The average of 5 consecutive numbers is 18. What is the smallest of these numbers?",
    "titleSec": "തുടർച്ചയായ 5 സംഖ്യകളുടെ ശരാശരി 18 ആയാൽ അവയിൽ ഏറ്റവും ചെറിയ സംഖ്യ ഏതാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 16 [Middle is 18; numbers are 16, 17, 18, 19, 20]<br>In 5 consecutive numbers, average is the 3rd (middle) number = 18. First number = 18 - 2 = 16.",
    "backSec": "<strong>ഉത്തരം:</strong> 16 [നടുവിലെ സംഖ്യ 18; സംഖ്യകൾ 16, 17, 18, 19, 20]<br>ശരാശരി നടുവിലെ സംഖ്യയാണ് (18). ഏറ്റവും ചെറിയ സംഖ്യ = 18 - 2 = 16."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A student scored 80% on a 60-question test. How many questions did he answer correctly?",
    "titleSec": "60 ചോദ്യങ്ങളുള്ള ഒരു പരീക്ഷയിൽ 80% സ്കോർ നേടിയ വിദ്യാർത്ഥി എത്ര ചോദ്യങ്ങൾക്ക് ശരിയുത്തരം നൽകി?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 48 [0.80 × 60 = 48]<br>Correct answers = 60 × 0.80 = 48.",
    "backSec": "<strong>ഉത്തരം:</strong> 48 [0.80 × 60 = 48]<br>ശരിയുത്തരങ്ങൾ = 60 × 0.80 = 48."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the third proportional to 9 and 12?",
    "titleSec": "9, 12 എന്നീ സംഖ്യകളുടെ മൂന്നാം അനുപാതം (Third proportional) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Module 3 · Averages & Ratios Practice Question Bank",
    "backEn": "<strong>Answer:</strong> 16 [12² / 9 = 144 / 9]<br>9 : 12 :: 12 : x => 9x = 144 => x = 16.",
    "backSec": "<strong>ഉത്തരം:</strong> 16 [144 / 9 = 16]<br>9x = 12 × 12 = 144 => x = 16."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A cycle bought for Rs. 900 is sold for Rs. 1,080. What is the profit percentage?",
    "titleSec": "900 രൂപയ്ക്ക് വാങ്ങിയ സൈക്കിൾ 1,080 രൂപയ്ക്ക് വിറ്റാൽ ലാഭശതമാനം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> 20% [(180 / 900) × 100 = 20%]<br>Profit = 1080 - 900 = Rs. 180. Profit % = (180 / 900) × 100 = 20%.",
    "backSec": "<strong>ഉത്തരം:</strong> 20% [(180 / 900) × 100 = 20%]<br>ലാഭം = 1080 - 900 = 180 രൂപ. ലാഭശതമാനം = (180 / 900) × 100 = 20%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "By selling a watch for Rs. 1,440, a shopkeeper loses 10%. What was the cost price of the watch?",
    "titleSec": "ഒരു വാച്ച് 1,440 രൂപയ്ക്ക് വിറ്റപ്പോൾ 10% നഷ്ടം സംഭവിച്ചു. വാച്ചിന്റെ വാങ്ങിയ വില എത്രയായിരുന്നു?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> Rs. 1,600 [1440 × 100 / 90 = 1600]<br>CP = SP × 100 / (100 - Loss%) = 1440 × 100 / 90 = 16 × 100 = Rs. 1,600.",
    "backSec": "<strong>ഉത്തരം:</strong> 1,600 രൂപ [1440 × 100 / 90 = 1600]<br>വാങ്ങിയ വില = 1440 × 100 / 90 = 1,600 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A trader sells two cows for Rs. 4,000 each, gaining 20% on one and losing 20% on the other. What is his net gain or loss?",
    "titleSec": "രണ്ട് പശുക്കളെ 4,000 രൂപ വീതം വിറ്റപ്പോൾ ഒന്നിൽ 20% ലാഭവും മറ്റേതിൽ 20% നഷ്ടവും ഉണ്ടായി. ആകെ കച്ചവടത്തിൽ ലാഭമാണോ നഷ്ടമാണോ?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> 4% Loss [(20 / 10)² = 4% loss]<br>Equal SP with equal % gain and loss always yields a net loss of (x/10)² % = (20/10)² = 4% loss.",
    "backSec": "<strong>ഉത്തരം:</strong> 4% നഷ്ടം [(20/10)² = 4% നഷ്ടം]<br>വിറ്റവില തുല്യവും ലാഭനഷ്ട ശതമാനം തുല്യവുമായാൽ എപ്പോഴും നഷ്ടമായിരിക്കും: നഷ്ടം = (20/10)² = 4%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If cost price of 15 pens equals selling price of 12 pens, what is the profit percentage?",
    "titleSec": "15 പേനകളുടെ വാങ്ങിയ വില 12 പേനകളുടെ വിറ്റവിലയ്ക്ക് തുല്യമായാൽ ലാഭശതമാനം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> 25% [((15 - 12)/12) × 100 = (3/12) × 100]<br>Profit % = (Goods left / Goods sold) × 100 = (3 / 12) × 100 = 25%.",
    "backSec": "<strong>ഉത്തരം:</strong> 25% [(3/12) × 100 = 25%]<br>ലാഭശതമാനം = ((15 - 12) / 12) × 100 = (3/12) × 100 = 25%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A dishonest dealer claims to sell goods at cost price but uses a weight of 900 grams for a 1 kg weight. What is his gain percentage?",
    "titleSec": "ഒരു കച്ചവടക്കാരൻ വാങ്ങിയ വിലയ്ക്ക് സാധനം വിൽക്കുന്നുവെന്ന് അവകാശപ്പെടുകയും 1 കിലോഗ്രാമിന് പകരം 900 ഗ്രാം നൽകുകയും ചെയ്താൽ അയാളുടെ ലാഭശതമാനം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> 11 1/9% [(100 / 900) × 100 = 100 / 9]<br>Gain % = [Error / (True Value - Error)] × 100 = [100 / (1000 - 100)] × 100 = 100/900 × 100 = 11 1/9%.",
    "backSec": "<strong>ഉത്തരം:</strong> 11 1/9% [(100 / 900) × 100]<br>ലാഭം% = [100 / 900] × 100 = 11 1/9%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "By selling a chair for Rs. 572, a man gains 30%. What was the cost price of the chair?",
    "titleSec": "572 രൂപയ്ക്ക് ഒരു കസേര വിറ്റപ്പോൾ 30% ലാഭം ലഭിച്ചു. കസേരയുടെ വാങ്ങിയ വില എത്രയായിരുന്നു?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> Rs. 440 [572 × 100 / 130 = 440]<br>CP = 572 × 100 / 130 = 44 × 10 = Rs. 440.",
    "backSec": "<strong>ഉത്തരം:</strong> 440 രൂപ [572 × 100 / 130 = 440]<br>വാങ്ങിയ വില = 572 × 100 / 130 = 440 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the selling price of an article costing Rs. 250 sold at a profit of 12%?",
    "titleSec": "250 രൂപ വാങ്ങിയ വിലയുള്ള ഒരു സാധനം 12% ലാഭത്തിൽ വിറ്റാൽ വിറ്റവില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> Rs. 280 [250 + (12% of 250) = 250 + 30]<br>Profit = 12% of 250 = Rs. 30. SP = 250 + 30 = Rs. 280.",
    "backSec": "<strong>ഉത്തരം:</strong> 280 രൂപ [250 + 30 = 280]<br>ലാഭം = 250-ന്റെ 12% = 30 രൂപ. വിറ്റവില = 250 + 30 = 280 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "An article is sold at a loss of 20% for Rs. 480. What should be the selling price to earn a profit of 20%?",
    "titleSec": "ഒരു സാധനം 20% നഷ്ടത്തിൽ 480 രൂപയ്ക്ക് വിറ്റു. 20% ലാഭം ലഭിക്കണമെങ്കിൽ ഇത് എത്ര രൂപയ്ക്ക് വിൽക്കണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> Rs. 720 [CP = 600; SP = 600 × 1.20 = 720]<br>CP = 480 / 0.80 = Rs. 600. To gain 20%: New SP = 600 × 1.20 = Rs. 720.",
    "backSec": "<strong>ഉത്തരം:</strong> 720 രൂപ [വാങ്ങിയ വില = 600; വിറ്റവില = 720]<br>വാങ്ങിയ വില = 480 / 0.80 = 600 രൂപ. 20% ലാഭത്തിനുള്ള വിറ്റവില = 600 × 1.20 = 720 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If a man sells an article for Rs. 100 and loses Rs. 20, what is his loss percentage?",
    "titleSec": "ഒരാൾ ഒരു സാധനം 100 രൂപയ്ക്ക് വിറ്റപ്പോൾ 20 രൂപ നഷ്ടം സംഭവിച്ചു. നഷ്ടശതമാനം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> 16 2/3% [CP = 120; (20/120) × 100]<br>CP = SP + Loss = 100 + 20 = Rs. 120. Loss % = (20 / 120) × 100 = 100 / 6 = 16 2/3%.",
    "backSec": "<strong>ഉത്തരം:</strong> 16 2/3% [വാങ്ങിയ വില = 120; (20/120) × 100]<br>വാങ്ങിയ വില = 100 + 20 = 120 രൂപ. നഷ്ടം% = (20 / 120) × 100 = 16 2/3%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The cost price of an article is Rs. 80. What should be its selling price to gain 25%?",
    "titleSec": "80 രൂപ വാങ്ങിയ വിലയുള്ള ഒരു സാധനത്തിന് 25% ലാഭം ലഭിക്കാൻ എത്ര രൂപയ്ക്ക് വിൽക്കണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> Rs. 100 [80 + 20 = 100]<br>SP = 80 × 1.25 = Rs. 100.",
    "backSec": "<strong>ഉത്തരം:</strong> 100 രൂപ [80 + 20 = 100]<br>വിറ്റവില = 80 × 1.25 = 100 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A person buys an article for Rs. p and sells it for Rs. q. If he makes a profit, what is the profit percentage?",
    "titleSec": "p രൂപയ്ക്ക് വാങ്ങി q രൂപയ്ക്ക് വിറ്റപ്പോൾ ലാഭം ഉണ്ടായെങ്കിൽ ലാഭശതമാനം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> [(q - p) / p] × 100<br>Profit = q - p. Since profit % is on CP (p), formula is [(q - p) / p] × 100.",
    "backSec": "<strong>ഉത്തരം:</strong> [(q - p) / p] × 100<br>ലാഭം = q - p; വാങ്ങിയ വില p ആയതിനാൽ ലാഭശതമാനം = [(q - p) / p] × 100."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "By selling 33 metres of cloth, a merchant gains the selling price of 11 metres. What is his gain percentage?",
    "titleSec": "33 മീറ്റർ തുണി വിറ്റപ്പോൾ ഒരു വ്യാപാരിക്ക് 11 മീറ്ററിന്റെ വിറ്റവില ലാഭം ലഭിച്ചു. ലാഭശതമാനം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> 50% [Gain = 11; CP = 33 - 11 = 22; (11/22) × 100]<br>33 SP - 33 CP = 11 SP => 22 SP = 33 CP => SP/CP = 33/22 = 3/2. Gain % = (1/2) × 100 = 50%.",
    "backSec": "<strong>ഉത്തരം:</strong> 50% [ലാഭം = 11, CP = 22; (11/22) × 100 = 50%]<br>22 SP = 33 CP => ലാഭം = (3-2)/2 × 100 = 50%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If an article is sold at 200% profit, the ratio of its cost price to selling price is?",
    "titleSec": "ഒരു സാധനം 200% ലാഭത്തിൽ വിൽക്കുകയാണെങ്കിൽ അതിന്റെ വാങ്ങിയ വിലയും വിറ്റ വിലയും തമ്മിലുള്ള അനുപാതം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> 1 : 3 [CP = 100, SP = 300]<br>If CP = 100, Profit = 200, so SP = 300. Ratio CP : SP = 100 : 300 = 1 : 3.",
    "backSec": "<strong>ഉത്തരം:</strong> 1 : 3 [CP = 100, SP = 300]<br>CP = 100, ലാഭം = 200 => SP = 300. അനുപാതം = 100 : 300 = 1 : 3."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A book was bought for Rs. 50 and sold for Rs. 60. Find the profit percentage?",
    "titleSec": "50 രൂപയ്ക്ക് വാങ്ങിയ പുസ്തകം 60 രൂപയ്ക്ക് വിറ്റാൽ ലാഭശതമാനം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> 20% [(10 / 50) × 100]<br>Profit = 60 - 50 = Rs. 10. Profit % = (10 / 50) × 100 = 20%.",
    "backSec": "<strong>ഉത്തരം:</strong> 20% [(10 / 50) × 100]<br>ലാഭം = 10 രൂപ. ലാഭം% = (10/50) × 100 = 20%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold to gain 15%?",
    "titleSec": "ഒരു സ്ഥലം 18,700 രൂപയ്ക്ക് വിറ്റപ്പോൾ 15% നഷ്ടം സംഭവിച്ചു. 15% ലാഭം ലഭിക്കാൻ ഇത് എത്ര രൂപയ്ക്ക് വിൽക്കണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 11 · Profit & Loss",
    "backEn": "<strong>Answer:</strong> Rs. 25,300 [CP = 22,000; 22000 × 1.15 = 25300]<br>85% = 18,700 => CP = 18,700 / 0.85 = Rs. 22,000. 115% SP = 22,000 × 1.15 = Rs. 25,300.",
    "backSec": "<strong>ഉത്തരം:</strong> 25,300 രൂപ [വാങ്ങിയ വില = 22,000; 22000 × 1.15 = 25300]<br>വാങ്ങിയ വില = 18,700 / 0.85 = 22,000 രൂപ. 15% ലാഭത്തിനുള്ള വിറ്റവില = 22,000 × 1.15 = 25,300 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the single discount equivalent to two successive discounts of 20% and 10%?",
    "titleSec": "20%, 10% എന്നീ തുടർച്ചയായ ഡിസ്കൗണ്ടുകൾക്ക് തുല്യമായ ഒറ്റ ഡിസ്കൗണ്ട് എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> 28% [20 + 10 - (20 × 10)/100 = 30 - 2]<br>Equivalent single discount = d1 + d2 - (d1 × d2)/100 = 20 + 10 - 2 = 28%.",
    "backSec": "<strong>ഉത്തരം:</strong> 28% [30 - 2 = 28%]<br>ഒറ്റ ഡിസ്കൗണ്ട് = 20 + 10 - (200/100) = 28%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The marked price of a shirt is Rs. 500 and it is sold for Rs. 425. What is the discount percentage?",
    "titleSec": "500 രൂപ രേഖപ്പെടുത്തിയ കുപ്പായം 425 രൂപയ്ക്ക് വിറ്റാൽ ഡിസ്കൗണ്ട് ശതമാനം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> 15% [(75 / 500) × 100]<br>Discount = 500 - 425 = Rs. 75. Discount % = (75 / 500) × 100 = 15%.",
    "backSec": "<strong>ഉത്തരം:</strong> 15% [(75 / 500) × 100]<br>ഡിസ്കൗണ്ട് = 500 - 425 = 75 രൂപ. ഡിസ്കൗണ്ട്% = (75/500) × 100 = 15%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the selling price of an item marked at Rs. 800 after a discount of 15%?",
    "titleSec": "800 രൂപ രേഖപ്പെടുത്തിയ സാധനത്തിന് 15% ഡിസ്കൗണ്ട് നൽകിയാൽ വിറ്റവില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> Rs. 680 [800 - 15% of 800 = 800 - 120]<br>Discount = 15% of 800 = Rs. 120. SP = 800 - 120 = Rs. 680.",
    "backSec": "<strong>ഉത്തരം:</strong> 680 രൂപ [800 - 120 = 680]<br>ഡിസ്കൗണ്ട് = 800-ന്റെ 15% = 120 രൂപ. വിറ്റവില = 800 - 120 = 680 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Successive discounts of 10% and 10% are equivalent to a single discount of?",
    "titleSec": "10%, 10% എന്നീ തുടർച്ചയായ ഡിസ്കൗണ്ടുകൾക്ക് തുല്യമായ ഒറ്റ ഡിസ്കൗണ്ട് എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> 19% [10 + 10 - 1 = 19%]<br>10 + 10 - (10 × 10)/100 = 20 - 1 = 19%.",
    "backSec": "<strong>ഉത്തരം:</strong> 19% [10 + 10 - 1 = 19%]<br>10 + 10 - (100/100) = 20 - 1 = 19%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A trader marks goods 20% above cost price and allows a 10% discount. What is his profit percentage?",
    "titleSec": "ഒരു വ്യാപാരി വാങ്ങിയ വിലയേക്കാൾ 20% കൂട്ടി രേഖപ്പെടുത്തുകയും 10% ഡിസ്കൗണ്ട് നൽകുകയും ചെയ്താൽ ലാഭശതമാനം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> 8% [CP = 100, MP = 120; SP = 120 - 12 = 108]<br>Let CP = 100 => MP = 120. Discount 10% of 120 = Rs. 12. SP = 120 - 12 = 108. Profit = 8%.",
    "backSec": "<strong>ഉത്തരം:</strong> 8% [CP = 100, MP = 120, SP = 108]<br>CP = 100 ആയാൽ MP = 120. ഡിസ്കൗണ്ട് = 12 രൂപ. SP = 108 രൂപ => ലാഭം = 8%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find marked price of an article sold for Rs. 360 after a 10% discount?",
    "titleSec": "10% ഡിസ്കൗണ്ടിന് ശേഷം 360 രൂപയ്ക്ക് വിറ്റ സാധനത്തിന്റെ രേഖപ്പെടുത്തിയ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> Rs. 400 [360 × 100 / 90 = 400]<br>MP = SP / 0.90 = 360 / 0.90 = Rs. 400.",
    "backSec": "<strong>ഉത്തരം:</strong> 400 രൂപ [360 × 100 / 90 = 400]<br>രേഖപ്പെടുത്തിയ വില = 360 / 0.90 = 400 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the equivalent single discount for three successive discounts of 20%, 20%, and 10%?",
    "titleSec": "20%, 20%, 10% എന്നീ മൂന്ന് തുടർച്ചയായ ഡിസ്കൗണ്ടുകൾക്ക് തുല്യമായ ഒറ്റ ഡിസ്കൗണ്ട് എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> 42.4% [100 × 0.8 × 0.8 × 0.9 = 57.6; 100 - 57.6 = 42.4]<br>Final price = 100 × (1 - 0.20) × (1 - 0.20) × (1 - 0.10) = 100 × 0.8 × 0.8 × 0.9 = 57.6. Discount = 100 - 57.6 = 42.4%.",
    "backSec": "<strong>ഉത്തരം:</strong> 42.4% [100 - 57.6 = 42.4%]<br>ബാക്കി വില = 100 × 0.8 × 0.8 × 0.9 = 57.6. ഒറ്റ ഡിസ്കൗണ്ട് = 100 - 57.6 = 42.4%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Buy 3, Get 1 Free represents an effective discount of?",
    "titleSec": "'3 എണ്ണം വാങ്ങുമ്പോൾ 1 എണ്ണം സൗജന്യം' എന്നത് എത്ര ശതമാനം ഡിസ്കൗണ്ടിന് തുല്യമാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> 25% [1 free out of 4 total articles = (1/4) × 100]<br>Total articles received = 3 + 1 = 4. Free article = 1. Discount % = (1 / 4) × 100 = 25%.",
    "backSec": "<strong>ഉത്തരം:</strong> 25% [4 എണ്ണത്തിൽ 1 എണ്ണം സൗജന്യം = 25%]<br>ആകെ കിട്ടുന്നത് 4 എണ്ണം. സൗജന്യം 1 എണ്ണം. ഡിസ്കൗണ്ട്% = (1/4) × 100 = 25%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A dealer offers a cash discount of 5% on marked price of Rs. 2,000. How much does a cash buyer pay?",
    "titleSec": "2,000 രൂപ രേഖപ്പെടുത്തിയ സാധനത്തിന് 5% ക്യാഷ് ഡിസ്കൗണ്ട് നൽകിയാൽ ഉപഭോക്താവ് എത്ര രൂപ നൽകണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> Rs. 1,900 [2000 - 5% of 2000 = 2000 - 100]<br>Discount = 5% of 2000 = Rs. 100. Cash paid = 2000 - 100 = Rs. 1,900.",
    "backSec": "<strong>ഉത്തരം:</strong> 1,900 രൂപ [2000 - 100 = 1900]<br>ഡിസ്കൗണ്ട് = 100 രൂപ. അടയ്ക്കേണ്ട തുക = 2000 - 100 = 1,900 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If a discount of 20% on marked price brings selling price to Rs. 640, what was the marked price?",
    "titleSec": "20% ഡിസ്കൗണ്ട് നൽകിയപ്പോൾ വിറ്റവില 640 രൂപയായെങ്കിൽ രേഖപ്പെടുത്തിയ വില എത്രയായിരുന്നു?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> Rs. 800 [640 / 0.80 = 800]<br>MP = 640 / 0.80 = Rs. 800.",
    "backSec": "<strong>ഉത്തരം:</strong> 800 രൂപ [640 / 0.80 = 800]<br>രേഖപ്പെടുത്തിയ വില = 640 / 0.80 = 800 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Which offer is better for a customer: (A) A single discount of 30%, or (B) Two successive discounts of 20% and 10%?",
    "titleSec": "ഉപഭോക്താവിന് കൂടുതൽ ലാഭകരമായ ഓഫർ ഏതാണ്: (A) ഒറ്റ ഡിസ്കൗണ്ട് 30%, അതോ (B) തുടർച്ചയായ ഡിസ്കൗണ്ടുകൾ 20%, 10%?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> Offer A is better (30% > 28%)<br>Offer A = 30%. Offer B = 20 + 10 - 2 = 28%. The customer saves more with Offer A (30%).",
    "backSec": "<strong>ഉത്തരം:</strong> ഓഫർ A കൂടുതൽ ലാഭകരം (30% > 28%)<br>ഓഫർ A-യിൽ 30% ലാഭമുണ്ട്, ഓഫർ B-യിൽ 28% മാത്രം. അതിനാൽ ഓഫർ A ആണ് ഉപഭോക്താവിന് നല്ലത്."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "An item is marked at Rs. 100. After two successive discounts of 10% each, the selling price is?",
    "titleSec": "100 രൂപ രേഖപ്പെടുത്തിയ സാധനത്തിന് തുടർച്ചയായി 10% വീതം രണ്ട് തവണ ഡിസ്കൗണ്ട് നൽകിയാൽ വിറ്റവില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> Rs. 81 [100 × 0.9 × 0.9 = 81]<br>SP = 100 × (1 - 0.10)² = 100 × 0.81 = Rs. 81.",
    "backSec": "<strong>ഉത്തരം:</strong> 81 രൂപ [100 × 0.9 × 0.9 = 81]<br>വിറ്റവില = 100 × 0.9 × 0.9 = 81 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A shopkeeper allows a 25% discount on marked price and still makes a 20% profit. If the cost price is Rs. 100, what is the marked price?",
    "titleSec": "ഒരു വ്യാപാരി രേഖപ്പെടുത്തിയ വിലയിൽ 25% ഡിസ്കൗണ്ട് നൽകിയിട്ടും 20% ലാഭം ഉണ്ടാക്കുന്നു. വാങ്ങിയ വില 100 രൂപയാണെങ്കിൽ രേഖപ്പെടുത്തിയ വില എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> Rs. 160 [SP = 120; MP = 120 / 0.75 = 160]<br>SP = 100 + 20% of 100 = Rs. 120. MP × 0.75 = 120 => MP = 120 / 0.75 = Rs. 160.",
    "backSec": "<strong>ഉത്തരം:</strong> 160 രൂപ [SP = 120; MP = 120 / 0.75 = 160]<br>SP = 120 രൂപ. MP × 0.75 = 120 => രേഖപ്പെടുത്തിയ വില = 160 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the discount amount on an item marked at Rs. 1,500 with a 12% discount?",
    "titleSec": "1,500 രൂപ രേഖപ്പെടുത്തിയ സാധനത്തിന് 12% ഡിസ്കൗണ്ട് നൽകിയാൽ ഡിസ്കൗണ്ട് തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> Rs. 180 [(12 / 100) × 1500 = 12 × 15]<br>Discount = 1,500 × 0.12 = Rs. 180.",
    "backSec": "<strong>ഉത്തരം:</strong> 180 രൂപ [12 × 15 = 180]<br>ഡിസ്കൗണ്ട് തുക = 1,500 × 0.12 = 180 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If MP = Rs. 600 and Discount = Rs. 90, what is the discount rate?",
    "titleSec": "രേഖപ്പെടുത്തിയ വില 600 രൂപയും ഡിസ്കൗണ്ട് 90 രൂപയുമായാൽ ഡിസ്കൗണ്ട് നിരക്ക് എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 12 · Discount",
    "backEn": "<strong>Answer:</strong> 15% [(90 / 600) × 100 = 90 / 6]<br>(90 / 600) × 100 = 15%.",
    "backSec": "<strong>ഉത്തരം:</strong> 15% [90 / 6 = 15%]<br>(90 / 600) × 100 = 15%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the simple interest on Rs. 2,000 for 3 years at 5% per annum?",
    "titleSec": "2,000 രൂപയ്ക്ക് 5% വാർഷിക പലിശ നിരക്കിൽ 3 വർഷത്തെ സാധാരണ പലിശ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> Rs. 300 [(2000 × 5 × 3) / 100]<br>SI = (P × R × T) / 100 = (2000 × 5 × 3) / 100 = 20 × 15 = Rs. 300.",
    "backSec": "<strong>ഉത്തരം:</strong> 300 രൂപ [(2000 × 5 × 3) / 100]<br>SI = (2000 × 5 × 3) / 100 = 300 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "In how many years will a sum of money double itself at 10% simple interest per annum?",
    "titleSec": "10% സാധാരണ പലിശ നിരക്കിൽ ഒരു തുക ഇരട്ടിയാകാൻ എത്ര വർഷം വേണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> 10 years [T = 100 / R = 100 / 10]<br>To double, SI = P. P = (P × 10 × T) / 100 => T = 100 / 10 = 10 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 10 വർഷം [T = 100 / 10 = 10]<br>ഇരട്ടിയാകാൻ T = 100 / R = 100 / 10 = 10 വർഷം."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What principal will yield Rs. 120 as simple interest in 2 years at 6% per annum?",
    "titleSec": "6% വാർഷിക നിരക്കിൽ 2 വർഷം കൊണ്ട് 120 രൂപ പലിശ ലഭിക്കാൻ എത്ര രൂപ നിക്ഷേപിക്കണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> Rs. 1,000 [(120 × 100) / (6 × 2) = 12000 / 12]<br>P = (100 × SI) / (R × T) = (100 × 120) / (6 × 2) = 12,000 / 12 = Rs. 1,000.",
    "backSec": "<strong>ഉത്തരം:</strong> 1,000 രൂപ [(120 × 100) / 12]<br>മുതൽ P = (100 × 120) / (6 × 2) = 1,000 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "At what rate percent per annum will Rs. 500 amount to Rs. 600 in 2 years at simple interest?",
    "titleSec": "500 രൂപ നിക്ഷേപിച്ചത് 2 വർഷം കൊണ്ട് 600 രൂപയാകാൻ പലിശ നിരക്ക് എത്രയായിരിക്കണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> 10% [SI = 100; R = (100 × 100)/(500 × 2)]<br>SI = 600 - 500 = Rs. 100. Rate R = (100 × 100) / (500 × 2) = 10,000 / 1,000 = 10%.",
    "backSec": "<strong>ഉത്തരം:</strong> 10% [പലിശ = 100; R = 10000 / 1000 = 10%]<br>പലിശ = 100 രൂപ. നിരക്ക് R = (100 × 100) / (500 × 2) = 10%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the total maturity amount on Rs. 4,000 invested for 5 years at 8% per annum simple interest?",
    "titleSec": "4,000 രൂപയ്ക്ക് 8% വാർഷിക നിരക്കിൽ 5 വർഷത്തെ ആകെ തുക (Amount) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> Rs. 5,600 [SI = 1600; A = 4000 + 1600]<br>SI = (4000 × 8 × 5) / 100 = Rs. 1,600. Amount = 4000 + 1600 = Rs. 5,600.",
    "backSec": "<strong>ഉത്തരം:</strong> 5,600 രൂപ [പലിശ = 1600; ആകെ = 5600]<br>പലിശ = 1,600 രൂപ. ആകെ തുക = 4000 + 1600 = 5,600 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If a sum of money triples itself in 20 years at simple interest, what is the rate of interest per annum?",
    "titleSec": "ഒരു തുക 20 വർഷം കൊണ്ട് മൂന്നിരട്ടിയായാൽ വാർഷിക പലിശ നിരക്ക് എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> 10% [SI = 2P; R = 200 / 20 = 10%]<br>For sum to triple, SI = 2P. 2P = (P × R × 20) / 100 => R = 200 / 20 = 10%.",
    "backSec": "<strong>ഉത്തരം:</strong> 10% [R = 200 / 20 = 10%]<br>മൂന്നിരട്ടിയാകാൻ SI = 2P => R = 200 / 20 = 10%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the simple interest on Rs. 1,200 at 6% per annum for 6 months?",
    "titleSec": "1,200 രൂപയ്ക്ക് 6% വാർഷിക നിരക്കിൽ 6 മാസത്തെ സാധാരണ പലിശ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> Rs. 36 [T = 1/2 year; (1200 × 6 × 0.5) / 100]<br>T = 6/12 = 0.5 year. SI = (1200 × 6 × 0.5) / 100 = 12 × 3 = Rs. 36.",
    "backSec": "<strong>ഉത്തരം:</strong> 36 രൂപ [T = 1/2 വർഷം; പലിശ = 36]<br>സമയം = 1/2 വർഷം. പലിശ = (1200 × 6 × 0.5) / 100 = 36 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A sum of money lent at simple interest amounts to Rs. 880 in 2 years and Rs. 920 in 3 years. What is the principal?",
    "titleSec": "സാധാരണ പലിശയ്ക്ക് നൽകിയ തുക 2 വർഷം കൊണ്ട് 880 രൂപയും 3 വർഷം കൊണ്ട് 920 രൂപയുമായി. മുതൽ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> Rs. 800 [1 yr SI = 920 - 880 = 40; 2 yr SI = 80; P = 880 - 80]<br>Interest for 1 year = 920 - 880 = Rs. 40. Interest for 2 years = 2 × 40 = Rs. 80. Principal = 880 - 80 = Rs. 800.",
    "backSec": "<strong>ഉത്തരം:</strong> 800 രൂപ [1 വർഷത്തെ പലിശ = 40; മുതൽ = 880 - 80 = 800]<br>1 വർഷത്തെ പലിശ = 40 രൂപ. 2 വർഷത്തെ പലിശ = 80 രൂപ. മുതൽ = 880 - 80 = 800 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If simple interest on a certain sum for 3 years at 4% p.a. is Rs. 600, what is the sum?",
    "titleSec": "ഒരു നിശ്ചിത തുകയ്ക്ക് 4% വാർഷിക നിരക്കിൽ 3 വർഷത്തേക്ക് ലഭിച്ച സാധാരണ പലിശ 600 രൂപയായാൽ ആ തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> Rs. 5,000 [(600 × 100) / (4 × 3) = 60000 / 12]<br>P = (600 × 100) / (4 × 3) = 60,000 / 12 = Rs. 5,000.",
    "backSec": "<strong>ഉത്തരം:</strong> 5,000 രൂപ [60000 / 12 = 5000]<br>മുതൽ P = (600 × 100) / 12 = 5,000 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "At simple interest, a sum doubles in 8 years. In how many years will it become 4 times itself?",
    "titleSec": "സാധാരണ പലിശ നിരക്കിൽ ഒരു തുക 8 വർഷം കൊണ്ട് ഇരട്ടിയാകുന്നു. എങ്കിൽ ഇത് 4 ഇരട്ടിയാകാൻ എത്ര വർഷം വേണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> 24 years [To become 4x, SI = 3P; 3 × 8 = 24 yrs]<br>To double: SI = 1P takes 8 years. To become 4 times: SI = 3P. Time = 3 × 8 = 24 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 24 വർഷം [പലിശ 3 ഇരട്ടിയാകാൻ 3 × 8 = 24 വർഷം]<br>1 മടങ്ങ് പലിശയ്ക്ക് 8 വർഷം; 3 മടങ്ങ് പലിശയ്ക്ക് 3 × 8 = 24 വർഷം."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What will be the ratio of simple interest earned by certain amount at the same rate of interest for 6 years and that for 9 years?",
    "titleSec": "ഒരേ പലിശ നിരക്കിൽ 6 വർഷത്തേക്കും 9 വർഷത്തേക്കും ലഭിക്കുന്ന സാധാരണ പലിശകൾ തമ്മിലുള്ള അനുപാതം എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> 2 : 3 [6 : 9 = 2 : 3]<br>SI is directly proportional to time T: SI1 : SI2 = T1 : T2 = 6 : 9 = 2 : 3.",
    "backSec": "<strong>ഉത്തരം:</strong> 2 : 3 [6 : 9 = 2 : 3]<br>പലിശ സമയത്തിന് ആനുപാതികമാണ്: 6 : 9 = 2 : 3."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "How much simple interest will Rs. 10,000 earn in 1 year at 7.5% per annum?",
    "titleSec": "10,000 രൂപയ്ക്ക് 7.5% വാർഷിക നിരക്കിൽ 1 വർഷത്തെ സാധാരണ പലിശ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> Rs. 750<br>SI = 10,000 × 0.075 = Rs. 750.",
    "backSec": "<strong>ഉത്തരം:</strong> 750 രൂപ<br>SI = 10,000 × 0.075 = 750 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A borrowed Rs. 5,000 from B at 4% p.a. and lent it to C at 6% p.a. for 2 years. What is A's gain?",
    "titleSec": "A 5,000 രൂപ 4% നിരക്കിൽ വാങ്ങി C-യ്ക്ക് 6% നിരക്കിൽ 2 വർഷത്തേക്ക് നൽകിയാൽ A യുടെ ലാഭം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> Rs. 200 [(5000 × (6 - 4) × 2) / 100 = 50 × 4]<br>Gain per year = (6% - 4%) of 5,000 = Rs. 100. Gain for 2 years = Rs. 200.",
    "backSec": "<strong>ഉത്തരം:</strong> 200 രൂപ [പലിശ വ്യത്യാസം 2%; 50 × 4 = 200]<br>വർഷത്തിൽ 2% ലാഭം = 100 രൂപ. 2 വർഷത്തെ ലാഭം = 200 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The simple interest on Rs. 800 for 1 year is Rs. 40. What is the rate of interest?",
    "titleSec": "800 രൂപയ്ക്ക് 1 വർഷത്തേക്ക് ലഭിച്ച സാധാരണ പലിശ 40 രൂപയായാൽ പലിശ നിരക്ക് എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> 5% [(40 / 800) × 100]<br>Rate R = (100 × 40) / (800 × 1) = 4,000 / 800 = 5%.",
    "backSec": "<strong>ഉത്തരം:</strong> 5% [(40 / 800) × 100]<br>നിരക്ക് R = (40 / 800) × 100 = 5%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "In what time will Rs. 1,000 become Rs. 1,400 at 8% per annum simple interest?",
    "titleSec": "1,000 രൂപ 8% വാർഷിക നിരക്കിൽ 1,400 രൂപയാകാൻ എത്ര സമയം വേണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 13 · Simple Interest",
    "backEn": "<strong>Answer:</strong> 5 years [SI = 400; T = (100 × 400)/(1000 × 8)]<br>SI = 1,400 - 1,000 = Rs. 400. Time T = (100 × 400) / (1,000 × 8) = 40,000 / 8,000 = 5 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 5 വർഷം [T = 40000 / 8000 = 5]<br>പലിശ = 400. സമയം T = (100 × 400) / (1000 × 8) = 5 വർഷം."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the compound interest on Rs. 1,000 for 2 years at 10% per annum compounded annually?",
    "titleSec": "1,000 രൂപയ്ക്ക് 10% വാർഷിക നിരക്കിൽ 2 വർഷത്തെ വാർഷിക കൂട്ടുപലിശ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Rs. 210 [A = 1000 × (1.1)² = 1210; CI = 1210 - 1000]<br>A = 1000 × (1 + 10/100)² = 1000 × 1.21 = Rs. 1,210. CI = 1,210 - 1,000 = Rs. 210.",
    "backSec": "<strong>ഉത്തരം:</strong> 210 രൂപ [ആകെ = 1210; CI = 210]<br>A = 1000 × (1.1)² = 1,210. കൂട്ടുപലിശ = 1,210 - 1,000 = 210 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the difference between CI and SI on Rs. 5,000 for 2 years at 10% per annum?",
    "titleSec": "5,000 രൂപയ്ക്ക് 10% വാർഷിക നിരക്കിൽ 2 വർഷത്തെ കൂട്ടുപലിശയും സാധാരണ പലിശയും തമ്മിലുള്ള വ്യത്യാസം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Rs. 50 [D = P(R/100)² = 5000 × (10/100)² = 5000 × 0.01]<br>Difference for 2 years = P(R/100)² = 5000 × (1/10)² = 5000 / 100 = Rs. 50.",
    "backSec": "<strong>ഉത്തരം:</strong> 50 രൂപ [D = 5000 × 0.01 = 50]<br>2 വർഷത്തെ വ്യത്യാസം = P(R/100)² = 5000 × (1/100) = 50 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the compound interest on Rs. 10,000 for 1 year at 20% per annum compounded half-yearly?",
    "titleSec": "10,000 രൂപയ്ക്ക് 20% നിരക്കിൽ 1 വർഷത്തേക്ക് 6 മാസം കൂടുമ്പോൾ പലിശ കൂട്ടിയാൽ ലഭിക്കുന്ന കൂട്ടുപലിശ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Rs. 2,100 [R = 10%, n = 2; A = 10000 × (1.1)² = 12100]<br>Half-yearly: R = 20/2 = 10%, n = 1 × 2 = 2 periods. A = 10000 × 1.21 = Rs. 12,100. CI = Rs. 2,100.",
    "backSec": "<strong>ഉത്തരം:</strong> 2,100 രൂപ [R = 10%, n = 2; A = 12100; CI = 2100]<br>അർദ്ധവാർഷികം: നിരക്ക് = 10%, സമയം = 2. A = 12,100 രൂപ. CI = 2,100 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A sum of money doubles itself in 4 years at compound interest. In how many years will it become 8 times itself?",
    "titleSec": "കൂട്ടുപലിശ നിരക്കിൽ ഒരു തുക 4 വർഷം കൊണ്ട് ഇരട്ടിയാകുന്നുവെങ്കിൽ ഇത് 8 ഇരട്ടിയാകാൻ എത്ര വർഷം വേണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> 12 years [8 = 2³ => 3 × 4 = 12 years]<br>At CI, if a sum becomes 2 times in 4 years, it becomes 2³ = 8 times in 3 × 4 = 12 years.",
    "backSec": "<strong>ഉത്തരം:</strong> 12 വർഷം [8 = 2³ => 3 × 4 = 12 വർഷം]<br>കൂട്ടുപലിശയിൽ 2 ഇരട്ടിയാകാൻ 4 വർഷം; 8 ഇരട്ടി (2³) ആകാൻ 3 × 4 = 12 വർഷം."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "For 1 year at annual compounding, what is the difference between CI and SI?",
    "titleSec": "വാർഷിക കൂട്ടുപലിശയിൽ ആദ്യത്തെ 1 വർഷത്തേക്ക് കൂട്ടുപലിശയും സാധാരണ പലിശയും തമ്മിലുള്ള വ്യത്യാസം എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Zero (CI equals SI for first year)<br>In the first year under annual compounding, no interest has accumulated yet, so CI = SI and difference = 0.",
    "backSec": "<strong>ഉത്തരം:</strong> പൂജ്യം (ആദ്യ വർഷം രണ്ടും തുല്യമാണ്)<br>ആദ്യ വർഷം പലിശ മുതലിനോട് കൂട്ടുന്നില്ലാത്തതിനാൽ സാധാരണ പലിശയും കൂട്ടുപലിശയും തുല്യമാണ് (വ്യത്യാസം = 0)."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "The difference between CI and SI on a certain sum at 5% p.a. for 2 years is Rs. 15. What is the sum?",
    "titleSec": "5% വാർഷിക നിരക്കിൽ 2 വർഷത്തെ കൂട്ടുപലിശയും സാധാരണ പലിശയും തമ്മിലുള്ള വ്യത്യാസം 15 രൂപയായാൽ ആ തുക എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Rs. 6,000 [P = D / (R/100)² = 15 / (1/400) = 6000]<br>D = P(R/100)² => 15 = P(5/100)² = P(1/400) => P = 15 × 400 = Rs. 6,000.",
    "backSec": "<strong>ഉത്തരം:</strong> 6,000 രൂപ [P = 15 × 400 = 6000]<br>15 = P(5/100)² => 15 = P / 400 => P = 15 × 400 = 6,000 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "Find the amount of Rs. 8,000 for 3 years at 5% per annum compound interest?",
    "titleSec": "8,000 രൂപയ്ക്ക് 5% വാർഷിക നിരക്കിൽ 3 വർഷത്തെ കൂട്ടുപലിശ തിരിച്ചടവ് തുക (Amount) എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Rs. 9,261 [8000 × (21/20)³ = 8000 × 9261/8000]<br>A = 8000 × (1 + 5/100)³ = 8000 × (21/20)³ = 8000 × (9261 / 8000) = Rs. 9,261.",
    "backSec": "<strong>ഉത്തരം:</strong> 9,261 രൂപ [8000 × (21/20)³]<br>A = 8000 × (21/20)³ = 9,261 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "At what rate percent per annum will Rs. 2,000 amount to Rs. 2,420 in 2 years compounded annually?",
    "titleSec": "2,000 രൂപ 2 വർഷം കൊണ്ട് വാർഷിക കൂട്ടുപലിശ നിരക്കിൽ 2,420 രൂപയാകാൻ പലിശ നിരക്ക് എത്രയായിരിക്കണം?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> 10% [(1 + R/100)² = 2420/2000 = 1.21 => 1 + R/100 = 1.1]<br>(1 + R/100)² = 2420 / 2000 = 1.21. 1 + R/100 = √1.21 = 1.1 => R/100 = 0.1 => R = 10%.",
    "backSec": "<strong>ഉത്തരം:</strong> 10% [1 + R/100 = √1.21 = 1.1 => R = 10%]<br>(1 + R/100)² = 2420/2000 = 1.21 => 1 + R/100 = 1.1 => R = 10%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If interest is compounded quarterly, how many conversion periods are in 2 years?",
    "titleSec": "ത്രൈമാസികമായി (Quarterly) പലിശ കൂട്ടുമ്പോൾ 2 വർഷത്തിൽ എത്ര തവണ പലിശ കണക്കാക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> 8 periods [4 × 2 = 8]<br>Quarterly compounding occurs 4 times a year. In 2 years, conversion periods n = 4 × 2 = 8.",
    "backSec": "<strong>ഉത്തരം:</strong> 8 തവണ [4 × 2 = 8]<br>വർഷത്തിൽ 4 തവണ വീതം 2 വർഷത്തിൽ 8 തവണ പലിശ കണക്കാക്കും."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the compound interest on Rs. 6,400 for 2 years at 12.5% per annum?",
    "titleSec": "6,400 രൂപയ്ക്ക് 12.5% (1/8) വാർഷിക നിരക്കിൽ 2 വർഷത്തെ കൂട്ടുപലിശ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Rs. 1,700 [A = 6400 × (9/8)² = 6400 × 81/64 = 8100; CI = 1700]<br>12.5% = 1/8. A = 6400 × (1 + 1/8)² = 6400 × (81/64) = Rs. 8,100. CI = 8,100 - 6,400 = Rs. 1,700.",
    "backSec": "<strong>ഉത്തരം:</strong> 1,700 രൂപ [A = 8,100; CI = 1,700]<br>A = 6400 × (9/8)² = 8,100 രൂപ. CI = 8,100 - 6,400 = 1,700 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If simple interest on a sum for 2 years at 5% is Rs. 50, what will be the compound interest on the same sum at the same rate for the same time?",
    "titleSec": "2 വർഷത്തേക്ക് 5% നിരക്കിൽ സാധാരണ പലിശ 50 രൂപയായാൽ അതേ തുകയ്ക്ക് അതേ നിരക്കിലുള്ള കൂട്ടുപലിശ എത്രയായിരിക്കും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Rs. 51.25 [CI = SI + (SI × R) / 200 = 50 + (50 × 5)/200]<br>P = 50 / (2 × 0.05) = Rs. 500. CI for 2 yrs = 500 × [(1.05)² - 1] = 500 × 0.1025 = Rs. 51.25.",
    "backSec": "<strong>ഉത്തരം:</strong> 51.25 രൂപ [50 + 1.25 = 51.25]<br>മുതൽ = 500 രൂപ. കൂട്ടുപലിശ = 500 × 0.1025 = 51.25 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "A sum of Rs. 12,000 deposited at compound interest becomes double after 5 years. After 20 years, it will become?",
    "titleSec": "കൂട്ടുപലിശയ്ക്ക് നിക്ഷേപിച്ച 12,000 രൂപ 5 വർഷം കൊണ്ട് ഇരട്ടിയാകുന്നു. 20 വർഷത്തിന് ശേഷം ഇത് എത്ര രൂപയാകും?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Rs. 192,000 [20 yrs = 4 intervals => 12000 × 2⁴ = 12000 × 16]<br>20 years = 4 intervals of 5 years. The sum doubles 4 times: 12,000 × 2⁴ = 12,000 × 16 = Rs. 192,000.",
    "backSec": "<strong>ഉത്തരം:</strong> 192,000 രൂപ [12000 × 16 = 192,000]<br>20 വർഷം = 4 തവണ. തുക = 12,000 × 16 = 192,000 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the effective annual rate of interest corresponding to a nominal rate of 10% per annum compounded half-yearly?",
    "titleSec": "പ്രതിവർഷം 10% നിരക്കിൽ 6 മാസം കൂടുമ്പോൾ പലിശ കണക്കാക്കിയാൽ ഫലപ്രദമായ വാർഷിക പലിശ നിരക്ക് എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> 10.25% [(1 + 0.05)² - 1 = 1.1025 - 1]<br>Effective rate = (1 + 0.05)² - 1 = 1.1025 - 1 = 0.1025 = 10.25%.",
    "backSec": "<strong>ഉത്തരം:</strong> 10.25% [1.1025 - 1 = 10.25%]<br>ഫലപ്രദമായ നിരക്ക് = (1 + 0.05)² - 1 = 10.25%."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "What is the compound interest on Rs. 50,000 for 1 year at 8% per annum compounded semi-annually?",
    "titleSec": "50,000 രൂപയ്ക്ക് 8% വാർഷിക നിരക്കിൽ അർദ്ധവാർഷികമായി കണക്കാക്കിയാൽ 1 വർഷത്തെ കൂട്ടുപലിശ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Rs. 4,080 [50000 × ((1.04)² - 1) = 50000 × 0.0816]<br>Rate per half year = 4%. CI = 50,000 × [(1.04)² - 1] = 50,000 × 0.0816 = Rs. 4,080.",
    "backSec": "<strong>ഉത്തരം:</strong> 4,080 രൂപ [50000 × 0.0816 = 4080]<br>CI = 50,000 × 0.0816 = 4,080 രൂപ."
  },
  {
    "category": "mathematics",
    "subject": "Mathematics",
    "titleEn": "If CI on a certain sum for 2 years at 4% is Rs. 102, what is the simple interest on the same sum for the same period?",
    "titleSec": "4% നിരക്കിൽ 2 വർഷത്തെ കൂട്ടുപലിശ 102 രൂപയായാൽ അതേ തുകയ്ക്ക് അതേ നിരക്കിലുള്ള സാധാരണ പലിശ എത്രയാണ്?",
    "lang": "ml",
    "hint": "Numerical & Mathematical Skills · Mathematics · Chapter 14 · Compound Interest",
    "backEn": "<strong>Answer:</strong> Rs. 100 [P = 1250; SI = (1250 × 4 × 2)/100 = 100]<br>CI = P[(1.04)² - 1] = 0.0816 P = 102 => P = 102 / 0.0816 = Rs. 1,250. SI = (1250 × 4 × 2) / 100 = Rs. 100.",
    "backSec": "<strong>ഉത്തരം:</strong> 100 രൂപ [SI = 100]<br>മുതൽ = 1,250 രൂപ. സാധാരണ പലിശ SI = 100 രൂപ."
  },
  {
    "category": "arabic",
    "subject": "Arabic (ARA1FA102)",
    "titleEn": "What is the function of 'Huroof al-Jarr' (حروف الجر) in Arabic grammar?",
    "titleSec": "حروف الجر (Prepositions)",
    "lang": "ar",
    "hint": "Arabic Grammar · Parts of Speech",
    "backEn": "<strong>Answer:</strong> Prepositions (حروف الجr)<br>They precede nouns and put them into the genitive case (Majroor / مجرور) typically ending with a Kasrah (e.g., فِي, مِنْ, إِلَى, عَلَى).",
    "backSec": "അറബി വ്യാകരണത്തിലെ പ്രിപോസിഷനുകൾ (ഹറൂഫുൽ ജർറ്). ഇവയ്ക്ക് ശേഷം വരുന്ന നാമം മജ്റൂർ (Majroor) ആയിരിക്കും."
  },
  {
    "category": "arabic",
    "subject": "Arabic (ARA1FA102)",
    "titleEn": "What is the difference between 'Jumla Ismiyya' and 'Jumla Fi'liyya'?",
    "titleSec": "الجملة الاسمية والجملة الفعلية",
    "lang": "ar",
    "hint": "Arabic Sentence Structure",
    "backEn": "<strong>Answer:</strong> Nominal vs Verbal Sentence<br>Jumla Ismiyya (الجملة الاسمية) begins with a noun (Mubtada' + Khabar), whereas Jumla Fi'liyya (الجملة الفعلية) begins with a verb (Fi'l + Faa'il).",
    "backSec": "നാമത്തിൽ ആരംഭിക്കുന്ന വാക്യം 'ജുംല ഇസ്മിയ്യ' എന്നും, ക്രിയയിൽ ആരംഭിക്കുന്ന വാക്യം 'ജുംല ഫിഅ്‌ലിയ്യ' എന്നും അറിയപ്പെടുന്നു."
  },
  {
    "category": "arabic",
    "subject": "Arabic (ARA1FA102)",
    "titleEn": "How are the three grammatical cases in Arabic represented by short vowels (Harakat)?",
    "titleSec": "علامات الإعراب الأصلية",
    "lang": "ar",
    "hint": "Arabic Voweling & Syntax",
    "backEn": "<strong>Answer:</strong> Dammah, Fathah, Kasrah<br>Nominative (Marfoo') takes Dammah (ـُ); Accusative (Mansoor) takes Fathah (ـَ); Genitive (Majroor) takes Kasrah (ـِ).",
    "backSec": "മർഫൂഅ് (റഫ്അ്) - ദമ്മ, മൻസൂബ് (നസ്ബ്) - ഫത്ഹ, മജ്റൂർ (ജർറ്) - കസ്ര എന്നിവയാണ് മൂന്ന് പ്രധാന വ്യാകരണ വിഭക്തി അടയാളങ്ങൾ."
  },
  {
    "category": "arabic",
    "subject": "Arabic (ARA1FA102)",
    "titleEn": "What does the greeting 'Ahlan wa Sahlan' (أهلاً وسهلاً) literally signify?",
    "titleSec": "التحيات والترحيب",
    "lang": "ar",
    "hint": "Arabic Cultural Expressions & Greetings",
    "backEn": "<strong>Answer:</strong> Welcome ('You have come among family and on easy ground')<br>It comes from 'Halalta Ahlan wa Wati'ta Sahlan', warmly receiving a guest as family.",
    "backSec": "'സ്വാഗതം' എന്നർത്ഥം. കുടുംബാംഗത്തെപ്പോലെയും സുഗമമായ പാതയിലും നിങ്ങൾ എത്തിച്ചേർന്നിരിക്കുന്നു എന്ന ആതിഥ്യ മര്യാദയെ ഇത് സൂചിപ്പിക്കുന്നു."
  },
  {
    "category": "hindi",
    "subject": "Hindi (BA Hindi Sahitya)",
    "titleEn": "Who is regarded as the father of modern Hindi literature (आधुनिक हिंदी साहित्य के जनक)?",
    "titleSec": "आधुनिक हिंदी साहित्य",
    "lang": "hi",
    "hint": "Hindi Literature · Modern Period (आधुनिक काल)",
    "backEn": "<strong>Answer:</strong> Bharatendu Harishchandra (भारतेन्दु हरिश्चन्द्र)<br>He pioneered modern Hindi drama, journalism, and Khari Boli Hindi prose in the late 19th century.",
    "backSec": "ആധുനിക ഹിന്ദി സാഹിത്യത്തിന്റെ പിതാവായി ഭാരതേന്ദു ഹരിശ്ചന്ദ്രനെ കണക്കാക്കുന്നു. ആധുനിക ഗദ്യശാഖയ്ക്കും നാടകങ്ങൾക്കും അദ്ദേഹം തുടക്കം കുറിച്ചു."
  },
  {
    "category": "hindi",
    "subject": "Hindi (BA Hindi Sahitya)",
    "titleEn": "What are the four recognized pillars (चार स्तंभ) of Chhayavad (छायावाद) in Hindi poetry?",
    "titleSec": "छायावाद के चार स्तंभ",
    "lang": "hi",
    "hint": "Hindi Poetry · Chhayavadi Era",
    "backEn": "<strong>Answer:</strong> Prasad, Pant, Nirala, and Mahadevi Varma<br>Jaishankar Prasad, Sumitranandan Pant, Suryakant Tripathi 'Nirala', and Mahadevi Varma.",
    "backSec": "ജയശങ്കർ പ്രസാദ്, സുമിത്രാനന്ദൻ പന്ത്, സൂര്യകാന്ത് ത്രിപാഠി 'നിരാല', മഹാദേവി വർമ്മ എന്നിവരാണ് ഛായാവാദ കാവ്യപ്രസ്ഥാനത്തിന്റെ നാല് പ്രധാന സ്തംഭങ്ങൾ."
  },
  {
    "category": "hindi",
    "subject": "Hindi (BA Hindi Sahitya)",
    "titleEn": "Which monumental novel by Munshi Premchand portrays the socio-economic tragedy of Indian peasantry?",
    "titleSec": "उपन्यास सम्राट प्रेमचंद",
    "lang": "hi",
    "hint": "Hindi Fiction · Realism",
    "backEn": "<strong>Answer:</strong> Godan (गोदान - 1936)<br>Munshi Premchand's masterpiece follows the tragic peasant Hori and depicts rural exploitation, debt, and human dignity.",
    "backSec": "മുൻഷി പ്രേംചന്ദിന്റെ വിഖ്യാതമായ നോവലാണ് 'ഗോദാൻ' (1936). ഇന്ത്യൻ കർഷകന്റെ ദുരിതപൂർണ്ണമായ ജീവിതവും ചൂഷണവുമാണ് ഇതിന്റെ മുഖ്യപ്രമേയം."
  },
  {
    "category": "hindi",
    "subject": "Hindi (BA Hindi Sahitya)",
    "titleEn": "What is the standard literary dialect upon which Modern Standard Hindi is based?",
    "titleSec": "खड़ी बोली हिंदी",
    "lang": "hi",
    "hint": "Hindi Linguistics & Evolution",
    "backEn": "<strong>Answer:</strong> Khari Boli (खड़ी बोली)<br>Khari Boli (spoken originally around Delhi and Western UP) became the grammatical standard for modern prose and poetry.",
    "backSec": "ആധുനിക മാനക ഹിന്ദിയുടെ അടിസ്ഥാനം 'ഖഡീ ബോലി' (Khari Boli) എന്ന ഭാഷാ വകഭേദമാണ്."
  }
];

  // Master variants for generating Subject Cards
  const SUBJECT_PROMPT_VARIANTS = [
    {
      formatFront: (term) => `Core Question: ${term}`,
      formatHint: (subj) => `Core academic concept for ${subj}`,
      prefixBack: 'EXAM DEFINITION & CORE PRINCIPLE: '
    },
    {
      formatFront: (term) => `Exam Drill: What is the core theoretical significance of "${term}"?`,
      formatHint: (subj) => `Critical perspective required for degree examinations in ${subj}`,
      prefixBack: 'THEORETICAL ANALYSIS & TAKEAWAY: '
    },
    {
      formatFront: (term) => `Conceptual Recall: State the fundamental thesis of "${term}"`,
      formatHint: (subj) => `Core Reference Point for ${subj}`,
      prefixBack: 'KEY TAKEAWAYS & EVIDENCE: '
    },
    {
      formatFront: (term) => `Analytical Question: Explain the context and implications of "${term}"`,
      formatHint: (subj) => `Key Examination Concept for ${subj}`,
      prefixBack: 'COMPREHENSIVE EXPLANATION: '
    }
  ];

  function synthesizeSubjectCard(baseCard, seedIndex) {
    const template = SUBJECT_PROMPT_VARIANTS[seedIndex % SUBJECT_PROMPT_VARIANTS.length];
    return {
      category: baseCard.category,
      subject: baseCard.subject,
      titleEn: template.formatFront(baseCard.titleEn),
      titleSec: baseCard.titleSec,
      lang: baseCard.lang || 'ml',
      hint: template.formatHint(baseCard.subject),
      backEn: `<strong>${template.prefixBack}</strong><br>${baseCard.backEn}`,
      backSec: baseCard.backSec
    };
  }

  // =========================================================================
  // 2. ENGLISH LEARNING & GRAMMAR INFINITE SYNTHESIZER (10,000+ COMBINATIONS)
  // =========================================================================
  const GRAMMAR_SUBJECTS = [
    { s: 'The professor', p: 'The professors', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'The student', p: 'The students', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'The researcher', p: 'The researchers', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'The scholar', p: 'The scholars', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'The economist', p: 'The economists', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'The historian', p: 'The historians', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'The sociologist', p: 'The sociologists', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'The philosopher', p: 'The philosophers', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'The editor', p: 'The editors', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'The scientist', p: 'The scientists', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'She', p: 'They', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' },
    { s: 'He', p: 'They', vSing: 'has', vPlur: 'have', wasWereSing: 'was', wasWerePlur: 'were' }
  ];

  const GRAMMAR_VERBS = [
    { base: 'examine', past: 'examined', part: 'examined', ing: 'examining', mal: 'പരിശോധിക്കുക' },
    { base: 'analyze', past: 'analyzed', part: 'analyzed', ing: 'analyzing', mal: 'വിശകലനം ചെയ്യുക' },
    { base: 'investigate', past: 'investigated', part: 'investigated', ing: 'investigating', mal: 'അന്വേഷിക്കുക' },
    { base: 'review', past: 'reviewed', part: 'reviewed', ing: 'reviewing', mal: 'വിലയിരുത്തുക' },
    { base: 'critique', past: 'critiqued', part: 'critiqued', ing: 'critiquing', mal: 'വിമർശിക്കുക' },
    { base: 'publish', past: 'published', part: 'published', ing: 'publishing', mal: 'പ്രസിദ്ധീകരിക്കുക' },
    { base: 'demonstrate', past: 'demonstrated', part: 'demonstrated', ing: 'demonstrating', mal: 'വ്യക്തമാക്കുക' },
    { base: 'explore', past: 'explored', part: 'explored', ing: 'exploring', mal: 'കണ്ടെത്തുക' },
    { base: 'summarize', past: 'summarized', part: 'summarized', ing: 'summarizing', mal: 'സംഗ്രഹിക്കുക' },
    { base: 'evaluate', past: 'evaluated', part: 'evaluated', ing: 'evaluating', mal: 'മൂല്യനിർണ്ണയം നടത്തുക' }
  ];

  const GRAMMAR_OBJECTS = [
    'the sociological survey on poverty',
    'the economic development data',
    'the ancient Malayalam historical inscription',
    'the philosophical dialogue on mind and AI',
    'the ethical dilemmas in modern technology',
    'the microeconomic market equilibrium graphs',
    'the linguistic research paper on phonetics',
    'the educational theory treatise of Rousseau',
    'the comprehensive academic research findings',
    'the statistical analysis of Kerala trade networks'
  ];

  const TIME_ADVERBS = [
    'since last Monday', 'for three consecutive months', 'since 2018', 'for nearly a decade', 'since yesterday morning'
  ];

  function synthesizeGrammarCard(type, seedIndex) {
    const s = GRAMMAR_SUBJECTS[seedIndex % GRAMMAR_SUBJECTS.length];
    const v = GRAMMAR_VERBS[(seedIndex * 7) % GRAMMAR_VERBS.length];
    const o = GRAMMAR_OBJECTS[(seedIndex * 13) % GRAMMAR_OBJECTS.length];
    const t = TIME_ADVERBS[(seedIndex * 3) % TIME_ADVERBS.length];

    if (type === 'tenses') {
      return {
        type: 'tenses',
        title: `${s.s} _____ (${v.base}) ${o} ${t}.`,
        mal: 'മുൻപ് തുടങ്ങി ഇപ്പോഴും തുടരുന്ന പ്രവർത്തനത്തിന് ഏത് ടെൻസ്?',
        hint: `Choose: ${s.vSing} ${v.part} OR ${v.past}?`,
        answer: `${s.vSing} ${v.part}`,
        rule: `Use Present Perfect (${s.vSing}/${s.vPlur} + V3) for actions that began in the past and continue into the present with "since" or "for".`,
        ruleMl: `കഴിഞ്ഞ കാലത്ത് ആരംഭിച്ച് ഇപ്പോഴും തുടരുന്ന പ്രവർത്തനങ്ങൾക്ക് Present Perfect Tense (${s.vSing} ${v.part}) ഉപയോഗിക്കണം.`
      };
    } else if (type === 'voice') {
      return {
        type: 'voice',
        title: `Active: "${s.s} ${v.past} ${o} with utmost rigor."`,
        mal: 'കർമ്മം മുന്നിൽ വച്ച് പാസ്സീവ് വോയ്സ് ആക്കുക.',
        hint: `Start with "${o.charAt(0).toUpperCase() + o.slice(1)}" + was/were + V3...`,
        answer: `${o.charAt(0).toUpperCase() + o.slice(1)} was ${v.part} with utmost rigor by ${s.s.toLowerCase()}.`,
        rule: `In Simple Past passive voice, singular object takes "was + past participle (${v.part}) + by + agent".`,
        ruleMl: `Simple Past പാസ്സീവ് ആക്കുമ്പോൾ "was + ${v.part}" രൂപം ഉപയോഗിക്കുന്നു.`
      };
    } else if (type === 'speech') {
      return {
        type: 'speech',
        title: `Direct: ${s.s} said, "I have ${v.part} ${o} today."`,
        mal: 'പരോക്ഷ പ്രസ്താവനയാക്കി മാറ്റുക (Indirect Speech).',
        hint: `Check changes for: have ${v.part} -> had ${v.part}, today -> that day.`,
        answer: `${s.s} said that they had ${v.part} ${o} that day.`,
        rule: `Tense shifts from Present Perfect to Past Perfect ("have/has ${v.part}" -> "had ${v.part}"), and "today" becomes "that day".`,
        ruleMl: 'റിപ്പോർട്ടിംഗ് വെർബ് ഭൂതകാലമാകുമ്പോൾ Present Perfect എന്നത് Past Perfect ആവുകയും "today" എന്നത് "that day" ആയി മാറുകയും ചെയ്യുന്നു.'
      };
    } else if (type === 'agreement') {
      return {
        type: 'agreement',
        title: `Neither ${s.s.toLowerCase()} nor ${s.p.toLowerCase()} _____ satisfied with ${o}.`,
        mal: '"Neither... nor" വരുമ്പോൾ ക്രിയ ഏതിനെ ആശ്രയിക്കുന്നു?',
        hint: `Choose: ${s.wasWereSing} OR ${s.wasWerePlur}?`,
        answer: `${s.wasWerePlur} satisfied`,
        rule: `When subjects are joined by "neither... nor", the verb agrees with the subject closest to it ("${s.p}" is plural, hence "${s.wasWerePlur}").`,
        ruleMl: '"Neither... nor" വരുമ്പോൾ വെർബിന് ഏറ്റവും അടുത്ത് നിൽക്കുന്ന സബ്ജക്ടിന് അനുസരിച്ചാണ് ക്രിയ വരുന്നത്.'
      };
    } else if (type === 'prepositions') {
      const prepPairs = [
        { adj: 'interested in', err: 'interested for', mal: '"interested" നൊപ്പം "in" വരുന്നു' },
        { adj: 'proficient in', err: 'proficient at', mal: '"proficient" നൊപ്പം "in" വരുന്നു' },
        { adj: 'capable of', err: 'capable to', mal: '"capable" നൊപ്പം "of" വരുന്നു' },
        { adj: 'accustomed to', err: 'accustomed with', mal: '"accustomed" നൊപ്പം "to" വരുന്നു' },
        { adj: 'dedicated to', err: 'dedicated for', mal: '"dedicated" നൊപ്പം "to" വരുന്നു' }
      ];
      const pPair = prepPairs[seedIndex % prepPairs.length];
      return {
        type: 'prepositions',
        title: `${s.s} is remarkably _____ ${o}.`,
        mal: `${pPair.mal}`,
        hint: `Choose: ${pPair.adj} OR ${pPair.err}?`,
        answer: `${pPair.adj}`,
        rule: `The correct dependent preposition phrase is "${pPair.adj}".`,
        ruleMl: `${pPair.mal}. പ്രിപോസിഷൻ മാറ്റം തെറ്റായ അർത്ഥം നൽകും.`
      };
    } else {
      return {
        type: 'errors',
        title: `Identify Error: "${s.s} along with ${s.p.toLowerCase()} are investigating ${o}."`,
        mal: '"Along with" വരുമ്പോഴുള്ള സബ്ജക്ട്-വെർബ് തെറ്റ് കണ്ടെത്തുക.',
        hint: 'Does "along with" change the grammatical subject number?',
        answer: `Change "are investigating" to "is investigating"`,
        rule: `Parenthetical phrases like "along with", "as well as", and "in addition to" do not alter the number of the subject ("${s.s}" is singular, so singular verb "is" is mandatory).`,
        ruleMl: '"along with" വരുന്ന വാക്യങ്ങളിൽ ആദ്യ സബ്ജക്ടിന് (singular) അനുസരിച്ചാണ് ക്രിയ വരേണ്ടത് (is investigating).'
      };
    }
  }

  // =========================================================================
  // 3. INITIALIZATION & CONTROLLERS (RANDOM ON VISIT & CLICK)
  // =========================================================================
  function initActiveRecallHub() {
    // 1. Hide card numbers via injected styles
    let hideStyle = document.getElementById('hide-card-numbers-style');
    if (!hideStyle) {
      hideStyle = document.createElement('style');
      hideStyle.id = 'hide-card-numbers-style';
      hideStyle.textContent = `
        .flashcard-counter,
        #soc-card-counter,
        #eng-card-counter {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `;
      document.head.appendChild(hideStyle);
    }

    const socFilter = document.getElementById('subject-filter');
    const engFilter = document.getElementById('grammar-type-filter');

    // -----------------------------------------------------------------------
    // DECK 1: SUBJECTS & LANGUAGES CONTROLLER (CURATED ACTIVE RECALL CARDS)
    // -----------------------------------------------------------------------
    let currentSocCategory = socFilter ? socFilter.value : 'all';
    
    function getFilteredSubjectCards() {
      if (currentSocCategory === 'all') return LMS_PDF_CARDS;
      const res = LMS_PDF_CARDS.filter(c => c.category === currentSocCategory);
      return res.length > 0 ? res : LMS_PDF_CARDS;
    }

    // Pick a random question index on every visit
    let currentSocPool = getFilteredSubjectCards();
    let socIndex = Math.floor(Math.random() * currentSocPool.length);

    const socBox = document.getElementById('soc-flashcard-box');
    const socTag = document.getElementById('soc-card-subject');
    const socTitle = document.getElementById('soc-card-front-title');
    const socSec = document.getElementById('soc-card-front-mal');
    const socHint = document.getElementById('soc-card-front-hint');
    const socBackEn = document.getElementById('soc-card-back-en');
    const socBackSec = document.getElementById('soc-card-back-ml');
    const socPrev = document.getElementById('soc-prev-card');
    const socNext = document.getElementById('soc-next-card');
    const socFlip = document.getElementById('soc-flip-card-btn');

    function renderSocCard(idx) {
      if (!socBox) return;
      socBox.classList.remove('flipped');
      const pool = currentSocPool;
      if (!pool || pool.length === 0) return;

      const safeIdx = ((idx % pool.length) + pool.length) % pool.length;
      const c = pool[safeIdx];
      if (!c) return;

      if (socTag) socTag.textContent = c.subject;
      if (socTitle) socTitle.textContent = c.titleEn;
      if (socSec) {
        socSec.textContent = c.titleSec || '';
        socSec.setAttribute('lang', c.lang || 'ml');
      }
      if (socHint) socHint.textContent = c.hint || '';
      if (socBackEn) socBackEn.innerHTML = c.backEn || '';
      if (socBackSec) {
        socBackSec.innerHTML = c.backSec || '';
        socBackSec.setAttribute('lang', c.lang || 'ml');
      }
    }

    function pickRandomSocCard() {
      const pool = currentSocPool;
      if (pool.length <= 1) {
        renderSocCard(0);
        return;
      }
      let nextIdx = Math.floor(Math.random() * pool.length);
      if (nextIdx === socIndex) nextIdx = (nextIdx + 1) % pool.length;
      socIndex = nextIdx;
      renderSocCard(socIndex);
    }

    function toggleSocFlip() {
      if (socBox) socBox.classList.toggle('flipped');
    }

    if (socBox) {
      socBox.onclick = toggleSocFlip;
      socBox.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSocFlip();
        }
      };
    }
    if (socFlip) socFlip.onclick = toggleSocFlip;

    // On clicking Prev / Next: always show a random question!
    if (socPrev) socPrev.onclick = pickRandomSocCard;
    if (socNext) socNext.onclick = pickRandomSocCard;

    if (socFilter) {
      socFilter.onchange = (e) => {
        currentSocCategory = e.target.value;
        currentSocPool = getFilteredSubjectCards();
        pickRandomSocCard();
      };
    }

    // Initial random render on visit
    renderSocCard(socIndex);

    // -----------------------------------------------------------------------
    // DECK 2: ENGLISH LEARNING & GRAMMAR CONTROLLER (10,000+ RANDOM QUESTIONS)
    // -----------------------------------------------------------------------
    const GRAMMAR_TYPES = ['tenses', 'voice', 'speech', 'prepositions', 'agreement', 'errors'];
    let currentEngType = engFilter ? engFilter.value : 'all';

    // Start with a completely random question on visit (0 to 10,000)
    let engSeed = Math.floor(Math.random() * 10000);

    const engBox = document.getElementById('eng-flashcard-box');
    const engTitle = document.getElementById('eng-card-front-title');
    const engMal = document.getElementById('eng-card-front-mal');
    const engHint = document.getElementById('eng-card-front-hint');
    const engBackEn = document.getElementById('eng-card-back-en');
    const engBackMl = document.getElementById('eng-card-back-ml');
    const engPrev = document.getElementById('eng-prev-card');
    const engNext = document.getElementById('eng-next-card');
    const engFlip = document.getElementById('eng-flip-card-btn');

    function renderEngCard(seed) {
      if (!engBox) return;
      engBox.classList.remove('flipped');
      const targetType = currentEngType === 'all' 
        ? GRAMMAR_TYPES[seed % GRAMMAR_TYPES.length] 
        : currentEngType;

      const c = synthesizeGrammarCard(targetType, seed);
      if (!c) return;

      if (engTitle) engTitle.textContent = c.title;
      if (engMal) engMal.textContent = c.mal || '';
      if (engHint) engHint.textContent = c.hint || '';
      if (engBackEn) engBackEn.innerHTML = '<strong>Answer: ' + c.answer + '</strong><br>' + c.rule;
      if (engBackMl) engBackMl.textContent = c.ruleMl || '';
    }

    function pickRandomEngCard() {
      let nextSeed = Math.floor(Math.random() * 10000);
      if (nextSeed === engSeed) nextSeed = (nextSeed + 79) % 10000;
      engSeed = nextSeed;
      renderEngCard(engSeed);
    }

    function toggleEngFlip() {
      if (engBox) engBox.classList.toggle('flipped');
    }

    if (engBox) {
      engBox.onclick = toggleEngFlip;
      engBox.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleEngFlip();
        }
      };
    }
    if (engFlip) engFlip.onclick = toggleEngFlip;

    if (engPrev) engPrev.onclick = pickRandomEngCard;
    if (engNext) engNext.onclick = pickRandomEngCard;

    if (engFilter) {
      engFilter.onchange = (e) => {
        currentEngType = e.target.value;
        pickRandomEngCard();
      };
    }

    // Initial random render on visit
    renderEngCard(engSeed);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initActiveRecallHub);
  } else {
    initActiveRecallHub();
  }
})();

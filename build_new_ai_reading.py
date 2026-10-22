# -*- coding: utf-8 -*-
import json

chapters = [
    # Module 1 (3 Chapters)
    {
        "mod": "mod1", "num": "01", "ch_num": 1,
        "title_ml": "അധ്യായം 1: നിർമ്മിത ബുദ്ധിയുടെ ചരിത്രവും അടിത്തറയും",
        "title_en": "History and Foundations of Artificial Intelligence",
        "desc": "ഗ്രീക്ക് തത്ത്വചിന്തയും ലൈബ്നിസിന്റെ ലോജിക്കും മുതൽ ഡാർട്ട്മൗത്ത് കോൺഫറൻസും ആധുനിക കമ്പ്യൂട്ടേഷൻ മാതൃകകളും വരെയുള്ള വികാസം.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_1_Malayalam.pdf"
    },
    {
        "mod": "mod1", "num": "02", "ch_num": 2,
        "title_ml": "അധ്യായം 2: ഒരു യന്ത്രത്തിന് ചിന്തിക്കാൻ കഴിയുമോ? (ട്യൂറിംഗ് ടെസ്റ്റും ചർച്ച് തീസിസും)",
        "title_en": "Can a Machine Think? (The Turing Test & Church's Thesis)",
        "desc": "അലൻ ട്യൂറിംഗിന്റെ 1950-ലെ പ്രബന്ധം, ഇമിറ്റേഷൻ ഗെയിം, യന്ത്രചിന്തയെക്കുറിച്ചുള്ള വാദങ്ങളും ചർച്ച് തീസിസും.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_2_Malayalam.pdf"
    },
    {
        "mod": "mod1", "num": "03", "ch_num": 3,
        "title_ml": "അധ്യായം 3: നിർമ്മിത ബുദ്ധിയുടെ വെളിച്ചത്തിൽ തത്ത്വചിന്ത",
        "title_en": "Philosophy in the Light of AI",
        "desc": "തത്ത്വചിന്തയും കമ്പ്യൂട്ടിംഗും തമ്മിലുള്ള പാരസ്പര്യം, ബോധം, ദെക്കാർത്തെ, സ്പിനോസയുടെ ജ്ഞാന തലങ്ങൾ എന്നിവയെക്കുറിച്ചുള്ള വിശകലനം.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_3_Malayalam.pdf"
    },

    # Module 2 (5 Chapters)
    {
        "mod": "mod2", "num": "04", "ch_num": 4,
        "title_ml": "അധ്യായം 4: ക്ലാസിക്കൽ AI മാതൃകയിലെ പ്രശ്നങ്ങൾ (GOFAI)",
        "title_en": "Problems in the Classical Model of AI (GOFAI)",
        "desc": "ക്ലാസിക്കൽ സിംബോളിക് AI, സിംബൽ മാനിപുലേഷൻ, ഫ്രെയിം പ്രോബ്ലം, യഥാർത്ഥ ലോകത്തിലെ പരിമിതികൾ.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_4_Malayalam.pdf"
    },
    {
        "mod": "mod2", "num": "05", "ch_num": 5,
        "title_ml": "അധ്യായം 5: അലൻ ട്യൂറിംഗ് ടെസ്റ്റും പ്രവർത്തന പരിമിതികളും",
        "title_en": "Alan Turing Test & Operational Limits",
        "desc": "പ്രവർത്തനപരമായ ബുദ്ധിയും യഥാർത്ഥ ബോധവും, ട്യൂറിംഗ് ടെസ്റ്റിനെതിരെയുള്ള ഒൻപത് പ്രധാന വിമർശനങ്ങൾ.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_5_Malayalam.pdf"
    },
    {
        "mod": "mod2", "num": "06", "ch_num": 6,
        "title_ml": "അധ്യായം 6: ചൈനീസ് റൂം പരീക്ഷണം (ജോൺ സിയൾ 1980)",
        "title_en": "Chinese Room Experiment (John Searle 1980)",
        "desc": "ജോൺ സിയളിന്റെ പ്രശസ്തമായ ചിന്താപരീക്ഷണം: സിന്റാക്സ് എന്നത് സെമാന്റിക്സ് അല്ല, സ്ട്രോങ് AI-ക്കെതിരെയുള്ള വാദങ്ങൾ.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_6_Malayalam.pdf"
    },
    {
        "mod": "mod2", "num": "07", "ch_num": 7,
        "title_ml": "അധ്യായം 7: ദെക്കാർത്തെയും മനസ്സിന്റെ തത്ത്വചിന്തയും (ഡ്യുവലിസം)",
        "title_en": "Descartes & Philosophy of Mind (Substance Dualism)",
        "desc": "റെനെ ദെക്കാർത്തെ, മനസ്സ്-ശരീര ദ്വൈതവാദം (Dualism), ചിന്തിക്കുന്ന വസ്തുവും ഭൗതിക വസ്തുവും.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_7_Malayalam.pdf"
    },
    {
        "mod": "mod2", "num": "08", "ch_num": 8,
        "title_ml": "അധ്യായം 8: ശരീരരഹിതമായ ബുദ്ധി (Disembodied Intelligence)",
        "title_en": "Disembodied Intelligence",
        "desc": "ശരീരമില്ലാതെ കേവല അൽഗോരിതങ്ങൾക്ക് ബോധം സാധ്യമാണോ എന്ന അന്വേഷണവും എംബോഡിഡ് കോഗ്നിഷൻ സിദ്ധാന്തവും.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_8_Malayalam.pdf"
    },

    # Module 3 (5 Chapters)
    {
        "mod": "mod3", "num": "09", "ch_num": 9,
        "title_ml": "അധ്യായം 9: ബൗദ്ധ ജ്ഞാനമീമാംസ (Buddhism Epistemology)",
        "title_en": "Buddhism Epistemology",
        "desc": "പ്രത്യക്ഷവും അനുമാനവും, പ്രതീത്യസമുത്പാദം, അനാത്മവാദം, നിർമ്മിതബുദ്ധിയിലെ ജ്ഞാന രൂപീകരണം.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_9_Malayalam.pdf"
    },
    {
        "mod": "mod3", "num": "10", "ch_num": 10,
        "title_ml": "അധ്യായം 10: ന്യായ ജ്ഞാനമീമാംസയും വിജ്ഞാന പ്രാതിനിധ്യവും",
        "title_en": "Nyaya Epistemology & Knowledge Representation",
        "desc": "ന്യായ ദർശനത്തിലെ നാല് പ്രമാണങ്ങൾ, യുക്തിസഹമായ നിഗമന ചട്ടക്കൂട്, AI നോളജ് ഗ്രാഫുകൾ.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_10_Malayalam.pdf"
    },
    {
        "mod": "mod3", "num": "11", "ch_num": 11,
        "title_ml": "അധ്യായം 11: പാശ്ചാത്യ ജ്ഞാനമീമാംസ (യുക്തിവാദവും അനുഭവവാദവും)",
        "title_en": "Western Epistemology (Rationalism vs Empiricism)",
        "desc": "റാഷണലിസവും എംപിരിസിസവും, ജസ്റ്റിഫൈഡ് ട്രൂ ബിലീഫ്, സിംബോളിക് AI vs മെഷീൻ ലേണിംഗ്.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_11_Malayalam.pdf"
    },
    {
        "mod": "mod3", "num": "12", "ch_num": 12,
        "title_ml": "അധ്യായം 12: ഫങ്ഷണലിസവും കമ്പ്യൂട്ടേഷണൽ മനസ്സും",
        "title_en": "Functionalism & Computational Mind",
        "desc": "ഹിലരി പുട്നത്തിന്റെ ഫങ്ഷണലിസം, മൾട്ടിപ്പിൾ റിയലൈസബിലിറ്റി (മനസ്സ് സോഫ്റ്റ്‌വെയറും തലച്ചോറ് ഹാർഡ്‌വെയറും).",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_12_Malayalam.pdf"
    },
    {
        "mod": "mod3", "num": "13", "ch_num": 13,
        "title_ml": "അധ്യായം 13: നിർമ്മിത ബുദ്ധിയിലെ ജ്ഞാനമീമാംസാപരമായ പ്രത്യാഘാതങ്ങൾ",
        "title_en": "Epistemological Implications in Artificial Intelligence",
        "desc": "യന്ത്രജ്ഞാനത്തിന്റെ സത്യാവസ്ഥ, ഡീപ് ലേണിംഗിലെ ബ്ലാക്ക് ബോക്സ് പ്രശ്നം, എക്സ്പ്ലെയിനബിൾ AI (XAI).",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_13_Malayalam.pdf"
    },

    # Module 4 (7 Chapters)
    {
        "mod": "mod4", "num": "14", "ch_num": 14,
        "title_ml": "അധ്യായം 14: 4.1(A) സ്വയംഭരണ AI-യുടെ ലക്ഷ്യങ്ങളെ മാനുഷിക മൂല്യങ്ങളുമായി സമന്വയിപ്പിക്കൽ",
        "title_en": "4.1(A) Aligning Autonomous AI Aims with Human Values",
        "desc": "AI വാല്യൂ അലൈൻമെന്റ് പ്രോബ്ലം, ഇൻസ്ട്രുമെന്റൽ കൺവർജൻസ്, പേപ്പർക്ലിപ്പ് മാക്സിമൈസർ, മനുഷ്യമൂല്യ സംരക്ഷണം.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_14_Malayalam.pdf"
    },
    {
        "mod": "mod4", "num": "15", "ch_num": 15,
        "title_ml": "അധ്യായം 15: 4.1(B) AI-യുടെ ഭാവി മാനവരാശിക്ക് അസ്തിത്വപരമായ ഭീഷണിയാണോ?",
        "title_en": "4.1(B) Does the Future of AI Pose an Existential Threat?",
        "desc": "എക്സിസ്റ്റൻഷ്യൽ റിസ്ക്, സൂപ്പർ ഇന്റലിജൻസ്, റോബോട്ടിക്സ് നിയമങ്ങൾ, അനിയന്ത്രിത AI-യുടെ വിപത്തുകൾ.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_15_Malayalam.pdf"
    },
    {
        "mod": "mod4", "num": "16", "ch_num": 16,
        "title_ml": "അധ്യായം 16: 4.2(A) ലേണിംഗ് അൽഗോരിതങ്ങളിലെ പക്ഷപാതങ്ങൾ എങ്ങനെ തടയാം?",
        "title_en": "4.2(A) Preventing Algorithmic Biases in Learning Algorithms",
        "desc": "അൽഗോരിതമിക് ബയാസ്, ചരിത്രപരമായ മുൻവിധികൾ, വിവേചനങ്ങൾ തടയൽ, നീതിപൂർവ്വകമായ അൽഗോരിതം നിർമ്മാണം.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_16_Malayalam.pdf"
    },
    {
        "mod": "mod4", "num": "17", "ch_num": 17,
        "title_ml": "അധ്യായം 17: 4.2(B) സാമൂഹിക ബന്ധങ്ങളിൽ AI എങ്ങനെ ഉൾച്ചേർക്കണം?",
        "title_en": "4.2(B) How should AI systems be embedded in our social relations?",
        "desc": "നിവേശിത ഉപകരണങ്ങൾ, വെർച്വൽ അസിസ്റ്റന്റുകൾ, ആരോഗ്യ സംരക്ഷണത്തിലെ വിശ്വാസ്യത, സോഷ്യൽ സ്കിൽ ശോഷണം, എതിക്സ്-ബൈ-ഡിസൈൻ.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_17_Malayalam.pdf"
    },
    {
        "mod": "mod4", "num": "18", "ch_num": 18,
        "title_ml": "അധ്യായം 18: 4.3(A) സ്വയം നിയന്ത്രിത വാഹനങ്ങൾക്കായുള്ള ധാർമ്മിക നിയമങ്ങൾ",
        "title_en": "4.3(A) Ethical Rules for Autonomous Vehicles",
        "desc": "ഡ്രൈവർരഹിത കാറുകൾ, ട്രോളി പ്രോബ്ലം, അപകട ഘട്ടങ്ങളിലെ ധാർമ്മിക തീരുമാനങ്ങൾ (യൂട്ടിലിറ്റേറിയനിസം vs ഡിയോൺടോളജി).",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_18_Malayalam.pdf"
    },
    {
        "mod": "mod4", "num": "19", "ch_num": 19,
        "title_ml": "അധ്യായം 19: 4.3(B) AI സംവിധാനങ്ങൾക്ക് ധാർമ്മികമായ ദോഷം അനുഭവിക്കാൻ കഴിയുമോ?",
        "title_en": "4.3(B) Can AI Systems Suffer Moral Harm?",
        "desc": "മോറൽ പേഷ്യന്റ്ഹുഡ്, ബോധവും വേദനയും അനുഭവിക്കാനുള്ള കഴിവ്, അവകാശങ്ങളും ചൂഷണവും.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_19_Malayalam.pdf"
    },
    {
        "mod": "mod4", "num": "20", "ch_num": 20,
        "title_ml": "അധ്യായം 20: 4.3(C) AI സംവിധാനങ്ങൾ ധാർമ്മിക കർത്താക്കളാകുമോ? ഉത്തരവാദിത്തം എങ്ങനെ ഉറപ്പാക്കാം?",
        "title_en": "4.3(C) Can AI Systems Be Moral Agents & Accountability?",
        "desc": "മോറൽ ഏജൻസി, ഇച്ഛാസ്വാതന്ത്ര്യം, ഉത്തരവാദിത്ത വിടവ് (Responsibility Gap), ക്രിമിനൽ-സിവിൽ ബാധ്യതകൾ.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_20_Malayalam.pdf"
    },

    # Module 5 (2 Chapters)
    {
        "mod": "mod5", "num": "21", "ch_num": 21,
        "title_ml": "അധ്യായം 21: മെഷീൻ കോഗ്നിഷനും ക്ലാസിക്കൽ AI സമന്വയവും",
        "title_en": "Machine Cognition & Classical AI Synthesis",
        "desc": "യഥാർത്ഥ ചിന്തയും അനുകരണവും തമ്മിലുള്ള വ്യത്യാസം, ക്ലാസിക്കൽ AI-യുടെ ഗുണദോഷങ്ങൾ, മെഷീൻ കോഗ്നിഷൻ ചർച്ചകൾ.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_21_Malayalam.pdf"
    },
    {
        "mod": "mod5", "num": "22", "ch_num": 22,
        "title_ml": "അധ്യായം 22: ഭാരതീയ തത്ത്വചിന്തയിലെ ആസ്തിക ദർശനങ്ങളും മാനവരാശിയുടെ ഭാവിയും",
        "title_en": "Indian Philosophy Āstika Schools & Future of Humanity",
        "desc": "ഷഡ്ദർശനങ്ങൾ (ന്യായ, വൈശേഷിക, സാംഖ്യ, യോഗ, മീമാംസ, വേദാന്തം), ബോധത്തെക്കുറിച്ചുള്ള ഭാരതീയ വീക്ഷണം, സെമിനാർ ചോദ്യങ്ങൾ.",
        "pdf": "Philosophy of AI/Malayalam PDF/AI_Philosophy_Chapter_22_Malayalam.pdf"
    }
]

modules = [
    {
        "id": "mod1",
        "title_ml": "മൊഡ്യൂൾ 1: നിർമ്മിത ബുദ്ധിയുടെ ചരിത്രവും തത്ത്വചിന്താപരമായ അടിത്തറയും",
        "tag": "Module 1 (3 Chapters)",
        "filter_label": "Module 1: Foundations (3 Chapters)"
    },
    {
        "id": "mod2",
        "title_ml": "മൊഡ്യൂൾ 2: ക്ലാസിക്കൽ നിർമ്മിത ബുദ്ധിയും കമ്പ്യൂട്ടേഷൻ മാതൃകകളും",
        "tag": "Module 2 (5 Chapters)",
        "filter_label": "Module 2: Classical AI (5 Chapters)"
    },
    {
        "id": "mod3",
        "title_ml": "മൊഡ്യൂൾ 3: നിർമ്മിത ബുദ്ധിയിലെ ജ്ഞാനമീമാംസാ സിദ്ധാന്തങ്ങൾ",
        "tag": "Module 3 (5 Chapters)",
        "filter_label": "Module 3: Epistemology (5 Chapters)"
    },
    {
        "id": "mod4",
        "title_ml": "മൊഡ്യൂൾ 4: ധാർമ്മികത, നീതിശാസ്ത്രം, സാമൂഹിക പ്രത്യാഘാതങ്ങൾ",
        "tag": "Module 4 (7 Chapters)",
        "filter_label": "Module 4: Ethics of AI (7 Chapters)"
    },
    {
        "id": "mod5",
        "title_ml": "മൊഡ്യൂൾ 5: നിർമ്മിത ബുദ്ധിയുടെ തത്ത്വചിന്തയും മാനവരാശിയുടെ ഭാവിയും",
        "tag": "Module 5 (2 Chapters)",
        "filter_label": "Module 5: Future & Perspectives (2 Chapters)"
    }
]

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
  <meta name="description" content="Calicut University BA Philosophy of Artificial Intelligence Complete Malayalam & English Study Guide (Malayalam Reading)">
  <title>Philosophy of Artificial Intelligence — Malayalam & English Reading | Academic Hub</title>
  <link rel="stylesheet" href="style.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Noto+Sans+Malayalam:wght@400;500;600;700;800&family=Manjari:wght@400;700&display=swap');

    :root {
      --ai-primary: #312e81;
      --ai-secondary: #4338ca;
      --ai-light: #eef2ff;
      --ai-border: #c7d2fe;
    }

    body {
      font-family: 'Plus Jakarta Sans', 'Noto Sans Malayalam', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: linear-gradient(135deg, #eef2ff, #f5f3ff, #f8fafc);
      padding: 30px 18px;
      color: #0f172a;
      min-height: 100vh;
    }

    .page-box {
      max-width: 980px;
      margin: auto;
      background: #ffffff;
      padding: 36px 32px;
      border-radius: 28px;
      box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
    }

    .hero {
      display: block !important;
      position: relative !important;
      min-height: 0 !important;
      grid-template-columns: none !important;
      gap: 0 !important;
      margin: 0 0 28px 0 !important;
      padding: 32px 24px 34px !important;
      text-align: center !important;
      background: linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #ede9fe 100%) !important;
      border: 1px solid #c7d2fe !important;
      border-radius: 24px !important;
      box-shadow: 0 8px 24px rgba(67, 56, 202, 0.1) !important;
      color: #0f172a !important;
    }

    .hero:before {
      display: none !important;
      content: none !important;
    }

    .uni-badge {
      display: inline-block !important;
      background: #e0e7ff !important;
      color: #3730a3 !important;
      padding: 6px 18px !important;
      border-radius: 999px !important;
      font-size: 13px !important;
      font-weight: 800 !important;
      margin-bottom: 14px !important;
      letter-spacing: 0.5px !important;
      border: 1px solid #c7d2fe !important;
    }

    .hero h1, .hero .hero-title {
      display: block !important;
      margin: 0 0 12px 0 !important;
      background: transparent !important;
      -webkit-background-clip: unset !important;
      text-shadow: none !important;
    }

    .hero h1 span.hero-title-en,
    .hero .hero-title .hero-title-en,
    .hero-title-en {
      display: block !important;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif !important;
      font-size: clamp(23px, 3.8vw, 34px) !important;
      line-height: 1.3 !important;
      font-weight: 800 !important;
      letter-spacing: -0.01em !important;
      margin: 0 0 6px 0 !important;
      color: #1e1b4b !important;
      -webkit-text-fill-color: #1e1b4b !important;
      background: none !important;
      -webkit-background-clip: border-box !important;
      background-clip: border-box !important;
      text-shadow: none !important;
      opacity: 1 !important;
    }

    .hero h1 span.hero-title-ml,
    .hero .hero-title .hero-title-ml,
    .hero-title-ml {
      display: block !important;
      font-family: 'Noto Sans Malayalam', sans-serif !important;
      font-size: clamp(15px, 2.4vw, 20px) !important;
      line-height: 1.45 !important;
      font-weight: 600 !important;
      color: #4338ca !important;
      -webkit-text-fill-color: #4338ca !important;
      background: none !important;
      -webkit-background-clip: border-box !important;
      background-clip: border-box !important;
      text-shadow: none !important;
      opacity: 1 !important;
    }

    .hero p {
      font-size: 15px !important;
      line-height: 1.8 !important;
      color: #334155 !important;
      margin: 0 auto !important;
      max-width: 800px !important;
      font-weight: 500 !important;
    }

    /* Filter Bar - All in English */
    .filter-wrapper {
      margin-bottom: 24px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      width: 100%;
      box-sizing: border-box;
    }

    .filter-btn {
      padding: 10px 20px;
      border-radius: 14px;
      border: 1px solid #cbd5e1;
      background: #f8fafc;
      color: #334155;
      font-size: 13.5px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
      white-space: normal;
      text-align: center;
    }

    .filter-btn:hover, .filter-btn.active {
      background: #4338ca;
      color: #ffffff;
      border-color: #4338ca;
      box-shadow: 0 4px 14px rgba(67, 56, 202, 0.28);
    }

    /* Search input */
    .search-bar {
      margin-bottom: 26px;
      position: relative;
    }

    .search-bar input {
      width: 100%;
      box-sizing: border-box;
      padding: 14px 20px;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      font-size: 15px;
      outline: none;
      transition: 0.2s;
      font-family: inherit;
    }

    .search-bar input:focus {
      border-color: #4338ca;
      box-shadow: 0 0 0 4px rgba(67, 56, 202, 0.15);
    }

    /* Section divider */
    .module-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 34px 0 16px 0;
      padding-bottom: 8px;
      border-bottom: 2px solid #e2e8f0;
    }

    .module-header h2 {
      font-size: 19px;
      margin: 0;
      color: #312e81;
      font-weight: 700;
    }

    .module-tag {
      font-size: 12px;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 8px;
      background: #eef2ff;
      color: #3730a3;
      border: 1px solid #c7d2fe;
    }

    /* Chapter cards */
    .chapter-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .chapter-card {
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      padding: 20px 24px;
      display: grid;
      grid-template-columns: 64px 1fr auto;
      align-items: center;
      gap: 20px;
      background: linear-gradient(130deg, #ffffff, #faf5ff);
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }

    .chapter-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(67, 56, 202, 0.1);
      border-color: #c7d2fe;
    }

    .chapter-num {
      width: 60px;
      height: 60px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      color: #ffffff;
      font-size: 18px;
      font-weight: 800;
      background: linear-gradient(135deg, #312e81, #4338ca);
      box-shadow: 0 6px 14px rgba(67, 56, 202, 0.28);
    }

    .chapter-info h3 {
      font-size: 16.5px;
      line-height: 1.5;
      color: #0f172a;
      margin: 0 0 4px 0;
      font-weight: 700;
    }

    .chapter-info .eng-title {
      font-size: 13.5px;
      color: #4338ca;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .chapter-info p {
      font-size: 13px;
      color: #64748b;
      line-height: 1.6;
      margin: 0;
    }

    .btn-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 140px;
    }

    .action-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 11px 18px;
      border-radius: 12px;
      font-size: 13.5px;
      font-weight: 800;
      text-decoration: none;
      transition: all 0.2s;
      cursor: pointer;
      font-family: inherit;
      white-space: nowrap;
    }

    .btn-view {
      background: #eef2ff;
      color: #312e81;
      border: 1.5px solid #c7d2fe;
    }

    .btn-view:hover {
      background: #4338ca;
      color: #ffffff;
      border-color: #4338ca;
      box-shadow: 0 4px 12px rgba(67, 56, 202, 0.25);
    }

    .btn-download,
    .download,
    a[download],
    button[download],
    [download] {
      display: none !important;
    }

    /* Bottom nav */
    .bottom-nav {
      margin-top: 40px;
      padding-top: 24px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    /* Modal */
    .modal {
      display: none;
      position: fixed;
      z-index: 2000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(4px);
    }

    .modal-content {
      background: #ffffff;
      width: 90%;
      max-width: 940px;
      height: 85%;
      margin: 4% auto;
      border-radius: 20px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      position: relative;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      border-bottom: 1px solid #e2e8f0;
      margin-bottom: 12px;
    }

    .modal-header h3 {
      margin: 0;
      color: #312e81;
      font-size: 17.5px;
      font-weight: 700;
    }

    .modal-header-actions {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    /* Explicit English Text in Modal Header Buttons - No blank buttons */
    .modal-action-btn {
      appearance: none;
      background: #f1f5f9;
      color: #334155;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 6px 12px;
      min-height: 34px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.15s ease;
      white-space: nowrap;
    }

    .modal-action-btn:hover {
      background: #e2e8f0;
      color: #0f172a;
    }

    .close-modal {
      font-size: 13px;
      font-weight: 800;
      color: #dc2626;
      cursor: pointer;
      border: 1px solid #fca5a5;
      background: #fee2e2;
      padding: 6px 14px;
      min-height: 34px;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      transition: all 0.15s ease;
      white-space: nowrap;
    }

    .close-modal:hover {
      background: #dc2626;
      color: #ffffff;
      border-color: #dc2626;
    }

    .modal-iframe {
      flex: 1;
      width: 100%;
      border: none;
      border-radius: 12px;
      background: #f1f5f9;
    }

    @media (max-width: 768px) {
      .page-box {
        padding: 22px 16px;
      }
      .chapter-card {
        grid-template-columns: 50px 1fr;
        gap: 14px;
        padding: 16px;
      }
      .chapter-num {
        width: 48px;
        height: 48px;
        font-size: 16px;
        border-radius: 14px;
      }
      .btn-group {
        grid-column: 1 / -1;
        flex-direction: row;
        width: 100%;
      }
      .action-btn {
        flex: 1;
      }
    }

    /* Mobile fullscreen */
    @media (max-width: 768px) {
      body {
        padding: 8px 6px !important;
      }
      .page-box {
        padding: 16px 12px !important;
        border-radius: 18px !important;
        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06) !important;
      }
      .hero {
        padding: 18px 14px 20px !important;
        margin: 0 0 16px 0 !important;
        border-radius: 18px !important;
      }
      .uni-badge {
        font-size: 11.5px !important;
        padding: 4px 12px !important;
        margin-bottom: 8px !important;
      }
      .hero h1 span.hero-title-en,
      .hero .hero-title .hero-title-en,
      .hero-title-en {
        font-size: clamp(18px, 5.2vw, 24px) !important;
        line-height: 1.25 !important;
        margin-bottom: 4px !important;
      }
      .hero h1 span.hero-title-ml,
      .hero .hero-title .hero-title-ml,
      .hero-title-ml {
        font-size: clamp(13px, 3.8vw, 15.5px) !important;
        line-height: 1.4 !important;
      }
      .hero p {
        font-size: 13.5px !important;
        line-height: 1.6 !important;
      }
      .filter-wrapper {
        display: flex !important;
        flex-wrap: wrap !important;
        overflow-x: visible !important;
        gap: 8px !important;
        padding: 4px 0 12px 0 !important;
        margin-bottom: 16px !important;
        justify-content: center !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      .filter-wrapper::-webkit-scrollbar {
        display: none !important;
      }
      .filter-btn {
        flex: 1 1 140px !important;
        max-width: 100% !important;
        white-space: normal !important;
        text-align: center !important;
        padding: 10px 12px !important;
        font-size: 12.5px !important;
        line-height: 1.35 !important;
        border-radius: 12px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-sizing: border-box !important;
      }
      .search-bar {
        margin-bottom: 18px !important;
      }
      .search-bar input {
        padding: 11px 14px !important;
        font-size: 14px !important;
        border-radius: 12px !important;
      }
      .module-header {
        margin: 22px 0 12px 0 !important;
      }
      .module-header h2 {
        font-size: 17px !important;
      }
      .chapter-card {
        grid-template-columns: 1fr !important;
        text-align: left !important;
        gap: 12px !important;
        padding: 16px 14px !important;
        border-radius: 16px !important;
      }
      .chapter-num {
        width: 44px !important;
        height: 44px !important;
        font-size: 15px !important;
        border-radius: 12px !important;
        margin: 0 !important;
      }
      .chapter-info h3 {
        font-size: 15.5px !important;
        line-height: 1.45 !important;
        margin-bottom: 4px !important;
      }
      .chapter-info .eng-title {
        font-size: 12.5px !important;
      }
      .chapter-info p {
        font-size: 12.5px !important;
        line-height: 1.55 !important;
      }
      .btn-group {
        width: 100% !important;
      }
      .action-btn, .btn-view {
        padding: 12px 16px !important;
        font-size: 14px !important;
        min-height: 46px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }

      .modal {
        position: fixed !important;
        inset: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 99999 !important;
        background: #0f172a !important;
      }
      .modal-content {
        margin: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        height: 100% !important;
        max-height: 100% !important;
        border-radius: 0 !important;
        border: none !important;
        box-shadow: none !important;
        padding: 12px 10px 10px 10px !important;
        background: #0f172a !important;
      }
      .modal-header {
        padding-bottom: 8px !important;
        margin-bottom: 8px !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
      }
      .modal-header h3 {
        color: #ffffff !important;
        font-size: 14.5px !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }
      .modal-action-btn {
        background: rgba(255, 255, 255, 0.18) !important;
        color: #ffffff !important;
        border: 1px solid rgba(255, 255, 255, 0.4) !important;
      }
      .close-modal {
        background: rgba(255, 255, 255, 0.22) !important;
        border: 1px solid rgba(255, 255, 255, 0.4) !important;
        color: #ffffff !important;
      }
      .modal-iframe {
        flex: 1 !important;
        border-radius: 0 !important;
      }
      .bottom-nav {
        margin-top: 24px !important;
        padding-top: 18px !important;
        flex-direction: column !important;
        gap: 12px !important;
      }
      .bottom-nav .nav-btn-back,
      .bottom-nav .nav-btn-home {
        width: 100% !important;
        box-sizing: border-box !important;
      }
    }
  </style>

  <style id="colourful-10s-blinking-nav-styles">
    /* ==========================================================================
       COLOURFUL BLINKING 10 SECONDS INTERVAL BUTTONS (Back & Home)
       Smoothly cycles through vivid hues: Sapphire, Violet, Emerald, Gold, Ruby
       ========================================================================== */
    @keyframes colourful-blink-back {
      0%, 100% {
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #4338ca 100%) !important;
        border-color: rgba(147, 197, 253, 0.8) !important;
        box-shadow: 0 4px 14px rgba(37, 99, 235, 0.45), 0 0 0 0 rgba(59, 130, 246, 0.7) !important;
        transform: scale(1);
        filter: brightness(1);
      }
      20% {
        background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #4f46e5 100%) !important;
        border-color: rgba(196, 181, 253, 0.85) !important;
        box-shadow: 0 6px 22px rgba(124, 58, 237, 0.75), 0 0 18px 6px rgba(167, 139, 250, 0.85) !important;
        transform: scale(1.045);
        filter: brightness(1.28);
      }
      40% {
        background: linear-gradient(135deg, #059669 0%, #10b981 50%, #047857 100%) !important;
        border-color: rgba(110, 231, 183, 0.85) !important;
        box-shadow: 0 6px 22px rgba(16, 185, 129, 0.75), 0 0 18px 6px rgba(52, 211, 153, 0.85) !important;
        transform: scale(1.045);
        filter: brightness(1.28);
      }
      60% {
        background: linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #b45309 100%) !important;
        border-color: rgba(252, 211, 77, 0.85) !important;
        box-shadow: 0 6px 22px rgba(245, 158, 11, 0.75), 0 0 18px 6px rgba(251, 191, 36, 0.85) !important;
        transform: scale(1.045);
        filter: brightness(1.28);
      }
      80% {
        background: linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%) !important;
        border-color: rgba(253, 164, 175, 0.85) !important;
        box-shadow: 0 6px 22px rgba(244, 63, 94, 0.75), 0 0 18px 6px rgba(251, 113, 133, 0.85) !important;
        transform: scale(1.045);
        filter: brightness(1.28);
      }
    }

    @keyframes colourful-blink-home {
      0%, 100% {
        background: linear-gradient(135deg, #059669 0%, #10b981 50%, #047857 100%) !important;
        border-color: rgba(110, 231, 183, 0.8) !important;
        box-shadow: 0 4px 14px rgba(16, 185, 129, 0.45), 0 0 0 0 rgba(16, 185, 129, 0.7) !important;
        transform: scale(1);
        filter: brightness(1);
      }
      20% {
        background: linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #b45309 100%) !important;
        border-color: rgba(252, 211, 77, 0.85) !important;
        box-shadow: 0 6px 22px rgba(245, 158, 11, 0.75), 0 0 18px 6px rgba(251, 191, 36, 0.85) !important;
        transform: scale(1.045);
        filter: brightness(1.28);
      }
      40% {
        background: linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%) !important;
        border-color: rgba(253, 164, 175, 0.85) !important;
        box-shadow: 0 6px 22px rgba(244, 63, 94, 0.75), 0 0 18px 6px rgba(251, 113, 133, 0.85) !important;
        transform: scale(1.045);
        filter: brightness(1.28);
      }
      60% {
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #4338ca 100%) !important;
        border-color: rgba(147, 197, 253, 0.85) !important;
        box-shadow: 0 6px 22px rgba(37, 99, 235, 0.75), 0 0 18px 6px rgba(96, 165, 250, 0.85) !important;
        transform: scale(1.045);
        filter: brightness(1.28);
      }
      80% {
        background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #4f46e5 100%) !important;
        border-color: rgba(196, 181, 253, 0.85) !important;
        box-shadow: 0 6px 22px rgba(124, 58, 237, 0.75), 0 0 18px 6px rgba(167, 139, 250, 0.85) !important;
        transform: scale(1.045);
        filter: brightness(1.28);
      }
    }

    .reading-top-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin: 0 0 20px;
      padding: 10px 16px;
      background: #ffffff;
      border: 1.5px solid #e2e8f0;
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
      position: sticky;
      top: 10px;
      z-index: 100;
    }

    /* Top and Bottom Animated Buttons (Pure English) */
    .reading-top-nav .btn-back,
    .bottom-nav .nav-btn-back {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      text-decoration: none;
      white-space: nowrap;
      color: #ffffff !important;
      border: 1.5px solid rgba(255, 255, 255, 0.5) !important;
      font-weight: 850 !important;
      text-shadow: 0 1px 2px rgba(15, 23, 42, 0.4);
      animation: colourful-blink-back 10s infinite ease-in-out !important;
      transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }

    .reading-top-nav .btn-home,
    .bottom-nav .nav-btn-home {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      text-decoration: none;
      white-space: nowrap;
      color: #ffffff !important;
      border: 1.5px solid rgba(255, 255, 255, 0.5) !important;
      font-weight: 850 !important;
      text-shadow: 0 1px 2px rgba(15, 23, 42, 0.4);
      animation: colourful-blink-home 10s infinite ease-in-out !important;
      transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }

    .reading-top-nav .btn-back,
    .reading-top-nav .btn-home {
      min-height: 40px;
      padding: 8px 18px;
      border-radius: 12px;
      font-size: 13.5px;
    }

    .bottom-nav .nav-btn-back,
    .bottom-nav .nav-btn-home {
      min-height: 50px;
      padding: 14px 28px;
      border-radius: 16px;
      font-size: 15px;
      min-width: 190px;
    }

    .reading-top-nav .btn-back:hover,
    .bottom-nav .nav-btn-back:hover,
    .reading-top-nav .btn-home:hover,
    .bottom-nav .nav-btn-home:hover {
      animation-play-state: paused !important;
      transform: translateY(-2px) scale(1.05) !important;
      box-shadow: 0 8px 26px rgba(15, 23, 42, 0.4) !important;
    }
  </style>

  <!-- Fast PDF Reader Preloads -->
  <link rel="prefetch" href="study-guide-reader.html">
  <link rel="prefetch" href="assets/pdfjs/pdf.min.mjs">
  <link rel="prefetch" href="assets/pdfjs/pdf.worker.min.mjs">
</head>
<body>

  <main class="page-box">
    <!-- Premium Sticky Top Back & Home Navigation (All in English) -->
    <nav class="reading-top-nav" aria-label="Reading navigation">
      <button type="button" class="btn-back" onclick="if(window.history.length &gt; 1){window.history.back();}else{window.location.href='index.html';}" aria-label="Go back">← Back</button>
      <a class="btn-home" href="index.html#top" aria-label="Academic Hub Home">⌂ Home</a>
    </nav>

    <header class="hero">
      <div class="uni-badge">CALICUT UNIVERSITY · CDOE · FYUGP</div>
      <h1 class="hero-title">
        <span class="hero-title-en">Philosophy of Artificial Intelligence — English Malayalam Reading</span>
        <span class="hero-title-ml">ഫിലോസഫി ഓഫ് ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് — മലയാളം വായന</span>
      </h1>
      <p>
        Philosophy of Artificial Intelligence — കാലിക്കറ്റ് സർവ്വകലാശാലയുടെ 24 ഔദ്യോഗിക LMS പാഠഭാഗങ്ങളുടെ സമഗ്ര മലയാള പരിഭാഷ, വിശദമായ പഠന കുറിപ്പുകൾ, പാഠപുസ്തക ചോദ്യോത്തരങ്ങൾ എന്നിവ ഉൾപ്പെടുത്തിയ സമ്പൂർണ്ണ പരീക്ഷാ സഹായി.
      </p>
    </header>

    <!-- Module Filters (All in English) -->
    <nav class="filter-wrapper" aria-label="Filter by module">
      <button class="filter-btn active" onclick="filterModule('mod1', this)">Module 1: Foundations (3 Chapters)</button>
      <button class="filter-btn" onclick="filterModule('mod2', this)">Module 2: Classical AI (5 Chapters)</button>
      <button class="filter-btn" onclick="filterModule('mod3', this)">Module 3: Epistemology (5 Chapters)</button>
      <button class="filter-btn" onclick="filterModule('mod4', this)">Module 4: Ethics of AI (7 Chapters)</button>
      <button class="filter-btn" onclick="filterModule('mod5', this)">Module 5: Future &amp; Perspectives (2 Chapters)</button>
      <button class="filter-btn" onclick="filterModule('all', this)">All Chapters (22 Chapters)</button>
    </nav>

    <!-- Search Input (English Placeholder) -->
    <div class="search-bar">
      <input type="text" id="searchInput" onkeyup="filterChapters()" placeholder="Search by chapter number, title, topic, or keyword...">
    </div>

    <!-- Chapter Sections -->
    <div id="chapterContainer">
"""

# Build sections
sections_html = []
for mod in modules:
    sec_id = mod["id"]
    sec_title = mod["title_ml"]
    sec_tag = mod["tag"]
    
    mod_chapters = [c for c in chapters if c["mod"] == sec_id]
    
    sec_str = f"""      <!-- ==================== {sec_id.upper()} ==================== -->
      <section class="module-section" data-mod="{sec_id}" style="display: {'block' if sec_id == 'mod1' else 'none'};">
        <div class="module-header">
          <h2>{sec_title}</h2>
          <span class="module-tag">{sec_tag}</span>
        </div>
        <div class="chapter-list">
"""
    for ch in mod_chapters:
        num = ch["num"]
        t_ml = ch["title_ml"]
        t_en = ch["title_en"]
        desc = ch["desc"]
        pdf = ch["pdf"]
        
        # Action button strictly in English: "Read Online"
        sec_str += f"""          <!-- Ch {num} -->
          <article class="chapter-card">
            <div class="chapter-num">{num}</div>
            <div class="chapter-info">
              <h3>{t_ml}</h3>
              <div class="eng-title">{t_en}</div>
              <p>{desc}</p>
            </div>
            <div class="btn-group">
              <button class="action-btn btn-view" onclick="viewPdf('{pdf}', '{t_en}')">Read Online</button>
            </div>
          </article>
"""
    sec_str += """        </div>
      </section>
"""
    sections_html.append(sec_str)

html_foot = """    </div>

    <!-- Bottom Navigation: All in English with 10s Colourful Blinking -->
    <footer class="bottom-nav">
      <button type="button" class="nav-btn nav-btn-back" onclick="if(window.history.length &gt; 1){window.history.back();}else{window.location.href='index.html';}" aria-label="Go back">← Back</button>
      <a class="nav-btn nav-btn-home" href="index.html#top" aria-label="Academic Hub Home">⌂ Home</a>
    </footer>

  </main>

  <!-- PDF View Modal with Explicit English Action Buttons (No blank buttons) -->
  <div id="viewerModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3 id="modalTitle">Study Guide Reader</h3>
        <div class="modal-header-actions">
          <button type="button" class="modal-action-btn" onclick="zoomModalReader(-0.25)" title="Zoom Out" aria-label="Zoom Out">Zoom −</button>
          <button type="button" class="modal-action-btn" onclick="zoomModalReader(0.25)" title="Zoom In" aria-label="Zoom In">Zoom +</button>
          <button type="button" class="modal-action-btn" onclick="resetModalReaderZoom()" title="Reset Zoom" aria-label="Reset Zoom">Reset</button>
          <a id="modalExternalBtn" class="modal-action-btn" href="#" target="_blank" rel="noopener" title="Open in New Tab" aria-label="Open in New Tab">Open ↗</a>
          <button class="close-modal" onclick="closeViewer()" aria-label="Close">✕ Close</button>
        </div>
      </div>
      <iframe id="pdfFrame" class="modal-iframe" src="" title="PDF Viewer"></iframe>
    </div>
  </div>

  <script>
    function filterModule(modId, btn) {
      const buttons = document.querySelectorAll('.filter-btn');
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const sections = document.querySelectorAll('.module-section');
      sections.forEach(sec => {
        if (modId === 'all' || sec.getAttribute('data-mod') === modId) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });
    }

    function filterChapters() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      const cards = document.querySelectorAll('.chapter-card');
      
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function viewPdf(url, title) {
      document.getElementById('modalTitle').innerText = title;
      const clean = url.split('#')[0];
      const readerUrl = 'study-guide-reader.html?file=' + encodeURIComponent(clean) + '&tab=malayalam_reading';
      document.getElementById('pdfFrame').src = readerUrl;
      const extBtn = document.getElementById('modalExternalBtn');
      if (extBtn) extBtn.href = readerUrl;
      document.getElementById('viewerModal').style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    function closeViewer() {
      document.getElementById('viewerModal').style.display = 'none';
      document.getElementById('pdfFrame').src = '';
      document.body.style.overflow = '';
    }

    window.onclick = function(event) {
      const modal = document.getElementById('viewerModal');
      if (event.target == modal) {
        closeViewer();
      }
    };

    // Disable right click across the page
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });

    // Disable keyboard shortcuts for saving and printing
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'u'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      if (e.key === 'Escape') {
        closeViewer();
      }
    });

    // Prevent any download actions
    document.addEventListener('click', function(e) {
      const target = e.target.closest('a[download], .btn-download, .download, [download]');
      if (target) {
        e.preventDefault();
      }
    }, true);
  </script>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const activeBtn = document.querySelector('.filter-btn.active') || document.querySelector('.filter-btn');
      if (activeBtn) {
        activeBtn.click();
      }
    });
  </script>

  <script>
    // Modal Reader Zoom Controls (communicates with study-guide-reader)
    function zoomModalReader(delta) {
      const f = document.getElementById('pdfFrame') || document.getElementById('modal-pdf-frame') || document.querySelector('.reader-frame');
      f?.contentWindow?.postMessage({ action: 'zoom', delta: delta }, '*');
    }
    function resetModalReaderZoom() {
      const f = document.getElementById('pdfFrame') || document.getElementById('modal-pdf-frame') || document.querySelector('.reader-frame');
      f?.contentWindow?.postMessage({ action: 'resetZoom' }, '*');
    }
  </script>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Direct jump to Module 1 on page load unless specific hash provided
      const hash = window.location.hash ? window.location.hash.replace('#', '') : 'mod1';
      const targetMod = (hash.startsWith('mod') || hash === 'all') ? hash : 'mod1';
      const targetBtn = document.querySelector(`.filter-btn[onclick*="${targetMod}"]`) || document.querySelector('.filter-btn[onclick*="mod1"]');
      if (typeof filterModule === 'function' && targetBtn) {
        filterModule(targetMod, targetBtn);
      }
    });
  </script>

  <!-- Instant PDF Pre-warmer for all subject cards & tabs -->
  <script id="fast-subject-prewarmer">
    (function() {
      function prewarmUrl(url) {
        if (!url || (!url.endsWith('.pdf') && !url.includes('.pdf') && !url.endsWith('.docx'))) return;
        const clean = url.split('#')[0];
        if (document.querySelector('link[href="' + CSS.escape(clean) + '"]')) return;
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = clean;
        document.head.appendChild(link);
      }
      document.addEventListener('pointerenter', function(e) {
        const el = e.target.closest && e.target.closest('.btn-view, .read-online, .read-ch-btn, a[href*=".pdf"], .chapter-card, .filter-btn');
        if (!el || el.dataset.prewarmed) return;
        el.dataset.prewarmed = 'true';
        let url = el.getAttribute('href');
        if (!url) {
          const oc = el.getAttribute('onclick') || '';
          const m = oc.match(/viewPdf\(['"]([^'"]+)['"]/);
          if (m) url = m[1];
        }
        if (url) prewarmUrl(url);
      }, { passive: true });
    })();
  </script>

</body>
</html>
"""

full_html = html_template + "".join(sections_html) + html_foot

with open('ai-reading.html', 'w', encoding='utf-8') as f:
    f.write(full_html)

print("Generated ai-reading.html successfully! Length:", len(full_html))

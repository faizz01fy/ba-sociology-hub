---
name: academichub-layout-and-reading-approval-guardrail
description: Strict governance policy and guardrail requiring mandatory prior user approval for ANY layout-related, visual, structural, or Malayalam reading tab changes across Academic Hub. Strictly forbids making autonomous edits to page layouts, chapter tabs, reading portals, or component hierarchies without explicit user consent.
---

# Academic Hub Layout & Malayalam Reading Approval Guardrail

> [!CAUTION]
> **MANDATORY USER APPROVAL REQUIRED BEFORE ANY EDIT**
> You must **NEVER** autonomously make any changes to layout, design, CSS, or Malayalam Reading tabs across Academic Hub.
> Every proposed layout or reading-tab change must first be described to the user, and execution must pause until explicit user approval is granted.

---

## 1. Absolute Guardrails & Prohibitions

1. **No Autonomous Layout Changes:**
   - Never alter HTML page layout, structure, flexbox/grid containers, margins, padding, headers, footers, or navigation bars on your own.
   - Never inject or move elements above or between existing components without asking first.

2. **Malayalam Reading Tab Protection:**
   - Applies to the Malayalam Reading tab (`language-tab--malayalam`), the `#module-dialog` window, and all dedicated reading portals (`soc-reading.html`, `ai-reading.html`, `econ-reading.html`, `hist-reading.html`, `eng-reading.html`, `hindi-reading.html`, `arabic-reading.html`, `ethics-reading.html`, `mal-guide.html`, `micro-reading.html`, `edu-reading.html`).
   - **Chapter Tab Visibility:** Chapter tabs and module selectors MUST remain 100% visible, uncluttered, and intact exactly as they are.
   - **Strict Downside Rule:** Never place banners, notices, primers, or text inside or upside (above) chapter tabs. If any supplemental content is approved, it must strictly be placed at the downside (bottom) of all tabs.

3. **Approval-First Process:**
   - When any issue, enhancement, or fix touches layout, CSS, DOM order, or reading tabs:
     1. **Formulate the Plan:** Document the exact rationale and the specific file(s) affected.
     2. **Ask the User:** Present the proposal clearly in plain text, showing before/after behavior.
     3. **Wait for Approval:** Do NOT edit the files or commit changes until the user gives explicit affirmative approval (e.g. "approved", "go ahead", "do it").

---

## 2. Protected Files & Areas

The following files and components are under strict approval lock:

| Component / Area | Files Protected | Lock Rule |
| :--- | :--- | :--- |
| **Malayalam Reading Portals** | `soc-reading.html`, `ai-reading.html`, `econ-reading.html`, `hist-reading.html`, `eng-reading.html`, `hindi-reading.html`, `arabic-reading.html`, `ethics-reading.html`, `mal-guide.html`, `micro-reading.html`, `edu-reading.html` | Chapter tabs must remain pristine. No structural changes without prior approval. |
| **Bilingual Chapter Masters** | `Sociology/Malayalam PDF/*.html`, `sociology-module-*.html` | Structure, question groups, and headers locked unless approved. |
| **Homepage Layout & Cards** | `index.html` (Subject cards, Division nav, Guide sections) | Layout, card styling, and tab arrangement locked. |
| **Voice Hub Interface** | `voice-explanation.html`, `voice.html` | Player bar, card layout, and filter tabs locked. |
| **Global Header & Navigation** | All portal headers, `.top-navbar`, `.division-nav` | Position, buttons, and responsive styles locked. |

---

## 3. Mandatory Approval Prompt Template

Whenever layout or reading-tab work is contemplated, output the following structured proposal and STOP:

```markdown
### 🛑 User Approval Required: Layout / Reading Tab Change

- **Target Page(s):** [e.g. `soc-reading.html`]
- **Component Affected:** [e.g. Malayalam Reading Chapter Selector / Downside Container]
- **Current Behavior:** [Describe existing layout]
- **Proposed Change:** [Describe exact modification and confirm chapter tabs remain untouched]
- **Placement Verification:** [Confirm changes are strictly at the downside / bottom]

Please confirm if you approve these changes before I proceed.
```

# ENISo Auto Crew - Style Guide & Design System

Welcome! This guide lists all shared CSS variables and toolkit classes for our club website project. Please use these standardized classes across your pages to maintain a consistent look and feel.

---

## 🎨 Color Variables (Light & Dark Mode)
Our colors automatically adapt when the `[data-theme="dark"]` attribute is applied. Never hardcode color values directly in your page styles.

| Variable Name | Description | Light Mode Default | Dark Mode Value |
| :--- | :--- | :--- | :--- |
| `--bg` | Main background color | `#ffffff`[cite: 8] | `#121212`[cite: 8] |
| `--text` | Primary text color | `#1b1b1b`[cite: 8] | `#f1f1f1`[cite: 8] |
| `--muted` | Secondary/muted text | `#6b7280`[cite: 8] | `#9ca3af`[cite: 8] |
| `--accent` | Primary brand accent (Red) | `#c62828`[cite: 8] | `#ef5350`[cite: 8] |
| `--card` | Card & container background | `#f5f5f5`[cite: 8] | `#1e1e1e`[cite: 8] |
| `--border` | Subtle border color | `#e5e7eb`[cite: 8] | `#2e2e2e`[cite: 8] |

---

## 🛠️ Shared Toolkit Classes

* **`.container`**[cite: 8] — Main page wrapper. Centers content with a max-width of `1100px` and adds safe side padding.
* **`.section`**[cite: 8] — Vertical spacing block. Use this to separate major sections on a page (`padding: 3rem 0`).
* **`.page-title`**[cite: 8] — Page header title. Use for the main heading at the top of each page.
* **`.hero`**[cite: 8] — Big banner section. Use at the top of the homepage for slogans and intro calls-to-action.
* **`.cards`**[cite: 8] — Responsive card grid layout. Automatically wraps multiple cards using CSS grid.
* **`.card`**[cite: 8] — Individual card box. Use inside `.cards` for content blocks, team members, or project items.
* **`.btn`**[cite: 8] — Primary accent button. Use for main actions, navigation links, and form submissions.
* **`.btn-outline`**[cite: 8] — Secondary outline button. Use for alternative actions alongside primary buttons.
* **`.badge`**[cite: 8] — Small tag/badge. Use for status indicators, categories, or labels.
* **`.form-group`**[cite: 8] — Form input wrapper. Use to group labels and inputs with clean bottom spacing.
---
"@ed-components/ed-components": patch
---

Safari support and accessibility.

- The check answer button is a styled native button: the previous customized built-in element did not work in Safari. Clicking its icon no longer leaves the button enabled.
- `ed-choice` answers can be checked with the keyboard (tab and space) and have an accessible name.
- `ed-micro` opens and navigates its slides with buttons, and `ed-survey` smileys have an accessible label.

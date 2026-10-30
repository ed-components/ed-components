---
"@ed-components/ed-components": patch
---

TypeScript declarations register the elements in `HTMLElementTagNameMap`: `document.createElement("ed-choice")` and `querySelector("ed-choice")` are typed. The package is built with TypeScript 7 in strict mode, and ships its `CHANGELOG.md`.

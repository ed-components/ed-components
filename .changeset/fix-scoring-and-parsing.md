---
"@ed-components/ed-components": patch
---

Fix scoring and answer parsing.

- `ed-pb` no longer counts questions twice when content is given with the `emd` attribute: progress reaches 100% and the `COMPLETED` event is sent, which now includes the problem `label`.
- `ed-pb` `:num:` answers accept decimals (`3.14`, `3,14`), negative numbers and scientific notation.
- `ed-num` accepts a comma as decimal separator, passes `min`/`max` even when `0` and accepts decimal answers by default (`step="any"`).
- `ed-choice` single choice questions are corrected when an answer is selected, not on any click in the question.

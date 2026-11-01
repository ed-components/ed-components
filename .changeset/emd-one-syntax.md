---
"@ed-components/ed-components": minor
---

A question is written the same way in a problem and in its element alone, following the new [Educational Markdown specification](https://github.com/ed-components/ed-components/blob/main/spec/emd.md): `ed-num` accepts a question with `- :num: 3.14` and shows its stem (the expected number alone is still accepted), `ed-speech` accepts the expected answer as `- :say: hello` (the `answer` attribute still works and takes precedence), and `ed-pb` turns `:say:` lists into `ed-speech`. Questions are found by a common emd parser: `ed-pb` no longer counts a task list without correct choice as a question (the problem could never be completed), numbers question labels by question, and shows HTML content (`ishtml`) without turning its lists into questions.

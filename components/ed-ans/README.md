## Usage

The correct answer is wrapped inside de `<ed-ans>` element and will be compared to student answer.

You **must** indicate score for each answer and use first answer as the correct answer with score 100.

```html
<ed-ans>
- :100: Paris is the capital of _France_.
- :75: The capital is Paris.
- :50: Paris.
</ed-ans>
```

## Credits

NLP processing is made using [Winkjs](https://winkjs.org/wink-nlp/similarity.html) open-source library.

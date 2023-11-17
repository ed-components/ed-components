## Usage

A set of answers is wrapped inside de `<ed-ans>` element in a markdown unordered list extended with a score metadata and will be compared to student answer.

You **must**:

1. Indicate the score between 0 and 100 for each answer at the beginning of the answer `:100: Your answer here gets a score of 100`
2. **and** use first answer as the correct answer with score 100.

```html
<ed-ans>
- :100: Paris is the capital of _France_.
- :75: The capital is Paris.
- :50: Paris.
</ed-ans>
```

## Credits

NLP processing is made using [Winkjs](https://winkjs.org/wink-nlp/similarity.html) open-source library.

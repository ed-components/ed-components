## Usage

The content is written as a numeric question of an [ed-pb](../ed-pb/)
problem: the question, then the correct answer after `:num:` in a list.

```html
<ed-num>
How many Wonders of the ancient World were there?

- :num: 7
</ed-num>
```

The correct answer alone is also accepted, written with a dot or a comma.

```html
<ed-num>
-24
</ed-num>
```

You can pass [input type number attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#additional_attributes) like `min`, `max`, `step`.

```html
<ed-num min="0" max="10" step="0.01">
3.14
</ed-num>
```

By default, the score is evaluated by percentage of error, but you can set attribute value `eval` to `exact` to change this behavior.

```html
<ed-num eval="exact">
3.14
</ed-num>
```

If the answer is 0 the score is also 0 or 100% as no error can be calculated.

```html
<ed-num>
0
</ed-num>
```

### Feedback

Once the learner answered, the score is shown with the correct answer. A
blockquote after the answer is the feedback of the question, such as the
solution, shown at the same time.

```html
<ed-num>
Value of $\pi$ to two decimals?

- :num: 3,14

> $\pi$ is the ratio of a circle's circumference to its diameter.
</ed-num>
```

## Credits

This component is inspired by the [numerical input problem](https://docs.openedx.org/en/latest/educators/references/course_development/exercise_tools/numerical_input_xml.html) used in [Open edx](https://docs.openedx.org/).

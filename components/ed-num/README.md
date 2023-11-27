## Usage

The correct answer is provided inside the element.

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

## Credits

This component is inspired by the [numerical input problem](https://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/latest/exercises_tools/numerical_input.html#numerical-input-problem-olx-reference) used in [Open edx](https://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/latest/index.html).

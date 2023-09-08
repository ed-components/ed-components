## Usage

The answer attribute holds the correct answer.

```html
<ed-num answer="2">
1 + 1
</ed-num>
```

You can pass [input type number attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#additional_attributes) like `min`, `max`, `step`.

```html
<ed-num answer="0.3" min="0" max="10" step="0.1">
0.1 + 0.3
</ed-num>
```

The content passed can be formatted with markdown.

```html
<ed-num>
How many **times** you've been _lazy_ this mounth?
</ed-num>
```

## Credits

This component is inspired by the [numerical input problem](https://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/latest/exercises_tools/numerical_input.html#numerical-input-problem-olx-reference) used in [Open edx](https://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/latest/index.html).

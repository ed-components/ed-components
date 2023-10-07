# ed-components

> A set of web-components for education.

## Components

> Not ready for production yet. These components are used for research.

Wrapper component: [`<ed-pb>`](./ed-pb/)

Single answer components.

- [`<ed-survey>`](./ed-survey/)
- [`<ed-num>`](./ed-num/)
- [`<ed-speech>`](./ed-speech/)
- [`<ed-choice>`](./ed-choice/)

## Styling

Via CSS custom properties (variables) inspired by bootstrap.

- `--ed-primary`
- `--ed-success`
- `--ed-danger`
  
## User interface layout

Ideas comes from
[Edx](https://edx.readthedocs.io/projects/open-edx-building-and-running-a-course/en/open-release-ficus.master/course_components/create_problem.html#the-learner-view-of-a-problem)
licensed CC-BY-SA.


![The learner view of a problem from edx CC-BY-SA](/images/EdxAnatomyOfExercise.png)

1. Problem text.
2. Response field.
3. Rendered answer.
4. Submit.
5. Attempts.
6. Save.
7. Reset.
8. Show Answer.
9. Feedback.
    
![Feedbacks view in edx](/images/EdxAnatomyOfExercise2.png)

## Development

### Programming guide

1. Element class names are on the form `EdXyzElement` and have a static method
   `define` that allow to register element in the custom registry with default
   name `ed-xyz`. See [webcomponents.guide](https://webcomponents.guide/learn/components/).
   



### Testing with [Web Test Runner](https://modern-web.dev/docs/test-runner/)

All components are tested from the `components` directory.

To execute all tests `npm run test`, in watch mode: `npm run test:watch`.

To execute test for a single component, pass the
[test group](https://modern-web.dev/docs/test-runner/cli-and-configuration/#test-groups)
to wtr:

```bash
npm run test -- --group ed-survey
```

## TODO

- [ ] Share submit button with localization.
- [ ] Localize.
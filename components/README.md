# ed-components

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ed-components/ed-components/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@ed-components/ed-components.svg?style=flat)](https://www.npmjs.com/package/@ed-components/ed-components)

> A set of web-components for education.

## Components

> Not ready for production yet. These components are used for research.

### Wrapper components

- [`<ed-pb>`](./ed-pb/): Handle a set of questions and interactive answers.
- [`<ed-micro>`](./ed-micro/): Allows wrapping content inside a minimal dialog
  element to easily chunk information and maximize memorization.
  
### Single answer components

- [`<ed-choice>`](./ed-choice/): Single or multiple choice answer.
- [`<ed-num>`](./ed-num/): Numeric answer.
- [`<ed-speech>`](./ed-speech/): Speech to text answer.

### WIP

- [`<ed-survey>`](./ed-survey/)
- `<ed-ans>`: Simple text answer analyzed with NLP, not part of the bundle.

## Importing all elements

Components are published as npm packages, you can easily import all components and register it with the `ed-components` file including side-effects.

```js
import  "https://esm.sh/@ed-components/ed-components/ed-components";
```

You can also install locally with `npm i @ed-components/ed-components` and then in your code.

```js
import  "@ed-components/ed-components/ed-components";
```


A `registerComponents` function is also provided.

```js
import  registerElements from "https://esm.sh/@ed-components/ed-components";
registerElements()
```

With local package:

```js
import  registerElements from "@ed-components/ed-components";
registerElements()
```

## Importing one element

Each element can be imported on its own: the import registers it, with the
elements it uses (`ed-pb` registers `ed-choice`, `ed-num` and `ed-speech`).

```js
import "@ed-components/ed-components/ed-choice";
```

The entry points are `ed-choice`, `ed-micro`, `ed-num`, `ed-pb`, `ed-speech`
and `ed-survey`, also from a CDN:

```js
import "https://esm.sh/@ed-components/ed-components/ed-num";
```

To register an element under another name, import its class from the main
entry point, bundlers keep only the elements you use:

```js
import { EdNumElement } from "@ed-components/ed-components";
EdNumElement.define("my-num");
```

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
2. The documentation of components follows [Custom Element manifest](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/) JSDoc.
   



### Testing with [Web Test Runner](https://modern-web.dev/docs/test-runner/)

All components are tested from the `components` directory.

To execute all tests `npm run test`, in watch mode: `npm run test:watch`.

To execute test for a single component, pass the
[test group](https://modern-web.dev/docs/test-runner/cli-and-configuration/#test-groups)
to wtr:

```bash
npm run test -- --group ed-survey
```

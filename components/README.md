# ed-components

> A set of web-components for education.

## Components

- [`<ed-survey>`](./ed-survey/)
- [`<ed-quiz>`](./ed-quiz/)
- TODO ...

## Development

### Create a new component

Scaffolded with `npm init @open-wc`.

# <ed-example-component>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i ed-example-component
```

## Usage

```html
<script type="module">
  import "ed-example-component/ed-example-component.js";
</script>

<ed-example-component></ed-example-component>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

# ed-components

> A set of web-components for education.

## Components

- [`<ed-survey>`](./ed-survey/)
- [`<ed-quiz>`](./ed-quiz/)
- TODO ...

## Development

### Testing with [Web Test Runner](https://modern-web.dev/docs/test-runner/)

All components are tested from the `components` directory.

To execute all tests `npm run test`, in watch mode: `npm run test:watch`.

To execute test for a single component, pass the
[test group](https://modern-web.dev/docs/test-runner/cli-and-configuration/#test-groups)
to wtr:

```bash
npm run test -- --group ed-survey
```


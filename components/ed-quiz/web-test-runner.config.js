// Largerly inspired from https://github.com/modernweb-dev/web/issues/1954#issuecomment-1285280464

// import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fromRollup } from "@web/dev-server-rollup";
import rollupCommonjs from "@rollup/plugin-commonjs";
import rollupReplace from "@rollup/plugin-replace";
import rollupNodeResolve from "@rollup/plugin-node-resolve";

const nodeResolve = fromRollup(rollupNodeResolve);
const replace = fromRollup(rollupReplace);
const commonjs = fromRollup(rollupCommonjs);
const filteredLogs = ["Running in dev mode", "lit-html is in dev mode"];

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  /** Test files to run */
  files: ["dist/test/**/*.test.js"],

  coverageConfig: {
    include: ["**"],
    exclude: ["**/node_modules/**"],
  },

  /** Resolve bare module imports */
  nodeResolve: {
    browser: true,
    extensions: [".js", ".ts", ".json"],
    exportConditions: ["development"],
  },

  /** Filter out lit dev mode logs */
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (
        typeof arg === "string" &&
        filteredLogs.some((l) => arg.includes(l))
      ) {
        return false;
      }
    }
    return true;
  },

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto',
  plugins: [
    esbuildPlugin(),

    commonjs({
      include: ["**/node_modules/debug/**/*", "**/node_modules/ms/**/*"],
    }),
    replace({
      values: {
        "process.env.NODE_ENV": '"DEVELOPMENT"',
      },
      preventAssignment: true,
    }),
  ],

  /** Amount of browsers to run concurrently */
  // concurrentBrowsers: 2,

  /** Amount of test files per browser to test concurrently */
  // concurrency: 1,

  /** Browsers to run tests on */
  // browsers: [
  //   playwrightLauncher({ product: 'chromium' }),
  //   playwrightLauncher({ product: 'firefox' }),
  //   playwrightLauncher({ product: 'webkit' }),
  // ],

  // See documentation for all available options
});

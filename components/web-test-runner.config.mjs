// Largerly inspired from https://github.com/modernweb-dev/web/issues/1954#issuecomment-1285280464

import fs from 'fs';

// group tests by component
const packages = fs
  .readdirSync('.')
  .filter(dir => fs.statSync(`${dir}`).isDirectory() && dir.startsWith('ed-'));


// import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fromRollup } from "@web/dev-server-rollup";
import rollupCommonjs from "@rollup/plugin-commonjs";
import rollupReplace from "@rollup/plugin-replace";
import rollupNodeResolve from "@rollup/plugin-node-resolve";

const nodeResolve = fromRollup(rollupNodeResolve);
const replace = fromRollup(rollupReplace);
const commonjs = fromRollup(rollupCommonjs);

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  /** Test files to run */
  groups: packages.map(pkg => ({
    name: pkg,
    files: `${pkg}/dist/test/**/*.test.js`,
  })),

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
        arg.startsWith("Lit is in dev mode. Not recommended for production!")
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

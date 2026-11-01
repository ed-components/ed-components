// Largerly inspired from https://github.com/modernweb-dev/web/issues/1954#issuecomment-1285280464

import rollupCommonjs from "@rollup/plugin-commonjs";
import rollupJson from "@rollup/plugin-json";
import rollupResolve from "@rollup/plugin-node-resolve";
// import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fromRollup } from "@web/dev-server-rollup";
import fs from "fs";

const resolve = fromRollup(rollupResolve);
const commonjs = fromRollup(rollupCommonjs);
const json = fromRollup(rollupJson);

// components in development, not tested until they are part of the bundle
const wip = ["ed-ans"];

// group tests by component
const packages = fs
  .readdirSync(".")
  .filter(
    (dir) =>
      fs.statSync(`${dir}`).isDirectory() &&
      (dir.startsWith("ed-") || dir === "common") &&
      !wip.includes(dir),
  );

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  /** Test files to run */
  groups: packages.map((pkg) => ({
    name: pkg,
    files: `${pkg}/test/**/*.test.ts`,
  })),

  coverageConfig: {
    include: ["**"],
    exclude: ["**/node_modules/**"],
  },

  /** Resolve bare module imports */
  nodeResolve: true,
  // rollupCommonjs: true,
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
    esbuildPlugin({ ts: true }),
    resolve(),
    commonjs({
      include: ["**/node_modules/**/*"],
      // axe-core is loaded as a script that sets window.axe (a11y audits)
      exclude: ["**/node_modules/axe-core/**/*"],
    }),
    json(),
  ],

  /** Amount of browsers to run concurrently */
  // concurrentBrowsers: 2,

  /** Amount of test files per browser to test concurrently */
  // headless Chrome throttles background pages: fixtures waiting for an
  // animation frame time out when test files run in parallel
  concurrency: 1,

  /** Browsers to run tests on */
  // browsers: [
  //   playwrightLauncher({ product: 'chromium' }),
  //   playwrightLauncher({ product: 'firefox' }),
  //   playwrightLauncher({ product: 'webkit' }),
  // ],

  // See documentation for all available options
});

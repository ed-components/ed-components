import terser from "@rollup/plugin-terser";
import filesize from "rollup-plugin-filesize";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

import injectInnerHTML from "./injectInnerHTML.js";
import { watcher, noOpWatcher } from "./watcher.js";

let dev = process.env.NODE_ENV === "local";

export const plugins = [
  nodeResolve({ browser: true }),
  commonjs(),
  json(),
  // injectInnerHTML(),
  // dev ? watcher() : noOpWatcher(),
  // dev
  //   ? noOpWatcher()
  //   : terser({
  //     module: true,
  //     keep_classnames: true,
  //   }),
  filesize({
    showMinifiedSize: false,
    showBrotliSize: true,
  }),
];

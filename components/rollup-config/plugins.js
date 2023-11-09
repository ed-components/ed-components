import filesize from "rollup-plugin-filesize";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export const plugins = [
  nodeResolve({ browser: true }),
  commonjs(),
  json(),
  filesize({
    showMinifiedSize: false,
    showBrotliSize: true,
  }),
];

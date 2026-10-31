import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export const plugins = [nodeResolve({ browser: true }), commonjs(), json()];

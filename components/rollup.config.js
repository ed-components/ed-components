import { plugins } from "./rollup-config/plugins.js";
import { getModules } from "./rollup-config/getModules.js";

let dev = process.env.NODE_ENV === "local";
// const dev = 'local'
// const modules = !dev ? getModules() : [];
export default [
  {
    input: "dist/esm/index.js",
    output: {
      file: "dist/index.min.js",
      format: "esm",
    },
    plugins,
  },
  // ...modules
];

import { access } from "node:fs";

import { plugins } from "./rollup-config/plugins.js";
// import { getModules } from "./rollup-config/getModules.js";

let dev = process.env.NODE_ENV === "local";
// const dev = 'local'
// const modules = !dev ? getModules() : []

export default [
  {
    input: ["dist/esm/index.js", "dist/esm/ed-components.js"],
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins,
  },
  // ...modules
];

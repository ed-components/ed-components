import { plugins } from "./rollup-config/plugins.js";

export default [
  {
    input: ["dist/esm/index.js", "dist/esm/ed-components.js"],
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins,
  },
];

import { access } from 'node:fs';


import { plugins } from "./rollup-config/plugins.js";
// import { getModules } from "./rollup-config/getModules.js";

let dev = process.env.NODE_ENV === "local";
// const dev = 'local'
// const modules = !dev ? getModules() : []

// In local development check against quarto-site
let output = [{
  file: "dist/index.min.js",
  format: "esm",
},
]

access("/home/ben/Documents/git/0lyceum/www-quarto/_site/js", (err) => {
  if (!err) {
    console.log("local")
    output.push({
      file: "/home/ben/Documents/git/0lyceum/www-quarto/_site/js/ed-components.js",
      format: "esm",
    })
  }
});
export default [
  {
    input: "dist/esm/index.js",
    output,
    plugins,
  },
  // ...modules
];

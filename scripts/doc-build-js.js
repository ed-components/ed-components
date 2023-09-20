#!/usr/bin/env node

const esbuild = require("esbuild");

const path = require("node:path");
const { exec } = require("child_process");

if (process.argv.length === 2) {
  console.error("Expected at least one file to proceed!");
  process.exit(1);
}

const file = process.argv[2];

const { dir, ext } = path.parse(file);
const comp = dir.split("/")[1];

// need to rebuild common shared dependencie
exec("pnpm --filter ./components/common run build");

const entryPoint = path.join(dir, comp + ext);
console.log("Building", entryPoint, "to _site/js");

esbuild
  .build({
    logLevel: "info",
    entryPoints: [entryPoint],
    bundle: true,
    sourcemap: true,
    outdir: "_site/js",
  })
  .catch(() => process.exit(1));

#!/usr/bin/env node

const esbuild = require("esbuild")

const path = require('node:path');

if (process.argv.length === 2) {
    console.error('Expected at least one file to proceed!');
    process.exit(1);
}

const file = process.argv[2]

const { dir, ext } = path.parse(file)
const comp = dir.split('/')[1]

const entryPoint = path.join(dir, comp + ext)
console.log("Building", entryPoint, "to _site/js")


esbuild.build({
    logLevel: "info",
    entryPoints: [entryPoint],
    bundle: true,
    outdir: "_site/js",
})
    .catch(() => process.exit(1));

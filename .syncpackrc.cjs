// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  versionGroups: [
    {
      dependencies: ["typescript"],
      packages: ["components/**"],
      pinVersion: "^5.1.6",
    },
  ],
};

module.exports = config;

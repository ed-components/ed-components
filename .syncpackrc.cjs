// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  sortFirst: ["name", "description", "version", "author", "keywords", "type"],
  versionGroups: [
    {
      dependencies: ["typescript"],
      packages: ["**ed-*"],
      pinVersion: "^5.1.6",
    },
  ],
};

module.exports = config;

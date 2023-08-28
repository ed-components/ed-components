// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  sortFirst: [
    "private",
    "name",
    "description",
    "version",
    "author",
    "keywords",
    "type",
  ],
  versionGroups: [
    {
      dependencies: ["typescript"],
      packages: ["**ed-*"],
      pinVersion: "^5.2.2",
    },
  ],
};

module.exports = config;

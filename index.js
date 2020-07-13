// export * from "./lib/basic";
// export * from "./lib/conversion";
// export * from "./lib/isMethod";
// export * from "./lib/number";
// export * from "./lib/search";
// export * from "./lib/sort";

const basic = require("./lib/basic");
const conversion = require("./lib/conversion");
const ismethod = require("./lib/isMethod");
const number = require("./lib/number");
const search = require("./lib/search");
const sort = require("./lib/sort");

module.exports = {
  basic,
  conversion,
  ismethod,
  number,
  search,
  sort,
};

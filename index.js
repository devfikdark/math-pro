const basic = require("./lib/basic");
const conversion = require("./lib/conversion");
const ismethod = require("./lib/isMethod");
const number = require("./lib/number");
const search = require("./lib/search");
const sort = require("./lib/sort");

const mathematica = {
  ...basic, 
  ...conversion, 
  ...ismethod, 
  ...number, 
  ...search, 
  ...sort
}

module.exports = mathematica;
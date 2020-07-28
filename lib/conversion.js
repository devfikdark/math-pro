/**
 * Get the arrays of digits from a number
 * @param {*} number
 * digitToArray(12345); // [1, 2, 3, 4, 5]
 */
const digitToArray = (number) => {
  return `${number}`.split("").map((v) => parseInt(v));
};

/**
 * Convert a number to equivalent characters
 * @param {*} number
 * numberToChars(0); // A
 * numberToChars(51); // AZ
 */
const numberToChars = (number) => {
  return `${number >= 26 ? toChars(Math.floor(number / 26) - 1) : ""}
  ${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[number % 26]}`;
};

/**
 * Convert degrees to radians
 * @param {*} deg
 */
const degsToRads = (deg) => {
  return (deg * Math.PI) / 180.0;
};

/**
 * Convert radians to degrees
 * @param {*} rad
 */
const radsToDegs = (rad) => {
  return (rad * 180) / Math.PI;
};

/**
 * Given a string and convert it to a number
 * @param {*} str
 * console.log(stringToNumber("25"));
 */
const stringToNumber = (str) => {
  return parseFloat(str);
};

/**
 * Pass the number in string format and then give fromBase and toBase
 * means from which base to which base you want to convert the number.
 * convertNumber('100111', 2, 16) // "27"
 * convertNumber('23432', 8, 16) // "271a"
 * convertNumber('23432', 10, 16) // "5b88"
 * convertNumber('23432', 10, 8) //"55610"
 * convertNumber('23432', 16, 2) // "100011010000110010"
 * @param {*} n
 * @param {*} fromBase
 * @param {*} toBase
 */
const convertNumber = (n, fromBase, toBase) => {
  if (fromBase === void 0) {
    fromBase = 10;
  }
  if (toBase === void 0) {
    toBase = 10;
  }
  return parseInt(n.toString(), fromBase).toString(toBase);
};

module.exports = {
  digitToArray,
  numberToChars,
  radsToDegs,
  degsToRads,
  stringToNumber,
  convertNumber,
};

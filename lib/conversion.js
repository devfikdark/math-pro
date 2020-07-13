/**
 * Get the arrays of digits from a number
 * @param {*} number
 * digitToArray(12345); // [1, 2, 3, 4, 5]
 */
exports.digitToArray = number => 
`${number}`.split('').map(v => parseInt(v));

/**
 * Convert a number to equivalent characters
 * @param {*} number
 * numberToChars(0); // A
 * numberToChars(51); // AZ
 */
exports.numberToChars = number => 
  `${number >= 26 ? toChars(Math.floor(number / 26) - 1) : ''}
  ${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[number % 26]}`;

/**
 * Convert degrees to radians
 * @param {*} deg
 */
exports.degsToRads = deg => (deg * Math.PI) / 180.0;

/**
 * Convert radians to degrees
 * @param {*} rad
 */
exports.radsToDegs = rad => rad * 180 / Math.PI;

/**
 * Given a string and convert it to a number
 * @param {*} str
 * console.log(stringToNumber("25"));
 */
exports.stringToNumber = (str) => parseFloat(str);
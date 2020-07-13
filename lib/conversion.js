/**
 * Get the arrays of digits from a number
 * @param {*} number
 * digitToArray(12345); // [1, 2, 3, 4, 5]
 */
export function digitToArray(number) {
  return `${number}`.split("").map((v) => parseInt(v));
}

/**
 * Convert a number to equivalent characters
 * @param {*} number
 * numberToChars(0); // A
 * numberToChars(51); // AZ
 */
export function numberToChars(number) {
  return `${number >= 26 ? toChars(Math.floor(number / 26) - 1) : ""}
  ${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[number % 26]}`;
}

/**
 * Convert degrees to radians
 * @param {*} deg
 */
export function degsToRads(deg) {
  return (deg * Math.PI) / 180.0;
}

/**
 * Convert radians to degrees
 * @param {*} rad
 */
export function radsToDegs(rad) {
  return (rad * 180) / Math.PI;
}

/**
 * Given a string and convert it to a number
 * @param {*} str
 * console.log(stringToNumber("25"));
 */
export function stringToNumber(str) {
  return parseFloat(str);
}

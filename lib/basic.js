/**
 * Pass an (array or argument) and add all the
 * elements, return the result
 * @param {*} array
 */
export function addition(...array) {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a + b);
}

/**
 * Pass an (array or argument) and subtract all the
 * elements, return the result
 * @param {*} array
 */
export function subtraction(...array) {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a - b);
}

/**
 * Pass an (array or argument) and multiplication all the
 * elements, return the result
 * @param {*} array
 */
export function multiplication(...array) {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a * b);
}

/**
 * Pass an (array or argument) and divide all the
 * elements, return the result
 * @param {*} array
 */
export function division(...array) {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a / b);
}

/**
 * Pass an (array or argument)
 * return average of the numbers
 * @param {*} array
 */
export function average(...array) {
  if (array[0][0] !== undefined) array = array[0];
  let sum = array.reduce((a, b) => a + b);
  return parseFloat(sum / array.length);
}

/**
 * Calculate the mod of collection index
 * @param {*} firstNumber
 * @param {*} secondNumber
 * getRemainder(-1, 5); // 4
 * getRemainder(3, 5);  // 3
 * getRemainder(6, 5);  // 1
 */
export function getRemainder(firstNumber, secondNumber) {
  return ((firstNumber % secondNumber) + secondNumber) % secondNumber;
}

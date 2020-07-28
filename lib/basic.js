/**
 * Pass an (array or argument) and add all the
 * elements, return the result
 * @param {*} array
 */
const addition = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a + b);
};

/**
 * Pass an (array or argument) and subtract all the
 * elements, return the result
 * @param {*} array
 */
const subtraction = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a - b);
};

/**
 * Pass an (array or argument) and multiplication all the
 * elements, return the result
 * @param {*} array
 */
const multiplication = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a * b);
};

/**
 * Pass an (array or argument) and divide all the
 * elements, return the result
 * @param {*} array
 */
const division = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a / b);
};

/**
 * Pass an (array or argument)
 * return average of the numbers
 * @param {*} array
 */
const average = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  let sum = array.reduce((a, b) => a + b);
  return parseFloat(sum / array.length);
};

/**
 * Calculate the mod of collection index
 * @param {*} firstNumber
 * @param {*} secondNumber
 * getRemainder(-1, 5); // 4
 * getRemainder(3, 5);  // 3
 * getRemainder(6, 5);  // 1
 */
const getRemainder = (firstNumber, secondNumber) => {
  return ((firstNumber % secondNumber) + secondNumber) % secondNumber;
};

/**
 * pass arguments or array and get the minimum number
 * getMinimum([1,3,5,4,9]) // 1
 * getMinimum(2,45,2,76,0,4) // 0
 * @param  {...any} array
 */
const getMinimum = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  return Math.min(...array);
};

/**
 * pass arguments or array and get the maximum number
 * @param  {...any} array
 */
const getMaximum = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  return Math.max(...array);
};

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  average,
  getRemainder,
  getMaximum,
  getMinimum,
};

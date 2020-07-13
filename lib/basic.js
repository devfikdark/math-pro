/**
 * Pass an (array or argument) and add all the
 * elements, return the result
 * @param {*} array
 */
exports.add = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a + b);
}

/**
 * Pass an (array or argument) and subtract all the
 * elements, return the result
 * @param {*} array
 */
exports.subtraction = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a - b);
}

/**
 * Pass an (array or argument) and multiplication all the
 * elements, return the result
 * @param {*} array
 */
exports.multiplication = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a * b);
}


/**
 * Pass an (array or argument) and divide all the
 * elements, return the result
 * @param {*} array
 */
exports.division = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a, b) => a / b);
}


/**
 * Pass an (array or argument)
 * return average of the numbers
 * @param {*} array
 */
exports.average = (...array) => {
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
exports.getRemainder = (firstNumber, secondNumber) => 
  ((firstNumber % secondNumber) + secondNumber) % secondNumber;
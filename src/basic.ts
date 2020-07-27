/**
 * Pass an (array or argument) and add all the
 * elements, return the result
 * @param {*} array
 */
const addition = (...array: any) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a:any, b:any) => a + b);
};

/**
 * Pass an (array or argument) and subtract all the
 * elements, return the result
 * @param {*} array
 */
const subtraction = (...array: any) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a:any, b:any) => a - b);
};

/**
 * Pass an (array or argument) and multiplication all the
 * elements, return the result
 * @param {*} array
 */
const multiplication = (...array:any) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a:any, b:any) => a * b);
};

/**
 * Pass an (array or argument) and divide all the
 * elements, return the result
 * @param {*} array
 */
const division = (...array:any) => {
  if (array[0][0] !== undefined) array = array[0];
  return array.reduce((a:any, b:any) => a / b);
};

/**
 * Pass an (array or argument)
 * return average of the numbers
 * @param {*} array
 */
const average = (...array:any):any => {
  if (array[0][0] !== undefined) array = array[0];
  const sum = array.reduce((a:any, b:any) => a + b);
  return sum / array.length;
};

/**
 * Calculate the mod of collection index
 * @param {*} firstNumber
 * @param {*} secondNumber
 * getRemainder(-1, 5); // 4
 * getRemainder(3, 5);  // 3
 * getRemainder(6, 5);  // 1
 */
const getRemainder = (firstNumber: any, secondNumber: any): any => {
  return ((firstNumber % secondNumber) + secondNumber) % secondNumber;
};

/**
 * pass arguments or array and get the minimum number
 * getMinimum([1,3,5,4,9]) // 1
 * getMinimum(2,45,2,76,0,4) // 0
 * @param  {...any} array
 */
const getMinimum = (...array: any) => {
  if (array[0][0] !== undefined) array = array[0];
  return Math.min(...array);
};

/**
 * pass arguments or array and get the maximum number
 * @param  {...any} array
 */
const getMaximum = (...array: any) => {
  if (array[0][0] !== undefined) array = array[0];
  return Math.max(...array);
};

export default {
  addition,
  subtraction,
  multiplication,
  division,
  average,
  getRemainder,
  getMaximum,
  getMinimum,
};

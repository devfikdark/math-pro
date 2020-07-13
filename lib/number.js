/**
 * Pass an (array or argument)
 * return greatest common divisor
 * @param {*} array
 * gcd(4, 7); // 1
 */
export function gcd(...array) {
  if (array[0][0] !== undefined) array = array[0];
  let ans = array[0];
  for (let i = 1; i < array.length; i++) {
    ans = gcdCalculate(ans, array[i]);
  }
  return ans;
}
let gcdCalculate = (firstNumber, secondNumber) =>
  secondNumber === 0
    ? firstNumber
    : gcdCalculate(secondNumber, firstNumber % secondNumber);

/**
 * Round a number to a given number of digits
 * @param {*} number
 * @param {*} decimals
 * round(1.234567, 3); // 1.235
 * round(1.2345678, 5); // 1.23457
 */
export function round(number, decimals = 0) {
  return Number(`${Math.round(`${number}e${decimals}`)}e-${decimals}`);
}

/**
 * Truncate a number to a given number of decimal places without rounding
 * @param {*} number
 * @param {*} fixed
 * toFixed(25.198726354, 2); // 25.19
 * toFixed(25.198726354, 5); // 25.19872
 */
export function toFixed(number, fixed) {
  return `${number}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];
}

/**
 * Pass a number and calculate the factorial of the number
 * @param {*} number
 */
export function getFactorial(number) {
  return number != 1 ? number * getFactorial(number - 1) : 1;
}

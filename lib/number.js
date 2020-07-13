/**
 * Pass an (array or argument)
 * return greatest common divisor 
 * @param {*} array
 * gcd(4, 7); // 1
 */
exports.gcd = (...array) => {
  if (array[0][0] !== undefined) array = array[0];
  let ans = array[0];
  for (let i = 1; i < array.length; i++) {
    ans = gcdCalculate(ans, array[i]);
  }
  return ans;
}
let gcdCalculate = (firstNumber, secondNumber) => 
  secondNumber === 0 ? firstNumber 
  : gcdCalculate(secondNumber, firstNumber % secondNumber);


/**
 * Round a number to a given number of digits
 * @param {*} number
 * @param {*} decimals
 * round(1.234567, 3); // 1.235
 * round(1.2345678, 5); // 1.23457
 */
exports.round = (number, decimals = 0) => 
  Number(`${Math.round(`${number}e${decimals}`)}e-${decimals}`);


/**
 * Truncate a number to a given number of decimal places without rounding
 * @param {*} number
 * @param {*} fixed
 * toFixed(25.198726354, 2); // 25.19
 * toFixed(25.198726354, 5); // 25.19872
 */
exports.toFixed = (number, fixed) => 
  `${number}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0]; 

/**
 * Pass a number and calculate the factorial of the number
 * @param {*} number
 */
exports.getFactorial = (number) => {
  return factorialCalculate(number);
}
let factorialCalculate = (number) => {
  return number > 1 ? number * factorialCalculate(number - 1) : 1;
};

/**
 * Pass a base number, power number and calculate the power of the number
 * @param {*} number
 */
exports.bigPower = (base, power) => {
  if (power === 0) return 1;
  if (power % 2 === 0) {
    const multiplier = bigPower(base, power / 2);
    return multiplier * multiplier;
  }
  const multiplier = bigPower(base, Math.floor(power / 2));
  return multiplier * multiplier * base;
}

/**
 * Return a fibonacci sequence as an array.
 * @param number
 * @return {number[]}
 * console.log(fibSequence(10)) // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
 */
exports.fibSequence = (number) => {
  let fibSeq = [1], currentValue = 1, previousValue = 0;
  if (number === 1) return fibSeq;
  let iterationsCounter = number - 1;
  while (iterationsCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;
    fibSeq.push(currentValue);
    iterationsCounter -= 1;
  }
  return fibSeq;
}

/**
 * Calculate fibonacci number at specific position using Dynamic Programming approach.
 * @param number
 * @return {number}
 * console.log(fibonacciNth(10)) // 55
 */
exports.fibNth = (number) => {
  let currentValue = 1, previousValue = 0;
  if (number === 1) return 1;
  let iterationsCounter = number - 1;
  while (iterationsCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;
    iterationsCounter -= 1;
  }
  return currentValue;
}
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

let factorialCalculate = (number) => {
  return number > 1 ? number * factorialCalculate(number - 1) : 1;
};

/**
 * Pass a base number, power number and calculate the power of the number
 * @param {*} number
 */
export function bigPower(base, power) {
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
export function fibSequence(number) {
  let fibSeq = [1],
    currentValue = 1,
    previousValue = 0;
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
export function fibNth(number) {
  let currentValue = 1,
    previousValue = 0;
  if (number === 1) return 1;
  let iterationsCounter = number - 1;
  while (iterationsCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;
    iterationsCounter -= 1;
  }
  return currentValue;
}

/**
 * Get pascal Triangle
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 * console.log(pascalTriangle(10))
 * [ 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1 ]
 */
export function pascalTriangle(lineNumber) {
  let currentLine = [1],
    currentLineSize = lineNumber + 1;
  for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
    currentLine[numIndex] =
      (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex;
  }
  return currentLine;
}

/**
 * Get prime list
 * @param {number}
 * @return {primes[]}
 * console.log(getPrimeList(20)) // [ 2, 3, 5, 7, 11, 13, 17, 19 ]
 */
export function getPrimeList(number) {
  let isPrime = new Array(number + 1).fill(true),
    primes = [];
  isPrime[0] = false;
  isPrime[1] = false;
  for (let num = 2; num <= number; num += 1) {
    if (isPrime[num] === true) {
      primes.push(num);
      let nextnum = num * num;
      while (nextnum <= number) {
        isPrime[nextnum] = false;
        nextnum += num;
      }
    }
  }
  return primes;
}

/**
 * Pass minimum and maximum number to generate the random number between them
 * randomNumber(3, 10) // 10
 * randomNumber(3, 10) // 8
 * @param {*} min
 * @param {*} max
 */
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

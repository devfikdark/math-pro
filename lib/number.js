"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Pass an (array or argument)
 * return greatest common divisor
 * @param {*} array
 * gcd(4, 7); // 1
 */
var gcd = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    if (array[0][0] !== undefined)
        array = array[0];
    var ans = array[0];
    for (var i = 1; i < array.length; i++) {
        ans = gcdCalculate(ans, array[i]);
    }
    return ans;
};
var gcdCalculate = function (firstNumber, secondNumber) {
    return secondNumber === 0 ? firstNumber
        : gcdCalculate(secondNumber, firstNumber % secondNumber);
};
/**
 * Round a number to a given number of digits
 * @param {*} number
 * @param {*} decimals
 * round(1.234567, 3); // 1.235
 * round(1.2345678, 5); // 1.23457

const round = (number:any, decimals = 0) => {
  return Number(`${Math.round(`${number}e${decimals}`)}e-${decimals}`);
};


 * Truncate a number to a given number of decimal places without rounding
 * @param {*} number
 * @param {*} fixed
 * toFixed(25.198726354, 2); // 25.19
 * toFixed(25.198726354, 5); // 25.19872

const toFixed = (number:any, fixed:any):any => {
  return `${number}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];
};
 */
/**
 * Pass a number and calculate the factorial of the number
 * @param {*} number
 */
var getFactorial = function (number) {
    return number != 1 ? number * getFactorial(number - 1) : 1;
};
/**
 * Pass a base number, power number and calculate the power of the number
 * @param {*} number
 */
var bigPower = function (base, power) {
    if (power === 0)
        return 1;
    if (power % 2 === 0) {
        var multiplier_1 = bigPower(base, power / 2);
        return multiplier_1 * multiplier_1;
    }
    var multiplier = bigPower(base, Math.floor(power / 2));
    return multiplier * multiplier * base;
};
/**
 * Return a fibonacci sequence as an array.
 * @param number
 * @return {number[]}
 * console.log(fibSequence(10)) // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
 */
var fibSequence = function (number) {
    var fibSeq = [1], currentValue = 1, previousValue = 0;
    if (number === 1)
        return fibSeq;
    var iterationsCounter = number - 1;
    while (iterationsCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;
        fibSeq.push(currentValue);
        iterationsCounter -= 1;
    }
    return fibSeq;
};
/**
 * Calculate fibonacci number at specific position using Dynamic Programming approach.
 * @param number
 * @return {number}
 * console.log(fibonacciNth(10)) // 55
 */
var fibNth = function (number) {
    var currentValue = 1, previousValue = 0;
    if (number === 1)
        return 1;
    var iterationsCounter = number - 1;
    while (iterationsCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;
        iterationsCounter -= 1;
    }
    return currentValue;
};
/**
 * Get pascal Triangle
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 * console.log(pascalTriangle(10))
 * [ 1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1 ]
 */
var pascalTriangle = function (lineNumber) {
    var currentLine = [1], currentLineSize = lineNumber + 1;
    for (var numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
        currentLine[numIndex] =
            (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex;
    }
    return currentLine;
};
/**
 * Get prime list
 * @param {number}
 * @return {primes[]}
 * console.log(getPrimeList(20)) // [ 2, 3, 5, 7, 11, 13, 17, 19 ]
 */
var getPrimeList = function (number) {
    var isPrime = new Array(number + 1), primes = [];
    isPrime[0] = true;
    isPrime[1] = true;
    for (var num = 2; num <= number; num += 1) {
        if (isPrime[num] === undefined) {
            primes.push(num);
            var nextnum = num * num;
            while (nextnum <= number) {
                isPrime[nextnum] = true;
                nextnum += num;
            }
        }
    }
    return primes;
};
/**
 * Pass minimum and maximum number to generate the random number between them
 * randomNumber(3, 10) // 10
 * randomNumber(3, 10) // 8
 * @param {*} min
 * @param {*} max
 */
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * Pass a number and get the reverse of that number with actual sign
 * reverseNumber(32) // 23
 * reverseNumber(-32) // -23
 * @param {*} number
 */
var reverseNumber = function (number) {
    var sign = false;
    if (number < 0) {
        sign = true;
        number *= -1;
    }
    var reversed = number.toString().split("").reverse().join("");
    if (sign)
        reversed *= -1;
    return reversed;
};
exports.default = {
    gcd: gcd,
    getFactorial: getFactorial,
    bigPower: bigPower,
    fibSequence: fibSequence,
    fibNth: fibNth,
    pascalTriangle: pascalTriangle,
    getPrimeList: getPrimeList,
    randomNumber: randomNumber,
    reverseNumber: reverseNumber,
};

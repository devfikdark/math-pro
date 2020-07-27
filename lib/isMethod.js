"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Pass two number and return true or false if the
 * dividend is divided by divisor
 * @param {*} dividend
 * @param {*} divisor
 */
var isDivisor = function (dividend, divisor) {
    return dividend % divisor == 0;
};
/**
 * Pass a number and return true or false
 * based on if the number is even
 * @param {*} number
 */
var isEven = function (number) {
    return number % 2 == 0;
};
/**
 * Pass a number and return true or false
 * based on if the number is odd
 * @param {*} number
 */
var isOdd = function (number) {
    return number % 2 != 0;
};
/**
 * Pass a number and return true or false
 * if the number is prime or not
 * @param {*} num
 */
var isPrime = function (num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0)
            return false;
    return num > 1;
};
/**
 * Check palindrome number
 * @param {*} number
 * palindromeNumber(45674); // false
 * palindromeNumber(4567654); // true
 */
var isPalindrome = function (number) {
    var final = 0, temp = number;
    while (number > 0) {
        var rem = number % 10;
        number = Math.floor(number / 10);
        final = final * 10 + rem;
    }
    return final == temp;
};
/**
 * Check positive number
 * @param {*} number
 * isPositive(45674); // true
 * isPositive(-4567654); // false
 */
var isPositive = function (number) {
    if (number === 0)
        return false;
    return ((number >> 31) & 1) === 0;
};
/**
 * Check negative number
 * @param {*} number
 * isNegative(45674); // false
 * isNegative(-4567654); // true
 */
var isNegative = function (number) {
    if (number === 0)
        return false;
    return ((number >> 31) & 1) === 1;
};
/**
 * Check isPowerOfTwo number
 * @param {*} number
 * isPowerOfTwo(35); // false
 * isPowerOfTwo(32); // true
 */
var isPowerOfTwo = function (number) {
    if (number < 1)
        return false;
    return (number & (number - 1)) === 0;
};
exports.default = {
    isDivisor: isDivisor,
    isEven: isEven,
    isOdd: isOdd,
    isPrime: isPrime,
    isPalindrome: isPalindrome,
    isPositive: isPositive,
    isNegative: isNegative,
    isPowerOfTwo: isPowerOfTwo,
};

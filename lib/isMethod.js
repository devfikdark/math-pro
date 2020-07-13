/**
 * Pass two number and return true or false if the
 * dividend is divided by divisor
 * @param {*} dividend
 * @param {*} divisor
 */
exports.isDivisor = (dividend, divisor) => dividend % divisor == 0;

/**
 * Pass a number and return true or false
 * based on if the number is even
 * @param {*} number
 */
exports.isEven = (number) => number % 2 == 0;

/**
 * Pass a number and return true or false
 * based on if the number is odd
 * @param {*} number
 */
exports.isOdd = (number) => number % 2 != 0;

/**
 * Pass a number and return true or false
 * if the number is prime or not
 * @param {*} num
 */
exports.isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

/**
 * Check palindrome number
 * @param {*} number
 * palindromeNumber(45674); // false
 * palindromeNumber(4567654); // true
 */
exports.isPalindrome = (number) => {
  var final = 0, temp = number;
  while(number>0) { var rem = number % 10; number = parseInt(number / 10);
      final = (final * 10) + rem; } return final == temp;
}
<div align='center'>

![img](img/Group%204.png)

![npm release](https://badgen.net/npm/v/math-pro)
![install size](https://badgen.net/packagephobia/install/math-pro)
![GitHub](https://img.shields.io/github/license/pro-js/math-pro)
![downloads](https://badgen.net/npm/dt/math-pro)

</div>

## Introduction

Math Pro is an extensive math library which will help you to do the basic calculation of math. Besides basic calculation you can also do the sort like sort, search. Some number properties of math have also included here. If you fear math then this library is for you.

## Features

- Support numbers, big numbers, arrays
- Is compatible with JavaScript's built-in functions.
- Open source

## Download and usage

To use this package you need to install it from [npm](https://www.npmjs.com/package/math-pro). In your project directory write the following command to get the package -

`npm i math-pro`

After installation you need to import the package in your `.js` file.

#### import as ES5 format

```js
const mt = require("math-pro");

console.log(mt.addition(2, 4, 5, 6));

// 17
```

#### import as ES6 format 

```js
import mt from 'math-pro'

console.log(mt.addition(2, 4, 5, 6));

// 17
```
_***N.B**: You may encounter an issue when importing as ES6 format. To fix the issue in your **package.json** file add `"type": "module"`_

## Available functions

Below are the available functions that we have in our library.

### Basic functions

|    Function name     |     Example (Arguments)     |        Example (Array)        |
| :------------------: | :-------------------------: | :---------------------------: |
|    **addition()**    |    addition(2,3,4) // 9     |    addition([2,3,4]) // 9     |
|  **subtraction()**   |  subtraction(2,3,4) // -5   |  subtraction([2,34,4]) // -5  |
| **multiplication()** | multiplication(2,3,4) // 24 | multiplication([2,3,4]) // 24 |
|    **division()**    |  division(8,2,3) // 1.3333  |  division([2,3,4]) // 1.3333  |
|    **average()**     |     average(2,3,4) // 3     |     average([2,3,4]) // 3     |
|  **getRemainder()**  |   getRemainder(5, 2) // 1   |              :x:              |
|   **getMinimum()**   |   getMinimum(2,3,4) // 2    |   getMinimum([2,3,4]) // 2    |
|   **getMaximum()**   |   getMaximum(2,3,4) // 4    |   getMaximum([2,3,4]) // 4    |

### Conversion functions

|    Function name     |         Example (Arguments)          | Example (Array) |
| :------------------: | :----------------------------------: | :-------------: |
|  **digitToArray()**  |     digitToArray(234) // [1,2,3]     |       :x:       |
| **numberToChars()**  |       numberToChars(51) // AZ        |       :x:       |
|   **degsToRads()**   | degsToRads(5) // 0.08726646259971647 |       :x:       |
|   **radsToDegs()**   | radsToDegs(0.08726646259971647) // 5 |       :x:       |
| **stringToNumber()** |      stringToNumber("25") // 25      |       :x:       |
| **convertNumber()**  | convertNumber('100111', 2, 16) // 27 |       :x:       |

### Check functions

|   Function name    |    Example (Arguments)    | Example (Array) |
| :----------------: | :-----------------------: | :-------------: |
|  **isDivisor()**   | isDivisor(25, 5) // true  |       :x:       |
|    **isEven()**    |    isEven(10) // true     |       :x:       |
|    **isOdd()**     |    isOdd(10) // false     |       :x:       |
|   **isPrime()**    |    isPrime(7) // true     |       :x:       |
| **isPalindrome()** | isPalindrome(232) // true |       :x:       |
|  **isPositive()**  |  isPositive(50) // true   |       :x:       |
|  **isNegative()**  |  isNegative(-50) // true  |       :x:       |
| **isPowerOfTwo()** | isPowerOfTwo(32) // true  |       :x:       |

### Number functions

|    Function name     |         Example (Arguments)         |  Example (Array)   |
| :------------------: | :---------------------------------: | :----------------: |
|      **gcd()**       |          gcd(16,4,8) // 4           | gcd([16,4,8]) // 4 |
|     **round()**      |     round(1.23456, 3) // 1.235      |        :x:         |
|    **toFixed()**     |    toFixed(1.23456, 3) // 1.234     |        :x:         |
|  **getFactorial()**  |       getFactorial(5) // 120        |        :x:         |
|    **bigPower()**    |         bigPower(3,3) // 27         |        :x:         |
|  **fibSequence()**   |    fibSequence(3) // [ 1, 1, 2 ]    |        :x:         |
|     **fibNth()**     |          fibNth(10) // 55           |        :x:         |
| **pascalTriangle()** | pascalTriangle(3) // [ 1, 3, 3, 1 ] |        :x:         |
|  **getPrimeList()**  |   getPrimeList(5) // [ 2, 3, 5 ]    |        :x:         |
|  **randomNumber()**  |      randomNumber(3, 10) // 9       |        :x:         |
| **reverseNumber()**  |      reverseNumber(234) // 432      |        :x:         |

### Search functions

|   Function name    | Example (Arguments) |        Example (Array)        |
| :----------------: | :-----------------: | :---------------------------: |
| **binarySearch()** |         :x:         | binarySearch([2,3,4], 4) // 2 |
| **linearSearch()** |         :x:         | linearSearch([3,4,2], 4) // 1 |

### Sort functions

|    Function name    | Example (Arguments) |             Example (Array)              |
| :-----------------: | :-----------------: | :--------------------------------------: |
|  **bubbleSort()**   |         :x:         |      bubbleSort([3,2,4]) // [2,3,4]      |
|   **mergeSort()**   |         :x:         |   mergeSort([3,2,4], "des") // [4,3,2]   |
|   **quickSort()**   |         :x:         |      quickSort([3,2,4]) // [2,3,4]       |
| **selectionSort()** |         :x:         | selectionSort([3,2,4], "asc") // [2,3,4] |
| **insertionSort()** |         :x:         | insertionSort([3,2,4], "des") // [4,3,2] |

#### This project is licensed under `MIT`

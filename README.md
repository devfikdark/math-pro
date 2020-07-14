<div align='center'>

![img](img/Group%204.png)

![GitHub release (latest by date)](https://img.shields.io/github/v/release/pro-js/math-pro?color=green&label=npm%20release)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/pro-js/math-pro?color=yellow)
![Node.js Package](https://github.com/pro-js/math-pro/workflows/Node.js%20Package/badge.svg)
![GitHub](https://img.shields.io/github/license/pro-js/math-pro)

</div>

## Introduction

Math Pro is an extensive math library which will help you to do the basic calculation of math. Besides basic calculation you can also do the sort like sort, search. Some number properties of math have also included here. If you fear math then this library is for you.

## Features

- Support numbers, big numbers, arrays
- Is compatible with JavaScript's built-in functions.
- Open source

## Download and usage

To use this package you need to install it from [npm](https://www.npmjs.com/package/math-pro). In your project directory write the following command to get the package -

` npm i math-pro `

After installation you need to import the package to use.

```js

const mt = require('math-pro');

console.log(mt.addition(2,4,5,6))

// 17

```

## Available functions

Below are the available functions that we have in our library.

|    Function name     |     Example (Arguments)     |        Example (Array)        |
| :------------------: | :-------------------------: | :---------------------------: |
|    **addition()**    |    addition(2,3,4) // 9     |    addition([2,3,4]) // 9     |
|  **subtraction()**   |  subtraction(2,3,4) // -5   |  subtraction([2,34,4]) // -5  |
| **multiplication()** | multiplication(2,3,4) // 24 | multiplication([2,3,4]) // 24 |
|    **division()**    |  division(2,3,4) // 0.1666  |  division([2,3,4]) // 0.1666  |
|    **average()**     |     average(2,3,4) // 3     |     average([2,3,4]) // 3     |
|  **getReaminder()**  |  getRemainder(2,3,4) // 2   |              :x:              |
|   **getMinimum()**   |   getMinimum(2,3,4) // 2    |   getMinimum([2,3,4]) // 2    |
|   **getMaximum()**   |   getMaximum(2,3,4) // 4    |   getMaximum([2,3,4]) // 4    |
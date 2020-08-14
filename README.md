<div align='center'>

![img](img/Group%204.png)

![npm](https://badgen.net/npm/v/math-pro)
![install size](https://badgen.net/packagephobia/install/math-pro)
![stars](https://badgen.net/github/stars/pro-js/math-pro)
![npm](https://img.shields.io/npm/dw/math-pro)
![downloads](https://badgen.net/npm/dt/math-pro)
![Website](https://img.shields.io/website?down_color=lightgrey&down_message=down&up_color=green&up_message=up&url=https%3A%2F%2Fpro-js.github.io%2Fmath-pro-site%2F)

</div>

## Introduction

[Math Pro](https://pro-js.github.io/math-pro-site/) is an extensive math library which will help you to do the basic calculation of math. Besides basic calculation you can also do the sort like sort, search. Some number properties of math have also included here. If you fear math then this library is for you.

## Features

- Support numbers, big numbers, arrays
- Is compatible with JavaScript's built-in functions.
- Popular sort methods
- Popular search methods
- Open source

## Download and usage

To use this package you need to install it from [npm](https://www.npmjs.com/package/math-pro). In your project directory write the following command to get the package -

`npm i math-pro`


After installation you need to import the package in your `.js` file.

### import in ES5 format

import full module

```js
const mt = require("math-pro");

console.log(mt.addition(2, 4, 5, 6));

// 17
```
import specific module
```js
const mt = require('math-pro/lib/basic');

console.log(mt.addition(5,6));

// 11

```

### import in ES6 format 

```js
import mt from 'math-pro'

console.log(mt.addition(2, 4, 5, 6));

// 17
```
_**N.B**: You may encounter an issue when importing as ES6 format. To fix the issue in your **package.json** file add `"type": "module"`_


## Contributors
<table>
<tr>
<td align="center"><a href="https://zubayerhimel.github.io"><img src="https://avatars0.githubusercontent.com/u/29758443?v=4" width="100px;" alt=""/><br /><sub><b>Zubayer Himel</b></sub></a><br /></td>
<td align="center"><a href="https://morol1957.blogspot.com"><img src="https://avatars0.githubusercontent.com/jinnatul" width="100px;" alt=""/><br /><sub><b>Jinnatul Islam</b></sub></a><br /></td>
</tr>
</table>

## License

The project is licensed under [MIT](LICENSE)

### Please give us a :star: if you like our work :smiley:
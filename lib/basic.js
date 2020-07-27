"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Pass an (array or argument) and add all the
 * elements, return the result
 * @param {*} array
 */
var addition = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    if (array[0][0] !== undefined)
        array = array[0];
    return array.reduce(function (a, b) { return a + b; });
};
/**
 * Pass an (array or argument) and subtract all the
 * elements, return the result
 * @param {*} array
 */
var subtraction = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    if (array[0][0] !== undefined)
        array = array[0];
    return array.reduce(function (a, b) { return a - b; });
};
/**
 * Pass an (array or argument) and multiplication all the
 * elements, return the result
 * @param {*} array
 */
var multiplication = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    if (array[0][0] !== undefined)
        array = array[0];
    return array.reduce(function (a, b) { return a * b; });
};
/**
 * Pass an (array or argument) and divide all the
 * elements, return the result
 * @param {*} array
 */
var division = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    if (array[0][0] !== undefined)
        array = array[0];
    return array.reduce(function (a, b) { return a / b; });
};
/**
 * Pass an (array or argument)
 * return average of the numbers
 * @param {*} array
 */
var average = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    if (array[0][0] !== undefined)
        array = array[0];
    var sum = array.reduce(function (a, b) { return a + b; });
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
var getRemainder = function (firstNumber, secondNumber) {
    return ((firstNumber % secondNumber) + secondNumber) % secondNumber;
};
/**
 * pass arguments or array and get the minimum number
 * getMinimum([1,3,5,4,9]) // 1
 * getMinimum(2,45,2,76,0,4) // 0
 * @param  {...any} array
 */
var getMinimum = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    if (array[0][0] !== undefined)
        array = array[0];
    return Math.min.apply(Math, array);
};
/**
 * pass arguments or array and get the maximum number
 * @param  {...any} array
 */
var getMaximum = function () {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    if (array[0][0] !== undefined)
        array = array[0];
    return Math.max.apply(Math, array);
};
exports.default = {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division,
    average: average,
    getRemainder: getRemainder,
    getMaximum: getMaximum,
    getMinimum: getMinimum,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***
 * Bubble-Sort
 * let array = [4, 6, 7, 1, 20, 5];
 * console.log(bubbleSort(array)); // [ 1, 4, 5, 6, 7, 20 ]
 * console.log(bubbleSort(array, 'asc')); // [ 1, 4, 5, 6, 7, 20 ]
 * console.log(bubbleSort(array, 'dEs')); // [ 20, 7, 6, 5, 4, 1 ]
 */
var bubbleSort = function (array, type) {
    var _a, _b;
    if (type === void 0) { type = "asc"; }
    if (type === undefined || type === "")
        type = "asc";
    var swapped = false;
    for (var i = 1; i < array.length; i += 1) {
        swapped = false;
        for (var j = 0; j < array.length - i; j += 1) {
            if (type.toLowerCase().trim() === "des") {
                if (array[j + 1] > array[j]) {
                    _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
                    swapped = true;
                }
            }
            else {
                if (array[j + 1] < array[j]) {
                    _b = [array[j + 1], array[j]], array[j] = _b[0], array[j + 1] = _b[1];
                    swapped = true;
                }
            }
        }
        if (!swapped) {
            return array;
        }
    }
    return array;
};
/***
 * Insertion-Sort
 * let array = [3, 5, 1, 9, -7];
 * console.log(insertionSort(array)) // [ -7, 1, 3, 5, 9 ]
 * console.log(insertionSort(array, 'asc')); // [ -7, 1, 3, 5, 9 ]
 * console.log(insertionSort(array, 'dEc')); // [ 9, 5, 3, 1, -7 ]
 */
var insertionSort = function (array, type) {
    if (type === void 0) { type = "asc"; }
    if (type === undefined)
        type = "asc";
    var length = array.length;
    for (var i = 1; i < length; i++) {
        var key = array[i], j = i - 1;
        if (type.toLowerCase().trim() === "des") {
            while (j >= 0 && array[j] < key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
        }
        else {
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
        }
        array[j + 1] = key;
    }
    return array;
};
/***
 * merge-Sort
 * let array = [3,5,1,9,-5,10];
 * console.log(mergeSort(array)) // [ -5, 1, 3, 5, 9, 10 ]
 * console.log(mergeSort(array, 'asc')); // [ -5, 1, 3, 5, 9, 10 ]
 * console.log(mergeSort(array, 'dEc')); // [ 10, 9, 5, 3, 1, -5 ]
 */
var mergeSort = function (array, type) {
    if (type === void 0) { type = "asc"; }
    if (array.length <= 1) {
        return array;
    }
    else {
        var midpoint = Math.floor(array.length / 2);
        var leftArr = array.slice(0, midpoint);
        var rightArr = array.slice(midpoint, array.length);
        return merge(mergeSort(leftArr, type), mergeSort(rightArr, type), type);
    }
};
function merge(leftArr, rightArr, type) {
    if (type === undefined)
        type = "asc";
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (type.toLowerCase().trim() === "des") {
            if (leftArr[0] <= rightArr[0]) {
                sortedArr.push(rightArr[0]);
                rightArr = rightArr.slice(1);
            }
            else {
                sortedArr.push(leftArr[0]);
                leftArr = leftArr.slice(1);
            }
        }
        else {
            if (leftArr[0] <= rightArr[0]) {
                sortedArr.push(leftArr[0]);
                leftArr = leftArr.slice(1);
            }
            else {
                sortedArr.push(rightArr[0]);
                rightArr = rightArr.slice(1);
            }
        }
    }
    while (leftArr.length)
        sortedArr.push(leftArr.shift());
    while (rightArr.length)
        sortedArr.push(rightArr.shift());
    return sortedArr;
}
/***
 * selection-Sort
 * let array =  [3, 5, 1, 9, -7];
 * console.log(selectionSort(array)); // [ -7, 1, 3, 5, 9 ]
 * console.log(selectionSort(array, 'asc')); // [ -7, 1, 3, 5, 9 ]
 * console.log(selectionSort(array, 'dEc')); // [ 9, 5, 3, 1, -7 ]
 */
var selectionSort = function (array, type) {
    var _a;
    if (type === void 0) { type = "asc"; }
    if (type === undefined)
        type = "asc";
    var index = 0, length = array.length, nextElementIndex = 0;
    while (index < length - 1) {
        nextElementIndex = index + 1;
        var maxIndex = index;
        while (nextElementIndex < length) {
            if (type.toLowerCase().trim() === "des") {
                if (array[maxIndex] < array[nextElementIndex]) {
                    maxIndex = nextElementIndex;
                }
            }
            else {
                if (array[maxIndex] > array[nextElementIndex]) {
                    maxIndex = nextElementIndex;
                }
            }
            nextElementIndex++;
        }
        if (maxIndex != index) {
            _a = [array[maxIndex], array[index]], array[index] = _a[0], array[maxIndex] = _a[1];
        }
        index++;
    }
    return array;
};
/***
 * quick-Sort
 * let array =  [23, 45, 16, 37, 3, 99, 22];
 * console.log(quickSort(array)); // [ 3, 16, 22, 23, 37, 45, 99 ]
 * console.log(quickSort(array, "asc")); // [ 3, 16, 22, 23, 37, 45, 99 ]
 * console.log(quickSort(array, "dEc")); // [ 99, 45, 37, 23, 22, 16, 3 ]
 */
var quickSort = function (array, type) {
    if (type === void 0) { type = "asc"; }
    if (type === undefined)
        type = "asc";
    if (array.length <= 1) {
        return array;
    }
    var pivot = array[0], left = [], right = [];
    for (var i = 1; i < array.length; i++) {
        if (type.toLowerCase().trim() === "des") {
            array[i] > pivot ? left.push(array[i]) : right.push(array[i]);
        }
        else {
            array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
        }
    }
    return quickSort(left, type).concat(pivot, quickSort(right, type));
};
exports.default = {
    bubbleSort: bubbleSort,
    mergeSort: mergeSort,
    quickSort: quickSort,
    selectionSort: selectionSort,
    insertionSort: insertionSort,
};

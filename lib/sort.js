/***
 * Bubble-Sort
 * let array = [4, 6, 7, 1, 20, 5];
 * console.log(bubbleSort(array, 'asc')); // [ 1, 4, 5, 6, 7, 20 ]
 * console.log(bubbleSort(array, 'dec')); // [ 20, 7, 6, 5, 4, 1 ]
 */

exports.bubbleSort = (array, type) => {
  let swapped = false;
  for (let i = 1; i < array.length; i += 1) {
    swapped = false;
    for (let j = 0; j < array.length - i; j += 1) {
      if (type === "asc") {
        if (array[j + 1] < array[j]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      else if (type === "dec") {
        if (array[j + 1] > array[j]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
    }
    if (!swapped) {
      return array;
    }
  }
  return array;
}

/***
 * Insertion-Sort
 * let array = [3, 5, 1, 9, -7];
 * console.log(insertionSort(array, 'asc')); // [ -7, 1, 3, 5, 9 ]
 * console.log(insertionSort(array, 'dec')); // [ 9, 5, 3, 1, -7 ]
 */
exports.insertionSort = (array, type) => {
  let length = array.length;
  for (let i = 1; i < length; i++) {
      let key = array[i];
      let j = i - 1;
      if (type === "asc") {
        while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          j = j - 1;
        }
      }
      else if (type === "dec") {
        while (j >= 0 && array[j] < key) {
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
 * console.log(mergeSort(array, 'asc')); // [ -5, 1, 3, 5, 9, 10 ]
 * console.log(mergeSort(array, 'dec')); // [ 10, 9, 5, 3, 1, -5 ]
 */
function merge(leftArr, rightArr, type) {
  let sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (type === "asc") {
        if (leftArr[0] <= rightArr[0]) {
          sortedArr.push(leftArr[0]);
          leftArr = leftArr.slice(1)
        } else {
          sortedArr.push(rightArr[0]);
          rightArr = rightArr.slice(1)
        }
      } else if (type === "dec") {
        if (leftArr[0] <= rightArr[0]) {
          sortedArr.push(rightArr[0]);
          rightArr = rightArr.slice(1)
        } else {
          sortedArr.push(leftArr[0]);
          leftArr = leftArr.slice(1)
        }
      }
    }
    
    while (leftArr.length)
      sortedArr.push(leftArr.shift());
    while (rightArr.length)
      sortedArr.push(rightArr.shift());
    return sortedArr;
  }
  
  let mergeSort = (array, type) => {
    if (array.length < 2) { return array; }
    else {
      let midpoint = parseInt(array.length / 2);
      let leftArr   = array.slice(0, midpoint);
      let rightArr  = array.slice(midpoint, array.length);
      return merge(mergeSort(leftArr, type), mergeSort(rightArr, type), type);
    }
  }
  
/***
 * binary-Search
 * let array = [2,4,6,10,90,80]
 * console.log(binarySearch(array, 6)); // 2
 * console.log(binarySearch(array, 80)); // 4
 * console.log(binarySearch(array, 70)); // -1
 */
const binarySearch = (array, target) => {
  array = array.sort(function (a, b) {
    return a - b;
  });
  let startIndex = 0,
    endIndex = array.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === array[middleIndex]) return middleIndex;
    else if (target > array[middleIndex]) startIndex = middleIndex + 1;
    else endIndex = middleIndex - 1;
  }
  return -1;
};

/***
 * linear-Search
 * let array = [2,4,6,10,90,80]
 * console.log(linearSearch(array, 6)); // 2
 * console.log(linearSearch(array, 80)); // 5
 * console.log(linearSearch(array, 70)); // -1
 */
const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (target == array[i]) return i;
  }
  return -1;
};

module.exports = {
  binarySearch,
  linearSearch,
};

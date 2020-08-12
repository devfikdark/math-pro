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

/***
 * jump-Search
 * let array = [2,4,6,10,90,80]
 * console.log(jumpSearch(array, 6)); // 2
 * console.log(jumpSearch(array, 80)); // 5
 * console.log(jumpSearch(array, 70)); // -1
 */
const jumpSearch = (array, target) => {
  let numbers = array.length;
  let step = Math.sqrt(numbers), prev = 0; 
  while (array[Math.min(step, numbers)-1] < target) 
  { 
    prev = step; 
    step += Math.sqrt(numbers); 
    if (prev >= numbers)  return -1; 
  } 
  while (array[prev] < target) 
  { 
    prev++; 
    if (prev == Math.min(step, numbers)) 
      return -1; 
  } 
  if (array[prev] == target) 
      return prev; 
  return -1; 
};

/***
 * ternary-Search
 * let array = [2,4,6,10,90,80]
 * console.log(ternarySearch(array, 6)); // 2
 * console.log(ternarySearch(array, 80)); // 5
 * console.log(ternarySearch(array, 70)); // -1
 */
const ternarySearch = (array, target) => {
  array = array.sort(function (a, b) {
    return a - b;
  });
  let left = 0, right = array.length - 1;
  while (right >= left) { 
    let mid1 = Math.floor(left + (right - left) / 3); 
    let mid2 = Math.floor(right - (right - left) / 3); 
    if (array[mid1] == target) return mid1; 
    if (array[mid2] == target) return mid2; 
    if (target < array[mid1]) right = mid1 - 1; 
    else if (target > array[mid2]) left = mid2 + 1; 
    else { 
      left = mid1 + 1; 
      right = mid2 - 1; 
    } 
  } 
  return -1; 
};

module.exports = {
  binarySearch,
  linearSearch,
  jumpSearch,
  ternarySearch
};

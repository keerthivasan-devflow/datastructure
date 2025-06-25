// Write a function that searches for an element in the array and returns the index,
// if the element is not exist in the array then just return -1 - [LINEAR SEARCH ALGORITHM]

let numbers = [10, 5, 16, 98, 63, 12];

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}

console.log(linearSearch(numbers, 16));
console.log(linearSearch(numbers, 63));
console.log(linearSearch(numbers, 55));

let numbers = [10, 5, 160, 98, 63, 12];

function findLargest(arr) {
  // it can be -1 or 0 or as needed! but instead it can be arr[0] | - Infinity
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

console.log(findLargest(numbers));

// Hint - Array should have atleast two elements to perform second largest number
// 1. If an array is empty
// 2. If an array has only one element
// 3. If an array has duplicates = [10, 20, 20] then firstLargest = 20, secondLargest = 20
// 4. If an array has duplicates = [10, 20, 20] then (arr[i] != firstlargest) => firstLargest = 20, secondLargest = 10

function secondLargest(arr) {
  if (arr.length < 2) return null;

  // Important note: it can be -1 or 0 or as needed! but instead it can be arr[0] | - Infinity
  let firstlargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstlargest) {
      secondLargest = firstlargest;
      firstlargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstlargest) {
      secondLargest = arr[i];
    }
  }

  return [firstlargest, secondLargest];
}

console.log(secondLargest([10, 5, 16, 98, 63, 12]));
console.log(secondLargest([10, 20, 20]));

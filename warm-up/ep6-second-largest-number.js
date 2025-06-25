let numbers = [10, 5, 16, 98, 63, 12];

function secondLargest(arr) {
  if (arr.length < 2) return null;

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
  return secondLargest;
}

let result = secondLargest(numbers);
console.log(result);

// Hint - Array should have atleast two elements to perform second largest number
// 1. If an array is empty
// 2. If an array has only one element
// 3. If an array has duplicates = [10, 20, 20] then firstLargest = 20, secondLargest = 20
// 4. If an array has duplicates = [10, 20, 20] then (arr[i] != firstlargest) => firstLargest = 20, secondLargest = 10

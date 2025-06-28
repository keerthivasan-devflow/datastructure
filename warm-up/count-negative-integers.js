let numbers = [10, -2, 35, -41, -84, -11];

function countNegativeIntegers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count = count + 1;
  }
  return count;
}

console.log(countNegativeIntegers(numbers));

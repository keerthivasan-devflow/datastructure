let numbers = [10, 5, 160, 98, 63, 12];

function findSmallest(arr) {
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  return min;
}

console.log(findSmallest(numbers));

function removeDuplicates(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return [arr, x + 1]; // where x + 1 represents the total number of unique elements
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 4, 4]));
console.log(removeDuplicates([5, 6, 7, 7, 7, 8]));

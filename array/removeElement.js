// Approach 1 - Simplest way to remove duplicates using built-in functions or methods
function removeElement(arr, target) {
  return arr.filter((element) => element !== target);
}

// Approach 2 - Optimal Solution
// Time Complexity - O(n)
// Space Complexity - O(1)
function removeElement(arr, target) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }

  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([3, 2, 2, 3], 2));
console.log(removeElement([4, 4, 2, 4, 1, 3, 2], 4));
console.log(removeElement([1, 0, 1, 1, 1, 2, 2, 3, 3, 4], 2));

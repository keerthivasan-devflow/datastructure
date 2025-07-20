// Approach 1 - Optimized code
// Time Complexity - O(n)
// Space Complexity - O(1)

function twosum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum > target) right--;
    else left++;
  }
  return null;
}

let numbers = [10, 20, 35, 50];
let mixedintegers = [-8, 1, 4, 6, 10, 45];
let leetcode = [3, 3];
let leetcode2 = [3, 2, 4];
console.log(twosum(numbers, 60));
console.log(twosum(numbers, 100));
console.log(twosum(mixedintegers, 16));
console.log(twosum(leetcode, 6));
console.log(twosum(leetcode2, 6));

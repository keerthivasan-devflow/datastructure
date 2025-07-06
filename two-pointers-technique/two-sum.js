// Approach 1 - Brute-Force Approach
// You cannot use same element twice so that inner loop j starts from i + 1
// Time Complexity - O(n^2)
// Space Complexity - O(1)
function twosum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === target) return [i, j];
    }
  }
  return [];
}

// Approach 2 - Two pointer technique
// Time Complexity - O(n)
// Space Complexity - O(n)
function twosum(arr, target) {
  let hashmap = {};
  for (let i = 0; i < arr.length; i++) {
    hashmap[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (hashmap[diff] && hashmap[diff] !== i) return [i, hashmap[diff]];
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

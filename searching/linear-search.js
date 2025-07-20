// Time complexity - O(n)
// Space complexity - O(1)

// Approach 1 - using built-in functions and for..of loop
function linearSearch(arr, target) {
  for (let val of arr) {
    if (val === target) return arr.indexOf(val);
  }
  return -1;
}

// Approach 2 - using traditional for..lopp
function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;
  }
  return -1;
}

console.log(linearSearch([3, 4, -19, 73, 0], 73));
console.log(linearSearch([3, 4, -19, 73, 0], 50));

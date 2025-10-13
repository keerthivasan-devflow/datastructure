// Approach 1 - Optimal Solution
// Time Complexity - O(n)
// Space Complexity - O(1)
function moveZeroes(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  for (let i = x; i < nums.length; i++) nums[i] = 0;
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 2, 4]));

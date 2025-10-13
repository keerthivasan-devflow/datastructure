// Approach 1 - Optimal Solution
// Time Complexity - O(n)
// Space Complexity - O(1)
function maxConsecutiveOnes(nums) {
  let currCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) currCount++;
    else {
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
  }
  return Math.max(currCount, maxCount);
}

console.log(maxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 1, 1]));
console.log(maxConsecutiveOnes([1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0]));

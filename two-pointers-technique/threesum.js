// Approach 1 - using brute force method
// Time complexity - O(n^3)
// Space complexity - O(1)

// Approach 2
// Time complexity - O(n^2)
// Space complexity - O(1)
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) twoSum(nums, i, ans);
  }
  return ans;
};

var twoSum = function (nums, x, ans) {
  let i = x + 1;
  let j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j] + nums[x];
    if (sum < 0) {
      i++;
    } else if (sum > 0) {
      j--;
    } else {
      ans.push([nums[i], nums[j], nums[x]]);
      i++;
      j--;
      while (nums[i] === nums[i - 1] && i < j) i++;
    }
  }
  return null;
};

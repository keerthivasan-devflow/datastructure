// Approach 1 - Optimal Solution
// Time Complexity - O(n)
// Space Complexity - O(n)
var containsDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] > 1) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

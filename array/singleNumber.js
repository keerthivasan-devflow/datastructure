// Approach 1 - Brute force approach
// Time Complexity - O(n)
// Space Complexity - O(n/2) - O(n)

function singleNumber(nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) return nums[i];
  }
}

// Approach 2 - Optimized Code
// Time complexity - O(n)
// Space complexity - O(1)
function findSingleNumber(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

console.log(singleNumber([2, 1, 2, 3, 3]));
console.log(findSingleNumber([1, 3, 4, 2, 3, 2, 1]));

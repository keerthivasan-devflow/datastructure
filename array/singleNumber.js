// Approach 1 - Brute-Force Solution
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

// Approach 2 - Optimal Solution
// This approach works only when every element appears exactly twice except one - [3, 2, 2, 4, 3].
// This approach fails for inputs like [3, 2, 3, 3]. The previous method is required instead.
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

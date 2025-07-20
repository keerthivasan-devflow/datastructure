
const nums = [1, 2, 3, 4, 5];

const prefixSum = [];
prefixSum[0] = nums[0];

for (let i = 1; i < nums.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + nums[i];
}

console.log("Original array:", nums);
console.log("Prefix sum array:", prefixSum);


# HASHING
Idea: Use hash sets or maps for constant-time lookups.
Where it shines: Detecting duplicates, frequency counting, finding missing or repeated elements, two-sum.


# Prefix Sum / Cumulative Sum
Where it shines: Range sum queries, finding subarrays with given sum.
Hidden trick: Create a prefix sum array and use subtraction to find sum in any range quickly.
Example: Sum of elements from i to j equals prefix[j+1]−prefix[i]
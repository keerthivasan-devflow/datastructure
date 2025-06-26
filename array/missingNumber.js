function missingNumber(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i];
  }
  return totalSum - partialSum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([3, 0, 1, 4, 2]));
console.log(missingNumber([2, 0]));
console.log(missingNumber([4, 0, 2, 5, 3]));

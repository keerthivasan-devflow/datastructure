// Approach 1 - Brute force technique
function maxSlidingWindow(nums, k) {
  let result = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let windowMax = nums[i];
    for (let j = i; j < i + k; j++) {
      if (nums[j] > windowMax) {
        windowMax = nums[j];
      }
    }
    result.push(windowMax);
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, -3, 6, 7], 3));

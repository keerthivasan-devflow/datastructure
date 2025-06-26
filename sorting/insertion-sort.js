function insertionsort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let prev = i - 1;
    while (nums[prev] > curr && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }
    nums[prev + 1] = curr;
  }
  return nums;
}

console.log(insertionsort([7, 4, 3, 1, 2]));
console.log(insertionsort([2]));

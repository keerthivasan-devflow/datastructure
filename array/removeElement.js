function removeElement(nums, val) {
  let pos = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[pos] = nums[i];
      pos = pos + 1;
      count = count + 1;
    }
  }
  return [nums, count];
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([3, 2, 2, 3], 2));
console.log(removeElement([4, 1, 4, 4, 3, 5], 4));

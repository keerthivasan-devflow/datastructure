// Write a function that has an integer array[nums] sorted in non-decreasing order, remove the
// duplicates in-place such that each unique element appear only once. The relative order of
// the elements should be kept the same. Then return the number of unique elements in [nums]

function removeDuplicates(nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[pos]) {
      pos = pos + 1;
      nums[pos] = nums[i];
    }
  }
  return nums;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 4, 4]));
console.log(removeDuplicates([5, 6, 7, 7, 7, 8]));

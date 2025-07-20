function binarysearch(nums, target) {
  if (nums.length === 0) return null;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target == nums[middle]) return middle;
    else if (target < nums[middle]) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
}

console.log(binarysearch([10, 12, 33, 50, 455], 12));
console.log(binarysearch([10, 50, 63, 91, 202, 455], 455));
console.log(binarysearch([], 12));
console.log(binarysearch([-3, 17, 20, 55], 42));
console.log(binarysearch([5], 5));

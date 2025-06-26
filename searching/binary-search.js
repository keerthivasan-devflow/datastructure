function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (target == nums[middle]) return middle;
    else if (target < middle) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
}

console.log(binarySearch([-3, 17, 20, 55], 55));
console.log(binarySearch([5], 5));

function selectionsort(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    // Swap only if min and i are not pointing out to the same element.
    if (min != i) {
      let temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
    }
  }
  return nums;
}

console.log(selectionsort([5, 2, 4, 1, 0]));

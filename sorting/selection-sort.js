function selectionsort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
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

function bubblesort(nums) {
  let temp = 0;
  let swapped;
  for (let i = 0; i < nums.length; i++) {
    swapped = false;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return nums;
}

console.log(bubblesort([5, 2, 4, 1])); // Random array integers to sort in ascending order
console.log(bubblesort([10, 20, 30, 40, 50])); // To check for an already sorted array

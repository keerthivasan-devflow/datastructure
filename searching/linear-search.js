function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;
  }
  return "Element does not exist! " + Number(-1);
}

console.log(linearSearch([3, 4, -19, 73, 0], 73));
console.log(linearSearch([3, 4, -19, 73, 0], 50));

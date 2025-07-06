function NaiveMaximumPositiveNegative(nums) {
  let pos = 0;
  let neg = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) pos++;
    else if (nums[i] < 0) neg++;
  }
  return Math.max(pos, neg);
}

console.log(NaiveMaximumPositiveNegative([-2, -1, -1, 1, 2, 3]));
console.log(NaiveMaximumPositiveNegative([-3, -2, -1, 0, 0, 1, 2]));
console.log(NaiveMaximumPositiveNegative([4, 6, 2, 1, 3]));

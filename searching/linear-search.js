function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;
  }
  return -1;
}
console.log(linearSearch([3, 4, -19, 73, 0], 73));
console.log(linearSearch([3, 4, -19, 73, 0], 50));

// Linear Search Algorithm - Using built-in functions and for..of loop
function built_In_Linear_Search(arr, target) {
  for (let val of arr) {
    if (val === target) return arr.indexOf(val);
  }
  return -1;
}
console.log(built_In_Linear_Search([12, 45, 22, 0, 89], 58));
console.log(built_In_Linear_Search([12, 45, 22, 0, 89], 22));
console.log(built_In_Linear_Search([12, 45, 22, 0, 89], 89));

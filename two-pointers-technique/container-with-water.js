// Approach 1 - using brute force method
// Time complexity - O(n^2)
// Space complexity - O(1)
function containerwithmaxwater(height) {
  let max = -Infinity;
  for (let i = 0; i <= height.length - 1; i++) {
    for (let j = 0; j < height.length; j++) {
      let area = Math.min(height[i], height[j]) * (j - i);
      if (area > max) {
        max = area;
      }
    }
  }
  return max;
}

// Approach  - using two pointer approach
// Time complexity - O(n)
// Space complexity - O(1)
function containerwithmaxwater(height) {
  let max = -Infinity;
  let left = 0;
  let right = height.length;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    if (area > max) max = area;
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
}

console.log(containerwithmaxwater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(containerwithmaxwater([1, 1]));

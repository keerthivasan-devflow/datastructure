// Approach 1 - Optimal Solution using swaping technique with the help of ES6-Destructuring an array concept
// Time complexity - O(n)
// Space complexity - O(1)
function reverse(str) {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  return str;
}

// Approach 2 - optimal Solution
// Time Complexity - O(n/2) - O(n) because ignore constants (K)
// Space Complexity - O(1)
function reverseString(string) {
  let n = string.length;
  let mid = Math.floor(n / 2);
  for (let i = 0; i < mid; i++) {
    let temp = string[i];
    string[i] = string[n - 1 - i];
    string[n - 1 - i] = temp;
  }
  return string;
}

console.log(reverse(["d", "o", "g"]));
console.log(reverse(["k", "e", "e", "r", "t", "h", "i"]));
console.log(reverse(["a", "p", "p", "l", "e"]));
console.log(reverse(["o", "r", "a", "c", "l", "e"]));

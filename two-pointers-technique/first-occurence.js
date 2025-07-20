// Approach 1 -  using built-in function which is very simple and straight forward approach
function firstOccurence(haysack, needle) {
  return haysack.indexOf(needle);
}

// Approach 2 - Brute force approach + Sliding window technique
// Time Complexity - O(n^2)
// Space Complexity - O(1)
function firstOccurence(haystack, needle) {
  let m = haystack.length;
  let n = needle.length;
  for (let i = 0; i <= m - n; i++) {
    let j = 0;
    for (; j < n; j++) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j === n) return i;
  }
  return -1;
}

console.log(firstOccurence("sadbut", "but"));
console.log(firstOccurence("leetcode", "leeto"));
console.log(firstOccurence("application", "cat"));

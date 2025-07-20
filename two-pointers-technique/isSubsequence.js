// Approach 1 - Brute force approach
// Time complexity - O(n^2)
// Space complexity - O(1)

// Approach 2 - Using two pointer technique
// Time complexity - O(n)
// Space complexity - O(1)
function isSubsequence(s, t) {
  let x = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[x] === t[i]) x++;
  }
  if (x === s.length) return true;
  else return false;
}

console.log(isSubsequence("abe", "ahbgde"));
console.log(isSubsequence("aeb", "ahbgde"));
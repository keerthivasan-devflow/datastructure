// Approach 1 - using sliding window technique
// Time complexity - O(n)
// Space complexity - O(n)

var lengthOfLongestSubstring = function (s) {
  let map = {};
  let i = 0;
  let maxWS = 0;
  for (let j = 0; j < s.length; j++) {
    if (map[s[j]] !== undefined && map[s[j]] >= i) {
      i = map[s[j]] + 1;
    }

    map[s[j]] = j;
    currWS = j - i + 1;
    maxWS = Math.max(currWS, maxWS);
  }
  return maxWS;
};

console.log(lengthOfLongestSubstring("abcdeafbdgcbb"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));

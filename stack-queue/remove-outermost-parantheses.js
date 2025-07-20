// Time Complexity - O(n)
// Space Complexity - O(n)
var removeOuterParentheses = function (s) {
  let stack = [];
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        ans = ans + s[i];
      }
    } else {
      if (stack.length > 1) {
        ans = ans + s[i];
      }
      stack.pop();
    }
  }
  return ans;
};

// Time Complexity - O(n)
// Space Complexity - O(1) aside from the result storage, the logic only uses a constant amount of space (e.g., the 'level').
var removeOuterParenthesesWithoutStack = function (s) {
  let level = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      level++;
      if (stack.length > 1) {
        ans = ans + s[i];
      }
    } else {
      if (stack.length > 1) {
        ans = ans + s[i];
      }
      level--;
    }
  }
  return ans;
};

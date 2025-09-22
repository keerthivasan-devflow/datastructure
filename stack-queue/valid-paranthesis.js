// Time Complexity - O(n)
// Space Complexity - O(n)

// Approach 1
// Example - {[]}) - where !top is used to define if the stack is empty but trying to get the last element from the stack
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (
        !top ||
        (top === "[" && s[i] !== "]") ||
        (top === "{" && s[i] !== "}") ||
        (top === "(" && s[i] !== ")")
      )
        return false;
    }
  }
  return stack.length === 0;
};

// Approach 2 - Optimized code using map
var isValid2 = function (s) {
  let stack = [];
  let map = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (!top || map[top] !== s[i]) return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid2("{([])}"));
console.log(isValid2("{([}"));

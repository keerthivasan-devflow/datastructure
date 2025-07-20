var isValid2 = function (s) {
  let stack = [];
  let map = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    console.log(map[s[i]], ":", s[i]);
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

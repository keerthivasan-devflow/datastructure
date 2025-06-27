function BalancedStrings(s) {
  let count = 0;
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") temp += 1;
    else temp -= 1;
    if (temp === 0) count += 1;
  }

  return count;
}

console.log(BalancedStrings("RLRRLLRLRL"));
console.log(BalancedStrings("RLRR"));
console.log(BalancedStrings("RRR"));

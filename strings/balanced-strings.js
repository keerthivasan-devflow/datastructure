// Approach 1
function BalancedStrings(s) {
  let count = 0;
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[0]) temp += 1;
    else temp -= 1;
    if (temp === 0) count += 1;
  }
  
  return count;
}

// Approach 2
function balanceString(s) {
  let count = 0;
  let firstcount = 0;
  let secondcount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[0]) firstcount++;
    else secondcount++;

    if (firstcount === secondcount) {
      count++;
      firstcount = 0;
      secondcount = 0;
    }
  }

  return count;
}

console.log(BalancedStrings("RLRRLLRLRL"));
console.log(BalancedStrings("RLRR"));
console.log(BalancedStrings("KEKKEEEK"));

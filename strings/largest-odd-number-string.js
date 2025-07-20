// Leetcode - 1903
function largestOddNumber(s) {
  for (let i = s.length - 1; i >= 0; i--) {
    if (parseInt(s[i]) % 2 === 1) {
      return s.slice(0, i + 1);
    }
  }
  return "There is no such odd number";
}

console.log(largestOddNumber("52")); // Output: "5"
console.log(largestOddNumber("763")); // Output: "763"
console.log(largestOddNumber("4206")); // Output: ""
console.log(largestOddNumber("")); // Output: ""
console.log(largestOddNumber("7807212")); // Output: ""

function largestOddDigit(s) {
  let max = -1;
  for (let i = 0; i < s.length; i++) {
    let digit = parseInt(s[i]);
    if (digit % 2 === 1 && digit > max) max = digit;
  }
  return max === -1 ? -1 : max;
}

console.log(largestOddDigit("52"));
console.log(largestOddDigit("763"));
console.log(largestOddDigit("319752"));
console.log(largestOddDigit("2468"));

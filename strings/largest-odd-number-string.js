function largestOddNumber(s) {
  for (let i = s.length - 1; i >= 0; i--) {
    if (parseInt(s[i]) % 2 === 1) {
      return s.slice(0, i + 1);
    }
  }
  return "";
}

console.log(largestOddNumber("52")); // Output: "5"
console.log(largestOddNumber("763")); // Output: "763"
console.log(largestOddNumber("4206")); // Output: ""
console.log(largestOddNumber("")); // Output: ""
console.log(largestOddNumber("7807212")); // Output: ""

function largestOddNumberDigit(s) {
  let i = 0;
  let max = -1;
  if (s % 2 !== 0) return s;
  while (i < s.length) {
    let digit = parseInt(s[i]);
    if (digit % 2 !== 0 && digit > max) max = digit;
    i++;
  }
  if (max == -1) return "There is no odd number";
  return max;
}

console.log(largestOddNumberDigit("52"));
console.log(largestOddNumberDigit("763"));
console.log(largestOddNumberDigit("319752"));
console.log(largestOddNumberDigit("2468"));

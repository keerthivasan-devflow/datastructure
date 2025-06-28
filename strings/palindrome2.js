function palindrome(s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!s[left].match(/[a-z]/)) left += 1;
    else if (!s[right].match(/[a-z]/)) right -= 1;
    else if (s[left] === s[right]) {
      left += 1;
      right -= 1;
    } else return false;
  }
  return s;
}

let result = palindrome("A man a plan a canal panama");
// let result = palindrome("A race a car");

if (result) console.log("palindrome!");
else console.log("not palindrome!");

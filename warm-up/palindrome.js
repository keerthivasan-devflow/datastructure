function palindrome(num) {
  let reversedNumber = num.toString().split("").reverse().join("");
  if (num === Number(reversedNumber)) return "Yes, it's palindrome";
  else return "No, it's not a palindrome";
}

console.log(palindrome(121));
console.log(palindrome(763));

function customPalindrome(num) {
  if (num === 0) return "Give me some valid input or in double digits";
  if (num < 0) return false;

  // we're diving the 'num' until certain condition so 'n' value changes often and we make a copy of num.
  let copy = num;
  let rev = 0;

  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  return rev === copy ? "Palindrome" : "Not a palindrome!";
}

console.log(customPalindrome(121));
console.log(customPalindrome(123));
console.log(customPalindrome(-121)); // output: false because we've added corner case that if any num < 0, return false

function palindrome(number) {
  let reversedNumber = number.toString().split("").reverse().join("");
  if (number === Number(reversedNumber)) return "Yes, it's palindrome";
  else return "No, it's not a palindrome";
}

console.log(palindrome(121));
console.log(palindrome(763));
console.log(palindrome(656));

function customPalindrome(number) {
  if (number === 0) return "Give me some valid input or in double digits";
  if (number < 0) return false;

  let copy = number;
  let rev = 0;

  while (number > 0) {
    let rem = number % 10;
    rev = rev * 10 + rem;
    number = Math.floor(number / 10);
  }
  
  return rev === copy;
}

console.log(customPalindrome(121));
console.log(customPalindrome(123));
console.log(customPalindrome(-121));

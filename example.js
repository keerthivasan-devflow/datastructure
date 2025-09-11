// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// function reverseString(str) {
//   let reversedString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString = reversedString + str[i];
//   }
//   return reversedString
// }

// function reverseString(str) {
//   let reversedString = "";

//   for (let i = 0; i < str.length; i++) {
//     reversedString = str[i] + reversedString;
//   }
//   return reversedString;
// }

// function reverseString(str) {
//   str = str.split("");
//   let n = str.length;

//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     let temp = str[i];
//     str[i] = str[n - 1 - i];
//     str[n - 1 - i] = temp;
//   }
//   return str.join("");
// }

function reverseString(str) {
  let string = str.split("");
  let left = 0;
  let right = string.length;

  while (left < right) {
    [left, right] = [right, left];
    left++;
    right++;
  }
  return string.join("");
}

console.log(reverseString("Keerthivasan"));
console.log(reverseString("Parvesh"));

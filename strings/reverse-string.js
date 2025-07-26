// Approach 1 - using built-in function (Brute Force Technique)
function reverse(str) {
  return str.split("").reverse().join("");
}

// Approach 2 - using for loop with an extra space
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

// Approach 3 - using for loop with an extra space
function reverse(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

// Approach 4 - using swapping technique
function reverse(str) {
  let s = str.split("");
  let n = s.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = s[i];
    s[i] = s[n - 1 - i];
    s[n - 1 - i] = temp;
  }
  return s.join("");
}

console.log(reverse("Keerthivasan"));

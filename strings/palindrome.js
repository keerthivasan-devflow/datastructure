// Approach 1 - Brute force approach using built-in functions
function palindrome(s) {
  let filteredString = s.toLowerCase().replace(/[^a-zA-Z]/gi, "");
  let reversedString = filteredString.split("").reverse().join("");
  return filteredString == reversedString
    ? "Palindrome"
    : "Not a palindrome string";
}

// Approach 2 - swapping method to check whether the string is palindrome
function palindrome(s) {
  s = s.toLowerCase();
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-zA-Z]/gi)) {
      filteredString += s[i];
    }
  }

  let reversedString = filteredString.split("");
  let n = reversedString.length;
  for (let i = 0; i < n / 2; i++) {
    let temp = reversedString[i];
    reversedString[i] = reversedString[n - 1 - i];
    reversedString[n - 1 - i] = temp;
  }

  return filteredString === reversedString.join("")
    ? "Palindrome"
    : "Not a palindrome string";
}

// Approach 3 - using single for loop itself
function palindrome(s) {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/i)) {
      filteredString += s[i];
      rev = s[i] + rev;
    }
  }
  return rev === filteredString;
}

let testcase1 = palindrome("A man a plan a canal panama");
let testcase2 = palindrome("A race a car");
console.log(testcase1);
console.log(testcase2);

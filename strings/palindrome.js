// Approach 1 - using built-in functions
function palindrome(s) {
  s = s.toLowerCase();
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/i)) {
      filteredString += s[i];
    }
  }

  let str = filteredString.split("").reverse();
  return filteredString === str.join("");
}

// Approach 2 - swapping method to check whether the string is palindrome
function palindrome(s) {
  s = s.toLowerCase();
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/i)) {
      filteredString += s[i];
    }
  }

  let n = filteredString.length;
  let str = filteredString.split("");
  for (let i = 0; i < n / 2; i++) {
    let temp = str[i];
    str[i] = str[n - 1 - i];
    str[n - 1 - i] = temp;
  }
  return filteredString === str.join("");
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

let result = palindrome("A man a plan a canal panama");
// let result = palindrome("A race a car");

if (result) console.log("Give string is a palindrome");
else console.log("Give string is not a palindrome");

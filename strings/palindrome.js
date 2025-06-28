function palindrome(s) {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/i)) {
      filteredString += s[i];

      // Approach -3 [To reverse a string]
      rev = s[i] + rev;
    }
  }

  // let n = filteredString.length;
  // Approach - 1 [To reverse a string]
  // let str = filteredString.split("").reverse();

  // Approach - 2 [To reverse a string]
  // let str = filteredString.split("");
  // for (let i = 0; i < n / 2; i++) {
  //   let temp = str[i];
  //   str[i] = str[n - 1 - i];
  //   str[n - 1 - i] = temp;
  // }
  // return filteredString === str.join("");

  return rev === filteredString; // For Approach -3 return it
}

let result = palindrome("A man a plan a canal panama");
// let result = palindrome("A race a car");

if (result) console.log("Give string is a palindrome");
else console.log("Give string is not a palindrome");

function reverseString(string) {
  let n = string.length;
  let mid = Math.floor(n / 2);
  for (let i = 0; i < mid; i++) {
    let temp = string[i];
    string[i] = string[n - 1 - i];
    string[n - 1 - i] = temp;
  }
  return string;
}

console.log(reverseString(["d", "o", "g"]));
console.log(reverseString(["k", "e", "e", "r", "t", "h", "i"]));

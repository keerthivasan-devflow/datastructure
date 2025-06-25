function reverseString(string) {
  let size = string.length;
  let halfLength = Math.floor(size / 2);
  for (let i = 0; i < halfLength; i++) {
    let temp = string[i];
    string[i] = string[size - 1 - i];
    string[size - 1 - i] = temp;
  }
  return string;
}

console.log(reverseString(["d", "o", "g"]));
console.log(reverseString(["k", "e", "e", "r", "t", "h", "i"]));

function Reverse_Kchar(s, k) {
  let str = s.split("");
  let mid = Math.floor(k / 2);
  for (let i = 0; i < str.length; i = i + 2 * k) {
    for (let j = 0; j < mid; j++) {
      let temp = str[i + j];
      str[i + j] = str[i + k - 1 - j];
      str[i + k - 1 - j] = temp;
    }
  }
  return str.join("");
}

console.log(Reverse_Kchar("abcdefghijk", 2));

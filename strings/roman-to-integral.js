var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let prev = 0;
  let total = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let curr = roman[s[i]];
    if (curr < prev) {
      total = total - curr;
    } else {
      total = total + curr;
    }
    prev = curr;
  }
  return total;
};
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IV"));
console.log(romanToInt("MMCC"));

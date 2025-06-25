function countDigit(number) {
  let count = 0;
  if (number === 0) return 1;
  number = Math.abs(number);

  while (number > 0) {
    number = Math.floor(number / 10);
    count = count + 1;
  }
  return count;
}

console.log(countDigit(256));
console.log(countDigit(0));
console.log(countDigit(-7834));
console.log(countDigit(23));

// CORNER CASES
// If number is 0
// If number is a negative integer
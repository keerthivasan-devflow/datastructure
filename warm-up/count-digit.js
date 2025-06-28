// write a function that takes an integer as input and returns the count of digits in that number.
// i. 0 should return 1, not 0.
// ii.Negative numbers: always use Math.abs() to ignore sign.

function built_in_countdigit(number) {
  number = Math.abs(number);
  if (number === 0) return 1;
  return number.toString().length;
}

function countdigit(number) {
  number = Math.abs(number);
  
  if (number === 0) return 1;

  let count = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    count = count + 1;
  }
  return count;
}

console.log(countdigit(256));
console.log(countdigit(0));
console.log(countdigit(-7834));
console.log(countdigit(23));

// Write a function that reverse a number for a signed 32-bit integer [-2^32 to 2^32 - 1]

function built_in_reverse_integer(num) {
  if (num === 0) return 0;
  let numCopy = num;
  num = Math.abs(num);
  let rev = parseInt(num.toString().split("").reverse().join(""));
  let limit = Math.pow(2, 31);
  if (num < -limit || num > limit) return 0;
  return numCopy < 0 ? -rev : rev;
}


function reverseInteger(number) {
  if (number === 0) return "Give me some valid input or in double digits";

  let copy = number;
  number = Math.abs(number);

  let rev = 0;
  while (number > 0) {
    let rem = number % 10;
    rev = rev * 10 + rem;
    number = Math.floor(number / 10);
  }

  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;
  return copy < 0 ? -rev : rev;
}

console.log(reverseInteger(123));
console.log(reverseInteger(765));
console.log(reverseInteger(0));
console.log(reverseInteger(-12));
console.log(reverseInteger(444998277837621));
console.log(reverseInteger(876513425109110));
console.log(reverseInteger(120));

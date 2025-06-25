// Print 'Hello World' 5 times
// Increment - Decrement of for loop

function greet() {
  console.log("Welcome, Keerthivasan!");
}

for (let i = 0; i < 3; i++) {
  greet();
}

// Print all the even/odd numbers in an array
let arr = [10, 6, 2, 0, 4, 3, 100, 9];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) console.log(arr[i]);
}

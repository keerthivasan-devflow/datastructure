let arr = [2, 0, 1, 5, 8, 9];
function sum(n) {
  if (n == 0) return arr[0];

  return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));


// Add all the odd numbers of an array
// let arr = [2, 0, 1, 5, 8, 9];
function sum(n) {
  let isOdd = arr[n] % 2 != 0;
  if (n == 0) return isOdd ? arr[n] : 0;
  return (isOdd ? arr[n] : 0) + sum(n - 1);
}

console.log(sum(arr.length - 1));

// Time complexity - O(log n)
// Space complexity - O(1)

function sqrt(x) {
  if (x === 0 || x === 1) return x;
  let left = 2;
  let right = Math.floor(x / 2);
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (x === middle * middle) return middle;
    else if (x < middle * middle) right = middle - 1;
    else left = middle + 1;
  }
  return right;
}

console.log(sqrt(23));
console.log(sqrt(16));
console.log(sqrt(19));
console.log(sqrt(66));

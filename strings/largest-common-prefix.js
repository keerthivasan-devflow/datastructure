// Leetcode - 14
// Opitmized code implementation

function largestcommonprefix(arr) {
  for (let x = 0; x < arr[0].length; x++) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[0][x] !== arr[i][x] || x === arr[i].length)
        return arr[0].substring(0, x);
    }
  }
  return arr[0];
}

console.log(largestcommonprefix(["flower", "flight", "flow"]));
console.log(largestcommonprefix(["appreciate", "apple", "appeal"]));
console.log(largestcommonprefix(["different"]));

function largestcommonprefix(arr) {
  let x = 0;
  while (x < arr[0].length) {
    let char = arr[0][x];
    for (let i = 1; i < arr.length; i++) {
      if (char !== arr[i][x] || x === arr[i].length)
        return arr[0].substring(0, x);
    }
    x++;
  }
  return arr[0];
}

console.log(largestcommonprefix(["flower", "flight", "flow"]));
console.log(largestcommonprefix(["appreciate", "apple", "appeal"]));
console.log(largestcommonprefix(["different"]));

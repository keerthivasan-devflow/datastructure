# Leetcode [26] - Remove duplicates from sorted array
### Approach 1
function removeduplicates(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return arr;
}

### Approach 2
function removeduplicates(arr) {
  let x = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }

  for (let i = x + 1; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}
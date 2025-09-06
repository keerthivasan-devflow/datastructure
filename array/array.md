## 1. Leetcode [26] - Remove duplicates from sorted array in-place

**In case you no need to remove duplicates in-place**

1. array.filter()
2. new Set()
3. array.includes()

```js
// Approach 1
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

// Approach 2
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

// Approach 3 - Using an extra array variable
function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}
```

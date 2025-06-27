function mergesort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let sorted = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }
  return [...sorted, ...left.slice(i), ...right.slice(j)];
}

console.log(mergesort([5, 2, 4, 1]));
console.log(mergesort([8, 9, 3, 6, 1, 2, 7, 6]));

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (arr) {
  let stack = [];
  let n = arr.length;
  let res = Array(n).fill(0);

  stack.push(n - 1);
  // No need of below line because we have already filled the array with '0'
  res[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] >= arr[top]) {
        stack.pop();
      } else {
        res[i] = top - i;
        break;
      }
    }
    // No need of below condition block because we have already filled array with '0'
    if (stack.length === 0) {
      res[i] = 0;
    }
    stack.push(i);
  }
  return res;
};


// Approach 2 - Removed unnecessary code lines
var dailyTemperatures = function (arr) {
  let stack = [];
  let n = arr.length;
  let res = Array(n).fill(0);

  stack.push(n - 1);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] >= arr[top]) {
        stack.pop();
      } else {
        res[i] = top - i;
        break;
      }
    }
    stack.push(i);
  }
  return res;
};
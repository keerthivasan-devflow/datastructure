/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let arr = [...nums, ...nums];
  let n = arr.length;

  let stack = [];
  stack.push(arr[n - 1]);

  let result = Array(n).fill(-1);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] < top) {
        result[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i]);
  }
  return result.slice(0, n / 2);
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let ngeMap = {};
  let stack = [];
  let n = nums2.length;

  stack.push(nums2[n - 1]);
  ngeMap[nums2[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (nums2[i] < top) {
      ngeMap[nums2[i]] = top;
    } else {
      while (stack.length) {
        top = stack[stack.length - 1]; // update top after each pop operation
        if (nums2[i] > top) {
          stack.pop();
        } else {
          ngeMap[nums2[i]] = top;
          break;
        }
      }

      if (stack.length === 0) {
        ngeMap[nums2[i]] = -1;
      }
    }

    // Every element to be pushed to the stack after processing, so it can potentially serve as the "next greater" for earlier elements.
    stack.push(nums2[i]);
  }

  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    result.push(ngeMap[nums1[i]]);
  }
  return result;
};

// After removing unnecessary lines of code from the above approach
var nextGreaterElement = function (nums1, nums2) {
  let ngeMap = {};
  let stack = [];
  let n = nums2.length;

  stack.push(nums2[n - 1]);
  ngeMap[nums2[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (nums2[i] > top) {
        stack.pop();
      } else {
        ngeMap[nums2[i]] = top;
        break;
      }
    }

    if (stack.length === 0) ngeMap[nums2[i]] = -1;

    stack.push(nums2[i]);
  }

  let result = nums1.map((e) => ngeMap[e]);
  return result;
};

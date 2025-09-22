var inorderTraversal = function (root) {
  let ans = [];
  let stack = [];

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr);
    curr = curr.right;
  }
  return ans;
};

// Approach 1 - Basic Logic Of Level Order Traversal - (Iterative Approach - Using Queue)
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let q = [];
  let ans = [];
  let curr = root;
  while (q.length) {
    curr = q.shift();
    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
    ans.push(curr.val);
  }
  return ans;
};

// Approach 2 - Level Order Traversal - Grouping (Iterative Approach - Using Queue)
var levelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];
  while (q.length) {
    let levelArray = [];
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
      levelArray.push(curr.val);
    }
    ans.push(levelArray);
  }
  return ans;
};

// Approach - Level Order Traversal - Using Recursive Approach
// Time Complexity - O(n)
// Space Complexity - O(n)
var levelOrderTraversal = function (root) {
  if (!root) return [];

  let ans = [];

  function traversal(curr, level) {
    if (!ans[level]) ans[level] = [];
    ans[level].push(curr);
    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  }
  traversal(root, 0);
  return ans;
};

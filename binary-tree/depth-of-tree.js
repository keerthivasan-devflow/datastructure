/**
 * @param {TreeNode} root
 * @return {number}
 */

// Approach 1 - Top-down Solution
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDepth = 0;
  function traversal(curr, depth) {
    maxDepth = Math.max(maxDepth, depth);
    curr.left && traversal(curr.left, depth + 1);
    curr.right && traversal(curr.right, depth + 1);
  }
  traversal(root, 1);
  return maxDepth;
};

// Approach 2 - Bottom-up Solution
var maxDepth = function (root) {
  if (!root) return 0;
  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);
  return 1 + Math.max(leftMax, rightMax);
};

// Time Complexity - O(n)
// Space Complexity - O(n)

// Pre-order Tree Traversal
var preorderTraversal = function (root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    ans.push(curr.val);
    traversal(curr.left);
    traversal(curr.right);
  }
  traversal(root);
  return ans;
};

// Post-order Tree Traversal
var postorderTraversal = function (root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    traversal(curr.right);
    ans.push(curr.val);
  }
  traversal(root);
  return ans;
};

// Inorder Tree Traversal
var inorderTraversal = function (root) {
  let ans = [];

  function traversal(curr) {
    if (!curr) return;
    traversal(curr.left);
    ans.push(curr.val);
    traversal(curr.right);
  }
  traversal(root);
  return ans;
};

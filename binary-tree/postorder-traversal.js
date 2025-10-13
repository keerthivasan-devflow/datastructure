// Approach 1 - Post Order Traversal Using Two Stacks
// Time Complexity - O(n)
// Space Complexity - O(n)
var postOrderTraversal = function (root) {
  if (!root) return [];
  let s1 = [root];
  let s2 = [];
  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr);
    curr.left && s1.push(curr.left);
    curr.right && s1.push(curr.right);
  }

  let ans = [];
  while (s2.length) {
    ans.push(s2.pop().val);
  }
  return ans;
};

// Approach 2 - Post Order Traversal Using One Stack
// Time Complexity - O(n)
// Space Complexity - O(n)

var postOrderTraversal2 = function (root) {
  if (!root) return [];
  let curr = root;
  let stack = [];
  let ans = [];
  let lastVisited = null;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    let peek = stack[stack.length - 1]; // Here just finding the peek element that's why stack[stack.length - 1]
    if (peek.right && peek.right != lastVisited) {
      curr = peek.right;
    } else {
      ans.push(peek.val);
      lastVisited = stack.pop();
    }
  }

  return ans;
};

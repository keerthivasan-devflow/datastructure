/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// Recursive Bottom-Up Approach
// Time Complexity - O(n)
// Space Complexity - O(1)
var isSymmetric = function (root) {
  let isSymmetricTree = function (A, B) {
    if (!A && !B) return true;
    if (!A || !B) return false;

    return (
      A.val === B.val &&
      isSymmetricTree(A.left, B.right) &&
      isSymmetricTree(A.right, B.left)
    );
  };

  return isSymmetricTree(root.left, root.right);
};

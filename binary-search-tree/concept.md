## Binary Search Tree (BST)

- A BST is a binary tree where each node can have upto atmost 2 children.
- All nodes in the left subtree have values less than the root, and all nodes in the right subtree have values greater than the root.
- No node in the tree will have a value equal to the root.

- The **inorder traversal** of a Binary Search Tree always yields elements in **sorted order**.

## Questions & Answers

### 1. Why is it called a Binary _Search_ Tree?

- The term "Search" highlights its efficiency in locating elements.
- At each node, we can decide whether to move left or right based on the value we're searching for, making the process faster.

### 2. Why is the time complexity O(log n)?

- Because with each comparison, the search space is **halved**, leading to logarithmic time complexity in a balanced BST.

### 3. Can you construct a BST from only its inorder traversal?

- Check attachment - `Why-Not-Inorder-BST.png`
- No, you cannot uniquely construct a Binary Search Tree (BST) from only its inorder traversal.
- Why not?
  - Inorder traversal of a BST is always sorted, but many different BSTs can produce the same sorted sequence.
  - The inorder list tells you what values are in the tree, but not how they are arranged.
  - If you have both preorder or postorder along with inorder, you can reconstruct the BST uniquely.

## References

1. How to construct a BST from preorder and postorder (Jenny's Lecture(5.11, 5.12) - YouTube Channel)

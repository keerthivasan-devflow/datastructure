### Specialized Types Of Binary Trees

- **Full Binary Tree:** Every node has either 0 or 2 children. No node has only one child
- **Perfect Binary Tree:** All internal nodes have two children, and all leaves are at the same level.
- **Complete Binary Tree:** All levels are fully filled except possibly the last, which is filled from left to right.
- **Balanced Binary Tree:** The height difference between left and right subtrees is minimal (often ≤ 1).
- **Degenerate (Skewed) Tree:** Each parent has only one child, forming a linked list-like structure.

---

### Search-Oriented Trees

- **Binary Search Tree (BST):** Left child < parent < right child. Enables fast search, insert, and delete.
- **AVL Tree:** A self-balancing BST where the height difference between subtrees is ≤ 1.
- **Red-Black Tree:** A self-balancing BST with color properties to ensure balance.
- **Splay Tree:** A BST that moves accessed elements to the root to optimize future access.
- **Treap:** Combines BST and heap properties using priorities.

---

### Heap Trees

- **Min Heap:** Parent ≤ children; root is the smallest element.
- **Max Heap:** Parent ≥ children; root is the largest element.
- Used in priority queues and heap sort.

---

### Trie (Prefix Tree)

- Used for efficient retrieval of strings, especially in dictionary and autocomplete applications.
- Each node represents a character; paths form words.

---

### Segment Tree

- Used for range queries and updates (e.g., sum, min, max) on arrays.
- Efficient for dynamic programming and competitive programming.

---

### Fenwick Tree (Binary Indexed Tree)

- Optimized for prefix sum queries and updates.
- More space-efficient than segment trees.

---

### Suffix Tree

- Represents all suffixes of a string.
- Useful in string matching and bioinformatics.

---

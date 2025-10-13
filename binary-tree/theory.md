## Trees

- Used to represent hierarchial relationship (parent-child relationship).
- Collection of nodes where each node connected with each other by edges.
- If there are N'nodes in the tree, there will be definitely n-1 edges.
  - If you add one more edge, then trees will form a cycle but trees cannot have cycles in fact.

# Tree Terminologies

1.  Root Node - The topmost node of a tree, which has no parent.
2.  Edges | Link - These edges are uni-directional only
3.  Parent Node - Immediate predecessor of any node.
4.  Children Node - Immediate successor of any node.
5.  Siblings Node - Nodes that shares the same parent.
6.  Leaf Node | External Node - A node that doesn't have any children node.
7.  Non-Leaf Node | Internal Node - A node at least have one child.
8.  Path - A sequence of consecutive edges from source node to destination node.
9.  Ancestor - Any predecessor node on the path from root to that node.
10. Descendant - Any successor node on the path from that node to leaf node.
11. Predecessor - Previous node
12. Successor - Next node
13. Subtree

14. Degree of a node - Number of children of that node but the degree of leaf node will always be ZERO
15. Degree of a tree - Maximum degree among all nodes.

16. Level of a node - If a node is reached by traversing k edges from the root, then level of a node = K
17. Level of a tree - Maximum level among all nodes.

18. Height of a node - Number of edges from that node to leaf node (but longest path will be considered).
19. Height of a tree - Number of edges from root node to leaf node (but longest path will be considered).
20. Height of a leaf node - Always 0.

21. Depth of a node - Number of edges from root to that node but depth of the root node will always be ZERO.
22. Depth of a tree - The maximum depth among all nodes.
23. Depth of a root node - Always 0.

## Depth First Search

- Explores a tree by visiting nodes as deeply as possible along a branch before backtracking
- DFS uses stack
- Already implemented tree traversal using recursion and iterative approach with a stack.

1. Pre-Order Tree Traversal
2. Post-Order Tree Traversal
3. In-Order Tree Traversal

## Breadth First Search

- Explores a tree by visiting nodes level by level
- BFS uses queue

1. Level Order Traversal
2. Zig-Zag | Spiral Level Order Traversal
3. Level Order Traversal w/ Grouping
4. Finding sum/averages at each level

## Tree Traversals

- If preorder or postorder is given along with inorder traversal, then it will be easy to construct a binary tree
- If preorder and postorder are only given, then cannot construct an unique BT, but it is possible to construct an unique FBT

## Questions

### 1. Are depth-first search (DFS) tree traversals specific to binary trees, or do they apply generally to all types of trees?

- Pre-order, in-order, and post-order traversals are specific to binary trees due to their fixed structure with at most two children per node.
- General trees allow nodes to have any number of children, not limited to two.
- Tree traversals for general trees do not use the in-order traversal because there is no fixed "middle" child to visit after the left and before the right.
- pre-order and post-order traversals apply broadly to trees in general

## 2. DFS uses stack and BFS uses queue. But why?

- Stack principle is LIFO
- Queue principle is FIFO

## 3. Follow-Up Question - Can DFS use queue and BFS use stack?

- Definitely NO!
- Even if apply, DFS will result in BFS and vice-versa but this would not be an expected behavior because DFS should explore as deep as possible and BFS should explore trees level by level

## 4. Any real-time application which uses general tree traversals like pre-order or post-order?

- Yes, XML/HTML DOM construction
- File System - Listing out all the files and directories related to parent directory

## 5. Memory representation of binary tree. How does it look like?

## 6. What is Symmetric Tree?

## 7. How would you find the leaf node in binary tree programmatically?

- if there is no left and right node of any node, them we found a leaf node at any level.

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

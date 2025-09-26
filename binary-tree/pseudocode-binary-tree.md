
## Pre-order traversal - Iterative Approach
```html
Function PreorderTraversal(root):
    If root is null:
        Return empty array

    Initialize ans as empty array
    Initialize stack with root node

    While stack is not empty:
        Pop top node from stack and assign to curr
        Append curr.value to ans

        If curr has right child:
            Push curr.right to stack

        If curr has left child:
            Push curr.left to stack

    Return ans

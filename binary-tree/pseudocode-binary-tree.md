
## Pre-order traversal - Iterative Approach
```html
function PreorderTraversal(root):
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
```

### Post-Order Traversal - Using Two Stacks - Iterative Approach
```html
function PostOrderTraversal(root):
    IF root is NULL:
        RETURN empty list

    CREATE stack1 = []
    CREATE stack2 = []
    PUSH root INTO stack1

    // Step 1 - After the first while loop, stack2 will contain the nodes in reverse postorder sequence
    WHILE stack1 is not empty:
        curr = POP from stack1
        PUSH curr INTO stack2

        IF curr.left exists:
            PUSH curr.left INTO stack1
        IF curr.right exists:
            PUSH curr.right INTO stack1

    CREATE ans (empty list)
    
    // Step 2 - Reverse stack2 (which holds nodes in reverse postorder) to obtain the correct postorder sequence.
    WHILE stack2 is not empty:
        node = POP from stack2
        ADD node.value TO ans

    RETURN ans
```
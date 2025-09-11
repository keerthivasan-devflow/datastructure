When traversing linked lists, always use while (node) unless you have a specific reason to stop early. It’s the safest and most complete way to iterate through every node.

See example of intersection of two linked list - used while(headB) to add all nodes from list B. If you use
while(headB.next != null), the last node gets skipped.

- Whenever we update curr.next = curr.next.next; check the condition of while(curr && curr.next)
  - This works for deleting the middle element
- Whenever want to delete a node from linked list, consider a sentinel node
  - This heps us to make our life more easier
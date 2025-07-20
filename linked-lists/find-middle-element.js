// Find the middle element in a singly linked list
// Approach 1 - Brute force method
var middleNode = function (head) {
  let curr = head;
  let length = 0;
  while (curr.next !== null) {
    curr = curr.next;
    length++;
  }

  let temp = head;
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    temp = temp.next;
  }
  return temp;
};

// Approach 2 - using slow and fast pointer method
// Time Complexity - O(n)
// Space Complexity - O(1)
MyLinkedList.prototype.middleOfLinkedList = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
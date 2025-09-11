// Use a sentinel 'prev' to handle edge cases like removing the head node.
// Two-pass approach: first pass to get length, second to find and remove the target node.

// Time complexity - O(n)
// Space complexity - O(1)
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  let prevPos = length - n;
  let prev = sentinel;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
};

// One-pass approach : using two pointers technique where slow and fast pointer moves at one step

// Time Complexity - O(n)
// Space Complexity - O(1)
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;
  let first = sentinel;

  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  let second = sentinel;
  while (first.next) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;
  return sentinel.next;
};

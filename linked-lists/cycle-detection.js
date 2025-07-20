// Linked List Cycle Detection
// Approach 1 - using Hash Table
// Time Complexity - O(n)
// Space Complexity - O(n)
var hasCycle = function (head) {
  let seenNodes = new Set();
  let curr = head;
  while (curr) {
    if (seenNodes.has(curr)) {
      return true;
    }
    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
};

// Approach 2 - Floyd's Cycle Algorithm
// Time Complexity - O(n)
// Space Complexity - O(1)
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

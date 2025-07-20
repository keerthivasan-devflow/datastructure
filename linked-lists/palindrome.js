// Palindrome or not
// Approach 1 - By converting a linked list into an array
// Time complexity - O(n)
// Space complexity - O(n) - [It creates an extra copy since converting linked list into an array]

// Approach 2
// Time complexity - O(n)
// Space complexity - O(1)
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let curr = slow;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
};
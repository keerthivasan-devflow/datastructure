
var rotateRight = function (head, k) {
  if (!head) return head;

  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  k = k % length;

  let first = head;
  for (let i = 0; i < k; i++) {
    first = first.next;
  }

  let second = head;
  while (first.next) {
    first = first.next;
    second = second.next;
  }

  first.next = head;
  let newHead = second.next;
  second.next = null;

  return newHead;
};

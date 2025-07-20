// Time complexity - O(n)
// Space complexity - O(1)

var getIntersectionNode = function (headA, headB) {
  // To calculate first list count
  let m = 0;
  let pA = headA;
  while (pA) {
    m++;
    pA = pA.next;
  }

  // To calculate second list count
  let n = 0;
  let pB = headB;
  while (pB) {
    n++;
    pB = pB.next;
  }

  // If first list is large and second is small
  if (m > n) {
    let temp = headA;
    headA = headB;
    headB = temp;
  }

  // Finding the difference between two lists
  let diff = Math.abs(m - n);
  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  pA = headA;
  pB = headB;
  while (pA !== pB) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
};

// Approach 2
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};

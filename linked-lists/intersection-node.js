// Intersection of linked list
// Time complexity - O(m + n)
// Space complexity - O(m)  where m denotes that all the elements are stored in set
var getIntersectionNode = function (headA, headB) {
  let bset = new Set();
  while (headB) {
    bset.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (bset.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  return null;
};

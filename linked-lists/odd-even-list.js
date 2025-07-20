// Time Complexity - O(n)
// Space Complexity - O(1)
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenStart = even;
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
};


// var oddEvenList = function (head) {
//   if (!head || !head.next) return head;
//   let odd = head;
//   let even = head.next;
//   let evenHead = even;

//   while (even && even.next) {
//     odd.next = even.next;
//     odd = odd.next;
//     even.next = odd.next;
//     even = even.next;
//   }
//   odd.next = evenHead;
//   return head;
// };
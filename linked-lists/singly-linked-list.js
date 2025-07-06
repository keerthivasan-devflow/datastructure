var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

var Node = function (val) {
  this.val = val;
  this.next = null;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let newnode = new Node(val);
  newnode.next = this.head;
  this.head = newnode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newnode = new Node(val);
  if (this.head === null) {
    this.head = newnode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newnode;
  }
  this.size++; // Also missing increment of size!
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0) return this.addAtHead(val);
  if (index === this.size) return this.addAtTail(val);

  let newnode = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }
  newnode.next = curr.next;
  curr.next = newnode;
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

MyLinkedList.prototype.middleOfLinkedList = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

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

let list = new MyLinkedList();
list.addAtHead(10);
list.addAtTail(20);
list.addAtIndex(1, 30);
list.addAtIndex(2, 40);
list.addAtIndex(3, 50);
list.addAtIndex(1, 60);

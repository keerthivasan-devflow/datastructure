var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q1.length;

  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let popped = this.q1.shift();

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return popped;
};

MyStack.prototype.top = function () {
  let n = this.q1.length;

  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  // Below two lines are doing the same as 36th and 37th line
  //   let frontVal = this.q1[0];
  //   this.q2.push(this.q1.shift());

  let frontVal = this.q1.shift();
  this.q2.push(frontVal);

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return frontVal;
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

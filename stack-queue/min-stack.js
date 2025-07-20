var MinStack = function () {
  this.s = [];
};

MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
    this.s.push([val, val]);
  } else {
    let currMin = this.s[this.s.length - 1][1];
    let minVal = Math.min(val, currMin);
    this.s.push([val, minVal]);
  }
};

MinStack.prototype.pop = function () {
  this.s.pop();
};

MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0];
};

MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

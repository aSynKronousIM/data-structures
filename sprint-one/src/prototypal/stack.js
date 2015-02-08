var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);

  stack.storage = {};
  stack.end = 0;

  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.end++] = value;
};

stackMethods.pop = function() {
  // if the stack is not empty
  if (this.end !== 0) {
    // delete the element on the end
    // decrement the index
    var popped = this.storage[--this.end];
    delete this.storage[this.end];

    // return the popped element
    return popped;
  }
};

stackMethods.size = function() {
  return this.end;
};



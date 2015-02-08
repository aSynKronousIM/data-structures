var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  
  stack.storage = {};
  stack.end = 0;

  extend(stack, stackMethods);

  return stack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.size = function() {
  return this.end > 0 ? this.end : 0;
}

stackMethods.push = function(value) {
  this.storage[this.end++] = value;
}

stackMethods.pop = function() {
  if (this.end > 0) {
    this.end--;    
  }

  var popped = this.storage[this.end];
  delete this.storage[this.end];

  return popped;
}



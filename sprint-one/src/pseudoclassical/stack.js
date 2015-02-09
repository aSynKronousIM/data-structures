var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.end = 0;
};

Stack.prototype.size = function() {
  return this.end;
};

Stack.prototype.push = function(value) {
  this.storage[this.end++] = value;
}

Stack.prototype.pop = function() {
  if (this.end > 0) {
    var popped = this.storage[--this.end];
    delete this.storage[this.end];

    return popped;
  }
}


var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);

  queue.storage = {};
  queue.start = 0;
  queue.end = 0;

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end++] = value;
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[this.start]; 
  delete this.storage[this.start++];

  return dequeued;
};

queueMethods.size = function() {
  return this.end - this.start > 0 ? this.end - this.start : 0;
};


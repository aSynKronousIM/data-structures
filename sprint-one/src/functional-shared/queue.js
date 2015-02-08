var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.start = 0;
  queue.end = 0;;

  extend(queue, queueMethods);

  return queue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end++] = value;
};

queueMethods.dequeue = function() {
  if (this.end !== 0) {
    var dequeued = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return dequeued;
  }
};

queueMethods.size = function() {
  return this.end - this.start > 0 ? this.end - this.start : 0;
};




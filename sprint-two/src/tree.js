var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var willVisit = new Queue();
  willVisit.enqueue(this.children);

  while (willVisit.size() !== 0) {
    var visiting = willVisit.dequeue();

    for (var i = 0; i < visiting.length; i++) {
      if (visiting[i].value === target) {
        return true;
      }
      willVisit.enqueue(visiting[i].children);
    }
  }
  return false;
};

var Queue = function() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.size = function(){
  return this.end - this.start;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function(){
  var result = this.storage[this.start];
  if(this.start !== this.end){
    delete this.storage[this.start];
    this.start++;
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

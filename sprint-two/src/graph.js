

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  this.storage[node] = node;
};

Graph.prototype.contains = function(node){
  return !!this.storage[node];
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.storage[fromNode] === this.storage[toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode] = this.storage[toNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this.storage[fromNode] = fromNode;
  this.storage[toNode] = toNode;
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage) {
    cb(this.storage[key], key, this.storage);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




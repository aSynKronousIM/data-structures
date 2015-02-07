
var Queue = function(){
  var someInstance = {};
  var end = 0;
  var start = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[end] = value;
    end += 1;
  };

  someInstance.dequeue = function(){
    if(end > start) {
      var out = storage[start];
      start += 1;
      return out;
    }
  };

  someInstance.size = function(){
    return end - start;
  };

  return someInstance;
};
var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var end = 0;

  // Implement the methods below
  someInstance.push = function(value){
    end++;
    storage[end] = value;
  };

  someInstance.pop = function(){
    var popped = storage[end];
    delete popped;
    end--;
    return popped;
  };

  someInstance.size = function(){
    return end < 1 ? 0 : end;
  };

  return someInstance;
};

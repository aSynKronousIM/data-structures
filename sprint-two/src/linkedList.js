var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.head.next = newNode;
      list.tail = newNode;
    }

    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function(){
    var oldHead = list.head;
    list.head = list.head.next;
    oldHead.next = null;

    return oldHead.value;
  };

  list.contains = function(target){
    var check = list.head;

    while (check !== null) {
      if (check.value === target) {
        return true;
      } else {
        check = check.next;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

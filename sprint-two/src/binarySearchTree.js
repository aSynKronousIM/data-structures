var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
BinarySearchTree.prototype.insert = function(value){
  var newNode = BinarySearchTree(value);
  var helper = function(treeNode){
    if(value > treeNode.value){
      if(treeNode.right === null){
        treeNode.right = newNode;
      } else {
        helper(treeNode.right);
      }
    } else {
      if(treeNode.left === null){
        treeNode.left = newNode;
      } else {
        helper(treeNode.left);
      }
    }
  };
  helper(this);
};

BinarySearchTree.prototype.contains = function(target){
  var check = this;
  while(check !== null){
    if(check.value === target){
      return true;
    } else if(check.value > target){
      check = check.left;
    } else {
      check = check.right;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callBack){
  var recursion = function(treeNode){
    callBack(treeNode.value);
    if(treeNode.left !== null){
      recursion(treeNode.left);
    }
    if(treeNode.right !== null){
      recursion(treeNode.right);
    }
  };
  recursion(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

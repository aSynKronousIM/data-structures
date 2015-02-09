var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var innerArr = this._storage.get(i);

  if (!innerArr) {
    innerArr = [];
    this._storage.set(i, innerArr);
  }

  var found = false;

  for (var i = 0; i < innerArr.length; i++) {
    var tuple = innerArr[i];
    if (tuple[0] === k ) {
      tuple[1] = v;
      found = true;
      break;
    }
  }

  if (!found) {
    innerArr.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var innerArr = this._storage.get(i);

  if (!innerArr) {
    return null;
  }

  for (var i = 0; i < innerArr.length; i++) {
    var tuple = innerArr[i];
    if (tuple[0] === k ) {
      return tuple[1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
var i = getIndexBelowMaxForKey(k, this._limit);
  
var innerArr = this._storage.get(i);

  if (!innerArr) {
    return null;
  }

  for (var i = 0; i < innerArr.length; i++) {
    var tuple = innerArr[i];
    if (tuple[0] === k ) {
      innerArr.splice(i, 1);
      return tuple[1];
    }
  }

  return null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

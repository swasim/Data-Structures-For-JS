function HashTable() {
  this.tableSize = 0;
  this.datastore = {}; // initialize an empty object that will store elements of a hashtable object
  this.clear = clear; // clears ALL elements from a given object
  this.contains = contains; // check to see if a given key exists in the object

}
// create new hash table using object contructor
var hashTable = new HashTable;


//methods in the prototype of a hashtable object

//clear
HashTable.prototype.clear = function() {
  this.dataStore = {};
  this.tableSize = 0;
  return this.dataStore;
}

//contains
HashTable.prototype.contains = function (key) {
  if(this.prototype.dataStore.hasOwnProperty(key)) {}
    return true;
  } else {
    return false;
  }
}

//enumerate aka increase by 1 increment

HashTable.prototype.enumerate = function () {
  for(var element in this.dataStore) {
  console.log(element);
  }
}

HashTable.prototype.isEmpty = function () {
  return this.size > 0 ? false : true
}

HashTable.prototype.put = function(key, value) {
  if(this.dataStore.hasOwnProperty(key)){
    throw new Error("Hashtable cannot contain duplicates")
  }else {
    this.dataStore[key] = value;
    this.size += 1;
    return this.dataStore;
  }
}

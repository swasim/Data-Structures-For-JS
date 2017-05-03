//Lists as Abstract Data Type.

function listStructure() {

//general features

this.dataStore = []; // initialize an empty array that will store elements of a list
this.contains = contains; // check to see if a given element exists in the list
this.find = find; // look for a given element and return position of element
//properties
this.listSize = 0; // Number of elements in a list
this.pos = 0; // Position of element in list
this.currPos = currPos; // Current position of element in list
this.length = length;// length of the number of elements in a list

//functions of Lists

this.clear = clear; // clears ALL elements from a given list
this.toString = toString; // returns a string version of list
this.getElement = getElement; // return the element at the current position in the list
this.insert = insert; // adds new element after the current element
this.append = append; // add new element to end of the list
this.remove = remove; // remvoes the element from the list
this.front = front; // current position of element is set to the first element of the list
this.end = end; //current position of element is set to last element in list
this.next = next; // current element is moved to the position of the next element
this.prev = prev; //current element is moved back one position
this.moveTo = moveTo; // move the current position of element to a specified position

}


function append(element) {
  this.dataStore[this.listSize++] = element;
// adds new elements onto the list
//listSize increase by one each time an element is added
}

function find(element) {
  for(var i = 0; i< this.dataStore.length; i++) {
    if(this.dataStore === element) {
      return i
    }
  }
  return -1;
}

function remove(element) {
  var foundElement = this.find(element);
  if(foundElement !== -1) {
    this.dataStore.splice(foundElement, 1);
    --this.listSize;
    return true;
  } else {
    return false;
  }
}

function length(listLength){
  var listLength = this.listSize;
  return listLength;
}

function toString() {
  return this.dataStore;
  // returns the string version of all elements in this string
}

function insert(element, posofElement) {
  var insertPos = this.find(posOfElement);
  if(insertPos !== -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  } else {
    return false;
  }
}

function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos; //this.pos should be equal to 0
  // if this.pos is not set then
  this.listSize = this.pos = 0;
}



function contains(element){
  var listSearch = this.find(element);
  if(listSearch !== -1) {
    return true; //element does exist in list
  }
    return false; // element does not exist in list
}

//another way to check is list contains element is -->
function contains(element) {
  for(var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }
  return false;
}


//movement of elements within a list

function front(){
  this.pos = 0;
  // front of list starts at index 0;
}


function end() {
  this.pos = this.listSize - 1;
  // returns the position of the last element in a list
}


function prev() {
    if(this.pos > 0) {
      --this.pos;
    } else {
      return alert("This is the first element in this list!");
    }
}

function next() {
  if(this.pos !=== (this.listSize - 1)) { // you can also use if(this.pos <this.listSize-1)
    ++this.pos;
  } else {
    return alert("This is the last element in this list!");
  }
}


function moveTo(position) {
  this.pos = position;
}


function currentPos() {
  return this.pos;
}


function getElement() {
  return this.dataStore[this.pos];
  // displays current element in a list
}

//iteration through a list from front of list

for (var this.front(); this.currentPos() < this.length; this.next) {
  console.log(this.getElement());
}

//iteration through a list from end of list

for (var this.end; this.currentPos() >= 0; this.prev) {
  console.log(this.getElement());
}

class Stack {
  constructor(){
    this.dataStorage = {};
    this.size = 0;
  }

  push(element) {
    this.dataStorage[this.size] = element;
    this.size ++;
  }

  pop() {
    if(this.size !== 0) {
      this.size --;
      var remainingElements = this.storage[this.size];
      return remainingElements;
    }
  }
}
var dogList = new Stack();
dogList.push("Cyrus");
dogList.push("Romeo");
dogList.push("Simba");

console.log(dogList);

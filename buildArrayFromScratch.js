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
dogList.push("Cyrus"); // { dataStorage: { '0': 'Cyrus' }, size: 1 }
dogList.push("Romeo"); // { dataStorage: { '0': 'Cyrus', '1': 'Romeo' }, size: 2 }
dogList.push("Simba"); // { dataStorage: { '0': 'Cyrus','1': 'Rome', '2': 'Simba' }, size: 3 }

console.log(dogList);

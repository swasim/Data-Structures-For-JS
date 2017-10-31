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





-------- OR --------------
var myStack = [];

//push
myStack.push(1);
myStack.push(2);
myStack.push(3);

//pop
myStack.pop(); //3
myStack.pop(); //2
myStack.pop(); //1  
  
  
  
  

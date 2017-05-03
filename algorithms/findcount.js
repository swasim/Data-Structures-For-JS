//checks number of times it takes the function to locate a given element.

var num = [1,2,3,4,5,6,7,8,9,10];

// An algorithm to find 10 in array
var i = 0;
var empty = 0;
var index;

while(empty !== 10){
    index = Math.floor(Math.random()*10);
    empty = num[index];
    i++;
}

console.log("Found 10 in " + i + " tries!");

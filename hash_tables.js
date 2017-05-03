
//Find the index of the elements in an array

var dictionary = ["words", "more", "something"];

dictionary.indexOf(2); //return the second index value of the element in the array

//Check and see if the element already exists
var newWordToAdd = ""; // fill in with word when you call function
var checkElement = function(dictionary, newWordToAdd){}
  if (dictionary.indexOf(newWordToAdd) === -1) {
    dictionary.push(newWordToAdd);
    console.log("This is the updated dictionary word list " + dictionary);
  } else if (dictionary.indexOf(newWordToAdd) > -1) {
    console.log(newWordToAdd + " this word already exist")
  }
}

//  should return the array with either the addition of the new word if word does not exist


hash(key) %  array_length;
//two different hashcodes can sometimes point to the same index

//minimum collision time means lookup time is ... O(N) === O(1).
//N is the number of keys

//Java arrays are fixed...immutable

//implementing hash tables with Binary Search Tree
O(log N);

//for dynamic resizing of the array, use ArrayList
ArrayList === O(1);
//when the array is full, the array doubles in size
//each doublng takes O(n) times but more often than it's O(1)

//Example sentence--
var sentence = [];
var ArrayList = function (words, more) {
  sentence = sentence.push(new ArrayList)

}

var sentence =
js object is always fast O(1)

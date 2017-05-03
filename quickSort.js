var array = [1, 11, 5, 6, 4, 3, 7, 10, 2, 8];

function quicksortBasic(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var small = [];
  var big = [];

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      small.push(array[i]);
    } else {
      big.push(array[i]);
    }
  }

  return quicksortBasic(small).concat(pivot, quicksortBasic(big));
}

console.log(quicksortBasic(array.slice())); //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// swap function 
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

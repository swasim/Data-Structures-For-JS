function merge(left, right){
  var result = [],
      leftlength = left.length,
      rightlength = right.length,
      l = 0,
      r = 0;
  while(l < leftlength && r < rightlength){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }
  //remaining part needs to be added to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}



function mergeSort(array){
   var arrayLength = arr.length;
   if(arrayLength <2)
      return array;
   var mid = Math.floor(arrayLength/2),
       left = array.slice(0,mid),
       right =array.slice(mid);
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   return merge(mergeSort(left),mergeSort(right));
}

var stockValue = [5,7,3,100,1,100];

//find highest number

var greatest = -Infinity;
var i;
var dayGreatest;
for (i = 0; stockValue.length > i; i++) {

    if (stockValue[i] > greatest) {
        greatest= stockValue[i];
        dayGreatest = i+1;
    }
}

//find lowest number


var least = Infinity;
var i;
var dayLeast;
for (i = 0; stockValue.length > i; i++) {

    if (stockValue[i] < least) {

        least = stockValue[i];
        dayLeast = i+1;
    }

}

function profitCalc(least, greatest) {
   var profit = greatest - least;
   return profit;
}

console.log(least, ':' ,dayLeast);
console.log(greatest, ':' ,dayGreatest);
console.log(profitCalc(least, greatest))

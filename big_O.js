//Big O measures the efficiency of a particular algorith.
//growth rate of the time it takes for the algortith to
//complete dependent on the amount of data present.
var bigO = O(f(n)),

f(n) = function of n;
//Example
O(n^2) //Oh of "n" squared
//this is a function O, of the run time of an algorithm.


// to find the run time of an algorithm, determine the time
//the algorithm takes to fun as a function of the number of
//given inputes
//then find out how many times the algorthm acts on each
//element in an array
//-----algorithm acts on each element of the array some
//-----fixed number of times.

//if it affects each element some variable times, for example
//it affects each of the n elements in the array n times. That
//algorithm has an efficiency of:
O(n^2)


Big O describes an upper limit on the growth behaviour of a function, for example the runtime of a program, when inputs become large.

Examples:

O(n): If I double the input size the runtime doubles
O(n2): If the input size doubles the runtime quadruples
O(log n): If the input size doubles the runtime increases by one
O(2n): If the input size increases by one, the runtime doubles
The input size is usually the space in bits needed to represent the input.


In many cases the "O" of an algorithm will fall into one of the following cases:

O(1) - Time to complete is the same regardless of the size of input set. An example is accessing an array element by index.
O(Log N) - Time to complete increases roughly in line with the log2(n). For example 1024 items takes roughly twice as long as 32 items, because Log2(1024) = 10 and Log2(32) = 5. An example is finding an item in a binary search tree (BST).
O(N) - Time to complete that scales linearly with the size of the input set. In other words if you double the number of items in the input set, the algorithm takes roughly twice as long. An example is counting the number of items in a linked list.
O(N Log N) - Time to complete increases by the number of items times the result of Log2(N). An example of this is heap sort and quick sort.
O(N^2) - Time to complete is roughly equal to the square of the number of items. An example of this is bubble sort.
O(N!) - Time to complete is the factorial of the input set. An example of this is the traveling salesman problem brute-force solution.

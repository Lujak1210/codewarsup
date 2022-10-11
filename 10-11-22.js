// Filling an array pt 1

// DESCRIPTION:
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.


function arr(n){     // a function to take in an array with ne argument
    var newArr = [];  // declares the value of a new array
    for(var i = 0; i < n; i++){ // for loop , var i equals to 0 at start, if i is less than n add i to plus 1
      newArr.push(i); // push elements into new array.
    }
    return newArr; // retiurn the value into a newArray.
  }
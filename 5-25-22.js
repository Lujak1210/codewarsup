// Count by X
// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    var z = [];         // declares an empty array 
    for (i = 1; i <= n; i++) {      // a for loop that loops through given array
        z.push(x * i);  // pushes into z array the number times the i counter.
    }
    return z;           // return the z array
}
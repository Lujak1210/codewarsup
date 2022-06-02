// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    // your code here
    arr = []    // declares an array
    for(i = a;i <= b; i++){ // i equals a if i is less or equal to b, add i plus 1
        arr.push(i) // pushes i into array
    }
    return arr // well.....returns array
  }
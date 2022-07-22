// repeatIt

// DESCRIPTION:
// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

var repeatIt = function(str, n) {
    return typeof str === 'string' ? Array(n+1).join(str) : 'Not a string';
  }

// Return tupeof string if the "string" is a string return it times the integer as an array.joined if not hir em with "Not a string"
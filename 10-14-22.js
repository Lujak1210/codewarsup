// is it a number?


// DESCRIPTION:

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:
// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")

// should return false:
// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
    return parseFloat(s) === Number(s)
  }  // funtion takes in a string and returns boolean if when condition is met. 
  // compares value using 
  //parseFloat()- returns a floating number
  // and 
  //Number()- returns a numeric value, como estrings.
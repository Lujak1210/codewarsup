// Sum Mixed Array

// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x) {
    return x.map(a => +a).reduce((a,b) => a + b);
}


// return the value x, form a new array that turns strings to numbers and the reduces it as a numerical value. 
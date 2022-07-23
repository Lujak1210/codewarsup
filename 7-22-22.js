// Remove First and Last Character Part Two

// DESCRIPTION:
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL


// Flex Mode

function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }



  // readable

// it is not array
const array = (arr) => {
    arr = arr.split(',')
    arr.pop()
    arr.shift()
    return arr.join(' ') === '' ? null : arr.join(' ')
  }

//  const array equals to a function that takes the data inputed spilt and joined by a coma while popping and shifting the first and last element, if this cant be done with the data provided return null.  
// Grasshopper-Combine Strings

// DESCRIPTION:
// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'


// Create the combineNames function here

var combineNames = function(first, last){
    return first + ' ' + last;  
  };

// BEAST MODE 

const combineNames = (...names) =>  names.join(' ');



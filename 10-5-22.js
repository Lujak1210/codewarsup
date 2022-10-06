// Beginer series, School paperwork

// DESCRIPTION:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {  // function takes 2
    if (m < 0 || n < 0) {   // if m is less than 0 or n is less than 0, do....
      return 0; //return 0
    }
    return m * n; // multiply m times n and return the value.
  }
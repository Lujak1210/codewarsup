// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]



const reverseSeq = n => {
    let arr = [];                   // declare an array and...
      for (let i=n; i>0; i--) {     // a got loop in this array to run through the array in reverse starting at 5.
        arr.push(i);                // pushes new array per interger
        } return arr;               // returns a new array 
    };
// Loop Statement


// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

// I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

function pickIt(arr){  // declares the function name pickIt and takes in an array
    var odd=[],even=[]; // declares 2 empty arrays odd and even  
    for(i of arr) { // sets the for loop to loop throught the array taken in.
        if (i % 2 === 0){  // if the integer is divisible by 2 with no remainder, its an even number.
            even.push(i) // if so push into the even array.
        }else { // and if the integer does not meet the previous condition....
            odd.push(i); // push the integer into the odd array.
        }
    }
    
    
    return [odd,even]; // returns the newly compiled odd and even arrays.
  }




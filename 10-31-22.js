// Sum the two lowest integers 

// task:

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };
// function sumTwoSmall.... takes in some positive numbers
// numbers will be sorted from lowest to highest
// we will return the value of lowest two which are now sitting in the 0eth and 1st index.
// Sum of Multiples

// DESCRIPTION:
// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
    if (n >= m) return "INVALID"; // if n is less or equal to m return invalid. 
  
  var sum = 0; // declres sum
    for (var i = n; i < m; i+=n) { //for loop var i = n, in n is less than m, add number plus n//
      sum += i;
    }
    return sum;
  }
// Sum of diffrences

// DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

function sumOfDiffrences(arr) {
     return arr.length > 1 ? Math.max(...arr) - Math.min(...array) : 0;   
}
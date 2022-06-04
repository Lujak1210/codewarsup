// Make Duper Easy

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// function problem(x){
//     return (x * 50) + 6;
    
//     if (x = !number){
//         return "Error"
//     }
// }

// Arrow function 

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

// 'nother arrow function 

function problem(x){
    return typeof x == 'string' ? 'Error' : (x * 50 + 6);
  }
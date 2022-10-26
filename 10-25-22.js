// Are arrow functions odd?

// time to test your basic knowledge in functions! Return the odds form the list:


[1, 2, 3, 4, 5] --> [1, 3, 5]
[2, 4, 6] --> []


function odds(values){
    return values.filter( v => v%2 );
  }
// returns the values filtered(if the value of v can be devided by 2 with no remainder), get them numbers out of her

//one liner arrow function.
var odds = (values) => values.filter(v => v%2);


//here we make sure it is stated that the there cant be a remainder !==0 
const odds = values => values.filter(n => n % 2 !== 0);
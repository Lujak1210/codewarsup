// Convert a string to an array
// DESCRIPTION:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// ok ok 

function stringToArray(string){
//take string and bust it down with .split() 
return string.split(' ');
}

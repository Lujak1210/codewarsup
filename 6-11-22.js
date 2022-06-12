// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

function nameShuffler(str){
    return str.split(' ').reverse().join(' ') //takes str spilts is, reverses it and wraps it.
  }
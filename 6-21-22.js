// No ZEROS for heroes

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}  // while the number devided by 10 will yeild 0 remainder and the number is NOT 0, if so divide the number by 10.
    return n;  // return the number as proccesed.
  }
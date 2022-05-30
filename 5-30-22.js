// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

const cockroachSpeed = s => Math.floor(s / 0.036); // Flexasaurus


// More my speed below.

function cockroachSpeed(s) {
    const secsInHour = 3600;  // delcares how many sec in hour
    const centimetersInKilometers = 100000; // declares how many kilometers in a centimeter
    
    return Math.floor((s*centimetersInKilometers)/secsInHour);
    //  returns (Math.floor():reduces the number we get to the lowest whole) our speed times centi devided by secs in our.
  }
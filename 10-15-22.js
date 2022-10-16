// Area of a Square
// DESCRIPTION:
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)


// alright alright, i had to see the answer for this one.
// but i understand whats going on.
function squareArea(A){//function takes in an arc
    var circum = 4 * A; //a circles circumference is arc times 4
    var radius = circum / (2 * Math.PI); // value is circum divided by pi times 2
    var area = Math.pow(radius, 2);// the value of area is radius to the 2nd power using Math.pow
    return Math.round(area*100)/100// will return the value of the are times 100 that is rounded utilizing Math.round() then divided by 100 to give is the are of the full red square.
  }
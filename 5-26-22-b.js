// volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

    class Kata {
        static getVolumeOfCuboid(length, width, height) {
        return (length * width * height)
        }
    }

// or.............
// the arrow function with an implicit return.
 
    const Kata = {
        getVolumeOfCuboid : (length, width, height) => length * width * height
    }


// or...........
// the long way home

    var Kata;       // declare var named Kata

    Kata = (function() {  // var Kata will contain an function named Kata. 
    function Kata() {}   // the function does its thang.

    Kata.getVolumeOfCuboid = function(length, width, height){return length * width * height};

    return Kata;       // Kata return all the fun values calculated in the function .

    })();
// Surface Area and volume of a Box.

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(w, h, d){
    var area = (2*d*h) + (2*w*h) + (2*d*w);      
    var volume = d*w*h;
    return [area, volume];
  }
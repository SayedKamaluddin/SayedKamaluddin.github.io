// This is a genarative Art demo
//Using Object Notation and Arrays
// March 07, 2025

let lineArray = [];
let someLine;

function setup() {
  createCanvas(windowWidth, windowHeight);
  someLine = spownLine(width/2, height/2, 400);
}

function draw() {
  background(220);
  line(someLine.x1,someLine.y1,someLine.x2,someLine.y2);
}

function spownLine(x, y, theSize){
  let theLine;
  let choise = random(100);
  if (choise < 50){
    //Negative slope
    theLine = {
      x1: x-theSize/2,
      y1: y-theSize/2,
      x2: x+theSize/2,
      y2: y+theSize/2,
    };
  }
  else {
    //positive slope
    theLine = {
      x1: x-theSize/2,
      y1: y+theSize/2,
      x2: x+theSize/2,
      y2: y-theSize/2,
    };
  }
  return theLine;
}
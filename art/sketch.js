// This is a genarative Art demo
//Using Object Notation and Arrays
// March 07, 2025

const LINESIZE = 50;
let lineArray = [];
let someLine;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x= 0; x< width; x+=LINESIZE){
    for (let y= 0; y< height; y+=LINESIZE){
      someLine = spownLine(x, y, LINESIZE);
      lineArray.push(someLine);
    }
  }
  // noLoop();
}

function draw() {
  background(220);
  for (let aLine of lineArray){
    line(aLine.x1,aLine.y1,aLine.x2,aLine.y2);
  }
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
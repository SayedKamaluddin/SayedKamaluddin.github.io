// The Clock
// Kamaluddin
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let radius;
let xCenter;
let yCenter;
let hHand;
let mHand;
let sHand;



function setup() {
  createCanvas(windowWidth, windowHeight);
  yCenter = height/2;
  xCenter = width/2;
  if (windowHeight>windowWidth){
    radius = xCenter;
  }
  else{
    radius = yCenter;
  }
  

}

function draw() {
  // arc()
  background(220);
  circle(xCenter, yCenter, radius*2);
  // fill(15);
  arc(xCenter, yCenter, 10, radius, 0, PI);
}
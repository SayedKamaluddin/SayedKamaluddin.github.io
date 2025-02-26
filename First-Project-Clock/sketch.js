// The Clock
// Kamaluddin
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let radius;

function setup() {
  createCanvas(400, 400);
  radius = width/2;
}

function draw() {
  background(220);
  circle(width-radius, height-radius, width);
  line(0, 0, width ,height);
  line(width, 0, 0,height);
  line(0 ,height/2, width ,height/2);
  line(width/2 ,0, width/2 ,height);
}
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
let boxSize = 5;
let rows, cols;
let song;

function preload() {
  song = loadSound("../sound-sample.webm");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // rows = height / boxSize;
  // cols = width / boxSize;
  background(255);
  noStroke();
}

function draw() {
  background(20,10,20,10);
  changeMouseSournding()
  if (isDetected){
    console.log("Detected");
  }
}

function changeMouseSournding(){
  x = mouseX;
  y = mouseY;
  if (x!==mouseX || y!==mouseY){
    fill(255, 0, 0);
    circle(mouseX, mouseY, 50);
    fill(20,10,20);
    circle(mouseX, mouseY, 45); 
  }
  else{
    fill(255);
    circle(mouseX, mouseY, 50);
  }
}


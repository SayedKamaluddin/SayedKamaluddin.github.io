// Sound Reacting Wallpaper
// Kamaluddin Hashimy
// Mar 4, 2025
//
// Extra for Experts: Reacts to sound beeats
// - describe what you did to take this project "above and beyond"

let x, y;
let boxSize = 5;
let rows, cols;
let song;
let fillColor = "white";
let amp;
let val;

function preload() {
  song = loadSound("../sound-sample.webm");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // rows = height / boxSize;
  // cols = width / boxSize;
  background(fillColor);
  noStroke();
  x = mouseX;
  y = mouseY;
  amp = new p5.Amplitude();
}

function draw() {
  background(20,10,20,10);
  changeMouseSournding();
  reactToSound();
  // if (isDetected){
  //   console.log("Detected");
  // }
}

function changeMouseSournding(){
  if (x!==mouseX || y!==mouseY){
    fill(fillColor);
    circle(mouseX, mouseY, 75);
    x = mouseX;
    y = mouseY;
    // fill(20,10,20);
    // circle(mouseX, mouseY, 45); 
  }
  else{
    noFill();
    // circle(mouseX, mouseY, 50);
  }
}


function reactToSound(){
  val = amp.getLevel();
  console.log(val);
  if (val > 0.2){
    fill(fillColor);
    ellipse(random(0, windowWidth), random(0, windowHeight), random(25,100), random(25,75));
  }
}


function keyPressed(){
  checkForColorChange();
  fill(fillColor);
  ellipse(random(0, windowWidth), random(0, windowHeight), random(25,100), random(25,75));
}


function checkForColorChange(){
  if (keyIsDown(16) && keyIsDown(82)){
    fillColor = "red";
    background(fillColor);
  } 
  else if (keyIsDown(16) && keyIsDown(87)){
    fillColor = "white";
    background(fillColor);
  } 
  else if (keyIsDown(16) && keyIsDown(71)){
    fillColor = "green";
    background(fillColor);
  } 
  else if (keyIsDown(16) && keyIsDown(66)){
    fillColor = "blue";
    background(fillColor);
  } 
  else if (keyIsDown(16) && keyIsDown(89)){
    fillColor = "yellow";
    background(fillColor);
  }
  else if (keyIsDown(16) && keyIsDown(79)){
    fillColor = "orange";
    background(fillColor);
  }
  else if (keyIsDown(16) && keyIsDown(80)){
    song.play();
  }
  else if (keyIsDown(16) && keyIsDown(83)){
    song.stop();
  }
}


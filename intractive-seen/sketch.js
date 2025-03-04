// Sound Reacting Wallpaper
// Kamaluddin Hashimy
// Mar 4, 2025
//
// Extra for Experts:Loads and Reacts to Music
// - describe what you did to take this project "above and beyond"


//Defining Global Varibles
let x, y;
let boxSize = 5;
// let rows, cols;
let song;
let fillColor = "blue";
let amp, val;

//Preloading the song
function preload() {
  try{
    song = new p5.AudioIn();
    console.log('true');
  }
  catch{
    song = loadSound("../sound-sample02.m4a");
    console.log('false');
  }
}

//Setup Function, Created the canvas, set the background, and got the amplitude of the song
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

//Calls all the functions and Drows them in Canvas
function draw() {
  background(20,10,10,10);
  changeMouseSournding();
  reactToSound();
  // if (isDetected){
  //   console.log("Detected");
  // }
}

//Createes a Circle if the mouse moves
function changeMouseSournding(){
  if (x!==mouseX || y!==mouseY){
    fill(fillColor);
    circle(mouseX, mouseY, 75);
    x = mouseX;
    y = mouseY;
    // fill(20,10,20);
    // circle(mouseX, mouseY, 45); 
  }
  // else{
  //   noFill();
  //   // circle(mouseX, mouseY, 50);
  // }
}

//Gest the Apm and valume of the preLoaded song and creates random Ellipses if the sound reaches the desicnated amount
function reactToSound(){
  val = amp.getLevel();
  console.log(val);

  if (val > 0.3){
    fill(fillColor);
    ellipse(random(0, width), random(0, height), random(25,100), random(25,75));
  }
}

//Creates a random Ellipse if a key is preesed
function keyPressed(){
  checkForColorChange();
  fill(fillColor);
  ellipse(random(0, width), random(0, height), random(25,100), random(25,75));
}

//checks what keys are pressed and Makes changes accordingly
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


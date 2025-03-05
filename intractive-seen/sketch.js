// Sound Reacting Wallpaper
// Kamaluddin Hashimy
// Mar 4, 2025
//
// Extra for Experts:Loads and Reacts to Music
// - describe what you did to take this project "above and beyond"
// I created a wallpaper that reacts to sound and music. The wallpaper changes color when a key is pressed and creates random ellipses when the sound reaches a certain level. The wallpaper also creates a circle around the mouse when it moves and also plays and stops the music when a key is pressed. I also added a feature that would detect the microphone and react to the sound from the microphone.

//Defining Global Varibles
let x, y;
// let boxSize = 5;
// let rows, cols;
let song;
let fillColor = "blue";
let amp, val;
let mic, micVal;
let micIsDetected, micOn = false;

//Preloading the song
function preload() {
  song = loadSound("../sound-sample02.m4a");
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
  try{
    mic = new p5.AudioIn();
    micIsDetected = true;
  }
  catch{
  }
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

//Gets the Apm and valume of the preLoaded song and the microphone and creates random Ellipses if the sound reaches the desicnated amount
function reactToSound(){
  if (micIsDetected){
    micVal = mic.getLevel();
  }
  val = amp.getLevel();
  console.log(val, micVal);

  if (val > 0.3 || micVal > 0.01){
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

//checks what keys are pressed and Makes changes accordingly like change the color of the background, play and stop the music, and start and stop the microphone.
function checkForColorChange(){
  let colors = {82:"red", 71:"green", 66:"blue", 89:"yellow", 79:"orange", 87:"white"};
  if (keyIsDown(16)){
    for (let color in colors){
      if (keyIsDown(color)){
        fillColor = colors[color];
        background(fillColor);
      }
    }
    if (keyIsDown(80)){
        song.play();
      }
    else if (keyIsDown(83)){
        song.stop();
      }
    if (keyIsDown(77) && micIsDetected){
      if (micOn){
        mic.stop();
        console.log("Stopped");
        micOn = false
      } else {
        mic.start();
        micOn = true;
        console.log("Started");
      }
    }
  }
  // if (keyIsDown(16) && keyIsDown(82)){
  //   fillColor = "red";
  //   background(fillColor);
  // } 
  // else if (keyIsDown(16) && keyIsDown(87)){
  //   fillColor = "white";
  //   background(fillColor);
  // } 
  // else if (keyIsDown(16) && keyIsDown(71)){
  //   fillColor = "green";
  //   background(fillColor);
  // } 
  // else if (keyIsDown(16) && keyIsDown(66)){
  //   fillColor = "blue";
  //   background(fillColor);
  // } 
  // else if (keyIsDown(16) && keyIsDown(89)){
  //   fillColor = "yellow";
  //   background(fillColor);
  // }
  // else if (keyIsDown(16) && keyIsDown(79)){
  //   fillColor = "orange";
  //   background(fillColor);
  // }
  // else if (keyIsDown(16) && keyIsDown(80)){
  //   song.play();
  // }
  // else if (keyIsDown(16) && keyIsDown(83)){
  //   song.stop();
  // }
}


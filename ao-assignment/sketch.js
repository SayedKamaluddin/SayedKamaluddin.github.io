// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let speed;
let mc;
let laneSize = 100;
let numOfLane = 2;
let level = 2;
let lanes = [];
let theX, startLane;
let charX, charY;
let charSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startLane = width/2-numOfLane/2*laneSize;
  theX = startLane;
  charX = startLane-70;
  charY = height/2;
  stroke(255,255,255,80);
  for (let i = 0; i < numOfLane; i++){
    lanes.push(spownLane(theX));
    theX += laneSize;
  }
}

function draw() {
  background('green');
  drawingLanes();
  character();
  // moveCharacter();
  startingText();
}

function startingText(){
  fill(0);
  textSize(35);
  text('Just Cross the Road',width/2-150,50);
  textSize(25);
  text('Use W,S,D,A to move',width/2-130,80);
}

function drawingLanes(){
  fill(56, 175, 205);
  for (let lane of lanes){
    rect(lane.x,lane.y,lane.w,lane.h);
  }
}

function spownLane(rectX){
  let theLane = {
    x: rectX,
    y: 0,
    w: laneSize,
    h: height,
  };
  return theLane;
}

function character(){
  fill('red');
  rect( charX, charY, charSize);
}

// function moveCharacter(){
//   if (keyIsDown(87)){
//     charY-=laneSize;
//   }
//   else if (keyIsDown(83)){
//     charY+=laneSize;
//   }
//   else if (keyIsDown(68)){
//     charX+=laneSize;
//   }
//   else if (keyIsDown(65)){
//     charX-=laneSize;
//   }
// }

function keyPressed(){
  if (keyIsDown(87)){
    console.log("preesed");
    charY-=laneSize;
  }
  else if (keyIsDown(83)){
    charY+=laneSize;
  }
  else if (keyIsDown(68)){
    charX+=laneSize;
  }
  else if (keyIsDown(65)){
    charX-=laneSize;
  }
}

function spownBlocks(){
  let theLane = {
    x: 0,
    y: 0,
    w: laneSize/20,
    h: 100,
  };
  return theLane;
}
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let speed;
let mc;
let laneSize = 100;
let numOfLane = 3;
let level = 1;
let lanes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i >= numOfLane; i++){
    lanes.push(spownLane(width/2-numOfLane/2*laneSize));
  }
}

function draw() {
  background('green');
  fill(56, 175, 205);
  for (let lane of lanes){
    rect(lane.x,lane.y,lane.w,lane.h);
  }
}

function spownLane(x){
  let theLane = {
    x: x,
    y: 0,
    w: laneSize,
    h: height,
  };
  return theLane;
}


// function spownLane(){
//   let theLane = {
//     x:,
//     y:,
//     w:,
//     h:,
//   }
// }
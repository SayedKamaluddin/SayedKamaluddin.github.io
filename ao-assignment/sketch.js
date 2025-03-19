// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let avgSpeed = 1;
let laneSize = 100;
let level = 1;
let numOfLane = 3;
let lanes = [];
let blocks = [];
let theX, startLane;
let charX, charY;
let blockY;
let charSize = 50;
let blockDirections=1;
let onBlock = true;
let dis;
let levelDone = false;
let levelFailed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255,255,255,80);
  setupBlocksNLanes();
}

function draw() {
  background('green');
  drawingLanes();
  drawingBlocks();
  character();
  startingText();
  stayOnBlock();
  if ( charX > width-startLane){
    won();
  }
}

function startingText(){
  myText(35, 'Just Cross the River', width/2-150,50);
  myText(25, 'Use W,S,D,A to move',width/2-130,80);
}

function drawingLanes(){
  fill(56, 175, 205);
  for (let lane of lanes){
    rect(lane.x,lane.y,lane.w,lane.h);
  }
}

function drawingBlocks(){
  fill(164, 84, 48);
  for (let block of blocks){
    rect(block.x,block.y,block.w,block.h);
    block.y += block.speed;
    if (block.y > height+block.h){
      block.y = -block.h;
    }
    else if (block.y < -400){
      block.y = block.h+height;
    } 
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
  circle( charX, charY, charSize);
}

function keyPressed(){
  if (keyIsDown(87) && charY > 80){
    charY-=laneSize/2;
    onBlock = true;
  }
  else if (keyIsDown(83) && charY < height-100){
    charY+=laneSize/2;
    onBlock = true;
  }
  else if (keyIsDown(68)){
    charX+=laneSize;
    onBlock = true;
  }
  else if (keyIsDown(65) && charX > 100){
    charX-=laneSize;
    onBlock = true;
  }
}

function stayOnBlock(){
  for(let block of blocks){
    if(charX>block.x && charX<block.x+block.w && charY>block.y && charY<block.y+block.h){
      if(onBlock){
        dis = charY-block.y;
        onBlock=false;
      }
      charY = block.y+dis; 
    }
    else if (charX>block.x && charX<block.x+block.w){
      lost();
    }
  }
}

function spownBlocks(blockX, blockY, directions){
  let theBlock = {
    x: blockX+10,
    y: -blockY,
    w: laneSize-20,
    h: random(80,400),
    speed: random(avgSpeed, avgSpeed+2)*directions,
  };
  return theBlock;
}

function testIfGameIsFinished(){
  let finishLevel = width-100/laneSize;
  if (level===finishLevel){
    noLoop();
  }
}

function won(){
  level++;
  numOfLane = 3+level-1;
  myText(35, "Nice, DoubleClick to Start the new Level", width/2-25, height/2);
  levelDone = true;
  noLoop();
}

function setupBlocksNLanes(){
  blocks = [];
  lanes = [];
  startLane = width/2-numOfLane/2*laneSize;
  theX = startLane;
  charX = startLane-charSize;
  charY = height/2;
  for (let i = 0; i < numOfLane; i++){
    if(i%2 === 0){
      blockY = random(300);
      blockDirections = 1;
    }
    else{
      blockY = height + random(300);
      blockDirections = -1;
    }
    lanes.push(spownLane(theX));
    blocks.push(spownBlocks(theX, blockY, blockDirections));
    theX += laneSize;
  }
}

function startNewLevel(){
  if (levelDone){
    setupBlocksNLanes();
    loop();
  }
}

function lost(){
  noLoop();
  level = 0;
  myText(35, "You Lose, DoubleClick to try again", width/2-300, height/2);
  levelFailed = true;
}

function restart(){
  if (levelFailed){
    levelFailed = false;
    charX = startLane-charSize;
    charY = height/2;
    loop();
  }
}

function doubleClicked(){
  startNewLevel();
  restart();
}

function myText(size, sentence, x, y){
  textSize(size);
  fill(0);
  text(sentence, x-3, y-3);
  fill("yellow");
  text(sentence, x, y);
}
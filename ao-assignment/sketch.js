// Cross the River
// kamaluddin Hashimy
// March 20, 2025
//
// Extra for Experts:
// Moving, Wining, and Losing each has diffrent sound effects

// Defining all the varibles and seting the values
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
let jumpingSound, losingSound, winingSound; 

//preloads all the images from the directory
function preload(){
  jumpingSound = loadSound("../jump.mp3");
  losingSound = loadSound("../losing.mp3");
  winingSound = loadSound("../wining.mp3");
}

// setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255,255,255,80);
  setupBlocksNLanes();
}

// draw function
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

// draws the movement text and level
function startingText(){
  myText(35, 'Just Cross the River', width/2,50);
  myText(25, 'Use W,S,D,A to move',width/2,80);
  myText(25, `Level: ${level}`, 100, 50);
}

// draws the lanes from the lanes array
function drawingLanes(){
  fill(56, 175, 205);
  for (let lane of lanes){
    rect(lane.x,lane.y,lane.w,lane.h);
  }
}

// draws all the blocks on the lanes from the blocks array and make them move
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

// when called creates an object with the correct values to draw a lane
function spownLane(rectX){
  let theLane = {
    x: rectX,
    y: 0,
    w: laneSize,
    h: height,
  };
  return theLane;
}

// draws the charachter
function character(){
  fill('red');
  circle( charX, charY, charSize);
}

// checks the keys that are pressed and moves the character accordingly 
function keyPressed(){
  if (keyIsDown(87) && charY > 80){
    charY-=laneSize/2;
    onBlock = true;
    jumpingSound.play();
  }
  else if (keyIsDown(83) && charY < height-100){
    charY+=laneSize/2;
    onBlock = true;
    jumpingSound.play();
  }
  else if (keyIsDown(68)){
    charX+=laneSize;
    onBlock = true;
    jumpingSound.play();
  }
  else if (keyIsDown(65) && charX > 100){
    charX-=laneSize;
    onBlock = true;
    jumpingSound.play();
  }
}

// makes the character move with the blocks when they're on it and prevents them from falling off also checks if they lost or not
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

// when called creates an object with the correct values to draw a block
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

// stops the game when we run out of space in the screen
function testIfGameIsFinished(){
  let finishLevel = width-100/laneSize;
  if (level===finishLevel){
    noLoop();
  }
}

// checks the characters location and if has crossed the road stops the game and raises level
function won(){
  level++;
  avgSpeed += 0.5;
  numOfLane = 3+level-1;
  myText(35, "Nice, DoubleClick to Start the new Level", width/2, height/2);
  levelDone = true;
  winingSound.play();
  noLoop();
}

// sets up everything when is called and draws the lanes and blocks again after each lever
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

// sets up everything necessary for the new level and resumes the game when called
function startNewLevel(){
  if (levelDone){
    setupBlocksNLanes();
    loop();
  }
}

// stops the game when is called 
function lost(){
  noLoop();
  losingSound.play();
  myText(35, "You Lose, DoubleClick to try again", width/2, height/2);
  levelFailed = true;
}

// moves the character to the original postion and resuems the game when called
function restart(){
  if (levelFailed){
    levelFailed = false;
    charX = startLane-charSize;
    charY = height/2;
    loop();
  }
}

// calls the the functions after double clicking
function doubleClicked(){
  startNewLevel();
  restart();
}

// an easier way to write texts in the screen
function myText(size, sentence, x, y){
  textSize(size);
  w = textWidth(sentence)/2;
  fill(113,12,4);
  text(sentence, x-w-3, y-3);
  fill(59,231,236);
  text(sentence, x-w-1, y);
  fill(255);
  text(sentence, x-w, y);
}
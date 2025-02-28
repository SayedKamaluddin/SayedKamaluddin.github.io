// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let timmer;
let size = 30;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  x = mouseX;
  y = mouseY;
  noStroke();

}

function draw() {
  // background(0);
  mouseFollower();
  // console.log("hello");
  // sleep(1000);
  // console.log("bye");
}

function mouseFollower(){
  if (x !== mouseX || y !== mouseY){
    circle(mouseX, mouseY, 50);
    fill(random(255), random(255), random(255), 50);
    x = mouseX;
    y = mouseY;
  }
}

// function resetBackground(){
//   for(let i = 0; i < 10; i++){

//   }
//   background(10,10,10,);
// }

function keyPressed(){
  let newSize = size;
  let oldSize;
  let randx = random(windowWidth);
  let randy = random(windowHeight);
  // let randR = random(255);
  // let randG = random(255);
  // let randB = random(255);
  let i = 0;
  if(i < 5){
    // randR-=10;
    // randB-=10;
    // randG-=10;
    // fill(randR, randG, randB);
    oldSize = newSize;
    newSize += 10;
    fill(random(255), random(255), random(255), 50);
    sleep(1000);
    circle(100, 100, newSize);
    i++;
    // fill(0,0,0, 50);
    // circle(randx, randy, oldSize);
  }
}




function sleep(milliseconds) {
  const startTime = millis();
  while (true) {
    // console.log(millis(), startTime, startTime+milliseconds);
    if (millis() > startTime + milliseconds){
      break;
    }
  }
}
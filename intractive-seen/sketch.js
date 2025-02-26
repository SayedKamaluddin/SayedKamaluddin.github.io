// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let timmer;
let size = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  x = mouseX;
  y = mouseY;
  noStroke();

}

function draw() {
  mouseFollower();
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
  let randx = random(windowWidth);
  let randy = random(windowHeight);
  let randR = random(255);
  let randG = random(255);
  let randB = random(255);
  for(let i = 0; i < 10; i++){
    randR-=10;
    randB-=10;
    randG-=10;
    fill(randR, randG, randB);
    circle(randx, randy, newSize);
    newSize += 10;
  }
}

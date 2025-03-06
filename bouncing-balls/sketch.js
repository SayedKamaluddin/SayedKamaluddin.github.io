// Bouncing Ball Object Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spownBall();
}

function draw() {
  background(225);
  for(let ball of ballArray){
    moveball(ball);
    displayball(ball);
  }
}

function mousePressed(){
  fill(random(255),random(255),random(255));
  spownBall();
}

function moveball(ball){
  //move ball
  ball.x += ball.dx;
  ball.y += ball.dy;
  console.log(ball);

  // telleport around edge of the screen
  if(ball.x-ball.radius >width){
    ball.x = -ball.radius;
  }
  else if(ball.x+ball.radius < 0){
    ball.x = width + ball.radius;
  }
  if(ball.y-ball.radius>height){
    ball.y = -ball.radius;
  }
  else if(ball.y+ball.radius < 0){
    ball.y = height+ball.radius;
  }
}

function displayball(ball){
  //draw the ciecle
  circle(ball.x, ball.y, ball.radius*2);
}


function spownBall(){
  let someball = {
    x : random(width),
    y : random(height),
    radius : random(15, 40),
    dx : random(-5 ,5),
    dy : random(-5 ,5),
  };
  ballArray.push(someball);
}
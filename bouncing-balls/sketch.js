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
  background(220);
  for(ball of ballArray){
    //
    ball.x += ball.dx;
    ball.y += ball.dy;
    console.log(ball);

    // if(ball.x >width){
    //   ball.x -= width;
    // }
    // else if(ball.x < 0){
    //   ball.x += width;
    // }


    fill("red");
    circle(ball.x, ball.y, ball.radius*2);
  }
}

function mousePressed(){
  spownBall();
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
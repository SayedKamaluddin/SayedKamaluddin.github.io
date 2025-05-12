// 2D collide Library demo

function setup() {
  createCanvas(400, 400);
  collideDebug(true);
}

let hit = false;

function draw() {
  background(255);
  line(200, 300, 100, 150);
  circle(mouseX, mouseY, 50);

  hit = collideLineCircle(200, 300, 100, 150, mouseX, mouseY, 50);


  if(hit){
    stroke('red');
  }
  else {
    stroke('black');
  }
  stroke(hit ? color('red') : 0);
  print('colliding?', hit);
}
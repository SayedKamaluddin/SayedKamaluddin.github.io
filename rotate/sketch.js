// Translate Rotate


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push(); //save the transformation matix
  translate(width/2, height/2);
  rotate(millis()/10);
  fill('red');
  rect(0, 0, 200, 75);


  pop();
  fill('green');
  rect(0, 0, height/2, 200);

}

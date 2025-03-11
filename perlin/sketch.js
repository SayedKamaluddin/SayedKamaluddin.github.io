// Perlin noise demo
// moving a circle

let x;
let y;
let timex = 0;
let timey = 0;
let deltaTime = 0.0041;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(220);

  fill(0);
  x = noise(timex)*width;
  y = noise(timey)*height;
  circle(x, y, 5);

  timex += deltaTime;
  timey += deltaTime-0.001;
}

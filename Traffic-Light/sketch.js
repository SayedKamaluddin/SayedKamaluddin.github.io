// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

// let state;
// let knowTime;


// function setup() {
//   createCanvas(600, 600);
//   knowTime = millis();
// }

// function draw() {
//   background(255);
//   drawOutlineOfLights();
  
// }

// function drawOutlineOfLights() {
//   //box
//   rectMode(CENTER);
//   fill(0);
//   rect(width/2, height/2, 75, 200, 10);
//   changeColor();
//   //lights
//   if (state === "red"){
//     fill("red");
//   }
//   else{
//     fill(255);
//   }
//   ellipse(width/2, height/2 - 65, 50, 50); //top
//   if (state === "yellow"){
//     fill("yello");
//   }
//   else{
//     fill(255);
//   }
//   ellipse(width/2, height/2, 50, 50); //middle
//   if (state === "green"){
//     fill("green");
//   }
//   else{
//     fill(255);
//   }
//   ellipse(width/2, height/2 + 65, 50, 50); //bottom
// }

// function changeColor(){
//   if (millis() > knowTime + 5000){
//     state = "yellow";
//   }
//   else if (millis() > knowTime + 7000){
//     state = "green";
//     knowTime = millis();
//   }
//   else {
//     state = "red";
//   }
//   console.log(knowTime);
// }

















// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let lightState = "green";
let lastSwitcheTime = 0;
const GREEN_LIGHT_DURATION = 2000;
const YELLOW_LIGHT_DURATION = 1000;
const RED_LIGHT_DURATION = 2000;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  displayCorrectLight();
  changeStateIfNeeded();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}


function displayCorrectLight(){
  if (lightState === "green"){
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else if (lightState === "yellow"){
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }
  else if (lightState === "red"){
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
}

function changeStateIfNeeded(){
  if (lightState === "green" && millis() > lastSwitcheTime + GREEN_LIGHT_DURATION){
    lightState = "yellow";
    lastSwitcheTime = millis();
  } 
  else if (lightState === "yellow" && millis() > lastSwitcheTime + YELLOW_LIGHT_DURATION){
    lightState = "red";
    lastSwitcheTime = millis();
  } 
  else if (lightState === "red" && millis() > lastSwitcheTime + RED_LIGHT_DURATION){
    lightState = "green";
    lastSwitcheTime = millis();
  } 
}

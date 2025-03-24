// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const CELLSIZE = 50;
let rows;
let cols;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows  = width/CELLSIZE;
  cols  = height/CELLSIZE;
  genarateRandomGrid();
}

function draw() {
  background(220);
  // drawSquores();
}

function drawSquores(){
  for (){}
}

function genarateRandomGrid(){
  let newGrid = [];
  for(let x; x<=rows; x++){
    newGrid.push([]);
    for(let y; y<=rows; y++){
      if(random(100)>50){
        fill();
        newGrid[x].push([]);
      }
      
    } 
  }
}
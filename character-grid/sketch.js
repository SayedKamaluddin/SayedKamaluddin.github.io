// 2D Array Rectangle Grid Demo
// Pick a cell size, then fill the screen with as many as possible.
// This will likely be rectangular instead of square...

const CELL_SIZE = 50;
let grid;
let rows;
let cols;
const OPEN_TILE = 0;
const IMPASSIBLE = 1;
const PLAYER = 9;
let thePlayer = {
  x:0,
  y:0,
};
let grassImg;
let rockImg;
let characterImg;


function preload(){
  rockImg = loadImage('rock.png');
  grassImg = loadImage('grass.png');
  characterImg = loadImage('character.png');
}

function setup() {
  createCanvas(700, 700);
  cols = Math.ceil(width/CELL_SIZE);
  rows = Math.ceil(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);


  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed(){
  if(key === 'w'){
    movePlayer(thePlayer.x, thePlayer.y-1);
  }
  else if(key === 's'){
    movePlayer(thePlayer.x, thePlayer.y+1);
  }
  else if(key === 'a'){
    movePlayer(thePlayer.x-1, thePlayer.y);
  }
  else if(key === 'd'){
    movePlayer(thePlayer.x+1, thePlayer.y);
  }
}

function movePlayer(x,y){
  if(x >= 0 && x< cols && y >= 0 && y < rows && grid [y][x] === OPEN_TILE){
    
    //previos player location 
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
    
    //reset the old spot to be open
    grid[oldY][oldX] = OPEN_TILE;
    
    // keep track of where the player is 
    thePlayer.x = x;
    thePlayer.y = y;
    
    
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }

}

function mousePressed(){
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);
  
  toggleCell(x,y);
  
  // toggleCell(x-1,y);
  // toggleCell(x+1,y);
  // toggleCell(x,y-1);
  // toggleCell(x,y+1);
}

function toggleCell(x,y){
  // make sure cell you're toggling is actually in the grid
  if (x>=0 && x < cols && y>=0 && y < rows){
    if (grid[y][x]===OPEN_TILE){
      grid[y][x]=IMPASSIBLE;
    }
    else if (grid[y][x]===IMPASSIBLE){
      grid[y][x]=OPEN_TILE;
    }

  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === OPEN_TILE) {
        // fill("white");
        image(grassImg,x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      else if (grid[y][x] === IMPASSIBLE) {
        // fill("black");
        image(rockImg,x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      else if (grid[y][x] === PLAYER) {
        // fill("red");
        image(characterImg,x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
        square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      
    
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //toss a 0 or 1 in randomly
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}

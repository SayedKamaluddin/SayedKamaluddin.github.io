// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const CELL_SIZE = 700/23;
const OPEN_TILE = 0;
const ALIVE_ENEMY = 1;
const DEAD_ENEMY = 2;
const PLAYER = 9;
let grid;
let rows;
let cols;
let level=1;
let thePlayer = {
  x:0,
  y:0,
};


function setup() {
  createCanvas(700, 700);
  cols = Math.ceil(width/CELL_SIZE);
  rows = Math.ceil(height/CELL_SIZE);
  grid = generateGrid(cols, rows);

  genarateEnemies();
  thePlayer.x = round(rows/2);
  thePlayer.y = round(cols/2);
  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function draw() {
  background(220);
  displayGrid();
}

function generateGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function genarateEnemies(){
  for(let i=0; i<3+level; i++){
    let random_rows=[round(random(rows))];
    let random_cols=[round(random(cols))];
    grid[random_rows][random_cols] = ALIVE_ENEMY;
    console.log([random_rows, random_cols]);
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === OPEN_TILE) {
        fill("white");
      }
      else if (grid[y][x] === ALIVE_ENEMY) {
        fill("black");
      }
      else if (grid[y][x] === PLAYER) {
        fill("red");
      }
      
      // console.log(grid);
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function keyPressed(){
  if(key === '8'){
    movePlayer(thePlayer.x, thePlayer.y-1);
  }
  else if(key === '2'){
    movePlayer(thePlayer.x, thePlayer.y+1);
  }
  else if(key === '4'){
    movePlayer(thePlayer.x-1, thePlayer.y);
  }
  else if(key === '6'){
    movePlayer(thePlayer.x+1, thePlayer.y);
  }
  else if(key === '7'){
    movePlayer(thePlayer.x-1, thePlayer.y-1);
  }
  else if(key === '9'){
    movePlayer(thePlayer.x+1, thePlayer.y-1);
  }
  else if(key === '1'){
    movePlayer(thePlayer.x-1, thePlayer.y+1);
  }
  else if(key === '3'){
    movePlayer(thePlayer.x+1, thePlayer.y+1);
  }
  else if(key === '5'){
    movePlayer(thePlayer.x, thePlayer.y);
  }
}

function movePlayer(x,y){
  if(x >= 0 && x< cols && y >= 0 && y < rows && grid [y][x] === OPEN_TILE){
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
    grid[oldY][oldX] = OPEN_TILE;
    thePlayer.x = x;
    thePlayer.y = y;
    grid[thePlayer.y][thePlayer.x] = PLAYER;
    moveEnemies();
  }
}

function moveEnemies(){
  let new_positions = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === ALIVE_ENEMY) {
        let newX = x;
        let newY = y;
        grid[y][x] = OPEN_TILE;
        if (x<thePlayer.x) {
          newX++;
        }
        if (x>thePlayer.x) {
          newX--;
        }
        if (y<thePlayer.y) {
          newY++;
        }
        if (y>thePlayer.y) {
          newY--;
        }

        new_positions.push([newX,newY]);
      }
    }
  } 
  for(let i of new_positions){
    grid[i[1]][i[0]] = ALIVE_ENEMY;
  }
}
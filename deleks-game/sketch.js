// 2D Array Rectangle Grid Demo
// Pick a cell size, then fill the screen with as many as possible.
// This will likely be rectangular instead of square...

const CELL_SIZE = 25;
let level=1;
let grid;
let rows;
let cols;
const OPEN_TILE = 0;
const ALIVE_ENEMY = 1;
const DEAD_ENEMY = 2;
const PLAYER = 9;
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
  thePlayer.x = rows/2;
  thePlayer.y = cols/2;
  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function draw() {
  background(220);
  displayGrid();
}

function genarateEnemies(){
  for(let i=0; i<3+level; i++){
    grid[round(random(rows))][round(random(cols))] = ALIVE_ENEMY;
    // console.log('done');
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
    
    //previos player location 
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
    
    //reset the old spot to be open
    grid[oldY][oldX] = OPEN_TILE;
    
    // keep track of where the player is 
    thePlayer.x = x;
    thePlayer.y = y;
    
    
    grid[thePlayer.y][thePlayer.x] = PLAYER;
    moveEnemies();
  }
}

function moveEnemies(){

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === ALIVE_ENEMY) {
        let newX = x;
        let newY = y;

        grid[y][x] = OPEN_TILE;
        
        if (x<thePlayer.x) {
          newX = newX+1;
          // newX += 1;
          // newX++;
        }
        if (x>thePlayer.x) {
          newX = newX-1;
          // newX -= 1;
          // newX--;
        }
        if (y<thePlayer.y) {
          newY = newY+1;
          // newY += 1;
          // newY++;
        }
        if (y>thePlayer.y) {
          newY = newY-1;
          // newY -= 1;
          // newY--;
        }
        
        grid[newY][newX] = ALIVE_ENEMY;        
      }
    }
  } 
}

function toggleCell(x,y){
  // make sure cell you're toggling is actually in the grid
  if (x>=0 && x < cols && y>=0 && y < rows){
    if (grid[y][x]===OPEN_TILE){
      grid[y][x]=DEAD_ENEMY;
    }
    else if (grid[y][x]===DEAD_ENEMY){
      grid[y][x]=OPEN_TILE;
    }

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

// function displayGrid() {
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       if (grid[y][x] === OPEN_TILE) {
//         fill("white");
//       }
//       else if (grid[y][x] === DEAD_ENEMY) {
//         fill("black");
//       }
//       else if (grid[y][x] === PLAYER) {
//         fill("red");
//       }
      
      
//       square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
//     }
//   }
// }

function generateGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //toss a 0 or 1 in randomly
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

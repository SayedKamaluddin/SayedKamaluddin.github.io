// Array-Assinment Deleks Game Remake
// Kamaluddin
// April 10, 2025
//
// Extra for Experts:
// Gets some elements of from Javascript and prints in HTML file in real time


const CELL_SIZE = 700/23;
const OPEN_TILE = 0;
const ALIVE_ENEMY = 1;
const DEAD_ENEMY = 2;
const PLAYER = 9;
let grid;
let rows;
let cols;
let level=1;
let countAliveEnemies = 5;
let thePlayer = {
  x:0,
  y:0,
};


function startup(){
  genarateEnemies();
  thePlayer.x = floor(rows/2);
  thePlayer.y = floor(cols/2);
  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function setup() {
  createCanvas(700, 700);
  cols = Math.ceil(width/CELL_SIZE);
  rows = Math.ceil(height/CELL_SIZE);
  grid = generateGrid(cols, rows);
  startup();
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
  for(let i=0; i<5*level; i++){
    let random_rows=[floor(random(rows))];
    let random_cols=[floor(random(cols))];
    grid[random_rows][random_cols] = ALIVE_ENEMY;
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
      else if (grid[y][x] === DEAD_ENEMY) {
        fill("brown");
      }
      else if (grid[y][x] === PLAYER) {
        fill("red");
      }
      
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
  else if(key === 't'){
    teleportPlayer();
  }
  else if(key === 'b'){
    explodePlayer();
  }

  writeInsideHTML();
}

function teleportPlayer(){
  let newX = floor(random(cols));
  let newY = floor(random(rows));
  if (grid[newY][newX] === OPEN_TILE){
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
    grid[oldY][oldX] = OPEN_TILE;
    thePlayer.x = newX;
    thePlayer.y = newY;
    grid[thePlayer.y][thePlayer.x] = PLAYER;
    moveEnemies();
  }
}

function explodePlayer(){
  let pX = thePlayer.x;
  let pY = thePlayer.y;
  for (let i = -1; i<=1;i++){
    for (let j = -1; j<=1; j++){
      if (pY+i >= 0 && pY+i <= cols && pX+j >= 0 && pX+j <= rows && grid[pY+i][pX+j] === ALIVE_ENEMY){
        grid[pY+i][pX+j] = DEAD_ENEMY;
      }
    }
  }
  moveEnemies();
}

function movePlayer(x,y){
  if(x >= 0 && x< cols && y >= 0 && y < rows && grid [y][x] !== DEAD_ENEMY){
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
  let newPositions = [];
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
        
        newPositions.push([newX,newY]);
      }
    }
  }
  countAliveEnemies = 0;
  for(let enemyPosition of newPositions){
    if (grid[enemyPosition[1]][enemyPosition[0]] === OPEN_TILE){
      grid[enemyPosition[1]][enemyPosition[0]] = ALIVE_ENEMY;
      countAliveEnemies++;
    }
    else if (grid[enemyPosition[1]][enemyPosition[0]] === ALIVE_ENEMY || grid[enemyPosition[1]][enemyPosition[0]] === DEAD_ENEMY){
      grid[enemyPosition[1]][enemyPosition[0]] = DEAD_ENEMY;
    }
    else if (grid[enemyPosition[1]][enemyPosition[0]] === PLAYER){
      grid[enemyPosition[1]][enemyPosition[0]] = DEAD_ENEMY;
    }
  }
}

function nextLevel(){
  if (countAliveEnemies === 0){
    startup();
    print('worked');
  }
}

function writeInsideHTML(){
  document.getElementById("Level").innerHTML = 'Level: ' + level;
  document.getElementById("AliveEnemies").innerHTML = 'Alive Enemies ' + countAliveEnemies;
}
// Game of life Demo

const CELL_SIZE = 50;
const RANDER_ON_FRAME = 5;
let grid;
let rows;
let cols;
let autoPlay = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.ceil(width/CELL_SIZE);
  rows = Math.ceil(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
  // if (autoPlay && frameCount % RANDER_ON_FRAME === 5){
  grid = updateGrid();
  // }
  displayGrid();
}

function keyPressed(){
  if (key === 'e'){
    grid = generateEmptyGrid(cols, rows);
  }
  else if (key === 'r'){
    grid = generateRandomGrid(cols, rows);
  }
  else if (key === 'a'){
    autoPlay = !autoPlay;
  }
  else if (key === ' '){
    grid = updateGrid();
  }
}

function mousePressed(){
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);
  
  toggleCell(x,y);
}

function toggleCell(x,y){
  if (grid[y][x]===0){
    grid[y][x]=1;
  }
  else if (grid[y][x]===1){
    grid[y][x]=0;
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        stroke(0);
        fill("white");
      }
      else if (grid[y][x] === 1) {
        stroke(255);
        fill("black");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function updateGrid(){
  //make a new array to hold the new turned values
  let nextTurn = generateEmptyGrid(cols,rows);

  // look at every cell
  for(let y; y < rows; y++){
    for(let x; x < cols; x++){
      let neighbour = 0;

      //look at every neighbour
      for(let i=-1; i <=1; i++){
        for(let j=-1; j <=1; j++){
          //dont fall of the edge of the grid
          if (x+j >= 0 && x+j < cols && y+j >= 0 && y+j < rows){
            neighbour += grid[y+1][x+1];
          }
        }
      }

      //don't count self as neighbour
      neighbour -= grid[y][x];

      //apply the rules
      if (grid[y][x] === 1) {  //currently alive
        if (neighbour === 2 || neighbour === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }

      if (grid[y][x] === 0) {  //currently dead
        if (neighbour === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  return nextTurn;
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

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}
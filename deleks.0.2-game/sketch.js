// Array-Assinment Deleks Game Remake
// Kamaluddin
// April 10, 2025
//
// Extra for Experts:
// Gets some elements of from Javascript and prints in HTML file also used setTimeout to show the messages and I learned more about Javascript and how to use it with p5.js

// defining all the nessary variables
const CELL_SIZE = 700/23;
const OPEN_TILE = 0;
const ALIVE_ENEMY = 1;
const DEAD_ENEMY = 2;
const PLAYER = 9;
const ENEMY_NUMBERS = 7;
let grid;
let rows;
let cols;
let level=1;
let countAliveEnemies = ENEMY_NUMBERS;
let numberOfTeleports = 2;
let numberOfBombs = 2;
let beginningMessage;
//keep track of the player position
let thePlayer = {
  x:0,
  y:0,
};

// seting the grid player and enemies that will change for each level
function startup(){
  genarateEnemies();
  thePlayer.x = floor(rows/2);
  thePlayer.y = floor(cols/2);
  grid[thePlayer.y][thePlayer.x] = PLAYER;
  numberOfTeleports = 2;
  numberOfBombs = 2;
}

// setup function that will run once at the start of the game everything will be called after the opening messages are done so this is very empty right now
function setup() {
  openingMessage();
}

// function to show the message in the HTML file and hide it after a delay time
function showMessage(message, delayTime, afterTheMessage) {
  const messageDiv = document.getElementById("message-overlay");
  messageDiv.innerText = message;
  messageDiv.style.display = "flex";

  setTimeout(() => {
    messageDiv.style.display = "none";
    if (afterTheMessage) afterTheMessage();
  }, delayTime);
}

// function to show the opening message at the start of the game to let the player know how to play
function openingMessage() {
  const information = document.getElementById("information");
  information.style.display = "none";
  showMessage("Welcome to Deleks Reborn!", 2000, () => {
    showMessage("The goal of the game is to kill all the enemies by making them either crash into each other or to their dead bodies.", 5000, () => {
      showMessage("You can move the player using the numpad keys.", 3000, () => {
        showMessage("You can teleport using 'T' and explode to kill the enemies around you using 'B'.", 3000, () => {
          showMessage("Keep in mind that you have limited number of them so use them wisely.", 3000, () => {
            showMessage("But don't worry, you can get more by killing enemies. it will also resets after each Level", 3000, () => {
              showMessage("Have fun!", 1000, () => {
                startGame();
                information.style.display = "block";
              }); // End with starting the game
            });
          });
        });
      });
    });
  });
}

// setup function that will run once at the start of the game after the opening messages are done
function startGame() {
  createCanvas(700, 700);
  cols = Math.ceil(width/CELL_SIZE);
  rows = Math.ceil(height/CELL_SIZE);
  grid = generateGrid(cols, rows);
  startup();
}

// draw function that will run every frame 
function draw() {
  displayGrid();
  callWinIfAllEnemiesDead();
}

// function to generate the grid with the given number of cols and rows
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

// function to generate the enemies in the grid in random positions
// the number of enemies is based on the level and the number of alive enemies
function genarateEnemies(){
  for(let i=0; i<countAliveEnemies*level; i++){
    let random_rows=floor(random(rows));
    let random_cols=floor(random(cols));
    while (grid[random_rows][random_cols] !== OPEN_TILE){
      random_rows=floor(random(rows));
      random_cols=floor(random(cols));
    }
    grid[random_rows][random_cols] = ALIVE_ENEMY;
  }
}

// function to display the grid and the player and enemies in the grid
function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === OPEN_TILE) {
        fill(3*4,25*4,25*4);
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

// function to check what key is being pressed and move the player and enemies accordingly
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
  //changes the values in the HTML file every time the a key is pressed
  writeInsideHTML();
}

// function to teleport the player to a random position in the grid
function teleportPlayer(){
  moveEnemies();
  if (numberOfTeleports > 0){
    let newX = floor(random(cols));
    let newY = floor(random(rows));
    //making sure the new position is not an enemy or the player
    let goodposition = false;
    while (!goodposition){
      for (let i = -1; i<=1;i++){
        for (let j = -1; j<=1; j++){
          if (newY+i >= 0 && newY+i <= cols && newX+j >= 0 && newX+j <= rows && grid[newY+i][newX+j] === ALIVE_ENEMY){
            newX = floor(random(cols));
            newY = floor(random(rows));
          }
          else{
            goodposition = true;
          }
        }
      }
    }
    if (grid[newY][newX] === OPEN_TILE){
      let oldX = thePlayer.x;
      let oldY = thePlayer.y;
      grid[oldY][oldX] = OPEN_TILE;
      thePlayer.x = newX;
      thePlayer.y = newY;
      grid[thePlayer.y][thePlayer.x] = PLAYER;
      numberOfTeleports--;
    }
  }
}

// function to explode the player and kill all the enemies around the player
function explodePlayer(){
  if (numberOfBombs > 0){
    let pX = thePlayer.x;
    let pY = thePlayer.y;
    for (let i = -1; i<=1;i++){
      for (let j = -1; j<=1; j++){
        if (pY+i >= 0 && pY+i <= cols && pX+j >= 0 && pX+j <= rows && grid[pY+i][pX+j] === ALIVE_ENEMY){
          grid[pY+i][pX+j] = DEAD_ENEMY;
        }
      }
    }
    numberOfBombs--;
  }
  moveEnemies();
}

// function to move the player in the grid and check not to go out of the grid
function movePlayer(x,y){
  if(x >= 0 && x< cols && y >= 0 && y < rows){
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
    grid[oldY][oldX] = OPEN_TILE;
    thePlayer.x = x;
    thePlayer.y = y;
    grid[thePlayer.y][thePlayer.x] = PLAYER;
    moveEnemies();
  }
}

// function to get the new positions of the enemies based on the player position
function newEnemyPositions(){
  let positions = [];
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
        
        positions.push([newX,newY]);
      }
    }
  }
  return positions;
}

// function to place the enemies in the new positions and check if they should stay alive or die
function moveEnemies(){
  let newPositions = newEnemyPositions();
  
  for(let enemyPosition of newPositions){
    if (grid[enemyPosition[1]][enemyPosition[0]] === OPEN_TILE){
      grid[enemyPosition[1]][enemyPosition[0]] = ALIVE_ENEMY;
    }
    else if (grid[enemyPosition[1]][enemyPosition[0]] === ALIVE_ENEMY || grid[enemyPosition[1]][enemyPosition[0]] === DEAD_ENEMY){
      grid[enemyPosition[1]][enemyPosition[0]] = DEAD_ENEMY;
      randomChose = random(100);
      if (randomChose < 50){
        numberOfTeleports++;
      }
      else{
        numberOfBombs++;
      }
    }
    else if (grid[enemyPosition[1]][enemyPosition[0]] === PLAYER){
      showMessage("Better Luck Next Time", 2000, resetGame());
      break;
    }
  }
  countAliveEnemies = newPositions.length;
}

// function to check if all the enemies are dead and show the win message
function callWinIfAllEnemiesDead(){
  if (countAliveEnemies === 0) {
    showMessage("You Got To The Next Level", 2000, newLevel());

  }  
}

// function to start a new level and reset the grid and enemies
function newLevel(){
  grid = generateGrid(cols, rows);
  level++;
  countAliveEnemies = ENEMY_NUMBERS;
  startup();
}

// function to reset the game and start from the first level
function resetGame(){
  grid = generateGrid(cols, rows);
  level = 1;
  countAliveEnemies = ENEMY_NUMBERS;
  startup();
}

// function that is called in the HTML file to write the level and number of alive enemies in the HTML file
function writeInsideHTML(){
  document.getElementById("Level").innerHTML = 'Level: ' + level;
  document.getElementById("AliveEnemies").innerHTML = 'Alive Enemies: ' + countAliveEnemies;
  document.getElementById("Teleports").innerHTML = 'Teleports: ' + numberOfTeleports;
  document.getElementById("Bombs").innerHTML = 'Bombs: ' + numberOfBombs;
}
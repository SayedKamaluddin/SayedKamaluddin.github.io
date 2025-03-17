// Bubble Object Notations And Array Demo


let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for(let i=0; i<10; i++){
    spownBubble();
  }

  //spown a new bubble every half second
  window.setInterval(spownBubble, 500);
}

function draw() {
  background(220);
  for(let bubble of theBubbles){
    // mouseClicked();
    //randomize the movement
    bubble.dx= random(-5,5);
    bubble.dy= random(-5,5);    
    //move bubble
    bubble.x+=bubble.dx;
    bubble.y+=bubble.dy;

    //display bubble
    fill(bubble.r,bubble.g,bubble.b);
    circle(bubble.x,bubble.y,bubble.radius*2);
  }

}

function spownBubble(){
  let someBubble = {
    x: random(width),
    y: random(height),
    radius: random(40,80),
    r:random(255),
    g:random(255),
    b:random(255),
    dx: random(-5,5),
    dy: random(-5,5),
  };
  theBubbles.push(someBubble);
}

function mousePressed(){
  for(let i of theBubbles){
    if (dist(mouseX,mouseY,i.x,i.y)<i.radius){
      let index = theBubbles.indexOf(i);
      theBubbles.splice(index, 1);
    }
  }
}
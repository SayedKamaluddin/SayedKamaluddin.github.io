// Connect nodes OOP demo

let nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let somePoint = new MovingPoint(width/2, height/2);
  nodes.push(somePoint);
}

function draw() {
  background(5);

  for(let node of nodes){
    node.connectTo(nodes);
    node.display();
    node.update();
  }

  // for(let node of nodes){
  // }
}

function mousePressed(){
  for (let i = 0; i<5; i++){
    let somePoint = new MovingPoint(mouseX, mouseY);
    nodes.push(somePoint);
  }
}

class MovingPoint{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.speed = 15;
    this.radius = 15;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.color = color(random(255),random(255),random(255));
    this.reach = 100;
    this.maxRadius = 50;
    this.minRadius = 15;

  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x,this.y,this.radius*2);
  }

  update(){
    this.move();
    this.wrapAroundScreen();
    this.adjustSizeWithMouse();
  }

  adjustSizeWithMouse(){
    let mouseDist = dist(mouseX,mouseY,this.x,this.y);
    if (mouseDist < this.reach){
      let theSize = map(mouseDist, 0, this.reach, this.maxRadius, this.minRadius);
      this.radius = theSize;
    }
    else{
      this.radius = 15;
    }
  }

  connectTo(nodesArray){
    for (let otherNode of nodesArray){
      if (this!== otherNode){
        let distanceAway = dist(this.x,this.y, otherNode.x, otherNode.y);
        if(distanceAway < this.reach){
          stroke(this.color);
          line(this.x,this.y,otherNode.x,otherNode.y);
        }
      }
    }
  }

  move(){
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);

    dx = map(dx, 0, 1, -this.speed, this.speed);
    dy = map(dy, 0, 1, -this.speed, this.speed);

    this.x += dx;
    this.y += dy;

    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
  }

  wrapAroundScreen(){
    if (this.x<0){
      this.x += width;
    }
    if (this.x> width){
      this.x -= width;
    }
    if (this.y<0){
      this.y += height;
    }
    if (this.y> height){
      this.y -= height;
    }
  }
}
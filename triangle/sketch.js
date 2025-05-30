// seirpensci triangle demo
// 


let initialTriangle = [
  {x : 800, y : 50},
  {x : 300, y : 700},
  {x : 1300, y : 700},
];

let theDepth = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  siepinski(initialTriangle, theDepth);

}

function mousePressed(){
  theDepth++;
  background(220);
  siepinski(initialTriangle, theDepth);
}

function siepinski(points, depth){
  triangle(
    points[0].x, points[0].y,
    points[1].x, points[1].y,
    points[2].x, points[2].y
  );

  if(depth>0){
    //pattern  ---   drow new triangles
    siepinski([
      midPoint(points[0], points[1]),
      points[1],
      midPoint(points[1], points[2]),
    ], depth-1);

    siepinski([
      midPoint(points[0], points[1]),
      points[0],
      midPoint(points[0], points[2]),
    ], depth-1);

    siepinski([
      midPoint(points[1], points[2]),
      points[2],
      midPoint(points[0], points[2]),
    ], depth-1);
  }
}


function midPoint(point1, point2){
  let midX = (point1.x + point2.x) /2;
  let midy = (point1.y + point2.y) /2;

  return {x : midX, y : midy};
}
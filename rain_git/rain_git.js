var x=[70, 140, 210, 280, 350, 420, 490];
var y=[100, 200, 300, 400, 100, 100, 100];

var up, down, left, right;
function setup() {
  createCanvas(600, 480);
  strokeWeight(0.1);
  ellipseMode(CENTER);
}

function draw() {
  check();
  background(185, 212, 245);
  fill(183, 103, 103);
  quad(0, 320, 30, 320, 40, 250, 0, 250);
  rect(210, 270, 110, 50);
  quad(320, 290, 315, 240, 500, 240, 500, 290);
  quad(30, 290, 40, 240, 210, 240, 210, 290);
  fill(230, 232, 204);
  rect(500, 0, 100, 480);
  rect(320, 290, 180, 190);
  rect(0, 320, 320, 160);
  rect(30, 290, 180, 190);
  man();
}

function man() {
  for (var i=0; i<7; i++) {
    fill(230, 232, 204);
    ellipse(x[i], y[0], 20, 20);
    fill(0);
    rect(x[i]-10, y[0]-6, 20, 5);
    rect(x[i]-7, y[0]-10, 14, 4);
    rect(x[i]-6, y[0]+8, 12, 30);

    fill(230, 232, 204);
    ellipse(x[i]-35, y[1], 20, 20);
    fill(0);
    rect(x[i]-10-35, y[1]-6, 20, 5);
    rect(x[i]-7-35, y[1]-10, 14, 4);
    rect(x[i]-6-35, y[1]+8, 12, 30);

    fill(230, 232, 204);
    ellipse(x[i], y[2], 20, 20);
    fill(0);
    rect(x[i]-10, y[2]-6, 20, 5);
    rect(x[i]-7, y[2]-10, 14, 4);
    rect(x[i]-6, y[2]+8, 12, 30);

    fill(230, 232, 204);
    ellipse(x[i]-35, y[3], 20, 20);
    fill(0);
    rect(x[i]-10-35, y[3]-6, 20, 5);
    rect(x[i]-7-35, y[3]-10, 14, 4);
    rect(x[i]-6-35, y[3]+8, 12, 30);
  }
}

function check() {
  for (var i=0; i<7; i++) {
    if (x[i]>width) x[i]=0;
    if (x[i]<0) x[i]=width;
    if (y[i]>height) y[i]=0;
    if (y[i]<0) y[i]=height;
  }

  if (up===1) {
    for (var i=0; i<7; i++) {
      y[i] -=5;
    }
  }  
  if (down===1) {
    for (var i=0; i<7; i++) {
      y[i] +=5;
    }
  }  
  if (left===1) {
    for (var i=0; i<7; i++) {
      x[i] -=5;
    }
  }  
  if (right===1) {
    for (var i=0; i<7; i++) {
      x[i] +=5;
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    up =1;
  } 
  if (keyCode === DOWN_ARROW) {
    down =1;
  }
  if (keyCode === LEFT_ARROW) {
    left =1;
  }
  if (keyCode === RIGHT_ARROW) {
    right =1;
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    up =0;
  } 
  if (keyCode === DOWN_ARROW) {
    down =0;
  }
  if (keyCode === LEFT_ARROW) {
    left =0;
  }
  if (keyCode === RIGHT_ARROW) {
    right =0;
  }
}
var img;
var x, y;
var up, down, left, right;
function keyPressed() {
  if (keyCode === LEFT_ARROW) left=1;
  if (keyCode === RIGHT_ARROW) right=1;
  if (keyCode === UP_ARROW) up=1;
  if (keyCode === DOWN_ARROW) down=1;
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) left=0;
  if (keyCode === RIGHT_ARROW) right=0;
  if (keyCode === UP_ARROW) up=0;
  if (keyCode === DOWN_ARROW) down=0;
}

function check() {
  if (up===1) {
    y-=4;
  } 
  if (down===1) {
    y+=4;
  }
  if (left===1) {
    x-=4;
  }
  if (right===1) {
    x+=4;
  }
}


function preload() {
  img = loadImage('data/room.jpg');
}

function setup() {
  createCanvas(500, 400);
  image(img, 0, 0);
  loadPixels();
  x=0;
  y=0;
}

function draw() {
  check();
  background(255);
  for (var i=0; i<80; i++) {
    for (var j=0; j<100; j++) {
      fill(pixels[j*20+i*500*20]);
      ellipse(j*5+2, i*5+2, 5, 5);
    }
  }
  translate(x, y);
  table();
  resetMatrix();
  translate(-280, -120);
  translate(mouseX, mouseY);
  fillow();
  resetMatrix();
}
function fillow() {
  fill(198, 181, 102);
  beginShape();
  vertex(248.331, 113.003);
  vertex(261.665, 141.003);
  vertex(304.331, 135.67);
  vertex(284.331, 110.336);
  endShape(CLOSE);
}


function table() {
  fill(90, 47, 30);
  stroke(60, 36, 21);
  rect(91.662, 181.372, 11.333, 58);
  fill(183, 100, 43);
  noStroke();
  beginShape();
  vertex(-193.668, 497.002);
  endShape();
  fill(90, 47, 30);
  stroke(60, 36, 21);
  rect(73.578, 171.539, 6.667, 44.667);
  rect(148.87, 177.038, 12.667, 52.665);
  rect(133.662, 179.33, 4.667, 33.334);
  beginShape();
  vertex(94.375, 161.75);
  vertex(94.375, 183.125);
  vertex(159.5, 177.25);
  vertex(158.875, 158.375);
  endShape();
  beginShape();
  vertex(73.5, 171.5);
  vertex(94.375, 182.625);
  vertex(94.375, 162.125);
  vertex(72.875, 149);
  endShape();
  beginShape();
  vertex(61.453, 144.58);
  vertex(88.12, 164.58);
  vertex(172.12, 159.914);
  vertex(141.453, 140.58);
  endShape();
}
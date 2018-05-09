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
    y--;
  } 
  if (down===1) {
    y++;
  }
  if (left===1) {
    x--;
  }
  if (right===1) {
    x++;
  }
}

function setup() {
  createCanvas(500, 400);
  x=0;
  y=0;
}

function draw() {
  check();
  background(201, 170, 120);
  a();
  bed();
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

function a() {
  strokeWeight(2);
  fill(201, 170, 120);
  beginShape();
  vertex(0, 373.335);
  vertex(69.663, 194.002);
  vertex(343.662, 178.668);
  vertex(500, 326.669);
  vertex(500, 373.335);
  endShape();//floor

  fill(138, 148, 157);
  beginShape();
  vertex(287.666, 0);
  vertex(297.665, 159.549);
  vertex(500, 326.336);
  vertex(500, 0);
  endShape();//wall2
  beginShape();
  vertex(62.332, 0);
  vertex(69.665, 194.335);
  vertex(0.332, 370.335);
  vertex(0, 0);
  endShape();//wall3
  beginShape();
  vertex(70.038, 194.335);
  vertex(60.666, 0);
  vertex(288.959, 0);
  vertex(298.332, 182.335);
  endShape();//wall1
}


function bed() {
  fill(183, 100, 43);
  beginShape();
  vertex(-193.668, 497.002);
  endShape();
  fill(129, 75, 32);
  rect(330.999, 97.669, 15.333, 98.667);
  fill(151, 74, 39);
  rect(238.999, 102.336, 11.333, 92);
  fill(145, 79, 34);
  rect(248.999, 105.669, 83.999, 36);
  fill(198, 181, 102);
  beginShape();
  vertex(250.331, 148.336);
  vertex(251.665, 133.669);
  vertex(347.664, 124.336);
  vertex(390.331, 167.002);
  vertex(261.665, 165.669);
  endShape();
  fill(183, 100, 43);
  rect(312.327, 142.144, 143.394, 146.666);
  fill(144, 84, 36);
  rect(452.332, 117.669, 22.666, 185.333);
  fill(183, 100, 43);
  beginShape();
  vertex(245.665, 143.669);
  vertex(245.665, 186.336);
  vertex(297.665, 282.336);
  vertex(297.665, 220.336);
  endShape();
  fill(163, 95, 51);
  rect(297.665, 128.336, 18, 200.667);
  fill(204, 48, 46);
  beginShape();
  vertex(262.999, 159.002);
  vertex(296.999, 146.336);
  vertex(297.665, 220.336);
  vertex(262.332, 169.669);
  endShape();
}
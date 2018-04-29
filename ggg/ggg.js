function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(255);
  frameRate(10);
  fill(0);
  for (var i=1; i<50; i++) {
    text("9", random(width), random(height));
  } 
}
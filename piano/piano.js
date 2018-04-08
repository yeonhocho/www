var value =0;
var col =[10];

function setup() {
  createCanvas(600, 200);
  frameRate(10);
  for (var i =0; i<10; i++) {
    col[i] = 255;
  }
}

function draw() {
    for (var i =0; i<10; i++) {
    fill(col[i]);
    rect(i*60, 0, 60, 200);
  }
  
}

function mousePressed() {

  for (var j = 0; j<10; j++) {
    if (mouseX>j*60&&mouseX<j*60+60) {
      col[j] = 0;
    }
  }
}

function mouseReleased() {
  for (var j=0; j<10; j++) {
    col[j] =255;
  }
}
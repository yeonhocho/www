var x;
var y;
var hy;

  function setup() {
  createCanvas(500, 500);
  x=250;
  y=250;
  hy = y-(10*5);
}

function draw() {
  //foot...?
  stroke(0);
  strokeWeight(1);
  fill(250, 151, 20);
  triangle(x, y, x+10, y+10, x-10, y+10);
  triangle(x, y, x+17, y+5, x+10, y+10);
  triangle(x, y, x-17, y+5, x-10, y+10);

  quad(x+10, y+10, x-10, y+10, x-15, y+20, x+15, y+20);
  quad(x-10, y+10, x-15, y+20, x-25, y+15, x-17, y+5);
  quad(x+10, y+10, x+15, y+20, x+25, y+15, x+17, y+5);

  strokeWeight(2);
  stroke(0);
  line(x-5, y+1, x-40, y-10);
  line(x-40, y-10, x-50, y+40);

  line(x-5, y+2, x-20, y+10);
  line(x-20, y+10, x-30, y+50);

  line(x+5, y+2, x+20, y+10);
  line(x+20, y+10, x+30, y+50);

  line(x+5, y+1, x+40, y-10);
  line(x+40, y-10, x+50, y+40);

  //body
  strokeWeight(1);
  stroke(0);
  for (var i =1; i<=10; i++ ) {
    fill(165, 164, 163);
    ellipse(x, y-(i*5), 30, 13);
  }

  //head
  fill(227, 156, 64);
  triangle(x, hy, x, hy-10, x-30, hy-20);
  fill(255, 194, 113);
  triangle(x, hy, x+30, hy-20, x, hy-10);//buttom

  fill(247, 173, 75);
  triangle(x, hy-10, x+30, hy-20, x+20, hy-70);
  fill(227, 160, 73);
  triangle(x, hy-10, x-30, hy-20, x-20, hy-70);
  fill(255, 158, 31);
  triangle(x, hy-10, x-20, hy-70, x+20, hy-70);//middle middle
  fill(227, 156, 64);
  triangle(x-30, hy-20, x-30, hy-75, x-20, hy-70);
  fill(255, 194, 113);
  triangle(x+30, hy-20, x+30, hy-75, x+20, hy-70);//side middle

  fill(227, 156, 64);
  triangle(x, hy-95, x-20, hy-70, x+20, hy-70);
  triangle(x, hy-95, x-30, hy-75, x-20, hy-70);
  triangle(x, hy-95, x+30, hy-75, x+20, hy-70);//top


  stroke(250, 151, 20);
  strokeWeight(2);
  line(x+15, hy, x+30, hy+30);
  line(x+12, hy+5, x+20, hy+40);
  line(x-12, hy+5, x-20, hy+40);
  line(x-15, hy, x-30, hy+30);
}
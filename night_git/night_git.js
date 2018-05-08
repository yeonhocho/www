var count;
var space;
function setup() {
  createCanvas(600, 480);
  frameRate(3);
  noStroke();
}

function draw() {
  back();

  if (space===1) {
    count++;
  } else {
    count=0;
  }
  if (count>2) {
    fill(255, 100);
    ellipse(530, 70, 125, 120);
    fill(235, 255, 28);
    ellipse(530, 70, 105, 100);
  }
  if (count>4) {
    fill(255, 100);
    ellipse(430, 80, 48, 50);
    fill(235, 255, 28);
    ellipse(430, 80, 36, 38);
  } 
  if (count>6) {
    fill(255, 100);
    ellipse(360,40,58,60);
    fill(235, 255, 28);
    ellipse(360,40,46,48);
  }if (count>8) {
    fill(255, 100);
    ellipse(240,36,48,50);
    fill(235, 255, 28);
    ellipse(240,36,36,38);
  }if (count>10) {
    fill(255, 100);
    ellipse(170,100,80,76);
    fill(235, 255, 28);
    ellipse(170,100,65,60)
  }if (count>12) {
    fill(255, 100);
    ellipse(60,40,50,50);
    fill(235, 255, 28);
    ellipse(60,40,40,40);
  }
}

function mousePressed() {
  space =1;
}

function mouseReleased() {
  space =0;
}


function back() {

  noStroke();
  fill(0, 93, 233);
  rect(0, 0, 600, 480);
  fill(154, 230, 255);
  beginShape();
  vertex(0, 138);
  bezierVertex(173, 138, 51, 181, 116, 149);
  bezierVertex(182, 102, 310, 124, 310, 124);
  bezierVertex(310, 124, 352, 130, 330, 172);
  bezierVertex(308, 213, 255, 169, 289, 158);
  bezierVertex(323, 146, 296, 150, 296, 150);
  bezierVertex(296, 150, 277, 144, 245, 152);
  bezierVertex(213, 160, 114, 192, 0, 178);
  endShape();
  fill(160, 234, 255);
  beginShape();
  vertex(0, 273);
  bezierVertex(16, 273, 58, 234, 103, 279);
  bezierVertex(148, 325, 142, 318, 142, 318);
  bezierVertex(142, 318, 276, 300, 428, 300);
  bezierVertex(362, 300, 370, 303, 370, 303);
  bezierVertex(370, 303, 384, 280, 421, 286);
  bezierVertex(459, 292, 517, 250, 520, 246);
  bezierVertex(628, 242, 600, 260, 600, 301);
  vertex(572, 348);
  vertex(0, 352);
  endShape();
  fill(0, 3, 173);
  beginShape();
  vertex(1, 330);
  bezierVertex(11, 330, 34, 260, 70, 340);
  bezierVertex(110, 323, 103, 331, 106, 331);
  vertex(113, 338);
  vertex(190, 342);
  vertex(256, 350);
  vertex(308, 334);
  vertex(349, 346);
  vertex(377, 327);
  bezierVertex(381, 355, 421, 306, 515, 369);
  bezierVertex(340, 334, 432, 340, 432, 340);
  vertex(458, 328);
  vertex(490, 326);
  vertex(521, 306);
  vertex(554, 302);
  vertex(600, 300);
  vertex(600, 498);
  vertex(0, 498);
  endShape();
  fill(0, 25, 63);
  beginShape();
  vertex(100, 396);
  bezierVertex(100, 396, 121, 478, 126, 434);
  bezierVertex(132, 390, 120, 401, 104, 340);
  bezierVertex(89, 278, 100, 305, 100, 305);
  vertex(108, 324);
  bezierVertex(108, 324, 102, 265, 103, 248);
  bezierVertex(104, 232, 112, 271, 112, 271);
  vertex(122, 230);
  bezierVertex(122, 230, 130, 234, 124, 188);
  bezierVertex(119, 141, 114, 127, 118, 126);
  bezierVertex(121, 126, 134, 157, 145, 162);
  bezierVertex(136, 166, 139, 203, 141, 206);
  bezierVertex(143, 208, 144, 243, 147, 258);
  bezierVertex(150, 274, 160, 325, 163, 344);
  bezierVertex(166, 352, 172, 335, 172, 335);
  vertex(172, 366);
  bezierVertex(172, 366, 179, 411, 178, 426);
  bezierVertex(176, 460, 194, 433, 194, 433);
  bezierVertex(194, 433, 180, 396, 200, 376);
  bezierVertex(220, 357, 232, 348, 232, 348);
  vertex(223, 370);
  vertex(226, 388);
  bezierVertex(226, 388, 238, 402, 242, 404);
  bezierVertex(247, 407, 265, 430, 250, 464);
  bezierVertex(236, 500, 267, 480, 267, 480);
  vertex(280, 496);
  vertex(100, 496);
  endShape();
  fill(160, 234, 255);
  beginShape();
  vertex(259, 149);
  bezierVertex(259, 149, 197, 180, 258, 207);
  bezierVertex(331, 242, 389, 180, 389, 180);
  bezierVertex(389, 190, 410, 170, 427, 193);
  bezierVertex(444, 216, 417, 223, 413, 223);
  bezierVertex(408, 223, 408, 223, 408, 223);
  bezierVertex(408, 223, 444, 210, 419, 188);
  bezierVertex(394, 166, 370, 216, 370, 216);
  bezierVertex(370, 216, 264, 248, 405, 245);
  bezierVertex(446, 242, 476, 212, 457, 177);
  bezierVertex(438, 142, 334, 176, 322, 183);
  bezierVertex(310, 190, 294, 194, 286, 184);
  bezierVertex(278, 173, 268, 168, 294, 156);
  bezierVertex(318, 144, 270, 156, 281, 148);
  endShape();
  ellipse(280, 262, 34, 30);
}

//Daniel W.


//SS1

function setup() {
  createCanvas(600, 600);

  // Background (night sky)
  background(20, 24, 82);
}

function draw() {
  // Moon (ellipse)
  fill(240, 240, 200);
  noStroke();
  ellipse(500, 100, 80, 80);

  // Buildings (rectangles)
  fill(40);
  stroke(0);
  strokeWeight(2);
 
  rect(200, 250, 150, 350);
  

  // Windows (using small rectangles)
  fill(255, 230, 120);
  noStroke();
  

  rect(230, 280, 25, 35);
  rect(260, 330, 25, 35);
  rect(300, 380, 25, 35);

  // Road (rectangle)
  fill(30);
  rect(0, 520, width, 80);

  // Road lines (using line primitive)
  stroke(255, 255, 120);
  strokeWeight(5);
  line(0, 560, 150, 560);
  line(200, 560, 350, 560);
  line(400, 560, 550, 560);
}
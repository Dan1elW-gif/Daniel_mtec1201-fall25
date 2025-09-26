let x, y;        // ball position
let xMove, yMove; // movement speed
let r = 0;
let g = 255;
let b = 0;
let size = 100;
let rectX, rectY;
let stop = true;  // fixed typo "ture" -> "true"

function setup() {
  createCanvas(700, 700);
  x = width / 2;
  y = height / 2;   

  rectX = width / 2;
  rectY = height / 2;
}

function draw() {
  background(75);
  fill(r, g, b);
  ellipse(x, y, size, size);
  rect(rectX, rectY, size, size);

  if (!stop) {
    x += xMove;
    y += yMove;
  }

  if (x >= width || x <= 0) {
    xMove = -xMove;   
  }

  if (y >= height || y <= 0) {
    yMove = -yMove;   
  }

  if (keyIsDown(LEFT_ARROW)) {
    rectX-= 10;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rectX+= 10;
  }

  if (keyIsDown(UP_ARROW)) {
    rectY-= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    rectY+= 10;
  }
}

function mousePressed() {   
  xMove = random(-20, 20);
  yMove = random(-20, 20);

  r = random(255);
  g = random(255);
  b = random(255);
}

function keyPressed() {
  if (key === 'a') {
    r = 255;
    g = 255;
    b = 255;
  }

  if (key === 'A') {
    r = 0;
    g = 0;
    b = 0;
  }

  if (keyCode === ENTER) {
    stop = !stop;
  }
}

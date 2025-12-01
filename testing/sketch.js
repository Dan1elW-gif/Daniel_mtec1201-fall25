/*
______LINES OOP QUIZ_______
Add Following Functionality:

  When mouse is pressed...
    - Line object is added to array and drawn from center position to mouse position.
	  - BONUS: opacity, stroke, strokeWeight randomized.

  When any key is pressed...
    - The whole image resets, the starting lines are redrawn with new random values.
*/

let lines = [];     

function setup() {
  createCanvas(600, 600);
  generateStartingLines();
}

function draw() {
  background(0);

  // draw all lines
  for (let i = 0; i < lines.length; i++) {
    lines[i].display();
  }
}

// --- Generate initial 100 lines from center ---
function generateStartingLines() {
  lines = [];            // reset array
  let numLines = 100;    

  for (let i = 0; i < numLines; i++) {
    let radius = random(1, 100);
    let angle = map(i, 0, numLines, 0, TWO_PI);

    let x1 = width / 2 + radius * cos(angle);
    let y1 = height / 2 + radius * sin(angle);

    // center point
    let x2 = width / 2;
    let y2 = height / 2;

    let newLine = new Line(x1, y1, x2, y2);

    // random style
    newLine.opacity = random(127, 255);
    newLine.stroke = 255;
    newLine.strokeWeight = random(0.2, 2);

    lines.push(newLine);
  }
}

// --- CLICK: Add new line from center to mouse ---
function mousePressed() {
  let newLine = new Line(mouseX, mouseY, width / 2, height / 2);

  // random style
  newLine.opacity = random(120, 255);
  newLine.stroke = random(100, 255);
  newLine.strokeWeight = random(0.5, 4);

  lines.push(newLine);
}

// --- KEY PRESS: Reset everything ---
function keyPressed() {
  generateStartingLines();
}

// ---------------- CLASS ------------------
class Line {
  constructor(_x1, _y1, _x2, _y2) {
    this.x1 = _x1;
    this.y1 = _y1;
    this.x2 = _x2;
    this.y2 = _y2;

    this.stroke = 255;
    this.strokeWeight = 1;
    this.opacity = 255;
  }

  display() {
    strokeWeight(this.strokeWeight);
    stroke(this.stroke, this.opacity);
    line(this.x1, this.y1, this.x2, this.y2);
  }
}

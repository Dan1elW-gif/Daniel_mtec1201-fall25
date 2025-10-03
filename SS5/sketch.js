// Yan Chak Daniel, Wan
// SS5_DanielW - Mini Car Game
// Instructions: Use WASD keys to move the car. Don't crash into the walls. 
// Game ends after 30 seconds.

let car, circuit;
let carX, carY;
let speed = 7;

function preload() {
  car = loadImage("images/car.jpg");       
  circuit = loadImage("images/circuit.png"); 
}

function setup() {
  createCanvas(700, 500);
  carX = width / 2;
  carY = height / 2;
  
  textAlign(LEFT, CENTER);
  textSize(14);
  textFont('Courier New');
}

function draw() {

  background(200);
  imageMode(CORNER);
  image(circuit, 0, 0, width, height);

  // car
  imageMode(CENTER);
  image(car, carX, carY, 100, 60);

  // controll car
  if (keyIsDown(LEFT_ARROW))  carX -= speed;
  if (keyIsDown(RIGHT_ARROW)) carX += speed;
  if (keyIsDown(UP_ARROW))    carY -= speed;
  if (keyIsDown(DOWN_ARROW))  carY += speed;

  // Timer：
  let s = millis() / 1000;
  fill(0);
  text(`Running time: ${nf(s, 1, 1)} sec`, 10, 20, 200);

  // times up
  if (s >= 30) {
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    text("Time's up!", width / 2, height / 2);
    noLoop();
  }
}

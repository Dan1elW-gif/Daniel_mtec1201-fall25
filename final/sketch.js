


let copcarImg, city, bank, Ryan, maxImg;
let cspeed = 3;
let mspeed = 5;
let maxSong;
let maxMoving = false;
let ryanMoving = false;

let RyanX, RyanY;
let RyanXMove, RyanYMove;


let state = "pregame";
let startTime;


// ARRAYS
let copCars = [];
let maxCars = [];

class CopCar {
  constructor(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = 200;
    this.h = 120;
  }

  draw() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h);
  }
}

class MaxV {
  constructor(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 80;
  }

  draw() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h);
  }
}

function preload() {
  Ryan = loadImage("images/car.jpg");       
  city = loadImage("images/city.jpg"); 
  copcarImg = loadImage("images/copcar.png");
  bank = loadImage("images/bank.png");
  maxImg = loadImage("images/max.jpeg");
  maxSong = loadSound ('audio/maxSong.mp3');
  RyanSong = loadSound('audio/RyanSong.wav');
}

function setup() {
  createCanvas(1280, 720);

  // Ryan
  RyanX = 20;
  RyanY = 20;
  RyanXMove = 8;
  RyanYMove = 8;

  textAlign(LEFT, CENTER);
  textSize(14);

  // PLAYER COPCAR
  copCars.push(new CopCar(copcarImg, width / 2, height / 2,));

  // PLAYER 2 MAX
  maxCars.push(new MaxV(maxImg, width / 2 + 150, height / 2));
}

function draw() {
  background(200);
  imageMode(CORNER)
  image(city, 0, 0, width, height);
  image(bank, 0, 0, 100, 100);

  if (state === "pregame") preGame();
  else if (state === "game") playGame();
  else if (state === "game over") gameOver();
}

function preGame() {
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  fill(255, 0, 0);
  textSize(28);
  text("RYAN GOSLING JUST ROBBED THE BANK!", width / 2, height / 2 - 40);

  fill(255);
  textSize(22);
  text("Click to start the chase", width / 2, height / 2 + 20);
}

function playGame() {

  // draw all police cars
  for (let i = 0; i < copCars.length; i++) {
    copCars[i].draw();
  }

  // draw Max cars
  for (let i = 0; i < maxCars.length; i++) {
    maxCars[i].draw();
  }

  // PLAYER MOVEMENT (car #1)
  if (keyIsDown(65))  copCars[0].x -= cspeed; // A
  if (keyIsDown(68))  copCars[0].x += cspeed; // D
  if (keyIsDown(87))  copCars[0].y -= cspeed; // W
  if (keyIsDown(83))  copCars[0].y += cspeed; // S

  //MaxCar
let movingNow = false;

// movement
if (keyIsDown(LEFT_ARROW))  { maxCars[0].x -= mspeed; movingNow = true; }
if (keyIsDown(RIGHT_ARROW)) { maxCars[0].x += mspeed; movingNow = true; }
if (keyIsDown(UP_ARROW))    { maxCars[0].y -= mspeed; movingNow = true; }
if (keyIsDown(DOWN_ARROW))  { maxCars[0].y += mspeed; movingNow = true; }


if (movingNow && !maxMoving) {
  maxSong.loop();   // only starts once
}


if (!movingNow && maxMoving) {
  maxSong.stop();
}

// update state
maxMoving = movingNow;



  // RYAN CAR
  imageMode(CENTER);
  image(Ryan, RyanX, RyanY, 100, 60);

  RyanX += RyanXMove;
  RyanY += RyanYMove;

  if (RyanX >= width - 100 || RyanX <= 0) RyanXMove *= -1; 
  if (RyanY >= height - 60 || RyanY <= 0) RyanYMove *= -1;

  
  // COLLISION
  let d = dist(copCars[0].x, copCars[0].y, RyanX, RyanY);
  if (d < 80) {
    result = "YOU CAUGHT RYAN GOSLING!";
    maxSong.stop()
    RyanSong.stop()
    state = "game over";
  }
  
  
  let dis = dist(maxCars[0].x, maxCars[0].y, RyanX, RyanY);
  if (dis < 80) {
    result = "Max CAUGHT RYAN GOSLING!";
    maxSong.stop()
    RyanSong.stop()
    state = "game over";
  }

  // TIMER
  let s = (millis() - startTime) / 3000;
  fill(0);
  text(`Running time: ${nf(s, 1, 1)} sec`, 500, 30);

  if (s >= 10) {
    result = "RYAN ESCAPED! YOU LOSE";
    maxSong.stop()
    RyanSong.stop()
    state = "game over";
  }
}

function gameOver() {
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  fill(255);
  textSize(28);
  text(result, width / 2, height / 2 - 40);

  textSize(20);
  text("Click to play again", width / 2, height / 2 + 30);
}

function mousePressed() {
  if (state === "pregame") {
    state = "game";
    startTime = millis();
    RyanSong.loop();
  } else if (state === "game over") {
    resetGame();
    state = "pregame";
  }

  

}


function resetGame() {
  // reset player
  copCars[0].x = width / 2;
  copCars[0].y = height / 2;

  // reset extra cop car
  maxCars[0].x = width / 2 + 150;
  maxCars[0].y = height / 2;

  RyanX = 20;
  RyanY = 20;

  RyanXMove = 7;
  RyanYMove = 7;

  startTime = millis();
}




let copcarImg, city, bank, Ryan, maxImg;
let cspeed = 3;
let mspeed = 5;
let maxSong;
let maxMoving = false;
let ryanMoving = false;
let chaseSpeed = 4;
let fleeSpeed= 0.5; 
let ryanPos;
let copPos;
let maxPos;
let fleeFromCop = p5.Vector.sub(ryanPos, copPos);
let fleeFromMax = p5.Vector.sub(ryanPos, maxPos);
let flee = p5.Vector.add(fleeFromCop, fleeFromMax);




//let RyanX, RyanY;
//let RyanXMove, RyanYMove;


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

  ryanPos = createVector(20, 20);
  copPos = createVector(width / 2, height / 2);
  maxPos = createVector(width / 2 + 150, height / 2);

  // Ryan
  //RyanX = 20;
  //RyanY = 20;
  //RyanXMove = 8;
  //RyanYMove = 8;

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
  if (keyIsDown(65))  copPos.x -= cspeed; // A
  if (keyIsDown(68))  copPos.x += cspeed; // D
  if (keyIsDown(87))  copPos.y -= cspeed; // W
  if (keyIsDown(83))  copPos.y += cspeed; // S

  copCars[0].x = copPos.x;
  copCars[0].y = copPos.y;


  //MaxCar
let chaseDir = p5.Vector.sub(ryanPos, maxPos);
chaseDir.normalize();
chaseDir.mult(mspeed);
maxPos.add(chaseDir);
maxCars[0].x = maxPos.x;
maxCars[0].y = maxPos.y;


let movingNow = false;



if (movingNow && !maxMoving) {
  maxSong.loop();   // only starts once
}


if (!movingNow && maxMoving) {
  maxSong.stop();
}


  maxMoving = movingNow;



  // RYAN CAR
  imageMode(CENTER);
  image(Ryan, ryanPos.x, ryanPos.y, 100, 60);

  let fleeFromCop = p5.Vector.sub(ryanPos, copPos);
let fleeFromMax = p5.Vector.sub(ryanPos, maxPos);

fleeFromCop.normalize();
fleeFromMax.normalize();

// combine both flee forces
let flee = p5.Vector.add(fleeFromCop, fleeFromMax);

flee.normalize();
flee.mult(fleeSpeed);

ryanPos.add(flee);




  
  // COLLISION
  let d = dist(copCars[0].x, copCars[0].y, ryanPos.x, ryanPos.y);
  if (d < 80) {
    result = "YOU CAUGHT RYAN GOSLING!";
    maxSong.stop()
    RyanSong.stop()
    state = "game over";
  }
  
  
  let dis = dist(maxCars[0].x, maxCars[0].y, ryanPos.x, ryanPos.y);
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

  

  startTime = millis();
}

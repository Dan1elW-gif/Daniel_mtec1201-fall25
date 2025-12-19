//YanChakDaniel, Wan
//final



let copcarImg, city, bank, Ryan, maxImg;
let cspeed = 3;
let mspeed = 3;
let fleeSpeed = 9; 
let maxSong, RyanSong;
let Idrive;
let catL;
let simply;

let ryanPos;
let copPos;
let maxPos;

let state = "pregame";
let startTime;
let result = "";
let radio;
let cat;
let RyanW;
let Ryanbgm

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
  maxSong = loadSound('audio/maxSong.mp3');
  RyanSong = loadSound('audio/RyanSong.wav');
  Idrive = createVideo (['video/Ryan.mp4']);
  Idrive.hide()
  catL = loadSound('audio/catL.wav');
  simply = loadSound('audio/simply.mp3');
  radio = loadImage("images/radio.png")
  cat = loadImage("images/cat.png");
  RyanW = loadImage("images/Ryanwin.jpg");
  Ryanbgm = loadSound('audio/RyanOut.mp3');

}

//RYAN GOSLING INTRO VIDEO
function playIntro() {
  imageMode(CORNER);
  image(Idrive, 0, 0, width, height);
  
  fill(255,0,0);
  textSize(28);
  text("Click to skip intro", width / 2, height - 30);
  text("Ryan Just Robbed the Bank", width / 2, 50);
  
}

// START THE CHAES
function startChase() {
  Idrive.stop();
  state = "game";
  startTime = millis();
  RyanSong.loop();
  RyanSong.setVolume (0.1)
}

function setup() {
  createCanvas(1280, 720);

  ryanPos = createVector(450, 250);
  copPos = createVector(100, 100);
  maxPos = createVector(100, 100);

  copCars.push(new CopCar(copcarImg, copPos.x, copPos.y));
  maxCars.push(new MaxV(maxImg, maxPos.x, maxPos.y));

  textAlign(CENTER, CENTER); 
}

function draw() {
  background(200);

  if (state === "pregame") {
    imageMode(CORNER);
    image(city, 0, 0, width, height);
    preGame();
  } 
  else if (state === "watching_video") {
    playIntro();
  } 
  else if (state === "game") {
    imageMode(CORNER);
    image(city, 0, 0, width, height);
    image(bank, 450, 250, 100, 100);
    playGame();
  } 
  else if (state === "game over") {
    imageMode(CORNER);
    image(city, 0, 0, width, height);
    gameOver();
  }
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
  
  let s = (millis() - startTime) / 1000;
  fill(255);
  textSize(22);
  text(`Running time: ${nf(s, 1, 1)} sec`, width / 2, 30);

  let dToMax = dist(ryanPos.x, ryanPos.y, maxPos.x, maxPos.y);
  let dToCop = dist(ryanPos.x, ryanPos.y, copPos.x, copPos.y); 

  // PLAYER MOVEMENT
  if (keyIsDown(65)) copPos.x -= cspeed; // A
  if (keyIsDown(68)) copPos.x += cspeed; // D
  if (keyIsDown(87)) copPos.y -= cspeed; // W
  if (keyIsDown(83)) copPos.y += cspeed; // S

  copCars[0].x = copPos.x;
  copCars[0].y = copPos.y;

  // MAX CAR AI (help player after 10sec)
  if (s > 12) {
    if (!maxSong.isPlaying()) {
      maxSong.loop();
      maxSong.setVolume (0.2)
      RyanSong.stop();
    }
    let chaseDir = p5.Vector.sub(ryanPos, maxPos);
    chaseDir.normalize();
    chaseDir.mult(mspeed);
    maxPos.add(chaseDir);

  
  }
  maxCars[0].x = maxPos.x;
  maxCars[0].y = maxPos.y;

  
  
  
  // RYAN FLEE COPCAR


  if (dToCop < 150) {
  let dirCop = p5.Vector.sub(copPos, ryanPos); 
  dirCop.normalize(); 
  dirCop.mult(fleeSpeed); 
  ryanPos.sub(dirCop); 
}

  // FLEE MAX
  if (s > 12) {
  
  if (dToMax < 150) {
    let dirMax = p5.Vector.sub(maxPos, ryanPos);
    dirMax.normalize();
    dirMax.mult(fleeSpeed);
    ryanPos.sub(dirMax); 
  }
}

  

  // MARGIN TO THE WALL
let margin = 60;
if (ryanPos.x < margin) ryanPos.x += fleeSpeed;
if (ryanPos.x > width - margin) ryanPos.x -= fleeSpeed;
if (ryanPos.y < margin) ryanPos.y += fleeSpeed;
if (ryanPos.y > height - margin) ryanPos.y -= fleeSpeed;

// AVOID RYAB RUN OUT OF THE MAP
ryanPos.x = constrain(ryanPos.x, 30, width - 30);
ryanPos.y = constrain(ryanPos.y, 30, height - 30);



// DRAW ALL CARS
  copCars[0].draw();
  maxCars[0].draw();
  imageMode(CENTER);
  image(Ryan, ryanPos.x, ryanPos.y, 100, 60);

  // COLLISION
  if (dToCop < 50) {
    result = "YOU CAUGHT RYAN GOSLING!TOO EASY";
    stopAllMusic();
    catL.play();
    catL.setVolume(0.2);
    state = "game over";
  }
  
  if (s > 12 && dToMax < 50) {
    result = "MAX CAUGHT RYAN GOSLING!SIMPLY LOVELY";
    stopAllMusic();
    simply.play()
    simply.setVolume(3.0)
    
    state = "game over";
    
    
    
  }

  // LOSE CONDITION (20sec)
  if (s >= 24) {
    result = "YOU ARE OUT OF FUEL,GAME OVER";
    stopAllMusic();
    Ryanbgm.play();
    Ryanbgm.setVolume(0.4)
    state = "game over";
  }
}

function stopAllMusic() {
  maxSong.stop();
  RyanSong.stop();
  Ryanbgm.stop();
}

function gameOver() 
{
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  if (result === "YOU CAUGHT RYAN GOSLING!TOO EASY"){
    imageMode (CENTER)
    image(cat, 200, 200, 300, 250);
  }


  
  if (result === "MAX CAUGHT RYAN GOSLING!SIMPLY LOVELY") {
    imageMode(CENTER);
    image(radio,200, 200 , 300, 250); 
  }

  if (result === "YOU ARE OUT OF FUEL,GAME OVER" ){
    imageMode (CENTER)
    image(RyanW,200, 200, 300, 250)
      text("Tips: try to pin Ryan to the corner", width / 2, height / 2 + 50);

  }


  fill(255);
  textSize(28);
  text(result, width / 2, height / 2 - 40);
  textSize(20);
  text("Click to play again", width / 2, height / 2 + 30);
}

function mousePressed() {
  if (state === "pregame") {
    state = "watching_video";
    Idrive.volume(1);
    Idrive.play();
  } 

  //SKIP INTRO
  else if (state === "watching_video") {
    startChase(); 
  }
  else if (state === "game over") {
    resetGame();
    state = "pregame";
  }
}

function resetGame() {
  ryanPos.set(450, 250);
  copPos.set(100, 100);
  maxPos.set(100, 120);

  
  copCars[0].x = copPos.x;
  copCars[0].y = copPos.y;
  maxCars[0].x = maxPos.x;
  maxCars[0].y = maxPos.y;

  stopAllMusic();
  startTime = millis();
}


//Source:
//https://editor.p5js.org/jeffThompson/sketches/o2nlBRPqj
//https://p5js.org/reference/p5/createVideo/
//https://www.youtube.com/watch?v=zv7fViWS7CA
//https://p5js.org/reference/p5/millis/
//https://p5js.org/reference/p5.SoundFile/setVolume/
//https://p5js.org/examples/calculating-values-constrain/
//https://p5js.org/reference/p5.Vector/normalize/
//https://p5js.org/reference/p5/createVector/

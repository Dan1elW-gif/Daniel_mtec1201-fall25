

let copcar, circuit;
let copcarX, copcarY;
let speed = 2;
let Ryan;
let RyanX, RyanY;
let RyanXMove, RyanYMove;

let state = "pregame";
let startTime;
//let result = ""




function preload() {
  Ryan = loadImage("images/car.jpg");       
  city = loadImage("images/city.jpg"); 
  copcar = loadImage ("images/copcar.png")
  bank = loadImage ("images/bank.png")
}

function setup() {
  createCanvas(1280, 720);
  copcarX = width / 2;
  copcarY = height / 2;
  


  // the target
  RyanX = 20;
  RyanY = 20;
  RyanXMove = random(-8, 8);
  RyanYMove = random(-8, 8);
  
  textAlign(LEFT, CENTER);
  textSize(14);

}

function draw() {
 
 
  //background
  background(200);
  imageMode(CORNER);
  image(city, 0, 0, width, height);

  // bank
  imageMode (CORNER)
  image(bank,0,0,100,100)

  if(state === "pregame")
    {preGame();}
  
  else if (state === "game"){
    playGame();

  }

  else if (state === "game over") 
  {
    gameOver();
  }
} 

function preGame(){
fill (0, 0, 0, 150);
rect(0, 0, width, height);
  fill(255, 0, 0);
  textSize(28);
  text("RYAN GOSLING JUST ROBBED THE BANK!", width / 2, height / 2 - 40);
  textSize(22);
  fill(255);
  text("Click to start the chase", width / 2, height / 2 + 20);

}

function playGame(){
  // copcar (player)
  imageMode(CENTER);
  image(copcar, copcarX, copcarY, 200, 120);


  // controll car
   if (keyIsDown(65))  copcarX -= speed;
  if (keyIsDown(68)) copcarX += speed;
  if (keyIsDown(87))    copcarY -= speed;
  if (keyIsDown(83))  copcarY += speed;

  //Ryan Gosling's car 
  imageMode (CENTER);
  image (Ryan, RyanX , RyanY, 100, 60)

  // move enemy 
  RyanX += RyanXMove;
  RyanY += RyanYMove;

  // turn back when touch the wall from s4_02
  if (RyanX >= width - 100 || RyanX <= 0) {
    RyanXMove = -RyanXMove;
  }
  if (RyanY >= height - 60 || RyanY <= 0) {
    RyanYMove = -RyanYMove;
  }

  let distance = dist(copcarX,copcarY, RyanX  , RyanY )
  if (distance < 80){
    result = "YOU CAUGHT RYAN GOSLING!";
    state= "game over";
  }


  // Timer：find it from p5.js website
  let s = (millis()- startTime)/ 1000;
  fill(0);
  text(`Running time: ${nf(s, 1, 1)} sec`, 500, 30, 200);

  // times up
  if (s >= 10) {
    result = "RYAN ESCAPED! YOU LOSE";
    state = "game over";
  }
}

function gameOver (){
fill(0, 0, 0, 150);
  rect(0, 0, width, height);
  fill(255);
  textSize(28);
  text(result, width / 2, height / 2 - 40);
  textSize(20);
  text("Click to play again", width / 2, height / 2 + 30);
}

//click to go to next sence
function mousePressed() {
  if (state === "pregame") {
    state = "game";
    startTime = millis();
  } 
  
  else if (state === "game over")
  { 
    resetGame();
    state = "pregame"}
}


function resetGame()
{
  copcarX = width /2 ;
  copcarY = height /2;

  RyanX = 20;
  RyanY = 20;
  RyanXMove = random(-5, 5);
  RyanYMove = random(-5, 5);
  
  startTime = millis();
}
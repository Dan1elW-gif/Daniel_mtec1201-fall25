

let copcar, circuit;
let copcarX, copcarY;
let speed = 2;
let Ryan;
let RyanX, RyanY;
let RyanXMove, RyanYMove;




function preload() {
  Ryan = loadImage("images/car.jpg");       
  city = loadImage("images/city.jpg"); 
  copcar = loadImage ("images/copcar.png")
  bank = loadImage ("images/bank.png")
}

function setup() {
  createCanvas(700, 500);
  copcarX = width / 2;
  copcarY = height / 2;

  // the target
  RyanX = 20;
  RyanY = 20;
  RyanXMove = random(-5, 5);
  RyanYMove = random(-5, 5);
  
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

  // copcar (player)
  imageMode(CENTER);
  image(copcar, copcarX, copcarY, 200, 120);


  // controll car
   if (keyIsDown(65))  copcarX -= speed;
  if (keyIsDown(68)) copcarX += speed;
  if (keyIsDown(87))    copcarY -= speed;
  if (keyIsDown(83))  copcarY += speed;

  //Ryan Gosling's car 
  imageMode (CORNER);
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

   fill(255,0,0);
  text ("RYAN GOSLING JUST ROBBED THE BANK, GO CATCH HIM!!", 300, 450);
  textSize(20);
  textAlign(CENTER,CENTER);



  // Timer：find it from p5.js website
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



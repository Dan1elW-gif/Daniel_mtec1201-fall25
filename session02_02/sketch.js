function setup() {
  createCanvas(1280, 720);

  rectMode(CENTER);

  background(20,100,220);

  //sun
  fill(255,200,0);
  ellipse(200,100,100,100)

  //ground
  fill(150,200,50);
  quad(20,700,200, 480,1080,480,1260,700);

  //glass structure
  fill(0,200,200,127);
  rect(550, 450, 200, 100);
  
}




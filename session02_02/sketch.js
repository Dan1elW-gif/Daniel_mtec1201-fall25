function setup() {
  createCanvas(1280, 720);

  rectMode(CENTER);

  background(20,100,220);

  //sun
  fill(255,300,0);
  ellipse(200,100,100,100)

  //ground
  fill(150,200,50);
  quad(20,700,200, 480,1080,480,1260,700);

  
  //head
  fill(255, 220, 180);
  ellipse(550, 350, 80, 80);
  
  //face
  fill(0);
  ellipse(535, 345, 10, 10);
  ellipse(565, 345, 10, 10);
  
  line(550, 390, 550, 470)

  line(550, 470, 520, 520);
  line(550, 470, 580, 520);

  line(520, 420, 580, 420)
}






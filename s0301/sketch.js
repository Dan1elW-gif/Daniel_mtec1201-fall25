function setup() 
{
  createCanvas(800,600);
  strokeWeight(8)
  //background(125,127,50);
}

function draw() { //line code in draw block run block
  background(127);
  //a STATIC LINE
  line(0,0,400,300)  

  //a DYNAMIC LINE
  line(400,300, mouseX, mouseY)
  fill(0,255,0)  
  //ellipse following mouse  
  ellipse(mouseX, mouseY,50,50)
}

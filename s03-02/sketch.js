function setup() 
{
  createCanvas(800, 400);
  //background(127);
}

function draw() 
{
  background(120,120,120,)
  stroke(255,mouseX/4,0);
  strokeWeight(10)
  line(mouseX,mouseY,pmouseX,pmouseY);
 
}

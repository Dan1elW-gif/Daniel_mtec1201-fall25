function setup() 
{
  createCanvas(800,600);

}

function draw() { //line code in draw block run block
  background(127);
  //a STATIC LINE
  line(0,0,400,300)  

  //a DYNAMIC LINE
  line(400,300, mouseX, mouseY)
}

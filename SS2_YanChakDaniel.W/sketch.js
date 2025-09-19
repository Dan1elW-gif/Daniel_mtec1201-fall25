//Yan Chak Daniel, Wan
//Drawing web
// hold left click to draw and right click to change color from black to white






let drawColor = 0;
let grow = 10;



function setup() 
{
  createCanvas(800, 600);
  background(127);
}

function draw() 
{
  if (mouseIsPressed && mouseButton===LEFT) {
    //background(120,120,120,0)
    stroke(drawColor);
    strokeWeight(grow)
    line(mouseX,mouseY,pmouseX,pmouseY);
    grow += 0.25
    
}



  
}


// right click to chage the color
function mousePressed(){

  if (mouseButton === RIGHT){
  
    drawColor = 255;}
}
 


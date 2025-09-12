


let num=100;
let ellipseHeight = 50;
let grow= 0.5;
let xLocation = 0;

let r=0;
let g=50;
let b=0;

const CenterPosX=400;
const CenterPosy=300;


function setup()
 {
  createCanvas(800, 600);
  
}

function draw()
 {
  background(r ,g, b, );
  
  ellipse(mouseX/ 2, mouseY - 200, num, ellipseHeight = 100);
  
  
  rectMode (CENTER);
  rect(mouseX* 0.5, mouseY, grow, grow);

  grow += 0.5;

  print (grow) ;

  ellipse(xLocation +1, height / 2, width / 4, width / 4)
  // xLocation = xLocation +1;
  // xLocation += 1;
   xLocation ++; //increment by 1

   ellipse(mouseX* 0.5, mouseY, grow, grow);

  



}

function mousePressed()
{
r++;
g+=20
b+=20

}


function keyPressed()

{




}
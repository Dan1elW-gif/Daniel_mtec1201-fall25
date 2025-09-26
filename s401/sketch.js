
let r = 255;
let g = 255;
let b = 255;



function setup() {    //run only once
  createCanvas(600, 600);

  rectMode (CENTER);
  

}

function draw() 
{
  background(r, g, b);
  if (mouseX > width / 2)
  {
      fill (255,0 ,0);
      ellipse (width/ 2, height/2 ,10, 100, 100);
      print ("Test 1 is ture");
  }
  else if (mouseY > height / 2)
  {

    fill (0);
    rect(width/2 , height/2, 100, 100 )
    print("TEST 2 is TURE")
  }
  else 
  {
    fill(255)
    rect ( width/2 , height/2, 100, 100)
    print("TEST 1 & TEST2 are BOTH TURE")
  }

  



}
  




function mousePressed () //runs once only when mouse button preesed
{
  r = random(220, 255);
  g = random(50, 200);
  b = random ( 100,155);

  print("RED"+ r)
  print("BLUE" + b)
  print("GREEN" + g)

}

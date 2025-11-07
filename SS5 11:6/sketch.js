
// Daniel W, SS5 responsive circles, squre near the mouse will turn to orangle circle



function setup()
{
  createCanvas (700, 700)
  
}

function draw(){
background (0)    //two loops to make circles, one for x and one for y
  for (let x= 0; x <width; x+=40){
    for (let y =0; y <height; y+=40){
      let d= dist (mouseX, mouseY, x ,y);

      if (d<100){  // the distance for the mouse to circle
        fill (255, 150,0);
        ellipse (x,y, 20);}

        else // if the mouse is far then it will be rectangle
        {
          fill (0,0,255);
          rect (x, y, 15);
        }
      }
   }  
       
       
}

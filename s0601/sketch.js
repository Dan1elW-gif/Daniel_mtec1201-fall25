let toggle = false;


function setup() 
{
  createCanvas(500, 500);
  textAlign (CENTER);
  textSize(22)
}


function draw ()
{
  background (150);

  //iceCream 
  iceCream (50, 200, 65, 170, 230,180, "MINT");
  iceCream(200, 150, 75, 250, 170, 210, "BERRY!");
  iceCream(350, 300, 80, 250, 250, 210, "VANILLA");

  if ( toggle)
  {
    rectRayDisplay ( 25, 450, 50, 'W')
  }

  else
  {
    fill(0);
    text("clivk mouse", width/4, height - height/8)
  }
}

function iceCream (x, y,diameter, r, g, b, flavor)
{
  fill(170, 120, 35);
  triangle(x, y, x + 50, y , x +25, y + 100)
  fill(r,g,b);//ice cream flavor color
  ellipse(x + 25, y , diameter, diameter)
  text (flavor, x+25, y -50)


}

function rectRayDisplay(x, y, size, letter)
{
  fill(245,245, 60)
  rect(x, y ,size, size);

  for (let i = 0; 1 < size; i += 10)

  { //ray
     line(x, y, mouseX + i, mouseY + i);
   }
   
   fill(0);
   text(letter, x, y);
 }
 
 function mousePressed() 
 {
   toggle = !toggle;
 }

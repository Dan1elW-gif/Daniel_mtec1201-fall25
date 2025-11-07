

let y = 0



function setup()
{
  createCanvas (700,500)
  rectMode(CENTER)


}

function draw()
{
  background(127);
  let diameter = 50

  for (let x = 0; x <= width; x+= diameter)
  {
    ellipse (x, y, diameter, diameter)

  }

  y++;

  if (y >=  height + (diameter/2))

  { 
    y= -diameter;
  }

    preint ("y= :" +y);
}


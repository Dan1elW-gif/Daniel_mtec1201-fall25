// Daniel W - SS7
// This sketch is based on my SS6, but rewritten using the same OOP style from class demos.
// I put all circle behavior inside one class, and use an array to store many objects.

let circles = [];   


function setup() 
{
  createCanvas(700, 700);
}

function draw() 
{
  background(20);

  // loop through all circle objects
  for (let i = 0; i < circles.length; i++) 
  {
    circles[i].display(); 
    circles[i].move();    
  }
}

function mousePressed()
{
  
  circles.push(new Circle(mouseX, mouseY, 40));
}


class Circle
{
  constructor(tempX, tempY, tempSize)
  {
    this.x = tempX;             // object x position
    this.y = tempY;             // object y position
    this.size = tempSize;       // diameter of circle
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
    
  }

  display()
  {
    fill(100, 150, 255,); 
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  move()
  {
    this.x += this.speedX;
    this.y += this.speedY;

    // bounce left-right
    if (this.x > width || this.x < 0)
    {
      this.speedX *= -1;
    }

    // bounce up-down
    if (this.y > height || this.y < 0)
    {
      this.speedY *= -1;
    }
  }
}

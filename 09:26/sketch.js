let tuna;

function preload ()
{
tuna = loadImage ("images/tuna.png");
Gojo = loadImage ("images/Gojo.png")

}

function setup ()
{
  createCanvas(700,700);
  background(255);
  imageMode(CENTER)
}

function draw()
{
  background (225);

  image (tuna, width / 2, height / 2); // center tuna

  image (tuna, width / 2 +100, height-220);
	
  image (Gojo, mouseX, mouseY,100,100)
}


let tuna;

let opacity = 0
let fade = 1

function preload()
{

  tuna = loadImage("images/tuna.png")

}

function setup()
{
  createCanvas(500,500);
  background(255);
  imageMode(CENTER)
  textAlign(CENTER)
  textSize(88)

}

function draw ()
{
  background (255);

  fill (opacity);
  text("FISH", width / 2, height/ 4);
  opacity = opacity + fade;

  if (opacity > 255 || opacity <0 )
    fade = -fade;
}
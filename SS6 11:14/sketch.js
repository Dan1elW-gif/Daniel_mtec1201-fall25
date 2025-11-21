// Daniel W - SS6

let posX = [];   
let posY = [];   
let speedX = []; 
let speedY = []; 

function setup() {
  createCanvas(700, 700);  
}

function draw() {
  background(20);          

  
  for (let i = 0; i < posX.length; i++) {
    
   
    posX[i] += speedX[i];  
    posY[i] += speedY[i]; 

    
    if (posX[i] > width || posX[i] < 0) {  
      // if circle goes past right or left edge
      speedX[i] = -speedX[i];   // bounce back
    }

    if (posY[i] > height || posY[i] < 0) { 
      // if circle goes past bottom or top edge
      speedY[i] = -speedY[i];   // reverse y direction
    }

    
    fill(100, 150, 255);         // light blue color
    ellipse(posX[i], posY[i], 40); // draw the moving circle (size = 40)
  }
}

function mousePressed() {
 
  posX.push(mouseX);  // store new x position
  posY.push(mouseY);  // store new y position

  
  speedX.push(random(-3, 3));  // random left/right movement
  speedY.push(random(-3, 3));  // random up/down movement
}

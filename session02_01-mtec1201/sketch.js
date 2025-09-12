/*
////////////////////////////
//getting know to 
*/

function setup() {
    //you must include setup function to run code.
    //only include one setup function per sketch
    createCanvas (700,400);
    //set size of canvas area with Wide & Height

    // background(200); // black and white background
    background(0, 127, 0); //RGB background 

    //draw a line from points (500, 50) to (10,300)
    line(500,50,10,300);

    //line function needs starting
    //line(x1,y1,x2,y2)
    triangle(500,300,600,400,200,400);
    //fill cilir
     fill(0,0, 255)

    stroke(255,255,50);

    strokeWeight(20);

    ellipse(400, 300, 200, 200)
    //ellipse (x,y,w,h)
    
  
}


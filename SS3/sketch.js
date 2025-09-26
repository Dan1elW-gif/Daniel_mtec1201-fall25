
 // SS3_Yan Chak Daniel,Wan
 // roll the rice
 //pressed mouse button to roll the dice
  
  
  
  
  
  let DiceNumber = 1

function setup()
{
  createCanvas(700, 700);
  rectMode(CENTER);

}

function draw (){
  background (200)





  fill(255);
  rect(350, 350, 200, 200);

  // dicenumber 1
  fill(0)
  
  if (DiceNumber === 1) 
    
  {
    ellipse(350,350,20,20);
  }
//dicenumber 2
  else if (DiceNumber === 2)
  
  {
    ellipse(width/2 -50, height/2 ,20, 20 );
    ellipse(width/2 +50, height/2 ,20, 20);
  }

  //diceNumber 3

  else if (DiceNumber === 3)
  {
     ellipse(width/2 - 50, height/2 - 50, 20, 20);//top left
    ellipse(width/2, height/2, 20, 20); //middle
    ellipse(width/2 + 50, height/2 + 50, 20, 20); //

  }
  
  else if (DiceNumber === 4)
  {
    ellipse (width/2 - 50, height/2 - 50, 20,20 )
    ellipse (width/2 - 50, height/2 + 50, 20,20 )
    ellipse (width/2 + 50, height/2 - 50, 20,20 )
    ellipse (width/2 + 50, height/2 + 50, 20,20 )


  }

  else if (DiceNumber === 5)
  {
    ellipse (width/2, height/2, 20,20)// middle
    ellipse (width/2 - 50, height/2 - 50, 20,20 )
    ellipse (width/2 - 50, height/2 + 50, 20,20 )
    ellipse (width/2 + 50, height/2 - 50, 20,20 )
    ellipse (width/2 + 50, height/2 + 50, 20,20 )

  }

  else if (DiceNumber === 6)
  {
    ellipse (width/2 - 50, height/2 - 50, 20,20 )
    ellipse (width/2 - 50, height/2, 20,20 )
    ellipse (width/2 - 50, height/2 + 50, 20,20 )
   

    ellipse (width/2 + 50, height/2 + 50, 20,20 )
    ellipse (width/2 + 50, height/2, 20,20 )
    ellipse (width/2 + 50, height/2 - 50, 20,20 )
  }



  


}
function mousePressed()
  {
    DiceNumber = int(random(1,6));

    print (DiceNumber)
  }


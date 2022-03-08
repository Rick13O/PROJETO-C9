var box

function setup() {
  box = createSprite(200,200,30,30)
  box.shapeColor = "pink"

  createCanvas(400,400);
}

function draw() 
{
  background(255,255,0);

  if(keyIsDown(RIGHT_ARROW))
  {
    background(255,0,0);
  }

  if(keyIsDown(LEFT_ARROW))
  {
    background(0,0,255);
  }

  if(keyIsDown(UP_ARROW))
  {
    background(0,255,0);
  }

  if(keyIsDown(DOWN_ARROW))
  {
    background(128,0,128);
  }


  drawSprites();
}





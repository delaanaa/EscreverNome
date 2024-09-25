function setup()
{
  createCanvas(1000, 1000);
  background(220);
}

function draw() 
{
    rect(0,0,100,100)
       stroke("purple");
  fill("pink");
  strokeWeight(5)
  
  if(mouseIsPressed)
    {
    rect(mouseX,mouseY,15,15);
  }
}
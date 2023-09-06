function setup() {
  createCanvas(900, 900);
   background("white");
}

function draw() {
  stroke("blue")
  fill("pink")
 
  
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,30,30)
  }
}
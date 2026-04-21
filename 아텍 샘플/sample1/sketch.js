let xPos = 300;
let yPos = 50;
let xDir; //direct
let diam; //diameter

let padX;
let padWidth;


function setup() {                                 
  createCanvas(windowWidth,windowHeight);
  xDir = 5;
  diam = 50;
  yDir = 5;
}
  

function draw() {
  background(220);

  fill("red");
  ellipse(xPos,yPos,diam,diam);
  yPos = yPos + yDir;
  
  
  fill("yellow");                                 
  padX = mouseX - padWidth/2;                     
  padWidth = 200;
  rect(padX, height-30, padWidth,30);

  
  //패드에 닿으면 튕기기
  if(xPos > padX && xPos < padX + padWidth && yPos > height - 30 - diam/2){
    yDir = yDir * -1;
  } 
  
  //천장에 닿으면 튕기기
  if(yPos - diam/2 < 0){
    yDir = yDir * -1;
  }
}


  //키보드로 공 움직이기
function keyPressed(){
   if(keyCode === LEFT_ARROW){
    xPos = xPos - 100; 
    }else if(keyCode === RIGHT_ARROW){
      xPos = xPos + 100; 
     } 
}
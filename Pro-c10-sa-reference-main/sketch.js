var box;

function setup() {
  createCanvas(400,400);
ship_image=loadImage("SHIP.png")
ship=createSprite(100,100,400,400)
ship.addImage(ship_image)
ship.velocityX=-5
}

function draw(){
  background("white")
  drawSprites();
  if(ship.x<0){
    ship.x=400
  }
}





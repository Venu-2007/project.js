
function preload(){
seaImg = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaImg)
  spriteName.addImage(shipImage)
}

function draw() {
  background("blue");
 if(sea.x < 0){
   sae.x = sea.width/2;
 }
}
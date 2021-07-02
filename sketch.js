var bgimg,bg
function preload(){
  bgimg = loadImage("snow3.jpg")
  snowimg = loadImage("snow4.webp")
  
}
function setup() {
  createCanvas(1000,1000);
  bg = createSprite(400,200,800,400);
  createSprite(400, 200, 50, 50);
  bg.addImage("bg",bgimg);
  snowGRP = new Group(); 

}

function draw() {
  drawSprites();
  snowflake();
}
function snowflake(){
  if(frameCount%60===0){
    snow=createSprite(400,-20,20,20);
    snow.addImage("snow", snowimg);
    snow.scale = 0.25;
    snow.x=Math.round(random(0,1000));
    snow.velocityY = 8;
    snow.setLifetime=50;
    
    snowGRP.add(snow);
  }
}

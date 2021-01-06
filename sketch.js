
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  var survivalTime = 0;
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(100, 320,10, 10);
  monkey.addAnimation("mon", monkey_running);
  monkey.scale = 0.16;
  
  ground = createSprite(0, 390, 800,10);
  ground.velocityX = -7;
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  
  background(255);
  
 
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y>=150){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY= monkey.velocityY+0.5;
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime, 100,50);
  
  drawSprites();
  spawnBananas();
  spawnObstacles();
}

function spawnBananas(){
  if(frameCount%80 == 0){
    banana = createSprite(400,200,10,10);
    banana.y = Math.round(random(100,200))
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 70;
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount%300 == 0){
    obstacle = createSprite(400, 335, 10, 10);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -5;
    obstacle.lifetime = 80;
    obstacleGroup.add(obstacle);
  }
}

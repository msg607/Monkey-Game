var bgrnd, backImg, oImg, ground;
var obstacleGroup, foodGroup;
var Banana;
var score;
var monkey, mRunning;




function preload(){
  backImg=loadImage("jungle.jpg");
  oImg=loadImage("stone.png");
  Banana=loadImage("banana.png");
  mRunning=loadAnimation("Monkey1.png","Monkey2.png","Monkey3.png","Monkey4.png","Monkey5.png","Monkey6.png","Monkey7.png","Monkey8.png","Monkey9.png","Monkey10.png");
     
}


function setup() {
  createCanvas(500, 400);
  
  score=0;
   
  monkey=createSprite(50,300,10,10);
  monkey.addAnimation("running",mRunning);
  monkey.scale=0.17;
  monkey.depth=4;
  
  bgrnd = createSprite(300,160,70,80);
  bgrnd.addImage("bimg",backImg);
  bgrnd.depth=3;
  bgrnd.velocityX=-4;
  
  ground = createSprite(250,370,600,20);
  ground.visible=false;
  
  foodGroup = createGroup();
  obstaclesGroup = createGroup();
 
}



function draw() {
  background(220);
  
   
 
  
  monkey.collide(ground);
  
  
   if(bgrnd.x<0)
  {bgrnd.x=bgrnd.width/2;}

  if(keyDown("space") && monkey.y >= 260)
  {monkey.velocityY=-10; }
  monkey.velocityY=monkey.velocityY+0.5;
  
  food();
  rocks();
  
  if(foodGroup.isTouching(monkey)){
    score=score+2;
    foodGroup.destroyEach(); }
  
  if(monkey.isTouching(obstaclesGroup)){
    monkey.scale=0.1;}

   switch(score){
   case 10: monkey.scale=0.19;
   break;
   case 20: monkey.scale=0.21;
    break;
   case 30: monkey.scale=0.23;
     break;
   case 40: monkey.scale=0.25
       break;
     default: break;  }
  
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,300,50);
  

}

function food(){
   if(frameCount%150===0)
   {var rand = Math.round(random(190,310));
    var food = createSprite(590,310,10,10);
    food.addImage("food",Banana);
    food.velocityX=-4;
    food.scale=0.06;
    food.y=rand;
    food.lifetime=250;
    foodGroup.add(food);
   }  
}

function rocks(){
  if(frameCount%300===0){
    var stone = createSprite(590,350,10,10);
    stone.addImage("obstacle",oImg);
    stone.scale=0.12;
    stone.velocityX=-4;
    stone.lifetime=250;
    obstaclesGroup.add(stone);
  }
}



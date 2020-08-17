var horse, horseImage;
var ground, groundImage;

function preload(){
    groundImage = loadImage("ground.png");
    horseImage = loadImage("horse.png")
}
function setup() {
    createCanvas(1024, 576);
    
    ground = createSprite(512,200,1024,576);
    ground.addImage("ground",groundImage);
    ground.scale = 3;
    //ground.x = ground.width /2;
    ground.velocityX = -4;

    horse = createSprite(50,180,20,50);
    horse.addImage("horse", horseImage);
    horse.scale = 0.25;
    //horse.shapeColor = "blue";
    //horse.addAnimation("running", horse_running);
    //horse.scale = 0.5;
       
    // cloudsGroup = new Group();
    // obstaclesGroup = new Group();
    
    score = 0;
  }

  function draw() {
    background("white");
    
    //score = score + Math.round(getFrameRate()/60);
    //text("Score: "+ score, 500,50);
    
    if(keyDown("space")) {
      horse.velocityY = -10;
    }
    
    horse.velocityY = horse.velocityY + 0.8
  
    if (ground.x<0){
      ground.x = 512;
    }
    
    // spawnClouds();
    // spawnObstacles();
  }
  function spawnHurdles() {
    if(frameCount % 60 === 0) {
      var hurdle = createSprite(600,165,10,40);
      obstacle.velocityX = -4;
      
      //generate random obstacles
      var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: hurdle.addImage(hurdle1);
                break;
        case 2: hurdle.addImage(hurdle2);
                break;
        default: break;
      }
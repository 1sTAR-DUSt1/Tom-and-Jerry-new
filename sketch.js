var backgroundSprite, backgroundImg;
var cat, catImg1, catImg2, catImg3, mouse, mouseImg1, mouseImg2, mouseImg3;

function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    backgroundSprite=createSprite(500,400);
    backgroundSprite.addImage("thebackground", backgroundImg);
    backgroundSprite.scale = 0.8;
    //create tom and jerry sprites here
    cat=createSprite(800, 600);
    cat.addAnimation("tom", catImg1);
    cat.scale = 0.11;
    cat.addAnimation("happyCat", catImg3);
    cat.setCollider("circle", 0, 0, 100);
    cat.debug = true;

    mouse=createSprite(400, 600);
    mouse.addAnimation("jerry", mouseImg1);
    mouse.changeAnimation("jerry");
    mouse.addAnimation("teasing", mouseImg2);
    mouse.scale =0.08;
    mouse.addAnimation("happyMouse", mouseImg3);
    mouse.setCollider("circle", 0, 0, 70);
    mouse.debug = true;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x < mouse.width/2+cat.width/2 &&
        mouse.x-cat.x < mouse.width/2+cat.width/2 &&
        cat.y-mouse.y < mouse.height/2+cat.height/2 &&
        mouse.y-cat.y < mouse.height/2+cat.height/2){
    
      cat.changeAnimation("happyCat");
      cat.velocityX = 0;
      
      mouse.changeAnimation("happyMouse");
    }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      mouse.changeAnimation("teasing");

  }

  if(keyCode === LEFT_ARROW){
      cat.addAnimation("walking", catImg2);  
      cat.changeAnimation("walking");
      cat.velocityX = -2;
    }


}

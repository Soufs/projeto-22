var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fairy, imgfairy;
var voice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    imgfairy = loadAnimation("images/fairyimage1.png","images/fairyimage2.png");
    voice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
   // voice.play();

    //criar sprite de fada e adicionar animação para fada
    fairy = createSprite(50,480);
    fairy.addAnimation("flying",imgfairy);
    fairy.scale = 0.2;
    fairy.setCollider("rectangle", 200, 200 , 550, 450);
    //fairy.debug = true;

    star = createSprite(600,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star.velocityY = 3;
    //star.debug = true;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
}

function draw() {
 background(bgImg);
 
 //fairy
 if(keyDown(RIGHT_ARROW)){
     fairy.x = fairy.x + 4;
 }

 if(keyDown(LEFT_ARROW)){
     fairy.x = fairy.x - 4;
 }

 if(star.isTouching(fairy)){
     star.setVelocity(0,0);
 }


 drawSprites();
}


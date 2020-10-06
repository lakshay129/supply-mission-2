var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5,friction:1, isStatic:true});
	World.add(world,packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	rect1=new goal(400,640,20,200);
	rect2= new goal(380,640,200,20);
	rect3= new goal(420,640,200,20);

	groundSprite=createSprite(400,650, width,10);
	groundSprite.shapeColor=color(255)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("black");
 

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  rect1.display();
  rect2.display();
  rect3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW){
	 Matter.Body.setStatic(packageBody,false);
	console.log("inside keyPressed");
  }
}




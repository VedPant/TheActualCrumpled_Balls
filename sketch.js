
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	Paper1=new Paper(100,100);
	Dustbin1=new Dustbin(100,400,70,10);
	ground1=new Ground(200,height,400,20);

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Paper1.display();
  Dustbin1.display();
  ground1.display();

  drawSprites();
 
}

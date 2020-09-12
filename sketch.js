
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

	Paper1=new Paper(100,100);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Paper1.display();

  drawSprites();
 
}




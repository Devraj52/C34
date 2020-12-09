
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1280, 560);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	// created ground.
	ground=new Ground(640,560,1280,20);
	// create Pendulams.
	pen1=new Pendulam(640,300,60,60);
	hang1=new Hang(pen1.body,{x:50,y:0});
	pen2=new Pendulam(440,300,60,60)
	hang2=new Hang(pen2.body,{x:280,y:0})
	


	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  ground.display();
  pen1.display();
  hang1.display();
  pen2.display();
  hang2.display();
}

function mouseDargged(){
	Matter.body.setPosition(pen1.body,{x:mouseX,y:mouseY});
}


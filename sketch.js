const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
     paper = new Paper(100,580,40);
     
     block1 = new Block(580,600,20,100);
     block2 = new Block(630,630,100,20);
     block3 = new Block(680,600,20,100);
     
     ground = new Block(400,640,800,20);

	Engine.run(engine);
  
}


function draw() {

  background("green");
                 
                                   
  paper.display();

  block1.display();
  block2.display();
  block3.display();
  ground.display();


 drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {

	Matter.Body.applyforce(paper.body,paper.body.position,{x: 85, y: -85});
	
  }
}

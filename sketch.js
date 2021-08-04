const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground,ground2,ground3;


function setup() {
	createCanvas(800, 400);

	ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(280,350,10,ball_options);
	World.add(world,ball);

	ground =new Ground(400,390,800,10)
	ground2 =new Ground(760,360,5,60)
	ground3 =new Ground(680,360,5,60)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ellipse(ball.position.x,ball.position.y,10);

  drawSprites();
 Engine.update(engine);

 ground.display();
ground2.display();
ground3.display();
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:0});
    }
}


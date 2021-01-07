
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
 
	boy = loadImage("images/boy.png");


}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   stoneObj = new Stone(230,420,20);
  
   treeObj = new Tree(1000,370,500,500);
   
  

   mango1 = new Mango(1000,100,25);
   mango2 = new Mango(1100,120,25);
   mango3 = new Mango(1020,230,25);
   mango4 = new Mango(1150,250,25);
   mango5 = new Mango(900,230,25);
   mango6 = new Mango(1010,300,25);

   launcherObj = new Launcher(stoneObj.body,{x:235,y:520}); 

   groundObj = new Ground(600,700,1500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(boy,200,540,200,200);

  stoneObj.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  launcherObj.display();
  groundObj.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);

  
  drawSprites();

 
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcherObj.fly();
}


function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}




























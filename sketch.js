
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render =  Matter.Render;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango0;
var stoneObj,connect,boy1,ground,tree1,engine,world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	tree1 = new tree()

	boy1 =  new boy()

	ground = new Ground(400,690,900,20)

	stoneObj = new stone(130,470,30)
	connect = new Connector(stoneObj.body,{x:120,y:470})

	mango1 = new Mango(700,290,20)
	mango2 = new Mango(670,220,20)
	mango3 = new Mango(600,320,20)
	mango4 = new Mango(600,250,20)
	mango5 = new Mango(550,200,20)
	mango6 = new Mango(510,305,20)
	mango7 = new Mango(750,350,20)
	mango8 = new Mango(550,382,20)
	mango9 = new Mango(640,163,20)
	mango10 = new Mango(658,351,20)
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  Engine.update(engine)

  textSize(25);
  text("Press SpaceBar to get a second Chance to Play!",50 ,50);


  tree1.display()
  boy1.display()
  ground.display()
  stoneObj.display()
  connect.display()

	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	mango6.display()
	mango7.display()
	mango8.display()
	mango9.display()
	mango10.display()
  
  drawSprites();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
		connect.Fly()
	}
	function detectollision(lstone,lmango){
		
	  mangoBodyPosition=lmango.body.position
	  stoneBodyPosition=lstone.body.position
	  
	  var distance=int(dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y));
	  
		  if(distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
	}

	function keyPressed(){
		if(keyCode === 32){
			Matter.Body.setPosition(stoneObj.body,{x:120,y:470})
			connect.attach(stoneObj.body)
		}
	}




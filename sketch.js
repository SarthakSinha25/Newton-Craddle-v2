

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var newtonPendulem1,newtonPendulem2,newtonPendulem3,newtonPendulem4,newtonPendulem5,box,bob1,bob2,bob3,bob4;
var pendulem

function preload()
{
	
}

function setup() {
	 createCanvas(800, 700);


	 engine = Engine.create();
	 world = engine.world;

	 box = new Rod(200,50,300,50);        


	 bob1 = new Bob(80,400,30);                
	 bob2 = new Bob(140,400,30);
	 bob3 = new Bob(200,400,30);
	 bob4 = new Bob(260,400,30);  
	 bob5 = new Bob(320,400,30);    

	 //variable names start with small letter
	 newtonPendulem1 = new Pendulem(bob1.body,box.body,80,75); //problem is faced in this line--come to Pendulum
	 newtonPendulem2 = new Pendulem(bob2.body,box.body,140,75);  //yes mam ok
	 newtonPendulem3= new Pendulem(bob3.body,box.body,200,75);
	 newtonPendulem4 = new Pendulem(bob4.body,box.body,260,75);
	 newtonPendulem5 = new Pendulem(bob5.body,box.body,320,75);

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  box.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  newtonPendulem1.display();
  newtonPendulem2.display();
  newtonPendulem3.display();
  newtonPendulem4.display();
  newtonPendulem5.display();
  drawSprites();
 
}
//its telling "key is pressed" OK
function keyPressed() { 
	if (keyCode === UP_ARROW) {
		console.log("key is pressed") //chck if on pressing key you see output in browser
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100, y:-95}); //Check?
   }
}
//nothing.. ammm alright ---OK
//let me chek one mor e thing. if still doesnt work then just upload on github and proceed towards next project
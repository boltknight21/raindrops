const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var raindrops;

  function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  raindrops= new raindrops(1200,400);
}

function draw() {
  //background(255,255,255);
  background(0);
  Engine.update(engine);
  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig3.display();
  log3.display();

  box5.display();
  log4.display();
  log5.display();

  bird.display();
}
  drawSprites();

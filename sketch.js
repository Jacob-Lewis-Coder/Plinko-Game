const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;



function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 780, 450, 10);
  border_left = new Border(10, 400, 10, 800);
  border_right = new Border(470, 400, 10, 800);
  
  for(var z = 30; z<=width; z = z + 80){
    divisions.push(new Division(z,635,10,divisionHeight))
  }

  for(var a = 65; a<=width; a = a + 70){
    plinko.push(new Plinko(a, 100, 10));
  }

  for(var b = 25; b<=width; b = b + 70){
    plinko.push(new Plinko(b, 200, 10));
  }

  for(var c = 65; c<=width; c = c + 70){
    plinko.push(new Plinko(c, 300, 10))
  }

  for(var d = 25; d<=width; d = d + 70){
    plinko.push(new Plinko(d, 400, 10))
  }
}

function draw() {
  background("black");  
 Engine.update(engine);

ground.display();
border_left.display();
border_right.display();

particle();

for(var j = 0;j<divisions.length;j++){
  divisions[j].display();
}

for(var l = 0; l<plinko.length; l++){
  plinko[l].display();
}
for(var n = 0; n<particles.length; n++){
  particles[n].display();
}
}

function particle(){
  if(frameCount%20===0){
    particles.push(new Particle(random(width/2-200, width/2+200), 10, 10))
  }
}

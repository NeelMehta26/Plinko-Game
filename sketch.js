var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <= width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j = j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <= width - 10; j = j + 50) {
       plinkos.push(new Plinko(j, 375));
    }

  score = 0;    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-50, width/2+50), 10, 10));
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   text('SCORE: ' + score, 50, 50);

   text('50', 30, 600);

   text('50', 110, 600);

   text('50', 190, 600);

   text('50', 270, 600);

   text('10', 350, 600);

   text('10', 430, 600);

   text('10', 510, 600);

   text('20', 590, 600);

   text('20', 670, 600);

   text('20', 750, 600);

   if(particles.x < 300 && particles.x > 0){
     score = score + 50;
   }

   if(particles.x < 540 && particles.x > 301){
     score = score + 10;
   }

   if(particles.x < 800 && particles.x < 541){
     score = score + 20;
   }
}
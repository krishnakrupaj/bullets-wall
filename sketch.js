var wall,thickness;
var speed,weight,bullet;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 40, 10);
  bullet.shapeColor = color(255,255,255)
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness,height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  damage = weight*speed*speed/2*thickness*thickness*thickness;
}

function draw() {
  background(225,225,255);
  bullet.collide(wall);
  bullet.velocityX = speed;


  if(hascollided(bullet,wall)){
    bullet.velocityX = 0;

  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }
}

  drawSprites();
}

function hascollided(lbullet,lwall){
bulletRightEdge = lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}

var bullet, wall, thickness;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 15);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);
}

function draw() {
  background(0,0,0); 

  bullet.depth = wall.depth + 1;

if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    console.log(damage);
      if(damage < 10)
      {
        wall.shapeColor = "green";
      }

      if(damage > 10)
      {
        wall.shapeColor = "red";
      }

    }

  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  else
  {
    return false;
  }
}
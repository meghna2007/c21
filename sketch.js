var fixedRect, movingRect;
var car ,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100, 100, 80, 20);
  car.shapeColor = "yellow";
  car.velocityX = 2;
  car.debug = true;

  wall= createSprite(1000, 100, 20, 80);
  wall.shapeColor = "blue";
  wall.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green"; 
  }

  if(isTouching(car,wall)){
    car.shapeColor="red";
  }

  else{
    car.shapeColor = "yellow";
  }
  bounceoff(car,wall);


  drawSprites();
}


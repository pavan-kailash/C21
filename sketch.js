var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car= createSprite(200, 200,80,80)
  car.velocityX=4
  wall = createSprite(1000, 200, 10, 100)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
isTouching(movingRect,fixedRect)
 BounceOff(car,wall)
  drawSprites();
}

function isTouching(obj1,obj2){

  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
  obj1.shapeColor = "red";
  obj2.shapeColor = "red";
}
else {
  obj1.shapeColor = "green";
  obj2.shapeColor = "green";
}

}

function BounceOff(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2){
      obj1.velocityX=-1*obj1.velocityX
    }
}
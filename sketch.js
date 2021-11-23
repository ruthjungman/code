var xPos = 10;
var yPos = 10;
var circY = 40;
var circX = 40;
var circA = 300;
var circB = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(29, 40, 115);

    fill(255,255,255);
    rect(250,375, 50, 30);
    rect(175,400, 50, -130);
    rect(50,400,60,-90);
    //moon
    fill(255, 242, 0);
    ellipse(250, 50, 60,60);
    //shooting stars
    ellipse(xPos, yPos, 20, 20);
    ellipse(circX,circY, 20,20);
    fill(224, 139, 139);
    ellipse(circA, circB, 15,15);
    fill(209, 182, 209);
    rect(200,400,60,-78);
    rect(100,400,30,-200);
    
    xPos = xPos + 1;
    yPos = yPos +1;
    circX = circX + 2;
    circY = circY +1;
    circA = circA + -1;
    circB = circB +1;
};

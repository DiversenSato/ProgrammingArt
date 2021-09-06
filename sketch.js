//variabler
var c = 255;
var y = 6.5;
var mouthCol;
var s = 1;
var SkinColour;  

var gameState = 1;

function setup() {
  createCanvas(400, 400);
  SkinColour = color(random(0,255), random(0,255), random(0,255));
  mouthCol = color(255, 0, 0);
}

function draw() {
  background(0,200,255);
  rectMode(CENTER);
  //Neck
  fill(245, 200, 200);
  rect(200, 300, 50, 100);

  //Body and arm?
  fill(SkinColour);
  rect(200, 350, 100, 100);

  //Head
  fill(245, 200, 200);
  ellipse(200, 200, 100, 150);

  ellipseMode(CENTER);

  //Mouth
  push();
  if (gameState == 1) {
    strokeWeight(1);
    fill(mouthCol);
    ellipse(200, 225, 50, 25);
  }
  pop();

  //Nose
  fill(245, 200, 200);
  triangle(180, 195, 220, 195, 200, 190);

  //Left and right eye
  fill(255);
  ellipse(175, 165, 20, 20);
  ellipse(225, 165, 20, 20);

  //Left and right eyebrows
  line(175, 155, 165, 140);
  line(225, 155, 235, 140);

  //Cloud
  push();
  fill(c);
  noStroke();
  ellipse(200,height/y,220,100)
  ellipse(200,height/y,110,125)
  ellipse(180,height/y,100,120)
  ellipse(150,height/y,100,95)
  ellipse(240,height/y,100,120)
  ellipse(260,height/y,100,115)
  ellipse(260,height/y,150,100)
  ellipse(260,height/y,100,120)
  pop();
}

function mouseClicked() {
    if(mouseX >= 90 && mouseX <= 330 && mouseY >= 0 && mouseY <= 121) {
      mouthCol = color(245, 200, 200);
      gameState == 2;
      s = 0;
      c = 125;
      Tree(75,400,50);
    }
}

function Tree(x, y, len) {
  push();
  translate(x, y);
  tree(len);
  pop();
}

function tree(len) {
  if (len >= 15) {
    stroke(0x4b, 0x37, 0x1c);
  }
  let rot = random(6, 20);
  strokeWeight(map(len, 150, 4, 8, 2));
  line(0, 0, 0, -len);
  push();
  if (len < 15) {
    stroke(0, 255, 0);
  }
  translate(0, -len);
  rotate(radians(rot));
  if (len > 4) {
    tree(len*0.75);
  }
  pop();
  translate(0, -len);
  rotate(radians(-rot));
  if (len > 4) {
    tree(len*0.75);
  }
}
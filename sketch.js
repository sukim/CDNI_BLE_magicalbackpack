// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var mover;
var mySound = new buzz.sound('rhodes_loop.wav');
var canvas;
var img2;
var backdrop;

function setup() {
  canvas = createCanvas(1231,748);
  mover = new Mover(); 
  backdrop =loadImage("img/desert.png");
  img2 = loadImage("img/ant.png");
  console.log("img2 in setup");
  canvas.position(0,0);
}

function draw() {
  // background(51);

  imageMode(CENTER);
  image(backdrop, 400, 400, width, height);
  image(img2, 1231, 748);
    //somehow changing this got rid of 2nd ant eater
  mover.update();
  mover.checkEdges();
  mover.display(); 
}


function mousePressed() {
  // Using the third-party library to call play() on the buzz object
  mySound.play();
}


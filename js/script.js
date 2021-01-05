/**************************************************
Template p5 project
Sharon Ku

Here is a description of this template p5 project.
**************************************************/

// canvas that contains animated content
let canvas;

// paragraph of text that contains description about me
let paragraph;

// background color: midnight blue
let bg = {
  r: 59,
  g: 143,
  b: 161,
  // hex code: #3b8fa1
};

// contains ferris wheel images
let ferrisWheelImage = undefined;
let ferrisWheelStandImage = undefined;

// ferris wheel
let ferrisWheel;

// preload()
//
// Preloads assets (images, sounds, fonts)
function preload() {
  // image of wheel
  ferrisWheelImage = loadImage(`assets/images/ferrisWheel.png`);
  // image of stand that holds wheel
  ferrisWheelStandImage = loadImage(`assets/images/ferrisWheelStand.png`);
}


// setup()
//
// Description of setup() goes here.
function setup() {
  // Create a canvas that takes up full screen
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);

  // Create a paragraph containing description text
  paragraph = createP(`I am a graphic designer and illustrator based in Montreal.`);
  paragraph.position(width/2, height/2);

  // Create a new ferris wheel
  ferrisWheel = new FerrisWheel(ferrisWheelImage, ferrisWheelStandImage);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  // Set bg color
  background(bg.r, bg.g, bg.b);

  // Display and rotate ferris wheel
  ferrisWheel.displayAndRotate();


}

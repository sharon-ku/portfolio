/**************************************************
Template p5 project
Sharon Ku

Here is a description of this template p5 project.
**************************************************/


// background color: midnight blue
let bg = {
  r: 33,
  g: 53,
  b: 69,
};

// contains ferris wheel images
let ferrisWheelImage = undefined;

// ferris wheel
let ferrisWheel;

// preload()
//
// Preloads assets (images, sounds, fonts)
function preload() {
  ferrisWheelImage = loadImage(`assets/images/ferrisWheel.png`);
}


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,500);
  // Create a paragraph containing description text
  createP(`I am a graphic designer and illustrator based in Montreal.`);

  // Create a new ferris wheel
  ferrisWheel = new FerrisWheel(ferrisWheelImage);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  // Set bg color
  background(bg.r, bg.g, bg.b);

  // Display and rotate ferris wheel
  // ferrisWheel.rotate();
  ferrisWheel.displayAndRotate();
  // image(ferrisWheelImage, 0, 0);


}

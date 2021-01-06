/**************************************************
Template p5 project
Sharon Ku

Here is a description of this template p5 project.
**************************************************/

// canvas that contains animated content
let canvas;

// paragraph of text that contains description about me
let paragraph;

// background color: navy blue
let bg = {
  r: 55,
  g: 125,
  b: 140,
  // hex code: #377d8c
};

// ferris wheel
let ferrisWheel;

// contains ferris wheel images
let ferrisWheelImage = {
  wheels: [],
  numWheelImages: 3,
  stand: undefined,
  seat: undefined,
};

// array that contains ferris wheel seats
let ferrisWheelSeats = [];
// number of ferris wheel seats
let numSeats = 6;
// angle used to position seat relative to wheel's center
let seatInitialAngle = 0;

// preload()
//
// Preloads assets (images, sounds, fonts)
function preload() {
  // store images of wheel inside ferrisWheelImage.wheels array
  for (let i = 0; i < ferrisWheelImage.numWheelImages; i++) {
    let loadedImage = loadImage(`assets/images/ferrisWheel${i}.png`);
    ferrisWheelImage.wheels.push(loadedImage);
  }

  // image of stand that holds wheel
  ferrisWheelImage.stand = loadImage(`assets/images/ferrisWheelStand.png`);
  // image of ferris wheel seat
  ferrisWheelImage.seat = loadImage(`assets/images/ferrisWheelSeat.png`);
}


// setup()
//
// Description of setup() goes here.
function setup() {
  // Remove strokes on all shapes
  noStroke();

  // Hide cursor
  noCursor();

  // Create a canvas that takes up full screen
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);

  // Create a paragraph containing description text
  paragraph = createP(`I am a graphic designer and illustrator based in Montreal.`);
  paragraph.position(width/2, height/2);

  // Create a new ferris wheel
  ferrisWheel = new FerrisWheel(ferrisWheelImage.wheels, ferrisWheelImage.stand);

  // Create 6 new ferris wheel seats and push to ferrisWheelSeats array
  for (let i = 0; i < numSeats; i++) {
    // The seat's initial angles are equally spaced across the perimeter of the ferris wheel:
    seatInitialAngle = i * (TWO_PI / numSeats) + PI/2;
    // Create a new seat positioned at the initial angle
    let ferrisWheelSeat = new FerrisWheelSeat(ferrisWheelImage.seat, seatInitialAngle);
    // Push to new seat to the ferrisWheelSeats array
    ferrisWheelSeats.push(ferrisWheelSeat);
  }
}

// windowResized()
//
// Resize canvas every time window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  // Set bg color
  background(bg.r, bg.g, bg.b);

  // Display ferris wheel seat
  for (let i = 0; i < ferrisWheelSeats.length; i++) {
    let ferrisWheelSeat = ferrisWheelSeats[i];
    ferrisWheelSeat.display(ferrisWheel.x, ferrisWheel.y, ferrisWheel.wheel.radius);
  }

  // Display and rotate ferris wheel
  ferrisWheel.displayAndRotate();

  if (mouseIsPressed) {
    ferrisWheel.hover();
  }

  // Display circle on mouse's position
  push();
  fill(255);
  ellipse(mouseX, mouseY, 20);
  pop();

}

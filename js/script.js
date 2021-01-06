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

// globe that houses unicorn
let globe;

// stores image of globe and globe base
let globeImage = undefined;
let globeBaseImage = undefined;

// array that stores snowflakes
let snowflakes = [];
// number of snowflakes inside globe
let numSnowflakes = 20;

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
  // image of globe
  globeImage = loadImage(`assets/images/globe.png`);
  // image of globe base
  globeBaseImage = loadImage(`assets/images/globeBase.png`);

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
  // Place canvas behind DOM elements
  canvas.style(`z-index`, `-1`);

  // Create a paragraph containing description text
  // paragraph = createP(`I am a graphic designer and illustrator based in Montreal.`);
  // paragraph.position(width/2, height/2);

  // Create a new globe
  globe = new Globe(globeImage, globeBaseImage);

  // Create new snowflakes and store them in snowflakes array
  for (let i = 0; i < numSnowflakes; i++) {
    let snowflake = new Snowflake(globe);
    snowflakes.push(snowflake);
  }

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

  // Display snowflakes, let them fall, and wrap to top when they reach the bottom of the globe
  releaseSnowflakes();

  // Display globe
  globe.displayBase();
  globe.displayGlobe();

  // Create a ferris wheel that carries all these behaviours:
  // Display rotating ferris wheel and seats that revolve around it
  // And create a lights animation when mouse hovers over ferris wheel
  createFerrisWheel();

  // Display circle on mouse's position
  push();
  fill(255);
  ellipse(mouseX, mouseY, 20);
  pop();



}

// Display snowflakes, let them fall, and wrap to top when they reach the bottom of the globe
function releaseSnowflakes() {
  for (let i = 0; i < snowflakes.length; i++) {
    let snowflake = snowflakes[i];
    // let snowflakes fall
    snowflake.fall();

    // only display snowflakes when it is inside the globe
    if (snowflake.isInsideGlobe(globe)) {
      snowflake.display();
    }

    // wrap snowflake back to top once it reaches bottom of globe
    snowflake.wrapBackToTop(globe);
  }
}

// Display rotating ferris wheel and seats that revolve around it
// And create a lights animation when mouse hovers over ferris wheel
function createFerrisWheel() {
  // Display ferris wheel seats
  for (let i = 0; i < ferrisWheelSeats.length; i++) {
    let ferrisWheelSeat = ferrisWheelSeats[i];
    ferrisWheelSeat.display(ferrisWheel);
  }

  // Display and rotate ferris wheel
  ferrisWheel.displayAndRotate();

  // If mouse overlaps with ferris wheel, cue lights animation by switching between wheel images
  if (ferrisWheel.overlapsWithMouse()) {
    ferrisWheel.animateWheelImages();
  }
}

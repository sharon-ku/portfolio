/**************************************************
Template p5 project
Sharon Ku

Here is a description of this template p5 project.
**************************************************/

// canvas that contains animated content
let canvas;
let canvasX;
let canvasY;

// paragraph of text that contains description about me
let paragraph;

// background color: navy blue
let bg = {
  r: 63,
  g: 115,
  b: 140,
  // hex code: #3f738c
};

// floor
let floor;
// floor width
let floorWidth = 100;

// mouse information that follows cursor
let mouse = {
  x: 0,
  y: 0,
  size: 20,
};

// plant
let plant;

// globe that houses unicorn
let globe;

// stores image of globe and globe base
let globeImage = undefined;
let globeBaseImage = undefined;

// array that stores images of unicorn
let unicornImages = [];
// number of unicorn images
let numUnicornImages = 2;

// array that stores snowflakes
let snowflakes = [];
// number of snowflakes inside globe
let numSnowflakes = 20;

// Wally the whale
let whale;

// ferris wheel
let ferrisWheel;

// contains ferris wheel images
let ferrisWheelImage = {
  // array that stores wheel images
  wheels: [],
  // number of wheel images
  numWheelImages: 3,
  // image of stand that holds wheel up
  stand: undefined,
  // image of ferris wheel seat
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

  // store images of unicorn inside unicornImages array
  for (let i = 0; i < numUnicornImages; i++) {
    let unicornImage = loadImage(`assets/images/unicorn${i}.png`);
    unicornImages.push(unicornImage);
  }

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
  // noCursor();

  // Create a canvas that takes up full screen
  canvas = createCanvas(windowWidth, windowHeight);

  // Center canvas on window
  centerCanvas();
  // Place canvas behind DOM elements
  canvas.style(`z-index`, `-1`);

  // Create a paragraph containing description text
  // paragraph = createP(`I am a graphic designer and illustrator based in Montreal.`);
  // paragraph.position(width/2, height/2);

  // Create a new floor
  floor = new Floor();

  // Create a new plant
  plant = new Plant();

  // Create a new globe
  globe = new Globe(globeImage, globeBaseImage, unicornImages);

  // Create new snowflakes and store them in snowflakes array
  for (let i = 0; i < numSnowflakes; i++) {
    let snowflake = new Snowflake(globe);
    snowflakes.push(snowflake);
  }

  // Create a new whale
  whale = new Whale();

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

function centerCanvas() {
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 2;
  canvas.position(canvasX, canvasY);
}

// windowResized()
//
// Resize canvas every time window size changes
function windowResized() {
  // center canvas in middle of window
  centerCanvas();
  // resize canvas to window width and height
  resizeCanvas(windowWidth, windowHeight);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  // Set bg color
  background(bg.r, bg.g, bg.b);

  // Display floor
  floorWidth = width;
  floor.display(floorWidth);

  // Create a globe that contains all these behaviours:
  // Displays globe and unicorn
  // Release snowflakes inside globe
  // Unicorn flaps wings when mouse hovers on globe
  createGlobe();

  // Draw all sprites: whale animation
  drawSprites();

  // Create a ferris wheel that contains all these behaviours:
  // Display rotating ferris wheel and seats that revolve around it
  // Lights animation when mouse hovers over ferris wheel
  createFerrisWheel();

  // Display circle on mouse's position
  mouse.x = mouseX;
  mouse.y = mouseY;

  // push();
  // fill(255);
  // ellipse(mouse.x, mouse.y, mouse.size);
  // pop();



}

// Display globe with unicorn and falling snow inside it
// And unicorn flaps wings when mouse hovers over globe
function createGlobe() {
  // Display snowflakes, let them fall, and wrap to top when they reach the bottom of the globe
  // These snowflakes are displayed behind the globe
  releaseSnowflakes();

  // If mouse hovers over globe, make unicorn flap wings
  if (globe.overlapsWith(mouse)) {
    globe.unicornFlapsWings();
  }

  // Display globe images: its base, the actual globe, unicorn inside
  globe.displayBase();
  globe.displayGlobe();
  globe.displayUnicorn();

  // Display snowflakes, let them fall, and wrap to top when they reach the bottom of the globe
  // These snowflakes are released in front of the globe
  releaseSnowflakes();
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

// Display rotating ferris wheel with seats that revolve around it
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

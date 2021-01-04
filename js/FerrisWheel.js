class FerrisWheel {
  constructor(ferrisWheelImage) {
    // appearance information
    this.image = ferrisWheelImage;
    // position information
    this.x = width - 200;
    this.y = 150;
    // rotation information
    this.theta = {
      current: 0,
      total: TWO_PI,
    };
    this.rotationSpeed = PI / 180;
    // radius of wheel
    this.radius = 200;
  }

  // Display ferris wheel image
  displayAndRotate() {
    push();
    translate(this.x, this.y);
    rotate(this.theta.current);
    this.theta.current += this.rotationSpeed;
    imageMode(CENTER);
    image(ferrisWheelImage, 0, 0);
    pop();

    // When ferris wheel makes a full rotation (2pi), start a new rotation by setting theta back 2pi
    if (this.theta.current > this.theta.total) {
      this.theta.current -= TWO_PI;
    }
  }




}

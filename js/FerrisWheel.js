class FerrisWheel {
  constructor(ferrisWheelImage, ferrisWheelStandImage) {
    // position information
    this.x = width - 200;
    this.y = height * 3/5;

    // information for wheel
    this.wheel = {
      // image of wheel
      image: ferrisWheelImage,
      // image width and height
      width: 200,
      height: 200,
      // radius of wheel
      radius: 100,
      // wheel angle (for rotation)
      theta: {
        current: 0,
        total: TWO_PI,
      },
      // wheel rotation speed
      rotationSpeed: PI / 180,
    };

    // information for wheel stand
    this.stand = {
      // image of stand that holds wheel up
      image: ferrisWheelStandImage,
      // image width and height
      width: 84,
      height: 144,
      // position information (offset from wheel's center position)
      xOffsetFromWheel: 2,
      yOffsetFromWheel: 80,
    };


  }

  // Display the stand that holds ferris wheel up
  displayStand() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.stand.image, this.stand.xOffsetFromWheel, this.stand.yOffsetFromWheel);
    pop();
  }

  // Display the wheel


  // Display wheel and stand images and rotate wheel
  displayAndRotate() {
    // display the stand that supports the wheel
    this.displayStand();

    push();
    // rotate about the wheel's center
    translate(this.x, this.y);
    rotate(this.wheel.theta.current);
    this.wheel.theta.current += this.wheel.rotationSpeed;
    // display the wheel's image
    imageMode(CENTER);
    image(this.wheel.image, 0, 0);
    pop();

    // When ferris wheel makes a full rotation (2pi), start a new rotation by setting theta back 2pi
    if (this.wheel.theta.current > this.wheel.theta.total) {
      this.wheel.theta.current -= this.wheel.theta.total;
    }
  }




}

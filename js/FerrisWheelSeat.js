class FerrisWheelSeat {
  constructor(seatImage, initialAngle) {
    // store image of seat
    this.image = seatImage;
    // size information
    this.width = 68;
    this.height = 39;
    // position information
    this.x = 0;
    this.y = 0;

    this.theta = {
      current: initialAngle,
    };
    this.rotationSpeed = PI / 180;
  }

  // Rotate the seats about the wheel's center
  rotate(wheelRadius) {
    this.x = wheelRadius * cos(this.theta.current);
    this.y = wheelRadius * sin(this.theta.current);
    this.theta.current += this.rotationSpeed;

  }

  // Display the seat
  display(wheelX, wheelY, wheelRadius) {
    push();
    this.rotate(wheelRadius);

    translate(wheelX, wheelY);
    imageMode(CENTER);
    image(this.image, this.x, this.y);
    pop();
  }

  swing() {

  }


}

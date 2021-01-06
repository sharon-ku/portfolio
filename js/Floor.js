class Floor {
  constructor() {
    // size information
    this.height = 230;
    // position information
    this.x = width / 2;
    this.y = height - (this.height / 2);
    // color information
    this.fill = {
      // slightly lighter blue than background
      r: 81,
      g: 131,
      b: 154,
    };
  }

  // Display floor as rectangle
  display(floorWidth) {
    push();
    rectMode(CENTER);
    fill(this.fill.r, this.fill.g, this.fill.b);
    rect(this.x, this.y, floorWidth, this.height);
    pop();
  }
}

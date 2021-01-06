class Globe {
  constructor(globeImage, globeBaseImage) {
    this.image = globeImage;
    // position information
    this.x = 260;
    this.y = height-300;
    // radius information
    this.radius = 134/2;
    // information for globe's base
    this.base = {
      image: globeBaseImage,
      xOffsetFromGlobe: 0,
      yOffsetFromGlobe: 78,
    };
  }

  // Display globe
  displayGlobe() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y);
    pop();
  }

  // Display globe's base
  displayBase() {
    push();
    imageMode(CENTER);
    image(this.base.image, this.x + this.base.xOffsetFromGlobe, this.y + this.base.yOffsetFromGlobe);
    pop();
  }
}

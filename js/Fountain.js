class Fountain {
  constructor(fountainImages, whale) {
    // array containing fountain images
    this.images = fountainImages;
    // stores current image number (index of this.images array)
    this.currentImage = 0;
    // frames elapsed between images
    this.framesElapsed = 0;
    // frames need to switch images
    this.framesBetweenImages = 5;
    // position information
    this.x = whale.x - 25;
    this.y = whale.y - 63;
    // // opacity of butterfly
    // this.opacity = {
    //   current: 255,
    //   max: 255,
    //   min: 0,
    // };
    // tracks when it's time to release fountain
    this.timeToRelease = false;
  }

  // Create fountain spraying animation by switching images
  spray() {
    // Increase frames elapsed
    this.framesElapsed++;
    // Once frames elapsed is equal to frames needed to switch between the images, update current wheels image
    if (this.framesElapsed === this.framesBetweenImages) {
      if (this.currentImage === 0) {
        this.currentImage = 1;
      } else if (this.currentImage === 1) {
        this.currentImage = 2;
      } else if (this.currentImage === 2) {
        this.currentImage = 3;
      } else if (this.currentImage === 3) {
        this.currentImage = 4;
      } else if (this.currentImage === 4) {
        this.currentImage = 0;
        this.timeToRelease = false;
      }
      // Reset frames elapsed to zero
      this.framesElapsed = 0;
    }
  }

  // Display fountain image
  display() {
    push();
    imageMode(CENTER);
    // scale(0.8);
    this.spray();
    image(this.images[this.currentImage], this.x, this.y);
    pop();
  }
}

class Plant {
  constructor() {
    // movement information
    this.x = (width / 2) - 350;
    this.y = height - 280;
    // animation information
    this.sprite = createSprite(this.x, this.y);
    this.plantAnimation = loadAnimation('assets/images/plant0.png',
    'assets/images/plant1.png');
    // number of frames between each frame
    this.plantAnimation.frameDelay = 40;
    // adding animation to the sprite
    this.sprite.addAnimation('moveLeaves', this.plantAnimation);
  }
}

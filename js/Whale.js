class Whale {
  constructor() {
    // movement information
    this.x = (width / 2) + 140;
    this.y = height - 160;
    // animation information
    this.sprite = createSprite(this.x, this.y);
    this.whaleAnimation = loadAnimation('assets/images/whale0.png',
    'assets/images/whale1.png',
    'assets/images/whale2.png',
    'assets/images/whale3.png',);
    // number of frames between each frame
    this.whaleAnimation.frameDelay = 70;
    // adding animation to the sprite
    this.sprite.addAnimation('changeColor', this.whaleAnimation);
  }

}

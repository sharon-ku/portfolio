class Snowflake {
  constructor(globe) {
    // size of snowflake
    this.size = 6;
    // movement information
    this.x = random(globe.x - globe.radius, globe.x + globe.radius);
    this.y = random(globe.y - globe.radius, globe.y + globe.radius);
    this.speed = 0.5;
    this.vx = 0;
    this.vy = 0;
    // light pink
    this.fill = {
      r: 237,
      g: 217,
      b: 228,
    };
  }

  // Returns true if snowflake is inside the globe
  isInsideGlobe(globe) {
    // Calculating distance between snowflake's center point and globe's center point
    let distBtwSnowflakeAndGlobe = dist(this.x, this.y, globe.x, globe.y);

    // If the snowflake is inside the globe, return true
    if (distBtwSnowflakeAndGlobe < globe.radius - this.size) {
      return true;
    } else {
      return false;
    }
  }

  wrapBackToTop(globe) {
    if (this.y > globe.y + globe.radius) {
      this.y -= 2 * globe.radius;
    }
  }

  // Display a snowflake
  display() {
    push();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  // Make snowflake fall
  fall() {
    this.vy = this.speed;
    this.y += this.vy;
  }
}

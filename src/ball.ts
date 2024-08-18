import Track from "./track";

export default class Ball {
  public offset: number;
  public center: { x: number; y: number };
  public direction: 1 | -1;
  constructor(
    public track: Track,
    private radius: number,
    public speed: number
  ) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.offset = 0;
    this.direction = 1;
    this.center = track.getPosition(this.offset);
  }

  public move() {
    this.offset += this.speed * this.direction;
    this.center = this.track.getPosition(this.offset);
    //   change dir on mid height
    if (this.center.y > this.track.center.y) {
      this.direction *= -1;
      playSound();
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}

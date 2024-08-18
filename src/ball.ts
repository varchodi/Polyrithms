import Track from "./track";

export default class Ball {
  public offset: number;
  public center: { x: number; y: number };
  constructor(
    public track: Track,
    private radius: number,
    public speed: number
  ) {
    this.track = track;
    this.radius = radius;
    this.speed = speed;
    this.offset = 0;
    this.center = track.getPosition(this.offset);
  }

  public move() {
    this.offset += this.speed;
    this.center = this.track.getPosition(this.offset);
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}

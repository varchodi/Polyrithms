export default class Track {
  constructor(public center: { x: number; y: number }, public radius: number) {
    this.center = center;
    this.radius = radius;
  }
  public draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.stroke();
  }

  public getPosition(offset: number): { x: number; y: number } {
    return {
      x: this.center.x + Math.cos(offset) * this.radius,
      y: this.center.y - Math.sin(offset) * this.radius,
    };
  }
}

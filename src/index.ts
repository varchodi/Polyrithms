import Ball from "./ball.js";
import Track from "./track.js";

const size = 700;
const myCanvas = document.getElementById("myCanvas") as HTMLCanvasElement;

myCanvas.width = size;
myCanvas.height = size;

const trackCenter = { x: size / 2, y: size / 2 };
const trackRadius = 100;
const ballRadius = 10;
const ballSpeed = 0.01;

const ctx = myCanvas.getContext("2d")!;
let track = new Track(trackCenter, trackRadius);

const ball = new Ball(track, ballRadius, ballSpeed);

animate();

function animate() {
  ctx.clearRect(0, 0, size, size);
  track.draw(ctx);
  ball.move();
  ball.draw(ctx);
  requestAnimationFrame(animate);
}

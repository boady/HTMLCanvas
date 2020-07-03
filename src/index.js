import "./styles.css";

const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
let imageName = new Image();
imageName.src - "path/img.png";
let audioName = new Audio();
audioName.src = "path/audio.png";
let box = 32;

ctx.drawImage(imageName, 40, 50, 25, 25);
ctx.fillStyle = "red";
ctx.fillRect(100, 300, 30, 30);
ctx.fillStyle = "black";
ctx.fillRect(5 * box, 6 * box, 2 * box, 3 * box);
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };
function draw() {
  ctx.drawimage(ground, 0, 0);
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y.box, box);
    ctx.strokeStyle = "red";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }
}
//let game=setinterval (draw, 100);
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

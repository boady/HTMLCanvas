import "./styles.css";

const cvs = document.getElementById("canvas");
//ERROR CANNOT READY PROPERTY GETCONTEXT OF NULL
const ctx = cvs.getContext("2d");
let imageName = new Image();
imageName.src - "path/img.png";
let audioName = new Audio();
audioName.src = "path/audio.png";

ctx.drawImage(imageName, 40, 50, 25, 25);
ctx.fillStyle = "red";
ctx.fillRect(100, 300, 30, 30);
function draw() {}

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

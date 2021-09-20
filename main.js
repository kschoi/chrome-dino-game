const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let previousTimeStamp = 0;
const cactusList = [];

function taskToRunInEveryFrame() {
  requestAnimationFrame(taskToRunInEveryFrame);
  previousTimeStamp++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 2초가 지났을 때 Cactus를 하나 그려주세요.
  if (previousTimeStamp % 120 === 0) {
    const cactus = new Cactus();
    cactusList.push(cactus);
  }

  cactusList.forEach((cactus) => {
    cactus.x--;
    cactus.draw();
  });

  dino.draw();
}
taskToRunInEveryFrame();

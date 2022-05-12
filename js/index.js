const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//road image
const imgRoad = new Image();
imgRoad.src = '../images/road.png';

//car image
const imgCar = new Image();
imgCar.src = '../images/car.png';

const carWidth = 80;
const carHeight = 160;
const carSpeedValue = 5;

let carX = canvas.width / 2 - carWidth / 2;
let carY = canvas.height - carHeight;
let isCarGoingLeft = false;
let isCarGoingRight = false;

let score = 0;
let gameOver = false;

let animationFrameId = 0;

//draw road 

function drawRoad() {
ctx.drawImage(imgRoad, 0, 0, canvas.width, canvas.height);
}

//draw car

function drawCar() {
  ctx.drawImage(imgCar, carX, carY, carWidth, carHeight);
}

//When "Start Game" is clicked: 

function startGame() {
  animate();
  }


//move the car left and right

  function animate() {

    if (isCarGoingLeft) {
      if (carX > 0) {
        carX -= carSpeedValue;
      }
    } 
    else if (isCarGoingRight) {
      if (carX < canvas.width - carWidth) {
        carX += carSpeedValue;
      }
  }

  drawRoad()
  drawCar()

  if (gameOver) {
    cancelAnimationFrame(animationFrameId);
    restartBtn.style.display = "block";
  } else {
    animationFrameId = requestAnimationFrame(animate);
  }
}


// Event listeners and window.onload


  document.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
      isCarGoingLeft = true;
    }
    if (event.code === "ArrowRight") {
      isCarGoingRight = true;
    }
  });

  document.addEventListener("keyup", event => {
    isCarGoingLeft = false;
    isCarGoingRight = false;
  });



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    console.log("start clicked");
    startGame();
  }
};

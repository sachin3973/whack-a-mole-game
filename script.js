let boxs = document.querySelectorAll(".box");
let ScordBoard = document.querySelector(".score-board");
let timeKeeper = document.querySelector(".time");
let startBtn = document.getElementById("start-button");
let boxContainer = document.getElementById("box-container");
let time = 60;
let speed = 5000;
let x1 = "";
let points = "";
let restart = true;

//add lister to the start button
startBtn.addEventListener("click", countdown);

// reset all not active
const reset = () => {
  boxs.forEach((box) => box.classList.remove("active"));
};
// boxs.forEach((box) => addEventListener('click',start,false));
// boxs.forEach((box) => addEventListener('click',score,false));

//start function where we genorate a random box to show and astivate
function start() {
  reset();
  x2 = Math.floor(Math.random() * 10 + 1);

  if (x2 == x1) {
    start();
  }

  x1 = x2;
  document.getElementById(x2).classList.add("active");
}

//check score check if the time is up
function score(elem) {
  if (time == 0) {
    clearInterval(s);
    return;
  }
  if (elem.id == x1 && elem.className == "box active") {
    reset();
    points++;
    ScordBoard.innerText = "Score: " + points;
  } else {
    if (elem.id !== x1 && elem.className == "box") {
      boxContainer.style.border = "3px solid #FF494A";
      setTimeout(() => {
        boxContainer.style.border = "3px solid #fff ";
      }, 250);
    }
  }

  if (points >= 30) {
    speed = 500;
    clearInterval(s);
    s = setInterval(start, speed);
  } else if (points >= 20) {
    speed = 650;
    clearInterval(s);
    s = setInterval(start, speed);
  } else if (points >= 10) {
    speed = 750;
    clearInterval(s);
    s = setInterval(start, speed);
  }
}

// starts the game and checks if the game is over
function countdown() {
  if (restart === true) {
    startBtn.style.opacity = "0";
    points = 0;
    ScordBoard.innerText = "Score: " + points;
    timeKeeper.innerText = "Time: 60";
    time = 60;
    speed = 1000;
    restart = false;
    s = setInterval(start, speed);
    y = setInterval(function () {
      timeKeeper.innerText = "Time: " + time--;
      if (time == 0) {
        score();
        clearInterval(y);
        reset();
        restart = true;
        timeKeeper.innerText = "Game Over";
        startBtn.style.opacity = "1";
      }
    }, 1000);
  }
} 

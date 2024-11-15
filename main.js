let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let hold1 = document.querySelector(".hold1");
let hold2 = document.querySelector(".hold2");
let curScore1 = document.querySelector(".curScore1");
let curScore2 = document.querySelector(".curScore2");
let sum1 = document.querySelector(".score1");
let sum2 = document.querySelector(".score2");
let user1 = document.querySelector(".user1");
let user2 = document.querySelector(".user2");

let score1 = 0;
let score2 = 0; 
let currentScore1 = 0;
let currentScore2 = 0;
let activePlayer = 1; 

btn1.addEventListener("click", function () {
  if (activePlayer === 1) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    currentScore1 += randomNumber;
    curScore1.textContent = currentScore1;

    if (currentScore1 + score1 >= 100) {
      winGame(1);
    }
  }
});

btn2.addEventListener("click", function () {
  if (activePlayer === 2) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    currentScore2 += randomNumber;
    curScore2.textContent = currentScore2;

    if (currentScore2 + score2 >= 100) {
      winGame(2);
    }
  }
});

hold1.addEventListener("click", function () {
  if (activePlayer === 1) {
    score1 += currentScore1;
    sum1.textContent = score1;
    currentScore1 = 0;
    curScore1.textContent = 0;
    switchPlayer();
  }
});

hold2.addEventListener("click", function () {
  if (activePlayer === 2) {
    score2 += currentScore2;
    sum2.textContent = score2;
    currentScore2 = 0;
    curScore2.textContent = 0;
    switchPlayer();
  }
});

function switchPlayer() {
  if (activePlayer === 1) {
    activePlayer = 2;
    user1.classList.remove("active");
    user2.classList.add("active");
  } else {
    activePlayer = 1;
    user2.classList.remove("active");
    user1.classList.add("active");
  }
}

function winGame(player) {
  if (player === 1) {
    user1.classList.add("win");
    alert("User 1 yutdi!");
  } else {
    user2.classList.add("win");
    alert("User 2 yutdi!");
  }

  resetGame();
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  currentScore1 = 0;
  currentScore2 = 0;
  sum1.textContent = 0;
  sum2.textContent = 0;
  curScore1.textContent = 0;
  curScore2.textContent = 0;
  activePlayer = 1;
  user1.classList.add("active");
  user2.classList.remove("active");
  user1.classList.remove("win");
  user2.classList.remove("win");
}









const choices = document.querySelectorAll(".choice");
const message = document.querySelector(".message");
const yourChoiceEl = document.querySelector(".your-choice span");
const robotChoiceEl = document.querySelector(".robot-choice span");

const options = ["tosh", "qaychi", "qogoz"];

choices.forEach((button) => {
  button.addEventListener("click", () => {
    const yourChoice = button.getAttribute("data-choice");
    const robotChoice = getRandomChoice(); 

    yourChoiceEl.textContent = yourChoice;
    robotChoiceEl.textContent = robotChoice;

    const result = getResult(yourChoice, robotChoice);
    message.textContent = result;
  });
});

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getResult(yourChoice, robotChoice) {
  if (yourChoice === robotChoice) {
    return "Durrang!";
  } else if (
    (yourChoice === "tosh" && robotChoice === "qaychi") ||
    (yourChoice === "qaychi" && robotChoice === "qogoz") ||
    (yourChoice === "qogoz" && robotChoice === "tosh")
  ) {
    return "Siz yutdingiz!";
  } else {
    return "Siz yutqazdingiz!";
  }
}

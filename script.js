const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const playerChoiceElBig = document.getElementById("playerChoiceBig");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const computerChoiceElBig = document.getElementById("computerChoiceBig");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";
let audioWin = new Audio("487436__elijahdanie__game-win.mp3");
let audioLost = new Audio("476177__unadamlar__wrong-choice.wav");
let audioTie = new Audio("457741__osiruswaltz__wall-bump-1.wav");

// ==> RESET ALL "SELECTED" ICONS <==
function resetSelected() {
  allGameIcons.forEach(icon => {
    icon.classList.remove("selected");
  });
}

// ==> RESET SCORE AND playerChoice/computerChoice <==

function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultText.textContent = "";
  computerChoiceElBig.removeAttribute("class");
  playerChoiceElBig.removeAttribute("class");
  resetSelected();
}

// ==> RANDOM COMPUTER CHOICE <==
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

// ==> ADD "SELECTED" STYLING AND COMPUTERCHOICE <==

function displayComputerChoice() {
  computerChoiceElBig.removeAttribute("class");
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      computerChoiceElBig.classList.add("far");
      computerChoiceElBig.classList.add("fa-hand-rock");
      break;

    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- paper";
      computerChoiceElBig.classList.add("far");
      computerChoiceElBig.classList.add("fa-hand-paper");
      break;

    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      computerChoiceElBig.classList.add("far");
      computerChoiceElBig.classList.add("fa-hand-scissors");
      break;

    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      computerChoiceElBig.classList.add("far");
      computerChoiceElBig.classList.add("fa-hand-lizard");
      break;

    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      computerChoiceElBig.classList.add("far");
      computerChoiceElBig.classList.add("fa-hand-spock");
      break;
    default:
      break;
  }
}

// ==> CHECK RESULT, INCREASE SCORES, UPDATE resultText <==
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
    audioTie.play();
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
      confetti(document.body);
      audioWin.play();
    } else {
      resultText.textContent = "You Lost!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
      audioLost.play();
    }
  }
}

// ==> CALL FUNCTIONS TO PROCESS TURN <==
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// ==> PASSING PLAYER SELECTION VALUE AND STYLING ICONS <==
function select(playerChoice) {
  checkResult(playerChoice);
  playerChoiceElBig.removeAttribute("class");
  // ADD "SELECTED" STYLING
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      playerChoiceElBig.classList.add("far");
      playerChoiceElBig.classList.add("fa-hand-rock");
      break;

    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- paper";
      playerChoiceElBig.classList.add("far");
      playerChoiceElBig.classList.add("fa-hand-paper");
      break;

    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      playerChoiceElBig.classList.add("far");
      playerChoiceElBig.classList.add("fa-hand-scissors");
      break;

    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      playerChoiceElBig.classList.add("far");
      playerChoiceElBig.classList.add("fa-hand-lizard");
      break;

    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      playerChoiceElBig.classList.add("far");
      playerChoiceElBig.classList.add("fa-hand-spock");
      break;
    default:
      break;
  }
}

function confetti(element) {
  party.confetti(element, {
    debug: true,
    gravity: -100,
    count: party.variation.range(200, 400),
    shapes: ["star"],
  });
}

// ==> ON STARTUP , SET INITIAL VALUES <==
resetAll();

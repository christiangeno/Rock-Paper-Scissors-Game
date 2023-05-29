let playerName;
let playerScore = 0;
let computerScore = 0;

function startGame() {
  playerName = document.getElementById("player-name").value;
  document.getElementById("player-name").disabled = true;
  document.querySelector('.gameIntro').style.display = "none";
  document.querySelector('.gameDisplay').style.display = "block";
}

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result;

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `${playerName} wins!`;
    playerScore++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  document.getElementById("result").innerHTML = result;
  document.getElementById("player-score").innerHTML = `${playerName}: ${playerScore}`;
  document.getElementById("computer-score").innerHTML = `Computer: ${computerScore}`;
}

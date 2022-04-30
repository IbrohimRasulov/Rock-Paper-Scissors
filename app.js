const hands = ["rock", "paper", "scissors"];
const playerSelection = "rock";
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
  const randomNum = Math.floor(Math.random() * hands.length);
  return hands[randomNum];
}

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore += 1;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore += 1;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore += 1;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore += 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore += 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore += 1;
  } else {
  }
};

const game = function () {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerPlay());
  }

  if (playerScore > computerScore) {
    console.log(`${playerScore} and ${computerScore}`);
    console.log('You won!');
  } else if (playerScore < computerScore) {
    console.log(`${playerScore} and ${computerScore}`);
    console.log('You lost!');
  } else {
    console.log(`${playerScore} and ${computerScore}`);
    console.log('Tie game!');
  }

}

game();

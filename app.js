const hands = ["rock", "paper", "scissors"];
const playerSelection = "rock";


function computerPlay() {
  const randomNum = Math.floor(Math.random() * hands.length);
  return hands[randomNum];
}

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('You won! Rock beats scissors!');
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You lost! Paper beats rock!');
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('You won! Paper beats rock!');
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('You lost! Scissors beats paper!');
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('You won! Scissors beats paper!');
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('You lost! Rock beats scissors!');
  } else if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
    console.log('Tie game!');
  } else {
    console.log('Error! Invalid input!');
  }
};

playRound(playerSelection, computerPlay());

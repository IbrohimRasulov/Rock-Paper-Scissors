const hands = ["rock", "paper", "scissors"];
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let playerChoice;

const resultTitle = document.querySelector('#title');
const buttons = document.querySelectorAll('#weapon-selecion button');
const popup = document.querySelector('#popup');
const playerResult = document.querySelector('#user-score');
const computerResult = document.querySelector('#computer-score');
const leftHand = document.querySelector('#left-hand img');
const rightHand = document.querySelector('#right-hand img');

function computerPlay() {
  const randomNum = Math.floor(Math.random() * hands.length);
  rightHand.setAttribute('src', `assets/${hands[randomNum]}-right.png`)
  return hands[randomNum];
}

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore += 1;
    resultTitle.textContent = 'You won! Rock beats Scissors';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore += 1;
    resultTitle.textContent = 'You lost! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore += 1;
    resultTitle.textContent = 'You won! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore += 1;
    resultTitle.textContent = 'You lost! Scissors beats Paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore += 1;
    resultTitle.textContent = 'You won! Scissors beats Paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore += 1;
    resultTitle.textContent = 'You lost! Rock beats Scissors';
  } else {
    resultTitle.textContent = 'Tie game!';
  }

  playerResult.textContent = playerScore;
  computerResult.textContent = computerScore;
};

const game = function () {
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

buttons.forEach(button => {
  button.addEventListener('click', e => {
    switch (e.target.textContent) {
      case 'Rock':
        playerChoice = 'rock';
        leftHand.setAttribute('src', 'assets/rock-left.png');
        break;
      case 'Paper':
        playerChoice = 'paper';
        leftHand.setAttribute('src', 'assets/paper-left.png');
        break;
      case 'Scissors':
        playerChoice = 'scissors';
        leftHand.setAttribute('src', 'assets/scissors-left.png');
        break;
    }

    playRound(playerChoice, computerPlay());

    if (playerScore === 5 || computerScore === 5) {
      game();
      popup.classList.remove('hidden')
      playerScore = 0;
      computerScore = 0;
    }
  });
});

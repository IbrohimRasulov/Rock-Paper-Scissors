const hands = ["rock", "paper", "scissors"];
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let playerChoice;

const resultTitle = document.querySelector('#title');
const buttons = document.querySelectorAll('#weapon-selecion button');
const popup = document.querySelector('.popup');
const popupResult = document.querySelector('.popup p');
const popupBtn = document.querySelector('.popup button');
const playerResult = document.querySelector('#user-score');
const computerResult = document.querySelector('#computer-score');
const leftHand = document.querySelector('#left-hand img');
const rightHand = document.querySelector('#right-hand img');
const container = document.querySelector('#container');

function computerPlay() {
  const randomNum = Math.floor(Math.random() * hands.length);
  rightHand.setAttribute('src', `assets/${hands[randomNum]}-right.png`);
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
    popupResult.textContent = 'You won!';
  } else {
    popupResult.textContent = 'Oh no! You lost!';
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
      popup.classList.toggle('hidden');
      container.setAttribute('class', 'secondary');
      playerScore = 0;
      computerScore = 0;

      buttons.forEach(button => {
        button.setAttribute('disabled', '');
      });
    }
  });
});

popupBtn.addEventListener('click', () => {
  buttons.forEach(button => {
    popup.classList.toggle('hidden');
    container.removeAttribute('class', 'secondary');
    button.removeAttribute('disabled');
    playerResult.textContent = 0;
    computerResult.textContent = 0;
    resultTitle.textContent = 'ROCK PAPER SCISSORS';
    leftHand.setAttribute('src', 'assets/giphy-1.gif');
    rightHand.setAttribute('src', 'assets/giphy-2.gif');
  });
});

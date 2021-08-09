let computerPlay = Math.ceil(Math.random() * 3);

if (computerPlay === 1) {
  computerPlay = 'rock';
} else if (computerPlay === 2) {
  computerPlay = 'paper';
} else {
  computerPlay = 'scissors';
}

const userChoice = prompt('Choose "Rock", "Paper" or "Scissors"');
const userPlay = userChoice.toLowerCase();

if (userPlay === 'rock' && computerPlay === 'scissors') {
  alert('You won! Rock beats scissors!');
} else if (userPlay === 'rock' && computerPlay === 'paper') {
  alert('You lost! Paper beats rock!');
} else if (userPlay === 'paper' && computerPlay === 'rock') {
  alert('You won! Paper beats rock!');
} else if (userPlay === 'paper' && computerPlay === 'scissors') {
  alert('You lost! Scissors beats paper!');
} else if (userPlay === 'scissors' && computerPlay === 'paper') {
  alert('You won! Scissors beats paper!');
} else if (userPlay === 'scissors' && computerPlay === 'rock') {
  alert('You lost! Rock beats scissors!');
} else if ((userPlay === 'rock' && computerPlay === 'rock') || (userPlay === 'paper' && computerPlay === 'paper') || (userPlay === 'scissors' && computerPlay === 'scissors')) {
  alert('Tie game!');
} else {
  alert('Error! Invalid input!');
}
console.log(userPlay);
console.log(computerPlay);
let computerPlay = Math.ceil(Math.random() * 3);

if (computerPlay === 1) {
  computerPlay = 'rock'
} else if (computerPlay === 2) {
  computerPlay = 'paper'
} else {
  computerPlay = 'scissors'
}

let userChoice = prompt('Choose "Rock", "Paper" or "Scissors"');
let userPlay = userChoice.toLowerCase();


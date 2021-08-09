let computerPlay = Math.ceil(Math.random() * 3);

if (computerPlay === 1) {
  computerPlay = 'Rock'
} else if (computerPlay === 2) {
  computerPlay = 'Paper'
} else {
  computerPlay = 'Scissors'
}




console.log(computerPlay);
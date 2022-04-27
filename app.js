const hands = ["rock", "paper", "scissors"];

function randomHand() {
  const randomNum = Math.floor(Math.random() * hands.length);
  return hands[randomNum];
}
ç
console.log(randomHand());

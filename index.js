const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

console.log(answer);
let attempts = 10;
let guess;
let running = true;

while (running) {
  for (let i = 0; i <= attempts; i++) {
    guess = window.prompt("Guess a nuber between " + minNum + " and " + maxNum + "You have " + attempts + " attemps");
    guess = Number(guess);

    if (!guess) {
      window.alert("Type a valid number!");
    } else if (guess > maxNum || guess < minNum) {
      window.alert("Type a valid number!");
    } else if (answer === guess) {
      window.alert("You won!!!");
      break;
    } else if (guess > answer) {
      window.alert("Go lowwer!!!");
    } else {
      window.alert("Go higheeer!!!");
    }
  }
  running = false;
}

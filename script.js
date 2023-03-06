function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let arrayLength = computerChoices.length;
    let randomInt = Math.random() * arrayLength;
    let randomChoiceIndex = Math.floor(randomInt);
    return computerChoices[randomChoiceIndex];
}

let win = 'You win! Paper beats Rock!';
let loss = 'You lose! Rock beats Scissors';

function singleRound(computerSelection, playerSelection) {
    return (playerSelection.toLowerCase() == computerSelection) ? 'Draw! Play again.'
        : (computerSelection == 'rock') && (playerSelection.toLowerCase() == 'paper') ? win
        : (computerSelection == 'rock') && (playerSelection.toLowerCase() == 'scissors') ? loss
        : (computerSelection == 'paper') && (playerSelection.toLowerCase() == 'scissors') ? win
        : (computerSelection == 'paper') && (playerSelection.toLowerCase() == 'rock') ? loss
        : (computerSelection == 'scissors') && (playerSelection.toLowerCase() == 'rock') ? win
        : (computerSelection == 'scissors') && (playerSelection.toLowerCase() == 'paper') ? loss
        : 'You lose! Out of bounds. Pick Rock, Paper, or Scissors';
}

function game() {
    let playerAnswer = prompt('Rock, Paper, Scissors');
    console.log(singleRound(getComputerChoice(), playerAnswer));
}

for (let gameRound = 1; gameRound <= 5; gameRound++) {
    game();
}

   
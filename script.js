function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let arrayLength = computerChoices.length;
    let randomInt = Math.random() * arrayLength;
    let randomChoiceIndex = Math.floor(randomInt);
    return computerChoices[randomChoiceIndex];
}

function singleRound(computerSelection, playerSelection) {
   return (playerSelection.toLowerCase() == computerSelection) ? 'Draw! Play again.'
        : (computerSelection == 'rock') && (playerSelection.toLowerCase() == 'paper') ? 'You win! Paper beats Rock!'
        : (computerSelection == 'rock') && (playerSelection.toLowerCase() == 'scissors') ? 'You lose! Rock beats Scissors'
        : (computerSelection == 'paper') && (playerSelection.toLowerCase() == 'scissors') ? 'You win! Scissors beat Paper'
        : (computerSelection == 'paper') && (playerSelection.toLowerCase() == 'rock') ? 'You lose! Paper beats Rock'
        : (computerSelection == 'scissors') && (playerSelection.toLowerCase() == 'rock') ? 'You win! Rock beats Scissors!'
        : (computerSelection == 'scissors') && (playerSelection.toLowerCase() == 'paper') ? 'You lose! Scissors beat Paper!'
        : 'You lose! Out of bounds. Pick Rock, Paper, or Scissors';
}

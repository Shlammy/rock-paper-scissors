let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let arrayLength = computerChoices.length;
    let randomInt = Math.random() * arrayLength;
    let randomChoiceIndex = Math.floor(randomInt);
    return computerChoices[randomChoiceIndex];
}

function singleRound(computerSelection, playerSelection) {
    let win = 'You win! Paper beats Rock!';
    let loss = 'You lose! Rock beats Scissors';
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
    let roundResult = singleRound(getComputerChoice(), playerAnswer);
    roundResult.substring(4, 6) == "wi" ? playerScore++ : playerScore; 
    roundResult.substring(4, 6) == "lo" ? computerScore++ : computerScore;
    console.log(roundResult);
    console.log(playerScore, computerScore);
}

for (let gameRound = 1; gameRound <= 5; gameRound++) {
    game();
}

playerScore > computerScore ? console.log("You won the match!") 
: computerScore == playerScore ? console.log("The match was a draw!")
: console.log("You lost the match");

   
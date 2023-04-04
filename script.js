let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
const container = document.getElementById('displayContainer');

let getComputerChoice = () => {
    const computerChoices = ["rock", "paper", "scissors"];
    let arrayLength = computerChoices.length;
    let randomInt = Math.random() * arrayLength;
    let randomChoiceIndex = Math.floor(randomInt);
    return computerChoices[randomChoiceIndex];
};

let singleRound = (computerSelection, playerSelection) => {
    let win = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
    let loss = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
    return (playerSelection == computerSelection) ? 'Draw! Play again.'
        : (computerSelection == 'rock') && (playerSelection == 'paper') ? win
        : (computerSelection == 'rock') && (playerSelection == 'scissors') ? loss
        : (computerSelection == 'paper') && (playerSelection == 'scissors') ? win
        : (computerSelection == 'paper') && (playerSelection == 'rock') ? loss
        : (computerSelection == 'scissors') && (playerSelection == 'rock') ? win
        : (computerSelection == 'scissors') && (playerSelection == 'paper') ? loss
        : 'You lose! Out of bounds. Pick Rock, Paper, or Scissors';
};

let game = (btn) => {
    const roundResultPara = document.createElement('p');
    const scoresPara = document.createElement('p');
    let playerAnswer = btn.value;
    let roundResult = singleRound(getComputerChoice(), playerAnswer);
    roundResult.substring(4, 6) == "wi" ? playerScore++ : playerScore; 
    roundResult.substring(4, 6) == "lo" ? computerScore++ : computerScore;
    ++gameRound;
    roundResultPara.textContent = roundResult;
    scoresPara.textContent = playerScore + " , " + computerScore;
    container.appendChild(roundResultPara);
    container.appendChild(scoresPara);

    if(gameRound % 5 == 0) {
        winLossDraw();
    }

    if(gameRound > 5) {
        clearBoard();
        gameRound = 0;
        computerScore = 0;
        playerScore = 0;
    }
}; 

let winLossDraw = () => {
    const winLossDrawPara = document.createElement('p');
    playerScore > computerScore ? winLossDrawPara.textContent = "You won the match!" 
    : computerScore == playerScore ? winLossDrawPara.textContent = "The match was a draw!"
    : winLossDrawPara.textContent = "You lost the match";
    container.appendChild(winLossDrawPara);
} 

let clearBoard = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}








   
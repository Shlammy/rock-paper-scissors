function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    let arrayLength = computerChoices.length;
    let randomInt = Math.random() * arrayLength;
    let randomChoiceIndex = Math.floor(randomInt);
    return computerChoices[randomChoiceIndex];
}

function singleRound(computerSelection, playerSelection) {
   return (playerSelection == computerSelection) ? 'Draw! Play again.'
        : (computerSelection == 'Rock') && (playerSelection == 'Paper') ? 'You win! Keep going.'
        : (computerSelection == 'Rock') && (playerSelection == 'Scissors') ? 'You lose! Play again.'
        : (computerSelection == 'Paper') && (playerSelection == 'Scissors') ? 'You win! Keep going.'
        : (computerSelection == 'Paper') && (playerSelection == 'Rock') ? 'You lose! Play again.'
        : (computerSelection == 'Scissors') && (playerSelection == 'Rock') ? 'You win! Keep going.'
        : (computerSelection == 'Scissors') && (playerSelection == 'Paper') ? 'You lose! Play again.'
        : 'Pick Rock, Paper, or Scissors';
}

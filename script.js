function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    let arrayLength = computerChoices.length;
    let randomInt = Math.random() * arrayLength;
    let randomChoiceIndex = Math.floor(randomInt);
    return computerChoices[randomChoiceIndex];
}

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(humanGuess - targetGuess);
    const computerDifference = Math.abs(computerGuess - targetGuess);

    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
};






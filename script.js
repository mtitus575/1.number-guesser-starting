let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
/*  This function creates a random number between 0 and 9.
    It will be called at the start of each new round to create a new secret number */
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

/*  This function is used to compare the user and computer guesses. It checks to see which 
    guess is closer to the secret number */
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(humanGuess - targetGuess);
    const computerDifference = Math.abs(computerGuess - targetGuess);

    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++
    } else if (winner === 'computer') {
        computerScore++
    } else {
        'An unexpected error occured'
    }
};





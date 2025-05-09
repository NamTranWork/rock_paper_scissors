function getComputerChoice() {
    let random_num = Math.random();
    random_num = Math.round(random_num * 100) / 100;
    
    if (random_num < 0.33) {
        return "Rock";
    }
    else if (random_num < 0.66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let user_input = prompt("What's your playing hand?");
    user_input = user_input.toLowerCase();

    if (user_input === "rock") {
        return "Rock";
    }
    else if (user_input === "paper") {
        return "Paper";
    }
    else if (user_input === "scissors") {
        return "Scissors";
    }
    else {
        return getComputerChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    let message;
    let currentScoreTally;

    if (humanChoice === computerChoice) {
        message = "It's a draw!";
    }
    else if (
        humanChoice === "Rock" && computerChoice === "Scissors" || 
        humanChoice === "Paper" && computerChoice === "Rock" || 
        humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        message = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    else {
        message = `You Lose! ${humanChoice} loses against ${computerChoice}!`;
        computerScore++;
    }

    currentScoreTally = `Human: ${humanScore} || Computer: ${computerScore}`;
    console.log(message + " " + currentScoreTally);
}

function playGame() {
    let humanChoice;
    let computerChoice;

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();
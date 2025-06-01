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

function checkWinner() {
    if (humanScore === 5) {
        winner.textContent = "Player Wins!!!";
        wholeBody.removeChild(rockButton);
        wholeBody.removeChild(paperButton);
        wholeBody.removeChild(scissorsButton);
    }
    else if (computerScore === 5) {
        winner.textContent = "Computer Wins!!!";
        wholeBody.removeChild(rockButton);
        wholeBody.removeChild(paperButton);
        wholeBody.removeChild(scissorsButton);
    }
}

function playRound(humanChoice, computerChoice) {
    let message;
    let currentScoreTally = document.querySelector("#scoreTally");
    let displayedResults = document.querySelector('#results');
    let resultMessage = document.createElement("p");

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

    currentScoreTally.textContent = `Human: ${humanScore} || Computer: ${computerScore}`;
    resultMessage.textContent = message;
    displayedResults.appendChild(resultMessage);
    checkWinner();
}

function playGame() {
    let humanChoice;
    let computerChoice;

    currentScoreTally.textContent = `Human: ${humanScore} || Computer: ${computerScore}`;

    rockButton.addEventListener('click', () => {
        humanChoice = "Rock";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
    
    paperButton.addEventListener('click', () => {
        humanChoice = "Paper";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })

    scissorsButton.addEventListener('click', () => {
        humanChoice = "Scissors";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
}

let humanScore = 0;
let computerScore = 0;
let wholeBody = document.querySelector('body');
let winner = document.querySelector('#winnerResult');
let currentScoreTally = document.querySelector("#scoreTally");
let rockButton = document.querySelector('#rockButton');
let paperButton = document.querySelector('#paperButton');
let scissorsButton = document.querySelector('#scissorsButton');
playGame();
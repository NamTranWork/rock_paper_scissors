### Function: getComputerChoice
- Generate a random number between 0 and 1.
- If random < 0.33 → return "Rock"
- Else if random < 0.66 → return "Paper"
- Else → return "Scissors"

### Function: getHumanChoice
- Prompt the user for input.
- Convert input to lowercase.
- If input is "rock" → return "Rock"
- Else if input is "paper" → return "Paper"
- Else if input is "scissors" → return "Scissors"
- Else → return default "Rock"

### Function: playRound(humanChoice, computerChoice)
- Initialize message and currentScoreTally
- Compare humanChoice and computerChoice:
    - If equal → message = "It's a draw!"
    - Rock beats Scissors → message = "You win! Rock beats Scissors"; increment humanScore
    - Paper beats Rock → message = "You win! Paper beats Rock"; increment humanScore
    - Scissors beats Paper → message = "You win! Scissors beats Paper"; increment humanScore
    - Otherwise → message = "You lose!"; increment computerScore
- Update currentScoreTally
- Print message and score tally

### Function: playGame
- Set humanScore and computerScore to 0
- Repeat 5 rounds:
    - Get humanChoice from getHumanChoice()
    - Get computerChoice from getComputerChoice()
    - Call playRound(humanChoice, computerChoice)

Call playGame()

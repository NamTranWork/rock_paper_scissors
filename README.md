# Rock Paper Scissors Game

## Global Variables
- `humanScore` and `computerScore` initialized to 0.
- DOM elements:
  - `wholeBody`: document body
  - `winner`: Element to display the winner
  - `currentScoreTally`: Element showing the current score
  - `rockButton`, `paperButton`, `scissorsButton`: Buttons for player input

## Function: `getComputerChoice()`
- Generates a random number between 0 and 1 (rounded to two decimal places).
- Decision logic:
  - If `random_num < 0.33` → returns `"Rock"`
  - Else if `random_num < 0.66` → returns `"Paper"`
  - Else → returns `"Scissors"`

## Function: `checkWinner()`
- Checks if either player has reached a score of 5.
- If `humanScore === 5` → displays "Player Wins!!!" and removes buttons.
- If `computerScore === 5` → displays "Computer Wins!!!" and removes buttons.

## Function: `playRound(humanChoice, computerChoice)`
- Initializes message and retrieves score/result DOM elements.
- Compares choices:
  - If equal → message = `"It's a draw!"`
  - If player wins:
    - `"Rock"` beats `"Scissors"`
    - `"Paper"` beats `"Rock"`
    - `"Scissors"` beats `"Paper"`
    - Increments `humanScore`, sets win message
  - Else → player loses, increments `computerScore`, sets lose message
- Updates DOM with result message and current score.
- Calls `checkWinner()`.

## Function: `playGame()`
- Adds event listeners to each button:
  - On click, sets `humanChoice`, calls `getComputerChoice()`, then `playRound()`
- Displays current score initially.

## Execution
- Selects DOM elements and initializes score.
- Calls `playGame()` to start the game.
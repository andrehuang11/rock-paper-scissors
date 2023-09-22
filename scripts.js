const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
const playerScoreDiv = document.getElementById('player');
const computerScoreDiv = document.getElementById('computer');
const winner = document.getElementById('winner'); 
const reset = document.getElementById("reset");

reset.style.display = "none";

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        return result.innerText = "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        return result.innerText = "You Lose! Paper beats Rock";
    } else if ((playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")) {
        computerScore++;
        return result.innerText = "You lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        return result.innerText = "You Win! Scissors beats Paper";
    } else if ((playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")) {
        playerScore++;
        return result.innerText = "You Win! Paper beats Rock";
    } else if ((playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors")) {
        computerScore++;
        return result.innerText = "You Lose! Scissors beats Paper";
    } else {
        return result.innerText = "Draw!";
    }
}

function showWinner(playerScore, computerScore) {
    if (playerScore === "Player: 5") {
        winner.innerText = "Player wins!";
        reset.style.display = "";
    } else if (computerScore === "Computer: 5")  {
        winner.innerText = "Computer wins!";
        reset.style.display = "";
    }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5)
        playRound(button.textContent, getComputerChoice());
        playerScoreDiv.innerText = "Player: " + playerScore;
        computerScoreDiv.innerText = "Computer: " + computerScore;
        showWinner(playerScoreDiv.innerText, computerScoreDiv.innerText);
  });
});
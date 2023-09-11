function getComputerChoice() {
    let randomnumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    if (randomnumber === 1) {
        return "Rock";
    } else if (randomnumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You Lose! Paper beats Rock";
    } else if ((playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")) {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You Win! Scissors beats Paper";
    } else if ((playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock")) {
        return "You Win! Paper beats Rock";
    } else if ((playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors")) {
        return "You Lose! Scissors beats Paper";
    } else {
        return "Draw!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection;
        do {
            playerSelection = prompt("Rock, paper or scissors?");
        } while (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("Win")) {
            playerScore += 1;
        } else if (result.includes("Lose")) {
            computerScore += 1;
        }
        console.log(`Score: Player = ${playerScore} Computer = ${computerScore}`)
    }

    if (playerScore > computerScore) {
        return console.log("Player wins the best of 5!");
    } else if (playerScore < computerScore) {
        return console.log("Computer wins the best of 5!");
    } else {
        return console.log("The game ended in a draw!");
    }
}

game();
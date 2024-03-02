let score = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        score--;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        score++;
    }
    else if (playerSelection === computerSelection) {
        score;
    }
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    switch(random) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
}

function playGame() {
    for (let round = 0; round < 5; round++) {
        let playerSelection = prompt();
        playerSelection = playerSelection.toLowerCase();
        console.log("I've chosen " + playerSelection);
        let computerSelection = getComputerChoice();
        console.log('PC choose ' + computerSelection);
        playRound(playerSelection, computerSelection);
        console.log(score);
    }
    return score;
}

playGame();
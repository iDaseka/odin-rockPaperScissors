let score = 0;
let playerSelection = '';

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

let myScore = document.querySelector('#myScore');
let pcScore = document.querySelector('#pcScore');

let match = document.querySelector('#match');

myScore.innerHTML = 0;
pcScore.innerHTML = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        myScore.innerHTML = parseInt(myScore.innerHTML) - 1;
        pcScore.innerHTML = parseInt(pcScore.innerHTML) + 1;
        ;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        myScore.innerHTML = parseInt(myScore.innerHTML) + 1;
        pcScore.innerHTML = parseInt(pcScore.innerHTML) - 1;
    }
    else if (playerSelection === computerSelection){
        myScore.innerHTML = parseInt(myScore.innerHTML);
        pcScore.innerHTML = parseInt(pcScore.innerHTML);
    }
};

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    switch(random) {
        case 0: return 'rock'
        case 1: return 'paper'
        case 2: return 'scissors'
    }
};

function playGame() {
    if (parseInt(myScore.innerHTML) === 5){
        match.innerHTML = 'You win!';
    }
    else if (parseInt(pcScore.innerHTML) === 5){
        match.innerHTML = 'The PC wins!';
    }
    else{
        match.innerHTML = '';
        match.innerHTML = "I've chosen " + playerSelection;
        let computerSelection = getComputerChoice();
        match.innerHTML += 'PC choose ' + computerSelection;
        playRound(playerSelection, computerSelection);
    }
};

rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    playGame();
});

paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    playGame();
});

scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    playGame();
});
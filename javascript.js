const selection = ['rock', 'paper', 'scissors'];

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const winner = document.querySelector('#winner');
const playTo = document.querySelector('#playto');
const result = document.querySelector('#result');

rockButton.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound()
})
    
paperButton.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound()
})

scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound()
})

   
let playerScore = 0;
let computerScore = 0;
let winningScore = 5;
let isGameOver = false;

function playRound(){

    
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];
    
//Rock Choice
    if (playerSelection == "rock" && computerSelection == "scissors") {
        
        if (!isGameOver) {
            playerScore++;
            result.textContent = "You Win! Rock beats Scissors!";
            if (playerScore === winningScore) {
                isGameOver = true;
                winner.textContent = "You Win!";
                
            }
        }
        player.textContent = playerScore;
        computer.textContent = computerScore;
        
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        if (!isGameOver) {
            computerScore++;
            result.textContent = "You Lose! Paper beats Rock!";
            if (computerScore === winningScore) {
                isGameOver = true;
                winner.textContent = "You Lose!";
            }
        }
        player.textContent = playerScore;
        computer.textContent = computerScore;
      
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        result.textContent = "Its a Tie!";
        player.textContent = playerScore;
        computer.textContent = computerScore;
        
    }
//paper Choice
    else if (playerSelection == "paper" && computerSelection == "rock") {
        if (!isGameOver) {
            playerScore++;
            result.textContent = "You Win! Paper beats Rock!";
            if (playerScore === winningScore) {
                isGameOver = true;
                winner.textContent = "You Win!";
            }
        }
        player.textContent = playerScore;
        computer.textContent = computerScore;
   
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        if (!isGameOver) {
            computerScore++;
            result.textContent = "You Lose! Scissors beats Paper!";
            if (computerScore === winningScore) {
                isGameOver = true;
                winner.textContent = "You Lose!";
            }
        }
        player.textContent = playerScore;
        computer.textContent = computerScore;
     
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        result.textContent = "Its a Tie!";
        player.textContent = playerScore;
        computer.textContent = computerScore;
    
    }
//scissors Choice
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        if (!isGameOver) {
            playerScore++;
            result.textContent = "You Win! Scissors beats Paper!";
            if (playerScore === winningScore) {
                isGameOver = true;
                winner.textContent = "You Win!";
            }
        }
        player.textContent = playerScore;
        computer.textContent = computerScore;
       
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        if (!isGameOver) {
            computerScore++;
            result.textContent = "You Lose! Rock beats Scissors!";
            if (computerScore === winningScore) {
                isGameOver = true;
                winner.textContent = "You Lose!";
            }
        }
        player.textContent = playerScore;
        computer.textContent = computerScore;
        
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result.textContent = "Its a Tie!";
        player.textContent = playerScore;
        computer.textContent = computerScore;
    
    } else {
        return "Something Went Wrong";
    }

}
//Reset game to starting values
function reset(){
    isGameOver = false;
    playerScore = 0;
    computerScore = 0;
    player.textContent = 0;
    computer.textContent = 0;
    winner.textContent = "";
    result.textContent = "";
}
//Set number of rounds
playTo.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)


   


const selection = ['rock', 'paper', 'scissors'];

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const winner = document.querySelector('#winner');
const playTo = document.querySelector('#playto');

rockButton.addEventListener('click', () => playRound())
    playerSelection = 'rock';

paperButton.addEventListener('click', () => playRound())
    playerSelection = 'paper';

scissorsButton.addEventListener('click', () => playRound())
    playerSelection = 'scissors';

   
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
            if (computerScore === winningScore) {
                isGameOver = true;
                winner.textContent = "You Lose!";
            }
        }
        player.textContent = playerScore;
        computer.textContent = computerScore;
      
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        player.textContent = playerScore;
        computer.textContent = computerScore;
        
    }
//paper Choice
    else if (playerSelection == "paper" && computerSelection == "rock") {
        if (!isGameOver) {
            playerScore++;
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
            if (computerScore === winningScore) {
                isGameOver = true;
                winner.textContent = "You Lose!";
            }
        }
        player.textContent = playerScore;
        computer.textContent = computerScore;
     
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        player.textContent = playerScore;
        computer.textContent = computerScore;
    
    }
//scissors Choice
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        if (!isGameOver) {
            playerScore++;
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
            if (computerScore === winningScore) {
                isGameOver = true;
                winner.textContent = "You Lose!";
            }
        }
        player.textContent = playerScore;
        computer.textContent = computerScore;
        
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
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
}
//Set number of rounds
playTo.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)


   


const selection = ['rock', 'paper', 'scissors'];
   
let playerCounter = 0;
let computerCounter = 0;

function playRound(){

    let playerSelection = prompt('Please choose Rock, Paper, or Scissors: ').toLowerCase();
    // if (selection.includes(playerSelection))
    
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];
    
//Rock Choice
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerCounter++
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerCounter++
        return "Loser! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a Draw";
    }
//paper Choice
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerCounter++
        return "You Win! Paper beats Rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerCounter++
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a Draw";
    }
//scissors Choice
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerCounter++
        return "You win! Scissors beat Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerCounter++
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a Draw";
    } else {
        return "Something Went Wrong";
    }

}

function game(){
    for (let i = 0; i < 5; i++){
    console.log(playRound())
    }
    if (playerCounter > computerCounter){
        console.log (playerCounter, ":", computerCounter, "You Win!")
    }
    else if (playerCounter < computerCounter){
        console.log (playerCounter, ":", computerCounter, "You Lose!")
    
    }
    else {
        console.log(playerCounter, ":", computerCounter, "It's a Draw")
    }

}


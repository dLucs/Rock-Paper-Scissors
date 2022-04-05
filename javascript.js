const selection = ['rock', 'paper', 'scissors'];
   


function playRound(){
    
    let playerSelection = prompt('Please choose Rock, Paper, or Scissors: ').toLowerCase();
    // if (selection.includes(playerSelection))
    
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];

//Rock Choice
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Loser! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a Draw";
    }
//paper Choice
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a Draw";
    }
//scissors Choice
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beat Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a Draw";
    } else {
        return "Something Went Wrong";
    }

}
console.log(playRound())
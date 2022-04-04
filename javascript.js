const selection = ['Rock', 'Paper', 'Scissors']
function computerPlay(){
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection;
}
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return 'rock';
    if (choice == 1) return 'paper';
    if (choice == 2) return 'scissors';
}

function playRound(playerC, compC){
    if(playerC == 'rock' && compC == 'paper') return 1;
    if(playerC == 'paper' && compC == 'scissors') return 1;
    if(playerC == 'scissors' && compC == 'rock') return 1;
    if(playerC == 'paper' && compC == 'rock') return 2;
    if(playerC == 'scissors' && compC == 'paper') return 2;
    if(playerC == 'rock' && compC == 'scissors') return 2;
    if(playerC == compC) return 0;
}

function game(wins = 5){
    alert(`Welcome to the Rock Paper Scissors game! This game is to ${wins} wins`);
    
    let compW = 0, playerW = 0;
    
    while(compW < wins && playerW < wins) {
        let playerSelection = prompt('Enter a choice');
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            compW++;
            alert(`You lose this round! ${computerSelection} beats ${playerSelection} \n Player: ${playerW} \n Computer: ${compW}`);
        }
        else if (result == 2){
            playerW++;
            alert(`You win this round! ${playerSelection} beats ${computerSelection} \n Player: ${playerW} \n Computer: ${compW}`);
        }
        else alert(`It's a tie \n Player: ${playerW} \n Computer: ${compW}`);
    }
    if(compW > playerW) alert("Computer wins! Better luck next time, pal :/");
    else alert("Player wins! Well done :D");
}

game(3);
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

const options = document.querySelectorAll('button');
const gameText = document.querySelector('div');

let compW = 0, playerW = 0;

for(let option of options){
    option.addEventListener('click', () => {
        game(option.id, getComputerChoice());
    })
}

function game(playerChoice, computerChoice){
    let result = playRound(playerChoice, computerChoice);
    if(result == 1){
        compW++;
        gameText.innerText = `You lose this round! Computer: ${compW} Player: ${playerW}`;
    } else if(result == 2){
        playerW++;
        gameText.innerText = `You win this round! Computer: ${compW} Player: ${playerW}`;
    } else {
        gameText.innerText = `It's a tie! Computer: ${compW} Player: ${playerW}`;
    }
    if(compW == 5){
        gameText.innerText = 'You lose the game! Press an option to play again';
        compW = 0;
        playerW = 0;
    } else if(playerW == 5){
        gameText.innerText = 'You win the game! Press an option to play again';
        compW = 0;
        playerW = 0;
    }
}

/*function game(wins = 5){
    alert(`Welcome to the Rock Paper Scissors game! This game is to ${wins} wins`);
    let compW = 0, playerW = 0;
    
    while(compW < wins && playerW < wins) {
        let playerSelection = '';
        let check = true;
        while(check){
            playerSelection = prompt('Enter a choice');
            playerSelection = playerSelection.toLowerCase();
            if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
                alert("Wrong selection, try again");
            } else check = false;
        }
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
}*/

//let wins = Number(prompt("Select the amount of wins"));
//if (wins == undefined || wins == '') game()
//else game(wins);
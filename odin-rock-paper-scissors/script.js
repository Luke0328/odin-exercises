function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function rps(userChoice, computerChoice) {
    let user_win = 0;
    userChoice = userChoice.toLowerCase();
    if(userChoice === computerChoice) {
        console.log("Tie!");
        return -1;
    }
    switch (userChoice) {
        case "rock":
            switch(computerChoice) {
                case "scissors":
                    user_win = 1;
                    break;
                case "paper":
                    user_win = 0;
                    break;
            }
            break;

        case "paper":
            switch(computerChoice) {
                case "rock":
                    user_win = 1;
                    break;
                case "scissors":
                    user_win = 0;
                    break;
            }
            break;
    
        case "scissors":
            switch(computerChoice) {
                case "paper":
                    user_win = 1;
                    break;
                case "rock":
                    user_win = 0;
                    break;
            }
            break;
    
    
        default:
            break;
    }

    const capitalizedUserChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    const capitalizedComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if(user_win) {
        console.log(`You win! ${capitalizedUserChoice} beats ${capitalizedComputerChoice}`);
    }
    else {
        console.log(`You lost! ${capitalizedUserChoice} loses to ${capitalizedComputerChoice}`);
    }
    return user_win;
}



function game() {
    let playerSelection;
    let computerSelection;
    let wins = 0;
    let losses = 0;

    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Play Rock Paper Scissors! Enter your choice:");
        const computerSelection = getComputerChoice();
        let res = rps(playerSelection, computerSelection)
        if(res === 1) {
            wins++;
        }
        else if(res === 0) {
            losses++;
        }
    }
    if(wins > losses) {
        console.log("Player wins!");
    }
    else if (wins < losses) {
        console.log("Computer wins!")
    }
    else {
        console.log("Game is drawn.")
    }
}

game();
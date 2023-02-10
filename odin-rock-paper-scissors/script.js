function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function rps(userChoice, computerChoice) {
    let user_win = 0;
    userChoice = userChoice.toLowerCase();

    const res = document.querySelector(".result");

    if(userChoice === computerChoice) {
        res.textContent = "Tie!";
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
        res.textContent = `You win! ${capitalizedUserChoice} beats ${capitalizedComputerChoice}`;
    }
    else {
        res.textContent = `You lost! ${capitalizedUserChoice} loses to ${capitalizedComputerChoice}`;
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

const rock_button = document.querySelector(".rock");

let wins = 0;
let losses = 0;

function displayScore() {
    const score = document.querySelector(".score");
    if(wins >= 5) {
        score.textContent = "Player wins!";
        return;
    }
    else if(losses >= 5) {
        score.textContent = "Computer wins!"
        return;
    }

    score.textContent = `${wins} wins, ${losses} losses`;
}

displayScore();

rock_button.addEventListener("click", (e) => {
    const res = rps('rock', getComputerChoice());
    if(res === 1) {
        wins++;
    }
    else if(res === 0) {
        losses++;
    }
    displayScore();
});

const paper_button = document.querySelector(".paper");

paper_button.addEventListener("click", (e) => {
    const res = rps('paper', getComputerChoice());
    if(res === 1) {
        wins++;
    }
    else if(res === 0) {
        losses++;
    }
    displayScore();
});

const sci_button = document.querySelector(".scissors");

sci_button.addEventListener("click", (e) => {
    const res = rps('scissors', getComputerChoice());
    if(res === 1) {
        wins++;
    }
    else if(res === 0) {
        losses++;
    }
    displayScore();
});
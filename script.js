// Initialize scores
let userScore = 0;
let comScore = 0;

// Select DOM elements
const choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#playWin');
let yourScorePara = document.querySelector('#user-score');
let comScorePara = document.querySelector('#com-score');

// Function to display result of the game
showUserWin = (userWin, userChoice, computerGame) => {
    if (userWin) {
        // Update user score
        userScore++;
        yourScorePara.innerHTML = userScore;

        // Display win message
        msg.innerText = `You win! Your ${userChoice} beats ${computerGame}`;
        msg.style.backgroundColor = "green";
    } else {
        // Update computer score
        comScore++;
        comScorePara.innerHTML = comScore;

        // Display lose message
        msg.innerText = `You lose! ${computerGame} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Function to handle draw game
const drawGame = () => {
    // Display draw message
    msg.innerHTML = `Game was draw.`;
    msg.style.backgroundColor = "black";
}

// Function to simulate computer's choice
function complaygame() {
    const options = ['stone', 'paper', 'scissors'];
    const comPlay = Math.floor(Math.random() * 3);
    return options[comPlay];
}

// Function to handle user's choice
function userplaygame(userChoice) {
    console.log("user choice", userChoice);
    const computerGame = complaygame();
    console.log("computer choice is ", computerGame);

    if (userChoice === computerGame) {
        drawGame();
    } else {
        // Determine the winner
        let userWin = true;
        if (userChoice === "stone") {
            userWin = computerGame === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerGame === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = computerGame === "stone" ? false : true;
        }
        showUserWin(userWin, userChoice, computerGame);
    }
}

// Event listener for user's choice
choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        const userChoice = event.target.getAttribute("id");
        userplaygame(userChoice);
    })
})

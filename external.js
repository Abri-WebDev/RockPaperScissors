let userScore = 0;
let computerScore = 0;
const result_p = document.querySelector(".result > p");
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "p") return "Paper";
    if (letter === "r") return "Rock";
    return "Scissors";
}

function win (userChoice, computerChoice) {
    userScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = `${convertToWord(userChoice)} eats ${convertToWord(computerChoice)} . You win!`;
}

function lose (userChoice, computerChoice) {
    computerScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = `${convertToWord(computerChoice)} eats ${convertToWord(userChoice)} . You lose!`;
}

function draw (userChoice, computerChoice) {
    result_p.textContent = `It's a draw!`
    }



    function game (userChoice) {
    const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
        win(userChoice, computerChoice);
        break;
    case "sr":
    case "ps":
    case "rp":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "ss":
    case "pp":
        draw(userChoice, computerChoice);
        break;
        default:
            gameOver();
}
}

function main () {
rock_div.addEventListener('click', function () {
    game("r");    
});

paper_div.addEventListener('click', function () {
    game("p");
});

scissor_div.addEventListener('click', function () {
    game("s");
});
}
main();
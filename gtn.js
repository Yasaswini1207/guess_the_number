let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomnumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessednum = parseInt(userInput.value);
    if (guessednum > randomnumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "orange";
    } else if (guessednum < randomnumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "red";
    } else if (guessednum === randomnumber) {
        gameResult.textContent = "Congratulations! You Won";
        gameResult.style.backgroundColor = "Green";
    } else {
        gameResult.textContent = "Please Provide A Valid Number";
        gameResult.style.backgroundColor = "purple";
    }
}
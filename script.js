let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let guess = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");

    if (guess === secretNumber) {
        result.textContent = "🎉 You got it!";
    } else if (guess > secretNumber) {
        result.textContent = "🔽 Too high!";
    } else {
        result.textContent = "🔼 Too low!";
    }
}

let myNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let winState = false;
let attempt = 5;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

// for check button...........................

document.querySelector(".btn.check").addEventListener("click", function () {
    
    if (!winState) {
        //get number from input
        let guess = Number(document.querySelector(".guess").value);
        console.log(attempt);
        //check the guessing number and take action....
        if (!guess) {
            displayMessage("Enter a correct number...");
        } else if (attempt == 0) {
            alert('You loss the game , Press "again" button to play again.');
        } else if (guess === myNum) {
            displayMessage("Hurrey! , You Win....");
            document.querySelector(".number").textContent = myNum;
            document.querySelector("body").style.background = "#60b347";
            winState = true;
            if (highScore < score) {
                highScore = score;
                document.querySelector(".highscore").textContent = score;
            }
        } else if (guess > myNum) {
            displayMessage("Too high...");
            score--;
            attempt--;
            document.querySelector(".score").textContent = score;
        } else if (guess < myNum) {
            displayMessage("Too low...");
            score--;
            attempt--;
            document.querySelector(".score").textContent = score;
        }
    } else {
        alert('You already Won the game, Press "again" button to play again.');
    }
    if(attempt == 0){
        document.querySelector('body').style.background = '#F9423C';
        displayMessage("You loss......");
    }
    document.querySelector('.atmp-left').textContent = attempt;
});

//  For play again button......................
document.querySelector(".btn.again").addEventListener("click", function () {
    myNum = Math.trunc(Math.random() * 20) + 1;
    console.log(myNum);
    score = 20;
    winState = false;
    attempt = 5;

    document.querySelector(".score").textContent = score;
    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.background = "#333";
});
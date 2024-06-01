let uScore = 0;
let cScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const uScPara = document.querySelector("#uscore");
const cScPara = document.querySelector("#cscore");


const showWin = (userWin, userChoice, comChoice) => {
    if (userWin) {
        uScore++;
        uScPara.innerText = uScore;
        console.log ("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        cScore++;
        cScPara.innerText = cScore;
        console.log ("Computer Win!");
        msg.innerText = `Computer Win! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const drawGame = () => {
    console.log("It was a Draw");
    msg.innerText = "It was a DRAW Game!";
    msg.style.backgroundColor = "blue";
};


const getComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};


const playGame = (userChoice) => {
    console.log ("User Choice was:", userChoice);
    const comChoice = getComChoice();
    console.log ("Computer Clicked:", comChoice);

    if (userChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = comChoice === "scissor" ? false : true;
        } else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWin(userWin, userChoice, comChoice);
    }
};


choices.forEach ((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userChoice);
    })
}); 
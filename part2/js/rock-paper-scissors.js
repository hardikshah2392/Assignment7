/* eslint - env browser*/

var userInput = window.prompt("Enter rock, paper or scissor (r/p/s)");
if (userInput === 'r' || userInput ==='p' || userInput === 's') {
    var rand = (Math.random()*10);
    var computerChoice;

    if (rand < 0.33) {
        computerChoice = "r";
    } else if (rand > 0.33 && rand < 0.66) {
        computerChoice = "p";
    } else {
        computerChoice = "s";
    };

    if (userInput === 'r') {
        if (computerChoice === 'r') {
            window.alert("You and Computer both chose rock. Its a tie!!");
        } else if (computerChoice ==='p') {
            window.alert("You chose rock and Computer chose paper. Computer Wins!!")
        } else if (computerChoice === 's') {
            window.alert("You chose rock and Computer chose scissor. You win!!")
        }
    }else if (userInput === 'p') {
        if (computerChoice === 'p') {
            window.alert("You and Computer both chose paper. Its a tie!!");
        } else if (computerChoice ==='s') {
            window.alert("You chose paper and Computer chose scissor. Computer Wins!!")
        } else if (computerChoice === 'r') {
            window.alert("You chose paper and Computer chose rock. You win!!")
        }
    } else if (userInput === 's') {
        if (computerChoice === 's') {
            window.alert("You and Computer both chose scissor. Its a tie!!");
        } else if (computerChoice ==='r') {
            window.alert("You chose scissor and Computer chose rock. Computer Wins!!")
        } else if (computerChoice === 'p') {
            window.alert("You chose scissor and Computer chose paper. You win!!")
        }
    }
}else {
    window.alert("Please enter from the given choices (r/p/c)");
}
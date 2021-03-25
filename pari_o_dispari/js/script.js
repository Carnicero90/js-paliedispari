const minNumber = 1;
const maxNumber = 5;

const validAnswers = ["pari", "dispari"];
var userChoice;
while (!(validAnswers.includes(userChoice))) {
    userChoice = prompt("pari o dispari?");
}

var userNumber;
while (!(userNumber >= minNumber && userNumber <= maxNumber)) {
    userNumber = parseInt(prompt("inserire numero da 1 a 5"));
}

var compiNumber = randomInt(minNumber, maxNumber);
alert(compiNumber);
var resIsOdd = isOdd(userNumber + compiNumber);
var userWon = userChoice === "dispari" ? resIsOdd : !resIsOdd;
var resultMessage = userWon ? "hai vinto!" : "hai perso!";
alert(resultMessage);

// FUNCTIONS

function isOdd(number) {
    return Boolean(number % 2);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}
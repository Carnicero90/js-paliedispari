const minNumber = 1;
const maxNumber = 5;

// PROMPTS
var userChoice;
while (userChoice === undefined) {
   switch (prompt("pari o dispari?")) {
       case "pari":
           userChoice = false;
           break;
        case "dispari":
            userChoice = true;
            break;
        default:
            alert("inserire risposta valida!");
   }
}

var userNumber;
while (!(userNumber >= minNumber && userNumber <= maxNumber)) {
    userNumber = parseInt(prompt(`inserire numero da ${minNumber} a ${maxNumber}`));
}

var compiNumber = randomInt(minNumber, maxNumber);
alert("Mister Computer ha scelto: " + compiNumber);

var resIsOdd = isOdd(userNumber + compiNumber);
var userWon = userChoice === resIsOdd;
var resultMessage = userWon ? "hai vinto!" : "hai perso!";
alert(resultMessage);
location.reload();

// FUNCTIONS

function isOdd(number) {
    /* return Boolean(1) (aka: true) if number % 2 === 1 (aka: number is odd),
    else: false */
    return Boolean(number % 2);
}

function randomInt(min, max) {
    //return a random integer between min and max
    return Math.floor(Math.random() * max) + min;
}
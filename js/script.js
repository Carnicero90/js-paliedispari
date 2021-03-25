function isPalindrome(word) {
    word = word.toLowerCase();
    var wordReverse = word.split('').reverse().join('');
    return word === wordReverse;
}

function isOdd(number) {
    return Boolean(number % 2);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

var validAnswers = ["pari", "dispari"];
var userChoice;
while (!(validAnswers.includes(userChoice))) {
    userChoice = prompt("pari o dispari?");
}
var userNumber;
while (!(userNumber >= 1 && userNumber <= 5)) {
    userNumber = parseInt(prompt("inserire numero da 1 a 5"));
}

var compiNumber = randomInt(1, 5);
alert(compiNumber);
var resIsOdd = isOdd(userNumber + compiNumber);
var userWon = userChoice === "dispari" ? resIsOdd : !resIsOdd;
var resultMessage = userWon ? "hai vinto!" : "hai perso!";
alert(resultMessage);
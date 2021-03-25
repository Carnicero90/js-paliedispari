// VARS

var word = prompt("parola tu dire per favore (scrivi 'ciao' per uscire)");

// OUTPUT

while (word !== "ciao") {
    alert(`"${word}" ${isPalindrome(word) ? "" : "non"} è un palindromo.`);
    word = prompt("parola tu dire per favore (scrivi 'ciao' per uscire)");
}
alert("ciao!!oaic")

// FUNCTIONS
function isPalindrome(word) {
    // takes a string, returns true if string === string reversed
    word = word.toLowerCase();
    var wordReverse = word.split('').reverse().join('');
    return word === wordReverse;
}
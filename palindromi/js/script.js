// FUNCTIONS
function isPalindrome(word) {
    // takes a string, returns true if string === string reversed
    word = word.toLowerCase();
    var wordReverse = word.split('').reverse().join('');
    return word === wordReverse;
}

function showIfPal() {
    var word = document.getElementById("user-input").value;
    var wordIsPal = isPalindrome(word);
    // IF !wordIsPal (default)
    var greetOrGrieve = ["main-colors palindrome", "non", "peccato!"];
    // IF wordIsPal
    if (wordIsPal) {
        greetOrGrieve = ["main-colors", "", "complimenti!"];
    }
    var message = `<span class="${greetOrGrieve[0]}">"${word}"</span> ${greetOrGrieve[1]} è un palindromo, ${greetOrGrieve[2]}`;
    document.getElementById("output").innerHTML = message;
}
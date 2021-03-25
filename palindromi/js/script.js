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
    var greetOrGrieve = wordIsPal ? ["", "complimenti!"] : ["non", "peccato!"];
    message = `"${word}" ${greetOrGrieve[0]} è un palindromo, ${greetOrGrieve[1]}`;
    document.getElementById("output").innerHTML = message;
}
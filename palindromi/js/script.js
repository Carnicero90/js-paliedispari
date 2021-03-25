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
    message = `"${word}" ${wordIsPal ? "" : "non"} è un palindromo.`;
    document.getElementById("output").innerHTML = message;
}
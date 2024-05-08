//  Check for Palindrome:
// Write a function that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards),
// otherwise returns false.
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

function checkPalindrome() {
    var inputString = document.getElementById("inputString").value;
    var result = isPalindrome(inputString);
    
    if (result) {
        document.getElementById("result").innerHTML = "'" + inputString + "' is a palindrome.";
    } else {
        document.getElementById("result").innerHTML = "'" + inputString + "' is not a palindrome.";
    }
}
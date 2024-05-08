//Reverse a String:
// Write a function that takes a string as a parameter and returns the reverse of that string.
function reverseString() {
    var inputString = document.getElementById("inputString").value;

    var reversedString = "";
    for (var i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    document.getElementById("reversedString").innerHTML = "Reversed String: " + reversedString;
}
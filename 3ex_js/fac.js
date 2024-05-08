//Calculate the Factorial of a Number:
// Write a function that takes a number as a parameter and returns the factorial of that number.
function factorial(number) {
    
    if (number < 0) {
        return "Factorial is not defined for negative numbers";
    }
    
    var result = 1;
    
    for (var i = 2; i <= number; i++) {
        result *= i;
    }
    
    return result;
}

function calculateFactorial() {
    var inputNumber = parseInt(document.getElementById("numberInput").value);
    var result = factorial(inputNumber);
    
    document.getElementById("factorialResult").innerHTML = "Factorial of " + inputNumber + " is: " + result;
}
//Check if a Number is Prime:
// Write a function that takes a number as a parameter and returns true if it's a prime number, otherwise returns false. 
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

function checkPrime() {
    var inputNumber = parseInt(document.getElementById("inputNumber").value);
    var result = isPrime(inputNumber);
    
    if (result) {
        document.getElementById("result").innerHTML = inputNumber + " is a prime number.";
    } else {
        document.getElementById("result").innerHTML = inputNumber + " is not a prime number.";
    }
}
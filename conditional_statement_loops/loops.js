//1.Write a program that checks if a number is even or odd.
function checkEvenOrOdd() {
  let number = parseInt(document.getElementById("numberInput").value);

  if (number % 2 === 0) {
    document.getElementById("result").innerText = `${number} is even.`;
  } else {
    document.getElementById("result").innerText = `${number} is odd.`;
  }
}
//2.Determine the Greater Number
function checkTheGreaterNumber() {
  let number1 = parseInt(document.getElementById("fistInput").value);
  let number2 = parseInt(document.getElementById("secondInput").value);

  if (number1 > number2) {
    document.getElementById("greater").innerText = `${number1} is greater.`;
  } else {
    document.getElementById("greater").innerText = `${number2} is greater.`;
  }
}
//3.Write a program that assigns a letter grade based on a numerical grade.
function checkTheGrade() {
  let score = parseInt(document.getElementById("score").value);
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  document.getElementById("grade").innerText = "Your Grade:" + `${grade}`;
}

//4.Write a program that calculates the ticket price based on age.
function checkYourAge() {
  let age = parseInt(document.getElementById("age").value);
  let ticketPrice;
  if (age < 12) {
    ticketPrice = 5;
  } else if (age >= 12 && age < 18) {
    ticketPrice = 10;
  } else if (age >= 18 && age < 60) {
    ticketPrice = 20;
  } else {
    ticketPrice = 15;
  }
  document.getElementById("ticket_price").innerText =
    "Ticket Price: $" + `${ticketPrice}`;
}

//5.Write a program that greets the user based on the time of day.
let currentTime = new Date();
let currentHour = currentTime.getHours();
let greeting;
if (currentHour < 12) {
  greeting = "Good morning!";
} else if (currentHour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}
document.getElementById("greeting").innerText = greeting;

//6.Number Guessing Game.
function checkGuess() {
  var secretNumber = 7;
  var guess = parseInt(document.getElementById("guessInput").value);

  if (guess === secretNumber) {
    document.getElementById("guess").innerText =
      "Congratulations! You guessed the correct number.";
  } else if (guess < secretNumber) {
    document.getElementById("guess").innerText = "Try a higher number.";
  } else {
    document.getElementById("guess").innerText = "Try a lower number.";
  }
}
/*
7.Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * * 

*/
let rows = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}
document.getElementById("patternDisplay").innerText = pattern;

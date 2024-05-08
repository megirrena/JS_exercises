//1.Write a JavaScript function that reverses a number.
function reverseNumber(number) {
  let reversedNumber = number.toString().split("").reverse().join("");
  reversedNumber = parseInt(reversedNumber);
  return reversedNumber;
}

function reverseAndDisplay() {
  let number = parseInt(document.getElementById("inputNumber").value);
  let reversed = reverseNumber(number);
  document.getElementById("result").innerText = "Reversed Number: " + reversed;
}

//2.Write a JavaScript function that returns a string that has letters in alphabetical order.
function changeString(string) {
  let changedSting = string.split("").sort().join("");
  return changedSting;
}
function changeAndDisplay() {
  let string = document.getElementById("inputString").value;
  let changed = changeString(string);
  document.getElementById("change").innerHTML = "Changed String: " + changed;
}

/*
 3.Write a JavaScript function that accepts a string as a parameter 
and converts the first letter of each word into upper case.
 */
function capitalizeFirstLetterOfEachWord(sentence) {
  return sentence
    .split(" ")

    .map((word) => {
      /*This .map((word) method iterates over each word in the array created by the split() method.For each word, it performs the following operations:a.*/
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
function capitalizeAndDisplay() {
  let sentence = document.getElementById("inputSentence").value;
  let capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
  document.getElementById("capital").innerText =
    "Capitalized Sentence: " + capitalizedSentence;
}

//4.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowels(inputString) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  inputString = inputString.toLowerCase();
  for (let char of inputString) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
}

function countAndDisplay() {
  let inputString = document.getElementById("inputWord").value;
  let vowelCount = countVowels(inputString);
  document.getElementById("Vowels").innerText =
    "Number of vowels: " + vowelCount;
}

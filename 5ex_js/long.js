//Find the Longest Word in a Sentence:
// Write a function that takes a sentence as a parameter and returns the longest word in the sentence.
function findLongestWord(sentence) {
    var words = sentence.split(' ');
    var longestWord = '';
    
    words.forEach(function(word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    
    return longestWord;
}

function findLongestWord() {
    var inputSentence = document.getElementById("inputSentence").value;
    var longestWord = findLongestWord(inputSentence);
    
    document.getElementById("result").innerHTML = "The longest word is: " + longestWord;
}
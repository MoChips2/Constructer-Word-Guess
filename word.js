/* Contains a constructor, Word that depends on the Letter constructor. 
 This is used to create an object representing the current word the user is attempting to guess. 
 * An array of new Letter objects representing the letters of the underlying word
 * A function that returns a string representing the word. This should call the function on each letter object 
   (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
 * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
*/

var letter = require("./letter");

// Constructor function for creating letter objects
function Word(answer) {

    this.answer = answer;
    this.answerArr = [];

    // takes answer and splits each letter into a string array
    this.charWord = function () {
        for (i = 0; i < answer.length; i++) {
            this.answerArr.push(new letter(answer[i]));
        }
    };

    // takes user's letter guess and checks it against answerArr
    this.userGuess = function (gameGuess) {
        for (i = 0; i < this.answerArr; i++) {
            if (this.answerArr[i].input === gameGuess) {
                this.answerArr[i].choice = true;
            } else {this.answerArr[i].choice = false}
        };
    };

    //concatenate answer strings (blanks, correct guess) into a one string
    this.printWord = function (userLetter) {
        for (i = 0; i < this.answerArr; i++) {
            // if guessed userString + answerArr[i].input
            var char = this.answerArr[i].input;
            if (userLetter === char) {
                console.log(char)
            }
            // else
        }
        console.log(userString)
    }
};



// var testWord = new Word("mask");
//console.log(testWord);
// testWord.charWord();

// console.log(testWord);

module.exports = Word;
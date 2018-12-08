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

    this.charWord = function () {
        var wordLetters = this.answer.split();
        for (i = 0; i < wordLetters.length; i++) {
            this.answerArr.push(new letter(wordLetters[i]));
        }

    };

    this.userGuess = function (something) {
        
    }
};




module.exports = Word;
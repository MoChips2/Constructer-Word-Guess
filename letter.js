// Constructor for each Letter
function Letter(input) {

    this.input = input;
    this.choice = false;

    // sets up boolean value for passed in string (dependent on charCheck value to see what is printed)
    this.guessLetter = function () {
        if (this.choice === false) {
            return "_";
        } else {
            return this.input;
        }
    };
    
    // checks if the letter guessed matches any letter in the answer, if so alters boolean value
    this.charCheck = function (letterGuessed) {
       if (letterGuessed === this.input) {
           this.choice === true;
       } else {this.choice === false}
    };

};

// var testLetter = new Letter("b");
// console.log(testLetter.charCheck(process.argv[2]));
// console.log(testLetter.guessLetter()); 
// console.log(testLetter);
module.exports = Letter;
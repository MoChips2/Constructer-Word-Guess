// Constructor for each Letter
function Letter(input) {

    this.input = input;
    this.choice = false;

    this.guessLetter = function () {
        if (this.choice === false) {
            return "_";
        } else {
            return this.input;
        }
    };
    
    this.charCheck = function (letterGuessed) {
       if (letterGuessed === this.input) {
           this.choice === true;
       } else {this.choice === false}
    };

};

/* var testLetter = new Letter("b");
console.log(testLetter.charCheck(process.argv[2]));
console.log(testLetter.guessLetter()); */

module.exports = Letter;
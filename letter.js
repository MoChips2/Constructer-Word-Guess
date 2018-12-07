
function Letter(input) {
    this.input = input;
    this.choice = false;

    this.guessLetter = function () {
        if (this.choice === false) {
            return "_";
        } else {
            return this.input
        }
    };

    this.charArg = function (letterGuessed) {
       if (letterGuessed === this.input) {
           this.choice === true
       }
    };

};

module.exports = Letter;
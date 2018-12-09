// new word is pulled from movie array
// userGuess is called to check if a letter exist in the array
// prompt user for guess
// word.userGuess(thatLetter)

 var word = require("./word");
 var inquirer = require("inquirer");


var movieArr = [
    "The Lion King",
    "Aladdin",
    "Toy Story",
    "Dumbo",
    "Mulan",
];

    var randMovie = movieArr[Math.floor(Math.random() * movieArr.length)]
    var newAnswer = new word(randMovie);
    // newAnswer.charWord();

inquirer
    .prompt([
        {
            type: 'input',
            name:'letter',
            message: "Guess a letter!",
           // validate: function validateletter(only){
           //     return only !== " "
           // }
        },
    ]).then(function(letter){
        for(i=0; i<newAnswer.answerArr.length; i++) {
            newAnswer.printWord();
            console.log(newAnswer)
            console.log(letter)
        }
    })

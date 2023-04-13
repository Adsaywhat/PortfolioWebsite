// var words = [
//     "javascript",
//     "monkey",
//     "amazing",
//     "pancake"
// ];
// var word = words[Math.floor(Math.random() * words.length)];
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }

// var remainingLetters = word.length;

// while (remainingLetters > 0) {
//     // Game code goes here
//     // Show the player their progress
//     alert(answerArray.join(" "));
//     // Take input from the player
//     var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter.");
//     } else {
//         // Update the game state with the guess
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }

// }
// if(remainingLetters === 0) {
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);
// } else {
//     alert("You quit the game. The answer was " + word);
// }

//Chapter 7 Challenges
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "hangman",
    "match",
    "another",
    "loop"
];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;
var guesses = 20;
while (remainingLetters > 0 && guesses > 0) {
    // Game code goes here
    // Show the player their progress
    alert(answerArray.join(" "));
    // Take input from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    guesses--;
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    }
    else {
        // Update the game state with the guess
        guess = guess.toLowerCase();
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] !== "_") {
                    alert("You have already guessed the letter " + guess);
                    break;
                } else {
                    answerArray[j] = guess;
                    remainingLetters--;
                }

            }
        }

    }
}
    if (remainingLetters === 0) {
        alert(answerArray.join(" "));
        alert("Good job! The answer was " + word);
    } else if (guesses == 0) {
        alert("You ran out of guesses")
    }
    else {
        alert("You quit the game. The answer was " + word);
    }


// 1. More words// complete
// Add your own words to the words array. Remember to enter
// words in all lowercase.

// 2. Capital Letters //complete
// If a player guesses a capital letter, it won’t match a lowercase
// letter in the secret word. To address this potential problem,
// convert the player’s guess to lowercase. (Hint: You can use
// the toLowerCase method to convert a string to lowercase.)

// 3. Limiting Guesses //complete
// Our Hangman game gives a player unlimited guesses. Add
// a variable to track the number of guesses and end the game
// if the player runs out of guesses. (Hint: Check this variable in
// the same while loop that checks whether remainingLetters > 0.
// As we did in Chapter 2, you can use && to check whether two
// Boolean conditions are true.)

//4. Fixing a Bug
// There’s a bug in the game: if you keep guessing the same
// correct letter, remainingLetters will keep decrementing. Can
// you fix it? (Hint: You could add another condition to check
// whether a value in answerArray is still an underscore. If it’s
// not an underscore, then that letter must have been guessed
// already.)

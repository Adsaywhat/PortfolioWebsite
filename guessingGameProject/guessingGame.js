// var secret = 7;//complete
// var answer = prompt (“Please guess the secret number (1-10)”);//complete
// // Convert the string guess to an integer so that we can compare//complete
// var guess = parseInt (answer);//complete

// Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct!, otherwise “Sorry, incorrect!//complete
// How can you combine line 2 and 3 into one line//complete
// Expand the program to do this in a while loop, only exiting when the guess was correct//complete
// While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”.//complete
// When you are done make the secret number random

// var secret = 7;
// var answer = prompt("Please guess the secret number (1-10");

// guess = parseInt(answer);
// console.log(guess);

// if (guess === secret) {
//     alert("Correct!");
// } else {
//     alert("Sorry, incorrect!");
// }


// var secret = 7, answer = prompt("Please guess the secret number (1-10)");

// guess = parseInt(answer);
// console.log(guess);


// while (guess !== secret) {
//     if (guess < secret) {
//         alert("Sorry, incorrect, too low");
//     } else if (guess > secret) {
//         alert("Sorry, incorrect, too high");
//     } else {
//         alert("Please play again soon")
//         break;
//     }
//     answer = prompt("Please guess the secret number (1-10)");
//     guess = parseInt(answer);
//     }
//     if (guess === secret) {
//         alert("Correct");
//     }


var secret = [7, 5, 8, 3, 9], answer = prompt("Please guess the secret number (1-10)");
var randomNum;
guess = parseInt(answer);
console.log(guess);

randomSecret();

while (guess !== randomNum) {
    if (guess < randomNum) {
        alert("Sorry, incorrect, too low");
    } else if (guess > randomNum) {
        alert("Sorry, incorrect, too high");
    } else {
        alert("Please play again soon")
        break;
    }
    answer = prompt("Please guess the secret number (1-10)");
    guess = parseInt(answer);
    }
    if (guess === randomNum) {
        alert("Correct");
    }

function randomSecret() {
    randomNum = secret[Math.floor(Math.random() * secret.length)];
    return randomNum;
}


// var secret = [7, 5, 8, 3, 9], answer = prompt("Please guess the secret number (1-10)");
// var randomNum;
// guess = parseInt(answer);
// console.log(guess);

// randomSecret();

// while (guess !== randomNum) {
//     if (guess < randomNum) {
//         alert("Sorry, incorrect, too low");
//     } else if (guess > randomNum) {
//         alert("Sorry, incorrect, too high");
//     } else if (null === true) {
//         alert("Please play again soon");
//         break;
//     } else if (NaN === true) {
//         alert("Incorrect input please enter a number between 1-10");
//     } else {
//         break;
//     }
//     answer = prompt("Please guess the secret number (1-10)");
//     guess = parseInt(answer);
//     }
//     if (guess === randomNum) {
//         alert("Correct");
//     }

// function randomSecret() {
//     randomNum = secret[Math.floor(Math.random() * secret.length)];
//     return randomNum;
// }
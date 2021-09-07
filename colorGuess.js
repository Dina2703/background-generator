const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];

function runGame() {
    let guess = ' ';
    let correct = false;
    let numTries = 0;
    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length) + 1;
    const target = COLORS_ARRAY[targetIndex]; 
    console.log(target);

    do{
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(', ') + '\n\nWhat color am I thinking of?');
        // .toLowerCase();
        numTries++;
        console.log(guess);
        if(guess==null){
            alert("You have canceled the game!");
        return;
        }
        correct = checkGuess(guess, target);
    }while(!correct);

    alert ("Congratulations! You have guessed the color!\n\nIt took you " +numTries + " quesses to finish the game!\n\nHit OK to see the color in the background.");
    document.body.style.background = guess;

}
function checkGuess(guess, target) {
    let correct = false;

    if(COLORS_ARRAY.indexOf(guess)==-1) {
        alert("Sorry, I don't recognize your color.");
    } else if(guess > target) {
        alert("Sorry, your guess is incorrect.\n\nHint: your color is aplhabetically higher than mine.\n\nPlease try again.");
    } else if(guess < target) {
        alert("Sorry, your guess is incorrect.\n\nHint: your color is aplhabetically lower than mine.\n\nPlease try again.");
    } else {
        correct = true;
    }
    return correct;
}
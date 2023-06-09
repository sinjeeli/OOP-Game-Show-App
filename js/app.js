/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//const phrase = new Phrase;
//const game = new Game;

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//
var game;

const resetButton = document.getElementById('btn__reset');

resetButton.addEventListener('click', (event)=>{

    game = new Game;
    game.startGame();
    
});


// Then, add a "click" event listener to the HTML `<button>` element with an `id` of
// `btn__reset`. Inside the callback function for this click event listener, use your `game`
// variable to instantiate a new Game object. Call the `startGame()` method on this new
// Game object.
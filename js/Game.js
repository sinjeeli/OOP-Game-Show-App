/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            
               new Phrase ('Leak Proof'),
               new Phrase ('Ice Blocker'),
               new Phrase ('Soccer Shoes'),
               new Phrase ('Swim Trunks'),
               new Phrase ('Pizza Rolls')
        ];

        this.activePhrase = 'null';

    }

    //
    getRandomPhrase() {
        
        let x = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[x];
/**
* Selects random phrase from phrases property
*@return {Object} Phrase object chosen to be used
*/
      
    };

    /**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
    let startScreen = document.getElementById('overlay');
    startScreen.style.display = 'none';

       let gameStart = this.getRandomPhrase();

        this.activePhrase = gameStart;
        
       //let phraseInstance = new Phrase(gameStart.phrase);
        //phraseInstance.addPhraseToDisplay();

        //gameStart = this.addPhraseToDisplay();
        gameStart.addPhraseToDisplay();
};

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {

    let letterElements = document.querySelectorAll('.hide');
    if(letterElements.length === 0){
            return true;
    }

}

        ////////////////////////////////////////////////////
        /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

removeLife() {

    this.missed ++;

    let heartElement = document.getElementsByClassName('tries');
    heartElement = heartElement[this.missed - 1];
    heartElement.firstChild.src = 'images/lostHeart.png';

    if (this.missed === 5) {
        this.gameOver(false);
};

console.log(this.missed)

}
//
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {
    const overlay = document.getElementById('overlay');
    const overLayTitle = document.getElementById('game-over-message');

    overlay.style.display = 'flex';

    if(gameWon === 'win') {
        overlay.classList.remove('start', 'lose');
        overlay.classList.add('win');
        overLayTitle.textContent = 'Congratulations! You won!';

    }
    else {
        overlay.classList.remove('start', 'win');
        overlay.classList.add('lose');
        overLayTitle.textContent = 'Oops! You lost. Try again!';

    }
    this.gameReset();

}

handleInteraction(button) {
    button.disabled = true;

    if (this.activePhrase.checkLetter(button.innerText)) {
        button.classList.add('chosen');
        this.activePhrase.showMatchedLetter(button.innerText);

        if (this.checkForWin()) {
            this.gameOver('win');
        }
    } else {
        button.classList.add('wrong');
        this.removeLife();

        if (this.missed === 5) {
            this.gameOver('lose');
        }
    }
    console.log(button)
}


gameReset() {
    //
// Step 1: Identify the Phrase ul element in your HTML markup
var phraseUl = document.getElementById('phrase').querySelector('ul');

// Step 2: Remove all li elements from the Phrase ul
while (phraseUl.firstChild) {
  phraseUl.removeChild(phraseUl.firstChild);
}
/////////////////////////////////////////////////////////////////////
var idScoreboard = document.querySelectorAll('img');

idScoreboard.forEach((element)=>{
    element.src = 'images/liveHeart.png';

});

////////////////////////////////////////////////////////////////
var onscreenKeyboardButton = Array.from(document.querySelectorAll('#qwerty button'));

onscreenKeyboardButton.forEach((button)=>{
button.disabled = false;
button.classList.remove('chosen', 'wrong');
button.classList.add('key');
});

////////////////////////////////////////////////////

}

}

//project complete
//code in working state
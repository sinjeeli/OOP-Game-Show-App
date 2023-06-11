/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            
               new Phrase ('aMy name'),
               new Phrase ('athat I'),
               new Phrase ('ahad received'),
               new Phrase ('abefore the'),
               new Phrase ('aceremony time')

            

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

    const letterElements = document.querySelectorAll('.letter');

    for(let i = 0; i < letterElements.length; i++){
        if(!letterElements[i].style.color === 'transparent'){

            return false;
            } 

        }

        return true;
        }
    }





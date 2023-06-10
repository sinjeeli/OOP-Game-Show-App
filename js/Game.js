/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            
               new Phrase ('My name'),
               new Phrase ('that I'),
               new Phrase ('had received'),
               new Phrase ('before the'),
               new Phrase ('ceremony time')

            

        ];

        this.activePhase = 'null';

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
        
        let phraseInstance = new Phrase(gameStart.phrase);
        phraseInstance.addPhraseToDisplay();

        //gameStart = this.addPhraseToDisplay();

};

};



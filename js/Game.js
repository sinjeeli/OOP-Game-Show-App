class Game {
    constructor() {
this.missed = 0,
this.phrases = [
    new Phrase("Hello world"),
    new Phrase("world"),
    new Phrase("fun"),
    new Phrase("love"),
    new Phrase("power")
],
this.activePhrase = null;

    }
    //


    getRandomPhrase() {

        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];


    }

    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = "none";

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();


    }

    checkForWin() {
        const letterElements  = document.querySelectorAll('.letter');
        for(let i = 0; i < letterElements.length; i++ ){
            if(!letterElements[i].classList.contains('show')){
                   return false; 
            }
            else {
                return true;
            }
        }
    }

    removeLife() {

        const scoreboard = document.querySelector('#scoreboard ol');
        const lives = scoreboard.querySelectorAll('li');
        lives[this.missed - 1].classList.replace('tries', 'missed');
            if(this.missed >= 5) {
                this.gameOver(false);


            }

    }

    gameOver(gameWon){

        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        
        if(gameWon) {
            gameOverMessage.textContent = 'Congratulations! You won the game!';
            overlay.classList.replace('start', 'win');
        }
        else {
            gameOverMessage.textContent = 'Game over! Better luck next time.';
            overlay.classList.replace('start', 'lose');


        }

        overlay.classList.remove('hide');


    }
}

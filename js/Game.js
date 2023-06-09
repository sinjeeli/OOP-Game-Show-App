class Game {
    constructor() {
this.missed = 0,
this.phrases = [
    new Phrase("Hello world"),
    new Phrase("Treehouse is awesome"),
    new Phrase("Coding is fun"),
    new Phrase("JavaScript is powerful"),
    new Phrase("I love programming")
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


}

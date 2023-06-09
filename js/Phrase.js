/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Phrase {
    constructor(phrase) {

        this.phrase = phrase.toLowerCase();

    }

    /**
* Display phrase on game board
*/
addPhraseToDisplay() {

    let phraseContainer = document.querySelector(' #phrase ul');

    let charArray = this.phrase.split(' ');
//

    charArray.forEach((param) =>{
        let li = document.createElement('li');
        if(param === " "){
            li.className = 'space';
        }
        if(param !== ' '){
            li.className = `hide letter ${param}`;
        }

        phraseContainer.appendChild(li)
    })

};




}
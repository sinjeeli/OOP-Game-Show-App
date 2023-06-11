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

    let charArray = this.phrase.split('');
//

    charArray.forEach((param) =>{
        let li = document.createElement('li');
        if(param === " "){
            li.className = 'space';
        }
        else {
            li.className = `hide letter ${param}`;
        }
        li.textContent = param;
        phraseContainer.appendChild(li)
    })

};

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/


checkLetter(letter) {

    const phrase = this.phrase.toLowerCase();

    letter = letter.toLowerCase();
    return phrase.includes(letter);

}

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
    const letterElements = document.querySelectorAll('.letter');
    letterElements.forEach((element) => {
      if (element.textContent.toLowerCase() === letter.toLowerCase()) {
        //element.classList.remove('hide');
        element.style.backgroundColor = '#4ac0d5';
      }
    });
  }

};
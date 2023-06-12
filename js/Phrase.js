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

  const ul = document.querySelector('ul');

  [...this.phrase].forEach((param) => {
      const li = document.createElement('li');

      ul.append(li);
      if(param === " "){
          li.classList.add('space');
          li.innerHTML = ' ';
      }
      else {
          li.classList.add('hide', 'letter', param);
          li.innerHTML = param;
      }
     
      
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
      element.classList.remove('hide');
      element.classList.add('show');

    }
  });
}

};
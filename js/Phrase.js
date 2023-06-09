/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {

constructor(phrase) {

this.phrase = phrase.toLowerCase();


}

addPhraseToDisplay() {
    const phraseContainer = document.querySelector('#phrase ul');
    const letters = this.phrase.split('');

    letters.forEach((letter)=>{
        const li = document.createElement('li');
        li.textContent = letter;

        if(letter === ' '){
            li.className = 'space';
            } 
            else {
                li.className = `hide letter ${letter}`;

            }

phraseContainer.appendChild(li);

    });
}
    
}
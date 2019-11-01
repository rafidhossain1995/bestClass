const {allTheWords} = require('./word.js');

class ComputerPlayer {
    constructor(computerPlayer){
    
        this.computerPlayer = computerPlayer
       
    this.word = allTheWords[(Math.floor(Math.random() * allTheWords.length))];
    }
// hiddenWordIndex(){
// const hiddenWordIndex = (Math.floor(Math.random() * words.length-1)) =>{
//     let randomWord = words[hiddenWordIndex]
//     return randomWord
//         }
 //   }
 lengthOfWords(){
     return this.word.length
 }
 revealWord(){
     return this.word
 }
 guessCharacters(char){
     let guessCharacter = []
     for (let i = 0; i < this.word.length; i++){
         if(guessLetter === this.word[i]){
             guessCharacter.push(i)
            }
        }
            return guessCharacter
    }
    // getMove(){
    //     let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // }


}
module.exports = ComputerPlayer
// let computerPlayer = new ComputerPlayer()
// console.log(computerPlayer.word)

// console.log(computerPlayer.lengthOfWords())
// console.log(computerPlayer.guessCharacters("e"))


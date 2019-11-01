const ComputerPlayer = require('./ComputerPlayer.js')
const HumanPlayer = require('./HumanPlayer.js')
const Board = require('./Board.js')

class Game{
    constructor(){
        this.computer = new ComputerPlayer()
        this.human = new HumanPlayer()
        this.board = new Board(this.computer.lengthOfWords())
        this.guessRemaining = 6
    }
    playMethod(){
        while(this.guessRemaining > 0){
           let guess = this.human.getMove()
           console.log(this.isValid(guess))
            this.guessRemaining = this.guessRemaining - 1
            
            
            
        }
    }
    isValid(guess){
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        if(alphabet.includes(guess.toLowerCase())){
            return true 
        } else {
            return false
        }
    }
} 

let game = new Game()
game.human.getMove() 
// console.log(game.computer.word) // references the word that is coming
// console.log(game.board)
console.log(game.human.displayBoard(game.board.board)) // refernces to the board being displayed
console.log(game.playMethod())


// module.exports = {words,newWords}
// game is going ot run until moves remaining is greater than 0. 
// Insid ethe play function after I get the move, I want to validate it. 
// creat a validate function 
const ComputerPlayer = require('./ComputerPlayer.js')
const HumanPlayer = require('./HumanPlayer.js')
const Board = require('./Board.js')

class Game{
    constructor(){
        this.computer = new ComputerPlayer()
        this.human = new HumanPlayer()
        this.board = new Board(this.computer.lengthOfWords())
        // this.guessRemaining = 6

    }
    
} 
let game = new Game("kev")
game.human.getMove()
console.log(game.computer.word)
// console.log(game.board)
console.log(game.human.displayBoard(game.board.board))


// module.exports = {words,newWords}
 
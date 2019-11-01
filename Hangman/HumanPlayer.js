const readline = require('readline-sync')

class HumanPlayer {
    constructor(player){
        this.player = player
    }
    getMove(){

        // console.log("you have 5 moves left")
        return readline.question("Please choose a letter")
    
    }

    displayBoard(board){
        

    
        return board.join(" ")
    }

}
module.exports = HumanPlayer
// let rafid  = new HumanPlayer("rafid")
// console.log(rafid.getMove())
// console.log(rafid.getMove())
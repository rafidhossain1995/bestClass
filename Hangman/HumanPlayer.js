const readline = require('readline-sync')

class HumanPlayer {
    constructor(name){
        this.name = name
    }
    getMove(){
        console.log("you have 5 moves left")
        return readline.question("Please choose a letter")
    
    }

}
module.exports = HumanPlayer
let rafid  = new HumanPlayer("rafid", "i")
console.log(rafid.getMove())
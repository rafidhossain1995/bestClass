
class Board{
 constructor(){
    this.board = new Array(6).fill("_")
    }
    disPlayBoard(length){
        return this.board.join(" ")
    }

    }
let game = new Board()
console.log(game.disPlayBoard("_"))


// add placemark symbol
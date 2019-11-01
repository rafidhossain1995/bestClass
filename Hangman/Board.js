const {ComputerPlayer} = require('./ComputerPlayer.js')
class Board{

 constructor(length){

    this.board = new Array(length).fill("_")
    

    }
    addChar(arr, char){
        for (let i = 0; i < arr.length; i++){
            this.board[i] = char 
        }
    }
  
    }


module.exports = Board



// add placemark symbol
// moves remaining
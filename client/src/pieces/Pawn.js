import Piece from './piece'

class Pawn extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png'))
        this.initialPositions = {
            1: [48, 49, 50, 51, 52, 53, 54, 55],
            2: [8, 9, 10, 11, 12, 13, 14, 15]
        }
    }
}

export default Pawn;
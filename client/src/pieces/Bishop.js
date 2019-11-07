import Piece from './piece';

class Bishop extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png'))
        this.intialPositions = {
            1: [58, 61],
            2: [2, 5]
        }
    }
}

export default Bishop;
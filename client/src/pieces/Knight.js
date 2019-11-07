import Piece from './piece';

class Knight extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png'))
        this.intialPositions = {
            1: [57, 62],
            2: [1, 6]
        }
    }
}

export default Knight;
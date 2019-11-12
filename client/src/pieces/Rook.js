import Piece from './piece';

class Rook extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png'))
        this.initialPositions = {
            1: [[0, 7], [7, 7]],
            2: [[0, 0], [7, 0]]
        }
        this.label = 'rook'
    }
}

export default Rook;
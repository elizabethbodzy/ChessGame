import Piece from './piece';

class Rook extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png'))
        this.initialPositions = {
            1:[56,63],
            2:[0,7]
        }
    }
}

export default Rook;
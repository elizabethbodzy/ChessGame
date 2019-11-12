import Piece from './piece';

class King extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png'))
        this.intialPositions = {
            1: [4, 7],
            2: [4, 0]
        }
        this.label = 'king'
    }
}

export default King;
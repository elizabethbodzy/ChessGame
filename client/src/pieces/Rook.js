import Piece from './piece';

class Rook extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png'))
        this.initialPositions = {
            1: [[0, 7], [7, 7]],
            2: [[0, 0], [7, 0]]
        }
        this.label = 'rook'

        this.validMove = function (start = [], end = []) {
            const x = end[0] - start[0]
            const y = end[1] - start[1]

            return (
                ((Math.abs(x) > 0 && Math.abs(x) <= 7) && y === 0) ||
                ((Math.abs(y) > 0 && Math.abs(y) <= 7) && x === 0)
            )
        }
    }
}

export default Rook;
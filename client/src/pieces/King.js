import Piece from './piece';

class King extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png'))
        this.intialPositions = {
            1: [4, 7],
            2: [4, 0]
        }
        this.label = 'king'
        this.color = this.player === 1 ? 'white' : 'black'

        this.validMove = function (start = [], end = []) {
            const x = end[0] - start[0]
            const y = end[1] - start[1]

            return (
                (Math.abs(x) === 1 && y === 0) ||
                (Math.abs(y) === 1 && x === 0) ||
                (Math.abs(x) === 1 && Math.abs(y) === 1)
            )
        }
    }
}

export default King;
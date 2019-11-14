import Piece from './piece';

class Knight extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png'))
        this.intialPositions = {
            1: [[1, 7], [6, 7]],
            2: [[1, 0], [6, 0]]
        }
        this.label = 'knight'
        this.color = this.player === 1 ? 'white' : 'black'

        this.validMove = function (start = [], end = []) {
            const x = end[0] - start[0]
            const y = end[1] - start[1]
            return (
                (Math.abs(x) === 1 && Math.abs(y) === 2) ||
                (Math.abs(x) === 2 && Math.abs(y) === 1)
            )
        }
    }
}

export default Knight;
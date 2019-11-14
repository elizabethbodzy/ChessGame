import Piece from './piece';

class Queen extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png'))
        this.intialPositions = {
            1: [[3, 7]],
            2: [[3, 0]]
        }
        this.label = 'queen'
        this.color = this.player === 1 ? 'white' : 'black'

        this.validMove = function (start = [], end = []) {
            const x = end[0] - start[0]
            const y = end[1] - start[1]

            return (
                ((Math.abs(x) > 0 && Math.abs(x) <= 7) && y === 0) ||
                ((Math.abs(y) > 0 && Math.abs(y) <= 7) && x === 0) ||
                ((Math.abs(x) > 0 && Math.abs(x) <= 7) && (x === y || x === -y))
            )
        }
    }
}

export default Queen;
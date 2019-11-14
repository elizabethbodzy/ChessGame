import Piece from './piece';

class Bishop extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png'))
        this.intialPositions = {
            1: [[2, 7], [5, 7]],
            2: [[2, 0], [5, 0]]
        }
        
        this.label = 'bishop'
        this.color = this.player === 1 ? 'white' : 'black'

        this.validMove = function (start = [], end = []) {
            const x = end[0] - start[0]
            const y = end[1] - start[1]

            return (
                ((Math.abs(x) > 0 && Math.abs(x) <= 7) && (x === y || x === -y))
            )
        }
    }
}

export default Bishop;
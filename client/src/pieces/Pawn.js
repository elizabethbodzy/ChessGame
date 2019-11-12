import Piece from './piece'

class Pawn extends Piece {
    constructor(player, orientation) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png'))
        this.initialPositions = {
            1: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]],
            2: [[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6]]
        }
        this.label = 'pawn'
        //define movement pattern for pawns -1 means go down 1 means go up
        this.orientation = orientation

        this.validMove = function (start = [], end = []) {
            const x = end[0] - start[0]
            const y = end[1] - start[1]

            return (
                (start[1] + this.orientation === end[1] && (y === 0 || Math.abs(y) === 1)) ||
                ((start[1] + (2 * this.orientation) === end[1] && y === 0))
            )
        }
    }
}

export default Pawn;
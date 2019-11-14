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

        this.generateMove = (start = [], board = []) => {
            const allMoves = [];
            const x = start[0];
            const y = start[1];

            for (let i = x + 1; i < 8; i++) {
                for (let j = y + 1; j < 8; j++) {
                    allMoves.push([i,j])
                }
            }

            console.log(allMoves)

            return allMoves
        }

        this.validMove = function (start = [], end = [], board = []) {
            const allMoves = this.generateMove(start, board);
            console.log(allMoves)

            return (
                true
            )
        }
    }
}

export default Bishop;
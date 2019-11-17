import Piece from './piece';

class Knight extends Piece {
    constructor(player, x, y) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png'))
        this.intialPositions = {
            1: [[1, 7], [6, 7]],
            2: [[1, 0], [6, 0]]
        }
        this.label = 'knight'
        this.color = this.player === 1 ? 'white' : 'black'
        this.coordinate = [x, y]
        this.generateMoves = (board = []) => {
            const allMoves = [];
            const x = this.coordinate[0];
            const y = this.coordinate[1];

            if (!(x + 1 > 7) && !(y + 2 > 7)) {
                if (board[y + 2][x + 1] === null ||
                    board[y + 2][x + 1].color !== this.color) {
                    allMoves.push([x + 1, y + 2])
                }
            }

            if (!(x - 1 < 0) && !(y + 2 > 7)) {
                if (board[y + 2][x - 1] === null ||
                    board[y + 2][x - 1].color !== this.color) {
                    allMoves.push([x - 1, y + 2])
                }
            }

            if (!(x + 1 > 7) && !(y - 2 < 0)) {
                if (board[y - 2][x + 1] === null ||
                    board[y - 2][x + 1].color !== this.color) {
                    allMoves.push([x + 1, y - 2])
                }
            }

            if (!(x - 1 < 0) && !(y - 2 < 0)) {
                if (board[y - 2][x - 1] === null ||
                    board[y - 2][x - 1].color !== this.color) {
                    allMoves.push([x - 1, y - 2])
                }
            }

            if (!(x - 2 < 0) && !(y - 1 < 0)) {
                if (board[y - 1][x - 2] === null ||
                    board[y - 1][x - 2].color !== this.color) {
                    allMoves.push([x - 2, y - 1])
                }
            }

            if (!(x - 2 < 0) && !(y + 1 > 7)) {
                if (board[y + 1][x - 2] === null ||
                    board[y + 1][x - 2].color !== this.color) {
                    allMoves.push([x - 2, y + 1])
                }
            }

            if (!(x + 2 > 7) && !(y - 1 < 0)) {
                if (board[y - 1][x + 2] === null ||
                    board[y - 1][x + 2].color !== this.color) {
                    allMoves.push([x + 2, y - 1])
                }
            }

            if (!(x + 2 > 7) && !(y + 1 > 7)) {
                if (board[y + 1][x + 2] === null ||
                    board[y + 1][x + 2].color !== this.color) {
                    allMoves.push([x + 2, y + 1])
                }
            }

            return allMoves

        }

        this.validMove = function (start = [], end = [], board = []) {
            const allMoves = this.generateMove(board)
            let valid = false
            allMoves.forEach(coordinate => {
                if (coordinate.toString() === end.toString()) {
                    valid = true;
                }
            })
            return valid;
        }
    }
}

export default Knight;
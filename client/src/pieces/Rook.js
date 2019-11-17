import Piece from './piece';

class Rook extends Piece {
    constructor(player,x,y) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png'))
        this.initialPositions = {
            1: [[0, 7], [7, 7]],
            2: [[0, 0], [7, 0]]
        }
        this.label = 'rook'
        this.color = this.player === 1 ? 'white' : 'black'
        this.coordinate = [x,y]
        this.generateMoves = (start = [], board = []) => {
            const x = start[0];
            const y = start[1];
            const allMoves= [];

            for (let i = x + 1; i < 8; i++) {
                const piece = board[y][i]

                if (piece === null) {
                    allMoves.push([i, y])
                } else if (piece.color !== this.color) {
                    allMoves.push([i, y]);
                    break;
                } else if (piece.color === this.color) {
                    break;
                }
            }
            for (let i = x - 1; i >= 0; i--) {
                const piece = board[y][i]
                if (piece === null) {
                    allMoves.push([i, y])
                } else if (piece.color !== this.color) {
                    allMoves.push([i, y]);
                    break;
                } else if (piece.color === this.color) {
                    break;
                }
            }
            for (let i = y + 1; i < 8; i++) {
                const piece = board[i][x]
                if (piece === null) {
                    allMoves.push([x, i])
                } else if (piece.color !== this.color) {
                    allMoves.push([x, i]);
                    break;
                } else if (piece.color === this.color) {
                    break;
                }
            }
            for (let i = y - 1; i >= 0; i--) {
                const piece = board[i][x]
                if (piece === null) {
                    allMoves.push([x, i])
                } else if (piece.color !== this.color) {
                    allMoves.push([x, i]);
                    break;
                } else if (piece.color === this.color) {
                    break;
                }
            }
            return allMoves
        }

        this.validMove = function (start = [], end = [], board = []) {
            const allMoves= this.generateMoves(start, board);
            let valid = false
            allMoves.forEach(coordinate =>{
                if(coordinate.toString() === end.toString()){
                    valid = true;
                }
            })
            return valid;
        }
    }
}

export default Rook;
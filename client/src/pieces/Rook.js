import Piece from './piece';

class Rook extends Piece {
    constructor(player) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png'))
        this.initialPositions = {
            1: [[0, 7], [7, 7]],
            2: [[0, 0], [7, 0]]
        }
        this.label = 'rook'
        this.color = this.player === 1 ? 'white' : 'black'

        this.generateMoves = (start = [], board = []) => {
            const startX = start[0];
            const startY = start[1];
            const allMovesPossible = [];

            for (let i = startX + 1; i < 8; i++) {
                const piece = board[startY][i]

                if (piece === null) {
                    allMovesPossible.push([i, startY])
                } else if (piece.color !== this.color) {
                    allMovesPossible.push([i, startY]);
                    break;
                } else if (piece.color === this.color) {
                    break;
                }
            }
            for (let i = startX - 1; i >= 0; i--) {
                const piece = board[startY][i]
                if (piece === null) {
                    allMovesPossible.push([i, startY])
                } else if (piece.color !== this.color) {
                    allMovesPossible.push([i, startY]);
                    break;
                } else if (piece.color === this.color) {
                    break;
                }
            }
            for (let i = startY + 1; i < 8; i++) {
                const piece = board[i][startX]
                if (piece === null) {
                    allMovesPossible.push([startX, i])
                } else if (piece.color !== this.color) {
                    allMovesPossible.push([startX, i]);
                    break;
                } else if (piece.color === this.color) {
                    break;
                }
            }
            for (let i = startY - 1; i >= 0; i--) {
                const piece = board[i][startX]
                if (piece === null) {
                    allMovesPossible.push([startX, i])
                } else if (piece.color !== this.color) {
                    allMovesPossible.push([startX, i]);
                    break;
                } else if (piece.color === this.color) {
                    break;
                }
            }
            return allMovesPossible
        }

        this.validMove = function (start = [], end = [], board = []) {
            const allMovesPossible = this.generateMoves(start, board);
            let valid = false
            allMovesPossible.forEach(coordinate =>{
                if(coordinate.toString() === end.toString()){
                    valid = true;
                }
            })
            return valid;
        }
    }
}

export default Rook;
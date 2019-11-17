import Piece from './piece'

class Pawn extends Piece {
    constructor(player, orientation, x, y) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png'))
        this.initialPositions = {
            1: [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]],
            2: [[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6]]
        }

        this.label = 'pawn'

        this.color = this.player === 1 ? 'white' : 'black'
        //define movement pattern for pawns -1 means go down 1 means go up
        this.orientation = orientation
        this.coordinate = [x, y]
        this.hasMoved = false

        this.generateMoves = (start = [], board = []) => {
            const x = start[0];
            const y = start[1];
            const allMoves = [];
            const moveY = this.orientation
            console.log(moveY)

            if (moveY === -1) {
                if (!board[y - moveY][x]) {
                    allMoves.push([x, y - moveY])
                    if (!this.hasMoved) {
                        if (!board[y - moveY - moveY][x])
                            allMoves.push([x, y - moveY - moveY])
                    }
                }
                if (board[y - moveY][x + 1] && board[y - moveY][x + 1].color !== this.color) {
                    allMoves.push([x + 1, y - moveY])
                }
                if (board[y - moveY][x - 1] && board[y - moveY][x - 1].color !== this.color) {
                    allMoves.push([x - 1, y - moveY])
                }
            }

            if (moveY === 1) {
                if (!board[y - moveY][x]) {
                    allMoves.push([x, y - moveY])
                    if (!this.hasMoved) {
                        if (!board[y - moveY - moveY][x])
                            allMoves.push([x, y - moveY - moveY])
                    }
                }
                if (board[y - moveY][x + 1] && board[y - moveY][x + 1].color !== this.color) {
                    allMoves.push([x + 1, y - moveY])
                }
                if (board[y - moveY][x - 1] && board[y - moveY][x - 1].color !== this.color) {
                    allMoves.push([x - 1, y - moveY])
                }
            }

            console.log(allMoves)
            return allMoves
        }

        this.validMove = function (start = [], end = [], board = []) {
            const allMoves = this.generateMoves(start, board);
            let valid = false
            allMoves.forEach(coordinate => {
                if (coordinate.toString() === end.toString()) {
                    valid = true;
                }
            })
            return valid
        }
    }
}

export default Pawn;
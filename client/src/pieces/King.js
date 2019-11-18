import Piece from './piece';

class King extends Piece {
    constructor(player,x,y) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png'))
        this.intialPositions = {
            1: [4, 7],
            2: [4, 0]
        }
        this.label = 'king'
        this.color = this.player === 1 ? 'white' : 'black'
        this.coordinate = [x,y]
        this.generateMoves = (board = []) => {
            const allMoves = [];
            const x = this.coordinate[0]
            const y = this.coordinate[1]

            if (y + 1 <= 7) {
                if (!board[y + 1][x]) {
                    allMoves.push([x, y + 1])
                } else if (board[y + 1][x].color !== this.color) {
                    allMoves.push([x, y + 1])
                }
            }

            if (y - 1 >= 0) {
                if (!board[y - 1][x]) {
                    allMoves.push([x, y - 1])
                } else if (board[y - 1][x].color !== this.color) {
                    allMoves.push([x, y - 1])
                }
            }

            if (x - 1 >= 0) {
                if (!board[y][x - 1]) {
                    allMoves.push([x - 1, y])
                } else if (board[y][x - 1].color !== this.color) {
                    allMoves.push([x - 1, y])
                }
            }

            if (x + 1 <= 7) {
                if (!board[y][x + 1]) {
                    allMoves.push([x + 1, y])
                } else if (board[y][x + 1].color !== this.color) {
                    allMoves.push([x + 1, y])
                }
            }

            if (x + 1 <= 7 && y + 1 <= 7) {
                if (!board[y + 1][x + 1]) {
                    allMoves.push([x + 1, y + 1])
                } else if (board[y + 1][x + 1].color !== this.color) {
                    allMoves.push([x + 1, y + 1])
                }
            }

            if (x + 1 <= 7 && y - 1 >= 0) {
                if (!board[y - 1][x + 1]) {
                    allMoves.push([x + 1, y - 1])
                } else if (board[y - 1][x + 1].color !== this.color) {
                    allMoves.push([x + 1, y - 1])
                }
            }

            if (x - 1 >= 0 && y + 1 <= 7) {
                if (!board[y + 1][x - 1]) {
                    allMoves.push([x - 1, y + 1])
                } else if (board[y + 1][x - 1].color !== this.color) {
                    allMoves.push([x - 1, y + 1])
                }
            }
            if (x - 1 >= 0 && y - 1 >= 0) {
                if (!board[y - 1][x - 1]) {
                    allMoves.push([x - 1, y - 1])
                } else if (board[y - 1][x - 1].color !== this.color) {
                    allMoves.push([x - 1, y - 1])
                }
            }

            // console.log(allMoves)
            return allMoves
        }
    }
}

export default King;
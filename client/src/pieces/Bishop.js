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

            Loop1: for (let i = x + 1; i < 8; i++) {
                for (let j = y + 1; j < 8; j++) {
                    let dx = i - x;
                    let dy = j - y;
                    let piece = board[j][i]
                    if (!piece && dx / dy === 1) {
                        allMoves.push([i, j])
                    } else if (piece) {
                        if (piece.color !== this.color && dx / dy === 1) {
                            allMoves.push([i, j])
                            break Loop1;
                        }
                        break Loop1
                    }
                }
            }

            // Loop2: for (let i = x - 1; i >= 0; i--) {
            //     for (let j = y - 1; j >= 0; j--) {
            //         let dx = i - x;
            //         let dy = j - y;
            //         const piece = board[j][i]
            //         if (!piece && dx / dy === 1) {
            //             allMoves.push([i, j]);
            //         } else if (piece) {
            //             if (piece.color !== this.color && dy / dy === 1) {
            //                 allMoves.push([i, j])
            //             }
            //             break Loop2;
            //         }
            //     }
            // }

            // Loop3: for (let i = x + 1; i < 8; i++) {
            //     for (let j = y - 1; j >= 0; j--) {
            //         let dx = i - x;
            //         let dy = j - y;
            //         const piece = board[j][i]
            //         if (piece === null) {
            //             if (dx / dy === -1) {
            //                 allMoves.push([i, j])
            //             }
            //         } else if (piece.color === this.color) {
            //             break Loop3;
            //         } else if (piece.color !== this.color) {
            //             if (dx / dy === -1) {
            //                 allMoves.push([i, j])
            //                 break Loop3
            //             }
            //         }
            //     }
            // }

            // Loop4: for (let i = x - 1; i >= 0; i--) {
            //     for (let j = y + 1; j < 8; j++) {
            //         let dx = i - x;
            //         let dy = j - y;
            //         const piece = board[j][i]
            //         if (piece === null) {
            //             if (dx / dy === -1) {
            //                 allMoves.push([i, j])
            //             }
            //         } else if (piece.color === this.color) {
            //             break Loop4;
            //         } else if (piece.color !== this.color) {
            //             if (dx / dy === -1) {
            //                 allMoves.push([i, j])
            //                 break Loop4
            //             }
            //         }
            //     }
            // }
            console.log(allMoves)
            return allMoves
        }

        this.validMove = function (start = [], end = [], board = []) {
            const allMoves = this.generateMove(start, board);
            let valid = false
            allMoves.forEach(coordinate => {
                if (coordinate.toString() === end.toString()) {
                    valid = true;
                }
            })
            return true;
        }
    }
}

export default Bishop;
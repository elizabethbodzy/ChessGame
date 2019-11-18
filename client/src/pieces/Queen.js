import Piece from './piece';

class Queen extends Piece {
    constructor(player,x,y) {
        super(player, (player === 1 ? 'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png' : 'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png'))
        this.intialPositions = {
            1: [[3, 7]],
            2: [[3, 0]]
        }
        this.label = 'queen'
        this.color = this.player === 1 ? 'white' : 'black'
        this.coordinate = [x, y]
        this.generateMoves = (board = []) => {
            const allMoves = [];
            const x = this.coordinate[0];
            const y = this.coordinate[1];

            Loop1: for (let i = x + 1; i < 8; i++) {
                for (let j = y + 1; j < 8; j++) {
                    let dx = i - x;
                    let dy = j - y;
                    let piece = board[j][i]
                    if (!piece && dx / dy === 1) {
                        allMoves.push([i, j])
                    } else if (piece && dx / dy === 1) {
                        if (piece.color !== this.color) {
                            allMoves.push([i, j])
                        }
                        break Loop1
                    }
                }
            }

            Loop2: for (let i = x - 1; i >= 0; i--) {
                for (let j = y - 1; j >= 0; j--) {
                    let dx = x - i;
                    let dy = y - j;
                    const piece = board[j][i]
                    if (!piece && dx / dy === 1) {
                        allMoves.push([i, j]);
                    } else if (piece && dx / dy === 1) {
                        if (piece.color !== this.color) {
                            allMoves.push([i, j])
                        }
                        break Loop2;
                    }
                }
            }

            Loop3: for (let i = x + 1; i < 8; i++) {
                for (let j = y - 1; j >= 0; j--) {
                    let dx = i - x;
                    let dy = j - y;
                    const piece = board[j][i]
                    if (!piece && dx / dy === -1) {
                        allMoves.push([i, j])
                    } else if (piece && dx / dy === -1) {
                        if (piece.color !== this.color) {
                            allMoves.push([i, j])
                        }
                        break Loop3;
                    }
                }
            }

            Loop4: for (let i = x - 1; i >= 0; i--) {
                for (let j = y + 1; j < 8; j++) {
                    let dx = i - x;
                    let dy = j - y;
                    const piece = board[j][i]
                    if (!piece && dx / dy === -1) {
                        allMoves.push([i, j])
                    } else if (piece && dx / dy === -1) {
                        if (piece.color !== this.color) {
                            allMoves.push([i, j])
                        }
                        break Loop4;
                    }
                }
            }
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
            // console.log(allMoves)
            return allMoves
        }
    }
}

export default Queen;
import React from 'react';
import Board from './Board/Board';
import initializeBoard from '../../helper/initializeBoard';

class Game extends React.Component {
    state = {
        board: [],
        squares: initializeBoard(),
        coordinates: [],
        hasCoordinate: false
    }

    initializeBoardState = () => {
        const board = [];
        let squares = this.state.squares
        for (let i = 0; i < squares.length; i += 8) { board.push(squares.slice(i, i + 8)) }
        return board
    }


    componentDidMount() {
        const board = this.initializeBoardState();
        this.setState({ board })
    }

    componentDidUpdate() { }


    movePiece = (start = [], end = []) => {
        const board = this.state.board;
        const piece = board[start[1]][start[0]]
        let capturedPiece
        if (board[end[1]][end[0]] === null) {
            //logic to move piece
            board[start[1]][start[0]] = board[end[1]][end[0]]
            piece.coordinate = end
            board[end[1]][end[0]] = piece
        } else {
            //logic to capture piece
            board[start[1]][start[0]] = null;
            capturedPiece = board[end[1]][end[0]]
            piece.coordinate = end
            board[end[1]][end[0]] = piece;
        }
        this.setState({ board: board, squares: board.flat() })
        return capturedPiece
    }

    validateMove = (piece, end = [], board = []) => {
        const allMoves = piece.generateMoves(board);
        let valid = false
        allMoves.forEach(coordinate => {
            if (coordinate.toString() === end.toString()) {
                valid = true;
            }
        })
        return valid;
    }

    getFirstCoordinate = (x, y) => {
        this.setState({ coordinates: [x, y] })
    }

    handleMovePiece = (x, y) => {
        //get piece
        const startX = this.state.coordinates[0]
        const startY = this.state.coordinates[1]
        const board = this.state.board
        const piece = board[startY][startX] || null

        if (piece === null) {
            console.log('no piece')
        } else if (this.validateMove(piece, [x, y], board)) {
            this.movePiece(this.state.coordinates, [x, y])
            if (piece.label === 'pawn') {
                piece.hasMoved = true
            }
        } else {
            console.log('not valid move')
        }
    }

    render() {
        return (
            <>
                <Board squares={this.state.squares}
                    getFirstCoordinate={this.getFirstCoordinate}
                    handleMove={this.handleMovePiece} />
            </>
        )
    }
}

export default Game;
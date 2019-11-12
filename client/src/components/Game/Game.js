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
        let startPiece = board[start[1]][start[0]]
        board[start[1]][start[0]] = board[end[1]][end[0]]
        board[end[1]][end[0]] = startPiece
        this.setState({ board: board, squares: board.flat()})
    }

    getFirstCoordinate = (x, y) => {
        this.setState({ coordinates: [x, y]})
    }

    handleMovePiece = (x, y) => {
        this.movePiece(this.state.coordinates, [x, y])
    }

    render() {
        console.log(this.state.hasCoordinate)
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
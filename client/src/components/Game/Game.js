import React from 'react';
import Board from './Board/Board';
import initializeBoard from '../../helper/initializeBoard';

class Game extends React.Component {
    state = {
        board: [],
        squares: initializeBoard()

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

    componentDidUpdate() {}


    movePiece = (start = [], end = []) => {
        const board = this.state.board;
        let startPiece = board[start[1]][start[0]]
        board[start[1]][start[0]] = board[end[1]][end[0]]
        board[end[1]][end[0]] = startPiece
        this.setState({ board: board, squares: board.flat() })
    }

    render() {
        console.log(this.state.squares)
        return (
            <>
                <Board squares={this.state.squares}
                    click={() => this.movePiece([0, 0], [0, 5])} />
            </>
        )
    }
}

export default Game;
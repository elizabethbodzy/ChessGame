import React from 'react';
import Board from './Board/Board';
import initializeBoard from '../../helper/initializeBoard';
import io from 'socket.io-client';
import queryString from 'query-string';
import { withRouter } from 'react-router'
import connect from '../../socket';
class Game extends React.Component {
    state = {
        gameOver: false,
        board: [],
        squares: initializeBoard(),
        coordinates: [],
        players: [
            {
                player: '',
                color: 'white',
                isTurn: true,
                inCheck: false
            },
            {
                player: '',
                color: 'black',
                isTurn: false,
                inCheck: false
            }
        ]
    }

    room

    initializeBoardState = () => {
        const board = [];
        let squares = this.state.squares
        for (let i = 0; i < squares.length; i += 8) { board.push(squares.slice(i, i + 8)) }
        return board
    }

    switchTurn = () => {
        const { players } = this.state

        players.forEach(player => {
            player.isTurn = !player.isTurn
        })
        this.setState({ players })
        this.checkListener();
    }

    movePiece = (start = [], end = [], board = []) => {
        const piece = board[start[1]][start[0]];
        console.log(board)
        console.log(piece)
        let capturedPiece;
        if (board[end[1]][end[0]] === null) {
            //logic to move piece
            board[start[1]][start[0]] = board[end[1]][end[0]]
            board[end[1]][end[0]] = piece
        } else {
            //logic to capture piece
            board[start[1]][start[0]] = null;
            capturedPiece = board[end[1]][end[0]]
            board[end[1]][end[0]] = piece;
        }
        this.setState({ board: board, squares: board.flat() })
        this.switchTurn();
        return capturedPiece
    }

    validateMove = (piece, end = [], board = []) => {
        //player check here
        const player = this.state.players.find(player => player.isTurn)
        const allMoves = piece.generateMoves(board);
        let valid = false
        if (piece.color === player.color) {
            allMoves.forEach(coordinate => {
                if (coordinate.toString() === end.toString()) {
                    valid = true;
                }
            })
        }
        return valid;
    }

    checkListener = () => {
        const player = this.state.players.find(player => player.isTurn)
        const opponent = this.state.players.find(player => !player.isTurn);
        const squares = this.state.squares;
        const board = this.state.board

        // let opponentMovesPossible = squares.map((square) => {
        //     if (square && square.color === opponentColor) {
        //         square.generateMoves(board).flat();
        //     }
        // })

        const opponentMovesPossible = squares.map((square) => {
            if (square && square.color === opponent.color) {
                return square.generateMoves(board)
            } else {
                return
            }
        }).filter((arr) => arr !== undefined).flat();

        const king = squares.find(square => square && square.color === player.color && square.label === 'king');

        const kingMoves = king.generateMoves(board);

        const check = opponentMovesPossible.find(move => move.toString() === king.coordinate.toString())

        // const checkmate = opponentMovesPossible.filter(move => kingMoves.forEach(kingMove => { move.toString() === kingMove.toString() }))

        if (check) {
            const { players } = this.state
            players.forEach(player => {
                if (player.isTurn) {
                    player.inCheck = true
                }
            })
            this.setState({ players })
        } else {
            const { players } = this.state
            players.forEach(player => {
                if (player.isTurn) {
                    player.inCheck = false
                }
            })
            this.setState({ players })
        }
        // console.log(this.state.players)
        // map through the squares to calculate all moves put it into the opponentMoves
        // check to see if the king is in that set of opponentMoves if so alert checked
        // generate all king moves and filter out all moves that match the moves in oppenent moves if array is empty CHECKMATE
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
            this.movePiece(this.state.coordinates, [x, y], this.state.board)
            this.pushMove({ start: this.state.coordinates, end: [x, y] })
            if (piece.label === 'pawn') {
                piece.hasMoved = true
            }
        } else {
            console.log('not valid move')
        }
    }

    componentDidMount() {
        const board = this.initializeBoardState();
        this.setState({ board })
        this.room = queryString.parse(this.props.location.search).room
        // const {name,room} = this.room
        // this.socket.emit("join", { name, room }, error => {
        //     if (error) {
        //       alert(error);
        //     }
        //   });

        // this.socket.on('move', move => {
        //     console.log(move)
        //     // this.movePiece(move.start, move.end)
        // })             
        this.getMove()
    }

    pushMove = (move) => {
        connect().then((socket) => {
            socket.emit('move', { move, room: this.room })
        })
    }

    getMove = () => {
        connect().then((socket) => {
            setTimeout(() => {
                socket.on('getMove', move => {
                    console.log(move)
                })
            }, 5000)
        })
    }

    componentDidUpdate() {
        //     this.socket.on('move', move => {
        //         console.log(move)
        //         // this.movePiece(move.start, move.end)
        //     })     
        // this.getMove(this.state.board,this.movePiece)
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

export default withRouter(Game);
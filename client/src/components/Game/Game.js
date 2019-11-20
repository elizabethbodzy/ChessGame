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
        piece.coordinate = end
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

        // escape checkmate validation only

        // check endmove to only this  escape array
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
            alert('Check!')
        } else {
            const { players } = this.state
            players.forEach(player => {
                if (player.isTurn) {
                    player.inCheck = false
                }
            })
            this.setState({ players })
        }
    }

    checkmateCheck = (player, board, squares) => {
        const defendingKing = squares.find(square => square && square.color === player.color && square.label === 'king');
        const checkmate = false;
        const kingMoves = defendingKing.generateMoves(board)
        const opponentMoves = squares.map((square) => {
            if (square && square.color !== player.color) {
                return { piece: square, moves: square.generateMoves(board) }
            } else {
                return
            }
        })

        const playerMoves = squares.map((square) => {
            if (square && square.color === player.color) {
                return { piece: square, moves: square.generateMoves(board) }
            } else {
                return
            }
        })

        let escapeMoves = []


        //I have all the kings moves 
        //filter out king moves that match with opponent moves if there are no king moves possible checkmate
        const kingPossibleMoves = kingMoves.filter(moves => {
            for (let i = 0; i < opponentMoves.length; i++) {
                opponentMoves[i].moves.forEach(move => {
                    return move.toString() !== moves.toString()
                })
            }
        })

        if (kingPossibleMoves) {
            escapeMoves = [...escapeMoves, ...kingPossibleMoves]
        }

        //generate all moves for the player and map it so that its the piece then the move
        // check to see if a piece can block the move

        //look at opponentMoves and find the piece that can attack the kings current position and check if any piece can take that piece
        const checkingPiece = opponentMoves.find(piece => {
            piece.moves.forEach(move => {
                return move.toString() === defendingKing.coordinate.toString()
            })
        })



        // if all three fail checkmate is true

        // else pass all possible checkmate escape moves to validation and return true for those moves
        if (!escapeMoves) {
            //Checkmate
            alert('Checkmate')
        } else {
            return escapeMoves
        }
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
                    this.movePiece(move.start, move.end, this.state.board)
                })
            }, 5000)
        })
    }

    componentDidUpdate() {

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
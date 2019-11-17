import pieces from '../pieces'

const { King, Queen, Bishop, Knight, Rook, Pawn } = pieces;

const initializeBoard = () => {
    //create a null array
    const squares = Array(64).fill(null)
    //initialize Pawns
    squares[48] = new Pawn(1, 1, 0, 6);
    squares[49] = new Pawn(1, 1, 1, 6);
    squares[50] = new Pawn(1, 1, 2, 6);
    squares[51] = new Pawn(1, 1, 3, 6);
    squares[52] = new Pawn(1, 1, 4, 6);
    squares[53] = new Pawn(1, 1, 5, 6);
    squares[54] = new Pawn(1, 1, 6, 6);
    squares[55] = new Pawn(1, 1, 7, 6);
    squares[8] = new Pawn(2, -1, 0, 1);
    squares[9] = new Pawn(2, -1, 1, 1);
    squares[10] = new Pawn(2, -1, 2, 1);
    squares[11] = new Pawn(2, -1, 3, 1);
    squares[12] = new Pawn(2, -1, 4, 1);
    squares[13] = new Pawn(2, -1, 5, 1);
    squares[14] = new Pawn(2, -1, 6, 1);
    squares[15] = new Pawn(2, -1, 7, 1);
    //initialize Rooks
    squares[56] = new Rook(1, 0, 7);
    squares[63] = new Rook(1, 7, 7);
    squares[0] = new Rook(2, 0, 0);
    squares[7] = new Rook(2, 7, 0);
    //initialize Knights
    squares[57] = new Knight(1, 1, 7);
    squares[62] = new Knight(1, 6, 7);
    squares[1] = new Knight(2, 1, 0);
    squares[6] = new Knight(2, 6, 0);
    //initialize Bishops
    squares[58] = new Bishop(1, 2, 7);
    squares[61] = new Bishop(1, 5, 7);
    squares[2] = new Bishop(2, 2, 0);
    squares[5] = new Bishop(2, 5, 0);
    //initialize Queen
    squares[59] = new Queen(1, 3, 7);
    squares[3] = new Queen(2, 3, 0);
    //initialize King
    squares[60] = new King(1, 4, 7);
    squares[4] = new King(2, 4, 0);

    return squares
}

export default initializeBoard;
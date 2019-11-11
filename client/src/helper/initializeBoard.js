import pieces from '../pieces'

const { King, Queen, Bishop, Knight, Rook, Pawn } = pieces;

const initializeBoard = () => {
    //create a null array
    const squares = Array(64).fill(null)
    //initialize Pawns
    squares[48] = new Pawn(1,1);
    squares[49] = new Pawn(1,1);
    squares[50] = new Pawn(1,1);
    squares[51] = new Pawn(1,1);
    squares[52] = new Pawn(1,1);
    squares[53] = new Pawn(1,1);
    squares[54] = new Pawn(1,1);
    squares[54] = new Pawn(1,1);
    squares[55] = new Pawn(1,1);
    squares[8] = new Pawn(2,-1);
    squares[9] = new Pawn(2,-1);
    squares[10] = new Pawn(2,-1);
    squares[11] = new Pawn(2,-1);
    squares[12] = new Pawn(2,-1);
    squares[13] = new Pawn(2,-1);
    squares[14] = new Pawn(2,-1);
    squares[15] = new Pawn(2,-1);
    //initialize Rooks
    squares[56] = new Rook(1);
    squares[63] = new Rook(1);
    squares[0] = new Rook(2);
    squares[7] = new Rook(2);
    //initialize Knights
    squares[57] = new Knight(1);
    squares[62] = new Knight(1);
    squares[1] = new Knight(2);
    squares[6] = new Knight(2);
    //initialize Bishops
    squares[58] = new Bishop(1);
    squares[61] = new Bishop(1);
    squares[2] = new Bishop(2);
    squares[5] = new Bishop(2);
    //initialize Queen
    squares[59] = new Queen(1);
    squares[3] = new Queen(2);
    //initialize King
    squares[60] = new King(1);
    squares[4] = new King(2);

    return squares
}

export default initializeBoard;
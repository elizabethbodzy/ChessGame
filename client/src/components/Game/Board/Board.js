import React from 'react';
import Square from '../Square/Square';
import Piece from '../Piece/Piece';
import initializeBoard from '../../../helper/initializeBoard';

class Board extends React.Component {

    renderSquare(i, item) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const black = (x + y) % 2 === 1;
        const piece = item || {icon:null}
        return (
            <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
                <Square black={black}><Piece icon={piece.icon}/></Square>
            </div>
        )
    }



    render() {
        const arr = initializeBoard();
        const squares = [];

        for (let i = 0; i < arr.length; i++) {
            squares.push(this.renderSquare(i,arr[i]))
        }


        return (
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '500px',
                    height: '500px'
                }}>
                {squares}
            </div>
        )
    }
}

export default Board;
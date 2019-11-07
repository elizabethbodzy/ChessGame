import React from 'react';
import Square from '../Square/Square'

class Board extends React.Component {

    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const black = (x + y) % 2 === 1;
        return (
            <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
                <Square black={black}></Square>
            </div>
        )
    }

    render() {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i))
        };

        return (
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '600px',
                    height: '600px',
                    marginLeft: '50px',
                    border: '1px solid black'
                }}>
                    {squares}
                </div>
        )
    }
}

export default Board;
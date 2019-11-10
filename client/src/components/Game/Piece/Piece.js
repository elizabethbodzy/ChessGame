import React from 'react';

class Piece extends React.Component {

    render() {
        return (
            <>
                <img src={this.props.icon} alt={this.props.label}></img>
            </>
        )
    }
}

export default Piece;
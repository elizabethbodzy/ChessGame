import React from 'react';

class Piece extends React.Component {

    render() {
        return (
            <>
                <img src={this.props.icon}></img>
            </>
        )
    }
}

export default Piece;
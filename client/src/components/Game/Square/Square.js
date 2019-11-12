import React from 'react';

class Square extends React.Component {

    color = this.props.black ? 'brown' : 'white'
    render() {
        return (
            <div
                style={{
                    backgroundColor: this.color,
                    height: '100%',
                    width: '100%'
                }}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Square;
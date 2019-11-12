import React from 'react';
// import { url } from 'inspector';

class Square extends React.Component {

<<<<<<< HEAD
    color = this.props.black ? "url('./images/dark-wood.jpg')" : "url('./images/light-wood.jpg')"
=======
    color = this.props.black ? 'brown' : 'white'
>>>>>>> master
    render() {
        return (
            <div
                style={{
                    backgroundImage: this.color,
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
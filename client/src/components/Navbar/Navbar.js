import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";

class Navbar extends Component {
    
    state = { 
        activeItem: "home",
        navigate: false
     };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    handleLogOut = () => {
        localStorage.clear('jwtToken');
        this.setState({ navigate: true });
        window.location.href = '/';
    };

    componentDidMount () {
        document.body.style.height = "inherit";
    };

    render() {
        const { activeItem } = this.state;

        return (
            <div style={{ marginTop: 0, marginBottom: 30 }}>
                <Menu inverted style={{ borderRadius: 0, fontFamily: 'Montserrat, sans-serif' }}>
                    <Menu.Item>
                        <Image src="./images/header-logo.jpg" style={{ width: 50, height: 50 }} />
                    </Menu.Item>

                    <Menu.Item
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="messages"
                        active={activeItem === "messages"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="profile"
                        active={activeItem === "profile"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="signout"
                        active={activeItem === "sign out"}
                        onClick={this.handleLogOut}
                    />
                </Menu>
            </div>
        );
    }
}

export default Navbar;
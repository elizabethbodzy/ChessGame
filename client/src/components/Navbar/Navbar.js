import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import axios from 'axios';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: "home"
        };
    };

    componentDidMount() {
        document.body.style.height = 'inherent';
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    handleLogOut = () => {
        axios
            .get("/auth/logout")
            .then(res => {
                localStorage.removeItem("jwtToken");
                this.setState({
                    user: {},
                    logginIn: false
                });
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu inverted>
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

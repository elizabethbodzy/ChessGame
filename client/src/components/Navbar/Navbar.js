import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";




class Navbar extends Component {
    
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    componentDidMount () {
        document.body.style.height = "inherit"
        document.body.style.marginTop = "100px"

    }

    render() {
        const { activeItem } = this.state;

        // handleLogOut = () => {
        //     axios
        //         .get("/auth/logout")
        //         .then(res => {
        //             localStorage.removeItem("jwtToken");
        //             this.setState({
        //                 user: {},
        //                 logginIn: false
        //             });
        //             window.location.reload();
        //         })
        //         .catch(err => console.log(err));
        // };

        

        return (
            <Menu inverted>
               <Menu.Item>
                    <Image src="./images/header-logo.jpg" style={{width:50}}/>
                </Menu.Item>

                <Menu.Item
                    name="home " 
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
        );
    }
}

export default Navbar;

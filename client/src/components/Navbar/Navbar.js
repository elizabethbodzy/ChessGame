import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

 class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        
      <Menu inverted>
          <Menu.Item>
          <img src='./images/header-logo.jpg' />   
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        
        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
          
         
        />
        <Menu.Item
          name='saved'
          active={activeItem === 'saved games'}
          onClick={this.handleItemClick}
          
         
        />
        <Menu.Item
          name='signout'
          active={activeItem === 'sign out'}
          onClick={this.handleItemClick}
        />
      
      </Menu>

      
    )
  }
}

export default Navbar;

import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class NavBar extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Menu style={{ cursor: 'pointer' }} position='right'>
          { this.props.user ?
            <Menu.Item name='logout' onClick={this.props.logoutUser} /> :
            <Menu.Item name='login' />
          }
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
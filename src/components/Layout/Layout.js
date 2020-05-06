import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideMenu from '../Navigation/SideMenu/SideMenu';
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideMenu: true
  }

  handleCloseSideMenu = () => {
    this.setState({ showSideMenu: false });
  }

  render () {
    return (
      <Aux>
        <Toolbar />
        <SideMenu
          show={this.state.showSideMenu}
          onClose={this.handleCloseSideMenu}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
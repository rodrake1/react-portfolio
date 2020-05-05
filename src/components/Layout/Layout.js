import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideMenu from '../Navigation/SideMenu/SideMenu';
import classes from './Layout.module.css';

const layout = props => (
  <Aux>
    <Toolbar />
    <SideMenu />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
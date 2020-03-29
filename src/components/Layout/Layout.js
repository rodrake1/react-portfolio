import React from 'react';
import Aux from '../../hoc/Auxiliary';
import { Content } from './Layout.module.css';

const layout = props => (
  <Aux>
    <header>Toolbar, SideMenu, Backdrop</header>
    <main className={Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
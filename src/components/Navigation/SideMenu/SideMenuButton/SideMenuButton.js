import React from 'react';
import classes from './SideMenuButton.module.css';

const sideMenuButton = props => (
  <div
    className={classes.SideMenuButton}
    onClick={props.onOpen}
  >
    <div />
    <div />
    <div />
  </div>
);

export default sideMenuButton;
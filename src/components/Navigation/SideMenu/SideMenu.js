import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideMenu.module.css';

const sideMenu = props => {
  return (
    <div className={classes.SideMenu}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default sideMenu;
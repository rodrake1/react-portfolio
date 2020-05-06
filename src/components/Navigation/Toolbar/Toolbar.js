import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import SideMenuButton from '../SideMenu/SideMenuButton/SideMenuButton';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <SideMenuButton  onOpen={props.onOpenSideMenu} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
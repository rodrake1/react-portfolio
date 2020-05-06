import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';
import classes from './SideMenu.module.css';

const sideMenu = props => {
  const sideMenuClasses = [
    classes.SideMenu,
    props.show ? classes.Open : classes.Close
  ].join(' ');

  return (
    <Aux>
      <Backdrop
        show={props.show}
        onClick={props.onClose}
      />
      <div className={sideMenuClasses}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default sideMenu;
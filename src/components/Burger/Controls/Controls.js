import React from 'react';
import Control from './Control/Control';
import classes from './Controls.module.css';

const initialControls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const controls = props => (
  <div className={classes.Controls}>
    {initialControls.map(control => (
      <Control
        key={control.label}
        label={control.label}
        onAdd={_ => props.onAddIngredient(control.type)}
      />
    ))}
  </div>
);

export default controls;
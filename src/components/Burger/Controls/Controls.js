import React from 'react';
import Control from './Control/Control';
import classes from './Controls.module.css';

const buildControls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const controls = props => (
  <div className={classes.Controls}>
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
    {buildControls.map(control => (
      <Control
        key={control.label}
        label={control.label}
        disabled={props.disableControls[control.type]}
        onAdd={_ => props.onAddIngredient(control.type)}
        onRemove={_ => props.onRemoveIngredient(control.type)}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
    >
      ORDER NOW
    </button>
  </div>
);

export default controls;
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
        onAdd={() => props.onAddIngredient(control.type)}
        onRemove={() => props.onRemoveIngredient(control.type)}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.onPurchase}
    >
      ORDER NOW
    </button>
  </div>
);

export default controls;
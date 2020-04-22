import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button';

const order = props => {
  const ingredients = props.ingredients;
  const ingredientsList = [];
  for (let name in ingredients) {
    if (ingredients[name]) {
      const ingredient = (
        <li key={name}>
          <span style={{ textTransform: 'capitalize' }}>
            {name}: {ingredients[name]}
          </span>
        </li>
      );
      ingredientsList.push(ingredient);
    }
  }

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsList}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button
        type='Danger'
        onClick={props.onPurchaseCancel}
      >
        CANCEL
      </Button>
      <Button
        type='Success'
        onClick={props.onPurchaseContinue}
      >
        CONTINUE
      </Button>
    </Aux>
  );
};

export default order;
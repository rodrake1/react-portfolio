import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';

const PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    price: 4
  }

  addIngredient = type => {
    const amount = this.state.ingredients[type] + 1;
    const price = this.state.price + PRICES[type];
    this.updateState(type, amount, price);
  }

  removeIngredient = type => {
    const canRemoveIngredient = !!this.state.ingredients[type];
    if (canRemoveIngredient) {
      const amount = this.state.ingredients[type] - 1;
      const price = this.state.price - PRICES[type];
      this.updateState(type, amount, price);
    }
  }

  updateState = (type, amount, price) => {
    const newState = {
      ...this.state,
      ingredients : {
        ...this.state.ingredients,
        [type]: amount
      },
      price
    }
    this.setState(newState);
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Controls
          price={this.state.price}
          ingredients={{ ...this.state.ingredients }}
          onAddIngredient={this.addIngredient}
          onRemoveIngredient={this.removeIngredient}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
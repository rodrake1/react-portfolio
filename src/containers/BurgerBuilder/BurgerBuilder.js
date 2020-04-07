import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import Order from '../../components/Burger/Order/Order';

const BASE_PRICE = 4;

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
    price: BASE_PRICE,
    purchasable: false
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
      price,
      purchasable: price > BASE_PRICE
    };
    this.setState(newState);
  }

  render () {
    const disableControls = { ...this.state.ingredients };
    for (let ingredient in disableControls) {
      disableControls[ingredient] = disableControls[ingredient] === 0;
    }

    return (
      <Aux>
        <Modal>
          <Order ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <Controls
          price={this.state.price}
          ingredients={{ ...this.state.ingredients }}
          onAddIngredient={this.addIngredient}
          onRemoveIngredient={this.removeIngredient}
          disableControls={disableControls}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
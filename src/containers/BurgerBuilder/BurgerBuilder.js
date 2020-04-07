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
    purchasable: false,
    purchasing: false
  }

  handleIngredientAdd = type => {
    const amount = this.state.ingredients[type] + 1;
    const price = this.state.price + PRICES[type];
    this.updateState(type, amount, price);
  }

  handleIngredientRemove = type => {
    const canRemoveIngredient = !!this.state.ingredients[type];
    if (canRemoveIngredient) {
      const amount = this.state.ingredients[type] - 1;
      const price = this.state.price - PRICES[type];
      this.updateState(type, amount, price);
    }
  }

  handlePurchase = () => {
    this.setState({ purchasing: true });
  }

  handlePurchaseCancel = () => {
    this.setState({ purchasing: false });
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
    const controlsStatus = { ...this.state.ingredients };
    for (let ingredient in controlsStatus) {
      controlsStatus[ingredient] = controlsStatus[ingredient] === 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          onClose={this.handlePurchaseCancel}
        >
          <Order ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <Controls
          price={this.state.price}
          ingredients={{ ...this.state.ingredients }}
          controlsStatus={controlsStatus}
          purchasable={this.state.purchasable}
          onIngredientAdd={this.handleIngredientAdd}
          onIngredientRemove={this.handleIngredientRemove}
          onPurchase={this.handlePurchase}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
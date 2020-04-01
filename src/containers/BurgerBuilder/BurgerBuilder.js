import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 2,
      meat: 0
    }
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Controls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
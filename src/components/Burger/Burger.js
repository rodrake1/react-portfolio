import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const burger = props => {
  const ingredientNames = Object.keys(props.ingredients);

  const getIngredients = name => {
    const quantity = props.ingredients[name];
    const ingredients = [];
    for (let i = 0; i < quantity; i++) {
      ingredients.push(<Ingredient key={i} type={name} />);
    }
    return ingredients;
  };

  let ingredients = ingredientNames.flatMap(getIngredients);

  if (!ingredients.length) {
    ingredients = 'Please start adding ingredients!'
  }

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {ingredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
}

export default burger;
import React from 'react';
import { withRouter } from "react-router-dom";
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // necessary to transform object to array to use map
    let transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    return <BurgerIngredient key={igKey+i} type={igKey} />;
                });
            })
            .reduce((acc, el) => {
                return acc.concat(el);
            }, []);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start adding Ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

// using withRouter to get router props
export default withRouter(burger);
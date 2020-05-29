import React, { Component } from 'react';
import Aux from "../../../hoc/Aux/Aux";
// import classes from "./Modal.module.css";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('[OrderSumarry wilUpdate]');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: <b>{this.props.price.toFixed(2)}</b></p>
                <p>Continue to checkout:</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
    
}

export default OrderSummary;
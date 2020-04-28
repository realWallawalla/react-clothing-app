import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action'


import './cart-dropdown.styles.scss';

const Cart = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                //truthy if gt than 0
                cartItems.length ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item}></CartItem>
                    ))
                    : (
                        <span className="empty-message">Your cart is empty</span>
                    )}
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)
//cart is on state and cartItems is on cart.
//cart selector make sure cart component do not rerender when changes does not concern cart
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));
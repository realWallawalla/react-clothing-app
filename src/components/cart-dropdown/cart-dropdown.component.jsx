import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const Cart = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item =>
                    <CartItem key={item.id} item={item}></CartItem>)
            }
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)
//cart is on state and cartItems is on cart.
//cart selector make sure cart component do not rerender when changes does not concern cart
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(Cart);
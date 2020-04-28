import { createSelector } from 'reselect';

//reaseon to use createSelector from reselect is that you get a memoization on the value.
//input selector. gets whole state and returns a slice of it.
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumaletedQuantity, cartItem) => accumaletedQuantity + cartItem.quantity, 0
    )
)
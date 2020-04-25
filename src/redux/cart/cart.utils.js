
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        ) // we need to return a new obeject for react to update state. cant just change propery on same object.

    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }] //if cartItemToAdd is new, attach quantity 1 to it and return with rest of items.
}
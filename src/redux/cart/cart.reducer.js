import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => { //default value eq. if state is undefined then use initalstate.
    //every action will reach every reducer. therefore return state as defualt.
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state;
    }
}

export default cartReducer;
import CartActionTypes from './cartTypes';
import { addItemToCart } from './cartUtils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                //cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
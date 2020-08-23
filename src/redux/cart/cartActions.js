import CartActionTypes from './cartTypes';

export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const deleteItem = item => ({
    type: CartActionTypes.DELETE_ITEM,
    payload: item
})
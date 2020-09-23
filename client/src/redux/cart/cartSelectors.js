import { createSelector } from 'reselect';

//Input Selector - function that gets the whole state and just returns a slice of it
const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce( (accumulatedQuantity, cartItem) => (
        cartItem.quantity + accumulatedQuantity
    ), 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce( (accumulatedQuantity, cartItem) => (
        cartItem.quantity * cartItem.price + accumulatedQuantity
    ), 0)
)
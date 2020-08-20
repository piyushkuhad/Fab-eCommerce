export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const exitsingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToAdd.id
    )

    if(exitsingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemsToAdd.id ? 
            {...cartItems, quantity: cartItem.quantity + 1} :
            cartItems
        )
    }

    return [...cartItems, {...cartItemsToAdd, quantity: 1}]

}
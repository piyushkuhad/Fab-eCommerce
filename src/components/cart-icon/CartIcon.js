import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = ({ toggleCart, itemCount }) => {
    return(
        <div className="cart-icon" onClick={() => toggleCart()}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapStateToProps = (state) => ({
    
    // itemCount: cartItems.reduce( (accumulatedQuantity, cartItem) => (
    //     cartItem.quantity + accumulatedQuantity
    // ), 0)
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
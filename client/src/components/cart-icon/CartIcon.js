import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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

const mapStateToProps = createStructuredSelector({
    
    // itemCount: cartItems.reduce( (accumulatedQuantity, cartItem) => (
    //     cartItem.quantity + accumulatedQuantity
    // ), 0)
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
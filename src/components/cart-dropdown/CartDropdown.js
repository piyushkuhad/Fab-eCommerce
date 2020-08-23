import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCart } from '../../redux/cart/cartActions';
import CartItem from '../cart-item/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length > 0 ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton 
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCart());
                }} 
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
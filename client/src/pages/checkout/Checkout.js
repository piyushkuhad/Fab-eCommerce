import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems , selectCartTotal} from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-checkout-button/StripeCheckoutButton';
import './Checkout.scss';

const Checkout = ({ cartItems, total }) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}  />
                ))
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use following test credit card for payments (<i>VISA</i>)*
                <br />
                Card No.: 4242 4242 4242 4242 | Expiry: Any Future Date | CVV: 123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);
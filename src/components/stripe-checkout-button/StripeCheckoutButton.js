import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HJdV8LjvWVfxgdAYQOXKhERKaTgb240zOvPWkwbLrM4OnAQO5Z40EQsESv0usmZc3OH8y46szNcfW4F4FIBdOnh00eZ9WDyhi';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name="Fab Ecomm Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
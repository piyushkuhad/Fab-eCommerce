import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HJdV8LjvWVfxgdAYQOXKhERKaTgb240zOvPWkwbLrM4OnAQO5Z40EQsESv0usmZc3OH8y46szNcfW4F4FIBdOnh00eZ9WDyhi';

  const onToken = (token) => {
    // console.log(token);
    // alert('Payment Successful');
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful!!');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Fab Ecomm Ltd."
      billingAddress
      shippingAddress
      //image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

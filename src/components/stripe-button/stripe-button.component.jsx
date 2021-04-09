import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successfull');
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IdrZ8SB88R8oijTQKehNspnpybnQ6ke8ZrCxSFQNidSssNCFQuqQ9G6bSWH5ePd0g3LCjCbrlL751Yl6mwIfSj8009FDSeTNX';
    
    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN clothing'
        billingAddress
        shippingAddress
        image='https://raw.githubusercontent.com/Dimple13/E-commerce-Website/2c867317a7e38c63b2c5ce3b30dcebf0d3326230/public/crown.svg'
        description={`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
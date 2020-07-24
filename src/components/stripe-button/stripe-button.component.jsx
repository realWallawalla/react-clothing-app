import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripes = price * 100;
    const publishableKey = 'pk_test_51H8OjELBla0IKxNEyu3D1DghoMmLWgLTkHrniZ6n9RzVDdkusCAshBI5z7nlc1EryyWdDtUhc8mYWnsz8aCEFDbK00op5sPosM'

    const onToken = token => {
        console.log(token);
        alert('Paymrny Successful');
    }
    return(
        <StripeCheckout 
            label='Pay now'
            name='react-clothing-app'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripes}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const Payment = () => {

    const onToken =(token)=>{
        console.log(token)
    }
    return (
        <div className='mt-30 bg-orange-200 h-60'>
            <StripeCheckout name="Dhanachal" image="https://dhanachal.in/static/media/logo.4a3ce024904b9da61365.png" 
            amount={1}
            token={onToken}
            billingAddress
            shippingAddress
            stripeKey="pk_test_51MIp02SBO84qfC97qcDkXdfgmMdENrwomNb8otsM7zFKg8JPFGUT3rTFZ5lwfOgQFaFivc5Moq7bLYreqdO6gsHB00xzoYfWd8"
            >
                <button className='p-10 bg-red-500 ' >Pay</button>
            </StripeCheckout>
            
        </div>
    );
};

export default Payment;
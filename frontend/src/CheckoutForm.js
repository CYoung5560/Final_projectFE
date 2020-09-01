import React from 'react';
import ReactDOM from 'react-dom';
import { ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './CheckoutCardStyles.css';

/*
- import CheckoutForm into file using the form
- call loadStripe outside of components render to avoid recreating the Stripe obj on
  every render
    const stripePromise = loadStripe("pkey");
        - pkey = Publishable Key (found on Stripe user account API keys)
return (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
)
*/
const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

class CheckoutCardForm extends React.Component {

    getToken = () => {
        const token = document.cookie.split('; ')
            .find(row => row.startsWith('token')).split('=')[1];
        return token;
    }

    handleSubmit = async (event) => {
        console.log("Submit button here");
        event.preventDefault(); // stop page refresh and submission

        const { stripe, elements } = this.props;

        // console.log(elements.getElement());

        if (!stripe || !elements) {
            // Stripe.js not yet loaded
            // disable form submission until loaded
            return;
        }

        const token = this.getToken();
        console.log(token);
        fetch('http://localhost:8000/payment', {
            method: "POST",
            mode: "cors",
            // credentials: "include",
            headers: {
                'Authorization': token
            }
        }).then((response) => response.json())
            .then((response) => {
                console.log(response);
                return response;
            })
            .then(({ client_secret, username }) => {
                stripe.confirmCardPayment(client_secret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: username
                        }
                    }
                }).then((result) => {

                    if (result.error) {
                        console.log(result.error.message);
                    } else {
                        // Payment processed
                        if (result.paymentIntent.status === 'succeeded') {
                            // Show success message
                            console.log("success");
                        }
                    }
                });
            }).catch(error => console.log(error));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='container'>
                <label className='w-100'>
                    Card details
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </label>
                <button disabled={!this.props.stripe} >Confirm order</button>
            </form>
        )
    }
}

export default function CheckoutForm() {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => {
                return <CheckoutCardForm stripe={stripe} elements={elements} />
            }}
        </ElementsConsumer>
    );
}
import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { makeStyles } from '@material-ui/core/styles';
import CardInput from './CardInput';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: '35vh auto',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    },
    button: {
        margin: '2em auto 1em',
    },
});

function StripeMain({ handleDonation }: any) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmitPay = async (event: any) => {
        if (!stripe || !elements) {
            return;
        }

        const res = await axios.post('http://localhost:8181/stripePayment', { email: email, name: name });

        const clientSecret = res.data.client_secret;

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)!,
                billing_details: {
                    email: email,
                    name: name,
                },
            },
        });

        if (result.error) {
            // Show error to  customer (e.g., insufficient funds)
            console.log(result.error.message);
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                // Show a success message to  customer
                console.log('Money is in the bank!');
            }
        }
    };

    const handleSubmitSub = async (event: any) => {
        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)!,
            billing_details: {
                email: email,
                name: name,
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            const res = await axios.post('http://localhost:8181/stripeSubscription', {
                payment_method: result.paymentMethod.id,
                email: email,
            });
            // eslint-disable-next-line camelcase
            const { client_secret, status } = res.data;

            if (status === 'requires_action') {
                stripe.confirmCardPayment(client_secret).then(function (result) {
                    if (result.error) {
                        // Display error message in UI.
                        // The card was declined (i.e. insufficient funds, card has expired, etc)
                        console.log('There was an issue!');
                        console.log(result.error);
                    } else {
                        // Show a success message to customer
                        console.log('You got the money!');
                    }
                });
            } else {
                // Show a success message to customer
                console.log('You got the money!');
            }
        }
    };

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <TextField
                    label="Email"
                    id="outlined-email-input"
                    margin="normal"
                    variant="outlined"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Name"
                    id="outlined-name-input"
                    margin="normal"
                    variant="outlined"
                    type="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
                <CardInput />
                <div className={classes.div}>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmitPay}>
                        Pay {handleDonation}
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmitSub}>
                        Subscription
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default StripeMain;

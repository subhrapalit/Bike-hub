import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51Jy7XmK0OQ7UY2quWjN15eZzLA2NWd8QFiQwUBLOSXQIEyR7LVTsmiuLSdSfOgi15isxQJyiONIP1cTYg5oqdLLd00MAE81Pxd')

const Payment = () => {
    const { orderId } = useParams();
    const [orders, setOrders] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${orderId}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orderId]);
    return (
        //Payment section
        <div>
            <h3>Make Payment for: {orders.product} </h3>
            <h4>Pay (Tk.):  {orders.price}/- </h4>
            {orders?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    orders={orders}
                />
            </Elements>}
        </div>
    );
};

export default Payment;
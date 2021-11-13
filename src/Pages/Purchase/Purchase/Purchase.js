import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Purchase.css'

const Purchase = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://obscure-reaches-98124.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks for placing order!!!');
                    reset();
                }
            })
    }
    const { user } = useAuth();
    const { productId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://obscure-reaches-98124.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [productId])
    return (

        //Display user info.
        <div>

            <div className='ms-3'>
                <h1 className='text-danger'>Confirm Your Booking</h1>
                <h2 className='text-success'>Welcome: {user?.displayName} </h2>
                <p className='text-primary fw-bolder'> Your Email is: {user.email}</p>

            </div>

            {/* Display ordered product details */}
            <div>
                <h3>Product Details: <span className='text-primary'>{products.name}</span> </h3>
                <img src={products.img} alt="" />
                <p className='fw-bolder'>{products.description}</p>
                <p className='fw-bolder'>{products.detail}</p>
                <h5>Price Per Piece: {products.price} Tk.</h5>
            </div>


            {/* Order confirmation form */}

            <div>
                <div className='booking pt-5'>
                    <h1 className='text-danger'>Fill to Confirm Order </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input type="number" {...register("contact")} placeholder="Your Contact Number" />
                        <input type="number" {...register("amount")} placeholder="Number of Units" />
                        <input defaultValue={products.name} {...register("product", { required: true })} />


                        <input type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Purchase;
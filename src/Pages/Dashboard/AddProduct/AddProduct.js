import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    //Post New Added product data
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://obscure-reaches-98124.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('New Product Added!!!');
                    reset();
                }
            })

    }
    return (
        //Add new product
        <div className="add-product">
            <h2>Add New Offer</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="number" {...register("id")} placeholder="Id" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <textarea {...register("detail")} placeholder="Detail" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
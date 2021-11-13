import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Review.css'

const Review = () => {
    //Post New Added data
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://obscure-reaches-98124.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks for your feedback!!!');
                    reset();
                }
            })

    }

    return (
        //Add review & rating

        <div className="add-review">
            <h2>Provide Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <textarea {...register("review")} placeholder="Review" />
                <input type="number" {...register("rating")} placeholder="Rating out of 5" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;
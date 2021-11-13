import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://obscure-reaches-98124.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (

        //Display reviews & ratings


        <div id='reviews'>
            <div className='mx-5 px-5'>
                <h2 className='text-success mt-5'>Reviews</h2>
                <div className='review-container'>
                    {
                        reviews.map(review => <div
                            key={review._id}>
                            <Card className='service' style={{ width: '18rem' }}>

                                <Card.Body>

                                    <Card.Text>
                                        " {review.review} "<br />
                                        <Rating name="read-only" value={review.rating} readOnly />
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Reviews;
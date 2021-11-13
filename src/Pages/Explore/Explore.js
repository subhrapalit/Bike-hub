import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Home/Products/Products.css'

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://obscure-reaches-98124.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (

        //Display all the products
        <div>
            <h2>Our Products</h2>
            <div className='product-container px-5'>
                {
                    products.map(product => <div
                        key={product._id}>

                        <Card className='service' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title style={{ color: 'crimson' }}>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                    <br />
                                    <h5> Price: {product.price}</h5>
                                </Card.Text>

                            </Card.Body>
                            <Link to={`/purchase/${product._id}`}><Button variant="info">Purchase Now!</Button></Link>
                        </Card>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Explore;
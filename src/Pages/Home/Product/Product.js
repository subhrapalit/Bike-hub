import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, img } = product;
    return (
        //Display products in card
        <div>
            <Card className='service' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{ color: 'crimson' }}>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/purchase/${_id}`}><Button variant="info">Purchase Now!</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Product;
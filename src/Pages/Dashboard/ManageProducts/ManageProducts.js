import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card } from 'react-bootstrap';
import '../../Home/Products/Products.css'


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://obscure-reaches-98124.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    //Delete product
    const handleDelete = id => {
        const url = `https://obscure-reaches-98124.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Sure to Delete This Product?')
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);

                }

            })

    }
    return (
        //Display all products to admin
        <div>
            <h2>Manage Products</h2>
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
                                </Card.Text>

                            </Card.Body>
                            <Button onClick={() => handleDelete(product._id)} variant="contained" startIcon={<DeleteIcon />}>Delete Product</Button>
                        </Card>

                    </div>)
                }
            </div>
        </div>
    );

};

export default ManageProducts;
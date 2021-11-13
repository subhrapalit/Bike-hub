import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://obscure-reaches-98124.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        //Display 6 products in home
        <div id='products'>
            <h2 className='text-danger mt-5'>Our Products</h2>
            <div className="product-container px-5">
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;
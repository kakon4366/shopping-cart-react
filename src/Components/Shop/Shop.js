import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    return (
        <div className='mycontainer'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            
        </div>
    );
};

export default Shop;
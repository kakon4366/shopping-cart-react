import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Header from '../Header/Header';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // add to cart handler
    const addToCartHandler = product => {
        let newCart = [];
        newCart = [...cart, product]
        setCart(newCart);
    }

    console.log(cart);
    
    return (
        <div>
            <Header cart={cart}></Header>
            <div className='mycontainer'>
                <div className='products-container'>
                    {
                        products.map(product => <Product addToCartHandler={addToCartHandler} key={product.id} product={product}></Product>)
                    }
                </div>
                
            </div>
        </div>
        
    );
};

export default Shop;
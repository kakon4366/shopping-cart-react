import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    
    return (
        <div>
            <h1>This is shop</h1>
        </div>
    );
};

export default Shop;
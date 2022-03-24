import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {title, image, price, rating, description, category} = product;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={image} alt="" />
            </div>
            <h2>{title}</h2>
        </div>
    );
};

export default Product;
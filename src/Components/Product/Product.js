import React from 'react';

const Product = ({product}) => {
    const {title, image, price, rating, description, category} = product;
    return (
        <div className='product'>
            <h2>{title}</h2>
            <img src={image} alt="" />
        </div>
    );
};

export default Product;
import React from 'react';
import './Product.css';

const Product = ({product}) => {
    console.log(product);
    const {title, image, price, rating, description, category} = product;
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={image} alt="" />
            </div>
            <h3 title={title}>{title}</h3>
            <h4>Price: {price}</h4>
            <p className='product-description'>{description}</p>
            <p className='rating'>Rating: {rating.rate} ({rating.count})</p>
            <button className='add-to-cart-button'>Add To Cart</button>
        </div>
    );
};

export default Product;
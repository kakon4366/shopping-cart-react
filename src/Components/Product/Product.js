import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {title, image, price, rating, description} = product;

    const addToCartHandler = () => {
        console.log('add to cart handler clicked');
    }

    return (
        <div className='product'>
            <div className='product-image'>
                <img src={image} alt="" />
            </div>
            <h3 title={title}>{title}</h3>
            <h4>Price: {price}</h4>
            <p className='product-description'>{description}</p>
            <p className='rating'>Rating: {rating.rate} ({rating.count})</p>
            <button onClick={addToCartHandler} className='add-to-cart-button'>Add To Cart</button>
        </div>
    );
};

export default Product;
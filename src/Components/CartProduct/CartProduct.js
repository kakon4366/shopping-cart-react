import React from 'react';
import './CartProduct.css';

const CartProduct = ({cartItem}) => {
    console.log(cartItem);
    const {image, title, price, description} = cartItem;
    return (
        <div >
            <div className='cart-product-container'>
                <div className='product-thumbnail'>
                    <img width='100%' src={image} alt="" />
                </div>
                <div className='product-details'>
                    <p className='product-title'>{title}</p>
                    <p className='product-price'>Price: $<span>{price}</span></p>
                    <p className='product-description'>{description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default CartProduct;
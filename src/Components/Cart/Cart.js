import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = ({cart}) => {

    return (
        <div className='cart-container'>
            <div>
                {
                    cart.map(cartItem => <CartProduct key={cartItem.id} cartItem={cartItem}></CartProduct>)
                }   
            </div>
            <div className='cart-calculation-container'>
                Calculation here
            </div>
        </div>
    );
};

export default Cart;
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
                <h5 className='text-center mt-2 mb-1'>Summary</h5>
                <hr className='mt-0' />
                <p>Total Products: </p>
                <p>Total Price: </p>
                <p>Tax: </p>
                <hr />
                <h6>Grand Total: </h6>


            </div>
        </div>
    );
};

export default Cart;
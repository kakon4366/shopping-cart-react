import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = ({cart}) => {
    
    console.log(cart);
    let totalPrice = 0;
    for(const product of cart){
        totalPrice += product.price;
    }
    const tax = totalPrice * 0.1;
    const grandTotal = totalPrice + tax;

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
                <p>Total Products: {cart.length}</p>
                <p>Total Price: {totalPrice}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <hr />
                <h6>Grand Total: {grandTotal.toFixed(2)}</h6>


            </div>
        </div>
    );
};

export default Cart;
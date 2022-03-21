import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-area'>
            <div className="container header">
                <a href="/">Logo</a>
                <nav className='nav-bar'>
                    <ul>
                        <li><a href="/shop">Shop</a> </li>
                        <li><a href="/cart">Cart</a><span className='cart-count'>1</span></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
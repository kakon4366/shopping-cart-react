import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-area'>
            <div className="container header">
                <a href="/">Logo</a>
                <nav className='nav-bar'>
                    <ul>
                        <li>Shop</li>
                        <li>Cart <span className='cart-count'></span></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
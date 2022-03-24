import React from 'react';
import './Header.css';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Header = ({cart}) => {
    
    return (
        <div className='header-area'>
            <div className="mycontainer header">
                <a href="/">Logo</a>
                <nav className='nav-bar'>
                    <ul>
                        <li><a href="/shop">Shop</a> </li>
                        <li >
                            <a href='/' data-bs-toggle="modal" data-bs-target="#staticBackdrop" type='button'>Cart</a>
                            <span className='cart-count'>{cart.length}</span>
                        </li>
                    </ul>
                    {/* modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog modal-custom-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            ...
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                          </div>
                        </div>
                      </div>
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Header;
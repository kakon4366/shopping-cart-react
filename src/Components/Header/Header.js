import React from 'react';
import './Header.css';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Header = () => {
    
    return (
        <div className='header-area'>
            <div className="mycontainer header">
                <a href="/">Logo</a>
                <nav className='nav-bar'>
                    <ul>
                        <li><a href="/shop">Shop</a> </li>
                        <li >
                            <a href='/' data-bs-toggle="modal" data-bs-target="#staticBackdrop" type='button'>Cart</a>
                            <span className='cart-count'>1</span>
                        </li>
                    </ul>
                    {/* modal */}
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog modal-custom-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            ...
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
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
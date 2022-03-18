import React from 'react';
import './Manubar.css';

const Manubar = (props) => {
    return (
        <div>
            <nav className='custom-navbar'>
                <div className="container row row-cols-1 row-cols-md-2 g-4  mb-3 p-2">
                    <div className="col-2">
                        <h1>My Store</h1>
                    </div>
                    <div className="col-10">
                        <ul className="d-flex justify-content-end">
                            <li className='me-4 fs-4 custom-nav'>Home</li>
                            <li className='me-4 fs-4 custom-nav'>Cart <small><sup>{props.count}</sup></small></li>
                            <li className='me-4 fs-4 custom-nav'>About</li>
                            <li className='me-4 fs-4 custom-nav'>Contract us</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Manubar;
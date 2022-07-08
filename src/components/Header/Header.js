import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" srcset="" />
            </div>
           <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage</a>
            </nav>
            
            
        </div>
    );
};

export default Header;
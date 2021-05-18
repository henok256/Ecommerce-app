import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = ({click}) => {
    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>

            </div>
            <ul className="navbar__link">
                <li>
                    <Link to="/cart" className="cart__link">  
                    <i className="fas fa-shopping-cart"></i>                    
                        Cart
                        <span className="cartlogo__bagde">0</span>                   
                    </Link>                 
                </li>
                <li>
                    <Link to="/">                     
                        Shop                
                        </Link>   
                </li>
            </ul>
        <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        </nav>
    );
}

export default Navbar;
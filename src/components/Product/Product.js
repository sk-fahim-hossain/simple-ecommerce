import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const{name, img, stock, price,seller} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    console.log(props)
    return (
        <div className="product">
           <div>
                <img src={img} alt="" />
           </div>
            
            <div>
                <h4 className="product-name"> {name}</h4>
                <p><small>Seller:{seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock. order now</small></p>
                <button 
                    onClick={()=> props.handleAddToCart(props.product)}
                    className="regular-btn"
                >{element}Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;
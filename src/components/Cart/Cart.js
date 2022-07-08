import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total += product.price
    }
    
    const shipping = 15;
    const tax = (shipping + total)/10;
    const grandTotal = (shipping + total + tax)
    return (
        <div>
            <h3>Order Summary:{cart.length}</h3>
            <h5>Item Ordered</h5>
            <br />
            <h4>total:{total}</h4>
            <p><small>shipping:{shipping}</small></p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
import React from 'react';
import { PRODUCTS } from "../../products";

export const Cart = () => {
  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
            {PRODUCTS.map(product)}
        </div>
    </div>  
    )
}

import React, { useContext } from 'react';
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../contex/shop-context";
import { CartItem } from './cart-item';
import "./cart.css"

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
            {PRODUCTS.map((product) => {
                if(cartItems[product.id] !== 0) {
                    return <CartItem data={product} />;
                }
            })}
        </div>
        <div className='checkout'>
            <p>Subtotal: ${ totalAmount }</p>
            <button>Continue shopping</button>
            <button>Checkout</button>
        </div>
    </div>  
    )
}

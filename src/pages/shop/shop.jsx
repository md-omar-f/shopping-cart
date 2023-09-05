import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from './product';

export const Shop = () => {
  return (
    <div>
        <div className="shop">
            <div className='shopTitle'>
                <h1>Shopping</h1>
            </div>
            <div className='products'>
                {PRODUCTS.map((product) => {
                    <Product />
                })}
            </div>
        </div>
    </div>
  )
}

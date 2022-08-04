import React, { useContext } from 'react'
import './checkout.scss';
import { CartItemContext } from '../../../context/CartItemContext';
import CheckoutItem from './CheckoutItem';
const Checkout = () => {
    const {cartItems}=useContext(CartItemContext);
    const cartTotal=cartItems.reduce((accumulator,item)=>accumulator+(item.price*item.qty),0);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Products</span>
        </div>
        <div className='header-block'>
        <span>Description</span>
        </div>
        <div className='header-block'>
        <span>Price</span>
        </div>
        <div className='header-block'>
        <span>Quantity</span>
        </div>
        <div className='header-block'>
        <span>Remove</span>
        </div>
      </div>
        <div>
            {
                cartItems.map((item)=>
                 <CheckoutItem key={item.id} checkoutItem={item}/>
                    )
            }
        </div>
        <span className='total'>Total:${cartTotal}</span>
        </div>
  )
}

export default Checkout
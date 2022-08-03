import React from 'react'
import './cart-item.scss';
const CartItem = ({cartItem}) => {
    const {name,qty,price,imageUrl}=cartItem
  return (
    <div className='cart-item-container'>
         <img src={imageUrl} alt="prodpic"/>
        <div className='item-details'>
        <h2 className='name'>{name}</h2>
        <div>{qty}x ${price}</div>
        </div>
    </div>
  )
}

export default CartItem
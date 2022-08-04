import React, { useContext } from 'react'
import './checkout-item.scss';
import { CartItemContext } from '../../../context/CartItemContext';
const CheckoutItem = ({checkoutItem}) => {
    const {addItemToCart,removeItemFromCart,clearItemFromCart}=useContext(CartItemContext);
  return (
    <div className='checkout-item-container'>
    <div className='image-container'>
        <img src={checkoutItem.imageUrl} alt={checkoutItem.name}/>
    </div>
       <span className='name'>{checkoutItem.name}</span>
       <span className='price'>{checkoutItem.price}</span>
       
       <span className='quantity'>
       <span onClick={()=>removeItemFromCart(checkoutItem)} className='arrow'>&#60;</span>
        {checkoutItem.qty}
        <span onClick={()=>addItemToCart(checkoutItem)} className='arrow'>&#62;</span>
        </span>
       
       <div className='remove-button' onClick={()=>clearItemFromCart(checkoutItem)}>&#10005;</div>
        </div>
  )
}

export default CheckoutItem